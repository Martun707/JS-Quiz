
let questions = [
    {
    id: 1,   
    name: "Function type. What will be the result of the following code?  console.log(typeof function(){})",
    options:[
    "  null ",
    "  string ",
    "  function ",
    "  undefined ",
    ],
    answer:"function"
    
    },
    {
        id: 2,        
        name: "What is the result.   3 + 2 + '7'?",
        options:[
        "  327 ",
        "  57 ",
        "  12 ",
        "  32+7",
    ],
    answer:"57"
        
    },
    {
        id: 3,        
        name: "Data types. What will be the result of the following code?: console.log(typeof null)",
        options:[
         "  object ",
         "  NaN ",
         "  null ",
         "  undefined ",
        ],
        answer:"object"
       
    },
    {
        id: 4,       
        name: "Calling an empty function. What will be the result of the following code?:    console.log((function(){})())",         

    
        options:[
        "  true ",
        "  undefined ",
        "  false ",
        "  null ",
    ],
    answer:"undefined"
        
    },
    {
        id: 5,        
        name: "What will be the console output of the code?։",
        options:[        
         "  false,false ",
         "  Error ",
         "  false,true ",
         "  true ",
        ],
        answer:"false,false"       
    },
    {
        id: 6,        
        name: "What will the following code return?։",
        options:[        
         "  number ",
         "  string",
         "  function ",
         "  ParseError ",
        ],
        answer:"string"       
    },
    {
        id: 7,        
        name: "What will the following code snippet output?:   console.log(new Number(1) === 1);",
        options:[        
         "  false ",
         "  true",
         "  undefined ",
         "  null ",
        ],
        answer:"false"       
    },
    {
        id: 8,        
        name: " Which of the following methods adds an element to the end of an array?",
        options:[        
         "  .push() ",
         "  .pop()",
         "  .shift() ",
         "  .unshift() ",
        ],
        answer:".push()"       
    },
    {
        id: 9,        
        name: " What value will the code snippet return:     console.log( `0xff   ` - `1`)",
        options:[        
         "  256 ",
         "  -1",
         "  254 ",
         "  255 ",
        ],
        answer:"254"       
    },
    {
        id: 10,        
        name: "What is the method to get the data entered by the user? ",
        options:[        
         "  alert() ",
         "  confirm",
         "  prompt() ",
         "  message() ",
        ],
        answer:"prompt()"       
    },
]

let que_count=0
let next_btn=document.querySelector('#next-btn')
let answerButtons=document.querySelector("#answer-buttons")
let result_box=document.querySelector('.result-box')
let que_text=document.querySelector("#question")
let try_btn=document.querySelector("#try-btn")
let app=document.querySelector(".app")

let correct=0
let wrong=0

function next(){
    if(que_count<questions.length-1){        
    que_count++
    showQuestions(que_count)
    next_btn.style.display="none"    
    }else{        
        result()
    }
}

function showQuestions(index){
    let que_tag='<span>'+questions[index].id+"."+questions[index].name +'</span>'
    let option_tag='<div class="btn p_a">'+questions[index].options[0]+'</div>'
                    +'<div class="btn p_b">'+questions[index].options[1]+'</div>'
                    +'<div class="btn p_c" >'+questions[index].options[2]+'</div>'
                    +'<div class="btn p_d" >'+questions[index].options[3]+'</div>'
                   
    ;
    que_text.innerHTML=que_tag
    answerButtons.innerHTML=option_tag
    let option=document.querySelectorAll('.btn')
    
    option.forEach(res=>{
        res.addEventListener('click',function(){
            let alloption=answerButtons.children.length
            let userAns=res.innerText;
            let correctAns=questions[que_count].answer
           
           if( userAns===correctAns){      
            res.classList.add("succses")            
            correct++
           }else{            
            res.classList.add("error")           
            wrong++
            option.forEach(element=>{
                if(element.innerText===questions[que_count].answer){
                    element.classList.add("correct")
                }
            })            
        } 
            for(let i=0;i<alloption;i++){
                answerButtons.children[i].classList.add("disabled")
            }
            next_btn.style.display="block"           
    })
    })         
}
showQuestions(0)


function result(){
    app.style.display="none"
    result_box.style.display="block"
    let arajin=document.querySelector("#a")
    let ekrort=document.querySelector("#b")
    arajin.innerHTML='correct:'+correct
    ekrort.innerHTML='wrong:'+wrong
 
    
}

function tryagain(){
    que_count=0
    correct=0
    wrong=0
    app.style.display='block'   
    result_box.style.display='none'
    showQuestions(0)
}