var converter = new showdown.Converter();
var post = [];
var technology = [];
var news = [];
var entertainment = [];
var selectedPosts = [];
var sports = [];
var recPostings = [];
var allArray;
var randomSix = [];
var firstSix = [];
var head = document.getElementById('head');
var title = document.getElementById('title');
window.onload = () => {
   title.innerHTML=item.title
    head.innerHTML=	`<meta id='image' property='og:image' content=${item.cover.url} />` + head.innerHTML
    head.innerHTML=  `<meta id='title' property='og:title' content=${item.title} />` + head.innerHTML
    head.innerHTML=  `<meta id='description' property='og:description' content=${item.title} />` + head.innerHTML
  var languageSelect = document.getElementById("languageSelect");
};

var contentLanguage = localStorage["myKey"] || "RU";
var titleLanguage = localStorage["myKey"] || "RU";
var descriptionLanguage = localStorage["myKey"] || "RU";

let count;

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

const postCycle = async () => {
  item = post[0];
  postLogic(item);
  
  
  var fbookButton = await `
 <a class="resp-sharing-button__link" href="https://facebook.com/sharer/sharer.php?u=${location.href}" target="_blank" rel="noopener" aria-label="Share on Facebook">
  <div class="resp-sharing-button resp-sharing-button--facebook resp-sharing-button--large"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solidcircle">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0C5.38 0 0 5.38 0 12s5.38 12 12 12 12-5.38 12-12S18.62 0 12 0zm3.6 11.5h-2.1v7h-3v-7h-2v-2h2V8.34c0-1.1.35-2.82 2.65-2.82h2.35v2.3h-1.4c-.25 0-.6.13-.6.66V9.5h2.34l-.24 2z"/></svg>
    </div>Share on Facebook</div>
</a>

`

// <a class="resp-sharing-button__link" href="https://twitter.com/intent/tweet/?text=Super%20fast%20and%20easy%20Social%20Media%20Sharing%20Buttons.%20No%20JavaScript.%20No%20tracking.&amp;url=http%3A%2F%2Fsharingbuttons.io" target="_blank" rel="noopener" aria-label="Share on Twitter">
//   <div class="resp-sharing-button resp-sharing-button--twitter resp-sharing-button--large"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solidcircle">
//     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0C5.38 0 0 5.38 0 12s5.38 12 12 12 12-5.38 12-12S18.62 0 12 0zm5.26 9.38v.34c0 3.48-2.64 7.5-7.48 7.5-1.48 0-2.87-.44-4.03-1.2 1.37.17 2.77-.2 3.9-1.08-1.16-.02-2.13-.78-2.46-1.83.38.1.8.07 1.17-.03-1.2-.24-2.1-1.3-2.1-2.58v-.05c.35.2.75.32 1.18.33-.7-.47-1.17-1.28-1.17-2.2 0-.47.13-.92.36-1.3C7.94 8.85 9.88 9.9 12.06 10c-.04-.2-.06-.4-.06-.6 0-1.46 1.18-2.63 2.63-2.63.76 0 1.44.3 1.92.82.6-.12 1.95-.27 1.95-.27-.35.53-.72 1.66-1.24 2.04z"/></svg>
//     </div>Share on Twitter</div>
// </a>

// <a class="resp-sharing-button__link" href="https://plus.google.com/share?url=http%3A%2F%2Fsharingbuttons.io" target="_blank" rel="noopener" aria-label="Share on Google+">
//   <div class="resp-sharing-button resp-sharing-button--google resp-sharing-button--large"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solidcircle">
//     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.65 8.6c-.02-.66-.3-1.3-.8-1.8S10.67 6 9.98 6c-.63 0-1.2.25-1.64.68-.45.44-.68 1.05-.66 1.7.02.68.3 1.32.8 1.8.96.97 2.6 1.04 3.5.14.45-.45.7-1.05.67-1.7zm-2.5 5.63c-2.14 0-3.96.95-3.96 2.1 0 1.12 1.8 2.08 3.94 2.08s3.98-.93 3.98-2.06c0-1.14-1.82-2.1-3.98-2.1z"/><path d="M12 0C5.38 0 0 5.38 0 12s5.38 12 12 12 12-5.38 12-12S18.62 0 12 0zm-1.84 19.4c-2.8 0-4.97-1.35-4.97-3.08s2.15-3.1 4.94-3.1c.84 0 1.6.14 2.28.36-.57-.4-1.25-.86-1.3-1.7-.26.06-.52.1-.8.1-.95 0-1.87-.38-2.57-1.08-.67-.68-1.06-1.55-1.1-2.48-.02-.94.32-1.8.96-2.45.65-.63 1.5-.93 2.4-.92V5h3.95v1h-1.53l.12.1c.67.67 1.06 1.55 1.1 2.48.02.93-.32 1.8-.97 2.45-.16.15-.33.3-.5.4-.2.6.05.8.83 1.33.9.6 2.1 1.42 2.1 3.56 0 1.73-2.17 3.1-4.96 3.1zM20 10h-2v2h-1v-2h-2V9h2V7h1v2h2v1z"/></svg>
//     </div>Share on Google+</div>
// </a>

// <a class="resp-sharing-button__link" href="mailto:?subject=Super%20fast%20and%20easy%20Social%20Media%20Sharing%20Buttons.%20No%20JavaScript.%20No%20tracking.&amp;body=http%3A%2F%2Fsharingbuttons.io" target="_self" rel="noopener" aria-label="Share by E-Mail">
//   <div class="resp-sharing-button resp-sharing-button--email resp-sharing-button--large"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solidcircle">
//     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0C5.38 0 0 5.38 0 12s5.38 12 12 12 12-5.38 12-12S18.62 0 12 0zm8 16c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v8z"/><path d="M17.9 8.18c-.2-.2-.5-.24-.72-.07L12 12.38 6.82 8.1c-.22-.16-.53-.13-.7.08s-.15.53.06.7l3.62 2.97-3.57 2.23c-.23.14-.3.45-.15.7.1.14.25.22.42.22.1 0 .18-.02.27-.08l3.85-2.4 1.06.87c.1.04.2.1.32.1s.23-.06.32-.1l1.06-.9 3.86 2.4c.08.06.17.1.26.1.17 0 .33-.1.42-.25.15-.24.08-.55-.15-.7l-3.57-2.22 3.62-2.96c.2-.2.24-.5.07-.72z"/></svg></div>Share by E-Mail</div>
// </a>

 
// <a class="resp-sharing-button__link" href="https://pinterest.com/pin/create/button/?url=http%3A%2F%2Fsharingbuttons.io&amp;media=http%3A%2F%2Fsharingbuttons.io&amp;description=Super%20fast%20and%20easy%20Social%20Media%20Sharing%20Buttons.%20No%20JavaScript.%20No%20tracking." target="_blank" rel="noopener" aria-label="Share on Pinterest">
//   <div class="resp-sharing-button resp-sharing-button--pinterest resp-sharing-button--large"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solidcircle">
//     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0C5.38 0 0 5.38 0 12s5.38 12 12 12 12-5.38 12-12S18.62 0 12 0zm1.4 15.56c-1 0-1.94-.53-2.25-1.14l-.65 2.52c-.4 1.45-1.57 2.9-1.66 3-.06.1-.2.07-.22-.04-.02-.2-.32-2 .03-3.5l1.18-5s-.3-.6-.3-1.46c0-1.36.8-2.37 1.78-2.37.85 0 1.25.62 1.25 1.37 0 .85-.53 2.1-.8 3.27-.24.98.48 1.78 1.44 1.78 1.73 0 2.9-2.24 2.9-4.9 0-2-1.35-3.5-3.82-3.5-2.8 0-4.53 2.07-4.53 4.4 0 .5.1.9.25 1.23l-1.5.82c-.36-.64-.54-1.43-.54-2.28 0-2.6 2.2-5.74 6.57-5.74 3.5 0 5.82 2.54 5.82 5.27 0 3.6-2 6.3-4.96 6.3z"/></svg>
//     </div>Share on Pinterest</div>
// </a>

 
// <a class="resp-sharing-button__link" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=http%3A%2F%2Fsharingbuttons.io&amp;title=Super%20fast%20and%20easy%20Social%20Media%20Sharing%20Buttons.%20No%20JavaScript.%20No%20tracking.&amp;summary=Super%20fast%20and%20easy%20Social%20Media%20Sharing%20Buttons.%20No%20JavaScript.%20No%20tracking.&amp;source=http%3A%2F%2Fsharingbuttons.io" target="_blank" rel="noopener" aria-label="Share on LinkedIn">
//   <div class="resp-sharing-button resp-sharing-button--linkedin resp-sharing-button--large"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solidcircle">
//     <svg version="1.1" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
//         <path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12s12-5.383,12-12S18.617,0,12,0z M9.5,16.5h-2v-7h2V16.5z M8.5,7.5 c-0.553,0-1-0.448-1-1c0-0.552,0.447-1,1-1s1,0.448,1,1C9.5,7.052,9.053,7.5,8.5,7.5z M18.5,16.5h-3V13c0-0.277-0.225-0.5-0.5-0.5 c-0.276,0-0.5,0.223-0.5,0.5v3.5h-3c0,0,0.031-6.478,0-7h3v0.835c0,0,0.457-0.753,1.707-0.753c1.55,0,2.293,1.12,2.293,3.296V16.5z" />
//     </svg>
//     </div>Share on LinkedIn</div>
// </a>

 
// <a class="resp-sharing-button__link" href="whatsapp://send?text=Super%20fast%20and%20easy%20Social%20Media%20Sharing%20Buttons.%20No%20JavaScript.%20No%20tracking.%20http%3A%2F%2Fsharingbuttons.io" target="_blank" rel="noopener" aria-label="Share on WhatsApp">
//   <div class="resp-sharing-button resp-sharing-button--whatsapp resp-sharing-button--large"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solidcircle">
//     <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24"><path d="m12 0c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12zm0 3.8c2.2 0 4.2 0.9 5.7 2.4 1.6 1.5 2.4 3.6 2.5 5.7 0 4.5-3.6 8.1-8.1 8.1-1.4 0-2.7-0.4-3.9-1l-4.4 1.1 1.2-4.2c-0.8-1.2-1.1-2.6-1.1-4 0-4.5 3.6-8.1 8.1-8.1zm0.1 1.5c-3.7 0-6.7 3-6.7 6.7 0 1.3 0.3 2.5 1 3.6l0.1 0.3-0.7 2.4 2.5-0.7 0.3 0.099c1 0.7 2.2 1 3.4 1 3.7 0 6.8-3 6.9-6.6 0-1.8-0.7-3.5-2-4.8s-3-2-4.8-2zm-3 2.9h0.4c0.2 0 0.4-0.099 0.5 0.3s0.5 1.5 0.6 1.7 0.1 0.2 0 0.3-0.1 0.2-0.2 0.3l-0.3 0.3c-0.1 0.1-0.2 0.2-0.1 0.4 0.2 0.2 0.6 0.9 1.2 1.4 0.7 0.7 1.4 0.9 1.6 1 0.2 0 0.3 0.001 0.4-0.099s0.5-0.6 0.6-0.8c0.2-0.2 0.3-0.2 0.5-0.1l1.4 0.7c0.2 0.1 0.3 0.2 0.5 0.3 0 0.1 0.1 0.5-0.099 1s-1 0.9-1.4 1c-0.3 0-0.8 0.001-1.3-0.099-0.3-0.1-0.7-0.2-1.2-0.4-2.1-0.9-3.4-3-3.5-3.1s-0.8-1.1-0.8-2.1c0-1 0.5-1.5 0.7-1.7s0.4-0.3 0.5-0.3z"/></svg>
//     </div>Share on WhatsApp</div>
// </a>

 
// <a class="resp-sharing-button__link" href="http://vk.com/share.php?title=Super%20fast%20and%20easy%20Social%20Media%20Sharing%20Buttons.%20No%20JavaScript.%20No%20tracking.&amp;url=http%3A%2F%2Fsharingbuttons.io" target="_blank" rel="noopener" aria-label="Share on VK">
//   <div class="resp-sharing-button resp-sharing-button--vk resp-sharing-button--large"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solidcircle">
//     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 .5C5.65.5.5 5.65.5 12c0 6.352 5.15 11.5 11.5 11.5 6.352 0 11.5-5.148 11.5-11.5C23.5 5.65 18.352.5 12 .5zm8.11 16.82h-2.603c-.244 0-.48-.094-.658-.26l-1.98-1.862c-.118-.112-.276-.175-.438-.175-.355 0-.646.287-.646.643v1c0 .36-.292.654-.654.654h-1.655c-3.935 0-7.385-6.898-8.185-9.093-.018-.052-.028-.105-.028-.16.002-.247.204-.445.452-.445h2.637c.24 0 .456.14.556.355.57 1.42 1.31 2.764 2.2 4.004.126.14.304.217.49.214.357-.006.64-.3.63-.656-.014-.894-.034-1.958-.034-2.328 0-1.493-1.106-1.313-1.106-1.313.355-.49.94-.76 1.543-.717h2.182c.537 0 .974.435.974.972v3.093c0 .896.646 1.502 1.646-.43.37-.718 1.527-2.848 1.527-2.848.114-.214.337-.347.577-.347h2.9c1.323 0 .358 1.502-.175 2.21-.392.52-1.31 1.727-1.873 2.47-.267.353-.238.845.07 1.165 0 0 1.74 1.834 2.22 2.31.685.673.685 1.545-.57 1.545z"/></svg>
//     </div>Share on VK</div>
// </a>

 
// <a class="resp-sharing-button__link" href="https://telegram.me/share/url?text=Super%20fast%20and%20easy%20Social%20Media%20Sharing%20Buttons.%20No%20JavaScript.%20No%20tracking.&amp;url=http%3A%2F%2Fsharingbuttons.io" target="_blank" rel="noopener" aria-label="Share on Telegram">
//   <div class="resp-sharing-button resp-sharing-button--telegram resp-sharing-button--large"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solidcircle">
//     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 23.5c6.35 0 11.5-5.15 11.5-11.5S18.35.5 12 .5.5 5.65.5 12 5.65 23.5 12 23.5zM2.505 11.053c-.31.118-.505.738-.505.738s.203.62.513.737l3.636 1.355 1.417 4.557a.787.787 0 0 0 1.25.375l2.115-1.72a.29.29 0 0 1 .353-.01L15.1 19.85a.786.786 0 0 0 .746.095.786.786 0 0 0 .487-.573l2.793-13.426a.787.787 0 0 0-1.054-.893l-15.568 6z" fill-rule="evenodd"/></svg>
//     </div>Share on Telegram</div>
// </a>  
  
  var fbookButton1 = await `
  <div id="fb-root"></div>
  <div class="share-btn" data-url="https://andop.org/post.html?id=${item._id}" data-title="${item.title}" data-desc="${item.title}" data-image="${item.cover.url}">
    <a class="btn-fb"    data-id="fb" ><i class="fab fa-facebook"></i>Facebook</a>
    <a class="btn-vk" data-id="vk"><i class="fab fa-vk"></i> VK</a>
    <a class="btn-twitter" data-id="tw"><i class="fab fa-twitter"></i> Twitter</a>
    <a class="btn-telegram" data-id="tg"><i class="fab fa-telegram"></i> Telegram</a>
    <a class="btn-linkedin" data-id="in"><i class="fab fa-linkedin"></i> Linkedin</a>
    <a class="btn-mail" data-id="mail"><i class="fas fa-at"></i> EMail</a>
	</div>
	    <a class="btn-fb" href="javascript:fbshareCurrentPage()" target="_blank" alt="Share on Facebook"><i class="fab fa-facebook"></i>Facebook</a>

	`;
  const node = await `
  <div class="col-lg-12 col-md-12 mb-12">
    <h4 class="card-title">
      <a href="/post.html?id=${item._id}">${title}</a>
    </h4>
    <p>
      <img src="${item.cover.url}" class="rounded" width="100%">
    </p>
    <div class='glazData'>
        <span class="date3">${item.createdAt.substring(0, 10).replace(/-/g, ".")}
        </span>
        <button class="btn btn-outline-warning float-right">
        <i  class="fas fa-eye ">
          <span class="badge">${item.count + 1}</span>
        </i>
        </button>
    </div>
    <p>
    <h5>${converter.makeHtml(content)} </h5>
    </p>
     </div>`;

  $("#postContainer").append(node + fbookButton);
};

