var $ = jQuery;

$(document).ready(() => {
  $.ajax({
    url: "posts",
    method: "GET",
    dataType: "JSON",
    contentType: "JSON",
    success: data => {
      for (let i = data.length - 1; i >= 0; i--) {
        const item = data[i];
        if (item.category == " sports") {
          const node = `
          <div class="col-lg-12 col-md-12 mb-12">
            <h4 class="card-title">
              <a href="/post.html?id=${item._id}">${item.title}</a>
            </h4>
            <img src="${
              item.cover.url
            }" height="300vh" width="30%" class="rounded" align="left" style="padding-right:5px;" >
            <h5>${item.description}</h5>
            <p>
            ${item.content.substring(0, 50)}
          </div>
          <div class="col-lg-12 col-md-12 mb-12">
            <hr>
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
  });
});
