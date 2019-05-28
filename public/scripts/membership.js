const teamDivEng = document.getElementById('teamDivEng');
const teamDivRus = document.getElementById('teamDivRus');
const teamDivAz  = document.getElementById('teamDivAz');
const srcs = ["https://s3.amazonaws.com/andop.org/andop_komanda/2.Emil.jpg","https://s3.amazonaws.com/andop.org/andop_komanda/3.Elmira.jpg","https://s3.amazonaws.com/andop.org/andop_komanda/4.Ilgara.jpg", "https://s3.amazonaws.com/andop.org/andop_komanda/8.Lala.jpg", "https://s3.amazonaws.com/andop.org/andop_komanda/7.Esmer.jpg","https://s3.amazonaws.com/andop.org/andop_komanda/5.Shumara.jpg", "https://s3.amazonaws.com/andop.org/andop_komanda/6.Nigar.jpg"];
const names = ['DR. ЭМИЛЬ ХИДАЯТЛИ','DR. ЭЛЬМИРА МАХМУДОВА','DR. ИЛЬГАМА МАМЕДОВА','DR. ЛАЛА ГУСЕЙНОВА ','DR. ЭСМЕР КЕРИМЛИ','DR. ШУМАРА ГАРАДЖАЕВА','DR. НИГЯР АЛИЕВА']
const modals = ['modalA','modalB','modalC','modalD','modalE','modalF','modalG'];
const allPosts =[]; 
const allPostsAz =[];
const allPostsRus =[];
var item ;
  
  
    const card1 = (name,url,reg,more)=>{
		return `<div class="card" style="width: 26%">
				    <img src=`+ url +` class="card-img-top" alt="...">
				    <div class="card-body">
          			    <a href="/" class="card-link btn btn-sm btn-primary"> ` + more + ` </button>
                        <a href="/" class="card-link btn btn-sm btn-danger"> ` + reg + ` </a>
			        </div>
			    </div>`
		}
		
	for(let i=0;i<7;i++){
// 		allPosts.push(card1(names[i],srcs[i],modals[i]))
	    teamDivEng.innerHTML+=card1(names[i],srcs[i],'Registration','More')

	}
	for(let i=0;i<7;i++){
	   // allPostsRus.push(card1(names[i],srcs[i],modals[i]))
	    teamDivRus.innerHTML+=card1(names[i],srcs[i],'Регистрация','Подробнее')
	}
	for(let i=0;i<7;i++){
	   // allPostsAz.push(card1(names[i],srcs[i],modals[i]))
	    teamDivAz.innerHTML+=card1(names[i],srcs[i],'Registrasia','Ətraflı')
	}
			 // teamDivRus.innerHTML=allPostsRus	  
			 // teamDivEng.innerHTML=allPosts
			 // teamDivAz.innerHTML=allPostsAz
			  
			  
			  
	 // ANTHONY. So , all I need is to be able to see  item.cover.url and   <a href="/post.html?id=${item._id}"> ${title}</a>
	 // inside of the contentContainer on the membership.html
	 // Do not worry about design or anything else. Ii will style everything once i get acces to those 2.
	 

$(document).ready(() => {
  // get news
  $.ajax({
    url: "posts",
    method: "GET",
    dataType: "JSON",
    contentType: "JSON",
    success: data => {
      for (let i = data.length - 1; i >= 0; i--) {
        item = data[i];
        postLogic(item);
        if (item.category == "Членство") {
          contentArray.unshift(item);
          const node = `
          <li class="media" style="border-bottom: 2px dotted gray; margin-bottom: 10px; padding-bottom: 10px;">
	          <img src="${  item.cover.url }"width="30%" class="rounded" align="left" style="padding-right:5px;" >
	            <h4 class="card-title">
	              <a href="/post.html?id=${item._id}"> ${title}</a>
	            </h4>
          </li>
          `;
          document.getElementById("contentContainer").append(node);
        } else {
        }
      }
    },
    catch: err => {
      console.log(err);
    }
  })

});
