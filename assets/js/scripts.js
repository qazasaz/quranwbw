//============================================================
// Functions for display settings

//var SURAH_AUDIO_URL = "https://gitlab.com/quranwbw/audios/raw/master/";
var SURAH_AUDIO_URL = "https://quranwbw.com/audios/";

function font(type, modification) {

  if(type == "w-t") {
    
    var fontSize = parseInt($("w-t").css("font-size"), 10);

    if(modification == "increase") {

      var updated_font_size = fontSize + 2 + "px";

      $("w-t").css("font-size", updated_font_size);

    }

    else if(modification == "decrease") {

      var updated_font_size = fontSize - 2 + "px";

      $("w-t").css("font-size", updated_font_size);

    }

    else if(modification == "default") {

      var updated_font_size = 10 + "px";

      $("w-t").css("font-size", updated_font_size);

    }

    localStorage.setItem('translation_font_value', updated_font_size);

  }

  else if(type == "w-l") {
    
    var fontSize = parseInt($("w-l").css("font-size"), 10);

    if(modification == "increase") {

      var updated_font_size = fontSize + 2 + "px";

      $("w-l").css("font-size", updated_font_size);

    }

    else if(modification == "decrease") {

      var updated_font_size = fontSize - 2 + "px";

      $("w-l").css("font-size", updated_font_size);

    }

    else if(modification == "default") {

      var updated_font_size = 10 + "px";

      $("w-l").css("font-size", updated_font_size);

    }

    localStorage.setItem('transliteration_font_value', updated_font_size);

  }

  else if(type == "f-t") {
    
    var fontSize = parseInt($(".f-t").css("font-size"), 10); 

    if(modification == "increase") {

      var updated_font_size = fontSize + 2 + "px";

      $(".f-t").css("font-size", updated_font_size);

    }

    else if(modification == "decrease") {

      var updated_font_size = fontSize - 2 + "px";

      $(".f-t").css("font-size", updated_font_size);

    }

    localStorage.setItem('full_tr_font_value', updated_font_size);

  }

}


function toggle_text(type) {

  if(type == "w-t") {

    var toggle_translation_change = document.getElementById("translation");

    if (toggle_translation_change.innerHTML == "Visible") {

      toggle_translation_change.innerHTML = "Hidden";

      $("w-t").css("display", "none");

      localStorage.setItem('toggle_translation_value', 'none');
      localStorage.setItem('toggle_translation_change', 'Hidden');
    
    }

    else {

      toggle_translation_change.innerHTML = "Visible"; // Hide

      $("w-t").css("display", "block");

      localStorage.setItem('toggle_translation_value', 'block');
      localStorage.setItem('toggle_translation_change', 'Visible');
    
    }

  }    

  else if(type == "w-l") {
      
    var toggle_transliteration_change = document.getElementById("transliteration");

    if (toggle_transliteration_change.innerHTML == "Visible") {

      toggle_transliteration_change.innerHTML = "Hidden";

      $("w-l").css("display", "none");

      localStorage.setItem('toggle_transliteration_value', 'none');
      localStorage.setItem('toggle_transliteration_change', 'Hidden');
    
    }

    else {

      toggle_transliteration_change.innerHTML = "Visible";

      $("w-l").css("display", "block");

      localStorage.setItem('toggle_transliteration_value', 'block');
      localStorage.setItem('toggle_transliteration_change', "Visible");
    
    }

  }

  else if(type == "font_type") {

    var toggle_font_change = document.getElementById("font");

    if (toggle_font_change.innerHTML == "IndoPak") {

      toggle_font_change.innerHTML = "Uthmani";

      $("w-a").css("font-family", "Uthmani");

      localStorage.setItem('toggle_font_value', "Uthmani");
      localStorage.setItem('toggle_font_change', "Uthmani");

    }

    else if (toggle_font_change.innerHTML == "Uthmani") {

      toggle_font_change.innerHTML = "IndoPak";

      $("w-a").css("font-family", "IndoPak");

      localStorage.setItem('toggle_font_value', "IndoPak");
      localStorage.setItem('toggle_font_change', "IndoPak");

    }

  }

} 

