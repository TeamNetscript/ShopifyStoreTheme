// cart modal
var cartModal = document.getElementById("myCart");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  cartModal.style.display = "block";
} 
span.onclick = function() {
  cartModal.style.display = "none";
} 
window.onclick = function(event) {
  if (event.target == cartModal) {
    cartModal.style.display = "none";
  }
  else if (event.target == mobile_menu) {
    mobile_menu.style.display = "none";
  }
  else if (event.target == saveModal) {
    saveModal.style.display = "none";
  }
} 

// Liked products
var saveModal = document.getElementById("mySave");
var savebtn = document.getElementById("mySavebtn");
var saveclose = document.getElementsByClassName("saveClose")[0];
savebtn.onclick = function() {
  saveModal.style.display = "block";
} 
saveclose.onclick = function() {
  saveModal.style.display = "none";
}
 

// mobile menu
var mobile_menu = document.getElementById("mobileNav");
var btn1 = document.getElementById("hamButtton");
var span1 = document.getElementsByClassName("close_nav")[0];
btn1.onclick = function() {
  mobile_menu.style.display = "block";
  mobile_menu.classList.add("js-drawer-open");
  mobile_menu.classList.remove("js-drawer-close");
}
span1.onclick = function() {
  mobile_menu.classList.remove("js-drawer-open");
  mobile_menu.classList.add("js-drawer-close");
}
 

// Main slider
$('.hero_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  centerMode: false,
  focusOnSelect: true,
  cssEase: 'linear',
  fade: true,
  arrows: false
});

// Featured Products Home Page
$('.featured-item_list').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: false,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1025,
      settings: { 
        centerMode: true, 
        slidesToShow: 3
      }
    },
    {
      breakpoint: 769,
      settings: { 
        centerMode: true, 
        slidesToShow: 2
      }
    },
    {
      breakpoint: 426,
      settings: {
        centerMode: true, 
        slidesToShow: 1
      }
    }
  ]
});

// brand logo
$('.brand-logo_items').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: false,
  autoplay: true,
  arrows: false,
  focusOnSelect: false,
  responsive: [
    {
      breakpoint: 1025,
      settings: {   
        slidesToShow: 4
      }
    },
    {
      breakpoint: 769,
      settings: {  
        slidesToShow: 3
      }
    },
    {
      breakpoint: 426,
      settings: { 
        slidesToShow: 1,
        arrows: true
      }
    }
  ]
});

// featured collections
$('.featured-collection_wrapper').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: false,
  autoplay: true,
  arrows: false,
  focusOnSelect: false,
  responsive: [
    {
      breakpoint: 1025,
      settings: {   
        slidesToShow: 4
      }
    },
    {
      breakpoint: 769,
      settings: {  
        slidesToShow: 2
      }
    },
    {
      breakpoint: 426,
      settings: { 
        slidesToShow: 1,
      }
    }
  ]
});

// testimonial
$('.testimonial-content').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  autoplay: false,
  arrows: true,
  focusOnSelect: false,
  responsive: [
    {
      breakpoint: 1025,
      settings: {   
        slidesToShow: 3
      }
    },
    {
      breakpoint: 769,
      settings: {  
        slidesToShow: 2
      }
    },
    {
      breakpoint: 426,
      settings: { 
        slidesToShow: 1,
        arrows: true
      }
    }
  ]
});

$(document).ready(function() {
  var $slider = $('.testimonial-content');
  var $progressBar = $('.progress');
  var $progressBarLabel = $( '.slider__label' );
  
  $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
    var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
    
    $progressBar
      .css('background-size', calc + '% 100%')
      .attr('aria-valuenow', calc );
    
    $progressBarLabel.text( calc + '% completed' );
  }); 
});

// dropdown menu mobile
$(function() {
  $('.dropdown-toggle').click(function() {
    $(this).next('.dropdown').slideToggle();
  });

  $(document).click(function(e) {
    var target = e.target; 
    if (!$(target).is('.dropdown-toggle') && !$(target).parents().is('.dropdown-toggle')) 
      { $('.dropdown').slideUp(); }
  });
});

// dropdown menu desktop
$(function() {
  $('.dropdown-toggle_desktop').mouseover(function(){
    $(this).next('.dropdown-desktop').slideDown();
  });

  $(document).mouseleave(function() { 
    $(this).next('.dropdown-desktop').slideUp();
  });
  $(document).click(function(e) { 
    var target = e.target; 
    if (!$(target).is('.dropdown-toggle_desktop') && !$(target).parents().is('.dropdown-toggle_desktop')) 
      { $('.dropdown-desktop').slideUp(); }
  });
});

// footer menu toggle 
$('.footer-item_nav h3').click(function() { 
  $(this).next('.footer-item-toggle').slideToggle();
});

// signle product homepage
$('.product-image_carousal').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.product-image_nav'
});
$('.product-image_nav').slick({
  slidesToShow: 5,
  slidesToScroll: 0,
  asNavFor: '.product-image_carousal',
  dots: false,
  arrows: true,
  centerMode: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1025,
      settings: {   
        slidesToShow: 3
      }
    },
    {
      breakpoint: 769,
      settings: {  
        slidesToShow: 3
      }
    },
    {
      breakpoint: 426,
      settings: { 
        slidesToShow: 2,
        arrows: true
      }
    }
  ]
});

// accordian
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}