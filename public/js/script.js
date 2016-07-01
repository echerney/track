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
    // let val1 = parseInt($('#assess1').val());
    // let val2 = parseInt($('#assess2').val());
    // let val3 = parseInt($('#assess3').val());
    // let val4 = parseInt($('#assess4').val());
    // let score = val1 + val2 + val3 + val4
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
    let clickedRow = this.classList[1]
    let clickedColumn = this.classList[2]
    if(clickedColumn === 'c1') {
      $('.'+clickedRow).removeClass('marked');
      $(this).toggleClass('marked');
      $('.'+clickedRow).addClass('animated pulse')
    }
    if(clickedColumn === 'c2' ){
      $('.'+clickedRow).removeClass('marked');
      $(this).toggleClass('marked');
      $('.'+clickedRow+'.c1').toggleClass('marked');
    }
    if(clickedColumn === 'c3' ){
      $('.'+clickedRow).removeClass('marked');
      $(this).toggleClass('marked');
      $('.'+clickedRow+'.c1').toggleClass('marked');
      $('.'+clickedRow+'.c2').toggleClass('marked');
    }
    console.log(clickedRow)
    console.log(clickedColumn)

  })

//FIND HELP PAGES

  $('#submit-zip').click(function(){
    let zipInput = $('#zipcode').val();
    $.ajax({
      url: './help/search',
      method: 'GET',
      dataType: 'json',
      data: {zip: zipInput},
    })
    .done(function(data) {
      console.log(data[0].zip);
    })
  })




});



