$(document).ready(() => {
  const url = new URL(window.location.href);
  const id = url.searchParams.get("id");

  // Get single cake data and template product.html file.
  $.ajax({
    url: `/posts/${id}`,
    method: "GET",
    success: post => {
      $("#postContainer").append(`
        <div class="col-lg-12 col-md-12 mb-12">
          <h4 class="card-title">
            <a href="/post.html?id=${post._id}">${post.title}</a>
          </h4>
          <p>
            <center><img src="${
              post.cover.url
            }" class="rounded" height="500vh" width="500vh%"></center>
          <h5>${post.description}</h5>
          </p>
          <span class="date2">${post.createdAt}</span>
        </div>
        `);
    },
    catch: err => {
      console.log(err);
    }
  });
});
