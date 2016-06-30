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
    fillModal();
    $('.modal').toggle();
  })


  //conditionals to fill modal with content
  function fillModal(){
    if($('#assess1').val() == 1){
      $('#box1').text('box1')
    };
    if($('#assess2').val() == 1){
      $('#box2').text('box2')
    };
    if($('#assess3').val() == 1){
      $('#box3').text('box3')
    };
    if($('#assess4').val() == 1){
      $('#box4').text('box4')
    };
  }


  $('#close-modal').click(function(){
      $('#modal-bg').hide();
  });

});



