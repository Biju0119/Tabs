// Menu
$('.mob-menu').click(function(event){

  $('body').toggleClass('open');
  event.stopPropagation();

})

$('.menu').click(function(event){

  event.stopPropagation();

})
$('.overlay').click(function(){
  if($('body').hasClass('open')){
    $('body').removeClass('open');
  }
});

$('.menu li:has(ul)').addClass('submenu');
$('.menu li:has(ul)').append( "<i></i>" );

$('.menu i').click(function(){
 $(this).parent('li').toggleClass('open');
})

$('.top-menu li:has(ul)').addClass('submenu');

$(".mob-menu").click(function(){
    $( ".top-menu ul" ).prependTo ( ".menu" ) ;
}); 

// Scroll
  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $(".header").addClass("slim-header");    
          
    } else {
      $(".header").removeClass("slim-header");
     
     }
   });


  
// paralax

var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});
  new ScrollMagic.Scene({triggerElement: "#parallax1"})
          .setTween("#parallax1 > div", {y: "80%", ease: Linear.easeNone})
          .addIndicators()
          .addTo(controller);
// Smooth Scroll




 $(function () {
      $.srSmoothscroll()
    })

// Tab
$('#surgical, #non-surgical,  #video-gallery').easyResponsiveTabs({
            type: 'vertical', //Types: default, vertical, accordion
            width: 'auto', //auto or any width like 600px
            fit: true, // 100% fit in a container
            closed: 'accordion', // Start closed if in accordion view
            tabidentify: 'hor_1', // The tab groups identifier
            activate: function(event) { // Callback function if tab is switched
                var $tab = $(this);
                var $info = $('#nested-tabInfo2');
                var $name = $('span', $info);
                $name.text($tab.text());
                $info.show();
            }
        });





// custom scrollbar
$(function(){
    $('#testDiv2').slimScroll({
        allowPageScroll: true,
        alwaysVisible: true,
        height:'351px',
    });
});

// Google map
function initialize() {
              var myLatlng = new google.maps.LatLng(43.5963,-79.633818);
              var isDraggable = $(document).width() > 1025 ? true : false;
              var mapOptions = {
                zoom: 14,
                scrollwheel: false,
                draggable: isDraggable,
                center: myLatlng
              };

              var map = new google.maps.Map(document.getElementById('map'), mapOptions);

              var contentString = '<div id="content">'+
                  '<div id="siteNotice">'+
                  '</div>'+
                  '<h4 id="firstHeading" class="firstHeading">McLean Clinic</h4>'+
                  '<div id="bodyContent">'+
                  '<p>50 Burnhamthorpe Road West,Suite 343,<br>'+
                  'Mississauga, Ontario, Canada, L5B 3C2 </p>'+
                  '<a title="View Map" target="_blank" href="https://www.google.com/maps/place/28+Dunkirk+Rd,+St+Catharines,+ON+L2R+1A1,+Canada/@43.1718272,-79.228189,17z/data=!3m1!4b1!4m2!3m1!1s0x89d350f4020999cf:0xb6a382324358c6a2?hl=en-US">View Map</a>'+
                  '</div>'+
                  '</div>';

              var infowindow = new google.maps.InfoWindow({
                  content: contentString
              });

              var marker = new google.maps.Marker({
                  position: myLatlng,
                  map: map,
                  title: 'Uluru (Ayers Rock)'
              });
              google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map,marker);
              });
              infowindow.open(map,marker);
            }

            google.maps.event.addDomListener(window, 'load', initialize);








            $(window).load(function() {
  // The slider being synced must be initialized first
  $('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 259,
    itemMargin: 5,
    prevText: "",
    nextText: "", 
    asNavFor: '#slider'
  });
 
  $('#slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
  
    prevText: "",
    nextText: "", 
    sync: "#carousel"
  });
});