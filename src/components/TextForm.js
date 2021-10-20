import React, { useState } from 'react';

export default function Textform(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");

    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    }
    const handleClearClick = () => {
        setText("");
        props.showAlert("Text Cleared","success");
    }
    const handleCopyClick=()=>
    {
       var text =document.getElementById('myBox');
       text.select();
       navigator.clipboard.writeText(text.value);
       props.showAlert("Text Copied","success");
    }
    // const handleZigZacClick=()=>
    // {
    //     let newText=text;
    //    for(let i=0;i<text.length;i++)
    //    {   
    //        if(i%2===0)
    //        {
    //             let newChar=text.charAt(i).toLowerCase();
    //             newText=text.replace(text.charAt(i),newChar);
    //        }
    //        else{
    //         let newChar=text.charAt(i).toUpperCase();
    //         newText=text.replace(text.charAt(i),newChar);
    //        }
    //    }
    //    setText(newText);
    // }
    const handleRemoveSpacesClick=()=>
    {
        let newText=text.split(/[ ]+/);//this topic is remained from my side to learn
        setText(newText.join(" "));
        props.showAlert("Removed Extra spaces","success");

    }


    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    // setText("new Text");
    return (
        <>
            <div className="container">
                <h1 className={`text-${props.mode==='light'?'dark':'light'}`}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} id="myBox" rows="6"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>
                    Convert To Uppercase
                </button>
                <button className="btn btn-danger mx-2" onClick={handleLowClick} >
                    Convert To Lowercase
                </button>
                <button className="btn btn-secondary mx-2" onClick={handleClearClick} >
                    Clear Text
                </button>
                <button className="btn btn-info mx-2" onClick={handleCopyClick} >
                    Copy Text
                </button>
                {/* <button className="btn btn-info mx-2" onClick={handleZigZacClick} >
                    zIg ZaC tExT
                </button> */}
                <button className="btn btn-warning mx-2" onClick={handleRemoveSpacesClick} >
                   Remove Extra Spaces 
                </button>
                

            </div>
            <div className="container my-3">
                  <h2 className={`text-${props.mode==='light'?'dark':'light'}`}>Your Text Summary</h2>
                  <p className="text-primary"><b>{text.split(" ").length} Words , {text.length} Characters</b></p>
                  <p className="text-danger"><b>{0.008 * text.split(" ").length} Minutes Read</b></p>
                  <p className={`text-${props.mode==='light'?'dark':'light'}`}><b>{text.split(".").length} Sentance</b></p>

                  <h2 className={`text-${props.mode==='light'?'dark':'light'}`}>Priview</h2>
                  <p className="text-warning">{text.length>0?text:"Enter some text to priview here"}</p>
            </div>
        </>
    )
}
