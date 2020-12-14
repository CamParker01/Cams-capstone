import React, {Component} from 'react';
import '../styles/Tour.css'
import FooterHome from '../components/FooterHome'

class Tour extends Component {
  render() {
    return(

      <div className="main">
    
        <div className="tour-card">
          <div className="card-body">
            <img alt="" src={this.props.img}/>
            <h2 className="tour-h2">{this.props.title}</h2>
            <p className="tour-p">{this.props.paragraph}.</p>
            <h5 className="tour-h5">{this.props.stars}</h5>
            <a href={this.props.link} target="_blank" rel="noreferrer"><div className="button">{this.props.btn}</div></a>
          </div>
        </div>
      </div>
  
    )
  }
}

class TourCards extends Component {
  render() {
    return (
      <>
      <div class="header">
      <div className="tour-banner">
       </div>
        <h1>Tours</h1>
      </div>
      <div className='cards'>
        <Tour
         img='https://cincinnatiusa.com/sites/default/files/styles/Array/public/attractionphotos/2_1.jpg'
         title='BB Riverboats'
         paragraph="Step aboard for amazing views from the Belle of Cincinnati or the River Queen. Whether in the climate-controlled areas or the open-air upper decks, during a dining cruise or kids' cruise, you're sure to appreciate the relaxing pace of river life. Inspired by Cincinnati’s endearing bond to the river, BB Riverboats’ founder, Ben Bernstein, along with industry pioneer, Betty Blake, sought to provide a new opportunity"
         stars='4/5 stars'
         btn='Visit Website'
         link='https://bbriverboats.com/'
         />
        <Tour
         img='https://cincinnatiusa.com/sites/default/files/styles/Array/public/attractionphotos/Owners.jpg'
         title='Craft Connection Brewery Tours'
         paragraph="Ride in comfort as we take you along Cincinnati's finest local craft breweries. We take YOU to the brewery, take YOU on a tour at each brewery, and bring YOU all the tastings at each brewery. All Craft Connection tours include transportation, tours, and tastings at each brewery. The Craft Connection Brewery Tour experience will visit 3-4 breweries in 3-4 hours"
         stars='5/5 stars'
         btn='Visit Website'
         link='http://www.craftconnectiontours.com/'
         />
         <Tour
         img='https://cincinnatiusa.com/sites/default/files/styles/Array/public/attractionphotos/TrainStation.jpg'
         title='Lebanon Mason Monroe Railroad'
         paragraph="The LM&M takes you back in time on its 1930s train. Ride in closed cars or the open gondola car through scenic Warren County, as the conductor shares railway history and lore. The LM&M's specialty rides are a treat for all ages. Kids love the Magic Train, Clifford's Big Red Train Ride, A Day Out with Thomas and others"
         stars='3.5/5 stars'
         btn='Visit Website'
         link='https://lebanonrr.com/'
         />
         <Tour
         img='https://cincinnatiusa.com/sites/default/files/styles/Array/public/attractionphotos/JMWolf-Amstrong-8472_hi-res_J.%20Miles%20Wolf.jpg'
         title='ArtWorks Public Art and Murals Tour'
         paragraph="To date, ArtWorks has created over 180 murals, more than a dozen artist-designed public bike racks, and more throughout the region. Explore all of ArtWorks public art with this map or ride aboard the Cincinnati Bell Connector and view these murals along the route. ArtWorks also offers two guided mural tours; Soul of Downtown Mural Tour and Spirit of OTR Mural Tour"
         stars='4/5 stars' 
         btn='Visit Website'
         link='https://www.artworkscincinnati.org/muraltours/'
         />
         <Tour
         img='https://cincinnatiusa.com/sites/default/files/styles/Array/public/20160910_133751lores_cropped.jpg'
         title='Cincinnati Streetcar Food Tour by Cincinnati Food Tours'
         paragraph="Tour features a mix of casual and upscale restaurants, bars, and specialty shops. Tour includes an introduction to the new Cincinnati Bell Connector (The Streetcar), at least four food samples, and one glass of beer or wine. $60 per person and includes streetcar fare, all food samples, plus one glass of beer or wine. Reservations required"
         stars='5/5 stars'
         btn='Visit Website'
         link='https://www.riversidefoodtours.com/tours/streetcar/'
         />
         <Tour
         img='https://img.grouponcdn.com/deal/jCAVc8VuGhXeN3tBjqnw/Dr-700x420.jpg/v1/c700x420.jpg'
         title='Higher Ground Helicopters'
         paragraph="Higher Ground Helicopters offers helicopter flight training, helicopter tours, rides and charters to the greater Cincinnati, Ohio area. If you're interested in getting a hands-on experience, try a discovery flight where an instructor will give you a 30 minute ground briefing and then take you up for another 30 minutes in the helicopter for a hands-on experience"
         stars='4.6/5 stars'
         btn='Visit Website'
         link='http://hghelicopters.com/'
         />
         <Tour
         img='https://cdn2.cincinnatimagazine.com/wp-content/uploads/sites/5/2020/01/MAR20_Obscura-3.jpg'
         title="Cincinnati History Tour"
         paragraph="Come along with Tour Guide, Actor, and Author Roy Heizer on this two and a half hour tour as we explore the history of Cincinnati. From the glaciers that formed our seven hills to the modern day; learn about the events, industry, traditions, and people that made Cincinnati the Queen City. Tour Guide Roy Heizer will take you to many historic sites on this downtown tour"
         stars='5/5 stars'
         btn='Visit Website'
         link='https://cincinnatiusa.com/things-to-do/attractions/cincinnati-history-tour'
         />
         <Tour
         img='https://cincinnatiusa.com/sites/default/files/styles/Array/public/attractionphotos/CMC%20rotunda_%40photogdslavey.jpg'
         title="Union Terminal Rotunda Tours"
         paragraph="Celebrate Union Terminal’s restoration and learn about the building’s significant history with a 50-minute free Rotunda tour led by our Cincinnati Heritage Program docents. You’ll discover more about the construction, architecture and artwork of one of the world’s finest examples of art deco style. Hear details about the world-famous mosaic tile murals, see newly restored artwork in historic dining rooms"
         stars='4.5/5 stars'
         btn='Visit Website'
         link='https://www.cincymuseum.org/heritage-programs/'
         />
         <Tour
         img='https://cincinnatiusa.com/sites/default/files/styles/attraction_slideshow/public/Events/NewportHaunted1.jpg'
         title="Newport is Haunted Tour"
         paragraph="Enjoy a spooky good time exploring the streets of Newport where cloaked guides will lead you by lantern-light and enthrall you with tales of murder, suicide and even decapitation. Learn the horrifying origin of Bobby Mackey’s wicked haunting and discover the details around several of Newport’s vicious and unsolved crimes. Presented by American Legacy Tours, $25 a ticket"
         stars='5/5 stars'
         btn='Visit Website'
         link='https://www.americanlegacytours.com/newport-is-haunted'
         />
     </div>
     <FooterHome />

     </>
    )
  }
}



export default (Tour, TourCards)