import { Aside } from "./Aside"
import { Section } from "./Section"
import React, { useState } from "react";

export function Main() {

    const [item, setItem] = useState();
    const [selectedItem, setSelectedItem] = useState();

    const submitEvent = (details,isEdit) => {
        setItem(details)
    }

    const updateItem=(selectedItem) => {
       setSelectedItem(selectedItem)
    }

    return (

        <div className="container-fluid row m-0">
            <Section submitEvent={submitEvent} selectedItem={selectedItem} />
            <Aside item={item} updateItem={updateItem}/>
        </div>

    )
}