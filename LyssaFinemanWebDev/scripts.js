/*Touchscreen capability*/
document.addEventListener('touchstart', function addtouchclass(e){ // first time user touches the screen
    document.documentElement.workLinks.add('can-touch') // add "can-touch" class to document root using classList API
    document.removeEventListener('touchstart', addtouchclass, false) // de-register touchstart event
}, false)

/* Show Work Links on Hover */
$(".workEx").mouseenter(function(){
  $(".workLinks", this).show();
}).mouseleave(function() {
  $(".workLinks", this).hide();
});