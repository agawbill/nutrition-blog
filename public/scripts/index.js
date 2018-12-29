var $ = jQuery;
var technology = [];
var news = [];
var entertainment = [];
var selectedPosts = [];
var sports = [];
var allArray;
var randomSix = [];

const newsCycle = () => {
  const first = news[0];
  const title = `
  <h4 class="card-title">
    <a href="/post.html?id=${first._id}">${first.title}</a>
  </h4>
  `;
  $(".titleNews").append(title);
  const news1 = `
    <img src="${first.cover.url}" height="600vh" width="100%" class="rounded" >
    <h5>${first.description}</h5>
    <p>
    ${first.content.substring(0, 50)}
    </p>
    </br>
    <span class="date">${first.createdAt}</span>
    `;
  $("#newsFirst").append(news1);
  for (i = 1; i < news.length; i++) {
    if (i === 4) {
      break;
    }
    if (i === 2) {
      const item = news[i];
      const news2 = `
        <div id="blocks">
          <table>
          <div style="border-top: 1px solid navy;border-bottom:1px solid navy;>"
            <tr>
              <td>
                  <img src="${
                    item.cover.url
                  }"  class="rounded" float="left" height="200vh" width="200vh" style="padding-right:10px;">
              </td>
              <td style="width: 100%;position:relative; clear:both;">
                <span class="newsText">
                    <h4 class="card-title">
                      <a href="/post.html?id=${item._id}">${
        item.description
      }</a>
                    </h4>
                </span>
                <span class="date">${item.createdAt}</span>
              </td>
            </tr>
            </div>
          </table>
        </div>
        <p>
          `;
      $("#newsSecond").append(news2);
    } else {
      const item = news[i];
      const news2 = `
        <div id="blocks">
          <table>
            <tr>
              <td>
                  <img src="${
                    item.cover.url
                  }"  class="rounded" float="left" height="200vh" width="200vh" style="padding-right:10px;">
              </td>
              <td style="width: 100%;position:relative; clear:both;">
                <span class="newsText">
                    <h4 class="card-title">
                      <a href="/post.html?id=${item._id}">${
        item.description
      }</a>
                    </h4>
                </span>
                <span class="date">${item.createdAt}</span>
              </td>
            </tr>
          </table>
        </div>
        <p>
          `;
      $("#newsSecond").append(news2);
    }
  }
};

const entertainmentCycle = () => {
  for (let i = 0; i < entertainment.length; i++) {
    if (i === 3) {
      break;
    }
    if (i === 1) {
      const item = entertainment[i];
      const ent = `
    <div class="col-lg-4 col-md-4 mb-4" style="position:relative;line-height:0px!important;float:center; border-left: 1px solid navy; border-right: 1px solid navy;">
      <h4 class="card-title">
        <a href="/post.html?id=${item._id}">${item.title}</a>
      </h4>
        <img src="${
          item.cover.url
        }" class="rounded" height="200vh" width="100%">
      <h5>${item.description}</h5>
      </p>
      <span class="date2">${item.createdAt}</span>
    </div>
    `;
      $("#entertainment").append(ent);
    } else {
      const item = entertainment[i];
      const ent = `
    <div class="col-lg-4 col-md-4 mb-4" style="position:relative;line-height:0px!important;">
      <h4 class="card-title">
        <a href="/post.html?id=${item._id}">${item.title}</a>
      </h4>
        <img src="${
          item.cover.url
        }" class="rounded" height="200vh" width="100%">
      <h5>${item.description}</h5>
      </p>
      <span class="date2">${item.createdAt}</span>
    </div>
    `;
      $("#entertainment").append(ent);
    }
  }
};

