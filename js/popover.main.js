$('[data-toggle="popover-click"]').popover({
    html: true,
    trigger: 'click',
    placement: 'bottom',
    content: function () { return $('#popover_content_wrapper').html(); }
  });

  $(document).on('click', '#confirm', function() {
  $('[data-toggle="popover-click"]').popover("hide");
  toastr.info('You clicked "yes"!');
});

$(document).on('click', '#deny', function() {
  $('[data-toggle="popover-click"]').popover("hide");
  toastr.error('You clicked "no"!');
});
  

///to do list 
$(document).ready(
    
    function(){
        $('#button').click(
            function(){
                alert('test1');
                var toAdd = $('input[name=ListItem]').val();
                 $('#listdo').append('<li>' + toAdd + '</li>');
            });
       
       $("input[name=ListItem]").keyup(function(event){
          if(event.keyCode == 13){
            $("#button").click();
          }         
      });
      
      $(document).on('dblclick','li', function(){
        $(this).toggleClass('strike').fadeOut('slow');    
      });
      
      $('input').focus(function() {
        $(this).val('');
      });
      
      $('#listdo').sortable();  
      
    }
);