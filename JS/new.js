const salary = document.querySelector("#salary");
const output = document.querySelector(".salary-output");
output.textContent = salary.value;
salary.addEventListener("input", function(){
    output.textContent = salary.value;
});

const text = document.querySelector("#name");
const textError = document.querySelector(".text-error");
text.addEventListener('input', function () {
    let nameRegex = RegExp ('^[A-z]{1}[a-z]{2,}$');
    if(nameRegex.test(text.value))
    textError.textContent = "";
    else textError.textContent = "Name is Correct";

});