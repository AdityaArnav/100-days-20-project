document.querySelector("#form").addEventListener("submit", formSubmit)
var todoArr = JSON.parse(localStorage.getItem("studentDataBase")) || [];
function formSubmit(event) {
    event.preventDefault();

    var name = document.querySelector("#name").value;
    var age = document.querySelector("#age").value;
    var gender = document.querySelector("#gender").value;
    var email = document.querySelector("#email").value;
    var phone = document.querySelector("#phone").value;
    console.log(name, age, gender, email, phone, submit);

    var todoObj = {
        name: name,
        age: age,
        gender: gender,
        email: email,
        phone: phone,
    };

    todoArr.push(todoObj);
    console.log(todoArr);


    localStorage.setItem("studentDataBase", JSON.stringify(todoArr));
}