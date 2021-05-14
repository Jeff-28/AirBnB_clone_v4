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
