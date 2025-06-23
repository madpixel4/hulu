
  (function () {

document.addEventListener('click', function (e) {
  e = e || window.event;
  var target = e.target || e.srcElement;
  //if (target.hasAttribute('data-toggle') && target.getAttribute('data-toggle') == 'modal') {
  if (target.dataset.target && target.dataset.target !== '') {
    var m_ID = target.dataset.target;
    document.getElementById(m_ID).classList.add('open');
    e.preventDefault();
  }
  // }
  if (target.dataset.iframe && target.dataset.iframe !== '' && target.dataset.src && target.dataset.src !== '') {
    document.getElementById(target.dataset.iframe).src = target.dataset.src;
  }
  if (target.dataset.dimensions && target.dataset.dimensions !== "") {
    // alert(target.dataset.dimensions);
    document.querySelector('#' + target.dataset.target + ' .modal-window').setAttribute('style', target.dataset.dimensions);
    if (target.dataset.iframe && target.dataset.iframe !== '' && target.dataset.src && target.dataset.src !== '') {
      document.getElementById(target.dataset.iframe).setAttribute('style', target.dataset.dimensions);
    }
    document.querySelector('#' + target.dataset.target + ' .modal-window').setAttribute('style', target.dataset.dimensions);
  }
  if (target.dataset.reload && target.dataset.reload === '1') {
    document.querySelector('.close-modal').dataset.reload = 1;
  }
  // Close modal window with 'data-dismiss' attribute or when the backdrop is clicked
  if ((target.hasAttribute('data-dismiss') && target.getAttribute('data-dismiss') == 'modal') || target.classList.contains('modal')) {
    if (target.dataset.reload && target.dataset.reload === '1') {
      parent.location.reload(true);
      var modal = document.querySelector('[class="modal open"]');
      modal.classList.remove('open');
      e.preventDefault();
    } else {
      var modal = document.querySelector('[class="modal open"]');
      modal.classList.remove('open');
      e.preventDefault();
    }
  }
}, false);

document.body.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (document.querySelector('.close-modal')) {
      document.querySelector('.close-modal').click();
    }
  }
});
})();



$(window).load(function(){
  $("#fade-example .js-tabs-link").aniTabs({animation:"fade", animationSpeed:150, dragSpeed:150});
});

$(document).ready(function() {

$(".faq-trigger-show").click(function() {
    $(".faq-trigger-show").hide();
    $(".faq-trigger-hide").show();
    $('.faq-trigger-hide').attr('style','display: inline-block !important');
});
$(".faq-trigger-hide").click(function() {
    $(".faq-trigger-show").show();
    $(".faq-trigger-hide").hide();
});

$(".faq-trigger-show-2").click(function() {
    $(".faq-trigger-show-2").hide();
    $(".faq-trigger-hide-2").show();
    $('.faq-trigger-hide-2').attr('style','display: inline-block !important');
});
$(".faq-trigger-hide-2").click(function() {
    $(".faq-trigger-show-2").show();
    $(".faq-trigger-hide-2").hide();
});

$(".faq-trigger-show-3").click(function() {
    $(".faq-trigger-show-3").hide();
    $(".faq-trigger-hide-3").show();
    $('.faq-trigger-hide-3').attr('style','display: inline-block !important');
});
$(".faq-trigger-hide-3").click(function() {
    $(".faq-trigger-show-3").show();
    $(".faq-trigger-hide-3").hide();
});

$(".faq-trigger-show-4").click(function() {
  $(".faq-trigger-show-4").hide();
  $(".faq-trigger-hide-4").show();
  $('.faq-trigger-hide-4').attr('style','display: inline-block !important');
});
$(".faq-trigger-hide-4").click(function() {
  $(".faq-trigger-show-4").show();
  $(".faq-trigger-hide-4").hide();
});

});

//date-day picker tabs
// var date = new Date(),
// day = date.getDate(),
// month = date.getMonth()+1;

