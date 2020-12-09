import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import Card from 'react-bootstrap/Card';
import {BACKEND_URL} from '../config'
import '../styles/Attractions.css'
import FooterHome from '../components/FooterHome'

const Attraction = (props) => {
    return (
        <div className='allAttractions'>
            <div className='attractionsCard'>
                <div className='cardImage'>
                    <img className='attractionImage'src={props.attraction.imageURL} alt='attraction picture' />
                </div>
                <div>
                    <div className='text-name'>{props.attraction.name}</div>
                    <div className='text-link'>
                        <Link className='link-details' Link to={"attractions/" + props.attraction._id}>Details</Link>
                    </div>
                    <div className='website'>
                        <a className='link-site' href={props.attraction.website}>Website</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default class Attractions extends Component {
    constructor(props) {
        super(props)
        this.state = {
            attractions:[]
        };
    }
    componentDidMount() {
        axios.get('http://localhost:5000/attractions/')
        .then(response => {
            this.setState({
                attractions: response.data
            })
            console.log('this is the list of attractions')
        })
        .catch((error) => {
            console.log(error)
        });
    }
    attractionsList() {
        return this.state.attractions.map((currentAttraction) => {
            return <Attraction attractions = {currentAttraction} key={currentAttraction._id} />
        })
    }

    render() {
        return (
            <div className='row'>
            <div className='attractionsContainer'>
                <h2 className='attractionsHeader'>Attractions</h2>
                <div className='attractionsInnerContainer'>
                    {this.attractionsList()}
                </div>
            </div>
            <FooterHome />
            </div>
            
        )
    }
}