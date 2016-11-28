// Wait for the DOM to load
$(function(){

  // Bind events

  $('body').on('click','.buy-btn',function(){
    updateCart($(this), 1);
  });

  $('#shoppingCart').on('change','input', function(){
    updateCart($(this).parents('tr'), 0);
  });

  $('#shoppingCart').on('click','.remove', function(){
    $(this).parents('tr').find('input').val(0);
    updateCart($(this).parents('tr'), 0);
  });

});

// Update the cart
function updateCart(me,quantity){

    // The product
    var product = me.attr('data-product');

    // The price (divide by one to convert to a number)
    var price = me.attr('data-price') / 1;

    // Product in cart (if already existing)
    var productEl = $('#shoppingCart tr[data-product="' + product + '"]');

    // If the product already is in the cart then add the previous
    // quantity
    quantity += (productEl.find('.quantity input').val() || 0)/1;


    // Calculate row sum
    var rowSum = price * quantity;

    // Add the product if the quantity is larger than 0
    if(quantity > 0){
      if(productEl.length){
        // only update the product if it is the cart already
        productEl.find('.quantity input').val(quantity);
        productEl.find('.row-sum').text(decimals(rowSum));
      }
      else {
        // otherwise add the product to the cart
        $('#shoppingCart table').append( 
          '<tr class="product" data-product="' + product +
          '" data-price = "' + price + '">' +
          '<td>'  + product + '</td>' +
          '<td class="td-right quantity">' +
          '<input class="form-control td-right input-sm" type="number" ' +
          'min ="0" max="999" value="' + quantity + '"></td>' +
          '<td class="td-right">' + decimals(price) + ' SEK</td>' +
          '<td class="td-right row-sum">' + decimals(rowSum) + ' SEK</td>' +
          '<td class="remove"><span class="glyphicon glyphicon-remove" ' +
          'aria-hidden="true"></span> </td>' +
          '</tr>'
        );
      }
    }
    else {
      // Otherwise remove it
      productEl.remove();
    }

    // Calculate the total sum
    var totalSum = 0;
    $('#shoppingCart .row-sum').each(function(){
      var rowSum = $(this).text().replace("SEK", "") / 1;
      totalSum += rowSum;
    });

    // Output the total sum
    $('#shoppingCart .total').last().text(decimals(totalSum) + ' SEK');

    // Move the SUM row last
    $('#shoppingCart table').append( $('#shoppingCart .cart-sum') );

    // Change the looks of the cart depending on if is empty or not
    if($('#shoppingCart .product').length < 1){
      $('#shoppingCart table').hide();
      $('#shoppingCart .empty-mess').show();
      $('#shoppingCart .checkout').prop('disabled',true);

    }
    else {
      $('#shoppingCart table').show();
      $('#shoppingCart .empty-mess').hide();
      $('#shoppingCart .checkout').prop('disabled',false);
    }
}

// Make sure all numbers have two decimals
function decimals(number){
 
  // The price as a string (add empty string to number)
  // (also round to max 2 decimals - to avoid JS rounding error)
  var str = Math.round(number*100)/100 + "";
 
  // Add a decimal sign if missing
  if(str.indexOf(".") < 0 ){ str += '.'; }
 
  // How many decimals do we have?
  var numberOfDecimals = str.split('.')[1].length;
 
  // Add decimals if needed - up to two decimals
  for(var i = 0; i < 2 - numberOfDecimals; i++){
    str += "0";
  }

  return str;
}