function toggle_theme_mode() {
   
  var toggle_theme_mode_change = document.getElementById("theme_mode");

  // Dark theme
  if (toggle_theme_mode_change.innerHTML == "Light") {

      toggle_theme_mode_change.innerHTML = "Dark";

      $('#darktheme').prop("disabled", false);

      localStorage.setItem('toggle_theme_mode_disabled', "false");
      localStorage.setItem('toggle_theme_mode_change', "Dark");

  }

  // Light theme
  else {

      toggle_theme_mode_change.innerHTML = "Light";

      $('#darktheme').prop("disabled", true);

      localStorage.setItem('toggle_theme_mode_disabled', "true");
      localStorage.setItem('toggle_theme_mode_change', "Light");

  }
}

function toggle_display_mode() {
   
  var toggle_display_mode_change = document.getElementById("display_mode");

  if (toggle_display_mode_change.innerHTML == "WBW") {

      toggle_display_mode_change.innerHTML = "Normal";

      $('#normalmode').prop("disabled", false);

      localStorage.setItem('toggle_display_mode_disabled', "false");
      localStorage.setItem('toggle_display_mode_change', "Normal");

  }

  else {

      toggle_display_mode_change.innerHTML = "WBW";

      $('#normalmode').prop("disabled", true);

      localStorage.setItem('toggle_display_mode_disabled', "true");
      localStorage.setItem('toggle_display_mode_change', "WBW");

  }
}


$(document).ready(function() {

  var toggle_font_change = document.getElementById("font");
  var toggle_translation_change = document.getElementById("translation");
  var toggle_transliteration_change = document.getElementById("transliteration");
  var toggle_theme_mode_change = document.getElementById("theme_mode");
  var toggle_display_mode_change = document.getElementById("display_mode");
  //===========================================================================

  var arabic_font_value = localStorage.getItem('arabic_font_value');
  var translation_font_value = localStorage.getItem('translation_font_value');
  var transliteration_font_value = localStorage.getItem('transliteration_font_value');
  var full_tr_font_value = localStorage.getItem('full_tr_font_value');

  $("w-a").css("font-size", arabic_font_value);
  $("w-t").css("font-size", translation_font_value);
  $("w-l").css("font-size", transliteration_font_value);
  $(".f-t").css("font-size", full_tr_font_value);
  //============================================================
  
  var toggle_font = localStorage.getItem('toggle_font_change');
  var toggle_font_value = localStorage.getItem('toggle_font_value');

  $("w-a").css("font-family", toggle_font_value);

  if (localStorage.getItem("toggle_font_change") === null) { toggle_font_change.innerHTML = "IndoPak"; }
  else { toggle_font_change.innerHTML = toggle_font; }
  //============================================================
  
  var toggle_translation = localStorage.getItem('toggle_translation_change');
  var toggle_translation_value = localStorage.getItem('toggle_translation_value');

  $("w-t").css("display", toggle_translation_value);

  if (localStorage.getItem("toggle_translation_change") === null) { toggle_translation_change.innerHTML = "Visible"; }
  else { toggle_translation_change.innerHTML = toggle_translation; }
  //============================================================

  var toggle_transliteration = localStorage.getItem('toggle_transliteration_change');
  var toggle_transliteration_value = localStorage.getItem('toggle_transliteration_value');
  
  $("w-l").css("display", toggle_transliteration_value);

  if (localStorage.getItem("toggle_transliteration_change") === null) { toggle_transliteration_change.innerHTML = "Visible"; }
  else { toggle_transliteration_change.innerHTML = toggle_transliteration; }
  //============================================================

  var toggle_theme_mode = localStorage.getItem('toggle_theme_mode_change');
  var toggle_theme_mode_disabled = localStorage.getItem('toggle_theme_mode_disabled');

  if(toggle_theme_mode_disabled == "true") $('#darktheme').prop("disabled", true);
  else if(toggle_theme_mode_disabled == "false") $('#darktheme').prop("disabled", false);
  
  if (localStorage.getItem("toggle_theme_mode_change") === null) { toggle_theme_mode_change.innerHTML = "Light"; }
  else { toggle_theme_mode_change.innerHTML = toggle_theme_mode; }
  //===========================================================================

  var toggle_display_mode = localStorage.getItem('toggle_display_mode_change');
  var toggle_display_mode_disabled = localStorage.getItem('toggle_display_mode_disabled');

  if(toggle_display_mode_disabled == "true") $('#normalmode').prop("disabled", true);
  else if(toggle_display_mode_disabled == "false") $('#normalmode').prop("disabled", false);
  
  if (localStorage.getItem("toggle_display_mode_change") === null) { toggle_display_mode_change.innerHTML = "WBW"; }
  else { toggle_display_mode_change.innerHTML = toggle_display_mode; }
  //===========================================================================

});


