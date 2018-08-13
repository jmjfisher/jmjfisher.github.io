$(document).ready(function(){
  // Add smooth scrolling to all links
  $(".js-scroll").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }
  });
});

function displayCaption(){
    var id = this.id;
    if (id == "chile-thumb"){
        $("#caption-2")
            .hide()
            .html("<p class='caption'>Shaded relief map of a proposed cycling race route in Chile. Created using ArcMap and Adobe Photoshop and Illustrator.</p>")
            .slideDown(250);
    } else if (id =="bus-thumb") {
        $("#caption-2")
            .hide()
            .html("<p class='caption'>Scrollytelling visual essay about decreasing bus ridership in DC. Written in JavaScript with use of Leaflet, D3, Scrollama, and jQuery libraries, Adobe Illustrator graphics, and ArcMap analysis.</p>")
            .slideDown(250);
    } else if (id =="transfer-thumb") {
        $("#caption-4")
            .hide()
            .html("<p class='caption'>Dynamic web application mapping annual football transfer fees by the world's most valuable clubs. Written in JavaScript with use of Leaflet and jQuery libraries.</p>")
            .slideDown(250);
    } else if (id == "ed-thumb"){
        $("#caption-4")
            .hide()
            .html("<p class='caption'>Longform infographic regarding education spending in the United States. Created using Adobe Illustrator, Excel, and indiemapper.</p>")
            .slideDown(250);
    } else if (id == "cycle-thumb"){
        $("#caption-3")
            .hide()
            .html("<p class='caption'>Interactive web application allowing users to obtain safe yet efficient cycling routes within Duluth, MN. Developed using Java, JavaScript, PostgreSQL / PostGIS, GoogleMaps API, and pgRouting. (video demo)</p>")
            .slideDown(250);
    } else if (id == "prince-thumb"){
        $("#caption-3")
            .hide()
            .html("<p class='caption'>Mapbox Studio tileset inspired by Antoine de Saint-Exup&eacute;ry's <i>The Little Prince</i>.</p>")
            .slideDown(250);
    } else if (id == "chicago-thumb"){
        $("#caption-1")
            .hide()
            .html("<p class='caption'>A research application to convey areas of potential population displacement or gentrification in Chicago. Written in JavaScript with use of Leaflet and D3 libraries.</p>")
            .slideDown(250);
    } else if (id == "olympics-thumb"){
        $("#caption-1")
            .hide()
            .html("<p class='caption'>An application to visualize medal performance at various Olympic games with respect to GDP. Written in JavaScript with use of D3 library.</p>")
            .slideDown(250);
    } else {
        clearCaption
    }
};

function clearCaption(){
    $("#caption-1").empty();
    $("#caption-2").empty();
    $("#caption-3").empty();
};

$(".thumb").hover(displayCaption,clearCaption)