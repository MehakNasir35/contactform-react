import addImage from "../images/addimage.jpg"
import React, { useRef } from "react";
import {
    Input, Button
} from 'reactstrap';

export function Section() {

    const inputNameRef = useRef(null);
    const inputEmailRef = useRef(null);
    const inputNumberRef = useRef(null);

    const handleSubmitButton = () => {
        alert(inputNameRef.current.value);
        console
    };
    return (
        /* <!-- first section start -->
  <!-- naming first column as section --> */
        <section className="col-12 col-md-6 col-lg-6">
            {/* <!-- mid heading --> */}
            <h3 className="text-center mt-3 text-primary">Add Contact</h3>

            {/* <!-- input fields start --> */}
            <>
                <Input
                    className="mb-1"
                    type='text'
                    ref={inputNameRef}
                    placeholder="Name"
                />
            </>
            <>
                <Input
                    className="mb-1"
                    type='email'
                    ref={inputEmailRef}
                    placeholder="Email"
                />
            </>
            <>
                <Input
                    className="mb-1"
                    type='tel'
                    ref={inputNumberRef}
                    placeholder="Number"
                />
            </>
            {/* <!-- input fields end --> */}

            {/* <!-- heading --> */}
            <h5 className="font-weight-bold mt-3">Contact Type</h5>
            {/* <!-- radio button 1 div start --> */}
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"
                    checked />
                <label className="form-check-label" for="inlineRadio1">Personal</label>
            </div>
            {/* <!-- radio button 1 div end --> */}
            {/* <!-- radio button 2 div start --> */}
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                <label className="form-check-label" for="inlineRadio2">Professional</label>
            </div>
            {/* <!-- radio button 2 div end --> */}
            {/* <!-- css display flex with content in center --> */}
            <div className="d-flex justify-content-center">
                <img src={addImage} width="100px" height="100px" className="img-thumbnail" alt="Responsive image" />
            </div>
            <input type="file" className="mb-1" />
            <div>
                <Button
                    onClick={handleSubmitButton}
                    block
                    color="primary"
                >
                    Add Contact
                </Button>
            </div>
        </section>
    )
}