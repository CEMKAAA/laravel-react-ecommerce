import React from "react";

export default function User(prop){
    return(
        <div>
            <h1>{prop.name.data}</h1>
            <h1>{prop.address.data}</h1>
        </div>
    )
}