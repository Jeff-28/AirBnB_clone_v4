amenityDict = {}
$("checkbox").click(function () {
  $(this).each(function () {
    if (this.checked) {
      amenityDict[$(this).attr("data-id")] = $(this).attr("data-name");
    } else {
      delete amenityDict[$(this).attr("data-id")];
    }
  });
  if (amenityDict.values()) {
    $("div.amenities h4").text(amenity.values().join(', '));
  }
});

$(function () {
  $.get('http://0.0.0.0:5001/api/v1/status/', function (data, textStatus) {
    if (data.status === 'OK') {
      $('DIV#api_status').addClass('available');
    } else {
      $('DIV#api_status').removeClass('available');
    }
  });
});
