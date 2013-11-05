var newMenuHandler = {

  init: function(){
    $('form.new_menu').submit(newMenuHandler.newMenu)
  },

  newMenu: function(e){
    e.preventDefault()
    var $addMenuForm = $(this);
    $.ajax({
      url: $addMenuForm.prop('action'),
      type: $addMenuForm.prop('method'),
      data: { name: $('#menu_name').val() }
    }).done(function(response) {
      newMenuHandler.appendMenuName(response.new_menu)
    }).fail(function() {
    })
  },

  appendMenuName: function(newMenuName) {
    $('#menu-list').append('<li>' + newMenuName + '</li>')
  }
};

$(document).ready(function(){
  newMenuHandler.init()
});
