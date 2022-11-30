// cart modal
var cartModal2 = document.getElementById("cartDev");
var btnCart = document.getElementById("cartOpen");
var spanCart = document.getElementsByClassName("closeCart")[0];
btnCart.onclick = function() {
  cartModal2.style.display = "block";
}
spanCart.onclick = function() {
  cartModal2.style.display = "none";
} 
window.onclick = function(event) {
  if (event.target == cartModal2) {
    cartModal2.style.display = "none";
  }
  else if (event.target == mobile_menu) {
    mobile_menu.style.display = "none";
  } 
}
var mobile_menu = document.getElementById("mobileNav");
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

// mobile menu darker header
var mobileMenu = document.getElementById("mobileMenu");
var btnM = document.getElementById("mClose");
var spanM = document.getElementsByClassName("closeMenu")[0];
btnM.onclick = function() {
  mobileMenu.style.display = "block";
  mobileMenu.classList.add("js-drawer-open");
  mobileMenu.classList.remove("js-drawer-close");
}
spanM.onclick = function() {
  mobileMenu.classList.remove("js-drawer-open");
  mobileMenu.classList.add("js-drawer-close");
}

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