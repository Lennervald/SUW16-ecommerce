// change content in div.content 
$('.thumbnail').on('click', '.product-link', function(){
    $.get('product.html', function(data){
        $('.content').html(data);
    });
});