function ResetSettings() {

  var reset_settings_id = document.getElementById("reset-settings");

  reset_settings_id.innerHTML = "Please refresh the page";

  window.localStorage.clear();

}


document.onkeydown = checkKey;

function checkKey(e) {

  e = e || window.event;

  if (e.keyCode == '84') toggle_theme_mode();
  
  else if (e.keyCode == '70') toggle_text('font_type');

  else if (e.keyCode == '77') toggle_display_mode();

}

//============================================================

$('.ayah, s-w, .f-t')

  // To stop overlapping
  .each(function(event) { $(this).data('audio-object', new Audio()); })

  .on('click', function (event, e) {

    var e=event || window.event;
   
    e.cancelBubble = true;

    if (e.stopPropagation) e.stopPropagation();
    
    var current_class = $(this).attr('class').split(' ')[0]; //0 to retrieve first class

    var ayah_number = $(this).attr('class').split(' ')[1];

    if(current_class == "ayah") {

      $(".ayah").removeClass("ayah-hover");
      $(".ayah." + ayah_number).addClass("ayah-hover");
      //$(".ayah." + ayah_number).get(0).scrollIntoView();
      var ayah_ayah = $(this).attr('class').split(' ')[1]; // ayah number
      var ayah_audio_file = ('00' + SURAH_NUMBER).slice(-3) + ('00' + ayah_ayah).slice(-3);
      var audio_url = SURAH_AUDIO_URL + "ayahs/arabic/" + ayah_audio_file + ".mp3";
    
    }

    else if(current_class == "w" || current_class == "word") {

      var word_ayah = $(this.parentNode).attr('class').split(' ')[1]; // ayah number
      var word_word = $(this).attr('class').split(' ')[1]; // word number
      var word_audio_file = SURAH_NUMBER + "/" + ('00' + SURAH_NUMBER).slice(-3) + "_" + ('00' + word_ayah).slice(-3) + "_" + ('00' + word_word).slice(-3);
      var audio_url = SURAH_AUDIO_URL + "words/" + word_audio_file + ".mp3";
   
    }
    
    else {

      var ayah_ayah = $(this.parentNode).attr('class').split(' ')[2]; // ayah number
      var ayah_audio_file = ('00' + SURAH_NUMBER).slice(-3) + ('00' + ayah_ayah).slice(-3);
      var audio_url = SURAH_AUDIO_URL + "ayahs/english/" + ayah_audio_file + ".mp3";

    }

    $('.ayah, s-w, .f-t').each(function() {

      var audio = $(this).data('audio-object');

      if(audio.src) {
        audio.pause();
        audio.currentTime = 0;
        $("s-w w-a").removeClass("AR-hover");
      }

    });

    var clickedAudio = $(this).data('audio-object');

    if(!clickedAudio.src) { clickedAudio.src = audio_url; }

    clickedAudio.play();

    if(current_class == "ayah") clickedAudio.addEventListener('timeupdate', word_highlighter);

    clickedAudio.onended = function() { 
      $("s-w w-a").removeClass("AR-hover"); 
      $(".ayah." + ayah_number).removeClass("ayah-hover"); 
    };

    //==================================================================
    // Word highlighter
    function word_highlighter({ ayah_no = ayah_number } = {}) {

      var number_of_words = $('.ayah.' + ayah_no + ' s-w').length;

      for (var i = 1 ; i <= number_of_words; i++) {

        var prev_i = i - 1;

        var time = $(".s-a." + ayah_no + " s-w." + i).attr("data-wts");
        //var time = $(".word." + i).attr('class').split(' ')[3];

        if(time < clickedAudio.currentTime) {

          if (i > 0) $(".s-a." + ayah_no + " s-w." + prev_i + " w-a").removeClass("AR-hover");

          $(".s-a." + ayah_no + " s-w." + i + " w-a").addClass("AR-hover");

        }

      }

    }
    //==================================================================

});


