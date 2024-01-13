//Questions and answers are represent as Multi-dimentional(2D) array with inner array elements.

const questions = [
    { 
        question: "1. Inside which HTML element do we put the JavaScript?", 
        answers: [
            { text: "<javasript></javasript>", correct: false },
            { text: "<Script></Script>", correct: true },
            { text: "<scripting></scripting>", correct: false },
            { text: "<JS></JS>", correct: false }
        ]
    },
    {
        question: "2. What is the correct JavaScript syntax to change the content of the HTML element below?", 
        answers: [
            { text: "document.getElementById("demo").innerHTML = "Hello World!"", correct: true },
            { text: "document.getElementsByName("p").innerHTML = "Hello World!"", correct: false },
            { text: "#demo.innerHTML = "Hello World!"", correct: false },
            { text: "document.getElement("p").innerHTML = "Hello World!"", correct: false }
        ] 
    },
    { 
        question: "3. How do you write "Hello World" in an alert box?", 
        answers: [
            { text: "alertbox("Hello World!");", correct: false },
            { text: "alert("Hello World!");", correct: true },
            { text: "msg("Hello World!");", correct: false },
            { text: "alert = "Hello World!";", correct: false }
        ]
    },
    { 
        question: "4. Where is the correct place to insert a JavaScript?", 
        answers: [
            { text: "The <head> Section", correct: false },
            { text: "The <body> section", correct: false },
            { text: "Both  <head> Section and <body> section are correct", correct: true },
            { text: "Both  <head> Section and <body> section are incorrect", correct: false }
        ]
    },
    { 
        question: "5. How does a FOR loop start?", 
        answers: [
            { text: "for i = 1 to 5", correct: false },
            { text: "for (i = 0; i <= 5; i++)", correct: true },
            { text: "for (i <=5;i++)", correct: false },
            { text: "for (i = 0; <=5)", correct: false }
        ]
    },
    { 
        question: "6. How can you add a comment in a JavaScript?", 
        answers: [
            { text: "// This is a comment", correct: true },
            { text: "<!--This is a comment-->", correct: false },
            { text: ""This is a comment"", correct: false },
            { text: "= This is a comment", correct: false }
        ]
    },
    { 
        question: "7. What is the correct way to write a JavaScript array?", 
        answers: [
            { text: "var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")", correct: false },
            { text: "var colors = ["red", "green", "blue"]", correct: true },
            { text: "var colors = (1:"red", 2:"green", 3:"blue")", correct: false },
            { text: "var colors = "red", "green", "blue"", correct: false }
        ]
    },
    { 
        question: "8. How to insert a comment that has more than one line?", 
        answers: [
            { text: "//This comment ha more than one line//", correct: false },
            { text: "<!--This comment ha more than one line-->", correct: false },
            { text: "/*This comment ha more than one line*/", correct: true },
            { text: "</This comment ha more than one line>", correct: false }
        ]
    },
];
