import React, {Component} from 'react';
import './city.css';

class City extends React.Component {
    constructor() {
        super()
        this.state = {
            imageLoad: false
        }
    }
    render(){

        return (     
            <div className="city">
                <h2 className='place' >{this.props.localPlace}</h2>          
                <h2 className='descr' >{this.props.description}</h2>    
                <div className='displayImage'>
                    <img rel="icon" type="image/png" src={this.props.icon} sizes="32x32" className="imagen" alt="img" onerror={styles.imagen}/>  
                </div>
            
                <div className="weatherInfo">
                    <h2 className='time' >Time: {this.props.time}</h2>
                    <h2 className='degr' >Degrees: {this.props.degrees}</h2>
                    { console.log(this.props) }
                </div>
            </div>
            
        )
    }
    }

    const styles = {
        imagen: {
          display: 'none'
        }}


export default City;