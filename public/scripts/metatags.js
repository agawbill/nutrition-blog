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
var head = document.getElementsByTagName('head');

$(document).ready(() => {
  const url = new URL(window.location.href);
  const id = url.searchParams.get("id");

  // get recommended posts

 
    $.ajax({
      url: `/posts/${id}`,
      method: "GET",
      success: async item => {
          await $('title').html(item.title)
        	await $('#ogTitle').attr('content', item.title);
     		  await $('#ogImage').attr('content', item.cover.url);
     		 	await $('#ogDescription').attr('content', item.title);
       },
      catch: err => {
        console.log(err);
      }
    }).then(async item => {
      await $('title').html(item.title)
        	await $('#ogTitle').attr('content', item.title);
     		  await $('#ogImage').attr('content', item.cover.url);
     		 	await $('#ogDescription').attr('content', item.title);
    });
  });
 