const latestCycle = () => {
 

  for (let i = 0; i < firstSix.length; i++) {
    const item = firstSix[i];
    postLogic(item);
    const node = `<table style="margin-bottom:10px; display:block">
        <tr>
          <td>
              <img src="${
                item.cover.url
              }" width="90px" style="padding-right:5px;">
          </td>
          <td style="width:100%;position:relative; clear:both;">
            <span class="newsText">
                <p style="font-size:12px!important;" class="card-title font800">
                <a href="/post.html?id=${
                  item._id
                }" style="color:black!important;">${title.substring( 0, 60 )}  
                </a>
                </p>
            </span>
          </td>
        </tr>
        </div>
      </table>
      <hr>
      <div style="clear:both;"></div>`;
    $("#latestPosts").append(node);
  }
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
        <span class="date3">${item.createdAt
          .substring(0, 10)
          .replace(/-/g, ".")}</span>
        <h6 style="border-bottom:1px dashed rgb(73,86,120); padding-bottom:10px;" class="card-title">
        <a href="/post.html?id=${
          item._id
        }" style="color:rgb(73, 86, 120)">${title.substring(0, 70)}  </a>
        </h6>
      </div>
    </div>
      `;
    $("#recPosts").append(node);
  }
};

const randomSixCycle = () => {
  for (let i = 0; i < allArray.length; i++) {
    if (i == 6) {
      break;
    }
    const item = allArray[i];
    postLogic(item);
    if (item !== undefined) {
      if (i === 2 || i === 5) {
        const node = `
      <div class="col-lg-4 col-md-4 mb-4 randomSix${i}a " style="position:relative;border-right: 0px; padding:1%">
      <img src="${item.cover.url}" class="rounded" width="100%">
      <p>
      <span class="date3">${item.createdAt
        .substring(0, 10)
        .replace(/-/g, ".")}</span>
      <h5 class="card-title">
      <a href="/post.html?id=${
        item._id
      }" style="color:rgb(73, 86, 120)">${title.substring(0, 100)} </a>
      </h5>
    </div>
    `;
        $("#randomSix").append(node);
      } else {
        const node = `
    <div class="col-lg-4 col-md-4 mb-4 randomSix${i} " style="position:relative;border-right:1px dotted navy; padding:1%">
    <img src="${item.cover.url}" class="rounded"   width="100%">
    <p>
    <span class="date3">${item.createdAt
      .substring(0, 10)
      .replace(/-/g, ".")}</span>
    <h5 class="card-title">
    <a href="/post.html?id=${
      item._id
    }"style="color:rgb(73, 86, 120)">${title.substring(0, 100)} </a>
    </h5>
    </div>
    `;
        $("#randomSix").append(node);
      }
    }
  }
};

const headingSwap = contentLanguage => {
  if (contentLanguage === "ENG") {
    $("#upcoming").empty();
    $("#latest").empty();
    $("#upcoming").append("RECOMMENDED");
    $("#latest").append("LATEST POSTS");
  } else if (contentLanguage === "AZ") {
    $("#upcoming").empty();
    $("#latest").empty();
    $("#upcoming").append("REDAKSİYA SEÇİMİ");
    $("#latest").append("SON PUBLİKASİYALAR");
  } else {
    $("#upcoming").empty();
    $("#latest").empty();
    $("#upcoming").append("РЕКОМЕНДОВАННЫЕ");
    $("#latest").append("ПОСЛЕДНИИ ПУБЛИКАЦИИ");
  }
};

headingSwap(contentLanguage);

window.onload = async() => {
  languageSelect.addEventListener("change", () => {
    if (languageSelect.value == "ENG") {
      localStorage["myKey"] = "ENG";
      contentLanguage = "ENG";
      titleLanguage = "ENG";
      $("#postContainer").empty();
      $("#upcoming").empty();
      $("#recPosts").empty();
      $("#latestPosts").empty();
      $("#randomSix").empty();
      postCycle(contentLanguage);
      recommendedCycle(contentLanguage);
      randomSixCycle(contentLanguage);
      latestCycle(contentLanguage);
      headingSwap(contentLanguage);
    } else if (languageSelect.value == "RU") {
      localStorage["myKey"] = "RU";
      contentLanguage = "RU";
      titleLanguage = "RU";
      $("#postContainer").empty();
      $("#upcoming").empty();
      $("#recPosts").empty();
      $("#latestPosts").empty();
      $("#randomSix").empty();
      randomSixCycle(contentLanguage);
      postCycle(contentLanguage);
      recommendedCycle(contentLanguage);
      latestCycle(contentLanguage);
      headingSwap(contentLanguage);
    } else if (languageSelect.value == "AZ") {
      localStorage["myKey"] = "AZ";
      contentLanguage = "AZ";
      titleLanguage = "AZ";
      $("#postContainer").empty();
      $("#upcoming").empty();
      $("#recPosts").empty();
      $("#latestPosts").empty();
      $("#randomSix").empty();
      randomSixCycle(contentLanguage);
      postCycle(contentLanguage);
      recommendedCycle(contentLanguage);
      latestCycle(contentLanguage);
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
        postLogic(item);
        if (item.Избранное == true) {
          randomSix.unshift(item);
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
        } else if (item.category == "Анонс") {
          selectedPosts.unshift(item);
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
    if (recPostings.length !== 0) {
      recommendedCycle();
    }
    if (firstSix.length !== 0) {
      latestCycle();
    }
    if (allArray.length !== 0) {
      randomSixCycle();
    }

    $.ajax({
      url: `/posts/${id}`,
      method: "GET",
      success: item => {
        post.unshift(item);
        postLogic(item);
      },
      catch: err => {
        console.log(err);
      }
    }).then(item => {
      let count = item.count + 1;
      $.ajax({
        url: `/posts/${id}`,
        type: "PUT",
        async: true,
        data: { count: count },
        dataType: "json",

        success: function(data) {
          if (data) {
            console.log("it worked" + data);
          } else {
            console.log("not so much");
          }
        }
      });
      if (post.length !== 0) {
        postCycle();
      }
    });
  });
});


