$(".cityBtn").on("click", function () {
  let cityEntry = $("input").val();
  console.log("you clicked");
  $(".cityDisplay").text(cityEntry);
  console.log(cityEntry);
  if (cityEntry != "") {
    $.ajax({
      url:
        "http://api.openweathermap.org/data/2.5/forecast?q=" +
        cityEntry +
        "&APPID=97a578647537cc0fccec405b1840b586",
      type: "GET",
      dataType: "jsonp",
      success: function (data) {
        console.log(data);
      },
    });
  } else {
    $(".error").text("Field cannot be left empty");
  }
});