const techCycle = () => {
  for (let i = 0; i < technology.length; i++) {
    if (i === 3) {
      break;
    }
    if (i === 1) {
      const item = technology[i];
      const tech = `
    <div class="col-lg-4 col-md-4 mb-4" style="position:relative;line-height:0px!important;float:center; border-left: 1px solid navy; border-right: 1px solid navy;">
      <h4 class="card-title">
        <a href="/post.html?id=${item._id}">${item.title}</a>
      </h4>
        <img src="${
          item.cover.url
        }" class="rounded" height="200vh" width="100%">
      <h5>${item.description}</h5>
      </p>
      <span class="date2">${item.createdAt}</span>
    </div>
    `;
      $("#technology").append(tech);
    } else {
      const item = technology[i];
      const tech = `
    <div class="col-lg-4 col-md-4 mb-4" style="position:relative;line-height:0px!important;">
      <h4 class="card-title">
        <a href="/post.html?id=${item._id}">${item.title}</a>
      </h4>
        <img src="${
          item.cover.url
        }" class="rounded"  height="200vh" width="100%">
      <h5>${item.description}</h5>
      <p>
      <span class="date2">${item.createdAt}</span>
    </div>
    `;
      $("#technology").append(tech);
    }
  }
};
const sportsCycle = () => {
  for (let i = 0; i < sports.length; i++) {
    if (i === 3) {
      break;
    }
    if (i === 1) {
      const item = sports[i];
      const sport = `
        <div class="col-lg-4 col-md-4 mb-4" style="position:relative;line-height:0px!important;float:center; border-left: 1px solid navy; border-right: 1px solid navy;">
          <h4 class="card-title">
            <a href="/post.html?id=${item._id}">${item.title}</a>
          </h4>
            <img src="${
              item.cover.url
            }" class="rounded" height="200vh" width="100%">
          <h5>${item.description}</h5>
          </p>
          <span class="date2">${item.createdAt}</span>
        </div>
        `;
      $("#sports").append(sport);
    } else {
      const item = sports[i];
      const sport = `
    <div class="col-lg-4 col-md-4 mb-4" style="position:relative;line-height:0px!important;">
      <h4 class="card-title">
        <a href="/post.html?id=${item._id}">${item.title}</a>
      </h4>
        <img src="${item.cover.url}"  height="200vh" width="100%">
      <h5>${item.description}</h5>
      </p>
      <span class="date2">${item.createdAt}</span>
    </div>
    `;
      $("#sports").append(sport);
    }
  }
};

const selectedCycle = () => {
  for (let i = 0; i < selectedPosts.length; i++) {
    if (i === 4) {
      break;
    } else if (i === 3) {
      const item = selectedPosts[i];
      const selected = `
      <div class="col-lg-3 col-md-3 mb-3" style="position:relative;border-right: 0px">
        <a href="/post.html?id=${item._id}"><h5>${item.description}</h5></a>
        <p>
        ${item.content.substring(0, 50)}
        </p>
        </br>
        <span class="date">${item.createdAt}</span>

      </div>
      `;
      $("#selected").append(selected);
    } else {
      const item = selectedPosts[i];
      const selected = `
      <div class="col-lg-3 col-md-3 mb-3" style="position:relative;border-right: 1px solid navY">
        <a href="/post.html?id=${item._id}"><h5>${item.description}</h5></a>
        <p>
        ${item.content.substring(0, 50)}
        </p>
        </br>
        <span class="date">${item.createdAt}</span>

      </div>
      `;
      $("#selected").append(selected);
    }
  }
};
const randomSixCycle = () => {
  for (let i = 0; i < allArray.length; i++) {
    const item = allArray[i];
    if (i === 1 || i == 4) {
      const node = `
      <div class="col-lg-4 col-md-4 mb-4" style="position:relative;line-height:0px!important;float:center; border-left: 1px solid navy; border-right: 1px solid navy;">
        <h4 class="card-title">
          <a href="/post.html?id=${item._id}">${item.title}</a>
        </h4>
          <img src="${
            item.cover.url
          }" class="rounded" height="200vh" width="100%">
        <h5>${item.description}</h5>
        </p>
        <span class="date2">${item.createdAt}</span>
      </div>
      `;
      $("#randomSix").append(node);
    } else {
      const node = `
      <div class="col-lg-4 col-md-4 mb-4" style="position:relative;line-height:0px!important;">
        <h4 class="card-title">
          <a href="/post.html?id=${item._id}">${item.title}</a>
        </h4>
          <img src="${
            item.cover.url
          }" class="rounded"  height="200vh" width="100%">
        <h5>${item.description}</h5>
        <p>
        <span class="date2">${item.createdAt}</span>
      </div>
      `;
      $("#randomSix").append(node);
    }
  }
};

$(document).ready(() => {
  $.ajax({
    url: "posts",
    method: "GET",
    dataType: "json",
    contentType: "json",
    success: data => {
      for (let i = 0; i < data.length; i++) {
        const item = data[i];

        if (item.Избранное == true) {
          selectedPosts.unshift(item);
        }

        if (item.category == "Наши Беседы") {
          news.unshift(item);
        } else if (item.category == " Партнеры") {
          technology.unshift(item);
        } else if (item.category == " Здоровье") {
          entertainment.unshift(item);
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
    if (sports.length !== 0) {
      sportsCycle();
    }
    if (entertainment.length !== 0) {
      entertainmentCycle();
    }
    if (news.length !== 0) {
      newsCycle();
    }
    if (technology.legnth !== 0) {
      techCycle();
    }
    if (selectedPosts.length !== 0) {
      selectedCycle();
    }
    if (allArray.length !== 0) {
      randomSixCycle();
    }
  });
});
