import React , {useState} from 'react';
import { CommonHeaTittle } from './CommonHeaTittle';
export const Contact = () => {
  const [title] = useState("Contact Us");
  const [body] = useState("This is the body of the contact section.");
  
  return (
    <CommonHeaTittle  title={title} body={body} />
  );
}
