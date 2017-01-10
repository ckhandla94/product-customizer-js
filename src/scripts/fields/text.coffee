Customizer.registerField 'text',

  view: """
    
  """

  edit: """
    <%= Customizer.templates["edit/color-picker"]({rf : rf}) %>
    <%= Customizer.templates["edit/text-alignment"]({rf : rf}) %>
    <%= Customizer.templates["edit/text-style"]({rf : rf}) %>
    <% if(Customizer.options.settings.administration == true){ %>
    	<%= Customizer.templates["edit/administration"]({rf : rf}) %>
    <% } %>
  """