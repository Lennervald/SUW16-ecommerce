// listen to pop state when the user navigates (forward/backward)
window.addEventListener("popstate",doStuffOnUrlChange);

// do different stuff depending on url
var startContent = "";
function doStuffOnUrlChange(){

    // Store the initial content
    if(!startContent){
        startContent = $('.content').html();
    }

    // Read the urlPath
    var urlPath = location.pathname.substring(1);
    
    // React on different paths

    if(urlPath === "" || urlPath === "index.html"){
        $('.content').html(startContent);
    }

    if(urlPath == "product-1"){
        $.get('product-1.html', function(data){

            $('.content').html(data);
        });
    }
    if(urlPath == "product-2"){
        $.get('product-2.html', function(data){

            $('.content').html(data);
        });
    }
    if(urlPath == "product-3"){
        $.get('product-3.html', function(data){

            $('.content').html(data);
        });
    }
    if(urlPath == "product-4"){
        $.get('product-4.html', function(data){

            $('.content').html(data);
        });
    }
    if(urlPath == "product-5"){
        $.get('product-5.html', function(data){

            $('.content').html(data);
        });
    }
    if(urlPath == "product-6"){
        $.get('product-6.html', function(data){

            $('.content').html(data);
        });
    }
    if(urlPath == "product-7"){
        $.get('product-7.html', function(data){

            $('.content').html(data);
        });
    }
    if(urlPath == "product-8"){
        $.get('product-8.html', function(data){

            $('.content').html(data);
        });
    }
    if(urlPath == "accessories"){
        $.get('accessories.html', function(data){

            $('.content').html(data);
        });
    }

    // if(urlPath == "product-details"){
    //     $.get('product.html', function(data){

    //         $('.content').html(data);
    //     });
    // }

}

// Initial doStuff
doStuffOnUrlChange();


// change content in div.content 
$('body').on('click', '.product-link-1', function(){
    history.pushState(null,null,"product-1");
    doStuffOnUrlChange();
});

$('body').on('click', '.product-link-2', function(){
    history.pushState(null,null,"product-2");
    doStuffOnUrlChange();
});

$('body').on('click', '.product-link-3', function(){
    history.pushState(null,null,"product-3");
    doStuffOnUrlChange();
});

$('body').on('click', '.product-link-4', function(){
    history.pushState(null,null,"product-4");
    doStuffOnUrlChange();
});

$('body').on('click', '.product-link-5', function(){
    history.pushState(null,null,"product-5");
    doStuffOnUrlChange();
});

$('body').on('click', '.product-link-6', function(){
    history.pushState(null,null,"product-6");
    doStuffOnUrlChange();
});

$('body').on('click', '.product-link-7', function(){
    history.pushState(null,null,"product-7");
    doStuffOnUrlChange();
});

$('body').on('click', '.product-link-8', function(){
    history.pushState(null,null,"product-8");
    doStuffOnUrlChange();
});

$('body').on('click', '.accessories-link', function(){
    history.pushState(null,null,"accessories");
    doStuffOnUrlChange();
});

