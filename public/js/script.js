$(document).ready(function() {
  console.log('werkin')


//NAVBAR
  //toggle function to hide login until button pressed
  $('#show-nav').click(function(){
    $('.nav-hide').fadeIn();
    $('#show-nav').hide();
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

    if(clickedColumn === 'c3' ){
      $('.'+clickedRow).removeClass('marked');
      $(this).toggleClass('marked');
      $('.'+clickedRow+'.c1').toggleClass('marked');
      $('.'+clickedRow+'.c2').toggleClass('marked');
      $('.'+clickedRow).addClass('animated pulse')
      window.setTimeout(function(){
        $('.'+clickedRow).removeClass('animated pulse')},
       2000);
    }

    if(clickedColumn === 'c2' ){
      $('.'+clickedRow).removeClass('marked');
      $(this).toggleClass('marked');
      $('.'+clickedRow+'.c1').toggleClass('marked');
      $('.'+clickedRow).addClass('animated pulse')
      window.setTimeout(function(){
        $('.'+clickedRow).removeClass('animated pulse')},
       2000);
    }

    if(clickedColumn === 'c1' && $(this).hasClass('marked') === true) {
      $('.'+clickedRow).removeClass('marked');
    } else if(clickedColumn === 'c1' && $(this).hasClass('marked') === false) {
      $('.'+clickedRow).removeClass('marked');
      $(this).toggleClass('marked');
      $('.'+clickedRow).addClass('animated pulse')
      window.setTimeout(function(){
        $('.'+clickedRow).removeClass('animated pulse')},
       2000);
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
      success: function(data){
        const $body = $('body');
        let $div = $('<div>');
        data.forEach(function(facility){
          let $name1 = $('<h3>').text(facility.name_1);
          $div.append($name1);
          let $name2 = $('<p>').text(facility.name_2);
          $div.append($name2);
          let $city = $('<p>').text(facility.city);
          $div.append($city);
        });
        $body.append($div);
      }
    })
  })




});



