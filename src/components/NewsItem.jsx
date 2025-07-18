import newsimg from '../assets/newsimg.jpg'

function NewsItem({title,src, url, description}) {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
    <img src={src||newsimg} style={{height:"200px"}} className="card-img-top h-96" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{title.slice(0,50)}</h5>
      <p className="card-text">{description?description.slice(0,90):""}</p>
      <a href={url} className="btn btn-primary">Know more</a>
    </div>
  </div>
  )
}

export default NewsItem
// style={{height:"200px",width:"360px"}}