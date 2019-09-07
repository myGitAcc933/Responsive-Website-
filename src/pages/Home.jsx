import React, { Component } from 'react';
import './Home.css';
import {Input, Button} from 'reactstrap';
import { InputGroup} from 'reactstrap';
import Example from "../components/Navbar";
import Footer from "../components/Footer";
import Latest from "../components/Latest";
import Car from "../components/Carousel";
import Title from "../components/Title";
import Latest2 from "../components/Latest2";
import Latest1 from "../components/Latest1";
import Jambotron from "../components/Jambotron";
import Jambotron2 from "../components/Jambotron2";
import Latest4 from "../components/Latest4";




class Home extends Component {
    render() {
        return (
            <div >
               <Example/>
               <Car/>


               <Latest />
               <br/><br/>
               <br/>
               <Latest1/>
               <Latest2/>
               <Jambotron/>
               <Jambotron2/>
               <Latest4/>
               <Footer/>









            </div>
        );
    }
}

export default Home;
