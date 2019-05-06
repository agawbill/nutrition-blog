const teamDivEng = document.getElementById('teamDivEng');
const teamDivRus = document.getElementById('teamDivRus');
const teamDivAz  = document.getElementById('teamDivAz');
const srcs = ["https://s3.amazonaws.com/andop.org/andop_komanda/2.Emil.jpg","https://s3.amazonaws.com/andop.org/andop_komanda/3.Elmira.jpg","https://s3.amazonaws.com/andop.org/andop_komanda/4.Ilgara.jpg", "https://s3.amazonaws.com/andop.org/andop_komanda/8.Lala.jpg", "https://s3.amazonaws.com/andop.org/andop_komanda/7.Esmer.jpg","https://s3.amazonaws.com/andop.org/andop_komanda/5.Shumara.jpg", "https://s3.amazonaws.com/andop.org/andop_komanda/6.Nigar.jpg"];
const names = ['DR. ЭМИЛЬ ХИДАЯТЛИ','DR. ЭЛЬМИРА МАХМУДОВА','DR. ИЛЬГАМА МАМЕДОВА','DR. ЛАЛА ГУСЕЙНОВА ','DR. ЭСМЕР КЕРИМЛИ','DR. ШУМАРА ГАРАДЖАЕВА','DR. НИГЯР АЛИЕВА']
const modals = ['#modalA','#modalB','#modalC','#modalD','#modalE','#modalF','#modalG'];
const allPosts =[]; 
const allPostsAz =[];
const allPostsRus =[];
    const card1 = (name,url,modal)=>{
		return `<div class="card" style="width: 26%;">
				        <img src=`+ url +` class="card-img-top" alt="...">
				        <div class="card-body">
			          <h5 class="card-title">`+name+`</h5>
			          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
			            <button type="button" class="btn btn-primary" data-toggle="modal" data-target=`+ modal +`>
                          Launch demo modal
                        </button>
			        </div>
			    </div>
			    <div class="modal fade" id=`+modal+` tabindex="-1" role="dialog" aria-labelledby=`+modal+` aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id=`+modal+`>Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        ...
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                      </div>
                    </div>
                  </div>
                </div>
			  `  
		}
		
	for(let i=0;i<7;i++){
		allPosts.push(card1(names[i],srcs[i],modals[i]))
	}
	for(let i=0;i<7;i++){
	    allPostsRus.push(card1(names[i],srcs[i],modals[i]))
	}
	for(let i=0;i<7;i++){
	    allPostsAz.push(card1(names[i],srcs[i],modals[i]))
	}
			  teamDivRus.innerHTML=allPostsRus	  
			  teamDivEng.innerHTML=allPosts
			  teamDivAz.innerHTML=allPostsAz
			  
			  
			  
			  
