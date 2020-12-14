import React, {Component} from 'react';
import '../styles/Entertainment.css'
import FooterHome from '../components/FooterHome'

class Entertainment extends Component {
  render() {
    return(

      <div className="main">
    
        <div className="entertainment-card">
          <div className="card-body">
            <img alt="" src={this.props.img}/>
            <h2 className="entertainment-h2">{this.props.title}</h2>
            <p className="entertainment-p">{this.props.paragraph}.</p>
            <h5 className="entertainment-h5">{this.props.stars}</h5>
            <a href={this.props.link} target="_blank" rel="noreferrer"><div className="button">{this.props.btn}</div></a>
          </div>
        </div>
      </div>
  
    )
  }
}

class EntertainmentCards extends Component {
  render() {
    return (
      <>
      <div class="header">
      <div className="entertainment-banner">
       </div>
      </div>
      <div className='cards'>
        <Entertainment
         img='https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/50775357_331645820782699_5466372785070669824_o.jpg?_nc_cat=104&ccb=2&_nc_sid=730e14&_nc_ohc=dqjVSQCW4IgAX9ZKP9Q&_nc_ht=scontent-ort2-2.xx&oh=abd98d4ccda4ff28897ec1c7bde3c1c4&oe=5FF5570D'
         title='The Escape Game'
         paragraph='Located downtown in The Banks. From uncovering lost treasure to breaking out of prison – The Escape Game offers a uniquely premium experience. Team up, follow clues, and solve puzzles to complete your mission and become the hero of these immersive 60-minute adventures. You might escape…you WILL have fun'
         stars='4.5/5 stars'
         btn='Visit Website'
         link='https://theescapegame.com/cincinnati/' />
        <Entertainment
         img='https://1.bp.blogspot.com/-JrYat1qkYys/V1d_oOzoYfI/AAAAAAAAMgk/peqOZfBxpr4laAsjHzxPCxaVU5TeIlXngCLcB/s1600/Visit%2BKings%2BIsland%2B-%2Bentrance%2Bsign.jpg'
         title='Kings Island'
         paragraph="Kings Island is a 364-acre amusement park located 24 miles northeast of Cincinnati in Mason, Ohio. Kings Island is divided into several themed sections and operates seasonally from early spring through the fall, partially reopening for Winterfest during the holiday season. The park features over 100 attractions including fourteen roller coasters and a 33-acre water park"
         stars='5/5 stars'
         btn='Visit Website'
         link='https://www.visitkingsisland.com/' />
         <Entertainment
         img='https://cincinnatiusa.com/sites/default/files/styles/Array/public/attractionphotos/twister.jpg'
         title='Coney Island'
         paragraph='There’s no better place to cool off this summer than Coney Island. You can swim in North America’s largest recirculating pool, race down more than ¼ of a mile of water slides, and create mammoth splashes in Cannonball Cove. Typhoon Tower’s 70 interactive spray-stations or get soaked by the world’s largest erupting hydro storm as it releases 1,300 gallons of cascading water from a 33-foot tower'
         stars='4/5 stars'
         btn='Visit Website'
         link='https://coneyislandpark.com/' />
         <Entertainment
         img='https://cincinnatiusa.com/sites/default/files/styles/Array/public/attractionphotos/ontrackshot1.png'
         title='Full Throttle Adrenaline Park'
         paragraph="Full Throttle Adrenaline Park is Cincinnati’s premier high-speed indoor go-kart track. Everyone from the novice to the professional racer will enjoy their state-of-the-art karts and racing at speeds up to 40mph. Featuring 2 High Speed tracks, racers can choose which track to tackle – or better yet, why choose? Drive them both! Full Throttle multiple styles of karts for racers of all ages"
         stars='4.5/5 stars' 
         btn='Visit Website'
         link='https://gofullthrottle.com/'/>
         <Entertainment
         img='https://cincinnatiusa.com/sites/default/files/styles/Array/public/1_Findlay%20Market_Pramik_1.jpg'
         title='Findlay Market'
         paragraph="Findlay Market is Ohio's oldest continuously operated public market and one of Cincinnati's most cherished institutions. The Market is located just blocks from downtown in Over-the-Rhine, a dense historic neighborhood rich in 19th century architecture. Open Tuesday through Sunday, Findlay Market is open year-around with three dozen indoor merchants"
         stars='4.8/5 stars'
         btn='Visit Website'
         link='https://www.findlaymarket.org/' />
         <Entertainment
         img='https://cincinnatiusa.com/sites/default/files/styles/Array/public/attractionphotos/NAQ_SharkTunnel.jpg'
         title='Newport Aquarium'
         paragraph='Delighting families since 1999, Newport Aquarium welcomes your family to discover the wonder of an underwater world. SEA thousands of the world’s most exotic aquatic creatures as you waddle with playful penguins, meet rare white alligators, be surrounded by sharks and surprised by smiling stingrays. All while spending quality time together and creating lasting memories'
         stars='4.5/5 stars'
         btn='Visit Website'
         link='https://www.newportaquarium.com/' />
         <Entertainment
         img='https://cincinnatiusa.com/sites/default/files/styles/Array/public/attractionphotos/Connie%20Lemperle%20bonobo.jpg'
         title="Cincinnati Zoo & Botanical Garden"
         paragraph="The Zoo’s 75 acres house more than 580 animal species and 3,000 plant varieties making it one of the largest zoo collections in the U.S. This not-for-profit entity is internationally known for its success in the protection and propagation of endangered animals and plants and engages in research and conservation projects around the world"
         stars='4.8/5 stars'
         btn='Visit Website'
         link='http://cincinnatizoo.org/' />
     </div>
     <FooterHome />

     </>
    )
  }
}



export default (Entertainment, EntertainmentCards)