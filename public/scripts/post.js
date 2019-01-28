var converter = new showdown.Converter();
var post = [];
var recPostings = [];

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

const postCycle = () => {
  item = post[0];
  postLogic(item);
  const node = `
  <div class="fb-share-button" data-href="https://nutrition-blog2.herokuapp.com/post.html?id=${item._id}" data-layout="button_count" data-size="large" data-mobile-iframe="true"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnutrition-blog2.herokuapp.com%2Fpost.html%3Fid%3D5c3d1331eb430d0017c2e217&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>
  
  
  
  <div class="col-lg-12 col-md-12 mb-12">
    <span class="date3">${item.createdAt
      .substring(0, 10)
      .replace(/-/g, ".")}</span>
    <h4 class="card-title">
      <a href="/post.html?id=${item._id}">${title}</a>
    </h4>

    <p>
      <img src="${item.cover.url}" class="rounded" width="100%"><br>
    </p>
    <p>
    <h5>${converter.makeHtml(content)}</h5>
    </p>

  </div>
    `;
  $("#postContainer").append(node);
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

const headingSwap = contentLanguage => {
  if (contentLanguage === "ENG") {
    $("#upcoming").empty();
    $("#upcoming").append("RECOMMENDED");
  } else if (contentLanguage === "AZ") {
    $("#upcoming").empty();
    $("#upcoming").append("REDAKSİYA SEÇİMİ");
  } else {
    $("#upcoming").empty();
    $("#upcoming").append("РЕКОМЕНДОВАННЫЕ");
  }
};

window.onload = () => {
  languageSelect.addEventListener("change", () => {
    if (languageSelect.value == "ENG") {
      localStorage["myKey"] = "ENG";
      contentLanguage = "ENG";
      $("#postContainer").empty();
      $("#upcoming").empty();
      $("#recPosts").empty();
      postCycle(contentLanguage);
      recommendedCycle(contentLanguage);
      headingSwap(contentLanguage);
    } else if (languageSelect.value == "RU") {
      localStorage["myKey"] = "RU";
      contentLanguage = "RU";
      $("#postContainer").empty();
      $("#upcoming").empty();
      $("#recPosts").empty();
      postCycle(contentLanguage);
      recommendedCycle(contentLanguage);
      headingSwap(contentLanguage);
    } else if (languageSelect.value == "AZ") {
      localStorage["myKey"] = "AZ";
      contentLanguage = "AZ";
      $("#postContainer").empty();
      $("#upcoming").empty();
      $("#recPosts").empty();
      postCycle(contentLanguage);
      recommendedCycle(contentLanguage);
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
          if (i === 5) {
            break;
          }
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
      }
    },
    catch: err => {
      console.log(err);
    }
  });

  // Get single cake data and template product.html file.

  $.ajax({
    url: `/posts/${id}`,
    method: "GET",
    success: item => {
      post.unshift(item);
      postLogic(item);
      $("#postContainer").append(`
        <div class="col-lg-12 col-md-12 mb-12">
          <h4 class="card-title">
            <a href="/post.html?id=${item._id}">${title}</a>
          </h4>
          <p>
          <span class="date2">${item.createdAt
            .substring(0, 10)
            .replace(/-/g, ".")}</span>
          </p>
          <p>
            <img src="${item.cover.url}" class="rounded" width="100%"><br>
          </p>
          <p>
          <h5>${converter.makeHtml(content)}</h5>
          </p>

        </div>
        `);
    },
    catch: err => {
      console.log(err);
    }
  });
});
