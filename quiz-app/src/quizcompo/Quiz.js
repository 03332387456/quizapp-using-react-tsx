// import React, { useState } from 'react';



// var questions = [
//   {
//     question: "HTML Stands for ______________",
//     options: ["HTML", "XML", "Hypertext Markup Language", "material UI"],
//     correctAnswer: "Hypertext Markup Language",
//   },
//   {
//     question: "CSS Stands for ______________",
//     options: ["CSS", "CSS", "Cascading Style Sheet", "CSS"],
//     correctAnswer: "Cascading Style Sheet",
//   },
//   {
//     question: "JS Stands for ______________",
//     options: ["JS", "JS", "JavaScript", "JS"],
//     correctAnswer: "JavaScript",
//   },
//   {
//     question: "RAM Stands for ______________",
//     options: ["RAM", "RAM", "Random Access Memory", "RAM"],
//     correctAnswer: "Random Access Memory",
//   },
//   {
//     question: "SQL Stands for ______________",
//     options: ["SQL", "SQL", "Structured Query Language", "SQL"],
//     correctAnswer: "Structured Query Language",
//   },
//   {
//     question: "is HTML is Programming Language?",
//     options: ["YES", "NO"],
//     correctAnswer: "NO",
//   },
//   {
//     question: "DOM Stands for ______________",
//     options: ["DOM", "SQL", "Document object Model", "DOM"],
//     correctAnswer: "Document object Model",
//   },
//   {
//     question: "is Javascript is Programming Language?",
//     options: ["YES", "NO"],
//     correctAnswer: "NO",
//   },  
//   {
//     question: "what is SPA",
//     options: ["single page app", "multipple page app"],
//     correctAnswer: "single page app",
//   },
// ]

// function Quiz() {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [score, setScore] = useState(0);
//   const [clickedOption, setClickedOption] = useState(null);

//   const changeQuestion = () => {
//     console.log("Clicked Option:", clickedOption);

//     if (clickedOption === questions[currentQuestion].correctAnswer) {
//       setScore(score + 1);
//     }

//     if (currentQuestion < questions.length - 1) {
//       console.log("Moving to the next question");
//       setCurrentQuestion(currentQuestion + 1);
//       setClickedOption(null); 
//     } else {
//       alert("Quiz completed");
//     }
//   }

//   const handleOptionClick = (option) => {
//     setClickedOption(option);
//   }

//   return (
//     <div>
//       <div className="container">
//         <h1 className="text-center text-white">Quiz App</h1>
//       </div>

//       <div className="container py-5">
//         <div className="p-3 bg-white shadow rounded">
//           <p className="text-center">
//             Question{" "}
//             <span id="currentQuestions" className="fs-3">
//               {currentQuestion + 1} / 
//             </span>{" "}
//             <span id="totalQuestion">{questions.length}</span>
//           </p>
//           <h2 id="question">{questions[currentQuestion].question}</h2>

//           <div className="row" id="Answers">
//             <div className="col-md-12 p-2">
//               <div className="py-3">
//                 {questions[currentQuestion].options.map((opt, i) => {
//                   return (
//                     <button
//                       type="button"
//                       className="btn btn-info w-100 m-2"
//                       onClick={() => handleOptionClick(opt)}
//                       key={i}
//                     >
//                       {opt}
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="col-md-12 text-center">
//         <button
//           onClick={changeQuestion}
//           type="button"
//           id="NextButton"
//           className="btn btn-outline-light my-5 text-center"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Quiz;


import React, { useState } from 'react';

var questions = [
  {
    question: "HTML Stands for ______________",
    options: ["HTML", "XML", "Hypertext Markup Language", "material UI"],
    correctAnswer: "Hypertext Markup Language",
  },
  {
    question: "CSS Stands for ______________",
    options: ["CSS", "CSS", "Cascading Style Sheet", "CSS"],
    correctAnswer: "Cascading Style Sheet",
  },
  {
    question: "JS Stands for ______________",
    options: ["JS", "JS", "JavaScript", "JS"],
    correctAnswer: "JavaScript",
  },
  {
    question: "RAM Stands for ______________",
    options: ["RAM", "RAM", "Random Access Memory", "RAM"],
    correctAnswer: "Random Access Memory",
  },
  {
    question: "SQL Stands for ______________",
    options: ["SQL", "SQL", "Structured Query Language", "SQL"],
    correctAnswer: "Structured Query Language",
  },
  {
    question: "is HTML is Programming Language?",
    options: ["YES", "NO"],
    correctAnswer: "NO",
  },
  {
    question: "DOM Stands for ______________",
    options: ["DOM", "SQL", "Document object Model", "DOM"],
    correctAnswer: "Document object Model",
  },
  {
    question: "is Javascript is Programming Language?",
    options: ["YES", "NO"],
    correctAnswer: "NO",
  },  
  {
    question: "what is SPA------------",
    options: ["single page app", "multipple page app"],
    correctAnswer: "single page app",
  },
]

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedOption, setClickedOption] = useState(null);

  const changeQuestion = () => {
    if (clickedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setClickedOption(null); // Reset clicked option for the next question
    } else {
      alert("Quiz completed  your score is  " + score );
    }
  }

  const handleOptionClick = (option) => {
    setClickedOption(option);
  }

  return (
    <div>
      <div className="container">
        <h1 className="text-center text-white">Quiz App</h1>
      </div>

      <div className="container py-5">
        {currentQuestion < questions.length ? (
          <div className="p-3 bg-white shadow rounded">
            <p className="text-center">
              Question{" "}
              <span id="currentQuestions" className="fs-3">
                {currentQuestion + 1} / 
              </span>{" "}
              <span id="totalQuestion">{questions.length}</span>
            </p>
            <h2 id="question">{questions[currentQuestion].question}</h2>

            <div className="row" id="Answers">
              <div className="col-md-12 p-2">
                <div className="py-3">
                  {questions[currentQuestion].options.map((opt, i) => {
                    return (
                      <button
                        type="button"
                        className="btn btn-info w-100 m-2"
                        onClick={() => handleOptionClick(opt)}
                        key={i}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-3 bg-white shadow rounded">
            <h2 className="text-center">Quiz Completed!</h2>
            <p className="text-center">Your Total Score: {score} / {questions.length}</p>
          </div>
        )}
      </div>

      <div className="col-md-12 text-center">
        {currentQuestion < questions.length && (
          <button
            onClick={changeQuestion}
            type="button"
            id="NextButton"
            className="btn btn-outline-light my-5 text-center"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default Quiz;

