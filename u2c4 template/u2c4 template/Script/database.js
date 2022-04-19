var todoArr=JSON.parse(localStorage.getItem("studentDataBase"));
var completed= JSON.parse(localStorage.getItem("completeTodo")) || [];
var rejected= JSON.parse(localStorage.getItem("rejectedTodo")) || [];
console.log(todoArr)
let pen=document.getElementById("body");
function debo(todoArr){
    document.getElementById("body").innerHTML=null

    todoArr.map(function(element,index){
        var row=document.createElement("tr");
    
        var col1=document.createElement("td");
        col1.innerText=element.name;
    
       var col2=document.createElement("td");
       col2.innerText=element.age;
    
        var col3=document.createElement("td");
        col3.innerText=element.gender;
    
        var col4=document.createElement("td");
        col4.innerText=element.email;
    
        var col5=document.createElement("td");
        col5.innerText=element.phone;
    
        var col6=document.createElement("td");
        col6.innerText="Accepted";
    
        col6.style.borderRadius="13px"
        col6.style.backgroundColor="blue";
    
        var col7=document.createElement("td");
        col7.innerText="Rejected";
    
        col7.style.backgroundColor="tomato";
        col7.style.borderRadius="13px";
    
        col6.addEventListener("click",function (){
            markCompleted(element);
        });
    
    
        col7.addEventListener("click",function (){
            markRejected(element);
            remove(elem);
            
        });

        
        row.append(col1,col2,col3,col4,col5,col6,col7);
        document.querySelector("#body").append(row);
    });
}
debo(todoArr)


function remove(elem){
    for(let i=0; i<todoArr.length;i++){
        if(todoArr[i]==elem){
            todoArr.splice(i,1)
        }
        localStorage.setItem("studentDataBase",JSON.stringify(todoArr));
        debo(todoArr)


    }
}

function  markCompleted(element) {
    console.log(element);
    completed.push(element);
    localStorage.setItem("completeTodo",JSON.stringify(completed));
}

function  markRejected(element) {
    console.log(element);
    rejected.push(element);
    localStorage.setItem("rejectedTodo",JSON.stringify(rejected));
}