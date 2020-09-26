import React from "react";   
import "./QuizzBee.css";
import Data from "../Data/Data";
import QuestionBox from "./QuestionBox";
import Result from './Result';


class QuizzBee extends React.Component{
    constructor(){
        super();
        this.state={
            questionBank: [],
            score: 0,
            responses: 0
        };
    }

    getQuestions = () =>{
        Data().then(question => {
            this.setState({
                questionBank : question
            });
        });
    }

    componentDidMount(){
        this.getQuestions();
    }

    computeAnswer= (answer, correctAnswer) => {
        if(answer === correctAnswer){
            this.setState({
                score: this.state.score+1
            });
        }
        this.setState({
            responses: this.state.responses < 5 ? this.state.responses + 1 : 5
        });
    }

    playAgain=()=>{
        console.log("Sdsd");
        this.getQuestions();
        this.setState({
            score: 0,
            responses: 0
        });
    }

    render(){
        return(
            <div className="container">
                <div className="title">QuizzBee</div>
                <div className="boxQuestion">
                {
                    this.state.questionBank.length > 0 && this.state.responses < 5 && this.state.questionBank.map(({question, answers, correct, questionId})=> 
                        (<QuestionBox 
                            question = {question} 
                            options={answers} 
                            key={questionId}
                            selected = {answer => this.computeAnswer(answer, correct)}
                        />)
                    )
                }
                </div>
                {
                    this.state.responses === 5 ? <Result score={this.state.score} playAgain={this.playAgain} />: null 
                }

            </div>
        );
    }
}

export default QuizzBee;