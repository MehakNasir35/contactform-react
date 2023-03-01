import { Aside } from "./Aside"
import { Section } from "./Section"
import React, {  useState } from "react";
import pic4 from '../images/pic4.png';

export function Main() {

    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [number, setPhone] = useState('');
    // const [type, setGender] = useState('');
    // const [imageSource, setImage] = useState('');
    // const [btnClass, setButtonClass] = useState('');
    // const [showCard, setShowCard] = useState(false)

    const handleClickEvent = () => {
        // const form = contactForm.current
        // setName(`${form['name'].value}`);
        // setEmail(`${form['email'].value}`);
        // setPhone(`${form['number'].value}`);
        // setGender("Professional");
        // setImage(`${pic4}`);
        // setButtonClass('success');
        // setShowCard(true)
        console.log('run')
    }

    return (

        <div className="container-fluid row m-0">
            <Section handleClickEvent={handleClickEvent} />
            <Aside />
        </div>

    )
}