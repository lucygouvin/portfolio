export default function Header() {
  return (
    <>
      <div className="header-group container">
        <div className="name">
          <h1>Lucy Gouvin</h1>
        </div>
        <nav className="nav navbar nav-container container">
            <div class="container nav-container">
              {/* <input
                class="checkbox"
                type="checkbox"
                name=""
                id="hambuger-toggle"
              />
              <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
              </div>
              
          </div> */}
           <div class="nav">
                <li className="nav-item">
                  <a href="#about">About</a>
                </li>
                <li className="nav-item">
                  <a href="#projects">Projects</a>
                </li>
                <li className="nav-item">
                  <a href="#skills">Skills</a>
                </li>
                <li className="nav-item">
                  <a href="#contact">Contact</a>
                </li>
              </div>
              </div>
          
        </nav>
       
      </div>
    </>
  );
}
