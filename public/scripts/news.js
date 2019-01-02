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
        if (item.category == "Наши Беседы") {
          const node = `
          <li class="media" style="border-bottom: 2px dotted gray; margin-bottom: 10px; padding-bottom: 10px;">
          <img src="${
            item.cover.url
          }" height="300vh" width="30%" class="rounded" align="left" style="padding-right:5px;" >
            <div class="media-body">
            <h4 class="card-title">
              <a href="/post.html?id=${item._id}">${item.title}</a>
            </h4>
            <h5>${item.description}</h5>
            <p>
            ${item.content.substring(0, 200)}
          </li>
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
