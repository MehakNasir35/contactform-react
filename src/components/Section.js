import addImage from "../images/addimage.jpg"
import React, { useState } from "react";
import pic4 from '../images/pic4.png';

import {
    Input, Button, FormGroup, Label
} from 'reactstrap';

export function Section(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setPhone] = useState('');
    const [type, setType] = useState('male');
    const [imageSource] = useState(`${pic4}`);
    const [btnClass, setButtonClass] = useState("primary");

    const handleClickEvent = () => {
        let details = {
            "username": name,
            "email": email,
            "phone": number,
            "btnClass": btnClass,
            "gender": type,
            "image": imageSource,
        }
        props.handleClickEvent(details)
    }

    const typeChange = (e) => {
        setType(e.currentTarget.value);
        if (e.currentTarget.value === "female")
            setButtonClass("success")
    }

    return (
        /* <!-- first section start -->
  <!-- naming first column as section --> */
        <section className="col-12 col-md-6 col-lg-6">
            {/* <!-- mid heading --> */}
            <h3 className="text-center mt-3 text-primary">Add Contact</h3>
            <form>
                {/* <!-- input fields start --> */}

                <Input
                    className="mb-1"
                    type='text'
                    name={'name'}
                    placeholder="Name"
                    onChange={e => setName(e.target.value)}
                />
                <Input
                    className="mb-1"
                    type='email'
                    name={'email'}
                    placeholder="Email"
                    onChange={e => setEmail(e.target.value)}
                />
                <Input
                    className="mb-1"
                    type='tel'
                    name={'number'}
                    placeholder="Number"
                    onChange={e => setPhone(e.target.value)}

                />
                {/* <!-- input fields end --> */}

                {/* <!-- heading --> */}
                <h5 className="font-weight-bold mt-3">Contact Type</h5>
                {/* <!-- radio button 1 div start --> */}
                <FormGroup check inline>
                    <Label check>
                        <Input
                            type="radio"
                            name="radio1"
                            value="female"
                            onChange={typeChange} /> female
                    </Label>
                </FormGroup>
                <FormGroup check inline>
                    <Label check>
                        <Input
                            type="radio"
                            name="radio1"
                            value="male"
                            checked
                            onChange={typeChange}
                        /> male
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



        </section>
    )
}