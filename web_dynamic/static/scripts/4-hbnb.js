const amenityDict = {};
$(function () {
  const text = $('div.amenities h4').text();
  $(':checkbox').change(function () {
    if (this.checked) {
      amenityDict[$(this).data('id')] = $(this).data('name');
    } else {
      delete amenityDict[$(this).data('id')];
    }
    const checkedBoxes = Object.values(amenityDict);
    if (checkedBoxes.length < 1) {
      checkedBoxes.push(text);
    }
    $('div.amenities h4').text(checkedBoxes.join(', '));
  });
  $('button').click(function () {
    const amenitiesId = [];
    for (const id in amenityDict) {
      amenitiesId.push(id);
    }
    const filter = { amenities: amenitiesId };
    $('section.places').empty();
    $.ajax({
      type: 'POST',
      url: 'http://0.0.0.0:5001/api/v1/places_search/',
      contentType: 'application/json',
      data: JSON.stringify(filter),
      dataType: 'json',
      success: placeDisplay
    });
  });
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
  contentType: 'application/json',
  data: '{}',
  dataType: 'json',
  success: placeDisplay
});

function placeDisplay (data) {
  for (const place of data) {
    $('section.places').append('<article><h2>' + place.name + '</h2><div class="price_by_night"><p>$' + place.price_by_night + '</p></div><div class="information"><div class="max_guest"><div class="guest_image"></div><p>' + place.max_guest + '</p></div><div class="number_rooms"><div class="bed_image"></div><p>' + place.number_rooms + '</p></div><div class="number_bathrooms"><div class="bath_image"></div><p>' + place.number_bathrooms + '</p></div></div><div class="description"><p>' + place.description + '</p></div></article>');
  }
}
