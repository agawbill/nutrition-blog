var firstSix = [];

const latestPosts = () => {
  for (let i = 0; i < firstSix.length; i++) {
    const item = firstSix[i];
    postLogic(item);
    const node = `

      <table style="margin-bottom:10px; display:block">
        <tr>
          <td>
              <img src="${
                item.cover.url
              }"   width="90px" style="padding-right:5px;">
          </td>
          <td style="width:100%;position:relative; clear:both;">
            <span class="newsText">
                <p style="font-size:12px!important;" class="card-title font800">
                <a href="/post.html?id=${
                  item._id
                }" style="color:black!important;">${title.substring(
      0,
      60
    )}  </a>
                </p>
            </span>
          </td>

        </tr>
        </div>
      </table>
      <hr>
      </br>
      <div style="clear:both;"></div>
  `;
    $("#latestPosts").append(node);
  }
};

$.ajax({
  url: "posts",
  method: "GET",
  dataType: "json",
  contentType: "json",
  success: data => {
    for (let i = data.length - 1; i >= 0; i--) {
      const item = data[i];
      firstSix.unshift(item);
    }
  },
  catch: err => {
    console.log(err);
  }
}).then(() => {
  if (firstSix.length !== 0) {
    latestPosts();
  }
});
