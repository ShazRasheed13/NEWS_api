const api_key ='e673571a07b3403fa4415e62e2de0d7e'
const url='https://newsapi.org/v2/everything?q='



window.addEventListener('load',() => fetchNews("Latest"));
window.addEventListener('load',() => fetchNews("world"));
window.addEventListener('load',() => fetchNews("India"));
window.addEventListener('load',() => fetchNews("Sports"));


async function fetchNews (query){
    
    const res= await fetch(`${url}${query}&apiKey=${api_key}`);
    const data = await res.json()
    articles=data.articles;
    // if(query=='Mangalore'){
    //     let container1= document.getElementById('carousel-inner')
    //     corsl(articles,container1);
    // }
    if(query=='Latest' ){
        let container2= document.getElementById('container_row')
    newss1(articles,container2);
    }
    else if(query=='world' ){
        let container3= document.getElementById('container_int')
        newss(articles,container3);
        }
    else if(query=='India' ){
        let container3= document.getElementById('container_nat')
        newss(articles,container3);
        }
    else if(query=='Sports' ){
        let container3= document.getElementById('container_sport')
        newss(articles,container3);
        }
    
    
}

// function corsl(articles,container){

//     console.log(articles[i].title)
    
//     for(let i=0;i<5;i++){
//         if(!articles[i].urlToImage) continue;
//         const date= new Date(articles[i].publishedAt).toLocaleString("en-US", { timeZone: "Asia/Jakarta"})
//         let neww= `<div class="carousel-item" data-bs-interval="10000">
//             <img src="${articles[i].urlToImage}" class="d-block w-100" alt="..." width=50%>
//             <div class="carousel-caption d-none d-md-block">
//                 <h5>${articles[i].title}</h5>
//                 <p>${date} <br>${articles[i].description}</p>
//             </div>
//             </div>`
//         container.innerHTML+= neww
        
//     }
// }

function newss(articles,container){
    // let container2= document.getElementById('container_row')
    for(let i=0;i<3;i++){
        if(!articles[i].urlToImage) continue;
        const date= new Date(articles[i].publishedAt).toLocaleString("en-US", { timeZone: "Asia/Jakarta"})
        let neww= `<div class="card my-4 mx-4" style="width: 18rem;">
        <img src="${articles[i].urlToImage}" class="card-img-top" id="new-img" alt="..." />
        <div class="card-body">
          <h5 class="card-title" id="new-title">${articles[i].title}</h5>
          <p class="card-text" id="new-desc">
          ${date} <br>${articles[i].description}
          </p>
          <a href="${articles[i].url}" class="btn btn-primary">Read more</a>
        </div>
      </div>`
        container.innerHTML+= neww
        
    }
}

function newss1(articles,container){
    // let container2= document.getElementById('container_row')
    for(let i=0;i<3;i++){
        if(!articles[i].urlToImage) continue;
        const date= new Date(articles[i].publishedAt).toLocaleString("en-US", { timeZone: "Asia/Jakarta"})
        let neww= `<div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-primary-emphasis">World</strong>
          <h3 class="mb-0">${articles[i].title}</h3>
          <div class="mb-1 text-body-secondary">${date}</div>
          <p class="card-text mb-auto">${articles[i].description}</p>
          <a href="${articles[i].url}" class="icon-link gap-1 icon-link-hover stretched-link">
            Continue reading
            <svg class="bi"><use xlink:href="#chevron-right"></use></svg>
          </a>
        </div>
        <div class="col-auto d-none d-lg-block">
          <img class="bd-placeholder-img" width="200" height="250" src="${articles[i].urlToImage}" role="img"  preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em"></text></img>
        </div>
      </div>`
        container.innerHTML+= neww
        
    }
}

SubmitEvent.addEventListener('click',()=>{
    sent.hidden='false'
    sent.style.color="red"
})






