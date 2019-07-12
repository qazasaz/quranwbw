// audio urls
var audio_url_main = "https://quranwbw.github.io/",
	audio_url_arabic = audio_url_main + "audio-ayah-arabic/",
	audio_url_english = audio_url_main + "audio-ayah-english/",
	audio_url_words = audio_url_main + "audio-words-new/";

var surah_names = ["", "Al-Faatiha", "Al-Baqara", "Aal-i-Imraan", "An-Nisaa", "Al-Maaida", "Al-An'aam", "Al-A'raaf", "Al-Anfaal", "At-Tawba", "Yunus", "Hud", "Yusuf", "Ar-Ra'd", "Ibrahim", "Al-Hijr", "An-Nahl", "Al-Israa", "Al-Kahf", "Maryam", "Taa-Haa", "Al-Anbiyaa", "Al-Hajj", "Al-Muminoon", "An-Noor", "Al-Furqaan", "Ash-Shu'araa", "An-Naml", "Al-Qasas", "Al-Ankaboot", "Ar-Room", "Luqman", "As-Sajda", "Al-Ahzaab", "Saba", "Faatir", "Yaseen", "As-Saaffaat", "Saad", "Az-Zumar", "Al-Ghaafir", "Fussilat", "Ash-Shura", "Az-Zukhruf", "Ad-Dukhaan", "Al-Jaathiya", "Al-Ahqaf", "Muhammad", "Al-Fath", "Al-Hujuraat", "Qaaf", "Adh-Dhaariyat", "At-Tur", "An-Najm", "Al-Qamar", "Ar-Rahmaan", "Al-Waaqia", "Al-Hadid", "Al-Mujaadila", "Al-Hashr", "Al-Mumtahana", "As-Saff", "Al-Jumu'a", "Al-Munaafiqoon", "At-Taghaabun", "At-Talaaq", "At-Tahrim", "Al-Mulk", "Al-Qalam", "Al-Haaqqa", "Al-Ma'aarij", "Nooh", "Al-Jinn", "Al-Muzzammil", "Al-Muddaththir", "Al-Qiyaama", "Al-Insaan", "Al-Mursalaat", "An-Naba", "An-Naazi'aat", "Abasa", "At-Takwir", "Al-Infitaar", "Al-Mutaffifin", "Al-Inshiqaaq", "Al-Burooj", "At-Taariq", "Al-A'laa", "Al-Ghaashiya", "Al-Fajr", "Al-Balad", "Ash-Shams", "Al-Lail", "Ad-Dhuhaa", "Ash-Sharh", "At-Tin", "Al-Alaq", "Al-Qadr", "Al-Bayyina", "Az-Zalzala", "Al-Aadiyaat", "Al-Qaari'a", "At-Takaathur", "Al-Asr", "Al-Humaza", "Al-Fil", "Quraish", "Al-Maa'un", "Al-Kawthar", "Al-Kaafiroon", "An-Nasr", "Al-Masad", "Al-Ikhlaas", "Al-Falaq", "An-Naas"];

