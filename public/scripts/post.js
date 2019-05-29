var converter = new showdown.Converter();
var post = [];
var technology = [];
var news = [];
var entertainment = [];
var selectedPosts = [];
var sports = [];
var recPostings = [];
var allArray;
var randomSix = [];
var firstSix = [];

// language controls and

window.onload = () => {
  var header = document.getElementsByTagName('header');
  header.append(
    `<meta property="og:url"          content=${ 'http://andop.az/post.html?id='+item._id } />
	  <meta property="og:type"          content="website" />
	  <meta property="og:title"         content="${item.title}" />
	  <meta property="og:description"   content="${item.content}" />
	  <meta property="og:image"         content="${item.cover.url}" />
	  `
	  )
  
  
  var languageSelect = document.getElementById("languageSelect");
};

var contentLanguage = localStorage["myKey"] || "RU";
var titleLanguage = localStorage["myKey"] || "RU";
var descriptionLanguage = localStorage["myKey"] || "RU";

let count;

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

const postCycle = async () => {
  item = post[0];
  postLogic(item);
  var fbookButton = await `<div class="share-btn" data-url="/post.html?id=${item._id}" data-title="${title}" data-desc="${title}">
                					    <a class="btn-vk" data-id="vk"><i class="fab fa-vk"></i> VK</a>
                					    <div class="fb-share-button" 
                                data-href="${item.title}">
                              </div>
                 					    <a class="btn-twitter" data-id="tw"><i class="fab fa-twitter"></i> Twitter</a>
                					    <a class="btn-telegram" data-id="tg"><i class="fab fa-telegram"></i> Telegram</a>
                					    <a class="btn-linkedin" data-id="in"><i class="fab fa-linkedin"></i> Linkedin</a>
                					    <a class="btn-mail" data-id="mail"><i class="fas fa-at"></i> EMail</a>
				                	</div>
				                	<script src="/scripts/share-buttons.js"></script>`;

  const node = await `
  <div class="col-lg-12 col-md-12 mb-12">
    <h4 class="card-title">
      <a href="/post.html?id=${item._id}">${title}</a>
    </h4>

    <p>
      <img src="${item.cover.url}" class="rounded" width="100%">
    </p>
    <div class='glazData'>
        <span class="date3">${item.createdAt
          .substring(0, 10)
          .replace(/-/g, ".")}
        </span>
        <button class="btn btn-outline-warning float-right">
        <i  class="fas fa-eye ">
          <span class="badge">${item.count + 1}</span>
        </i>
        </button>
    </div>
    <p>
    <h5>${converter.makeHtml(content)} </h5>
    </p>
     </div>`;
  $("#postContainer").append(node + fbookButton);
};

const latestCycle = () => {
  for (let i = 0; i < firstSix.length; i++) {
    const item = firstSix[i];
    postLogic(item);
    const node = `<table style="margin-bottom:10px; display:block">
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
      <div style="clear:both;"></div>`;
    $("#latestPosts").append(node);
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
      }" style="color:rgb(73, 86, 120)">${title.substring(0, 100)} </a>
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
    }"style="color:rgb(73, 86, 120)">${title.substring(0, 100)} </a>
    </h5>
    </div>
    `;
        $("#randomSix").append(node);
      }
    }
  }
};

const headingSwap = contentLanguage => {
  if (contentLanguage === "ENG") {
    $("#upcoming").empty();
    $("#latest").empty();
    $("#upcoming").append("RECOMMENDED");
    $("#latest").append("LATEST POSTS");
  } else if (contentLanguage === "AZ") {
    $("#upcoming").empty();
    $("#latest").empty();
    $("#upcoming").append("REDAKSİYA SEÇİMİ");
    $("#latest").append("SON PUBLİKASİYALAR");
  } else {
    $("#upcoming").empty();
    $("#latest").empty();
    $("#upcoming").append("РЕКОМЕНДОВАННЫЕ");
    $("#latest").append("ПОСЛЕДНИИ ПУБЛИКАЦИИ");
  }
};

headingSwap(contentLanguage);

window.onload = () => {
  languageSelect.addEventListener("change", () => {
    if (languageSelect.value == "ENG") {
      localStorage["myKey"] = "ENG";
      contentLanguage = "ENG";
      titleLanguage = "ENG";
      $("#postContainer").empty();
      $("#upcoming").empty();
      $("#recPosts").empty();
      $("#latestPosts").empty();
      $("#randomSix").empty();
      postCycle(contentLanguage);
      recommendedCycle(contentLanguage);
      randomSixCycle(contentLanguage);
      latestCycle(contentLanguage);
      headingSwap(contentLanguage);
    } else if (languageSelect.value == "RU") {
      localStorage["myKey"] = "RU";
      contentLanguage = "RU";
      titleLanguage = "RU";
      $("#postContainer").empty();
      $("#upcoming").empty();
      $("#recPosts").empty();
      $("#latestPosts").empty();
      $("#randomSix").empty();
      randomSixCycle(contentLanguage);
      postCycle(contentLanguage);
      recommendedCycle(contentLanguage);
      latestCycle(contentLanguage);
      headingSwap(contentLanguage);
    } else if (languageSelect.value == "AZ") {
      localStorage["myKey"] = "AZ";
      contentLanguage = "AZ";
      titleLanguage = "AZ";
      $("#postContainer").empty();
      $("#upcoming").empty();
      $("#recPosts").empty();
      $("#latestPosts").empty();
      $("#randomSix").empty();
      randomSixCycle(contentLanguage);
      postCycle(contentLanguage);
      recommendedCycle(contentLanguage);
      latestCycle(contentLanguage);
      headingSwap(contentLanguage);
    }
  });
};

// initial post load and secondary post load on input change

$(document).ready(() => {
  const url = new URL(window.location.href);
  const id = url.searchParams.get("id");

  // get recommended posts

  $.ajax({
    url: `/posts`,
    method: "GET",
    success: data => {
      // console.log(data);
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
    if (recPostings.length !== 0) {
      recommendedCycle();
    }
    if (firstSix.length !== 0) {
      latestCycle();
    }
    if (allArray.length !== 0) {
      randomSixCycle();
    }

    $.ajax({
      url: `/posts/${id}`,
      method: "GET",
      success: item => {
        post.unshift(item);
        postLogic(item);
      },
      catch: err => {
        console.log(err);
      }
    }).then(item => {
      let count = item.count + 1;
      $.ajax({
        url: `/posts/${id}`,
        type: "PUT",
        async: true,
        data: { count: count },
        dataType: "json",

        success: function(data) {
          if (data) {
            console.log("it worked" + data);
          } else {
            console.log("not so much");
          }
        }
      });
      if (post.length !== 0) {
        postCycle();
      }
    });
  });
});