// //bonnaroo 22
// if (6 == month && 16 == day) {
// $( '.tabs-title-thur' ).addClass( 'is-active' );
// $( '.tabs-title-fri' ).removeClass( 'is-active' );
// $( '.tabs-title-sat' ).removeClass( 'is-active' );
// $( '.tabs-title-sun' ).removeClass( 'is-active' );
// $('#panel1c-label').attr("aria-selected","true");
// $('#panel2c-label').attr("aria-selected","false");
// $('#panel3c-label').attr("aria-selected","false");
// $('#panel4c-label').attr("aria-selected","false");
// $( '.tabs-panel-thur' ).addClass( 'is-active' );
// $( '.tabs-panel-fri' ).removeClass( 'is-active' );
// $( '.tabs-panel-sat' ).removeClass( 'is-active' );
// $( '.tabs-panel-sun' ).removeClass( 'is-active' );
// }
// if (6 == month && 17 == day) {
//   $( '.tabs-title-thur' ).removeClass( 'is-active' );
//   $( '.tabs-title-fri' ).addClass( 'is-active' );
//   $( '.tabs-title-sat' ).removeClass( 'is-active' );
//   $( '.tabs-title-sun' ).removeClass( 'is-active' );
//   $('#panel1c-label').attr("aria-selected","false");
//   $('#panel2c-label').attr("aria-selected","true");
//   $('#panel3c-label').attr("aria-selected","false");
//   $('#panel4c-label').attr("aria-selected","false");
//   $( '.tabs-panel-thur' ).removeClass( 'is-active' );
//   $( '.tabs-panel-fri' ).addClass( 'is-active' );
//   $( '.tabs-panel-sat' ).removeClass( 'is-active' );
//   $( '.tabs-panel-sun' ).removeClass( 'is-active' );
// }
// if (6 == month && 18 == day) {
//   $( '.tabs-title-thur' ).removeClass( 'is-active' );
//   $( '.tabs-title-fri' ).removeClass( 'is-active' );
//   $( '.tabs-title-sat' ).addClass( 'is-active' );
//   $( '.tabs-title-sun' ).removeClass( 'is-active' );
//   $('#panel1c-label').attr("aria-selected","false");
//   $('#panel2c-label').attr("aria-selected","false");
//   $('#panel3c-label').attr("aria-selected","true");
//   $('#panel4c-label').attr("aria-selected","false");
//   $( '.tabs-panel-thur' ).removeClass( 'is-active' );
//   $( '.tabs-panel-fri' ).removeClass( 'is-active' );
//   $( '.tabs-panel-sat' ).addClass( 'is-active' );
//   $( '.tabs-panel-sun' ).removeClass( 'is-active' );
// }
// if (6 == month && 19 == day) {
//   $( '.tabs-title-thur' ).removeClass( 'is-active' );
//   $( '.tabs-title-fri' ).removeClass( 'is-active' );
//   $( '.tabs-title-sat' ).removeClass( 'is-active' );
//   $( '.tabs-title-sun' ).addClass( 'is-active' );
//   $('#panel1c-label').attr("aria-selected","false");
//   $('#panel2c-label').attr("aria-selected","false");
//   $('#panel3c-label').attr("aria-selected","false");
//   $('#panel4c-label').attr("aria-selected","true");
//   $( '.tabs-panel-thur' ).removeClass( 'is-active' );
//   $( '.tabs-panel-fri' ).removeClass( 'is-active' );
//   $( '.tabs-panel-sat' ).removeClass( 'is-active' );
//   $( '.tabs-panel-sun' ).addClass( 'is-active' );
// }

