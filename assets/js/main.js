 /************************
 * Start Misc me
 ************************/
$(function() {
  $('a.page-scroll').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');
      event.preventDefault();
  });

  new WOW({offset: 100}).init();


  $('.your-class').slick({
    arrows: true, // Adds arrows to sides of slider
    dots: true, // Adds the dots on the bottom
    adaptiveHeight: true
  });

  setUpAbout();
  setUpTimeline();
  setUpTestimonials();
  setUpContact();
});

function scroll(target) {
  $("html, body").animate({ scrollTop: jQuery(target).offset().top - 20 }, '1000', function(){
     $("html, body").off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
  });
}


 /************************
 * End Misc
 ************************/






 /************************
 * Start About me
 ************************/

function setUpAbout() {
  getTopArtists();
  getNowPlaying();
  setInterval(getNowPlaying, 10*1000);
}

function getTopArtists() {
  var html = '';
  var musicFound = false;
  
  //Get top artists from lastfm account
  $.getJSON("https://ws.audioscrobbler.com/2.0/?method=user.getTopArtists&user=smitteyyyy&period=1month&api_key=9ddaab7dc99dbcfb3f2ed8204ef965ce&limit=5&format=json&callback=?", function(json) {
        $.each(json.topartists.artist, function(i, item) {
      
      musicFound = true;
      
      var n = item.url.lastIndexOf('/');
      var result = item.url.substring(n + 1);
      var songName = item.name;
      var url = item.url;
  
      html += "<a href='http://www.last.fm/user/Smitteyyyy/library/music/" + result + "?date_preset=LAST_30_DAYS' target='_blank'>" + item.name + "</a>, ";
        });
    
    //Strip out the final comma
    html = html.substring(0, html.length - 2) + '.';
    
    //Add result to page
    if(html.indexOf(",") > -1)
    {
      $('#topArtists').append(html);
    }
    
    if(!musicFound)
    {
      $.getJSON("https://ws.audioscrobbler.com/2.0/?method=user.getTopArtists&user=smitteyyyy&period=3month&api_key=9ddaab7dc99dbcfb3f2ed8204ef965ce&limit=5&format=json&callback=?", function(json) {
        html = '';

        $.each(json.topartists.artist, function(i, item) {
          
          musicFound = true;
          
          var n = item.url.lastIndexOf('/');
          var result = item.url.substring(n + 1);
          var songName = item.name;
          var url = item.url;
      
          html += "<a href='http://www.last.fm/user/Smitteyyyy/library/music/" + result + "?date_preset=LAST_90_DAYS' target='_blank'>" + item.name + "</a>, ";
        });
        
        //Strip out the final comma
        html = html.substring(0, html.length - 2) + '.';
        
        //Add result to page
        $('#topArtists').append(html);
      
      });
    } 
  });
}

var currentSongName;
function getNowPlaying() 
{
  $.getJSON("https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=smitteyyyy&api_key=9ddaab7dc99dbcfb3f2ed8204ef965ce&limit=1&format=json&callback=?", function(json) {
        $.each(json.recenttracks.track, function(i, item) {
                  
      //Limit to the first iteration. Lastfm seems to want to return at least 2
      if(i == 0)
      {
        //Does the result have the attribute containing the 'nowplaying' attribute?
        if($(this).attr('@attr') != undefined)
        {
          var songName = item.name;

          //Does the return result match the same name as the previously changed song name? If not, we want to change the html to reflect the new song
          if(songName != currentSongName)
          {     
            var html = 'Listening to right now: <img src="assets/images/sound-balance.gif"> ';

            var artist = item.artist['#text'];
            var url = item.url;
            
            currentSongName = songName;
            
            html += "<a href='" + url + "' target='_blank'>" + artist + " - " + songName + "</a>.";
            
            //Add result to page
            $('#currentlyListeningTo').html(html);
          }
        }
        else
        {
          $('#currentlyListeningTo').empty();
        }
      }
        });
    });
}

 /************************
 * End About me
 ************************/



 /************************
 * Start Timeline
 ************************/

