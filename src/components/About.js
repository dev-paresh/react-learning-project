import React , {useState} from 'react';
import { CommonHeaTittle } from './CommonHeaTittle';

export const About = () => {
  const [title] = useState("About Us");
  const [body] = useState("This is the body of the about section.");
  
    return (
      <CommonHeaTittle  title={title} body={body} />
      );
}
