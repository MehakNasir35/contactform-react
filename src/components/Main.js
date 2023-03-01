import { Aside } from "./Aside"
import { Section } from "./Section"
import React, { useState } from "react";
import { CardContact } from "./CardContact"

export function Main() {

    const [item, setItem] = useState();
    const [showCard, setShowCard] = useState(false);

    const handleClickEvent = (details) => {
        setShowCard(true)
        setItem(details)
    }

    return (

        <div className="container-fluid row m-0">
            <Section handleClickEvent={handleClickEvent} />
            <Aside item={item} />

        </div>

    )
}