// //lolla 22
// if (7 == month && 28 == day) {
//   $( '.tabs-title-thur' ).addClass( 'is-active' );
//   $( '.tabs-title-fri' ).removeClass( 'is-active' );
//   $( '.tabs-title-sat' ).removeClass( 'is-active' );
//   $( '.tabs-title-sun' ).removeClass( 'is-active' );
//   $('#panel221c-label').attr("aria-selected","true");
//   $('#panel222c-label').attr("aria-selected","false");
//   $('#panel223c-label').attr("aria-selected","false");
//   $('#panel224c-label').attr("aria-selected","false");
//   $( '.tabs-panel-thur' ).addClass( 'is-active' );
//   $( '.tabs-panel-fri' ).removeClass( 'is-active' );
//   $( '.tabs-panel-sat' ).removeClass( 'is-active' );
//   $( '.tabs-panel-sun' ).removeClass( 'is-active' );
//   }
// if (7 == month && 29 == day) {
//   $( '.tabs-title-thur' ).removeClass( 'is-active' );
//   $( '.tabs-title-fri' ).addClass( 'is-active' );
//   $( '.tabs-title-sat' ).removeClass( 'is-active' );
//   $( '.tabs-title-sun' ).removeClass( 'is-active' );
//   $('#panel221c-label').attr("aria-selected","false");
//   $('#panel222c-label').attr("aria-selected","true");
//   $('#panel223c-label').attr("aria-selected","false");
//   $('#panel224c-label').attr("aria-selected","false");
//   $( '.tabs-panel-thur' ).removeClass( 'is-active' );
//   $( '.tabs-panel-fri' ).addClass( 'is-active' );
//   $( '.tabs-panel-sat' ).removeClass( 'is-active' );
//   $( '.tabs-panel-sun' ).removeClass( 'is-active' );
// }
// if (7 == month && 30 == day) {
//   $( '.tabs-title-thur' ).removeClass( 'is-active' );
//   $( '.tabs-title-fri' ).removeClass( 'is-active' );
//   $( '.tabs-title-sat' ).addClass( 'is-active' );
//   $( '.tabs-title-sun' ).removeClass( 'is-active' );
//   $('#panel221c-label').attr("aria-selected","false");
//   $('#panel222c-label').attr("aria-selected","false");
//   $('#panel223c-label').attr("aria-selected","true");
//   $('#panel224c-label').attr("aria-selected","false");
//   $( '.tabs-panel-thur' ).removeClass( 'is-active' );
//   $( '.tabs-panel-fri' ).removeClass( 'is-active' );
//   $( '.tabs-panel-sat' ).addClass( 'is-active' );
//   $( '.tabs-panel-sun' ).removeClass( 'is-active' );
// }
// if (7 == month && 31 == day) {
//   $( '.tabs-title-thur' ).removeClass( 'is-active' );
//   $( '.tabs-title-fri' ).removeClass( 'is-active' );
//   $( '.tabs-title-sat' ).removeClass( 'is-active' );
//   $( '.tabs-title-sun' ).addClass( 'is-active' );
//   $('#panel221c-label').attr("aria-selected","false");
//   $('#panel222c-label').attr("aria-selected","false");
//   $('#panel223c-label').attr("aria-selected","false");
//   $('#panel224c-label').attr("aria-selected","true");
//   $( '.tabs-panel-thur' ).removeClass( 'is-active' );
//   $( '.tabs-panel-fri' ).removeClass( 'is-active' );
//   $( '.tabs-panel-sat' ).removeClass( 'is-active' );
//   $( '.tabs-panel-sun' ).addClass( 'is-active' );
// }

