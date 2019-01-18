window.onload = () => {
  var languageSelect = document.getElementById("languageSelect");
};

var contentLanguage = localStorage["myKey"] || "RU";
var titleLanguage = localStorage["myKey"] || "RU";
var descriptionLanguage = localStorage["myKey"] || "RU";

var russian = document.getElementById("russian");
var english = document.getElementById("english");
var azerbaijan = document.getElementById("azerbaijan");

const switchLanguage = () => {
  if (contentLanguage === "ENG") {
    $("#russian").hide();
    $("#azerbaijan").hide();
    $("#english").show();
  } else if (contentLanguage === "RU") {
    $("#russian").show();
    $("#azerbaijan").hide();
    $("#english").hide();
  } else {
    $("#russian").hide();
    $("#azerbaijan").show();
    $("#english").hide();
  }
};

switchLanguage(contentLanguage);

window.onload = () => {
  languageSelect.addEventListener("change", () => {
    if (languageSelect.value == "ENG") {
      localStorage["myKey"] = "ENG";
      contentLanguage = "ENG";
      switchLanguage(contentLanguage);
    } else if (languageSelect.value == "RU") {
      localStorage["myKey"] = "RU";
      contentLanguage = "RU";
      switchLanguage(contentLanguage);
    } else if (languageSelect.value == "AZ") {
      localStorage["myKey"] = "AZ";
      contentLanguage = "AZ";
      switchLanguage(contentLanguage);
    }
  });
};
