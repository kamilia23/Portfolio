import { HashLink } from "react-router-hash-link";
import '../styles/navbar.css'


function Navbar() {
  return (
    <div className="Nav">
         <HashLink exact="true" to="/#home">
        <img src={`avatar.png`} alt="logo" className="Logo" />
                    
        </HashLink>
      <ul className="NavItem">
       
        <HashLink exact="true" to="/#home">
                    <button className="homen">
                    <span>Home</span>
                    </button>
                    
        </HashLink>
        <HashLink exact="true" to="/#about">
                    <button className="vvd">
                    <span>About</span>
                    </button>
                    
        </HashLink>
        <HashLink exact="true" to="/#skills">
                    <button className="vvd">
                    <span>Skills</span>
                    </button>
                    
        </HashLink>
        <HashLink exact="true" to="/#education">
                    <button className="vvd">
                    <span>Education</span>
                    </button>
                    
        </HashLink>
        <HashLink exact="true" to="/#work">
                    <button className="vvd">
                    <span>Work</span>
                    </button>
                    
        </HashLink>
        <HashLink exact="true" to="/#experience">
                    <button className="vvd">
                    <span>Experience</span>
                    </button>
                    
        </HashLink>
        <HashLink exact="true" to="/#contact">
                    <button className="vvd">
                    <span>Contact</span>
                    </button>
                    
        </HashLink>
      </ul>
    </div>
  );
}

export default Navbar;
