import React, { useState } from "react";
import './QuestionBox.css';

const QuestionBox = ({question, options, selected}) => {
    const [answer, setAnswer] = useState(options);
    return(
        <div className = "questionBox" >
            <div className="question">
                {question}
            </div>
            <div className="answer">
            {
                answer.map((text, index)=>(
                <button 
                        key={index} 
                        className="answerBtn"
                        onClick = {
                            () => {
                                setAnswer([text]);   
                                selected(text);   
                            }
                        } 
                        >{text}
                    </button>
                    ))}
            </div>
            
        </div>
    )
}

export default QuestionBox;