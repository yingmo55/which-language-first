export const quizQuestions = [
         {
            questionIdex: 0,
            question: "Why do you want to learn programming?",
            choices: {
                "For my kids": "pythonKids",
                "I don't know, just pick one for me": "python",
                "Just for fun": 2,
                "I'm inerested": 2,
                "Improve myself": 2,
                "Make money": 1
            }
        },
        {
            questionIndex: 1,
            question: "You want to make money to...",
            choices: {
                "Get a job": [5, true],
                "I have a Startup idea!": [5, false]
            }
        },
        {
            questionIndex: 2,
            question: "Have a brilliant idea/platform in mind?",
            choices: {
                "Yes": [5, false],
                "Nope, just want to get started": 3
            }
        },
        {
            questionIndex: 3,
            question: "I preferto learn things...",
            choices: {
                "The easy Way": "python",
                "The best way": "python",
                "The slightly harder way": 4,
                "The really hard way (but eaiser to pick up other languages in the future)": "cPlusPlus"
            }
        },
        {
            questionIndex: 4,
            question: "Auto or Manual Car?",
            choices: {
                "Auto": "java",
                "Manual": "C"
            }
        },
        {
            questionIndex: 5,
            question: "Which platform/field?",
            choices: {
                "web": [7, 9],
                "Enterprise": 12,
                "mobile": 13,
                "3D/Gaming": "cPlusPlus",
                "I want to work for bigh tech companies": 6,
                "Doesnt' matter, I just want $$$": "java"
            }
        },
        {
            questionIndex: 6,
            question: "Which tech company?",
            choices: {
                "Facebook": "python",
                "Google": "python",
                "Microsoft": "cSharp",
                "Apple": "objectiveC"
            }
        },
        {
            questionIndex: 7,
            question: "Which stack do you want to do for web?",
            choices: {
                "Front-end(web interface)": "javaScript",
                "Back-end(\"brain\" behind a website)": 8
            }
        },
        {
            questionIndex: 8,
            question: "For back-end, I want to work for...",
            choices: {
                "Startup": 10,
                "Corporate": 12
            }
        },
        {
            questionIndex: 9,
            question: "Does your web app provides into in real-time, like Twitter?",
            choices: {
                "Yes": "javaScript",
                "No": 10,
                "Not sure": 10
            }
        },
        {
            questionIndex: 10,
            question: "For your startup, do you want to try something new with huge potential, but less mature?",
            choices: {
                "Yes": "javaScript",
                "No": 11,
                "Not sure": 11
            }
        },
        {
            questionIndex: 11,
            question: "Which is your favorite toy?",
            choices: {
                "Lego": "python",
                "Play-Doh": "ruby",
                "I've an old & ugly toy, but I love it so much!": "php"
            }
        },
        {
            questionIndex: 12,
            question: "What do you think about Microsoft?",
            choices: {
                "I'm a fan!": "cSharp",
                "Not bad": "java",
                "Suck": "java"
            }
        },
        {
            questionIndex: 13,
            question: "Which OS?",
            choices: {
                "iOS": "objectiveC",
                "Android": "java"
            }
        }
    ]

export const results = {
    python: "Python",
    pythonKids: "Scratch, and then move onto python",
    java:"Java",
    c:"C",
    cPlusPlus:"C++",
    javaScript: "JavaScript",
    cSharp:"C#",
    ruby: "Ruby",
    php:"PHP",
    objectiveC:"Objective-C",
}