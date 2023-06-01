import './App.css';
import chevron from './chevron.svg';

export default function Navbar(){
    function toggleMenu() {
        document.body.classList.toggle("open")
    }
    return (
        <div className="App">
            <nav class="navbar">
                <button onClick={toggleMenu} class="burger"></button>
            <div class="dropdowns">
                <div class="dropdown">
                    <button>
                        Products
                        <img src={chevron.svg} />
                    </button>
                  <div class="dropdown-menu">
                    <div>
                      <h2>Digital</h2>
                      <button>Learn CSS Ebook</button>
                      <button>Security Course</button>
                      <button>Masterclass Bundle</button>
                    </div>
                    <div>
                      <h2>Electronic</h2>
                      <button>CSS Digital Clock</button>
                      <button>UX Master Mouse</button>
                      <button>Type Fast Keyboard</button>
                    </div>
                    <div>
                      <h2>Documents</h2>
                      <button>Email Template</button>
                      <button>Desktop Wallpaper</button>
                      <button>Portfolio Code</button>
                    </div>
                  </div>
                </div>
                <div class="dropdown">
                  <button>
                    Services
                    <img src={chevron.svg} />
                  </button>
                  <div class="dropdown-menu">
                    <div>
                      <button>UX/UI Design</button>
                      <button>Web Applications</button>
                      <button>SEO Advice</button>
                    </div>
                  </div>
                </div>
                <div class="dropdown">
                  <button>
                    Support
                    <img src={chevron.svg} />
                  </button>
                  <div class="dropdown-menu">
                    <div>
                      <button>Live Messenger</button>
                      <button>Support Email</button>
                      <button>Request Help</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="landam-logo">
                  <a href="./home.html"><img src="./landamlogo3.png" alt="" srcset="" width="300" height="100"/></a>
              </div>
          </nav>
          </div>
        );   
}

