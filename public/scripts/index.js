var $ = jQuery;
var technology = [];
var news = [];
var entertainment = [];
var selectedPosts = [];
var sports = [];
var recPostings = [];
var allArray;
var randomSix = [];

// below are the functions to push the data to their corresponding category

const newsCycle = () => {
  const first = news[0];
  const news1 = `
    <img src="${
      first.cover.url
    }" height="400vh" width="100%" class="rounded" ></p>
    <h5 class="card-title">
      <a href="/post.html?id=${first._id}">${first.title.substring(0, 35)}</a>
    </h5>
    <h5>${first.description.substring(0, 35)}</h5>
    <p>
    ${first.content.substring(0, 250)}
    </p>
    </br>
    <span class="date">${first.createdAt}</span>
    `;
  $("#newsFirst").append(news1);
  for (i = 1; i < news.length; i++) {
    const item = news[i];
    if (item !== undefined) {
      if (i === 4) {
        break;
      } else if (i === 2) {
        const news2 = `
        <div id="blocks">
        <div style="border-top:2px dotted navy;border-bottom:2px dotted navy;width:100%;padding-top:10px;padding-bottom:10px;">
          <table>
            <tr>
              <td>
                  <img src="${
                    item.cover.url
                  }"  class="rounded" float="left" height="210vh" width="310vh" style="padding-right:10px;">
              </td>
              <td style="width:100%;position:relative; clear:both;">
                <span class="newsText">
                    <h5 class="card-title">
                      <a href="/post.html?id=${
                        item._id
                      }">${item.title.substring(0, 35)}</a>
                    </h5>
                    <p>
                    ${item.content.substring(0, 35)}
                    </p>
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
        const news2 = `
        <div id="blocks">
          <table>
            <tr>
              <td>
                  <img src="${
                    item.cover.url
                  }"  class="rounded" float="left" height="210vh" width="310vh" style="padding-right:10px;">
              </td>
              <td style="width:100%;position:relative; clear:both;">
                <span class="newsText">
                    <h5 class="card-title">
                      <a href="/post.html?id=${
                        item._id
                      }">${item.title.substring(0, 35)}</a>
                    </h5>
                    <p>
                    ${item.content.substring(0, 35)}
                    </p>
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
  }
};

const entertainmentCycle = () => {
  const item = entertainment[0];
  const ent = `
  <div class="col-lg-16 col-md-16 mb-16" style="width:100%;">
  <img src="${
    item.cover.url
  }" class="rounded" height="400vh" width="50%" style="float:right;padding-right:15px;">
    <h5 class="bigTitle">
      <a href="/post.html?id=${item._id}">${item.title.substring(0, 35)}</a>
    </h5>
    <p>
    ${item.content.substring(0, 250)}
    </p>
    </br>
    <span class="date2">${item.createdAt}</span>
    </div>
  `;
  $("#entertainmentFirst").append(ent);
  for (let i = 1; i < entertainment.length; i++) {
    const item = entertainment[i];
    if (item !== undefined) {
      if (i === 5) {
        break;
      } else if (i === 4) {
        const ent = `
    <div class="col-lg-3 col-md-3 mb-3" style="position:relative;line-height:0px!important;float:center;">
    <img src="${item.cover.url}" class="rounded" height="200vh" width="100%">
  <p>
  <h5 class="card-title">
    <a href="/post.html?id=${item._id}">${item.title.substring(0, 35)}</a>
  </h5>
  <p>
  ${item.content.substring(0, 35)}
  </p>
  <span class="date2">${item.createdAt}</span>
    </div>
    `;
        $("#entertainmentSecond").append(ent);
      } else {
        const item = entertainment[i];
        const ent = `
    <div class="col-lg-3 col-md-3 mb-3" style="position:relative;line-height:0px!important;border-right: 2px dotted navY">
    <img src="${item.cover.url}" class="rounded" height="200vh" width="100%">
  <p>
  <h5 class="card-title">
    <a href="/post.html?id=${item._id}">${item.title.substring(0, 35)}</a>
  </h5>
  <p>
  ${item.content.substring(0, 35)}
  </p>
  <span class="date2">${item.createdAt}</span>
    </div>
    `;
        $("#entertainmentSecond").append(ent);
      }
    }
  }
};

