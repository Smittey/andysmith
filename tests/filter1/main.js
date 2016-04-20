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