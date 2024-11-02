
import {useState} from 'react';
import { Body } from "./Body";
import { CommonHeaTittle } from "./CommonHeaTittle";
import { Booklist } from './Booklist';
export const Home = () => {
    const [title] = useState("Welcome to the Home Page");
    const [body] = useState("This is the body of the home section.");

    return (
        <>
            <CommonHeaTittle  title={title} body={body} />
            <Body />
            <Booklist />
        </>

    );
}
