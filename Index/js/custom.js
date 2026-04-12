jQuery(document).ready(function () {
  $(".btn-close ").click(function () {
    $('.navbar-collapse').removeClass("show");
  });
});
// Header Fixed Window Scroll JS Start
$(window).scroll(function () {
  if ($(window).scrollTop() >= 200) {
    $('.header_section').addClass('is-sticky');
  }
  else {
    $('.header_section').removeClass('is-sticky');
  }
});
// Header Fixed Window Scroll JS End
/* Sub Menu Open OnClick JS Start */
$(document).ready(function () {
  // Handle first-level (Documents, Reports, etc.)
  $(".nav-item.dropdown > a").click(function (e) {
    e.preventDefault();
    var $submenu = $(this).next("ul");
    var $icon = $(this).find(".material-symbols-outlined");
    if ($submenu.hasClass("opened")) {
      $submenu.removeClass("opened").slideUp(200);
      $icon.removeClass("rotate");
    } else {
      $(".nav-item.dropdown > ul").removeClass("opened").slideUp(200);
      $(".nav-item.dropdown > a .material-symbols-outlined").removeClass("rotate");
      $submenu.addClass("opened").slideDown(200);
      $icon.addClass("rotate");
    }
  });
  // Handle second-level (Publications, Reports, Technical, etc.)
  $(".dropdown-submenu > a.custom_child_menu").click(function (e) {
    e.preventDefault();
    var $submenu = $(this).next("ul");
    var $icon = $(this).find(".material-symbols-outlined");
    if ($submenu.hasClass("opened")) {
      $submenu.removeClass("opened").slideUp(200);
      $icon.removeClass("rotate");
    } else {
      $(this)
        .closest("ul")
        .find("> li > ul.custom-submenu")
        .removeClass("opened")
        .slideUp(200);
      $(this)
        .closest("ul")
        .find("> li > a .material-symbols-outlined")
        .removeClass("rotate");
      $submenu.addClass("opened").slideDown(200);
      $icon.addClass("rotate");
    }
  });
});
/* Sub Menu Open OnClick JS End */
/* Counter Section JS Start */
$(document).ready(function () {
  $('.counter').each(function () {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 4000,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now));
      }
    });
  });
});
/* Counter Section JS End */
/* Events & Engagements Section JS Start */
jQuery(document).ready(function () {
  var owl = jQuery('#events-engagements-slider');
  owl.owlCarousel({
    items: 2,
    loop: true,
    margin: 15,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
    nav: false,
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      992: { items: 1 },
      1199: { items: 2 }
    }
  });
  // Prev / Next
  jQuery('.owl-prev').click(function () {
    owl.trigger('prev.owl.carousel');
  });
  jQuery('.owl-next').click(function () {
    owl.trigger('next.owl.carousel');
  });
  // Play / Pause
  var paused = false;
  jQuery('.owl-pause1').on('click', function () {
    if (paused) {
      owl.trigger('play.owl.autoplay');
      jQuery('.owl-pause1').text('pause');
    } else {
      owl.trigger('stop.owl.autoplay');
      jQuery('.owl-pause1').text('play_arrow');
    }
    paused = !paused;
  });
});
/* Events & Engagements Section JS End */
/* Clients & Impact Section JS Start */
jQuery(document).ready(function () {
  var owl = jQuery('#clients-impact-slider');
  owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 15,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
    nav: false,
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      992: { items: 1 },
      1199: { items: 1 }
    }
  });
  // Prev / Next
  jQuery('.owl-prev2').click(function () {
    owl.trigger('prev.owl.carousel');
  });
  jQuery('.owl-next2').click(function () {
    owl.trigger('next.owl.carousel');
  });
  // Play / Pause
  var paused = false;
  jQuery('.owl-pause2').on('click', function () {
    if (paused) {
      owl.trigger('play.owl.autoplay');
      jQuery('.owl-pause2').text('pause');
    } else {
      owl.trigger('stop.owl.autoplay');
      jQuery('.owl-pause2').text('play_arrow');
    }
    paused = !paused;
  });
});
/* Clients & Impact Section JS End */
/* Gov Logo Section JS Start */
jQuery(document).ready(function () {
  var owl = jQuery('#gov-logo-slider1');
  owl.owlCarousel({
    items: 5,
    loop: true,
    margin: 15,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
    nav: false,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      992: { items: 3 },
      1199: { items: 5 }
    }
  });
});
jQuery(document).ready(function () {
  var owl = jQuery('#gov-logo-slider2');
  owl.owlCarousel({
    items: 5,
    loop: true,
    margin: 15,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
    nav: false,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      992: { items: 3 },
      1199: { items: 5 }
    }
  });
});
jQuery(document).ready(function () {
  var owl = jQuery('#gov-logo-slider3');
  owl.owlCarousel({
    items: 5,
    loop: true,
    margin: 15,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
    nav: false,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      992: { items: 3 },
      1199: { items: 5 }
    }
  });
});
jQuery(document).ready(function () {
  var owl = jQuery('#gov-logo-slider4');
  owl.owlCarousel({
    items: 5,
    loop: true,
    margin: 15,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
    nav: false,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      992: { items: 3 },
      1199: { items: 5 }
    }
  });
});
/* Gov Logo Section JS End */