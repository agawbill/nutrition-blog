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
            <a href="/post.html?id=${post._id}">${post.title}:  «${
        post.description
      }»  </a>
          </h4>
          <p>
          <span class="date2">${post.createdAt}</span>
          </p>
          <p>
            <img src="${post.cover.url}" class="rounded" width="100%"><br>
          </p>
          <p>
          <h5>${post.content}</h5>
          </p>

        </div>
        `);
    },
    catch: err => {
      console.log(err);
    }
  });
});
