$(function(){
  $('#Container').mixItUp({
    load: {
      filter: '.web, .apps, .music' 
    },
    controls: {
      toggleFilterButtons: true,
      toggleLogic: 'or'
    },
    callbacks: {
      onMixEnd: function(state){
        console.log(state.activeFilter)
      }
    }
  });
});

$(document).ready(function() {
	
	//Filter by tags
	$("#sideBar").on('click', '.skillTag', function() {			
		filterTags(this);
		scroll('#experience');
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
	
}