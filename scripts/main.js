jQuery.fn.spectragram.accessData = {
  accessToken: '4726911656.1677ed0.040fabb48a9d42428d22100c78c3cf03'
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

    $('#book-now p'):eq(0).click(function() {
      alert("For any bookings made online, a deposit will be required");
      return false;
    });

  });

});
