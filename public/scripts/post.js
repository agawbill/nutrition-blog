var converter = new showdown.Converter();
var post = [];
var recPostings = [];
var firstSix = [];

// language controls and

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

const postCycle = async () => {
  item = post[0];
  postLogic(item);
  var fbookButton = await `<div class="share-btn" data-url="/post.html?id=${item._id}" data-title="${title}" data-desc="${title}">
                					    <a class="btn-vk" data-id="vk"><i class="fab fa-vk"></i> VK</a>
                					    <a href="https://www.facebook.com/sharer.php?u=http://andop.az/post.html?id=${item._id}" class="btn-facebook" data-id="fb"><i class="fab fa-facebook-square"></i> Facebook</a>
                					    <a class="btn-twitter" data-id="tw"><i class="fab fa-twitter"></i> Twitter</a>
                					    <a class="btn-telegram" data-id="tg"><i class="fab fa-telegram"></i> Telegram</a>
                					    <a class="btn-mail" data-id="mail"><i class="fas fa-at"></i> EMail</a>
				                	</div>
				                	<script src="/scripts/share-buttons.js"></script>`;

  const node = await`
  <div class="col-lg-12 col-md-12 mb-12">
    <h4 class="card-title">
      <a href="/post.html?id=${item._id}">${title}</a>
    </h4>
    <p>
    <span class="date3">${item.createdAt.substring(0, 10).replace(/-/g, ".")}</span>
    </p>
    <p>
      <img src="${item.cover.url}" class="rounded" width="100%"> 
    </p>
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
              <img src="${item.cover.url}" width="90px" style="padding-right:5px;">
          </td>
          <td style="width:100%;position:relative; clear:both;">
            <span class="newsText">
                <p style="font-size:12px!important;" class="card-title font800">
                <a href="/post.html?id=${item._id}" style="color:black!important;">${title.substring(0,60)}  </a>
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
      $("#postContainer").empty();
      $("#upcoming").empty();
      $("#recPosts").empty();
      $("#latestPosts").empty();
      postCycle(contentLanguage);
      recommendedCycle(contentLanguage);
      latestCycle(contentLanguage);
      headingSwap(contentLanguage);
    } else if (languageSelect.value == "RU") {
      localStorage["myKey"] = "RU";
      contentLanguage = "RU";
      $("#postContainer").empty();
      $("#upcoming").empty();
      $("#recPosts").empty();
      $("#latestPosts").empty();
      postCycle(contentLanguage);
      recommendedCycle(contentLanguage);
      latestCycle(contentLanguage);
      headingSwap(contentLanguage);
    } else if (languageSelect.value == "AZ") {
      localStorage["myKey"] = "AZ";
      contentLanguage = "AZ";
      $("#postContainer").empty();
      $("#upcoming").empty();
      $("#recPosts").empty();
      $("#latestPosts").empty();
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
        if (item.recPosts == true) {
          postLogic(item);
          console.log(item);
          recPostings.unshift(item);
          firstSix.unshift(item);
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

  // Get single cake data and template product.html file.

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
  }).then(() => {
    if (post.length !== 0) {
      postCycle();
    }
  });
});
