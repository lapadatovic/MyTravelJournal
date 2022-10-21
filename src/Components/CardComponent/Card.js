import React from "react"; 
import './Card.css'
import {FaMapMarkerAlt} from 'react-icons/fa'

function Card(props) {
    return(
        <div className="card">
            <div className="card--img">
                <img src={props.data.img} alt=""/>
            </div>
            <div className="card--info">
                <p className="inline-block">
                    <FaMapMarkerAlt className="map--marker"/>
                    <span className="location--info">{props.data.location} </span> 
                    <small>
                        <a className="small--text"
                         href={props.data.googleMapsUrl}>
                            View on Google Maps
                        </a>
                    </small>
                </p>
                <h2 className="location--name">{props.data.title}</h2>
                <p className="tour--date">
                    {props.data.startDate} - {props.data.endDate}
                </p>
                <p className="location--description">
                    {props.data.description}
                </p>
            </div>
        </div>
    )
}
export default Card