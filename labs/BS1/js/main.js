$(document).ready(function() {

	/*$(".timeline-panel").hover(function() {
		$(this).parent().closest('.experienceBlockHead').find('.timeline-image').css({'border': '5px solid #BF3B3B'});
	}, function() {
		$(this).parent().closest('.experienceBlockHead').find('.timeline-image').css({'border': ''})}
	);*/


	//Filter by tags
	$("#sideBar").on('click', '.skillTag', function() {			
		filterTags(this);
	});
	
	
	

	//sidebar scroll boundaries
	/*var s = $("#sticker	");
	var a = $("#sideBar").offset().top;
	
	var bottom = a + $("#sideBar").parent().height() - 110;
	
	$(window).scroll(function() {
		var windowpos = $(window).scrollTop();
		
		//s.html("Distance from top:" + a + "<br />Distance from bottom:" + bottom + "<br />Scroll position: " + windowpos);
		console.log("Distance from top:" + a + "<br />Distance from bottom:" + bottom + "<br />Scroll position: " + windowpos);
		if ((a <= windowpos) && (bottom >= windowpos)) {
			s.addClass("stick");
		} else {
			s.removeClass("stick");	
		}
	});*/

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
		
		//$('#debug').html("Top of div:" + topOfSidebar + "<br />Bottom of timeline:" + bottomOfTimeline + "<br />Height of sidebar: " + heightOfSidebar + "<br />Bottom of sidebar: " + bottomOfSidebar + "<br />Scroll position: " + currentPos);
		
		//$('#debug').html("Current position: " + currentPos + "<br/>Top of sidebar: " + topOfSidebar + "<br /><br />Bottom of sidebar: " + bottomOfSidebar + "<br />Bottom of timeline: " + bottomOfTimeline);
		
		//$('#debug').html("Current position: " + currentPos + "<br/>Bottom of window: " + scrollBottom + "<br/>Bottom of Timeline: " + bottomOfTimeline + "<br/>Bottom of Sidebar: " + bottomOfSidebar);
		//console.log("Current position: " + currentPos + "\nBottom of window: " + scrollBottom + "\nBottom of Timeline: " + bottomOfTimeline + "\nBottom of Sidebar: " + bottomOfSidebar);


		if((currentPos >= topOfSidebar) && (bottomOfSidebar <= bottomOfTimeline))	 //Within the boundaries
		{
			sticker.removeClass("stick-end");	
			sticker.addClass("stick");
		}
		else if(bottomOfSidebar >= bottomOfTimeline)
		{
			sticker.removeClass("stick");
			sticker.addClass("stick-end");
		}
		else																		 //Above the timeline
		{		 
			sticker.removeClass("stick-end");	
			sticker.removeClass("stick");	
		}
	});





	//Fade in experience elements
	/* Every time the window is scrolled ... */
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
   

	
function move(elem)
{
	//For every tag found in the experience block that has just appeared/faded in
	//$("#items #" + elem.attr('id') + " span.skillTag").each(function(index){
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

	
	
	jQuery('html,body').animate({ scrollTop: jQuery('#experience').offset().top - 20}, 1000);
	
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
		//filterTags(this);
		$(this).removeClass('experienceItemSelected');
		
	});
	
	$('#sticker .skillTag').addClass (function (){
		return 'label-' + $(this).attr('class').split(' ')[0].substr(0, $(this).attr('class').split(' ')[0].indexOf('Tag'));
	});
}