// //austin city limits 22
// if (10 == month && 7 == day) {
//   $( '.tabs-title-thur' ).addClass( 'is-active' );
//   $( '.tabs-title-fri' ).removeClass( 'is-active' );
//   $( '.tabs-title-sat' ).removeClass( 'is-active' );
//   $( '.tabs-title-sun' ).removeClass( 'is-active' );
//   $('#panel221c-label').attr("aria-selected","true");
//   $('#panel222c-label').attr("aria-selected","false");
//   $('#panel223c-label').attr("aria-selected","false");
//   $('#panel224c-label').attr("aria-selected","false");
//   $( '.tabs-panel-thur' ).addClass( 'is-active' );
//   $( '.tabs-panel-fri' ).removeClass( 'is-active' );
//   $( '.tabs-panel-sat' ).removeClass( 'is-active' );
//   $( '.tabs-panel-sun' ).removeClass( 'is-active' );
//   }
// if (10 == month && 8 == day) {
//   $( '.tabs-title-thur' ).removeClass( 'is-active' );
//   $( '.tabs-title-fri' ).addClass( 'is-active' );
//   $( '.tabs-title-sat' ).removeClass( 'is-active' );
//   $( '.tabs-title-sun' ).removeClass( 'is-active' );
//   $('#panel221c-label').attr("aria-selected","false");
//   $('#panel222c-label').attr("aria-selected","true");
//   $('#panel223c-label').attr("aria-selected","false");
//   $('#panel224c-label').attr("aria-selected","false");
//   $( '.tabs-panel-thur' ).removeClass( 'is-active' );
//   $( '.tabs-panel-fri' ).addClass( 'is-active' );
//   $( '.tabs-panel-sat' ).removeClass( 'is-active' );
//   $( '.tabs-panel-sun' ).removeClass( 'is-active' );
// }
// if (10 == month && 9 == day) {
//   $( '.tabs-title-thur' ).removeClass( 'is-active' );
//   $( '.tabs-title-fri' ).removeClass( 'is-active' );
//   $( '.tabs-title-sat' ).addClass( 'is-active' );
//   $( '.tabs-title-sun' ).removeClass( 'is-active' );
//   $('#panel221c-label').attr("aria-selected","false");
//   $('#panel222c-label').attr("aria-selected","false");
//   $('#panel223c-label').attr("aria-selected","true");
//   $('#panel224c-label').attr("aria-selected","false");
//   $( '.tabs-panel-thur' ).removeClass( 'is-active' );
//   $( '.tabs-panel-fri' ).removeClass( 'is-active' );
//   $( '.tabs-panel-sat' ).addClass( 'is-active' );
//   $( '.tabs-panel-sun' ).removeClass( 'is-active' );
// }








//vertical and horizontal container drag
// const container = document.querySelector('#hw-wrapper');
                
// let startY;
// let startX;
// let scrollLeft;
// let scrollTop;
// let isDown;

// container.addEventListener('mousedown',e => mouseIsDown(e));  
// container.addEventListener('mouseup',e => mouseUp(e))
// container.addEventListener('mouseleave',e=>mouseLeave(e));
// container.addEventListener('mousemove',e=>mouseMove(e));

// function mouseIsDown(e){
//   isDown = true;
//   startY = e.pageY - container.offsetTop;
//   startX = e.pageX - container.offsetLeft;
//   scrollLeft = container.scrollLeft;
//   scrollTop = container.scrollTop; 
// }
// function mouseUp(e){
//   isDown = false;
// }
// function mouseLeave(e){
//   isDown = false;
// }
// function mouseMove(e){
//   if(isDown){
//     e.preventDefault();
//     //Move vertcally
//     const y = e.pageY - container.offsetTop;
//     const walkY = y - startY;
//     container.scrollTop = scrollTop - walkY;

//     //Move Horizontally
//     const x = e.pageX - container.offsetLeft;
//     const walkX = x - startX;
//     container.scrollLeft = scrollLeft - walkX;

//   }
// }



  







//Progress Bar
// const progressBarContainer = document.querySelector('.progress-bar__container');
// const progressBar = document.querySelector('.progress-bar');
// const progressBarText = document.querySelector('.progress-bar__text');

// const progressBarStates = [0, 100];

// let time = 0;
// let endState = 100;

