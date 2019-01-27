var $ = jQuery;
var converter = new showdown.Converter();
var contentArray = [];
var recPostings = [];

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

    if (contentLanguage == "ENG") {
      content = item.content_eng;
      title = item.title_eng;
    } else if (contentLanguage == "RU") {
      content = item.content;
      title = item.title;
    } else {
      content = item.content_az;
      title = item.title_az;
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
      $("#recPosts").empty();
      contentCycle(contentLanguage);
      recommendedCycle(contentLanguage);
      swapHeaders(contentLanguage);
    } else if (languageSelect.value == "RU") {
      localStorage["myKey"] = "RU";
      contentLanguage = "RU";
      $("#contentContainer").empty();
      $("#recPosts").empty();
      contentCycle(contentLanguage);
      recommendedCycle(contentLanguage);
      swapHeaders(contentLanguage);
    } else if (languageSelect.value == "AZ") {
      localStorage["myKey"] = "AZ";
      contentLanguage = "AZ";
      $("#contentContainer").empty();
      $("#recPosts").empty();
      contentCycle(contentLanguage);
      recommendedCycle(contentLanguage);
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
        <a href="/post.html?id=${item._id}"> ${title}</a>
      </h4>
      <p>
      ${converter.makeHtml(content).substring(0, 200)}
      </p>
      <span class="date2">${item.createdAt
        .substring(0, 10)
        .replace(/-/g, ".")}</span>
    </li>
    </div>
      `;
    $("#contentContainer").append(node);
  }
};

const recommendedCycle = () => {
  for (var i = 0; i < recPostings.length; i++) {
    if (i === 5) {
      break;
    }
    const item = recPostings[i];
    postLogic(item);
    const node = `
      <div class="row">
        <div style="display: block; padding-left:35px; padding-right:35px;  ">
        <span class="date2">${item.createdAt
          .substring(0, 10)
          .replace(/-/g, ".")}</span>
        <p>
        <h5 style="border-bottom:2px dashed rgb(73,86,120); padding-bottom:10px;" class="card-title">
        <a href="/post.html?id=${
          item._id
        }" style="color:black!important;">${title.substring(0, 70)}  </a>
        </h5>

        </p>

      </div>
    </div>
      `;
    $("#recPosts").append(node);
  }
};

$(document).ready(() => {
  // get news
  $.ajax({
    url: "posts",
    method: "GET",
    dataType: "JSON",
    contentType: "JSON",
    success: data => {
      for (let i = data.length - 1; i >= 0; i--) {
        const item = data[i];
        postLogic(item);
        if (item.recPosts == true) {
          recPostings.unshift(item);
        }
        if (item.category == "Питание") {
          contentArray.unshift(item);
          const node = `
          <li class="media" style="border-bottom: 2px dotted gray; margin-bottom: 10px; padding-bottom: 10px;">
          <img src="${
            item.cover.url
          }"width="30%" class="rounded" align="left" style="padding-right:5px;" >
            <div class="media-body">
                        <span class="date3">${item.createdAt
                          .substring(0, 10)
                          .replace(/-/g, ".")}</span>

            <h4 class="card-title">
              <a href="/post.html?id=${item._id}"> ${title}</a>
            </h4>
            <p>
            ${converter.makeHtml(content).substring(0, 200)}
            </p>
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
  }).then(() => {
    if (recPostings.length !== 0) {
      recommendedCycle();
    }
  });
});
