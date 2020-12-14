import React, {Component} from 'react';
import '../styles/Food.css'
import FooterHome from '../components/FooterHome'

class Food extends Component {
  render() {
    return(

      <div className="main">
    
        <div className="food-card">
          <div className="card-body">
            <img alt="" src={this.props.img}/>
            <h2 className="food-h2">{this.props.title}</h2>
            <p className="food-p">{this.props.paragraph}.</p>
            <h5 className="food-h5">{this.props.stars}</h5>
            <a href={this.props.link} target="_blank" rel="noreferrer"><div className="button">{this.props.btn}</div></a>
          </div>
        </div>
      </div>
  
    )
  }
}

class FoodCards extends Component {
  render() {
    return (
      <>
      <div class="header">
      <div className="food-banner">
       </div>
        <h1>Breweries/Food</h1>
      </div>
      <div className='cards'>
        <Food
         img='https://www.vega.com/-/media/images/company/vega-us/us---final-images/us-madtree-blog/back-entrance_wide_web.jpg?mw=1440&mh=1000&hash=85D1B198B5DA150F91791CCF7C01D71D'
         title='MadTree Brewing Company'
         paragraph='MadTree connects people to nature and each other. Founded in 2013, MadTree has always been driven to craft great beer - but more importantly - to build something bigger than themselves and the high-quality beer they produce. Since the beginning, MadTree has cared deeply about creating meaningful connections with their communities'
         stars='4.5/5 stars'
         btn='Visit Website'
         link='https://www.madtreebrewing.com/' />
        <Food
         img='https://cdn.citybeat.com/files/base/scomm/cb/image/2020/08/640w/Screen_Shot_2020_08_19_at_1.16.10_PM.5f3d5e7641290.jpg'
         title='Good Plate Eatery'
         paragraph='Casual American, feel-good food. Good Plates Eatery focuses on simple foods and bold flavors, offering a variety of sandwiches and bowls (of the quinoa and salad variety) for both meat-eaters and vegetarians. Located in Clifton Heights, it is the must stop food spot while visiting Cincinnati, Ohio! Family owned and operated'
         stars='5/5 stars'
         btn='Visit Website'
         link='https://goodplateseatery.com/' />
         <Food
         img='https://cincinnatiusa.com/sites/default/files/styles/Array/public/Venues/IMG_1113_Sept2013_RTN.JPG'
         title='Moerlein Lager House'
         paragraph='The design of the Moerlein Lager House was created to greatly enliven the dining experience by offering sweeping views of the park, the Ohio River, the Roebling Suspension Bridge and Great American Ballpark from both its indoor dining spaces and its expansive outdoor ‘biergartens’. In a city that cherishes its beloved brewing legacies, the Moerlein Lager House will become an enduring tribute to its history'
         stars='4.5/5 stars'
         btn='Visit Website'
         link='https://www.moerleinlagerhouse.com/' />
         <Food
         img='https://dtjew9b6f6zyn.cloudfront.net/wp-content/uploads/2016/09/bakersfield.jpg'
         title='Bakersfield OTR'
         paragraph="Cincinnati isn't what you would call a mecca for Mexican food. But if you're craving fresh-flavored street tacos and made-just-right creamy guacamole, this place fills the void. It's a small space with a feel-good atmosphere. The restaurant almost has a split personality: American Country/Mexican. You might hear Merle Haggard or Johnny Cash while you sip your margarita or wait for a table"
         stars='4.8/5 stars' 
         btn='Visit Website'
         link='https://www.bakersfieldtacos.com/'/>
         <Food
         img='https://cincinnatiusa.com/sites/default/files/styles/Array/public/Venues/Rivertown_exterior.jpg'
         title='Rivertown Brewery Monroe Barrel House'
         paragraph='Rivertown Brewery & Barrel House is a family-owned craft brewery and slow-smoked bbq restaurant located in Monroe, Ohio. Founded in 2009 in a 2,000 square foot space in Lockland, Ohio, Rivertown grew to a 26,000 sq ft state of the art facility in January of 2017 focusing on innovation in all they do. Featuring inventive, bold, award-winning craft beers, handcrafted cocktails, mouth-watering slow-smoked bbq'
         stars='4/5 stars'
         btn='Visit Website'
         link='http://rivertownbrewery.com/' />
         <Food
         img='https://cdn.citybeat.com/files/base/scomm/cb/image/2019/03/16x9/960w/Copy_of_20180412_4E9A2481.5c9e70e104fc3.jpg'
         title='Fifty West Brewing Company'
         paragraph='Located in a former roadside speakeasy on US Route 50 heading west into the city of Cincinnati, Fifty West Brewing Company first opened its doors in November of 2012. Since then, one thing has remained the same. Every time you have a Fifty West beer, you know it was handmade in small batches with a focus on the four virtues we hold closest to our hearts: craftsmanship, tradition, innovation, and patience'
         stars='4/5 stars'
         btn='Visit Website'
         link='https://fiftywestbrew.com/' />
         <Food
         img='https://cincinnatiusa.com/sites/default/files/styles/Array/public/Venues/OlliesTrolley_photo%20by%20Chas%20Wiederhold.jpg'
         title="Ollie's Trolley"
         paragraph="Ollie's Trolley serves up good old-fashioned Southern soul food from a vintage trolley car parked on Central Avenue in the West End. The Trolley itself is hard to miss--it's adorned with photos of African-American leaders and a picture of the owner, Marvin Smith, with Barack and Michelle Obama. Ollie's is a longstanding but small national chain with only a few locations left"
         stars='4.2/5 stars'
         btn='Visit Website'
         link='https://www.facebook.com/OlliesTrolleyCincinnati/?rf=119622484717903' />
     </div>
     <FooterHome />

     </>
    )
  }
}



export default (Food, FoodCards)