import React, {Component} from 'react';
import '../styles/Art.css'
import FooterHome from '../components/FooterHome'

class Art extends Component {
  render() {
    return(

      <div className="main">
    
        <div className="art-card">
          <div className="card-body">
            <img alt="" src={this.props.img}/>
            <h2 className="art-h2">{this.props.title}</h2>
            <p className="art-p">{this.props.paragraph}.</p>
            <h5 className="art-h5">{this.props.stars}</h5>
            <a href={this.props.link} target="_blank" rel="noreferrer"><div className="button">{this.props.btn}</div></a>
          </div>
        </div>
      </div>
  
    )
  }
}

class ArtCards extends Component {
  render() {
    return (
      <>
      <div class="header">
      <div className="art-banner">
       </div>
        <h1>Visual Arts & Culture</h1>
      </div>
      <div className='cards'>
        <Art
         img='https://cincinnatiusa.com/sites/default/files/styles/Array/public/attractionphotos/DJI_0044.JPG'
         title='Cincinnati Art Museum'
         paragraph='Located in scenic Eden Park, the Cincinnati Art Museum features an unparalleled art collection of more than 67,000 works spanning 6,000 years. In addition to displaying its own broad collection, the Art Museum also hosts several national and international traveling exhibitions each year. The Rosenthal Education Center offers an immersive, hands-on experience for families'
         stars='4.5/5 stars'
         btn='Visit Website'
         link='https://www.cincinnatiartmuseum.org/' />
        <Art
         img='https://cincinnatiusa.com/sites/default/files/styles/Array/public/attractionphotos/200528_ArkEncounter_Exterior-%20%282%29.jpg'
         title='Ark Encounter'
         paragraph='The Ark Encounter features a jaw-dropping reconstruction of Noahs ark, built to biblical specs. At over 1.5 football fields long and reaching higher than a four-story house, the Ark is one of the largest timber-frame structures in the world. As you explore three decks of cutting-edge exhibits, the biblical account of Noahs ark comes to life! Your ticket includes admission to the full-size ark and all exhibits, the beautiful grounds'
         stars='4/5 stars'
         btn='Visit Website'
         link='https://arkencounter.com/tickets/'
         />
         <Art
         img='https://cincinnatiusa.com/sites/default/files/styles/Array/public/attractionphotos/BCMexterior%20official.jpg'
         title='Behringer-Crawford Museum'
         paragraph='From the ridiculous to the sublime, this family-friendly museum celebrates the unique arts, heritage and culture of Northern Kentucky as part of the Ohio Valley. Examine a mammoth fossil, take a ride through time with the beautifully restored 1892 streetcar “Kentucky,” activate the engines, lights and music of a miniature, mid-century community in the Faragher G-gauge train display and even watch a drive-in movie'
         stars='4.5/5 stars'
         btn='Visit Website'
         link='http://www.bcmuseum.org/'
         />
         <Art
         img='https://cincinnatiusa.com/sites/default/files/styles/Array/public/article/Robert%20Webber%20exterior.jpg'
         title='Nancy and David Wolf Holocaust and Humanity Center'
         paragraph='Located at historic Union Terminal, the very site where many Holocaust survivors arrived in Cincinnati to rebuild their lives, The Holocaust and Humanity Center aims to ensure the lessons of the past inspire action today.  Through innovative storytelling, interactive experiences,  visitors witness the strength and courage of the human spirit set against the backdrop of one of the darkest chapters in human history'
         stars='5/5 stars' 
         btn='Visit Website'
         link='https://www.holocaustandhumanity.org/'
         />
         <Art
         img='https://cincinnatiusa.com/sites/default/files/styles/Array/public/attractionphotos/CM%20Museum_CreationMuseum.org_.jpg'
         title='Creation Museum'
         paragraph='Bible history comes to life at the family-friendly Creation Museum! Journey through biblical history in this state-of-the-art, 75,000-square-foot museum designed by a former Universal Studios exhibit director. Your admission includes the main walk-through, the Dinosaur Den, Dr. Crawley’s Insectorium, a special effects theater, botanical gardens, and Eden Zoo and petting zoo area'
         stars='4/5 stars'
         btn='Visit Website'
         link='https://creationmuseum.org/about/'
         />
         <Art
         img='https://cincinnatiusa.com/sites/default/files/styles/Array/public/attractionphotos/Taft%20Museum%20of%20Art%20%282%29.JPG'
         title='Taft Museum of Art'
         paragraph='The Taft Museum of Art is one of the finest small art museums in America. A National Historic Landmark built in 1820, the historic house was the home of some iconic Cincinnatians, including: Martin Baum, Nicholas Longworth, David Sinton, Anna Sinton Taft and Charles Phelps Taft. Opening in 1932, the Taft Museum is home to an extensive art collection that includes European and American master paintings'
         stars='4.5/5 stars'
         btn='Visit Website'
         link='https://www.taftmuseum.org/'
         />
         <Art
         img='https://cincinnatiusa.com/sites/default/files/styles/Array/public/attractionphotos/Abracadabra%201.jpg'
         title='Pyramid Hill Sculpture Park and Museum'
         paragraph='Pyramid Hill is one of few sculpture parks in the United States. Upon opening in 1996, it was touted as the "most beautiful natural setting of any art park in the country" by Atlantic Monthly. This 335-acre park features more than 60 monumental contemporary sculptures. The park’s Ancient Sculpture Museum displays antiquities from the Greek, Roman, Etruscan and Egyptian civilizations'
         stars='4.5/5 stars'
         btn='Visit Website'
         link='https://www.pyramidhill.org/'
         />
     </div>
     <FooterHome />

     </>
    )
  }
}



export default (Art, ArtCards)