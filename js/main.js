$(document).ready(function(){
    
    //Dynamically resize thumbnails
    columnWidth = $(window).innerWidth()/12;
    
    // if the height is at least 1.5x the width...
    if ($(window).width() < $(window).height()*1.5) {
        
        thumbWidth = columnWidth*10;
        
        console.log(columnWidth,thumbWidth)
        
        $('.thumb').each(function(){
            $(this).width(thumbWidth);
        });
        
    } else {
        
        thumbWidth = columnWidth*4;
        
        if (thumbWidth < 450) {
            
            $('.thumb').each(function(){
                $(this).width(thumbWidth);
            });
            
        };
    };
    
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
        };
    });
});

function displayCaption(){
    var id = this.id;
    if (id == "chile-thumb"){
        $("#caption-2")
            .hide()
            .html("<p class='caption'>Shaded relief map of a proposed cycling race route in Chile. ArcMap and Adobe Photoshop and Illustrator.</p>")
            .slideDown(250);
    } else if (id == "radio-thumb") {
        $("#caption-3")
            .hide()
            .html("<p class='caption'>Mobile-friendly interactive map helping users find nearest Packers Radio Network affiliate station based on Voronoi polygons calculation. QGIS data analysis and editing tools and Leaflet.</p>")
            .slideDown(250);
    } else if (id =="lp-thumb") {
        $("#caption-5")
            .hide()
            .html("<p class='caption'>Interactive map showing POIs in Manitowoc Lincoln Park. Makes jQuery POST and GET calls to PostGIS database to update map with comments or show nearest POI to a point. (video demo)</p>")
            .slideDown(250);
    } else if (id =="arcpy-thumb") {
        $("#caption-5")
            .hide()
            .html("<p class='caption'>ArcPy (Tkinter GUI) application running IDW and GWR analyses on relationship between nitrate rates in wells and cancer rates in Wisconsin. (video demo)</p>")
            .slideDown(250);
    } else if (id =="bus-thumb") {
        $("#caption-2")
            .hide()
            .html("<p class='caption'><i>Scrollytelling</i> visual essay about decreasing bus ridership in DC. Leaflet, D3, Scrollama, and jQuery libraries, Adobe Illustrator graphics, and ArcMap analysis.</p>")
            .slideDown(250);
    } else if (id =="transfer-thumb") {
        $("#caption-4")
            .hide()
            .html("<p class='caption'>Web application mapping annual football transfer fees by the world's most valuable clubs. Leaflet and jQuery.</p>")
            .slideDown(250);
    } else if (id == "ed-thumb"){
        $("#caption-6")
            .hide()
            .html("<p class='caption'>Longform infographic regarding education spending in the United States. Adobe Illustrator, Excel, and indiemapper.</p>")
            .slideDown(250);
    } else if (id == "cycle-thumb"){
        $("#caption-6")
            .hide()
            .html("<p class='caption'>Web application allowing users to obtain safe yet efficient cycling routes within Duluth, MN. Java, JavaScript, PostgreSQL (PostGIS), GoogleMaps API, and pgRouting. (video demo)</p>")
            .slideDown(250);
    } else if (id == "prince-thumb"){
        $("#caption-3")
            .hide()
            .html("<p class='caption'>Mapbox Studio tileset inspired by Antoine de Saint-Exup&eacute;ry's <i>The Little Prince</i>.</p>")
            .slideDown(250);
    } else if (id == "chicago-thumb"){
        $("#caption-1")
            .hide()
            .html("<p class='caption'>A research application to convey areas of potential population displacement or gentrification in Chicago. Leaflet and D3 libraries.</p>")
            .slideDown(250);
    } else if (id == "olympics-thumb"){
        $("#caption-1")
            .hide()
            .html("<p class='caption'>An application to visualize national medal performances at recent Olympic games with respect to GDP. JavaScript and D3.</p>")
            .slideDown(250);
    } else if (id == "uw-thumb"){
        $("#caption-4")
            .hide()
            .html("<p class='caption'>Leafet map with Carto (PostGIS) backing showing remote <i>Uni Watch</i> party locations.</p>")
            .slideDown(250);
    } else {
        clearCaption
    }
};

function clearCaption(){
    $("#caption-1").empty();
    $("#caption-2").empty();
    $("#caption-3").empty();
    $("#caption-4").empty();
    $("#caption-5").empty();
    $("#caption-6").empty();
};

$(".thumb").hover(displayCaption,clearCaption)