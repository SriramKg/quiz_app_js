// Sample questions. DONT touch this data
const questions = [
    {
        text: "Which language is primarily used for web app development?",
        options: ["C#", "Python", "JavaScript", "Swift"],
        correct: 2
    },
    {
        text: "Which of the following is a relational database management system?",
        options: ["Oracle", "Scala", "Perl", "Java"],
        correct: 0
    },
    {
        text: "What does HTML stand for?",
        options: ["Hyperlink and Text Markup Language", "High Technology Modern Language", "Hyper Text Markup Language", "Home Tool Markup Language"],
        correct: 2
    },
    {
        text: "What does CSS stand for?",
        options: ["Cascading Stylesheets", "Cascading Styling Styles", "Cascading Sheets for Stylings", "Cascaded Stylesheets"],
        correct: 0
    },
    {
        text: "Which of the following is not an object-oriented programming language?",
        options: ["Java", "C#", "Scala", "C"],
        correct: 3
    },
    {
        text: "Which tool is used to ensure code quality in JavaScript?",
        options: ["JSLint", "TypeScript", "Babel", "Webpack"],
        correct: 0
    },
    {
        text: "What is the primary use of the Git command 'clone'?",
        options: ["To stage changes", "To copy a repository", "To switch to a different branch", "To list all the files in a repository"],
        correct: 1
    },
    {
        text: "What does API stand for in the context of programming?",
        options: ["Apple Pie Interface", "Application Programming Interface", "Advanced Peripheral Integration", "Application Process Integration"],
        correct: 1
    },
    {
        text: "Javascript is a single threaded programming language",
        options: ["True", "False"],
        correct: 0
    },
    {
        text: "API calls in Javascript can be done using the following method",
        options: ["setTimeout()", "setInterval()", "fetch()", "get()"],
        correct: 2
    },
];

let index = 0;
let count = 0;

function loadQuestion(index) {
    // Load the first question and load subsequent question from this function
    const question = document
      .getElementById("question")
      .append(questions[index].text);
    const answerList = document.getElementById("answer-list");
    for (let i = 0; i < questions[index].options.length; i++) {
        const li = document.createElement("li");
        const ip = document.createElement("input");
        ip.setAttribute("type", "radio");
        ip.setAttribute("name", "answer");
        ip.setAttribute("value", i);
        li.append(ip);
        answerList.append(li);
        li.append(questions[index].options[i]);
    }
}

const submitButton = document.getElementById('submit');
submitButton.addEventListener("click", () => {
    // Implement the logic when the user clicks on submit button. The answer selected by the user should be validated here with the correct option
    
    try{
        let selected = document.querySelector('input[name=answer]:checked').value;
        let text = document.querySelector('input[name=answer]:checked').parentElement;
        if (questions[index].correct == selected) {
            count++;
            text.style.backgroundColor = "lightgreen";
        } else {
          text.style.backgroundColor = "red";
        } 
        let button = document.getElementById('submit');
        button.setAttribute("hidden","hidden");
        let button1 = document.getElementById('next');
        button1.removeAttribute("hidden");
    }
    catch{
        alert(`You will have to select an Option to Proceed !!`)
    } 
});

const nextButton = document.getElementById('next');
nextButton.addEventListener("click", () => {
    // Implement the logic for showing the next question in the questions array. Basic DOM manipulation methods are required here.
    // Also check for quiz completion here as well
    let button1 = document.getElementById('next');
    button1.setAttribute("hidden","hidden");
    let button = document.getElementById('submit');
    button.removeAttribute("hidden");
    index = index + 1;
    const para = document.getElementById("question");
    para.innerHTML="";
    const listElements = document.getElementById("answer-list");
    listElements.innerHTML="";
    if(index <  questions.length){
        loadQuestion(index);
    }
    else{
        alert(`Hurray !! You have completed the Quiz. Your score is ${count}/10.`);
        index=0;
        count=0;
        loadQuestion(index);
    }
    
});

let button = document.getElementById('next');
button.setAttribute("hidden","hidden");
// Load the first question on startup
loadQuestion(index);