window.onload = () => {
  var languageSelect = document.getElementById("languageSelect");
};

var sideMenu = document.getElementById("sideMenu");

var contentLanguage = localStorage["myKey"] || "RU";
var titleLanguage = localStorage["myKey"] || "RU";
var descriptionLanguage = localStorage["myKey"] || "RU";

var russian = document.getElementById("russian");
var english = document.getElementById("english");
var azerbaijan = document.getElementById("azerbaijan");

const switchMenu = () => {
  const russianMenu = `
          <ul style='list-style-type: none; margin-left: 10rem; padding: 0; font-size:1.1em;'>
           <li><a class="nav-link" href="about.html">ANDOP <span class="sr-only">(current)</span></a></li>
            <hr>
            </li><a class="nav-link" href="team.html">Наша Команда</a> </li>
            <hr>
            </li><a class="nav-link" href="projects.html">Наши Проекты</a> </li>
            <hr>
            </li> <a class="nav-link" href="trainings.html">Наши Тренинги</a></li>
            <hr>
            </li> <a class="nav-link" href="membership.html">Членство</a> </li>
            <hr>
          </ul>`;
  const englishMenu = `
          <ul style='list-style-type: none; margin: 0; padding: 0; font-size:1.1em;'>
           <li><a class="nav-link" href="about.html">ANDOP <span class="sr-only">(current)</span></a></li>
            <hr>
            </li><a class="nav-link" href="team.html">Team</a> </li>
            <hr>
            </li><a class="nav-link" href="projects.html">Projects</a> </li>
            <hr>
            </li> <a class="nav-link" href="trainings.html">Trainings</a></li>
            <hr>
            </li> <a class="nav-link" href="membership.html">Membership</a> </li>
            <hr>
          </ul>`;
  const azerbaijanMenu = `
          <ul style='list-style-type: none; margin: 0; padding: 0; font-size:1.1em;'>
           <li><a class="nav-link" href="about.html">ANDOP<span class="sr-only">(current)</span></a></li>
            <hr>
            </li><a class="nav-link" href="team.html">Komandamiz</a> </li>
            <hr>
            </li><a class="nav-link" href="projects.html">Proyektləri̇mi̇z</a> </li>
            <hr>
            </li> <a class="nav-link" href="trainings.html">Treni̇nglər</a></li>
            <hr>
            </li> <a class="nav-link" href="membership.html">Üzvlük</a> </li>
            <hr>
          </ul>`;

  if (contentLanguage === "ENG") {
    $("#sideMenu").empty();
    $("#sideMenu").append(englishMenu);
  } else if (contentLanguage === "RU") {
    $("#sideMenu").empty();
    $("#sideMenu").append(russianMenu);
  } else {
    $("#sideMenu").empty();
    $("#sideMenu").append(azerbaijanMenu);
  }
};

switchMenu(contentLanguage);

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
      switchMenu(contentLanguage);
    } else if (languageSelect.value == "RU") {
      localStorage["myKey"] = "RU";
      contentLanguage = "RU";
      switchLanguage(contentLanguage);
      switchMenu(contentLanguage);
    } else if (languageSelect.value == "AZ") {
      localStorage["myKey"] = "AZ";
      contentLanguage = "AZ";
      switchLanguage(contentLanguage);
      switchMenu(contentLanguage);
    }
  });
};