const techCycle = () => {
  const item = technology[0];
  const tech = `
  <div class="col-lg-16 col-md-16 mb-16">
  <img src="${
    item.cover.url
  }" class="rounded" height="400vh" width="50%" style="float:left;padding-right:15px;">
    <h5 class="bigTitle">
      <a href="/post.html?id=${item._id}">${item.title.substring(0, 35)}</a>
    </h5>
    <p>
    ${item.content.substring(0, 250)}
    </p>
    <span class="date2">${item.createdAt}</span>
    </div>
  `;
  $("#technologyFirst").append(tech);
  for (let i = 1; i < technology.length; i++) {
    const item = technology[i];
    if (item !== undefined) {
      if (i === 5) {
        break;
      } else if (i === 4) {
        const tech = `
    <div class="col-lg-3 col-md-3 mb-3" style="position:relative;line-height:0px!important;float:center;">
    <img src="${item.cover.url}" class="rounded" height="200vh" width="100%">
  <p>
  <h5 class="card-title">
    <a href="/post.html?id=${item._id}">${item.title.substring(0, 35)}</a>
  </h5>
  <p>
  ${item.content.substring(0, 35)}
  </p>
  <span class="date2">${item.createdAt}</span>
    </div>
    `;
        $("#technologySecond").append(tech);
      } else {
        const item = technology[i];
        const tech = `
    <div class="col-lg-3 col-md-3 mb-3" style="position:relative;line-height:0px!important;border-right: 2px dotted navY">
    <img src="${item.cover.url}" class="rounded" height="200vh" width="100%">
  <p>
  <h5 class="card-title">
    <a href="/post.html?id=${item._id}">${item.title.substring(0, 35)}</a>
  </h5>
  <p>
  ${item.content.substring(0, 35)}
  </p>
  <span class="date2">${item.createdAt}</span>
    </div>
    `;
        $("#technologySecond").append(tech);
      }
    }
  }
};

