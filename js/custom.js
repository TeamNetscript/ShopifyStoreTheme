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
  mobile_menu.style.width = "100%";
  mobile_menu.classList.add("js-drawer-open");
  mobile_menu.classList.remove("js-drawer-close");
}
span1.onclick = function() {
  mobile_menu.classList.remove("js-drawer-open");
  mobile_menu.classList.add("js-drawer-close");
  mobile_menu.style.width = "0%";
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

$('.hero_sliderx').slick({
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
    $(this).find('.dropdown-desktop').fadeIn(50);
    $('.nav_Drop_Wrapper' ).addClass( 'js-drawer-open-desktop' );
  });

  $('.dropdown-toggle_desktop').mouseleave(function() { 
    $(this).find('.dropdown-desktop').fadeOut(500);
    $('.nav_Drop_Wrapper' ).removeClass( 'js-drawer-open-desktop' );
  });
  $(document).click(function(e) {
    var target = e.target;
    if (!$(target).is('.dropdown-toggle_desktop') && !$(target).parents().is('.dropdown-toggle_desktop')) 
      {
        $('.dropdown-desktop').slideUp();
        $('.nav_Drop_Wrapper' ).removeClass( 'js-drawer-open-desktop' );
      }
  });
});

// footer menu toggle 


function footerMenu(fmenu) {
  if (fmenu.matches) {
    $('.footer-item_nav h3').click(function() {
      $(this).next('.footer-item-toggle').slideToggle();
    });
  } else { }
}
var fmenu = window.matchMedia("(max-width: 768px)");
footerMenu(fmenu);
fmenu.addListener(footerMenu);

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
      breakpoint: 2540,
      settings: {   
        slidesToShow: 5,
        centerMode: false,
      }
    },
    {
      breakpoint: 1440,
      settings: {   
        slidesToShow: 5,
        centerMode: false,
      }
    },
    {
      breakpoint: 1025,
      settings: {   
        slidesToShow: 4,
        centerMode: false,
      }
    },
    {
      breakpoint: 769,
      settings: {  
        slidesToShow: 3,
        centerMode: false,
      }
    },
    {
      breakpoint: 426,
      settings: { 
        slidesToShow: 3,
        arrows: true,
        centerMode: false,
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

// on scroll function
var $animation_elements = $('.animateToTop');
var $window = $(window);
$window.on('scroll', check_if_in_view);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('div_on_scroll');
    } else {
     
    }
  });
}

// On load animation
var $animation = $('.animate');
$window.on('load', check_if_in_load);

function check_if_in_load() {
  $animation.addClass('loadAnimate');
}