// progressBarStates.forEach(state => {
//   let randomTime = Math.floor(Math.random() * 2000);
//   setTimeout(() => {
//     if(state == endState){
//       gsap.to(progressBar, {
//         x: `${state}%`,
//         duration: 2,
//         backgroundColor: '#1ce783',
//         onComplete: () => {
//           progressBarText.style.display = "initial";
//           progressBarContainer.style.boxShadow = '0 0 5px #4895ef';
//         }
//       });
//     }else{
//       gsap.to(progressBar, {
//         x: `${state}%`,
//         duration: 2,
//       });
//     }
//   }, randomTime + time);
//   time += randomTime;
// })


//center to page
// var $container = $("html,body");
// var $scrollTo = $('.hw-tiles-wrapper');
// $container.animate({scrollTop: $scrollTo.offset().top - $container.offset().top + $container.scrollTop(), scrollTop: 890, scrollLeft: 1400}, 200); 







// //Auto Page Centering
// $('.hw-tiles-wrapper').delay(16000).animate({scrollLeft:'+=1400'}, 1000, "swing");
// $('.hw-tiles-wrapper').animate({scrollTop:'+=920'}, 1000, "swing");



//WKB Remove Cover OnClick
// $(".wkb-cover").click(function() {
//   $(".wkb-cover").fadeOut("slow");
//   $('.swiper').delay(2000).fadeIn(1000); 

//   setTimeout(function(){
//     $('.wkb-back-mobile').remove();
//     },2000);
// }); 


// //Shuffle List Randomly
// //row 1
// var grd = $('#grid');
// var imgs = grd.children();

// // Page Refresh to run script below
// imgs.sort(function(){
//   return (Math.round(Math.random()) - 0.5);
// });
// grd.remove('li');
// for(var i=0; i < imgs.length; i++)grd.append(imgs[i]);

// //row 2
// var grdtwo = $('#gridtwo');
// var imgs = grdtwo.children();

// // Page Refresh to run script below
// imgs.sort(function(){
//   return (Math.round(Math.random()) - 0.5);
// });
// grdtwo.remove('li');
// for(var i=0; i < imgs.length; i++)grdtwo.append(imgs[i]);

// //row 3
// var grdthree = $('#gridthree');
// var imgs = grdthree.children();

// // Page Refresh to run script below
// imgs.sort(function(){
//   return (Math.round(Math.random()) - 0.5);
// });
// grdthree.remove('li');
// for(var i=0; i < imgs.length; i++)grdthree.append(imgs[i]);



//Randomizer Mobile
// var cards = $(".swiper-slide");
// for(var i = 0; i < cards.length; i++){
//     var target = Math.floor(Math.random() * cards.length -1) + 1;
//     var target2 = Math.floor(Math.random() * cards.length -1) +1;
//     cards.eq(target).before(cards.eq(target2));
// }






//SPOTLIGHT
//DOM load event
// window.addEventListener("DOMContentLoaded", () => {
//   const spotlight = document.querySelector(".spotlight");

//   let spotlightSize = "transparent 300px, rgba(0, 0, 0, 0.85) 800px)";

//   window.addEventListener("mousemove", (e) => updateSpotlight(e));

//   function updateSpotlight(e) {
//     spotlight.style.backgroundImage = `radial-gradient(circle at ${
//       (e.pageX / window.innerWidth) * 100
//     }% ${(e.pageY / window.innerHeight) * 100}%, ${spotlightSize}`;
//   }
// });

