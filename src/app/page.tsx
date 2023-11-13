"use client"
import React, { useState, useEffect } from 'react';
import getInstance from './worker';


interface text{label:string,score:number}

type Text=text[]

export default function MyComponent() {
 const [classifier, setClassifier] = useState<Function>();
 const [text, setText] = useState("")
 const [output, setOutput] = useState<Text>([{label:"",score:0}]);

 useEffect(() => {
    const initialize = async () => {
       const classifier = await getInstance();
       setClassifier(()=>classifier);
    };

    initialize();
 }, []);

 const handleClick = async () => {
    if (classifier) {
       const result = await classifier(text);
       setOutput(result);
       console.log(result);
       
    }
 };

 return (
    <div>
         <input
        type="text"
        className="w-full max-w-xs p-2 border border-gray-300 text-gray-900 rounded mb-4"
        placeholder="Enter text here"
        onInput={e => {
          setText(e.currentTarget.value)
        }}
      />
       <button onClick={handleClick}>Classify</button>
       {output && <div className='text-white'>{output[0].label}</div>}
    </div>
 );
}
