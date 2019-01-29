var $ = jQuery;
var technology = [];
var news = [];
var entertainment = [];
var selectedPosts = [];
var sports = [];
var recPostings = [];
var allArray;
var randomSix = [];
var firstSix = [];
// language selected presets
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
// convert rich text
var converter = new showdown.Converter();
// below are the functions to push the data to their corresponding category
const newsCycle = () => {
  news.sort(function compare(a, b) {
    var dateA = new Date(a.createdAt);
    var dateB = new Date(b.createdAt);
    return dateB - dateA;
  });

  const item = news[0];
  postLogic(item);
  const news1 = `
    <img src="${item.cover.url}"   width="100%" class="rounded" ></p>
    <span class="date3">   ${item.createdAt
      .substring(0, 10)
      .replace(/-/g, ".")}</span>
    <p style="font-size:  1.7em; font-weight: 800; " class="card-title">

      <a href="/post.html?id=${
        item._id
      }" style="color:black!important;">${title.substring(0, 100)}</a>
    </p>

    <p>
    <div style="margin-bottom:5px;">
    ${converter.makeHtml(content).substring(0, 337)}
      <br>
    </div>

    </p>

    `;
  $("#newsFirst").append(news1);
  for (i = 1; i < news.length; i++) {
    const item = news[i];
    postLogic(item);
    if (item !== undefined) {
      if (i === 4) {
        break;
      } else if (i === 2) {
        const news2 = `
        <div id="blocks">
          <div style="border-top:1px dotted navy;border-bottom:1px dotted navy;width:100%;padding-top:10px;padding-bottom:10px;">
          <table>
            <tr>
              <td width="60%">
                  <img src="${
                    item.cover.url
                  }"  class="rounded" float="left"    width="100%" style="padding-right:10px;">
              </td>
              <td style="width:100%;position:relative; clear:both;">
                <span class="newsText">
                          <span class="date3">${item.createdAt
                            .substring(0, 10)
                            .replace(/-/g, ".")}</span>
                    <h4 class="card-title">
                      <a href="/post.html?id=${
                        item._id
                      }" style="color:black!important;">${title.substring(
          0,
          100
        )}</a>
                    </h4>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <p>
          `;
        $("#newsSecond").append(news2);
      } else {
        const news2 = `
        <div id="blocks">
          <table>
            <tr>
              <td>
                  <img src="${
                    item.cover.url
                  }"  class="rounded" float="left"   width="310vh" style="padding-right:10px;">
              </td>
              <td style="width:100%;position:relative; clear:both;">
                <span class="newsText">
                    <span class="date3">${item.createdAt
                      .substring(0, 10)
                      .replace(/-/g, ".")}</span>
                    <h4 class="card-title">
                      <a href="/post.html?id=${
                        item._id
                      }" style="color:black!important;">${title.substring(
          0,
          100
        )}</a>
                    </h4>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <p>
          `;
        $("#newsSecond").append(news2);
      }
    }
  }
};
const entertainmentCycle = () => {
  entertainment.sort(function compare(a, b) {
    var dateA = new Date(a.createdAt);
    var dateB = new Date(b.createdAt);
    return dateB - dateA;
  });

  const item = entertainment[0];
  postLogic(item);
  const ent = `
  <div class="col-lg-16 col-md-16 mb-16">
  <img src="${
    item.cover.url
  }" class="rounded"   width="50%" style="float:left; padding-right:15px;">
  <span class="date3">${item.createdAt
    .substring(0, 10)
    .replace(/-/g, ".")}</span>
  </div>
    <p style="font-size:  1.7em; font-weight: 800; " class="card-title">
      <a href="/post.html?id=${
        item._id
      }" style="color:black!important;">${title.substring(0, 100)}</a>
    </h5>
   <p class='font800'>${converter.makeHtml(content.substring(0, 286))}</p>
    </p>
  `;
  $("#entertainmentFirst").append(ent);
  for (let i = 1; i < entertainment.length; i++) {
    const item = entertainment[i];
    postLogic(item);
    if (item !== undefined) {
      if (i === 5) {
        break;
      } else if (i === 4) {
        const ent = `
    <div class="col-lg-3 col-md-3 mb-3" style="position:relative;float:center;">
      <img src="${item.cover.url}" class="rounded"   width="100%">
      <p>
      <span class="date3">${item.createdAt
        .substring(0, 10)
        .replace(/-/g, ".")}</span>
        <h5 class="card-title">
          <a href="/post.html?id=${
            item._id
          }" style="color:black!important;">${title.substring(0, 100)}</a>
        </h5>
        </p>
    </div>
    `;
        $("#entertainmentSecond").append(ent);
      } else {
        const item = entertainment[i];
        postLogic(item);
        const ent = `
    <div class="col-lg-3 col-md-3 mb-3" style="position:relative;border-right: 1px dotted navY">
    <img src="${item.cover.url}" class="rounded"   width="100%">
  <p>
  <span class="date3">${item.createdAt
    .substring(0, 10)
    .replace(/-/g, ".")}</span>
  <h5 class="card-title">
    <a href="/post.html?id=${
      item._id
    }" style="color:black!important;">${title.substring(0, 100)}</a>
  </h5>
    </div>
    `;
        $("#entertainmentSecond").append(ent);
      }
    }
  }
};
const techCycle = () => {
  technology.sort(function compare(a, b) {
    var dateA = new Date(a.createdAt);
    var dateB = new Date(b.createdAt);
    return dateB - dateA;
  });

  const item = technology[0];
  postLogic(item);
  const tech = `
  <div class="col-lg-16 col-md-16 mb-16">
  <img src="${
    item.cover.url
  }" class="rounded"   width="50%" style="float:left;padding-right:15px;">
  <span class="date3">${item.createdAt
    .substring(0, 10)
    .replace(/-/g, ".")}</span>
    <p style="font-size:  1.7em; font-weight: 800; " class="card-title">
      <a href="/post.html?id=${
        item._id
      }"style="color:black!important;">${title.substring(0, 100)}</a>
    </p>
    <p>
    ${converter.makeHtml(content).substring(0, 351)}
    </p>
    </div>
  `;
  $("#technologyFirst").append(tech);
  for (let i = 1; i < technology.length; i++) {
    const item = technology[i];
    postLogic(item);
    if (item !== undefined) {
      if (i === 5) {
        break;
      } else if (i === 4) {
        const tech = `
        <div class="col-lg-3 col-md-3 mb-3" style="position:relative;float:center;">
          <img src="${item.cover.url}" class="rounded"   width="100%">
          <p>
          <span class="date3">${item.createdAt
            .substring(0, 10)
            .replace(/-/g, ".")}</span>
            <h5 class="card-title">
              <a href="/post.html?id=${
                item._id
              }" style="color:black!important;">${title.substring(0, 100)}</a>
            </h5>
            </p>
        </div>
    `;
        $("#technologySecond").append(tech);
      } else {
        const item = technology[i];
        postLogic(item);
        const tech = `
    <div class="col-lg-3 col-md-3 mb-3" style="position:relative;border-right: 1px dotted navY">
    <img src="${item.cover.url}" class="rounded"   width="100%">
  <p>
  <span class="date3">${item.createdAt
    .substring(0, 10)
    .replace(/-/g, ".")}</span>
  <h5 class="card-title">
    <a href="/post.html?id=${
      item._id
    }" style="color:black!important;">${title.substring(0, 100)}</a>
  </h5>
    </div>
    `;
        $("#technologySecond").append(tech);
      }
    }
  }
};
const sportsCycle = () => {
  sports.sort(function compare(a, b) {
    var dateA = new Date(a.createdAt);
    var dateB = new Date(b.createdAt);
    return dateB - dateA;
  });

  const item = sports[0];
  postLogic(item);
  const sport = `
  <div class="col-lg-16 col-md-16 mb-16">
  <img src="${
    item.cover.url
  }" class="rounded"   width="50%" style="float:left; padding-right:15px;">
  <span class="date3">${item.createdAt
    .substring(0, 10)
    .replace(/-/g, ".")}</span>
    <p style="font-size:  1.7em; font-weight: 800; " class="card-title">
      <a href="/post.html?id=${
        item._id
      }" style="color:black!important;">${title.substring(0, 100)}</a>
    </h5>
   <p class='font800'>${converter.makeHtml(content).substring(0, 351)}</p>
    </p>
    </div>
  `;
  $("#sportsFirst").append(sport);
  for (let i = 1; i < sports.length; i++) {
    const item = sports[i];
    postLogic(item);
    if (item !== undefined) {
      if (i === 5) {
        break;
      } else if (i === 4) {
        const sport = `
    <div class="col-lg-3 col-md-3 mb-3" style="position:relative;">
        <img src="${item.cover.url}" class="rounded"   width="100%">
      <p>
      <span class="date3">${item.createdAt
        .substring(0, 10)
        .replace(/-/g, ".")}</span>
      <h5 class="card-title">
        <a href="/post.html?id=${
          item._id
        }" style="color:black!important;">${title.substring(0, 100)}</a>
      </h5>
    </div> `;
        $("#sportsSecond").append(sport);
      } else {
        const item = sports[i];
        postLogic(item);
        const sport = `
    <div class="col-lg-3 col-md-3 mb-3" style="position:relative;border-right: 1px dotted navY;">
    <img src="${item.cover.url}" class="rounded"   width="100%">
  <p>
  <span class="date3">${item.createdAt
    .substring(0, 10)
    .replace(/-/g, ".")}</span>
  <h5 class="card-title">
    <a href="/post.html?id=${
      item._id
    }" style="color:black!important;">${title.substring(0, 100)}</a>
  </h5>
    </div>`;
        $("#sportsSecond").append(sport);
      }
    }
  }
};
const selectedCycle = () => {
  for (let i = 0; i < selectedPosts.length; i++) {
    const item = selectedPosts[i];
    postLogic(item);
    if (item !== undefined) {
      if (i === 5) {
        break;
      } else if (i === 4) {
        const selected = `
      <div class="col-lg-3 col-md-3 mb-3" style="position:relative;border-right: 0px">
         <span class="date3">${item.createdAt
           .substring(0, 10)
           .replace(/-/g, ".")}</span>
        <a href="/post.html?id=${
          item._id
        }" style="color:black!important;"><h6>${title.substring(
          0,
          100
        )}</h6></a>
        <p>
          ${converter.makeHtml(content).substring(0, 320)}
        </p>
      </div>
      `;
        $("#selected").append(selected);
      } else {
        const item = selectedPosts[i];
        postLogic(item);
        const selected = `
          <div class="col-lg-3 col-md-3 mb-3" style="position:relative;border-right: 1px dotted navY; ">
            <a href="/post.html?id=${item._id}" style="color:black!important;">
              <span class="date3">${item.createdAt
                .substring(0, 10)
                .replace(/-/g, ".")}</span>
              <h6 class='font800'>${title.substring(0, 100)}</h6>
            </a>
            <br>
            <p style="font-size:12px;  ">
              ${content.substring(0, 330)}
            </p>

            <br>
        </div>
      `;
        $("#selected").append(selected);
      }
    }
  }
};
const randomSixCycle = () => {
  for (let i = 0; i < allArray.length; i++) {
    if (i == 6) {
      break;
    }
    const item = allArray[i];
    postLogic(item);
    if (item !== undefined) {
      if (i === 2 || i === 5) {
        const node = `
        <div class="col-lg-4 col-md-4 mb-4 randomSix${i}a " style="position:relative;border-right: 0px; padding:1%">
        <img src="${item.cover.url}" class="rounded" width="100%">
        <p>
        <span class="date3">${item.createdAt
          .substring(0, 10)
          .replace(/-/g, ".")}</span>
        <h5 class="card-title">
        <a href="/post.html?id=${
          item._id
        }" style="color:black!important;">${title.substring(0, 100)} </a>
        </h5>
      </div>
      `;
        $("#randomSix").append(node);
      } else {
        const node = `
      <div class="col-lg-4 col-md-4 mb-4 randomSix${i} " style="position:relative;border-right:1px dotted navy; padding:1%">
      <img src="${item.cover.url}" class="rounded"   width="100%">
      <p>
      <span class="date3">${item.createdAt
        .substring(0, 10)
        .replace(/-/g, ".")}</span>
      <h5 class="card-title">
      <a href="/post.html?id=${
        item._id
      }"style="color:black!important;">${title.substring(0, 100)} </a>
      </h5>
      </div>
      `;
        $("#randomSix").append(node);
      }
    }
  }
};
const recPostCycle = () => {
  for (let i = 0; i < recPostings.length; i++) {
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
        <p>
        <h5 style="border-bottom:1px dashed rgb(73,86,120); padding-bottom:10px;" class="card-title">
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
const latestPosts = () => {
  for (let i = 0; i < firstSix.length; i++) {
    const item = firstSix[i];
    postLogic(item);
    const node = `

      <table style="margin-bottom:10px; display:block">
        <tr>
          <td>
              <img src="${
                item.cover.url
              }"   width="90px" style="padding-right:5px;">
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
      <div style="clear:both;"></div>
  `;
    $("#latestPosts").append(node);
  }
};
// headers in differnt languages
const swapHeaders = contentLanguage => {
  headerArray = [
    "#talks",
    "#diet",
    "#fitness",
    "#upcoming",
    "#health",
    "#latest"
  ];
  eng = [
    "Main News",
    "Diet",
    "Fitness",
    "Recommended",
    "Health",
    "LATEST POSTS"
  ];
  azi = [
    "Əsas Xəbərlər",
    "Diet",
    "Fintes",
    "REDAKSİYA SEÇİMİ",
    "Sağlamlığ",
    "SON PUBLİKASİYALAR"
  ];
  rus = [
    "Главные Новости",
    "Питание",
    "Фитнес",
    "РЕКОМЕНДОВАННЫЕ",
    "Здоровье",
    "ПОСЛЕДНИИ ПУБЛИКАЦИИ "
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
// wipe clear sections for new languages to load, and cycle through languages to be appended to emptied divs upon language change
const emptyAll = () => {
  $("#latestPosts").empty();
  $("#randomSix").empty();
  $("#technologyFirst").empty();
  $("#technologySecond").empty();
  $("#sportsFirst").empty();
  $("#sportsSecond").empty();
  $("#newsFirst").empty();
  $("#newsSecond").empty();
  $("#entertainmentFirst").empty();
  $("#entertainmentSecond").empty();
  $("#recPosts").empty();
  $("#selected").empty();
};
const functionCycle = () => {
  if (sports.length !== 0) {
    sportsCycle();
  }
  if (entertainment.length !== 0) {
    entertainmentCycle();
  }
  if (news.length !== 0) {
    newsCycle();
  }
  if (technology.length !== 0) {
    techCycle();
  }
  if (selectedPosts.length !== 0) {
    selectedCycle();
  }
  if (allArray.length !== 0) {
    randomSixCycle();
  }
  if (recPostings.length !== 0) {
    recPostCycle();
  }
  if (firstSix.length !== 0) {
    latestPosts();
  }
};
// language change logic
window.onload = () => {
  languageSelect.addEventListener("change", () => {
    if (languageSelect.value == "ENG") {
      localStorage["myKey"] = "ENG";
      contentLanguage = "ENG";
      emptyAll();
      functionCycle();
      swapHeaders(contentLanguage);
    } else if (languageSelect.value == "RU") {
      localStorage["myKey"] = "RU";
      contentLanguage = "RU";
      emptyAll();
      functionCycle();
      swapHeaders(contentLanguage);
    } else if (languageSelect.value == "AZ") {
      localStorage["myKey"] = "AZ";
      contentLanguage = "AZ";
      emptyAll();
      functionCycle();
      swapHeaders(contentLanguage);
    }
  });
};
// ajax requests to get the data
$(document).ready(() => {
  $.ajax({
    url: "banners",
    method: "GET",
    dataType: "json",
    contentType: "json",
    success: data => {
      for (let i = 0; i < data.length; i++) {
        if (i === 5) {
          break;
        }
        const item = data[i];
        const node = `

          <img src="${item.url}" width="19%" align="center">

        `;
        $("#banners").append(node);
      }
    },
    catch: err => {
      console.log(err);
    }
  });
  $.ajax({
    url: "posts",
    method: "GET",
    dataType: "json",
    contentType: "json",
    success: data => {
      for (let i = data.length - 1; i >= 0; i--) {
        const item = data[i];
        postLogic(item);
        if (item.Избранное == true) {
          randomSix.unshift(item);
        }
        if (item.recPosts == true) {
          recPostings.unshift(item);
        }
        if (item.category == "Наши Беседы") {
          news.unshift(item);
        } else if (item.category == "Питание") {
          technology.unshift(item);
        } else if (item.category == "Здоровье") {
          entertainment.unshift(item);
        } else if (item.category == "Анонс") {
          selectedPosts.unshift(item);
        } else {
          sports.unshift(item);
        }
        if (i > data.length - 6) {
          firstSix.unshift(data[i]);
          const node = `

            <table style="margin-bottom:10px; display:block">
              <tr>
                <td>
                    <img src="${
                      item.cover.url
                    }"   width="90px" style="padding-right:5px;">
                </td>
                <td style="width:100%;position:relative; clear:both;">
                  <span class="newsText">
                      <p style="font-size:12px!important;" class="card-title font800">
                      <a href="/post.html?id=${
                        item._id
                      }" style="color:black!important;">${title.substring(
            0,
            70
          )}  </a>
                      </p>
                  </span>
                </td>

              </tr>
              </div>
            </table>
            <hr>
            </br>
            <div style="clear:both;"></div>
        `;
          $("#latestPosts").append(node);
        }
      }
      allArray = [
        sports[sports.length - 1],
        sports[sports.length - 2],
        technology[technology.length - 1],
        technology[technology.length - 2],
        entertainment[entertainment.length - 1],
        entertainment[entertainment.length - 2]
      ];
    },
    catch: err => {
      console.log(err);
    }
  }).then(() => {
    if (sports.length !== 0) {
      sportsCycle();
    }
    if (entertainment.length !== 0) {
      entertainmentCycle();
    }
    if (news.length !== 0) {
      newsCycle();
    }
    if (technology.length !== 0) {
      techCycle();
    }
    if (selectedPosts.length !== 0) {
      selectedCycle();
    }
    if (allArray.length !== 0) {
      randomSixCycle();
    }
    if (recPostings.length !== 0) {
      recPostCycle();
    }
  });
});
