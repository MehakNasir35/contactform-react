import { CardContact } from "./CardContact"
import pic1 from '../images/pic1.png';
import pic2 from '../images/pic2.png';
import pic3 from '../images/pic3.png';
import React, { useEffect, useState } from "react";

import {
    Input
} from 'reactstrap';

var cardDetailsArray = [{
    "name": "Erafi Ahonaf",
    "email": "erafi@gmail.com",
    "number": "01875510966",
    "btnClass": "success",
    "type": "Professional",
    "imageSource": pic2,
}, {
    "name": "Ishan Sarkar",
    "email": "ishan@gmail.com",
    "number": "01719058105",
    "btnClass": "primary",
    "type": "Personal",
    "imageSource": pic1,
}, {
    "name": "John Doe",
    "email": "jdoe@gmail.com",
    "number": "01875510966",
    "btnClass": "success",
    "type": "Professional",
    "imageSource": pic3,
}]

export function Aside(props) {

    const [itemsArray, setItemArray] = useState(cardDetailsArray);

    useEffect(() => {
        if (props.item) {
            var newArray = [...itemsArray, props.item]
            console.log(newArray)
            console.log(props.item)
            setItemArray(newArray)
        }
    }, [props.item]);

    return (
        // <!-- second section start  -->
        // <!-- naming second column as aside --> */}
        <aside className="col-12 col-md-6 col-lg-6">

            <Input
                className="mb-1 mt-2"
                type='text'
                placeholder="Filter Contacts..."
            />

            {/* cards array map */}
            {itemsArray.map((item, index) => <CardContact key={index} name={item.name} email={item.email} number={item.number} type={item.type} imageSource={item.imageSource} btnClass={item.btnClass} />)}

        </aside>
        // {/* <!-- second section end  --> */}
    )
}