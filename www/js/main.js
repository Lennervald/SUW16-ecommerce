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

