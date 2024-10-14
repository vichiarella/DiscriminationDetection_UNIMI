import { useEffect, useState } from "react";

// import pic_event from '../assets/Evento6settMUSA-removebg-preview.png'
import React from "react";



const AnnotationPage = (
  // { annotation, onNext, onBack }
) => {
    const [annotations, setAnnotations] = useState([]);
    const [index, setIndex] = useState(0);
    const [clickCount, setClickCount] = useState(0);
    const [editingLabel, setEditingLabel] = useState(false);
    const [editingReason, setEditingReason] = useState(false);
    const [editingToken, setEditingToken] = useState(false);

    const [labelValue, setLabelValue] = useState('');
    const [reasonValue, setReasonValue] = useState('');
    const [tokenValue, setTokenValue] = useState('');
  
    useEffect(() => {
    //   if (annotation.Job_Description) {
    //     setAnnotations((prev) => [...prev, annotation]);
    //   }
    }, 
    //[annotation]
  );
    //Tokens data model +{ position from start (0 first pos), value, weight? }
    // const highlightTokens = (text, tokens) => {
    //   if (!tokens) return text;
    //   const tokenList = tokens.split(',');
    //   tokenList.forEach(token => {
    //     const re = new RegExp(token, 'gi');
    //     text = text.replace(re, `<span class="highlight">${token}</span>`);
    //   });
    //   return (<div dangerouslySetInnerHTML={{ __html: text }} />);
    // };
  
    const handleNext = () => {
      if (index < annotations.length - 1 && clickCount < 5) {
        setIndex(prevIndex => prevIndex + 1);
        // onNext();
        setClickCount(prevCount => prevCount + 1);
      } else if (index === annotations.length - 1 && clickCount < 5) {
        // onNext();
        setClickCount(prevCount => prevCount + 1);
      }
    };
  
    const handleBack = () => {
      if (index > 0) {
        setIndex(prevIndex => prevIndex - 1);
        setClickCount(prevCount => prevCount - 1); // Decrement clickCount when going back
      }
    };
  
    const handleStartOver = () => {
      setAnnotations([]);
      setIndex(0);
      setClickCount(0);
      // onBack();
    };
  
    const handleEnableEditingLabel = () => {
      setEditingLabel(true);
      // setLabelValue(annotations[index].Label);
    };
  
    const handleEnableEditingReason = () => {
      setEditingReason(true);
      // setReasonValue(annotations[index].Reason);
    };
  
    const handleEnableEditingToken = () => {
      setEditingToken(true);
      // setTokenValue(annotations[index].Tokens);
    };
  
    const handleSaveLabel = async () => {
      try {
        // const docId = annotations[index]._id; // Extract ObjectId from the object
        // const url = `http://127.0.0.1:8000/annotations/label/${docId}`;
        // await axios.put(url, null, { params: { label: labelValue } });
        setEditingLabel(false);
        const updatedAnnotations = [...annotations];
        // updatedAnnotations[index].Label = labelValue;
        setAnnotations(updatedAnnotations);
      } catch (error) {
        console.error('Error updating label:', error);
      }
    };
  
    const handleSaveReason = async () => {
      try {
        // const docId = annotations[index]._id; // Extract ObjectId from the object
        // const url = `http://127.0.0.1:8000/annotations/reason/${docId}`;
        // const response = await axios.put(url, { reason: reasonValue }); // Send reason directly
        setEditingReason(false);
        const updatedAnnotations = [...annotations];
        // updatedAnnotations[index].Reason = reasonValue;
        setAnnotations(updatedAnnotations);
      } catch (error) {
        console.error('Error updating reason:', error);
      }
    };
  
  
  
    const handleSaveToken = async () => {
      try {
        // const docId = annotations[index]._id; // Extract ObjectId from the object
        // const url = `http://127.0.0.1:8000/annotations/token/${docId}`;
        // await axios.put(url, { tokens: tokenValue });
        setEditingToken(false);
        const updatedAnnotations = [...annotations];
        // updatedAnnotations[index].Tokens = tokenValue;
        setAnnotations(updatedAnnotations);
      } catch (error) {
        console.error('Error updating tokens:', error);
      }
    };
  
    return (
      <div className="container">
        {/* <img src={pic_event} className='right-logo'></img> */}
        <div className="section">
          <h3>Instruction</h3>
          <p>1. Please read the text of the job description, if the label is not correct, change it using the <b>Edit Label</b> button.<br></br>
            2. Also, if the reason is not correct by using <b>Edit Reason</b> button you can edit it.<br></br>
            3. Please pay attention to the highlighted tokens in the text. If they are not correct or any tokens is missed, use the <b>Edit Token</b> button to fix it.
          </p>
        </div>
  
        <div className="main-content">
          <div className="left">
            <h4>Job Description</h4>
            <div className="content-box-left">
              {/* {annotations.length > 0 && (
               <p>{highlightTokens(annotations[index].Job_Description, annotations[index].Tokens)}</p>
              )} */}
            </div>
            <div className="button-container" >
              {index > 0 && <button className="button" onClick={handleBack}>Back</button>}
              {clickCount < 5 ? (
                <button className="button" onClick={handleNext}>Next</button>
              ) : (
                <button className="button" onClick={handleStartOver}>Start Over</button>
              )}
            </div>
          </div>
  
          <div className="right">
            <h4>Default Annotation</h4>
            <div className="content-box-right">
              {annotations.length > 0 && (
                <div>
                  {/* Label Section */}
                  <div className="annotation-section">
                    {editingLabel ? (
                      <div className="edit-reason-container">
                        <label>
                          <b>Label: </b>
                          <select value={labelValue} onChange={(e) => setLabelValue(e.target.value)}>
                            <option value="inclusive">Inclusive</option>
                            <option value="non_inclusive">Non-Inclusive</option>
                          </select>
                        </label>
                        <button className="button" onClick={handleSaveLabel}>Save</button>
                      </div>
                    ) : (
                      <div className="edit-reason-container">
                        <p>
                          {/* <b>Label: </b>{annotations[index].Label} */}
                        </p>
                        <button className="button edit-button" onClick={handleEnableEditingLabel} >Edit Label</button>
                      </div>
                    )}
                  </div>
  
                  {/* Reason Section */}
                  <div className="annotation-section">
                    {editingReason ? (
                      <div className="edit-reason-container">
                        <label>
                         <b>Reason: </b>
                          <input type="text" value={reasonValue} onChange={(e) => setReasonValue(e.target.value)} />
                        </label>
                        <button className="button" onClick={handleSaveReason}>Save</button>
                      </div>
                    ) : (
                      <div className="edit-reason-container">
                        <p>
                          {/* <b>Reason: </b> {annotations[index].Reason} */}
                        </p>
                        <button className="button edit-button" onClick={handleEnableEditingReason}>Edit Reason</button>
                      </div>
                    )}
                  </div>
  
  
                  {/* Tokens Section */}
                  <div className="annotation-section">
                    {editingToken ? (
                      <div>
                        <label>
                          <b>Tokens: </b>
                          <input type="text" value={tokenValue} onChange={(e) => setTokenValue(e.target.value)} />
                        </label>
                        <button className="button" onClick={handleSaveToken}>Save</button>
                      </div>
                    ) : (
                      <div>
                        <p>
                          {/* <b>Tokens: </b> {annotations[index].Tokens} */}
                        </p>
                        <button className="button" onClick={handleEnableEditingToken}>Edit Tokens</button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
  
        </div>
      </div>
    );
  };