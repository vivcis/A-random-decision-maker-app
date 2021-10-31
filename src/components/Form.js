import React, { useState } from 'react';


const Form = () => {
    const [question, setQuestion] = useState("");
    const [options, setOptions] = useState("");

    return (
      
         <span>
            <div id="container">
            <h1 className="title">A Choice Maker</h1>
            <p>When the decision is too hard or too simple use the Choice Decision Maker</p>
            <form action="" method="">
                <div>
                <h3>Question:</h3>
                 
                <input type="text" onChange = {(e)=> setQuestion(e.target.value)} id="question" placeholder="enter your question here" autocomplete="off"/>
                </div>
                
                <h3>Options:</h3>
                    
                <div className="form-group">
                    <input type="text" onChange = {(e)=> setOptions(e.target.value)} id="optionA" placeholder="A:" autocomplete="off"/>
                </div>
                <div className="form-group">
                    <input type="text" onChange = {(e)=> setOptions(e.target.value)}  id="optionB" placeholder="B:" autocomplete="off"/>
                </div>
                <div className="form-group">
                    <input type="text" onChange = {(e)=> setOptions(e.target.value)} id="optionC" placeholder="C:" autocomplete="off"/>
                </div>
                <div className="form-group">
                    <input type="text" onChange = {(e)=> setOptions(e.target.value)}  id="optionD" placeholder="D:" autocomplete="off"/>
                </div>
                <div className="btn">
                 {/* <button id="add"><img src="img/add.png"> Option</button>  */}
                <button id="answerBtn">choose for me!</button>
                </div>
                 {/* <input type="submit" value="Answer"> */}
            </form>
            </div>

</span>
     
           
    )
}


export default Form
