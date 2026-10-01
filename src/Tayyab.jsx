import './App.css'

function Tayyab() {
    return (
      <div className="container">
        {/*HEADER*/}
        <header className="header">
          <nav className="navbar">
          <h2 className="logo">Tayyab</h2>
            <ul className="nav-links">
              <li><a href="#">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            </nav>
        </header>
        {/*HERO SECTION*/}
        <section className="hero">
          <div className="hero-text">
            <h3>Hi, I'm</h3>
            <h1>Muhammad Tayyab Ayaz</h1>
            <p>Frontend Developer | eBay Virtual Assistant</p>
            <button className="btn">Hire Me</button>
          </div>
          <div className="img">
            <img src="/profile.jpg" className="profile-pic"/>
          </div>
        </section>    
      </div>
    )
}
export default Tayyab