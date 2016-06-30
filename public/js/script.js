$(document).ready(function() {
  console.log('werkin')


//NAVBAR
  //toggle function to hide login until button pressed
  $('#show-nav').click(function(){
    $('.nav-hide').toggle();
    $('#show-nav').toggle();
  })


//ASSESSMENTS
  //calculate score
  $('#assess-submit').click(function(){
    let val1 = parseInt($('#assess1').val());
    let val2 = parseInt($('#assess2').val());
    let val3 = parseInt($('#assess3').val());
    let val4 = parseInt($('#assess4').val());
    let score = val1 + val2 + val3 + val4
    //checkFlags();
    getScore();
    console.log(getScore())
    // fillModal();
    $('.modal').toggle();
  })


  function checkFlags() {
    //if SI or HI marks or score is high are checked, send to find help page
  }

  function checkMarkers() {
//
  }

  function getScore(){
    let score = $('.marked').length
    return score
  }

  //conditionals to fill modal with content
  function fillModal(){
    if (getScore() == 0){
      //modal will tell you that you're the happeist person to ever person
    }
    if (getScore() < 10){
      //modal will have mindfulness exercises at random
    }
    if (getScore() < 20){
      //checkMarkers()
    }
    if (getScore < 25){
      //go to find help page
    }
  }


  $('#close-modal').click(function(){
      $('#modal-bg').hide();
  });


  $('.bubble').click(function(){

    let toggleMarked = $(this).toggleClass('marked');
  })


});



