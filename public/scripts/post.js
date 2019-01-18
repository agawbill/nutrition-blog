var converter = new showdown.Converter();
var post = [];

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

const postCycle = () => {
  item = post[0];
  postLogic(item);
  const node = `
  <div class="col-lg-12 col-md-12 mb-12">
    <h4 class="card-title">
      <a href="/post.html?id=${item._id}">${title}:  «${description}»  </a>
    </h4>
    <p>
    <span class="date2">${item.createdAt}</span>
    </p>
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

window.onload = () => {
  languageSelect.addEventListener("change", () => {
    if (languageSelect.value == "ENG") {
      localStorage["myKey"] = "ENG";
      contentLanguage = "ENG";
      $("#postContainer").empty();
      postCycle();
    } else if (languageSelect.value == "RU") {
      localStorage["myKey"] = "RU";
      contentLanguage = "RU";
      $("#postContainer").empty();
      postCycle();
    } else if (languageSelect.value == "AZ") {
      localStorage["myKey"] = "AZ";
      contentLanguage = "AZ";
      $("#postContainer").empty();
      postCycle();
    }
  });
};

// initial post load and secondary post load on input change

$(document).ready(() => {
  const url = new URL(window.location.href);
  const id = url.searchParams.get("id");

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
            <a href="/post.html?id=${
              item._id
            }">${title}:  «${description}»  </a>
          </h4>
          <p>
          <span class="date2">${item.createdAt}</span>
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