const sportsCycle = () => {
  const item = sports[0];
  const sport = `
  <div class="col-lg-16 col-md-16 mb-16">
  <img src="${
    item.cover.url
  }" class="rounded" height="400vh" width="50%" style="float:left; padding-right:15px;">
    <h5 class="card-title">
      <a href="/post.html?id=${item._id}">${item.title.substring(0, 35)}</a>
    </h5>

    <h5>${item.content.substring(0, 250)}</h5>
    </p>
    <span class="date2">${item.createdAt}</span>
    </div>
  `;
  $("#sportsFirst").append(sport);
  for (let i = 1; i < sports.length; i++) {
    const item = sports[i];
    if (item !== undefined) {
      if (i === 5) {
        break;
      } else if (i === 4) {
        const sport = `
    <div class="col-lg-3 col-md-3 mb-3" style="position:relative;line-height:0px!important;float:center;">
        <img src="${
          item.cover.url
        }" class="rounded" height="200vh" width="100%">
      <p>
      <h5 class="card-title">
        <a href="/post.html?id=${item._id}">${item.title.substring(0, 35)}</a>
      </h5>
      <p>
      ${item.content.substring(0, 35)}
      </p>
      <span class="date2">${item.createdAt}</span>
    </div>
    `;
        $("#sportsSecond").append(sport);
      } else {
        const item = sports[i];
        const sport = `
    <div class="col-lg-3 col-md-3 mb-3" style="position:relative;line-height:0px!important;border-right: 2px dotted navY">
    <img src="${item.cover.url}" class="rounded" height="200vh" width="100%">
  <p>
  <h5 class="card-title">
    <a href="/post.html?id=${item._id}">${item.title.substring(0, 35)}</a>
  </h5>
  <p>
  ${item.content.substring(0, 35)}
  </p>
  <span class="date2">${item.createdAt}</span>
    </div>
    `;
        $("#sportsSecond").append(sport);
      }
    }
  }
};
const selectedCycle = () => {
  for (let i = 0; i < selectedPosts.length; i++) {
    const item = selectedPosts[i];
    if (item !== undefined) {
      if (i === 4) {
        break;
      } else if (i === 3) {
        const selected = `
      <div class="col-lg-3 col-md-3 mb-3" style="position:relative;border-right: 0px">
        <a href="/post.html?id=${item._id}"><h5>${item.title.substring(
          0,
          35
        )}</h5></a>
        <p>
        ${item.content.substring(0, 250)}
        </p>
        </br>
        <span class="date">${item.createdAt}</span>

      </div>
      `;
        $("#selected").append(selected);
      } else {
        const item = selectedPosts[i];
        const selected = `
      <div class="col-lg-3 col-md-3 mb-3" style="position:relative;border-right: 2px dotted navY">
        <a href="/post.html?id=${item._id}"><h5>${item.title.substring(
          0,
          35
        )}</h5></a>
        <p>
        ${item.content.substring(0, 250)}
        </p>
        </br>
        <span class="date">${item.createdAt}</span>

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
    if (item !== undefined) {
      if (i === 2 || i === 5) {
        const node = `
        <div class="col-lg-4 col-md-4 mb-4" style="position:relative;border-right: 0px; padding:4%">
        <img src="${item.cover.url}" class="rounded" height="200vh" width="90%">
        <p>
        <h5 class="card-title">
        <a href="/post.html?id=${item._id}">${item.title.substring(0, 35)} </a>
        </h5>
        <p>
        ${item.content.substring(0, 35)}
        </p>
        <span class="date2">${item.createdAt}</span>
      </div>
      `;
        $("#randomSix").append(node);
      } else {
        const node = `
      <div class="col-lg-4 col-md-4 mb-4" style="position:relative;line-height:0px!important;border-right:2px dotted navy; padding:4%">
      <img src="${item.cover.url}" class="rounded" height="200vh" width="90%">
      <p>
      <h5 class="card-title">
      <a href="/post.html?id=${item._id}">${item.title.substring(0, 35)} </a>
      </h5>

      <p>
      ${item.content.substring(0, 35)}
      </p>
        <span class="date2">${item.createdAt}</span>
      </div>

      `;
        $("#randomSix").append(node);
      }
    }
  }
};
const recPostCycle = () => {
  for (let i = 0; i < recPostings.length; i++) {
    const item = recPostings[i];
    const node = `
      <div class="row">
        <div style="display: block; padding-left:50px;">
        <p>
        <h5 class="card-title">
        <a href="/post.html?id=${item._id}">${item.title.substring(0, 35)}  </a>
        </h5>

        </p>
        <span class="date2">${item.createdAt}</span>
      </div>
    </div>
      `;
    $("#recPosts").append(node);
  }
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
      for (let i = 0; i < data.length; i++) {
        const item = data[i];

        if (item.Избранное == true) {
          selectedPosts.unshift(item);
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
        } else {
          sports.unshift(item);
        }

        if (i < 6) {
          const node = `

            <table style="margin-bottom:10px; display:block">
              <tr>
                <td>
                    <img src="${
                      item.cover.url
                    }"  height="60px" width="80px" style="padding-right:5px;">
                </td>
                <td style="width:100%;position:relative; clear:both;">
                  <span class="newsText">
                      <h5 class="card-title">
                      <a href="/post.html?id=${
                        item._id
                      }">${item.title.substring(0, 35)}  </a>
                      </h5>
                  </span>
                </td>
              </tr>
              </div>
            </table>
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