$(document).ready(function(){

  if ($(window).width() > 991) {
    $('.dropdown').hover(function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(100);
    }, function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(100);
    });
  }

  $('#SettingsModal').on('shown.bs.modal', function (e) {
    $('meta[name=viewport]').attr('content', 'width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no');
  })

  $('#SettingsModal').on('hidden.bs.modal', function (e) {
    $('meta[name=viewport]').attr('content', 'width=device-width, initial-scale=1, shrink-to-fit=no');
  })

  $('.bottom-nav__item--surahplayer').hover(function() {
    $('.ap__controls').css("display", "block");
  }, function() {
    $('.ap__controls').css("display", "none");
  });  

  $('.icon-play').on('click', function() {
    $('.track__time').css("display", "block");
  });

});

/*
$(document).ready(function(){ 

  $('.ayah').attr('title','Click to play the ayah');
  $('.word').attr('title','Click to play the word');
  $('.full-translation').attr('title','Click to play the translation');

});
*/

/*
$(document).ready(function(){
  if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
      backToTop = function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > scrollTrigger) {
          $('#back-to-top').addClass('show');
        } else {
          $('#back-to-top').removeClass('show');
        }
      };
    backToTop();
    $(window).on('scroll', function () {
      backToTop();
    });
    $('#back-to-top').on('click', function (e) {
      e.preventDefault();
      $('html,body').animate({
        scrollTop: 0
      }, 700);
    });
  }
});
*/

/*
$(document).ready(function(){

  if( ($("div.TR:visible").length === 0) || ($("div.TRL:visible").length === 0) ) {
    $('.full-translation').css("padding-top", "20px");
    $('.ayah-number').css("margin-top", "35px");
    $('.AR').css("margin-bottom", "8px");
  }
  else {
    $('.full-translation').css("padding-top", "0px");
    $('.ayah-number').css("margin-top", "60px");
    $('.AR').css("margin-bottom", "-5px");
  }

});
*/


//============================================================
/*!
 * jQuery script to hide bootstrap fixed navbar on scroll down and reveal on scroll up.
 * 
 * Copyright 2016 James Buncle
 * 
 * Released under the MIT license.
 * http://jquery.org/license
 *
 */
(function ($) {
  $(document).ready(function () {
    var $nav = $('.fixed-top');
    //var $audioplayer = $('.audio-player');
    var lastScrollTop = 0;
    var direction;
    $(function () {
      $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();
        if (lastScrollTop < scrollTop && scrollTop > $nav.outerHeight() && direction != 'down') {
            //Scroll down
            $nav.stop().fadeOut();
            //$audioplayer.stop().fadeOut();
            direction = 'down';
        } else if (lastScrollTop > scrollTop  && direction != 'up') {
            // Scroll up
            $nav.stop().fadeIn();
            //$audioplayer.stop().fadeIn();
            direction = 'up';
        }
        lastScrollTop = scrollTop;
      });
    });
  });
}(jQuery));