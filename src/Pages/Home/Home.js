import React from 'react';
import Banner from './Banner';
import Info from './Info.js';
import clock from '../../assets/icons/clock.svg'
import Services from './Services';
import Treatment from './Treatment';
import MakeAppointment from './MakeAppointment';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from '../Shared/Footer';

const Home = () => {
    return (
        <div className="px-12">
            <Banner/>
            <Info img={clock}></Info>
            <Services></Services>
            <Treatment></Treatment>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;