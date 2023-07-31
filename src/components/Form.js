import React from "react";
import { useState } from 'react';

export default function Form(props) {

    const ToUppercase = () =>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const ToLowercase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const ClearText = () => {
        let newText = '';
        setText(newText);
    }

    const CopyText = () => {
        var newText = document.getElementById('exampleFormControlTextarea1');
        newText.select();
        navigator.clipboard.writeText(this.state.textToCopy)
    };

    const RemoveExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const ReverseText = () => {
        let newText = text.split("").reverse().join("");
        setText(newText);
    }

    const spaceCount = () => {
        let count = 0;

        for (let i = 0; i < text.length; i++) {
            if (text[i] === " ") {
                count++;
            }
        }
        return count;
    }

    const RemoveSpecialChar = () => {
        let newText = text.split(" ");
        console.log(newText);

        for (let i = 0; i < newText.length; i++) {
            newText[i] = newText[i].replace(/[^\w\s]/gi, '');
        }

        setText(newText.join(" "));
    }

    const Capitalize = () => {
        let newText = text.split(" ");

        for (let i = 0; i < newText.length; i++) {
            newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
        }
        setText(newText.join(" "));
    }

    const LoremIpsum = () => {
        let newText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        setText(newText);
    }

    
    const OnChange = (event) =>{
        setText(event.target.value);
        setSpace(spaceCount(event.target.value));
    }

    const [text, setText] = useState(''); //useState is a hook which is used to set the state of the component
    const [space, setSpace] = useState(0);

    return (
    <>
    <div className="container" style={{color: props.mode === 'dark' ? 'white':'black'}}>
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter Your Text Below</label>
            <textarea className="form-control" value={text} onChange={OnChange} style={{backgroundColor: props.mode === 'dark' ? 'grey':'white', color: props.mode === 'dark'? 'white':'black'}} id="exampleFormControlTextarea1" rows="7"></textarea>
        </div>
        <button type="button" className="btn btn-primary" onClick={ToUppercase}>Uppercase</button>
        <button type="button" className="btn btn-success mx-2" onClick={ToLowercase}>Lowercase</button>
        <button type="button" className="btn btn-secondary" onClick={ClearText}>Clear Text</button>
        <button type="button" className="btn btn-info mx-2 custom-button" onClick={CopyText}>Copy text</button>
        <button type="button" className="btn btn-danger" onClick={RemoveExtraSpaces}>Remove Extra Spaces</button>
        <button type="button" className="btn btn-warning mx-2" onClick={ReverseText}>Reverse Text</button>
        <button type="button" className="btn btn-dark" onClick={Capitalize}>Capitalize</button>
        <button type="button" className="btn btn-light mx-2" onClick={RemoveSpecialChar}>Remove Special Characters</button>
        <button type="button" className="btn btn-secondary-fr" onClick={LoremIpsum}>Lorem Ipsum</button>


        <div className="info my-5 mx-1">Words: {text.split(" ").length} <br/> Characters: {text.length}<br/> Spaces: {space}</div>
    </div>

    </>
    )
}