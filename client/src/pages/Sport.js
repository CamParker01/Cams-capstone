import React, {Component} from 'react';
import '../styles/Sport.css'
import FooterHome from '../components/FooterHome'

class Sport extends Component {
  render() {
    return(

      <div className="main">
    
        <div className="sport-card">
          <div className="card-body">
            <img alt=" " src={this.props.img}/>
            <h2 className="sport-h2">{this.props.title}</h2>
            <p className="sport-p">{this.props.paragraph}.</p>
            <h5 className="sport-h5">{this.props.stars}</h5>
            <a href={this.props.link} target="_blank" rel="noreferrer"><div className="button">{this.props.btn}</div></a>
          </div>
        </div>
      </div>
  
    )
  }
}

class SportCards extends Component {
  render() {
    return (
      <>
      <div class="header">
      <div className="sport-banner">
       </div>
        <h1>Sports</h1>
      </div>
      <div className='cards'>
        <Sport
         img='https://cincinnatiusa.com/sites/default/files/styles/Array/public/Reds-Ballpark_DSC_0127.jpg'
         title='Cincinnati Reds'
         paragraph='Located on the winding banks of the Ohio River, Great American Ball Park is the home of the Cincinnati Reds and is praised for innovative features, breathtaking views and affordable seating options. Great American Ball Park also celebrates the team’s rich history with the Reds Hall of Fame and Museum and award-winning Team Shop plus get an up close look at things on the Scotts Ballpark Tour'
         stars='4.5/5 stars'
         btn='Visit Website'
         link='https://www.mlb.com/reds'
         />
        <Sport
         img='https://cincinnatiusa.com/sites/default/files/styles/Array/public/attractionphotos/Cincinnati%20Bengals_%40fdw412.jpg'
         title='Cincinnati Bengals'
         paragraph='Who Dey! The Cincinnati Bengals, members of the North Division of the AFC in the NFL, take to the field each fall at Paul Brown Stadium, a cornerstone of Cincinnatis riverfront development with 65,535 seats on three levels, including 7,600 club seats and 114 private suites. Paul Brown Stadium also hosts a variety of events throughout the year'
         stars='4/5 stars'
         btn='Visit Website'
         link='https://www.bengals.com/'
         />
         <Sport
         img='https://cincinnatiusa.com/sites/default/files/styles/Array/public/attractionphotos/FC%20Cincinnati3_Abby%20Erwin.jpeg'
         title='FC Cincinnati'
         paragraph='FC Cincinnati is an American professional soccer club based in Cincinnati, Ohio. The club plays in the Eastern Conference of Major League Soccer (MLS). The team succeeded the lower-division team of the same name and was announced on May 29, 2018, when MLS awarded an expansion franchise to Cincinnati. The team began MLS play on March 2, 2019 with its first match against Seattle Sounders FC'
         stars='3.5/5 stars'
         btn='Visit Website'
         link='https://www.fccincinnati.com/'
         />
         <Sport
         img='https://cincinnatiusa.com/sites/default/files/styles/Array/public/attractionphotos/7.jpg'
         title='Cincinnati Cyclones Hockey'
         paragraph='The Cincinnati Cyclones are Cincinnatis Kelly Cup Championship winning hockey team and ECHL affiliate of the NHLs Buffalo Sabres. Cincinnati Cyclones hockey games are more than just a game! Non-stop action, affordable family entertainment, and intermission activities provide unmatched entertainment value on the banks of the Ohio River at Heritage Bank Center'
         stars='5/5 stars' 
         btn='Visit Website'
         link='https://cycloneshockey.com/'
         />
         <Sport
         img='https://cincinnatiusa.com/sites/default/files/styles/Array/public/Events/Spiral13_FinalTurnDAB.jpg'
         title='Turfway Park'
         paragraph='Catch the fun and excitement of Thoroughbred racing all year long at Turfway Park. Live racing held each winter. You can experience simulcast action the rest of the year Wednesday thru Sunday. The vintage charm of historical Turfway Park will be sure to create a memorable experience for the young and old alike. Check out the Events Page on our website for Fun & Exciting Upcoming events at Turfway Park'
         stars='4/5 stars'
         btn='Visit Website'
         link='https://www.turfway.com/home'
         />
         <Sport
         img='https://cincinnatiusa.com/sites/default/files/styles/Array/public/attractionphotos/130831vPurdue0370.JPG'
         title='University of Cincinnati Sports'
         paragraph='The University of Cincinnati is one of Americas top public research institutions with a student population of more than 40,000. Since its founding in 1819, UC has been the source of many discoveries creating positive change for society, including co-op education, the oral polio vaccine, the first electronic organ, the first safe anti-knock gasoline, and the first antihistamine'
         stars='4.5/5 stars'
         btn='Visit Website'
         link='https://gobearcats.com/'
         />
         <Sport
         img='https://cincinnatiusa.com/sites/default/files/styles/Array/public/5975742289_f36b80d8c2_o_Michael%20Boyer.jpg'
         title='Black-n-Blue Grass Roller Girls'
         paragraph='The Black-n-Bluegrass Roller Girls of Northern Kentucky have big hits and even bigger hearts! The sport of flat-track roller derby is an extreme contact sport with a family-friendly environment. We also feature our junior team at most of our home bouts that feature boys and girls ages 7-17. Come join the Black-n-Blue Nation and become part of the family'
         stars='3/5 stars'
         btn='Visit Website'
         link='http://black-n-bluegrass.com/'
         />
     </div>
     <FooterHome />

     </>
    )
  }
}



export default (Sport, SportCards)