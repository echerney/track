$(document).ready(function() {
  console.log('werkin')


//NAVBAR
  //toggle function to hide login until button pressed
  $('#show-nav').click(function(){
    $('.nav-hide').fadeIn();
    $('#show-nav').hide();
  })


//ASSESSMENTS
  //on click, get the results of the assessment
  $('#assess-submit').click(function(){
    checkFlags();
    getScore();
    console.log(getScore())
    fillModal();
    // $('#modal-bg').toggle();
  })

  //if the suicide or self harm bubbles have been filled, produce the help link in the model.
  function checkFlags() {
    if($('.flag').hasClass('marked')) {
      produceHelpLink();
    }
  }

  //fill model with suggestion to seek help and a link to the find help page
  function produceHelpLink() {
    $('#modal-content').append(
      "<p class='added'>It looks like you're having a really hard time right now. Please let us put you in touch with some mental health professionals to get you the help you need!</p> <a class='added' href='./help'><button class='help-button'>Find Help</button></a>"
      );
    $('#modal-bg').toggle();
  }

  //adds the close button to the model
  function addModalButton() {
    $('#modal-content').append('<button class="added" id="close-modal">close</button>');
    $('#close-modal').click(function(){
      $('#modal-bg').hide();
  });
  }

  //shows model filled with suggestions dynamically created and dependent on answers given
  function checkMarkers() {
    if($('.twelfth').hasClass('marked')){
      $('#modal-content').append(
        '<p class="added">not eating</p>'
        );
    }
    if($('.thirteenth').hasClass('marked')){
      $('#modal-content').append(
        '<p class="added">not sleeping</p>'
        );
    }
    if($('.fourteenth').hasClass('marked')){
      $('#modal-content').append(
        '<p class="added">too much eating</p>'
        );
    }
    if($('.fifteenth').hasClass('marked')){
      $('#modal-content').append(
        '<p class="added">too much sleeping</p>'
        );
    }
    if($('.sixteenth').hasClass('marked')){
      $('#modal-content').append(
        '<p class="added">not clean</p>'
        );
    }
    if($('#modal-content').children().length === 1) {
      $('#modal-content').append(
        '<p class="added">everything is going to be okay</p>'
        );
    }
    addModalButton()
    $('#modal-bg').toggle();
  }

  //adds up number of bubbles filled in
  function getScore(){
    $('.added').remove()
    let score = $('.marked').length
    return score
  }

  //conditionals to fill modal with content
  function fillModal(){
    if (getScore() < 5){
      console.log('happy')
      //modal will tell you that you're the happeist person to ever person
    } else if (getScore() < 21){
      console.log('mild')
      //modal will have mindfulness exercises at random
    } else if (getScore() < 36){
      checkMarkers()
      console.log('medium')
    } else {
      produceHelpLink();
    }
  }

  //filling bubbles
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
  })




//HELP PAGE
  //call to the api for specified zip code and populate list of places
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



