import React from 'react';
import fluoried from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluried Treatment',
            description: '',
            image: fluoried
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: '',
            image: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: '',
            image: whitening
        },
    ];
    return (
        <div className="my-28">
            <div className="text-center text-xl font-bold uppercase">
                <h3 className="text-priamry">Our Services</h3>
                <h2 className="text-secondary text-4xl">Services We Provide</h2>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    services.map(service => <Service service={service} key={service._id}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;