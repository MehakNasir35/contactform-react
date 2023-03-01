import { Aside } from "./Aside"
import { Section } from "./Section"
import React, { useState } from "react";
import { CardContact } from "./CardContact"

export function Main() {

    const [item, setItem] = useState();

    const handleClickEvent = (details) => {
        setItem(details)
    }

    return (

        <div className="container-fluid row m-0">
            <Section handleClickEvent={handleClickEvent} />
            <Aside item={item} />

        </div>

    )
}