// //Door hover CSS styling
// $(function() {
//   $('.door-alice').hover(function() {
//     $('.door-back-alice').css('background-size', '103%');
//   }, function() {
//     $('.door-back-alice').css('background-size', '130%');
//   });
//   $('.door-amy').hover(function() {
//     $('.door-back-amy').css('background-size', '102%');
//   }, function() {
//     $('.door-back-amy').css('background-size', '130%');
//   });
//   $('.door-mabel').hover(function() {
//     $('.door-back-mabel').css('background-size', '110%');
//   }, function() {
//     $('.door-back-mabel').css('background-size', '130%');
//   });
//   $('.door-marv').hover(function() {
//     $('.door-back-marv').css('background-size', '117%');
//   }, function() {
//     $('.door-back-marv').css('background-size', '130%');
//   });
//   $('.door-nina').hover(function() {
//     $('.door-back-nina').css('background-size', '105%');
//   }, function() {
//     $('.door-back-nina').css('background-size', '130%');
//   });
//   $('.door-oliver').hover(function() {
//     $('.door-back-oliver').css('background-size', '105%');
//   }, function() {
//     $('.door-back-oliver').css('background-size', '130%');
//   });
//   $('.door-poppy').hover(function() {
//     $('.door-back-poppy').css('background-size', '107%');
//   }, function() {
//     $('.door-back-poppy').css('background-size', '130%');
//   });
//   $('.door-teddy').hover(function() {
//     $('.door-back-teddy').css('background-size', '110%');
//   }, function() {
//     $('.door-back-teddy').css('background-size', '130%');
//   });
//   $('.door-theo').hover(function() {
//     $('.door-back-theo').css('background-size', '105%');
//   }, function() {
//     $('.door-back-theo').css('background-size', '130%');
//   });
//   $('.door-uma').hover(function() {
//     $('.door-back-uma').css('background-size', '107%');
//   }, function() {
//     $('.door-back-uma').css('background-size', '130%');
//   });
//   $('.door-will').hover(function() {
//     $('.door-back-will').css('background-size', '107%');
//   }, function() {
//     $('.door-back-will').css('background-size', '130%');
//   });
//   $('.door-charles').hover(function() {
//     $('.door-back-charles').css('background-size', '117%');
//   }, function() {
//     $('.door-back-charles').css('background-size', '130%');
//   });
//   $('.door-cinda').hover(function() {
//     $('.door-back-cinda').css('background-size', '105%');
//   }, function() {
//     $('.door-back-cinda').css('background-size', '130%');
//   });
//   $('.door-williams').hover(function() {
//     $('.door-back-williams').css('background-size', '105%');
//   }, function() {
//     $('.door-back-williams').css('background-size', '130%');
//   });
//   $('.door-grover').hover(function() {
//     $('.door-back-grover').css('background-size', '115%');
//   }, function() {
//     $('.door-back-grover').css('background-size', '130%');
//   });
//   $('.door-howard').hover(function() {
//     $('.door-back-howard').css('background-size', '102%');
//   }, function() {
//     $('.door-back-howard').css('background-size', '130%');
//   });
//   $('.door-kreps').hover(function() {
//     $('.door-back-kreps').css('background-size', '101%');
//   }, function() {
//     $('.door-back-kreps').css('background-size', '130%');
//   });
//   $('.door-lenora').hover(function() {
//     $('.door-back-lenora').css('background-size', '105%');
//   }, function() {
//     $('.door-back-lenora').css('background-size', '130%');
//   });
//   $('.door-lester').hover(function() {
//     $('.door-back-lester').css('background-size', '105%');
//   }, function() {
//     $('.door-back-lester').css('background-size', '130%');
//   });
//   $('.door-lucy').hover(function() {
//     $('.door-back-lucy').css('background-size', '105%');
//   }, function() {
//     $('.door-back-lucy').css('background-size', '130%');
//   });
//   $('.door-ursula').hover(function() {
//     $('.door-back-ursula').css('background-size', '105%');
//   }, function() {
//     $('.door-back-ursula').css('background-size', '130%');
//   });
//   $('.door-sam').hover(function() {
//     $('.door-back-sam').css('background-size', '105%');
//   }, function() {
//     $('.door-back-sam').css('background-size', '130%');
//   });
//   $('.door-director').hover(function() {
//     $('.door-back-director').css('background-size', '105%');
//   }, function() {
//     $('.door-back-director').css('background-size', '130%');
//   });
//   $('.door-ivan').hover(function() {
//     $('.door-back-ivan').css('background-size', '105%');
//   }, function() {
//     $('.door-back-ivan').css('background-size', '130%');
//   });
//   $('.door-liam').hover(function() {
//     $('.door-back-liam').css('background-size', '105%');
//   }, function() {
//     $('.door-back-liam').css('background-size', '130%');
//   });
//   $('.door-grant').hover(function() {
//     $('.door-back-grant').css('background-size', '105%');
//   }, function() {
//     $('.door-back-grant').css('background-size', '130%');
//   });
//   $('.door-naomi').hover(function() {
//     $('.door-back-naomi').css('background-size', '105%');
//   }, function() {
//     $('.door-back-naomi').css('background-size', '130%');
//   });
//   $('.door-jonathan').hover(function() {
//     $('.door-back-jonathan').css('background-size', '105%');
//   }, function() {
//     $('.door-back-jonathan').css('background-size', '130%');
//   });
//   $('.door-joy').hover(function() {
//     $('.door-back-joy').css('background-size', '105%');
//   }, function() {
//     $('.door-back-joy').css('background-size', '130%');
//   });
//   $('.door-paulette').hover(function() {
//     $('.door-back-paulette').css('background-size', '105%');
//   }, function() {
//     $('.door-back-paulette').css('background-size', '130%');
//   });
// });

