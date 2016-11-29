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

    if(urlPath == "product-details"){
        $.get('product.html', function(data){

            $('.content').html(data);
        });
    }

}

// Initial doStuff
doStuffOnUrlChange();


// change content in div.content 
$('body').on('click', '.product-link', function(){
    history.pushState(null,null,"product-details");
    doStuffOnUrlChange();
});


