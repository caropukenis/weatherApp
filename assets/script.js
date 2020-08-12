$(".day1date").text(moment().format("l"));
$(".day2date").text(moment().add(1, "days").format("l"));
$(".day3date").text(moment().add(2, "days").format("l"));
$(".day4date").text(moment().add(3, "days").format("l"));
$(".day5date").text(moment().add(4, "days").format("l"));

$(window).on("load", function () {
  var savedCity = localStorage.getItem("myCity");
  console.log(savedCity);
});

$(".cityBtn").on("click", function () {
  let cityEntry = $("input").val();
  localStorage.setItem("myCity", cityEntry);
  console.log("you clicked");
  console.log(cityEntry);
  $(".day1icon").empty();
  $(".day2icon").empty();
  $(".day3icon").empty();
  $(".day4icon").empty();
  $(".day5icon").empty();
  if (cityEntry != "") {
    $(".cityDisplay").prepend(cityEntry + "<br>");
    $.ajax({
      url:
        "https://api.openweathermap.org/data/2.5/forecast?q=" +
        cityEntry +
        "&units=imperial" +
        "&APPID=97a578647537cc0fccec405b1840b586",
      type: "GET",
      dataType: "jsonp",
      success: function (data) {
        console.log(data);
        // day 1
        $(".day1max").text(Math.floor(data.list[0].main.temp_max));
        $(".day1min").text(Math.floor(data.list[0].main.temp_min));
        $(".day1main").text(data.list[0].weather[0].main);
        var iconCode1 = data.list[0].weather[0].icon;
        $(".day1icon").attr("src", function () {
          if (iconCode1 == "01d") {
            // full sun
            $(".day1icon").addClass("fas fa-sun");
          } else if (iconCode1 == "01n") {
            // full moon
            $(".day1icon").addClass("fas fa-moon");
          } else if (iconCode1 == "02d") {
            // overcast day
            $(".day1icon").addClass("fas fa-cloud-sun");
          } else if (iconCode1 == "02n") {
            // overcast night
            $(".day1icon").addClass("fas fa-cloud-moon");
          } else if ((iconCode1 == "03d", "04d", "03n", "04n")) {
            // full clouds
            $(".day1icon").addClass("fas fa-cloud");
          } else if ((iconCode1 == "09d", "10d")) {
            // light rain day
            $(".day1icon").addClass("fas fa-cloud-sun-rain");
          } else if ((iconCode1 == "09n", "10n")) {
            // light rain night
            $(".day1icon").addClass("fas fa-cloud-moon-rain");
          } else if ((iconCode1 == "11d", "11n")) {
            // storming rain
            $(".day1icon").addClass("fas fa-poo-storm");
          } else if ((iconCode1 == "50d", "50n")) {
            // foggy
            $(".day1icon").addClass("fas fa-smog");
          }
        });
        // day 2
        $(".day2max").text(Math.floor(data.list[1].main.temp_max));
        $(".day2min").text(Math.floor(data.list[1].main.temp_min));
        $(".day2main").text(data.list[1].weather[0].main);
        var iconCode2 = data.list[1].weather[0].icon;
        $(".day2icon").attr("src", function () {
          if (iconCode2 == "01d") {
            // full sun
            $(".day2icon").addClass("fas fa-sun");
          } else if (iconCode2 == "01n") {
            // full moon
            $(".day2icon").addClass("fas fa-moon");
          } else if (iconCode2 == "02d") {
            // overcast day
            $(".day2icon").addClass("fas fa-cloud-sun");
          } else if (iconCode2 == "02n") {
            // overcast night
            $(".day2icon").addClass("fas fa-cloud-moon");
          } else if ((iconCode2 == "03d", "04d", "03n", "04n")) {
            // full clouds
            $(".day2icon").addClass("fas fa-cloud");
          } else if ((iconCode2 == "09d", "10d")) {
            // light rain day
            $(".day2icon").addClass("fas fa-cloud-sun-rain");
          } else if ((iconCode2 == "09n", "10n")) {
            // light rain night
            $(".day2icon").addClass("fas fa-cloud-moon-rain");
          } else if ((iconCode2 == "11d", "11n")) {
            // storming rain
            $(".day2icon").addClass("fas fa-poo-storm");
          } else if ((iconCode2 == "50d", "50n")) {
            // foggy
            $(".day2icon").addClass("fas fa-smog");
          }
        });
        // day 3
        $(".day3max").text(Math.floor(data.list[2].main.temp_max));
        $(".day3min").text(Math.floor(data.list[2].main.temp_min));
        $(".day3main").text(data.list[2].weather[0].main);
        var iconCode3 = data.list[2].weather[0].icon;
        $(".day3icon").attr("src", function () {
          if (iconCode3 == "01d") {
            // full sun
            $(".day3icon").addClass("fas fa-sun");
          } else if (iconCode3 == "01n") {
            // full moon
            $(".day3icon").addClass("fas fa-moon");
          } else if (iconCode3 == "02d") {
            // overcast day
            $(".day3icon").addClass("fas fa-cloud-sun");
          } else if (iconCode3 == "02n") {
            // overcast night
            $(".day3icon").addClass("fas fa-cloud-moon");
          } else if ((iconCode3 == "03d", "04d", "03n", "04n")) {
            // full clouds
            $(".day3icon").addClass("fas fa-cloud");
          } else if ((iconCode3 == "09d", "10d")) {
            // light rain day
            $(".day3icon").addClass("fas fa-cloud-sun-rain");
          } else if ((iconCode3 == "09n", "10n")) {
            // light rain night
            $(".day3icon").addClass("fas fa-cloud-moon-rain");
          } else if ((iconCode3 == "11d", "11n")) {
            // storming rain
            $(".day3icon").addClass("fas fa-poo-storm");
          } else if ((iconCode3 == "50d", "50n")) {
            // foggy
            $(".day3icon").addClass("fas fa-smog");
          }
        });
        // day 4
        $(".day4max").text(Math.floor(data.list[3].main.temp_max));
        $(".day4min").text(Math.floor(data.list[3].main.temp_min));
        $(".day4main").text(data.list[3].weather[0].main);
        var iconCode4 = data.list[3].weather[0].icon;
        $(".day4icon").attr("src", function () {
          if (iconCode4 == "01d") {
            // full sun
            $(".day4icon").addClass("fas fa-sun");
          } else if (iconCode4 == "01n") {
            // full moon
            $(".day4icon").addClass("fas fa-moon");
          } else if (iconCode4 == "02d") {
            // overcast day
            $(".day4icon").addClass("fas fa-cloud-sun");
          } else if (iconCode4 == "02n") {
            // overcast night
            $(".day4icon").addClass("fas fa-cloud-moon");
          } else if ((iconCode4 == "03d", "04d", "03n", "04n")) {
            // full clouds
            $(".day4icon").addClass("fas fa-cloud");
          } else if ((iconCode4 == "09d", "10d")) {
            // light rain day
            $(".day4icon").addClass("fas fa-cloud-sun-rain");
          } else if ((iconCode4 == "09n", "10n")) {
            // light rain night
            $(".day4icon").addClass("fas fa-cloud-moon-rain");
          } else if ((iconCode4 == "11d", "11n")) {
            // storming rain
            $(".day4icon").addClass("fas fa-poo-storm");
          } else if ((iconCode4 == "50d", "50n")) {
            // foggy
            $(".day4icon").addClass("fas fa-smog");
          }
        });
        // day 5
        $(".day5max").text(Math.floor(data.list[4].main.temp_max));
        $(".day5min").text(Math.floor(data.list[4].main.temp_min));
        $(".day5main").text(data.list[4].weather[0].main);
        var iconCode5 = data.list[4].weather[0].icon;
        console.log(iconCode5);
        $(".day5icon").attr("src", function () {
          if (iconCode5 == "01d") {
            // full sun
            $(".day5icon").addClass("fas fa-sun");
          } else if (iconCode5 == "01n") {
            // full moon
            $(".day5icon").addClass("fas fa-moon");
          } else if (iconCode5 == "02d") {
            // overcast day
            $(".day5icon").addClass("fas fa-cloud-sun");
          } else if (iconCode5 == "02n") {
            // overcast night
            $(".day5icon").addClass("fas fa-cloud-moon");
          } else if ((iconCode5 == "03d", "04d", "03n", "04n")) {
            // full clouds
            $(".day5icon").addClass("fas fa-cloud");
          } else if ((iconCode5 == "09d", "10d")) {
            // light rain day
            $(".day5icon").addClass("fas fa-cloud-sun-rain");
          } else if ((iconCode5 == "09n", "10n")) {
            // light rain night
            $(".day5icon").addClass("fas fa-cloud-moon-rain");
          } else if ((iconCode5 == "11d", "11n")) {
            // storming rain
            $(".day5icon").addClass("fas fa-poo-storm");
          } else if ((iconCode5 == "50d", "50n")) {
            // foggy
            $(".day5icon").addClass("fas fa-smog");
          }
        });
      },
    });
  } else {
    $(".error").text("Field cannot be left empty");
  }
});
