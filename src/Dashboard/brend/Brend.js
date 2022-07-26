import React from 'react';
import Sidebar from '../Sidebar';

import Logo1 from "../assets/image/logo1.png";
import Logo2 from "../assets/image/logo2.png";
import Logo3 from "../assets/image/logo3.png";
import Logo4 from "../assets/image/logo4.png";
import Logo5 from "../assets/image/logo5.png";
import Logo6 from "../assets/image/logo6.png";
import Logo7 from "../assets/image/logo01.png";

import './Brend.css';

const Brend = () => {

    const Brendd = [
        {
            id: 1,
            img: Logo1,
        },
        {
            id: 2,
            img: Logo2,
        },
        {
            id: 3,
            img: Logo3,
        },
        {
            id: 4,
            img: Logo4,
        },
        {
            id: 5,
            img: Logo5,
        },
        {
            id: 6,
            img: Logo6,
        },
        {
            id: 7,
            img: Logo7,
        },
        {
            id: 8,
            img: Logo5,
        },
        {
            id: 9,
            img: Logo2,
        },
        {
            id: 10,
            img: Logo6,
        },
        {
            id: 11,
            img: Logo3,
        },
        {
            id: 12,
            img: Logo4,
        },
        {
            id: 13,
            img: Logo1,
        },
        {
            id: 14,
            img: Logo2,
        },
        {
            id: 15,
            img: Logo3,
        },
        {
            id: 16,
            img: Logo4,
        },
        {
            id: 17,
            img: Logo5,
        },
        {
            id: 18,
            img: Logo6,
        },
        {
            id: 19,
            img: Logo7,
        },
        {
            id: 20,
            img: Logo5,
        },
        {
            id: 21,
            img: Logo2,
        },
        {
            id: 22,
            img: Logo6,
        },
        {
            id: 23,
            img: Logo3,
        },
        {
            id: 24,
            img: Logo4,
        },
    ];

    return (
        <div className='container'>
            <div className="wrapper">
                <Sidebar />
                <div className="brend">
                    <h2>Brends</h2>
                    <div className="brend__wrapper">
                        {Brendd.map((item) => (
                            <div className="brendItem">
                                <img src={item.img} alt="img" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brend