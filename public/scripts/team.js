var $ = jQuery;
var converter = new showdown.Converter();
var contentArray = [];
var recPostings = [];
var firstSix = [];
var buttonText = 'Подробнее'
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
  headerArray = [
    "#talks",
    "#diet",
    "#fitness",
    "#upcoming",
    "#health",
    "#team"
  ];
  eng = ["Main News", "Diet", "Fitness", "Recommended", "Health", "Team"];
  azi = [
    "Əsas Xəbərlər",
    "Diet",
    "Fintes",
    "REDAKSİYA SEÇİMİ",
    "Sağlamlığ",
    "KOMANDAMIZ"
  ];
  rus = [
    "Главные Новости",
    "Питание",
    "Фитнес",
    "РЕКОМЕНДОВАННЫЕ",
    "Здоровье",
    "Наша Команда< "
  ];
  for (let i = 0; i < headerArray.length; i++) {
    if (contentLanguage === "ENG") {
      $(headerArray[i]).empty();
      $(headerArray[i]).append(eng[i].toUpperCase());
    } else if (contentLanguage === "AZ") {
      $(headerArray[i]).empty();
      $(headerArray[i]).append(azi[i].toUpperCase());
    } else {
      $(headerArray[i]).empty();
      $(headerArray[i]).append(rus[i].toUpperCase());
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
      $("#latestPosts").empty();
      contentCycle(contentLanguage);
      recommendedCycle(contentLanguage);
      latestCycle(contentLanguage);
      swapHeaders(contentLanguage);
    } else if (languageSelect.value == "RU") {
      localStorage["myKey"] = "RU";
      contentLanguage = "RU";
      $("#contentContainer").empty();
      $("#recPosts").empty();
      $("#latestPosts").empty();
      contentCycle(contentLanguage);
      recommendedCycle(contentLanguage);
      latestCycle(contentLanguage);
      swapHeaders(contentLanguage);
    } else if (languageSelect.value == "AZ") {
      localStorage["myKey"] = "AZ";
      contentLanguage = "AZ";
      $("#contentContainer").empty();
      $("#recPosts").empty();
      $("#latestPosts").empty();
      contentCycle(contentLanguage);
      recommendedCycle(contentLanguage);
      latestCycle(contentLanguage);
      swapHeaders(contentLanguage);
    }
  });
};

const latestCycle = () => {
  for (let i = 0; i < firstSix.length; i++) {
    const item = firstSix[i];
    postLogic(item);
    const node = `

      <table style="margin-bottom:10px; display:block">
        <tr>
          <td>
              <img src="${
                item.cover.url
              }" width="90px" style="padding-right:5px;">
          </td>
          <td style="width:100%;position:relative; clear:both;">
            <span class="newsText">
                <p style="font-size:12px!important;" class="card-title font800">
                <a href="/post.html?id=${
                  item._id
                }" style="color:black!important;">${title.substring(
      0,
      60
    )}  </a>
                </p>
            </span>
          </td>
        </tr>
        </div>
      </table>
      <hr>
      </br>
      <div style="clear:both;"></div>`;
    $("#latestPosts").append(node);
  }
};

const contentCycle = () => {
  for (let i = contentArray.length - 1; i >= 0; i--) {
    const item = contentArray[i];
    postLogic(item);
   const node = `
          <div class="card" style="width: 26%">
				    <img src="${item.cover.url}" class="card-img-top" alt="...">
				    <div class="card-body justify-content-center align-items-center">
				       <h5 class="card-title">${title}</h5>
                <a href="/post.html?id=${item._id}"  class="btn btn-sm btn-primary" > ${buttonText} </a>
			        </div>
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
        <span class="date3">${item.createdAt
          .substring(0, 10)
          .replace(/-/g, ".")}</span>
         <h6 style="border-bottom:1px dashed rgb(73,86,120); padding-bottom:10px;" class="card-title">
        <a href="/post.html?id=${
          item._id
        }" style="color:rgb(73, 86, 120)">${title.substring(0, 70)}  </a>
        </h6>
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
        if (i > data.length - 6) {
          firstSix.unshift(item);
        }
        if (item.category == "Команда") {
          contentArray.unshift(item);
          if(contentLanguage=='ENG'){buttonText='Read more'}
          else if(contentLanguage=='RU'){buttonText='Подробнее'}
          else {buttonText='Ətraflı'}
          const node = `
          <div class="card" style="width: 26%">
				    <img src="${item.cover.url}" class="card-img-top" alt="...">
				    <div class="card-body justify-content-center align-items-center">
				       <h5 class="card-title">${title}</h5>
                <a href="/post.html?id=${item._id}"  class="btn btn-sm btn-primary" > ${buttonText} </a>
			        </div>
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

    if (firstSix.length !== 0) {
      latestCycle();
    }
  });
});
