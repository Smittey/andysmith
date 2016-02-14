 /*************************************************************************
 *
 * @description
 * Javascript to control the different custom/none-bootstrapped elements 
 * of the website, namely the timeline and the about me interactions
 * 
 * @author
 * Andy Smith, 2016
 *
 *************************************************************************/

$(document).ready(function() {

	/*$(".timeline-panel").hover(function() {
		$(this).parent().closest('.experienceBlockHead').find('.timeline-image').css({'border': '5px solid #BF3B3B'});
	}, function() {
		$(this).parent().closest('.experienceBlockHead').find('.timeline-image').css({'border': ''})}
	);*/
	
	$(".timer").hover(function() {
		$(this).fadeTo(1000, 1);
	}, function() {
		$(this).fadeTo(1000, 0.4);}
	);


	//Filter by tags
	$("#sideBar").on('click', '.skillTag', function() {			
		filterTags(this);
		scroll('#experience');
	});
	
	
	$("html, body").on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
       $("html, body").stop();
	});
	
	var statsHasBeenSeen = false;

	//sidebar scroll boundaries
	var sticker = $("#sticker");
	var topOfSidebar = $('#sticker').offset().top - 100;
	var topOfTimeline = $('#experienceTimeline').offset().top;

		
	$(window).scroll(function() {
		var currentPos = $(window).scrollTop();
		
		var bottomOfTimeline = $('#experienceTimeline').offset().top + $('#experienceTimeline').height();
		var currentTopOfSidebar = $('#sticker').offset().top;
		var heightOfSidebar = $('#sticker').height();
		var bottomOfSidebar = currentPos + $('#sticker').height() + 100; 
		var scrollBottom = $(window).scrollTop() + $(window).height();

		//$('#debug').html("Current position: " + currentPos + "<br/>Bottom of window: " + scrollBottom + "<br/>Bottom of Timeline: " + bottomOfTimeline + "<br/>Bottom of Sidebar: " + bottomOfSidebar);
		//console.log("Current position: " + currentPos + "\nBottom of window: " + scrollBottom + "\nBottom of Timeline: " + bottomOfTimeline + "\nBottom of Sidebar: " + bottomOfSidebar);

		if((currentPos >= topOfSidebar) && (bottomOfSidebar <= bottomOfTimeline))	//Within the boundaries
		{
			sticker.removeClass("stick-end");	
			sticker.addClass("stick");
		}
		else if(bottomOfSidebar >= bottomOfTimeline)								//Below the timeline
		{
			sticker.removeClass("stick");
			sticker.addClass("stick-end");
		}
		else																		//Above the timeline
		{		 
			sticker.removeClass("stick-end");	
			sticker.removeClass("stick");	
		}
		
		
		
		if(statsHasBeenSeen == false) 
		{
			if($(".timers").isOnScreen())
			{
				statsHasBeenSeen = true;

				$('.timer').each(function(){
					
					var max = $(this).attr('value');
					var unit = $(this).attr('unit');
						
					$(this).countTo({           
						from: 0,
						to: max,
						speed: 2000,
						unit: unit,
						refreshInterval: 50,
					});
				});
			}
		}

	
	});


	//Controls for fading in the experience elements when the window is scrolling by them
	$(window).scroll( function(){
	
		/* Check the location of each desired element */
		$('.timeline li').each( function(i){
			
			var bottom_of_object = $(this).offset().top + ($(this).outerHeight() / 2);
			var bottom_of_window = $(window).scrollTop() + $(window).height();
			
			/* If the object is completely visible in the window, fade it it */
			if( bottom_of_window > bottom_of_object )
			{
				//Seeing as it can be scrolled by multiple times, check to see if it is already shown (depicted by the class .visible). 
				//If it doesn't have this class, it isn't shown. Fade it in and move over the tags from the experience block over to the filter menu.
				if(!$(this).hasClass("visible"))
				{
					//Fade in the experience block
					$(this).animate({'opacity':'1'},500);
				
					//Move tags over to filter menu
					move($(this));					
				}
								
				//Give the experience block the visible class so that it will be ignored the next time the user scrolls by it
				$(this).addClass("visible");
			}
			
		}); 			
	});

	//Controls for the 'more...' sections of the timeline experience blocks
	$(".timeline-more").click(function(){
		$(this).prev().slideToggle('slow', function() {
			if ($(this).is(":visible")) {
				 $(this).next().text('Less...');                
			} else {
				 $(this).next().text('More...');                
			}        
		});		
    });


});
   
function scroll(target)
{
	$("html, body").animate({ scrollTop: jQuery(target).offset().top - 20 }, '1000', function(){
	   $("html, body").off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
	});
}

 /************************
 * Start Timeline 
 ************************/
 
function move(elem)
{
	//For every tag found in the experience block that has just appeared/faded in
	$(elem).find('.timeline-panel .timeline-body span.skillTag').each(function(index){
		
		//Get the skill tag to move over to the menu
		var skillTag = $(this);
		
		//Move/fade skill into the menu. thread timeout needed to nicely update the UI. Moved the fading action into a separate method for easier viewing
		setTimeout(function () {
			fade(skillTag);
		}, index*400);
	});
}

