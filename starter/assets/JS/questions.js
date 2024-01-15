//Questions and answers are represent as Multi-dimentional(2D) array with inner array elements.

const questions = [
    {
        title: "1. Inside which HTML element do we put the JavaScript?",
        choices: ['<javasript></javasript>',
                  '<Script></Script>',
                  '<scripting></scripting>', 
                  '<JS></JS>'],
        answer: '<Script></Script>'
    },
    {
        title: "2. What is the correct JavaScript syntax to change the content of the HTML element below?",
        choices: ['document.getElementById("demo").innerHTML = "Hello World!"',
                  'document.getElementsByName("p").innerHTML = "Hello World!"', 
                  '#demo.innerHTML = "Hello World!"', 
                  'document.getElement("p").innerHTML = "Hello World!"'],
        answer: 'document.getElementById("demo").innerHTML = "Hello World!"'
    },
    {
        title:"3. How do you write 'Hello World' in an alert box?",
        choices: ['alertbox("Hello World!");',
                  'alert("Hello World!");', 
                  'msg("Hello World!");',
                  'alert = "Hello World!";'],
        answer: 'alert("Hello World!");'
    },
    {
        title: "4. Where is the correct place to insert a JavaScript?",
        choices: ['The <head> Section', 
                  'The <body> section',
                  'Both  <head> Section and <body> section are correct',
                  'Both  <head> Section and <body> section are incorrect'],
        answer: 'Both  <head> Section and <body> section are correct'
    },
    {
        title:  "5. How does a FOR loop start?",
        choices: ['for i = 1 to 5', 
                  'for (i = 0; i <= 5; i++)',
                  'for (i <=5;i++)',
                  'for (i = 0; <=5)'],
        answer: 'for (i = 0; i <= 5; i++)'
    },
    {
        title: "6. How can you add a comment in a JavaScript?",
        choices: ['// This is a comment',
                  '<!--This is a comment-->', 
                  '"This is a comment"',
                  '= This is a comment'],
        answer: '// This is a comment'
    },
    {
        title: "7. What is the correct way to write a JavaScript array?",
        choices: ['var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
                  'var colors = ["red", "green", "blue"]',
                  'var colors = (1:"red", 2:"green", 3:"blue")', 
                  'var colors = (1:"red", 2:"green", 3:"blue")'],
        answer: 'var colors = ["red", "green", "blue"]'
    },
    {
        title:"8. How to insert a comment that has more than one line?",
        choices: ['//This comment ha more than one line//', 
                  '<!--This comment ha more than one line-->', 
                  '/*This comment ha more than one line*/', 
                  '</This comment ha more than one line>'],
        answer: '/*This comment ha more than one line*/'
    }
];