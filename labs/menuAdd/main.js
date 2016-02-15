$(document).ready(function(e) {

	//Filter by tags
	$("#sideBar").on('click', '.skillTag', function() {			
		filterTags(this);
	});
	
	
	//Fade in experience elements
	/* Every time the window is scrolled ... */
	$(window).scroll( function(){
	
		/* Check the location of each desired element */
		$('.experienceItem').each( function(i){
			
			var bottom_of_object = $(this).offset().top + $(this).outerHeight();
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
	
	
	//sidebar scroll boundaries
	var s = $("#sticker	");
	var a = $("#sticker").offset().top;
	
	var bottom = a + $("#sideBar").parent().height() - 110;
	
	$(window).scroll(function() {
		var windowpos = $(window).scrollTop();
		
		//s.html("Distance from top:" + a + "<br />Distance from bottom:" + bottom + "<br />Scroll position: " + windowpos);
		if ((a <= windowpos + 20) && (bottom >= windowpos)) {
			s.addClass("stick");
		} else {
			s.removeClass("stick");	
		}
	});
	
});
	
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
		
		// start with all experience blocks
		var experienceBlocks =  $('#items .experienceItem');

		if(filteredTags)
		{
			//experienceBlocks = experienceBlocks.filter('#items .experienceItem ' + filteredTags);
			//experienceBlocks = experienceBlocks.filter('#items .experienceItem ' + filteredTags);
			experienceBlocks = experienceBlocks.filter('.experienceItem').find(filteredTags).parent();

			/*experienceBlocks = experienceBlocks.filter(function() {
				for (var i = 0, len = filteredTags.length; i < len; i++) 
				{
					if ($(filteredTags[i], this).length === 0) 
					{
						return false;
					}
				}
				return true;
			});*/
		}
		


		// hide everything      
		$('.experienceItem').hide();
		 

		//Show the experience items depicted by the filters
		experienceBlocks.show();
		 
		/*$('html, body').animate({
			scrollTop: $('#items').offset().top - 20
		}, 'slow');*/
		
		jQuery('html,body').animate({ scrollTop: jQuery('#items').offset().top - 20}, 1000);

}	
	
function move(elem)
{
	//For every tag found in the experience block that has just appeared/faded in
	$("#items #" + elem.attr('id') + " span.skillTag").each(function(index){
		
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

function selectAllFilters()
{
	$("#sideBar #sticker .experienceItemSelected").each(function(){
		filterTags(this);		
	});
}

function clearAllFilters()
{
	$("#sideBar #sticker .skillTag").each(function(){
		filterTags(this);		
	});
}

