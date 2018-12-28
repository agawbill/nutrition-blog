var $ = jQuery;
var technology = [];
var news = [];
var entertainment = [];
var selectedPosts = [];
var sports = [];
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
                    <a href="/post.html?id=${item._id}">${item.description}</a>
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
  const allArray = [technology, sports, entertainment];

  for (let i = 0; i < allArray.length; i++) {
    const item = allArray[i];
    item.splice(item[item.length - 1], 1).unshift(randomSix);
    item.splice(item[item.length - 2], 1).unshift(randomSix);
  }

  for (let i = 0; i < randomSix.length; i++) {
    const item = randomSix[i];
    if (i === 1 || 3) {
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
  // const technology1 = technology[technology.length - 1];
  // const technology2 = technology[technology.length - 2];
  // const news1 = news[news.length - 1];
  // const news2 = news[news.length - 2];
  // const entertainment1 = entertainment[entertainment.length - 1];
  // const entertainment2 = entertainment[entertainment.length - 2];
  // const six = `
  // <div class="col-lg-4 col-md-4 mb-4" style="position:relative;border-right: 0px">
  //   <a href="/post.html?id=${technology1._id}"><h5>${
  //   technology1.description
  // }</h5></a>
  //   <p>
  //   ${technology1.content.substring(0, 50)}
  //   </p>
  //   </br>
  //   <span class="date">${technology1.createdAt}</span>
  //
  // </div>
  // <div class="col-lg-4 col-md-4 mb-4" style="position:relative;border-left: 1px solid navy; border-right: 1px solid navy;">
  //   <a href="/post.html?id=${technology2._id}"><h5>${
  //   technology2.description
  // }</h5></a>
  //   <p>
  //   ${technology2.content.substring(0, 50)}
  //   </p>
  //   </br>
  //   <span class="date">${technology2.createdAt}</span>
  // </div>
  // <div class="col-lg-4 col-md-4 mb-4" style="position:relative;border-right: 0px">
  //   <a href="/post.html?id=${news1._id}"><h5>${news1.description}</h5></a>
  //   <p>
  //   ${news1.content.substring(0, 50)}
  //   </p>
  //   </br>
  //   <span class="date">${news1.createdAt}</span>
  //
  // </div>
  // <div class="col-lg-3 col-md-3 mb-3" style="position:relative;border-right: 0px">
  //   <a href="/post.html?id=${news2._id}"><h5>${news2.description}</h5></a>
  //   <p>
  //   ${news2.content.substring(0, 50)}
  //   </p>
  //   </br>
  //   <span class="date">${news2.createdAt}</span>
  // </div>
  // <div class="col-lg-4 col-md-4 mb-4" style="position:relative;border-left: 1px solid navy; border-right: 1px solid navy;">
  //   <a href="/post.html?id=${entertainment1._id}"><h5>${
  //   entertainment1.description
  // }</h5></a>
  //   <p>
  //   ${entertainment1.content.substring(0, 50)}
  //   </p>
  //   </br>
  //   <span class="date">${entertainment1.createdAt}</span>
  //
  // </div>
  // <div class="col-lg-3 col-md-3 mb-3" style="position:relative;border-right: 0px">
  //   <a href="/post.html?id=${entertainment2._id}"><h5>${
  //   entertainment2.description
  // }</h5></a>
  //   <p>
  //   ${entertainment2.content.substring(0, 50)}
  //   </p>
  //   </br>
  //   <span class="date">${entertainment2.createdAt}</span>
  // </div>
  // `;
  // $("#randomSix").append(six);
};

$(document).ready(() => {
  $.ajax({
    url: "posts",
    method: "GET",
    dataType: "json",
    contentType: "json",
    success: data => {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        const item = data[i];

        if (item.selectedPost == true) {
          selectedPosts.unshift(item);
        }

        if (item.category == "Наши Беседы") {
          news.unshift(item);
        } else if (item.category == " Питание") {
          technology.unshift(item);
        } else if (item.category == " Здоровье") {
          entertainment.unshift(item);
        } else {
          sports.unshift(item);
        }
      }
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
    if (randomSix.length !== 0) {
      randomSixCycle();
    }
  });
});
