
// import React from 'react'
import { Body } from "./Body";

export const Home = () => {
    return (
        <>
            <div className="p-5 bg-lavender-200 text-black">
                <h1 className="text-3xl font-bold">Welcome to the Home Page</h1>
                <p>This is the body of the home section.</p>
            </div>
            <Body />
        </>

    );
}
