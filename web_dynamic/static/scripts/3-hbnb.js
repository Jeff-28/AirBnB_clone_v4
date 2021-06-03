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

$.ajax({
  type: 'POST',
  url: 'http://0.0.0.0:5001/api/v1/places_search/',
  content-type: 'application/json',
  data: '{}',
  data-type: 'json',
  success: function (data) {
      for (const place of data) {
          $('section.places').append('<article><h2>' + place.name + '</h2><div class="price_by_night"><p>$' + place.price_by_night + '</p></div><div class="information"><div class="max_guest"><div class="guest_image"></div><p>' + place.max_guest + '</p></div><div class="number_rooms"><div class="bed_image"></div><p>' + place.number_rooms + '</p></div><div class="number_bathrooms"><div class="bath_image"></div><p>' + place.number_bathrooms + '</p></div></div><div class="description"><p>' + place.description + '</p></div></article>');
      }
  }
});
