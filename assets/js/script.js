$(document).ready(function () {

//    $("#slider1").lightSlider();

$("#slider1").lightSlider({
    autoWidth: true,
    loop: true,
    controls:true,
    vertical:false,
    prevHtml: '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
    nextHtml: '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
    onSliderLoad: function () {
      $("#slider1").removeClass("cS-hidden");
    },
  });
  $("#slider2").lightSlider({
    autoWidth: true,
    loop: true,
    controls:true,
    vertical:false,
    prevHtml: '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
    nextHtml: '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
    onSliderLoad: function () {
      $("#slider2").removeClass("cS-hidden");
    },
  });

    $("#slider4").lightSlider({
    autoWidth: true,
    loop: true,
    controls:true,
    vertical:false,
    prevHtml: '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
    nextHtml: '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
    onSliderLoad: function () {
      $("#slider4").removeClass("cS-hidden");
    },
  });

    $("#slider3").lightSlider({
    autoWidth: true,
    loop: true,
    controls:true,
    vertical:false,
    prevHtml: '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
    nextHtml: '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
    onSliderLoad: function () {
      $("#slider3").removeClass("cS-hidden");
    },
  });

// cart logic goes here

// after going to website show the previosly added cart value
if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"))
    $('.cart-value').html(`Total: Rs.${parseInt(cart.total)}`)
    }

// after clicking buy button create item
  $(".buy-btn").click((event) => {
    let item = {
      id: event.target.id,
      quantity: 1,
      price: event.target.value,
    };

    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
      let already_added = false;
      cart.items.forEach((each) => {
        if (each.id == item.id) {
            console.log(cart.total)
           cart.total = parseInt(cart.total) + parseInt(each.price);
           console.log(cart.total)
          each.quantity = each.quantity + 1;
          already_added = true;
          return;
        }
      });

      if (!already_added) {
        cart.items.push(item);
        cart.total  = parseInt(cart.total) + parseInt(item.price);
      }

      localStorage.setItem("cart", JSON.stringify(cart));
    } else {

       cart = {
    total : 0,
    items: [],
  };
      cart.items.push(item);
      cart.total = parseInt(cart.total)+parseInt(item.price)
      localStorage.setItem("cart", JSON.stringify(cart));
      console.log(cart.total)
      console.log( typeof cart.total)
    }

    //set the total price in navbar
   $('.cart-value').html(`Total: ${cart.total}`)
  });


// adding event handlers to quantity increse and decrease buttons

$('.btn-decrease').click((event)=>
{
    console.log(event.target);
    

});
$('.btn-increase').click((event)=>
{
    console.log(event.target)
    alert( "Handler for .click() called." );
});
});

