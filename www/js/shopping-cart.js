
$(function() {

    $('body').on('click', '.buy-btn', function() {
        updateCart($(this), 1);
    });

    $('#shoppingCart').on('change', 'input', function() {
        updateCart($(this).parents('tr'), 0);
    });

    $('#shoppingCart').on('click', '.remove', function() {
        $(this).parents('tr').find('input').val(0);
        updateCart($(this).parents('tr'), 0);
    });

});

// Updating the cart

function updateCart(me, quantity) {

    var image = me.attr('data-img');
    var product = me.attr('data-product');
    var price = me.attr('data-price') / 1;
    var productCheck = $('#shoppingCart tr[data-product="' + product + '"]');
    quantity += (productCheck.find('.quantity input').val() || 0) / 1;

    var rowSum = price * quantity;

    if (quantity > 0) {
        if (productCheck.length) {
            productCheck.find('.quantity input').val(quantity);
            productCheck.find('.row-sum').text(decimals(rowSum) + "SEK");
        } else {
            $('#shoppingCart table').append(
                '<tr class="product" data-product="' + product +
                '" data-price = "' + price + '">' +
                '<td class="prod-image">' +
                '<img class="shoppingCart-miniatyr" src="' + image + '"></td>' + 
                '<td>' + product + '</td>' +
                '<td class="quantity">' +
                '<input class="form-control td-right input-sm" type="number" ' +
                'min ="1" max="999" value="' + quantity + '"></td>' +
                '<td class="item-price">' + decimals(price) + ' SEK</td>' +
                '<td class="row-sum">' + decimals(rowSum) + ' SEK</td>' +
                '<td class="remove"><span class="glyphicon glyphicon-trash"></span> </td>' +
                '</tr>'
            );
        }
    } else {
        productCheck.remove();
    }

    var totalSum = 0;
    $('#shoppingCart .row-sum').each(function() {
        var rowSum = $(this).text().replace("SEK", "") / 1;
        totalSum += rowSum;
    });

    $('.total-navbar').text(decimals(totalSum) + ' SEK'); //updates the total sum in the navbar
    $('#shoppingCart .total').last().text(decimals(totalSum) + ' SEK');


    $('#shoppingCart table').append($('#shoppingCart .total-cart'));

    if ($('#shoppingCart .product').length < 1) {
        $('#shoppingCart table').hide();
        $('#shoppingCart .empty-mess').show();
        $('#shoppingCart .checkout').prop('disabled', true);

    } else {
        $('#shoppingCart table').show();
        $('#shoppingCart .empty-mess').hide();
        $('#shoppingCart .checkout').prop('disabled', false);
    }
}

// Fixing Decimals

function decimals(number) {
    var str = Math.round(number * 100) / 100 + "";
    if (str.indexOf(".") < 0) { str += '.'; }
    var numberOfDecimals = str.split('.')[1].length;
    for (var i = 0; i < 2 - numberOfDecimals; i++) {
        str += "0";
    }
    return str;
}