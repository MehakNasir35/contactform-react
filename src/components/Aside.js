import { CardContact } from "./CardContact"
import React, { useEffect, useState } from "react";

import {
    Input
} from 'reactstrap';

export function Aside(props) {

    const [itemsArray, setItemArray] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedItemIndex, setSelectedItemIndex] = useState(null);

    const remove = (index) => {
        var newArray = [...itemsArray]
        newArray.splice(index, 1);
        setItemArray(newArray)
    }

    const update = (index) => {
        setSelectedItemIndex(index)
        setSelectedItem(itemsArray[index])
    }

    useEffect(() => {
        props.updateItem(selectedItem)
    }, [selectedItem])

    useEffect(() => {
        if (props.item) {
            if (selectedItemIndex != null) {

                var replaceItem = props.item
                replaceItem.id = selectedItem.id

                var newArray = [...itemsArray]
                newArray[selectedItemIndex] = replaceItem
                setItemArray(newArray)

            } else {
                var newArray = [...itemsArray, props.item]
                setItemArray(newArray)
            }
        }
    }, [props.item]);

    useEffect(() => {
        // fetchUsers API call 
        fetch('https://dummyjson.com/users/?limit=3&select=id,username,email,phone,gender,image,isDeleted')
            // after getting users, parse to json 
            .then(res => res.json())
            // after parsing result, call set card details function
            .then(data => setItemArray(data.users))
            .catch((error) => {
                console.log(error)
            });
    }, []);

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
            {itemsArray.map((item, index) =>
                <CardContact
                    key={item.id}
                    remove={remove}
                    update={update}
                    index={index}
                    name={item.username}
                    email={item.email}
                    number={item.phone}
                    type={item.gender}
                    imageSource={item.image}
                    btnClass={item.btnClass}
                />)}

        </aside>
        // {/* <!-- second section end  --> */}
    )
}