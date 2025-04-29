
function Navabar({setCategory}) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">NewsMag</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          
          <li className="nav-item pointer">
            <a className="nav-link " onClick={()=>setCategory("technology")}>Technology</a>
          </li>
          <li className="nav-item">
            <div className="nav-link pointer" onClick={()=>setCategory("business")}>Buisness</div>
          </li>
          <li className="nav-item pointer">
            <div className="nav-link" onClick={()=>setCategory("health")}>Health</div>
          </li>
          <li className="nav-item pointer">
            <div className="nav-link" onClick={()=>setCategory("sports")}>Sports</div>
          </li>
          <li className="nav-item pointer">
            <div className="nav-link" onClick={()=>setCategory("entertainment")}>Entertainment</div>
          </li>
        
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navabar
