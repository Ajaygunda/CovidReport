const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = false;

let countryName = document.getElementsByClassName("countryValue")[0].value;
xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    let countryData = JSON.parse(this.responseText);
    let countryDataLength = countryData.length;
    document
      .getElementsByClassName("btn-success")[0]
      .addEventListener("click", function () {
        let countryNameFirst = document.getElementsByClassName(
          "countryValue"
        )[0].value;

        function capitalizeFirstLetter(string) {
          return string.charAt(0).toUpperCase() + string.slice(1);
        }
        let countryName = capitalizeFirstLetter(countryNameFirst);

        for (let i = 0; i < countryDataLength; i++) {
          if (countryName === countryData[i].Country) {
            document.getElementById("formGroupTotalInput").value =
              countryData[i].TotalCases;
            document.getElementById("formGroupRecoveredInput2").value =
              countryData[i].TotalRecovered;
            document.getElementById("formGroupDeathsInput").value =
              countryData[i].TotalDeaths;
          }
        }
      });
  }
});

xhr.open(
  "GET",
  "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/countries"
);
xhr.setRequestHeader(
  "x-rapidapi-key",
  "4454bba7bdmsh5f16051d088784ap108a85jsnd077435f63b3"
);
xhr.setRequestHeader(
  "x-rapidapi-host",
  "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com"
);

xhr.send(data);

document
  .getElementsByClassName("btn-warning")[0]
  .addEventListener("click", function () {
    document.getElementById("formGroupTotalInput").value = "";
    document.getElementById("formGroupRecoveredInput2").value = "";
    document.getElementById("formGroupDeathsInput").value = "";
    document.getElementsByClassName("countryValue")[0].value = "";
  });
