import React from "react";
import { useEffect } from "react";

function ContentPage() {
    useEffect(() => {
        fetch("https://www.boredapi.com/documentation")
        .then((response) => {
            if(response.status === 200){
                return response.json()
            }
        })
        .then(json => set)
    });
    return (
        <>
            <h1>You have entert the ContentPage</h1>
        </>
    );
}
export default ContentPage;
