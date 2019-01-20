var $ = jQuery;
var converter = new showdown.Converter();
var contentArray = [];

window.onload = () => {
  var languageSelect = document.getElementById("languageSelect");
};

var contentLanguage = localStorage["myKey"] || "RU";
var titleLanguage = localStorage["myKey"] || "RU";
var descriptionLanguage = localStorage["myKey"] || "RU";

const postLogic = item => {
  if (item !== undefined) {
    content = contentLanguage;
    title = titleLanguage;
    description = descriptionLanguage;
    if (contentLanguage == "ENG") {
      content = item.content_eng;
      title = item.title_eng;
      description = item.description_eng;
    } else if (contentLanguage == "RU") {
      content = item.content;
      title = item.title;
      description = item.description;
    } else {
      content = item.content_az;
      title = item.title_az;
      description = item.description_az;
    }
  }
};

const swapHeaders = contentLanguage => {
  headerArray = ["#talks", "#diet", "#fitness", "#upcoming", "#health"];
  eng = ["Main News", "Diet", "Fitness", "Upcoming", "Health"];
  azi = ["Əsas Xəbərlər", "Diet", "Fintes", "Gelecekde", "Saglamlig"];
  rus = ["Главные Новости", "Питание", "Фитнес", "Анонс", "Здоровье"];
  for (let i = 0; i < headerArray.length; i++) {
    if (contentLanguage === "ENG") {
      $(headerArray[i]).empty();
      $(headerArray[i]).append(eng[i]);
    } else if (contentLanguage === "AZ") {
      $(headerArray[i]).empty();
      $(headerArray[i]).append(azi[i]);
    } else {
      $(headerArray[i]).empty();
      $(headerArray[i]).append(rus[i]);
    }
  }
};
swapHeaders(contentLanguage);

window.onload = () => {
  languageSelect.addEventListener("change", () => {
    if (languageSelect.value == "ENG") {
      localStorage["myKey"] = "ENG";
      contentLanguage = "ENG";
      $("#contentContainer").empty();
      contentCycle();
      swapHeaders(contentLanguage);
    } else if (languageSelect.value == "RU") {
      localStorage["myKey"] = "RU";
      contentLanguage = "RU";
      $("#contentContainer").empty();
      contentCycle();
      swapHeaders(contentLanguage);
    } else if (languageSelect.value == "AZ") {
      localStorage["myKey"] = "AZ";
      contentLanguage = "AZ";
      $("#contentContainer").empty();
      contentCycle();
      swapHeaders(contentLanguage);
    }
  });
};

const contentCycle = () => {
  for (let i = contentArray.length - 1; i >= 0; i--) {
    const item = contentArray[i];
    postLogic(item);
    const node = `
    <li class="media" style="border-bottom: 2px dotted gray; margin-bottom: 10px; padding-bottom: 10px;">
    <img src="${
      item.cover.url
    }"width="30%" class="rounded" align="left" style="padding-right:5px;" >
      <div class="media-body">
      <h4 class="card-title">
        <a href="/post.html?id=${item._id}"> ${title}: «${description}»  </a>
      </h4>
      <p>
      ${converter.makeHtml(content).substring(0, 200)}
      </p>
      <span class="date2">${item.createdAt.substring(0, 10).replace(/-/g, ".")}</span>
    </li>
    </div>
      `;
    $("#contentContainer").append(node);
  }
};

$(document).ready(() => {
  $.ajax({
    url: "posts",
    method: "GET",
    dataType: "JSON",
    contentType: "JSON",
    success: data => {
      for (let i = data.length - 1; i >= 0; i--) {
        const item = data[i];
        postLogic(item);
        if (item.category == "Питание") {
          contentArray.unshift(item);
          const node = `
          <li class="media" style="border-bottom: 2px dotted gray; margin-bottom: 10px; padding-bottom: 10px;">
          <img src="${
            item.cover.url
          }"width="30%" class="rounded" align="left" style="padding-right:5px;" >
            <div class="media-body">
            <h4 class="card-title">
              <a href="/post.html?id=${
                item._id
              }"> ${title}: «${description}»  </a>
            </h4>
            <p>
            ${converter.makeHtml(content).substring(0, 200)}
            </p>
            <span class="date2">${item.createdAt.substring(0, 10).replace(/-/g, ".")}</span>
          </li>
          </div>
          `;
          $("#contentContainer").append(node);
        } else {
        }
      }
    },
    catch: err => {
      console.log(err);
    }
  });
});
