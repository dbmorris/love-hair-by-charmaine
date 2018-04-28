jQuery.fn.spectragram.accessData = {
  accessToken: '640201490.1677ed0.e37bd781535a4ccf8dbe71aec19efd3f'
};

dividerWidth = ($(window).width() - 24);

$(document).ready(function() {

  jQuery.fn.center = function() {
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) +
      $(window).scrollLeft()) + "px");
    return this;
  }

  $('#instafeed').spectragram('getUserFeed', {
    max: 6,
    size: "big",
    wrapEachWith: '<a>'
  });

  if (dividerWidth < 1200) {
    $('.divider').width(dividerWidth);
  }

  $('.divider').center();

  $(window).resize(function() {
    dividerWidth = ($(window).width() - 24);

    if (dividerWidth < 1200) {
      $('.divider').width(dividerWidth);
    }

    $('.divider').center();

  });

});