// $(document).ready(function() {     
//   $('.door').hover(function(){     
//       $('.door-back-sus').addClass('door-hover');    
//   },     
//   function(){    
//       $('.door-back-sus').removeClass('door-hover');     
//   });
// });   

//Audio player
// var track = document.getElementById('track');
// var controlBtn = document.getElementById('play-pause');
// function playPause() {
//     if (track.paused) {
//         track.play();
//         //controlBtn.textContent = "Pause";
//         controlBtn.className = "pause";
//     } else { 
//         track.pause();
//          //controlBtn.textContent = "Play";
//         controlBtn.className = "play";
//     }
// }

// controlBtn.addEventListener("click", playPause);
// track.addEventListener("ended", function() {
//   controlBtn.className = "play";
// });



//SWIPERJS
// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'horizontal',
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });


//lazy-video
document.addEventListener("DOMContentLoaded", function() {
    var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));
  
    if ("IntersectionObserver" in window) {
      var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(video) {
          if (video.isIntersecting) {
            for (var source in video.target.children) {
              var videoSource = video.target.children[source];
              if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
                videoSource.src = videoSource.dataset.src;
              }
            }
  
            video.target.load();
            video.target.classList.remove("lazy");
            lazyVideoObserver.unobserve(video.target);
          }
        });
      });
  
      lazyVideos.forEach(function(lazyVideo) {
        lazyVideoObserver.observe(lazyVideo);
      });
    }
  });
  
//lazy-image
const lazyClass = 'lazy';
const lazyImages = document.querySelectorAll(`.${lazyClass}`);

const lazyObserver = new IntersectionObserver((elements) => {
    elements.forEach((element) => {
        if (element.isIntersecting) {
            const image = element.target;
            showImage(image);
            lazyObserver.unobserve(image)
        }
    })
})

lazyImages.forEach(image => {
    lazyObserver.observe(image);
})

function showImage(image) {
    image.src = image.dataset.src;
    image.classList.remove(lazyClass)
}
  
  
  


//time-zone
$(document).ready(function(){
    $("select").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            if(optionValue){
                $(".time").not("." + optionValue).fadeIn("slow").hide();
                $(".stime").fadeIn("slow").hide();
                $("." + optionValue).fadeIn("slow").show();
            } else{
                $(".time").fadeIn("slow").hide();
            }
        });
    }).change();
});


//Navbar background switch
$(window).scroll(function(){
  var scroll = $(window).scrollTop();
if (scroll > 25) {
  $('.top-bar-dark').addClass('bg-scrolling');
}

else{
$('.top-bar-dark').removeClass('bg-scrolling'); 	
}
})