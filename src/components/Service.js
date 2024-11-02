import React,{useState} from 'react';
import { CommonHeaTittle } from './CommonHeaTittle';

export const Service = () => {
    const [title] = useState("Our Services");
    const [body] = useState("This is the body of the services section.");

    return (
        <CommonHeaTittle  title={title} body={body} />
      );
}
