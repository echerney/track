//store of the thoughts appearing on the page for mild depression range scores
let thoughtsArray = [
  'We can sometimes feel negative thoughts invading our mind for no apparent reason. Try writing out positive self-statements to counteract those negative ones you’re thinking.',
  'Visualization is important. Try visualizing the best part of your day so far.',
  'Visualization is important. Try visualizing the best part of your week so far.',
  'Visualization can be very powerful. When you’re feeling especially bad, imagine how your best friend would respond to the negative thoughts you’re having.',
  'Try writing out a positive self-statement about something that went wrong in the past week. How did you deal with it? Did you learn something valuable? If nothing else, you survived and that’s something to be celebrated!'
];

$(document).ready(function() {
  console.log('werkin');


//NAVBAR
  //toggle function to hide login until button pressed
  $('#show-nav').click(function(){
    $('.nav-hide').fadeIn();
    $('#show-nav').hide();
  });


//ASSESSMENTS
  //on click, get the results of the assessment
  $('#assess-submit').click(function(){
    if($('.flag').hasClass('marked')) {
      produceHelpLink();
      $('#modal-bg').toggle();
    } else {
      checkFlags();
      getScore();
      fillModal();
      $('#modal-bg').toggle();
    }
  });

  //if the suicide or self harm bubbles have been filled, produce the help link in the model.
  function checkFlags() {
    if($('.flag').hasClass('marked')) {
      produceHelpLink();
    }
  };

  //fill model with suggestion to seek help and a link to the find help page
  function produceHelpLink() {
    $('.added').remove();
    $('#modal-content').append(
      '<p class="flagged-content">It looks like you are having a really hard time right now. Please let us put you in touch with some mental health professionals to get you the help you need!</p> <a href="./help"><button class="help-button">Find Help</button></a>'
      );
  };

  //adds the close button to the model
  function addModalButton() {
    $('#modal-content').append('<button class="added" id="close-modal">close</button>');
    $('#close-modal').click(function(){
      $('#modal-bg').hide();
  });
  };

  //shows model filled with suggestions dynamically created and dependent on answers given
  function checkMarkers() {
    let foodIcon = '<div class="added ring"><img class="forks added" src="http://icons.iconarchive.com/icons/icons8/ios7/128/Food-Cutlery-icon.png"></div></img>'
    let bedIcon = '<div class="added ring"><img class="bed added" src="http://icons.iconarchive.com/icons/icons8/ios7/128/Household-Bed-icon.png"></div></img>'
    let bathIcon = '<div class="added ring"><img class="shower added" src="http://icons.iconarchive.com/icons/icons8/windows-8/256/Household-Hot-Tube-icon.png"></div></img>'
    if($('.twelfth').hasClass('marked')){
      $('#modal-content').append(foodIcon +
        '<p class="added">Sometimes it can be hard to remember or motivate yourself for regular meals. When you have the energy, prep meals ahead of time so that you can eat even when you feel spent. Setting timers for meals is also a good way to make sure you are getting the nutrition you need!</p>'
        );
    }
    if($('.thirteenth').hasClass('marked')){
      $('#modal-content').append(bedIcon +
        '<p class="added">Insomnia is the worst. Make sure your caffiene consumption isn\'t causing any trouble. It can also be a side effect of some medication, so check with your fdoctor to see if that might be the case. Regular exercise can keep insomnia at bay as well as keeping as close to a normal schedule as possible.</p>'
        );
    }
    if($('.fourteenth').hasClass('marked')){
      $('#modal-content').append(foodIcon +
        '<p class="added">Sometimes depression can cause us to overeat. If this is the case for you, try to stick to a scheduled meal plan so that you don\'t end up overeating. Be kind to yourself!</p>'
        );
    }
    if($('.fifteenth').hasClass('marked')){
      $('#modal-content').append(bedIcon +
        '<p class="added">Keeping a normal schedule is a great way to get yourself out of oversleeping. Set an alarm for the morning and make sure to get up, even if it\'s just to walk around the block. Go back to sleep if you need it, but give your body a chance to wake up first.</p>'
        );
    }
    if($('.sixteenth').hasClass('marked')){
      $('#modal-content').append(bathIcon +
        '<p class="added">Sometimes it helps to set schedules for things like showering and getting dressed for the day when depression is weighing us down. Phone alarms can help remind you of things you may not feel like doing. </p>'
        );
    }
    if($('#modal-content').children().length === 1) {
      $('#modal-content').append(
        '<p class="added">Our brains can feel like they\'re fighting against us sometimes. Thought logs and journals can help keep track of how we are feeling when things seem hard or illogical. When writing down how you\'re feeling, ask yourself if your best friend would agree with what you\'re saying about yourself. If they don\'t think it\'s true then it\'s probably not true.</p>'
        );
    }
    addModalButton()
  }

  //adds up number of bubbles filled in
  function getScore(){
    $('.added').remove()
    let score = $('.marked').length
    return score
  };

  //conditionals to fill modal with content
  function fillModal(){
    if (getScore() < 5){
      $('#modal-content').append('<p class="added">You might just be the happiest person to ever exist.</p>');
      addModalButton();
      // $('#modal-bg').toggle();
    } else if (getScore() < 21){
      $('#modal-content').append('<p class="added">'+randomThought()+'</p>');
      addModalButton();
      // $('#modal-bg').toggle();
    } else if (getScore() < 36){
      checkMarkers()
    } else {
      produceHelpLink();
    }
  };

  function randomThought() {
    let num = Math.floor(Math.random() * thoughtsArray.length);
    return thoughtsArray[num]
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
    $('.help-inst').fadeOut('300');
    let zipInput = $('#zipcode').val();
    $.ajax({
      url: './help/search',
      method: 'GET',
      dataType: 'json',
      data: {zip: zipInput},
      success: function(data){
        const $body = $('body');
        let $div = $('.results');
        data.forEach(function(facility){
          let $name1 = $('<h3 class="facility-link">').html('<a href="'+facility.website+'">'+facility.name_1+'</a>');
          $div.append($name1);
          let $name2 = $('<p>').text(facility.name_2);
          $div.append($name2);
          let $phone = $('<p>').text('Phone Number: '+facility.phone)
          $div.append($phone);
          let $city = $('<p>').html(facility.city+', NY<br><br>');
          $div.append($city);
        });
        $body.append($div);
      }
    })
  });

});



