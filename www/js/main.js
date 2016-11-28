//dom ready
$(function(){
  // change content in div.content 
  $('body').on('click', '.product-link', function(){
      $.get('product.html', function(data){
          $('.content').html(data);
      });
  });
});