function font(type, modification) {
  var updated_font_size;
  if(type == "wa") {
    var fontSize = parseInt($(".wa").css("font-size"), 10);
    if(modification == "increase") {
      if(fontSize >= 112) updated_font_size = "112px";
      else updated_font_size = fontSize + 2 + "px";
      $(".wa").css("font-size", updated_font_size);
      $(".ar-c-f").text("(" + updated_font_size + ")");
    }
    else if(modification == "decrease") {
      if(fontSize <= 16) updated_font_size = "16px";
      else updated_font_size = fontSize - 2 + "px";
      $(".wa").css("font-size", updated_font_size);
      $(".ar-c-f").text("(" + updated_font_size + ")");
    }
    localStorage.setItem('arabic_font_value', updated_font_size);
  }

  else if(type == "wt") {
    var fontSize = parseInt($(".wt").css("font-size"), 10);
    if(modification == "increase") {
      if(fontSize >= 70) updated_font_size = "70px";
      else updated_font_size = fontSize + 2 + "px";
      $(".wt").css("font-size", updated_font_size);
      $(".tr-c-f").text("(" + updated_font_size + ")");
    }
    else if(modification == "decrease") {
      if(fontSize <= 8) updated_font_size = "8px";
      else updated_font_size = fontSize - 2 + "px";
      $(".wt").css("font-size", updated_font_size);
      $(".tr-c-f").text("(" + updated_font_size + ")");
    }
    localStorage.setItem('translation_font_value', updated_font_size);
  }

  else if(type == "wl") {
    var fontSize = parseInt($(".wl").css("font-size"), 10);
    if(modification == "increase") {
      if(fontSize >= 70) updated_font_size = "70px";
      else updated_font_size = fontSize + 2 + "px";
      $(".wl").css("font-size", updated_font_size);
      $(".tl-c-f").text("(" + updated_font_size + ")");
    }
    else if(modification == "decrease") {
      if(fontSize <= 8) updated_font_size = "8px";
      else updated_font_size = fontSize - 2 + "px";
      $(".wl").css("font-size", updated_font_size);
      $(".tl-c-f").text("(" + updated_font_size + ")");
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

  if(type == "wt") {

    var toggle_translation_change = document.getElementById("translation");

    if (toggle_translation_change.innerHTML == "Visible") {

      toggle_translation_change.innerHTML = "Hidden";

      $(".wt").css("display", "none");

      localStorage.setItem('toggle_translation_value', 'none');
      localStorage.setItem('toggle_translation_change', 'Hidden');
    
    }

    else {

      toggle_translation_change.innerHTML = "Visible"; // Hide

      $(".wt").css("display", "block");

      localStorage.setItem('toggle_translation_value', 'block');
      localStorage.setItem('toggle_translation_change', 'Visible');
    
    }

  }    

  else if(type == "wl") {
      
    var toggle_transliteration_change = document.getElementById("transliteration");

    if (toggle_transliteration_change.innerHTML == "Visible") {

      toggle_transliteration_change.innerHTML = "Hidden";

      $(".wl").css("display", "none");

      localStorage.setItem('toggle_transliteration_value', 'none');
      localStorage.setItem('toggle_transliteration_change', 'Hidden');
    
    }

    else {

      toggle_transliteration_change.innerHTML = "Visible";

      $(".wl").css("display", "block");

      localStorage.setItem('toggle_transliteration_value', 'block');
      localStorage.setItem('toggle_transliteration_change', "Visible");
    
    }

  }

  else if(type == "font_type") {

    var toggle_font_change = document.getElementById("font");

    if (toggle_font_change.innerHTML == "IndoPak") {

      toggle_font_change.innerHTML = "Uthmani";

      $(".wa").css("font-family", "Uthmani");

      localStorage.setItem('toggle_font_value', "Uthmani");
      localStorage.setItem('toggle_font_change', "Uthmani");

    }

    else if (toggle_font_change.innerHTML == "Uthmani") {

      toggle_font_change.innerHTML = "IndoPak";

      $(".wa").css("font-family", "IndoPak");

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

      var darkModeEnabled = document.getElementById("darktheme");

      // if dark.css already exists, then enable it, else include it
      if(darkModeEnabled) $('#darktheme').prop("disabled", false);
      else $('head').append('<link rel="stylesheet" href="../assets/css/dark.css" id="darktheme"/>');

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

      var normalModeEnabled = document.getElementById("normalmode");

      // if normal.css already exists, then enable it, else include it
      if(normalModeEnabled) $('#normalmode').prop("disabled", false);
      else $('head').append('<link rel="stylesheet" href="../assets/css/normal.css" id="normalmode"/>');

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

function toggle_auto_scroll() {
   
  var toggle_auto_scroll_change = document.getElementById("auto_scroll");

  if (toggle_auto_scroll_change.innerHTML == "Yes") {
      toggle_auto_scroll_change.innerHTML = "No";
      localStorage.setItem('auto_scroll', "No");
  }

  else {
      toggle_auto_scroll_change.innerHTML = "Yes";
      localStorage.setItem('auto_scroll', "Yes");
  }

}



/* Function to load ayahs from JSON file */
function loadAyahs(surah_no, ayah_from, ayah_till) {

  $.getJSON("data/" + surah_no + ".json", function(data){

    var ayah, word, total_ayahs = Object.keys(data).length, ayahs_to_load;

    for(ayah = ayah_from; ayah <= ayah_till; ayah++) {

      var total_words = data[ayah]["w"].length,
          ayah_translation = data[ayah]["a"]["g"],
          //ayah_timestamp = data[ayah]["a"]["h"];
          //single_ayah_before = "<div class='col-11 s-a' id=" + ayah + " t=" + ayah_timestamp + "><div class=a><div class='w a-n-a'><h3 class=a-n>" + ayah + "</h3></div>";
          single_ayah_before = "<div class='col-11 s-a " + surah_no + "' id=" + ayah + "><div class=a><div class='w a-n-a'><h3 class=a-n>" + ayah + "</h3></div>",
          single_ayah_words = "";

      for(word = 0; word <= total_words - 1; word++) {

        var word_timestamp = data[ayah]["w"][word]["b"];
            word_arabic = data[ayah]["w"][word]["c"],
            word_transliteration = data[ayah]["w"][word]["d"],
            word_translation = data[ayah]["w"][word]["e"], 

        single_ayah_words += "<span class=sw data-ts=" + word_timestamp + "><span class=wl>" + word_transliteration + "</span><span class=wa>" + word_arabic + "</span><span class=wt>" + word_translation + "</span></span>";

      }

      if(ayah == total_ayahs)
        var single_ayah_after = "</div><div class='col-12 f-t'><h3 class=a-n>" + ayah + "</h3> " + ayah_translation + "</div><br></div><div class='col-1 a-n-b'> <h3 class=a-n>" + ayah + "</h3> </div>";
      else
        var single_ayah_after = "</div><div class='col-12 f-t'><h3 class=a-n>" + ayah + "</h3> " + ayah_translation + "</div><hr></div><div class='col-1 a-n-b'> <h3 class=a-n>" + ayah + "</h3> </div>";

      var complete_ayah = single_ayah_before + single_ayah_words + single_ayah_after;

      $(".full-surah").append(complete_ayah);

      // console.log(complete_ayah);
    
    }

  });

}


/* Function to load duas from JSON file */
function loadDuas(surah_no, ayah_from, ayah_till) {

  $.getJSON("data/" + surah_no + ".json", function(data){

    var ayah, word, total_ayahs = Object.keys(data).length, ayahs_to_load;

    for(ayah = ayah_from; ayah <= ayah_till; ayah++) {

      var total_words = data[ayah]["w"].length,
          ayah_translation = data[ayah]["a"]["g"],
          single_ayah_before = "<div class='col-11 s-a " + surah_no + "' id=" + ayah + " style='flex: 0 0 97.5%; max-width: 97.5%;'><div style='text-align: center; padding-bottom: 20px;'><a class='surah-name-duas' target='_blank' href=/" + surah_no + "/" + ayah + ">Surah " + surah_names[surah_no] + ", Ayah " + ayah + "</a></div><div class=a><span></span>",
          single_ayah_words = "";

      for(word = 0; word <= total_words - 1; word++) {

        var word_timestamp = data[ayah]["w"][word]["b"];
            word_arabic = data[ayah]["w"][word]["c"],
            word_transliteration = data[ayah]["w"][word]["d"],
            word_translation = data[ayah]["w"][word]["e"], 

        single_ayah_words += "<span class=sw data-ts=" + word_timestamp + "><span class=wl>" + word_transliteration + "</span><span class=wa>" + word_arabic + "</span><span class=wt>" + word_translation + "</span></span>";

      }

      if(ayah == total_ayahs)
        var single_ayah_after = "</div><div class='col-12 f-t'>" + ayah_translation + "</div><br></div>";
      else
        var single_ayah_after = "</div><div class='col-12 f-t'>" + ayah_translation + "</div><hr></div>";

      var complete_ayah = single_ayah_before + single_ayah_words + single_ayah_after;

      console.log(complete_ayah);
    
    }

  });

}


/* Surah audio player */
var bottom_nav_surahtime = document.getElementById("bottom-nav-surahayah");

function playSurah(totalAyahs, currentAyah) {

  const paragraph = $(`.s-a#${currentAyah} .a`);

  if(currentAyah <= totalAyahs) {
      
    paragraph.addClass("ayah-hover");
    $('html, body').animate({ scrollTop: paragraph.offset().top - 65 }, 1000);
    var next = currentAyah + 1;
    var ayah_audio_file = ('00' + surah_number).slice(-3) + (`00${currentAyah}`).slice(-3);
    var ayah_audio_file_next = ('00' + surah_number).slice(-3) + ("00" + next).slice(-3);

    // var recitor = "Yasser_Ad-Dussary_128kbps/";
    // var recitor = "Alafasy_128kbps/";

    // const audio = new Audio("http://everyayah.com/data/"+recitor+ayah_audio_file+".mp3");
    // if(currentAyah < totalAyahs) {
    //   const audionext = new Audio("http://everyayah.com/data/"+recitor+ayah_audio_file_next+".mp3");
    // }

    var audio_url = audio_url_arabic + ayah_audio_file + ".mp3";
    if(currentAyah < totalAyahs) {
      new Audio(audio_url_arabic + ayah_audio_file_next + ".mp3");
    }

    function word_highlighter() {
      var number_of_words = $(".s-a#" + currentAyah + " .a .sw").length;
      for (var word_no = 0 ; word_no <= number_of_words; word_no++) {
        var prev_word_no = word_no - 1, prev_ayah_no = currentAyah - 1;
        var time = $(".s-a#" + currentAyah + " .a").children().eq(word_no).attr("data-ts");
        if(time < audio.currentTime) {
          if (word_no > 0) $(".s-a#" + currentAyah + " .a").children().eq(prev_word_no).children(".wa").removeClass("wa-hover");
          $(".s-a#" + currentAyah + " .a").children().eq(word_no).children(".wa").addClass("wa-hover");
          $(".s-a#" + prev_ayah_no + " .a").children().eq(word_no).children(".wa").removeClass("wa-hover");
        }
      }
    }

    audio.currentTime = 0;
    audio.pause();
    audio.removeEventListener('timeupdate', word_highlighter);

    audio.src = audio_url;
    audio.load();
    audio.play();

    audio.addEventListener('timeupdate', word_highlighter);

    $("#dummyElement").trigger("click");

    var count = 0;

    function detectEnd() {
      if(currentAyah < totalAyahs) {
        if (audio.duration - audio.currentTime <= 0.5) {
          if (!count) {
            audio.pause();
            audio.currentTime = 0;
            playSurah(totalAyahs, currentAyah + 1);
            paragraph.removeClass("ayah-hover");
            $(".wa").removeClass("wa-hover");
            audio.removeEventListener('timeupdate', word_highlighter);
          }
          count++;
        }
      }
    }

    audio.addEventListener('timeupdate', detectEnd, false);

    $('.bismillah, .a, .sw, .f-t').off("click.audio").on("click.audio", function() {
      $('.play-pause-icon').removeClass('pause-icon');
      $('.play-pause-icon').addClass('play-icon');
      audio.pause();
    });

    $('.bottom-nav__item.bottom-nav-surahplayer2').off("click.audio").on("click.audio", function() {
      if(audio.paused) {
        $('.play-pause-icon').removeClass('play-icon');
        $('.play-pause-icon').addClass('pause-icon');
        audio.play();
      }
      else if(!audio.paused) {
        $('.play-pause-icon').removeClass('pause-icon');
        $('.play-pause-icon').addClass('play-icon');
        audio.pause();
      }
    });

    // Display the ayah number on bottom
    var bottom_nav_surahtime = document.getElementById("bottom-nav-surahayah");
    bottom_nav_surahtime.innerHTML = "(Ayah " + currentAyah + ")";

    if(currentAyah == totalAyahs) {
      audio.onended = () => {
          audio.currentTime = 0;
          paragraph.removeClass("ayah-hover");
          $(".wa").removeClass("wa-hover");
          $('.play-pause-icon').removeClass('pause-icon');
          $('.play-pause-icon').addClass('play-icon');
          $('#bottom-nav-surahayah').css("display", "none");
          $('.bottom-nav__item.bottom-nav-surahplayer2').off("click.audio").on("click.audio", function() {
            $('.play-pause-icon').removeClass('play-icon');
            $('.play-pause-icon').addClass('pause-icon');
            $('#bottom-nav-surahayah').css("display", "inline-block");
            playSurah(totalAyahs, 1);
          });
      }
    } else {
      audio.onended = () => {
          count = 0;
          audio.currentTime = 0;
          paragraph.removeClass("ayah-hover");
          $(".wa").removeClass("wa-hover");
      }
    }
          
  }

}

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

function modifyFonts() {

  var arabic_font_value = localStorage.getItem('arabic_font_value');
  var translation_font_value = localStorage.getItem('translation_font_value');
  var transliteration_font_value = localStorage.getItem('transliteration_font_value');
  var toggle_font = localStorage.getItem('toggle_font_change');
  var toggle_font_value = localStorage.getItem('toggle_font_value');

  setTimeout(function(){

    $(".wa").css("font-size", arabic_font_value);
    $(".wa").css("font-family", toggle_font_value);
    $(".wt").css("font-size", translation_font_value);
    $(".wl").css("font-size", transliteration_font_value);

    if(arabic_font_value != null || translation_font_value != null || transliteration_font_value != null) {
      $(".ar-c-f").text("(" + arabic_font_value + ")");
      $(".tr-c-f").text("(" + translation_font_value + ")");
      $(".tl-c-f").text("(" + transliteration_font_value + ")");
    }

    if($("#font").length){
      if (localStorage.getItem("toggle_font_change") === null) $("#font").text("IndoPak");
      else $("#font").text(toggle_font);
    }

  }, 200);

}

function saveLocation() {
  for(var ayah = 1; ayah <= surah_ayahs; ayah++) {
    if ($('.s-a#'+ayah).isInViewport()) {
      localStorage.setItem('last_surah_name', surah_name);
      localStorage.setItem('last_surah_no', surah_number);
      localStorage.setItem('last_ayah_no', ayah - 1);
    }
  }
}

// function to check if an element is in the viewport
$.fn.isInViewport = function() {
  try { var elementTop = $(this).offset().top; }
  catch(err) { /* do nothing */ }
  var elementBottom = elementTop + $(this).outerHeight();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  return elementBottom > viewportTop && elementTop < viewportBottom;
};

// function to check for alphanumeric characters
// jQuery.validator.addMethod("alphanumeric", function(value, element) {
//   return this.optional(element) || /^[a-zA-Z0-9]+$/.test(value);
// }); 

/* Copyright 2016 James Buncle */
(function ($) {
  $(document).ready(function () {
    var $nav = $('.fixed-top');
    var $bottom_nav = $('.bottom-nav');
    var lastScrollTop = 0;
    var screen_size = 700;
    var direction;
    $(function () {
      $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();
        if (lastScrollTop < scrollTop && scrollTop > $nav.outerHeight() && direction != 'down') {
            //Scroll down
            if ($(window).width() < screen_size) {
              $nav.stop().fadeOut();
              $bottom_nav.stop().fadeOut();
              direction = 'down';
            }
        } else if (lastScrollTop > scrollTop  && direction != 'up') {
            // Scroll up
            if ($(window).width() < screen_size) {
              $nav.stop().fadeIn();
              $bottom_nav.stop().fadeIn();
              direction = 'up';
            }
        } else if($(window).scrollTop() + $(window).height() == $(document).height()) {
            // Scrolled to bottom
            if ($(window).width() < screen_size) {
              $nav.stop().fadeIn();
              $bottom_nav.stop().fadeIn();
              direction = 'up';
            }
        }
        lastScrollTop = scrollTop;
      });
    });
  });
}(jQuery));

//========================================================================
//========================================================================
//========================================================================

/* on click events */
var audio = $('#player')[0];

$(".container").on('click', ".a", function(event, e) {

  var e = event || window.event;
  e.cancelBubble = true;
  if (e.stopPropagation) e.stopPropagation();
  
  var auto_scroll = localStorage.getItem('auto_scroll');

  $(".a").removeClass("ayah-hover");
  $(".wa").removeClass("wa-hover");
  $(".f-t").removeClass("f-t-hover");
  var ayah_surah = $(this).parent().attr('class').split(' ')[2]; // get third class
  var ayah_ayah = $(this).parent().attr('id');
  $(".s-a#" + ayah_ayah + " .a").addClass("ayah-hover");
  var ayah_audio_file = ('00' + ayah_surah).slice(-3) + ('00' + ayah_ayah).slice(-3);
  var audio_url = audio_url_arabic + ayah_audio_file + ".mp3";
  $('html, body').animate({ scrollTop: $(".s-a#" + ayah_ayah + " .a").offset().top - 50 }, 1000);

  if(auto_scroll == "Yes") {
    $('.bottom-nav__item.bottom-nav-surahplayer').css("display", "none");
    $('.bottom-nav__item.bottom-nav-surahplayer2').css("display", "block");
    $('.play-pause-icon').removeClass('play-icon');
    $('.play-pause-icon').addClass('pause-icon');

    $('.bottom-nav__item.bottom-nav-surahplayer').off("click.audio").on("click.audio", function() {
      audio.pause();
    });
  }

  audio.pause();
  audio.currentTime = 0;
  audio.removeEventListener('timeupdate', word_highlighter);

  audio.src = audio_url;
  audio.load();
  audio.play();

  audio.addEventListener('timeupdate', word_highlighter);

  if(auto_scroll == "Yes") {
    $('.bottom-nav__item.bottom-nav-surahplayer2').off("click.audio").on("click.audio", function() {
      if(audio.paused) {
        $('.play-pause-icon').removeClass('play-icon');
        $('.play-pause-icon').addClass('pause-icon');
        // audio.addEventListener('timeupdate', word_highlighter);
        // $(".s-a#" + ayah_ayah + " .a").addClass("ayah-hover");
        audio.play();
      }
      else if(!audio.paused) {
        $('.play-pause-icon').removeClass('pause-icon');
        $('.play-pause-icon').addClass('play-icon');
        audio.pause();
      }
    });
  }

  if(auto_scroll == "Yes") {
    // Display the ayah number on bottom
    $("#bottom-nav-surahayah").css("display", "inline-block");
    var bottom_nav_surahtime = document.getElementById("bottom-nav-surahayah");
    bottom_nav_surahtime.innerHTML = "(Ayah " + ayah_ayah + ")";
  }

  audio.onended = function() { 
    $(".a").removeClass("ayah-hover"); 
    $(".wa").removeClass("wa-hover");
    $(".f-t").removeClass("f-t-hover");
    // auto-play the next ayah
    audio.removeEventListener('timeupdate', word_highlighter);

    if(auto_scroll == "Yes") {
      
      var next_ayah = parseInt(ayah_ayah) + 1;
      if($('.s-a#' + next_ayah).length) playSurah(surah_ayahs, next_ayah);
    
    } else {
     
      $('.play-pause-icon').removeClass('pause-icon');
      $('.play-pause-icon').addClass('play-icon');
      audio.pause();
      audio.currentTime = 0;
    
    }

  };

  function word_highlighter() {
    var number_of_words = $(".s-a#" + ayah_ayah + " .a .sw").length;
    for (var word_no = 0 ; word_no <= number_of_words; word_no++) {
      var prev_word_no = word_no - 1, prev_ayah_no = ayah_ayah - 1;
      var time = $(".s-a#" + ayah_ayah + " .a").children().eq(word_no).attr("data-ts");
      if(time < audio.currentTime) {
        if (word_no > 0) $(".s-a#" + ayah_ayah + " .a").children().eq(prev_word_no).children(".wa").removeClass("wa-hover");
        $(".s-a#" + ayah_ayah + " .a").children().eq(word_no).children(".wa").addClass("wa-hover");
        $(".s-a#" + prev_ayah_no + " .a").children().eq(word_no).children(".wa").removeClass("wa-hover");
      }
    }
  }

});


$(".container").on('click', ".sw", function(event, e) {
  
  var e = event || window.event;
  e.cancelBubble = true;
  if (e.stopPropagation) e.stopPropagation();

  $(".a").removeClass("ayah-hover");
  $(".wa").removeClass("wa-hover");
  $(".f-t").removeClass("f-t-hover");
  var word_surah = $(this).parent().parent().attr('class').split(' ')[2]; // get third class
  var word_ayah = $(this).parent().parent().attr('id');
  var word_word = $(this).index();
  $(".s-a#" + word_ayah + " .a").children().eq(word_word).children(".wa").addClass("wa-hover");
  var word_audio_file = word_surah + "/" + ('00' + word_surah).slice(-3) + "_" + ('00' + word_ayah).slice(-3) + "_" + ('00' + word_word).slice(-3);
  var audio_url = audio_url_words + word_audio_file + ".mp3";

  $('.bottom-nav__item.bottom-nav-surahplayer').off("click.audio").on("click.audio", function() {
    audio.pause();
  });

  audio.pause();
  // audio.removeEventListener('timeupdate', word_highlighter);
  // audio.currentTime = 0;
  audio.src = audio_url;
  audio.load();
  audio.play();

  audio.onended = function() {
    audio.pause();
    audio.currentTime = 0;
    $(".a").removeClass("ayah-hover"); 
    $(".wa").removeClass("wa-hover");
    $(".f-t").removeClass("f-t-hover");
  };

});


$(".container").on('click', ".f-t", function(event, e) {
  
  var e = event || window.event;
  e.cancelBubble = true;
  if (e.stopPropagation) e.stopPropagation();

  $(".a").removeClass("ayah-hover");
  $(".wa").removeClass("wa-hover");
  $(".f-t").removeClass("f-t-hover");
  var ayah_surah = $(this).parent().attr('class').split(' ')[2]; // get third class
  var ayah_ayah = $(this).parent().attr('id');
  $(".s-a#" + ayah_ayah + " .f-t").addClass("f-t-hover");
  var ayah_audio_file = ('00' + ayah_surah).slice(-3) + ('00' + ayah_ayah).slice(-3);
  var surah_audio = ('00' + ayah_surah).slice(-3);
  var audio_url = audio_url_english + ayah_audio_file + ".mp3";
    
  $('.bottom-nav__item.bottom-nav-surahplayer').off("click.audio").on("click.audio", function() {
    audio.pause();
  });

  audio.pause();
  audio.currentTime = 0;
  audio.src = audio_url;
  audio.load();
  audio.play();

  audio.onended = function() { 
    $(".a").removeClass("ayah-hover"); 
    $(".wa").removeClass("wa-hover");
    $(".f-t").removeClass("f-t-hover");
  };

});

$('.bottom-nav-surahplayer').on("click",function(){
  let currentAyah = parseInt($(".full-surah").children(".s-a").first().attr("id"));
  playSurah(surah_ayahs, currentAyah);
  $(".bottom-nav-surahplayer").css("display", "none");
  $(".bottom-nav-surahplayer2").css("display", "block");
  $('.play-pause-icon').removeClass('play-icon');
  $('.play-pause-icon').addClass('pause-icon');
  $("#bottom-nav-surahayah").css("display", "inline-block");
  $(this).off('click');
});

$('#dummyElement').on("click",function(){
  audio.play();
});

$('#SettingsModal').on('shown.bs.modal', function() {
  $('meta[name=viewport]').attr('content', 'width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no');
});

$('#SettingsModal').on('hidden.bs.modal', function() {
  $('meta[name=viewport]').attr('content', 'width=device-width, initial-scale=1, shrink-to-fit=no');
});

$("#chevron-navbar-icon").on("click",function(){
  $(this).toggleClass('chevron-down-nav chevron-up-nav');
});

$("#SurahSelector").on("click",function(){
  $("#chevron-selector-surah").toggleClass('chevron-down chevron-up');
});

$("#AyahSelector").on("click",function(){
  $("#chevron-selector-ayah").toggleClass('chevron-down chevron-up');
});

$(".back-to-word").on("click",function(){
  $('html, body').animate({ scrollTop: $(".wa-hover").offset().top - 75 }, 1000);
});

//========================================================================
//========================================================================
//========================================================================

// main part
$(window).on('load', function (e) {

  // loading dark mode the first because don't wanna hurt the eyes
  var toggle_theme_mode = localStorage.getItem('toggle_theme_mode_change'),
      toggle_theme_mode_disabled = localStorage.getItem('toggle_theme_mode_disabled');

  // change the theme
  if(toggle_theme_mode_disabled == "true") $('#darktheme').prop("disabled", true);
  else if(toggle_theme_mode_disabled == "false") $('head').append('<link rel="stylesheet" href="../assets/css/dark.css" id="darktheme"/>');
  
  if($("#theme_mode").length){
    if (localStorage.getItem("toggle_theme_mode_change") === null) $("#theme_mode").text("Light");
    else $("#theme_mode").text(toggle_theme_mode);
  }

  // ====================
  // if it's the homepage
  // ====================
  if(location.pathname.split('/').slice(-1)[0] == "") {

    // if surah and ayah number exists in the cache, then display last read position div on homepage
    if (localStorage.getItem('last_surah_no') != null) {
      var last_surah_name = localStorage.getItem('last_surah_name'),
          last_surah_no = localStorage.getItem('last_surah_no'), 
          last_ayah_no = localStorage.getItem('last_ayah_no');
      $(".last-read").css("display", "block");
      $(".last-read-surah").text(last_surah_name);
      $(".last-read-ayah").text(last_ayah_no);
      $(".last-read-link").attr("href", last_surah_no+"/"+last_ayah_no);
    }

  }

  // ======================
  // if it's the surah page
  // ======================
  else {

    // if auto-scroll is not set, then set it to true
    if (localStorage.getItem('auto_scroll') == null) {
      localStorage.setItem('auto_scroll', "Yes");
    }

    var auto_scroll = localStorage.getItem('auto_scroll');
    $("#auto_scroll").text(auto_scroll);

    // loading dark mode the first because don't wanna hurt the eyes
    var toggle_display_mode = localStorage.getItem('toggle_display_mode_change'),
        toggle_display_mode_disabled = localStorage.getItem('toggle_display_mode_disabled');

    // change the mode
    if(toggle_display_mode_disabled == "true") $('#normalmode').prop("disabled", true);
    else if(toggle_display_mode_disabled == "false") $('head').append('<link rel="stylesheet" href="../assets/css/normal.css" id="normalmode"/>');
    
    if($("#display_mode").length){
      if (localStorage.getItem("toggle_display_mode_change") === null) $("#display_mode").text("WBW");
      else $("#display_mode").text(toggle_display_mode);
    }

    // load the about content
    $("#modal-about-content").load("assets/about.html");

    // load the surahs list
    $("#SurahList").load("assets/surahs.html");
    
    // load the ayah numbers
    for(var AYAH = 1; AYAH <= surah_ayahs; AYAH++) {
      if($('#' + AYAH).length)
       $(".ayah-selector").append("<a class=d-i href=#" + AYAH + ">" + AYAH + "</a>");
      else
        $(".ayah-selector").append("<a class=d-i href=./" + surah_number + "/" + AYAH + ">" + AYAH + "</a>");
    }

    // save the surah and ayah number in cache when the user stops scrolling
    $(window).scroll(function() {
      clearTimeout($.data(this, 'saveLocation'));
      $.data(this, 'saveLocation', setTimeout(function() { saveLocation(); }, 250));
    });

    // show the "back to word" button is the user scrolls past the word
    // $(window).scroll(function() {
    //   if(!audio.paused) {
    //     if($('.w-a-hover').isInViewport()) {
    //       $(".back-to-word").css("display", "none");
    //     } else {
    //       $(".back-to-word").css("display", "block");
    //     }
    //   }
    // });

    // show/hide navbar dropdown menus on hover
    if($(window).width() > 991) {
      $('.dropdown').hover(function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(100);
        /*$("#chevron-selector").removeClass('chevron-down').addClass('chevron-up');*/
      }, function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(100);
        /*$("#chevron-selector").removeClass('chevron-up').addClass('chevron-down');*/
      });
    }


    // ======================================================================

    // if hash is set
    if(window.location.hash) {

      var continue_reading_button = "<div class='col-12 surah-nav-margin'><div class='col-12 text-center'><button class='btn btn-sm btn-gold continue-reading-btn'>Continue Reading</button></div></div>";
    
      var hash = window.location.hash.substr(1);

      // if hash is of two parts
      if(hash.includes("-")) {

        var till_ayah, loaded_ayahs = false;

        var set_ayah = hash.split("-");
        var start_ayah = parseInt(set_ayah[0]), end_ayah = parseInt(set_ayah[1]);

        if(start_ayah < 1) start_ayah = 1;
        else if(end_ayah > surah_ayahs) end_ayah = surah_ayahs;
        else if(start_ayah > end_ayah) start_ayah = end_ayah;

        loadAyahs(surah_number, start_ayah, end_ayah);

        if(end_ayah < surah_ayahs) {
          $(".full-surah").after(continue_reading_button);
        }

        var clicked_continue_button = false;
        $(".continue-reading-btn").on("click",function(){
          if(!$(".s-a#"+surah_ayahs).length) {
            var after_from = end_ayah + 1, after_till = after_from + 20 - 1;
            if(after_till > surah_ayahs) after_till = surah_ayahs;
            loadAyahs(surah_number, after_from, after_till);
            modifyFonts();
            $(".surah-nav-margin").css("display", "none");
            // wait a bit and then set it to true
            setTimeout(function(){ clicked_continue_button = true; }, 200);
          }
        });

        $(window).scroll(function() {
          if(clicked_continue_button == true) {
            var after_from = parseInt($('.full-surah .s-a:last').attr('id')) + 1, after_till = after_from + 20 - 1;
            if(after_till > surah_ayahs) after_till = surah_ayahs;
            if(!$(".s-a#"+surah_ayahs).length) {
              if($(window).scrollTop() + $(window).height() > $(document).height() - 500) {
                if(loaded_ayahs == false) {
                  // console.log("loading... "+after_from+"-"+after_till);
                  loadAyahs(surah_number, after_from, after_till);
                  after_from = after_till + 1, after_till = after_from + 20 - 1;
                  if(after_till > surah_ayahs) after_till = surah_ayahs;
                  loaded_ayahs = true;
                  modifyFonts();
                }
              }
            }
            // once the user stops scrolling, set loaded_ayahs to false
            clearTimeout($.data(this, 'scrollTimer'));
            $.data(this, 'scrollTimer', setTimeout(function() { loaded_ayahs = false; }, 150));
          }
        });

      }

      // if hash is of one part
      else {

        hash = parseInt(window.location.hash.substr(1));

        if(!$.isNumeric(hash)) hash = 1;
        // if(!$.alphanumeric(hash)) alert("alphanumeric");

        var till_ayah, loaded_ayahs = false;

        if(hash < 1) hash = 1;
        if(hash > surah_ayahs) hash = surah_ayahs;

        loadAyahs(surah_number, hash, hash);

        if(hash < surah_ayahs){
          $(".full-surah").after(continue_reading_button);
        }

        var clicked_continue_button = false;
        $(".continue-reading-btn").on("click",function(){
          if(!$(".s-a#"+surah_ayahs).length) {
            var after_from = hash + 1, after_till = after_from + 20;
            if(after_till > surah_ayahs) after_till = surah_ayahs;
            loadAyahs(surah_number, after_from, after_till);
            modifyFonts();
            $(".surah-nav-margin").css("display", "none");
            // wait a bit and then set it to true
            setTimeout(function(){ clicked_continue_button = true; }, 200);
          }
        });

        $(window).scroll(function() {
          if(clicked_continue_button == true) {
            var after_from = parseInt($('.full-surah .s-a:last').attr('id')) + 1, after_till = after_from + 20 - 1;
            if(after_till > surah_ayahs) after_till = surah_ayahs;
            if(!$(".s-a#"+surah_ayahs).length) {
              if($(window).scrollTop() + $(window).height() > $(document).height() - 500) {
                if(loaded_ayahs == false) {
                  // console.log("loading... "+after_from+"-"+after_till);
                  loadAyahs(surah_number, after_from, after_till);
                  after_from = after_till + 1, after_till = after_from + 20 - 1;
                  if(after_till > surah_ayahs) after_till = surah_ayahs;
                  loaded_ayahs = true;
                  modifyFonts();
                }
              }
            }
            // once the user stops scrolling, set loaded_ayahs to false
            clearTimeout($.data(this, 'scrollTimer'));
            $.data(this, 'scrollTimer', setTimeout(function() { loaded_ayahs = false; }, 150));
          }
        });

      }

    }

    // if no hash is set
    else {

      // load the ayahs
      var till_ayah, loaded_ayahs = false;

      if(surah_ayahs >= 20) till_ayah = 20; else till_ayah = surah_ayahs;
      loadAyahs(surah_number, 1, till_ayah);
      modifyFonts();

      if(surah_ayahs >= 20) {
        $(window).scroll(function() {
          var after_from = parseInt($('.full-surah .s-a:last').attr('id')) + 1, after_till = after_from + 20 - 1;
          if(after_till > surah_ayahs) after_till = surah_ayahs;
          if(!$(".s-a#"+surah_ayahs).length) {
            if($(window).scrollTop() + $(window).height() > $(document).height() - 500) {
              if(loaded_ayahs == false) {
                // console.log("loading... "+after_from+"-"+after_till);
                loadAyahs(surah_number, after_from, after_till);
                after_from = after_till + 1, after_till = after_from + 20 - 1;
                if(after_till > surah_ayahs) after_till = surah_ayahs;
                loaded_ayahs = true;
                modifyFonts();
              }
            }
          }

          // once the user stops scrolled, set loaded_ayahs to false
          clearTimeout($.data(this, 'scrollTimer'));
          $.data(this, 'scrollTimer', setTimeout(function() {
            loaded_ayahs = false;
          }, 150));

        });
      }

    }

  }

  $(".bismillah").css("display", "block");
  $(".bismillah-english").css("display", "block");
  $(".loader").css("display", "none");

});

// $(document).ready(function() {
//   $.getScript("assets/js/bootstrap.min.js");
//   $.ajaxSetup({ cache: true });
// });