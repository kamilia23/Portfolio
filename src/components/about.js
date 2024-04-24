import "../styles/about.css"




function About() {
    return (
      <div className="about">
        <section class="about" id="about">
            <h2 class="heading"> About <span>Me</span></h2>
            
            <div class="row">
              <div class="image">
                  <img draggable="false" src={`../avatar.png`} alt=""/>
              </div>
              <div class="content">
                  <h3>I'm Kamilia</h3>
                  <span class="tag">Full Stack Developer</span>
                  
                  <p>I am a Full-Stack developer based in Pune, India. 
                  I am an Information Technology undergraduate from SPPU.
                  I am very passionate about improving my coding skills
                   & developing applications & websites.
                  I build WebApps and Websites using MERN Stack.
                  Working for myself to improve my skills.
                  Love to build Full-Stack clones. </p>
                  
                  <div class="box-container">
                      <div class="box">
                      <p><span> age: </span> 20</p>
                      <p><span> phone : </span> +91 XXX-XXX-XXXX</p>
                      <p><span> email : </span> jigarsable21@gmail.com</p>
                      <p><span> place : </span> Pune, India - 412206</p>
                      </div>
                  </div>
                  
                  <div class="resumebtn">
                      <a href=" " target="_blank" class="btn"><span>Download CV</span>
                          <i class="fas fa-chevron-right"></i>
                      </a>
                  </div>

              </div>
            </div>
        </section>
      </div>
    );
  }
  
  export default About;
  