var skillsArr = [];
var allExperience = [];
var filteredExperience = [];

function setUpTimeline() {

  //Filter by tags
  $("#sticky").on('click', '.badge', function() {     
    filterTags(this);
    scroll('#experience');
  });
  
  //sidebar scroll boundaries
  var sticker = $("#sticky");
  var topOfSidebar = $('#sticky').offset().top - 100;

  allExperience = $('.timeline');

  $(window).scroll(function() {
    
    
    //Controls for fading in the experience elements when the window is scrolling by them
    //Check the location of each desired element
    $(allExperience).each( function(i) {
      
      var bottom_of_object = $(this).offset().top + ($(this).outerHeight() / 2);
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      
      /* If the object is completely visible in the window, fade it it */
      if( bottom_of_window > bottom_of_object ) {
        
        //Seeing as it can be scrolled by multiple times, check to see if it is already shown (depicted by the class .visible). 
        //If it doesn't have this class, it isn't shown. Fade it in and move over the tags from the experience block over to the filter menu.
        if(!$(this).hasClass("displayed")) {

          //Move tags over to filter menu
          move($(this));          
        }
                
        //Give the experience block the visible class so that it will be ignored the next time the user scrolls by it
        $(this).addClass("displayed");

      }
      
    }); 
  });
}


function move(elem) {
  //For every tag found in the experience block that has just appeared/faded in
  $(elem).find('.badge').each(function(index) {
    
    //Get the skill tag to move over to the menu
    var skillTag = $(this);
    
    //Move/fade skill into the menu. thread timeout needed to nicely update the UI. Moved the fading action into a separate method for easier viewing
    setTimeout(function () {
      fade(skillTag);         
    }, index*400);
        
  });
}

function fade(elem) {
  //Get the tag name from the element
  var tagName = $(elem).text();

  //Does the sidebar already contain the element? If not, add it. If it is already there, briefly highlight it
  if(!skillsArr.includes(tagName)) { 

    skillsArr.push(tagName);
    var clone = $(elem).clone();
    
    if($(window).height() - 100 < $('#sticky').height()) {
      clone.addClass('span-tag-Inline');
            
      $('#sideBar .skillTag').addClass('span-tag-Inline');
      $('#sticky').addClass('div-overflow');
    }
    
    //Make a duplicate of the element as we don't want the element to actually move, but replicated. Make it into a link so that the filter can be selected
    clone.appendTo("#sticky").wrap("<a href='#/'></a>").hide().fadeIn(1000);
  }
}

function filterTags(elem) {

  if($(elem).hasClass("experienceItemSelected")) {
    $(elem).removeClass("experienceItemSelected");
  }
  else {
    trackAnalytics("Timeline Section", "Tag Filter", elem.innerText);
    $(elem).addClass("experienceItemSelected");
  }
  
  //Return the tags currently selected
  var filteredTags = $('#sticky .experienceItemSelected').map(function(){ return $(this).text(); }).get().join();

  //If no tags are selected, un-grey all of the menu tags by giving them the correct label class based on the name 
  if(filteredTags == "") {
    $('#sticky .badge').removeClass('unselected')
  }
  else {    
    //Give all tags the grey colour
    $('#sticky .badge-secondary').addClass('unselected');
    
    //Give the selected tag(s) colour
    $('#sticky .experienceItemSelected').removeClass('unselected');
  }
  

  filteredExperience = []

  if(filteredTags) {

    var tagArray = filteredTags.split(',');

    // Search experience blocks for the selected tags
    tagArray.forEach(function (tag) {
      filteredExperience.push($(allExperience).filter(':contains(' + tag + ')'));
    });

    // Remove all (remaining) experience by nuking all of them
    allExperience.remove();

    // Add filtered experience
    $('.main-timeline').append(filteredExperience);

  } else {
    // Remove all (remaining) experience by nuking all of them
    allExperience.remove();

    // Add all experience back in
    $('.main-timeline').append(allExperience);
  }
  
} 

