import react,{useState}from "react";
import axios, { AxiosHeaders } from 'axios'


function Home(){
const[news,setNews]=useState([])




   const fetchNews=()=>{
  axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=e55ef8ae308b47f6aa22959a72b05ad7")
// axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then((response)=>{
     console.log(response)
    setNews(response.data.articles)
  })
   }
    return(
<>
<div className="container my-5">
<div className="row">
<div className="col-4">
 <button className="btn btn-primary" onClick={fetchNews}>FetchNews</button>
 </div>
 </div>
 </div>

<div className="container my-3">
    <div className="row">
    {
        news.map((value)=>{
            return(<>
                <div className="col-4">

                <div class="card" style={{width: "18rem;"}}>
  <img src={value.urlToImage} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{value.title}</h5>
    <p class="card-text">{value.description}</p>
    <a href={value.url} class="btn btn-primary">Main</a>
  </div>
</div>
                </div> 
                </>
            )
         
        })
    }
    </div>
 </div>


       <div class="container-fluid px-4 py-5 mx-auto">
    <div class="row d-flex justify-content-center">
        <div class="card border-0">
            <div class="row set-p justify-content-center">
                <div class="col-sm-4 px-0">
                    <img class="image" src="https://i.imgur.com/QNqiaSz.jpg"/>
                </div>
                <div class="col-sm-8">
                    <div class="row px-3 mt-4 mb-3">
                        <p class="rating mb-0 px-2 mr-3"><strong>8.0</strong></p>
                        <p class="text-primary mb-0 mr-2 grade"><strong>Very Good</strong></p>
                        <p class="text-secondary mb-0 mr-2">&middot;</p>
                        <p class="text-secondary mb-0">14K review</p>
                    </div>
                    <div class="row px-3">
                        <h3 class="font-weight-bold">Park Inn by Radisson<br/>Berlin Alexanderplatz</h3>
                    </div>
                    <div class="row px-3 mb-2 mt-2">
                        <span class="fa fa-star text-warning mr-1"></span>
                        <span class="fa fa-star text-warning mr-1"></span>
                        <span class="fa fa-star text-warning mr-1"></span>
                        <span class="fa fa-star text-warning mr-1"></span>
                    </div>
                    <div class="row px-3">
                        <h5 class="mb-1">1 bedroom &middot; 1 living &middot; 2 beds</h5>
                    </div>
                    <div class="row px-3">
                        <p class="">Mitte, Berlin &middot; 2.6 km from center</p>
                    </div>
                    <div class="line"></div>
                    <div class="row px-3 mt-3">
                        <h5 class="text-secondary mb-1">Sky Suite</h5>
                    </div>
                    <div class="row px-3">
                        <h2 class="text-success mb-1 font-weight-bold">$288</h2>
                    </div>
                    <div class="row px-3 mb-3">
                        <p class="text-muted mb-0">+ $14 taxes and charges</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        </>
    )
}
export default Home;