function fade(elem) 
{
	//Get the tag name from the element
	var tagName = $(elem).attr('class').split(' ')[0];
	
	//Does the sidebar already contain the element? If not, add it. If it is already there, briefly highlight it
	if($("#sideBar ." + tagName).length == 0)
	{ 
		//Make a duplicate of the element as we don't want the element to actually move, but replicated. Make it into a link so that the filter can be selected
		$(elem).clone().appendTo("#sideBar #sticker").wrap("<h5><a href='#/'></a></h5>").hide().fadeIn(1000);
	}
	else
	{
		//Briefly highlight the element
		$("#sideBar ." + tagName).effect( "highlight", 1000);
	}
}

function filterTags(elem)
{
	if($(elem).hasClass("experienceItemSelected"))
	{
		$(elem).removeClass("experienceItemSelected");
	}
	else
	{
		$(elem).addClass("experienceItemSelected");
	}
	
	var filteredTags = $('#sideBar #sticker .experienceItemSelected').map(function(){ return "." + $(this).attr('class').split(' ')[0]; }).get().join();
	
	if(filteredTags == "")
	{
		$('#sticker .skillTag').addClass (function (){
			return 'label-' + $(this).attr('class').split(' ')[0].substr(0, $(this).attr('class').split(' ')[0].indexOf('Tag'));
		});
	}
	else
	{
		$('#sticker .skillTag').removeClass (function (index, css) {
		   return (css.match (/(^|\s)label-\S+/g) || []).join(' ');
		});
		
		$('#sticker .experienceItemSelected').addClass (function (){
		   return 'label-' + $(this).attr('class').split(' ')[0].substr(0, $(this).attr('class').split(' ')[0].indexOf('Tag'));
		});
	}
	

	// start with all experience blocks
	var experienceBlocks =  $('.timeline li .timeline-panel').parent();

	if(filteredTags)
	{
		experienceBlocks = experienceBlocks.find('.timeline-body').find(filteredTags).parent().parent().parent();
	}

	// hide everything      
	$('.timeline li .timeline-panel').parent().hide();	
	 

	$('#experience5').parent().prevAll(".experienceCategory:first");
	 
	//Show the experience items depicted by the filters
	experienceBlocks.show();
	 
	var hasWork = false;
	var hasEducation= false;
	
	$('.timeline-panel:visible').each(function() {
		if($(this).parent().prevAll(".experienceCategory:first").attr('id') == 'educationCategory')
		{
			hasEducation = true;
		}			
		else
		{
			hasWork = true;
		}
	});
	
	if(hasWork == false)
	{
		$('#workCategory').hide();	
	}
	else
	{
		$('#workCategory').show();	
	}
	
	if(hasEducation == false)
	{
		$('#educationCategory').hide();
	}
	else
	{
		$('#educationCategory').show();		
	}

	
	//Check to see if there are any selected tags. If there aren't, make the 'clear filters' link inactive and colourise icons 
	/*if(filteredTags == "")
	{
		$('#clearFilters').disabled=true;
	}
	else
	{
		//Loop through and make all icons grey except those that are selected
	}*/
}	

function clearFilters()
{
	$("#sideBar #sticker .experienceItemSelected").each(function(){
		filterTags(this);
		$(this).removeClass('experienceItemSelected');
	});
	
	scroll('#experience');
}

 /************************
 * End Timeline 
 ************************/

 /************************
 * Start About me
 ************************/
 (function($) {
    $.fn.countTo = function(options) 
	{
        //How many times to update the value
        var loops = Math.ceil(options.speed / options.refreshInterval);
        //How much to increment the value on each update
		var increment = (options.to - options.from) / loops;

        return $(this).each(function() {
            var _this = this,
                loopCount = 0,
                value = options.from,
                interval = setInterval(updateTimer, options.refreshInterval);

            function updateTimer() 
            {
                value += increment;
                loopCount++;
				
				//Change the html on the page to the current value of the timeer increment
                $(_this).html(value.toFixed(options.decimals).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " " + options.unit);
                
                if (loopCount >= loops) 
                {
					//Once the number has been reached clear the interval and set the final value to it's desired count
                    clearInterval(interval);
                    value = options.to;
					
					$(_this).fadeTo(1000, 0.4);
    
                }
            }
        });
    };

	
	
	$.fn.isOnScreen = function()
	{
		var win =   $(window);
		var viewport    =   {
			top  : win.scrollTop(),
			left : win.scrollLeft()
		};

		viewport.right  =   viewport.left   +   win.width();
		viewport.bottom =   viewport.top    +   win.height();

		var bounds      =   this.offset();

		bounds.right    =   bounds.left + this.outerWidth();
		bounds.bottom   =   bounds.top + this.outerHeight();

		return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
	};



})(jQuery);



	
 /************************
 * End About me
 ************************/
 