function clearFilters() {
  trackAnalytics("Timeline Section", "Tag Filter", "Clear Filters");

  $("#sticky .experienceItemSelected").each(function() {
    filterTags(this);
    $(this).removeClass('experienceItemSelected');
  });
  
  scroll('#experience');
}

 /************************
 * End Timeline
 ************************/


 /************************
 * Start Testimonials
 ************************/
function setUpTestimonials() {

  $('#testimonialsCarousel').carousel({
    interval: 0
  })



  $('.carousel .carousel-item').each(function(){
      var next = $(this).next();
      if (!next.length) {
          next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));
      
      for (var i=0;i<1;i++) {
          next=next.next();
          if (!next.length) {
          	next = $(this).siblings(':first');
        	}
          
          next.children(':first-child').clone().appendTo($(this));
        }
  });


}


 /************************
 * End Testimonials
 ************************/




 /************************
 * Start Contact 
 ************************/
 
function setUpContact() {
  google.maps.event.addDomListener(window, 'load', initMaps);

  $("body").on("input propertychange", ".floating-label-form-group", function(e) {
      $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
  }).on("focus", ".floating-label-form-group", function() {
      $(this).addClass("floating-label-form-group-with-focus");
  }).on("blur", ".floating-label-form-group", function() {
      $(this).removeClass("floating-label-form-group-with-focus");
  });
}

var map;

function initMaps() {
  var mapOptions = {    
    center: new google.maps.LatLng(51.498736, -0.069128),
    zoom: 12,
    zoomControl: false,
    disableDoubleClickZoom: true,
    mapTypeControl: false,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
    },
    scaleControl: false,
    scrollwheel: false,
    panControl: true,
    streetViewControl: false,
    draggable : false,
    overviewMapControl: false,
    overviewMapControlOptions: {
      opened: true,
    },
    disableDefaultUI: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: [
      {
        "featureType": "water",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "color": "#b5cbe4"
          }
        ]
      },
      {
        "featureType": "landscape",
        "stylers": [
          {
            "color": "#efefef"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#83a5b0"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#bdcdd3"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e3eed3"
          }
        ]
      },
      {
        "featureType": "administrative",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "lightness": 33
          }
        ]
      },
      {
        "featureType": "road"
      },
      {
        "featureType": "poi.park",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "lightness": 20
          }
        ]
      },
      {},
      {
        "featureType": "road",
        "stylers": [
          {
            "lightness": 20
          }
        ]
      }
    ],
  }
  var mapElement = document.getElementById('map');
  var map = new google.maps.Map(mapElement, mapOptions);
  
  
  function bindInfoWindow(marker, map, title, desc, telephone, email, web, link) {
    var infoWindowVisible = (function () {
      var currentlyVisible = false;
      return function (visible) {
        if (visible !== undefined) {
          currentlyVisible = visible;
        }
          return currentlyVisible;
      };
    }());
    
    iw = new google.maps.InfoWindow();
    /*google.maps.event.addListener(marker, 'click', function() {
      if (infoWindowVisible()) {
        iw.close();
        infoWindowVisible(false);
      } else {
        var html= "<div style='color:#000;background-color:#fff;padding:5px;width:150px;'><h4>"+title+"</h4></div>";
        iw = new google.maps.InfoWindow({content:html});
        iw.open(map,marker);
        infoWindowVisible(true);
      }
    });*/
    
    var html= "<div style='color:#000;background-color:#fff;padding:5px;width:200px;'><h4>"+title+"</h4></div>";
    iw = new google.maps.InfoWindow({content:html});
    iw.open(map,marker);
    infoWindowVisible(true);
    
    google.maps.event.addListener(iw, 'closeclick', function () {
      infoWindowVisible(false);
    });
  }
}


 /************************
 * End Contact 
 ************************/