import React from 'react'
import FooterHome from '../components/FooterHome'
// import holder2 from '../img/holder2.jpg'   
import '../styles/About.css'
import '../styles/index.css'
import CHeadshot from '../assets/CHeadshot.jpg'
import Jheadshot from '../assets/Jheadshot.jpg'
import Sheadshot from '../assets/Sheadshot.jpg'
import Rheadshot from '../assets/Rheadshot.JPG'
import group from '../assets/group.png'
import About2 from '../assets/About2.jpg'
// import AllNeighborhoods from '../assets/AllNeighborhoods.jpg'
// import holder1 from '../assets/holder1.jpg'

const About = () => {

    return (
      <div className='background'>
      <div className="moveDown"></div>
      <div className="mission">
         <h3 class="">Our Mission Statement </h3>
          <p class="lead"> Our quest is to manage business travel and fulfill vacation dreams through our commitment to personalized, world-class service.</p>
          </div>
      <div className="aboutcontainer">
        <div class="row">
          <div class="col-lg-4">
            <img src={Jheadshot} alt="Generic placeholder " width="220" height="220"></img>
            <h2 class="name">Jacob Huff</h2>
            <p class='discription'>Project lead</p>
            <p><a class="btn btn-lg btn-primary" href="https://www.linkedin.com/in/jacobhuff1/" role="button">View my Profile</a></p>
          </div>
          <div class="col-lg-4">
            <img src={Sheadshot} alt="Generic placeholder " width="220" height="220"></img>
            <h2 class="name">Sierra Hudson</h2>
            <p class='discription'> Style and design expert</p>
            <p><a class="btn btn-lg btn-primary" href="https://www.linkedin.com/in/sierra-hudson-75b8231b8/" role="button">View my profile</a></p>
          </div>
        </div>
        <h2 class="coders">Meet The Team: </h2> <h2><span class='coders'>Some of the best coders <br></br>this side of the Ohio river</span></h2>
        <div class="row">
          <div class="col-lg-4">
            <img src={Rheadshot} alt="Generic placeholder " width="220" height="220"></img>
            <h2 class="name">Ryan Twele</h2>
            <p class='discription'>Back End Specialist</p>
            <p><a class="btn btn-lg btn-primary" href="https://www.linkedin.com/in/ryan-twele-a168181b8/" role="button">View my profile</a></p>
          </div>
          <div class="col-lg-4">
            <img src={CHeadshot} alt="Generic placeholder " width="220" height="220"></img>
            <h2 class="name">Cameron Parker</h2>
            <p class='discription'> The guy </p>
            <p><a class="btn btn-lg btn-primary" href="https://www.linkedin.com/in/cameron-parker-47617b101/" role="button">View my profile</a></p>
          </div>
        </div>
      </div>
      

      
         <div id='grips'>
          <img className='grip' src={group} alt="Generic placeholder " width='400' height='250'></img>
          <img className='grip2' src={About2} alt="Generic placeholder " width='400' height='250'></img>
        </div>

      {/* <div class="row featurette">
        <div class="col-md-7 doom">
          <h2 class="">Meet The Team </h2> <h2><span class=''>Some of the best coders <br></br>this side of the Ohio river</span></h2>
        </div>
      </div> */}

      

      <div class="row iframe" id='mapgap'>
       
        <div class="col-md-7 order-md-2">
          <h2 class="action">Our Wonderful City <span class="bronson">See for yourself.</span></h2>
          <p class="lead"> </p>
        </div>
        <div class="col-md-5 order-md-1" >
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d166499.22050380012!2d-84.62152039172686!3d39.156970071885816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884051b1de3821f9%3A0x69fb7e8be4c09317!2sCincinnati%2C%20OH!5e0!3m2!1sen!2sus!4v1607461277924!5m2!1sen!2sus" width="700" height="280" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
        </div>
      </div>

      

     

      
     <FooterHome/>

    </div>
           
    )
}

export default About