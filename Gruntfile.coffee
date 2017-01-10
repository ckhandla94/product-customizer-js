ALL_TASKS = [ 'jst:all', 'coffeescript_concat:compile', 'jsbeautifier:default', 'coffee:all', 'concat:all', 'cssmin:dist', 'stylus:all'] #'clean:compiled'

# customizer.js must be compiled in this order:
# 1. rivets-config
# 2. main
# 3. fields js
# 4. fields templates

module.exports = (grunt) ->

  path = require('path')
  exec = require('child_process').exec
  minify = require('html-minifier').minify;

  grunt.loadNpmTasks('grunt-contrib-coffee')
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-cssmin')
  grunt.loadNpmTasks('grunt-contrib-jst')
  grunt.loadNpmTasks('grunt-contrib-stylus')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-release')
  grunt.loadNpmTasks('grunt-karma')
  grunt.loadNpmTasks('grunt-coffeescript-concat');
  grunt.loadNpmTasks("grunt-jsbeautifier");

  grunt.initConfig

    pkg: '<json:package.json>'
    srcFolder: 'src'
    compiledFolder: 'compiled'  # Temporary holding area.
    distFolder: 'dist'
    vendorFolder: 'vendor'
    testFolder: 'test'

    jst:
      all:
        options:
          namespace: 'Customizer.templates'
          prettify: true,
          processName: (filename) ->
            signalStr = "templates/" #strip extra filepath and extensions
            filename.slice(filename.indexOf(signalStr)+signalStr.length, filename.indexOf(".html"))
          processContent: (src) ->
            result = minify(src, {
              removeAttributeQuotes: false
              ignoreCustomFragments: [ /<%[\s\S]*?%>/, /<\?[\s\S]*?\?>/ ] 
              comments: true
              collapseInlineTagWhitespace: true
              collapseWhitespace: true
              minifyJS: true
              minifyCSS: true
            });
            result
        files:
          '<%= compiledFolder %>/templates.js': '<%= srcFolder %>/templates/**/*.html'

    coffeescript_concat:
      compile: 
        options: 
          includeFolders: [
            'src/includes'
          ]
        files: 
          'src/main.coffee': []

    jsbeautifier: 
      default: 
        src : ["compiled/*.js", "compiled/*.css"] 
        options:
          js: 
            indentSize: 4
          css: 
            indentSize: 4
        
    coffee:
      all:
        files:
          '<%= compiledFolder %>/scripts.js': [
            '<%= srcFolder %>/scripts/underscore_mixins.coffee'
            '<%= srcFolder %>/scripts/rivets-config.coffee'
            '<%= srcFolder %>/scripts/main.coffee'
            '<%= srcFolder %>/scripts/fields/*.coffee'
          ]

    concat:
      all:
        files:
          '<%= distFolder %>/customizer.js': '<%= compiledFolder %>/*.js'
          '<%= vendorFolder %>/js/vendor.js': [
            'header.js'
            'bower_components/ie8-node-enum/index.js'
            'bower_components/jquery-ui/ui/jquery.ui.core.js'
            'bower_components/jquery-ui/ui/jquery.ui.widget.js'
            'bower_components/jquery-ui/ui/jquery.ui.mouse.js'
            'bower_components/jquery-ui/ui/jquery.ui.draggable.js'
            'bower_components/jquery-ui/ui/jquery.ui.droppable.js'
            'bower_components/jquery-ui/ui/jquery.ui.sortable.js'
            'bower_components/nestedSortable/jquery.ui.nestedSortable.js'
            'bower_components/underscore/underscore-min.js'
            'bower_components/jquery.scrollWindowTo/index.js'
            'bower_components/underscore.mixin.deepExtend/index.js'
            'bower_components/rivets/dist/rivets.js'
            'bower_components/backbone/backbone.js'
            'bower_components/backbone-deep-model/src/deep-model.js'
            'bower_components/fabric.js/dist/fabric.min.js'
            'bower_components/fabric-customise-controls/dist/customiseControls.min.js'
            'bower_components/jspdf/dist/jspdf.min.js'
            'bower_components/spectrum/spectrum.js'
            #'bower_components/jquery-colorpicker/colorpicker.min.js'
            'bower_components/bower-webfontloader/webfont.js'
            'footer.js'
          ]

      mobile_friendly:
        files:
          '<%= distFolder %>/customizer.js': '<%= compiledFolder %>/*.js'
          '<%= vendorFolder %>/js/vendor_mobile_friendly.js': [
            'bower_components/ie8-node-enum/index.js'
            'bower_components/jquery.scrollWindowTo/index.js'
            'bower_components/underscore.mixin.deepExtend/index.js'
            'bower_components/rivets/dist/rivets.js'
            'bower_components/backbone-deep-model/src/deep-model.js'
          ]

    cssmin:
      dist:
        files:
          '<%= distFolder %>/customizer-min.css': '<%= distFolder %>/customizer.css'
          '<%= vendorFolder %>/css/vendor.css': [
            'bower_components/font-awesome/css/font-awesome.css'
            'bower_components/metro/build/css/metro-icons.min.css'
            'bower_components/spectrum/spectrum.css'
            #'bower_components/jquery-colorpicker/css/colorpicker.min.css' 
          ]

    
    stylus:
      all:
        files:
          '<%= compiledFolder %>/customizer.css': '<%= srcFolder %>/styles/**.styl'
          '<%= distFolder %>/customizer.css': '<%= compiledFolder %>/**/*.css'
      
    clean:
      compiled:
        ['<%= compiledFolder %>']
            
    uglify:
      dist:
        files:
          '<%= distFolder %>/customizer-min.js': '<%= distFolder %>/customizer.js'

    watch:
      all:
        files: ['<%= srcFolder %>/**/*.{coffee,scss,styl,html}', '<%= srcFolder %>/**/**/*.{coffee,scss,styl,html}']
        tasks: ALL_TASKS

    # To test, run `grunt --no-write -v release`
    release:
      npm: false

    karma:
      unit:
        configFile: '<%= testFolder %>/karma.conf.coffee'



  #grunt.registerTask 'default', ALL_TASKS

  grunt.registerTask('default', ALL_TASKS);
  
  grunt.registerTask 'mobile_friendly', ['jst:all', 'coffee:all', 'concat:mobile_friendly', 'stylus:all', 'clean:compiled']
  grunt.registerTask 'dist', ['cssmin:dist', 'uglify:dist']
  grunt.registerTask 'test', ['dist', 'karma']
