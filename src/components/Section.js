import addImage from "../images/addimage.jpg"
import { CardContact } from "./CardContact"
import React, { useRef, useState } from "react";
import pic4 from '../images/pic4.png';

import {
    Input, Button, FormGroup, Label
} from 'reactstrap';

export function Section() {
    const contactForm = useRef(null);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setPhone] = useState('');
    const [type, setGender] = useState('');
    const [imageSource, setImage] = useState('');
    const [btnClass, setButtonClass] = useState('');
    const [showCard, setShowCard] = useState(false)

    const handleClickEvent = () => {
        const form = contactForm.current
        setName(`${form['name'].value}`);
        setEmail(`${form['email'].value}`);
        setPhone(`${form['number'].value}`);
        setGender("Professional");
        setImage(`${pic4}`);
        setButtonClass('success');
        setShowCard(true)
    }
    return (
        /* <!-- first section start -->
  <!-- naming first column as section --> */
        <section className="col-12 col-md-6 col-lg-6">
            {/* <!-- mid heading --> */}
            <h3 className="text-center mt-3 text-primary">Add Contact</h3>
            <form ref={contactForm}>
                {/* <!-- input fields start --> */}

                <Input
                    className="mb-1"
                    type='text'
                    name={'name'}
                    placeholder="Name"
                />
                <Input
                    className="mb-1"
                    type='email'
                    name={'email'}
                    placeholder="Email"
                />
                <Input
                    className="mb-1"
                    type='tel'
                    name={'number'}
                    placeholder="Number"
                />
                {/* <!-- input fields end --> */}

                {/* <!-- heading --> */}
                <h5 className="font-weight-bold mt-3">Contact Type</h5>
                {/* <!-- radio button 1 div start --> */}
                <FormGroup  check inline>
                    <Label check>
                        <Input type="radio" name="radio1"  /> Professional
                    </Label>
                </FormGroup>
                <FormGroup check inline>
                    <Label check>
                        <Input type="radio" name="radio1" /> Personal
                    </Label>
                </FormGroup>
                {/* <!-- radio button 2 div end --> */}
                {/* <!-- css display flex with content in center --> */}
                <div className="d-flex justify-content-center">
                    <img src={addImage} width="100px" height="100px" className="img-thumbnail" alt="Responsive image" />
                </div>
                <input type="file" className="mb-1" />
                <div>
                    <Button
                        onClick={handleClickEvent}
                        block
                        color="primary"
                    >
                        Add Contact
                    </Button>
                </div>
            </form>

            {/* if showcard is true, show card */}
            {showCard && <CardContact name={name} email={email} number={number} type={type} imageSource={imageSource} btnClass={btnClass} />}

        </section>
    )
}