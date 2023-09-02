function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}
ask(
    'Do you agree?',
    function () {
        alert('You agreed.');
    },
    function () {
        alert('You canceled the execution.');
    }
);


////////////////////////////////////////////////////
const Parameter2 = function () { return alert("I’m agree with you ?")};
const Parameter3 = function () { return alert("whyyyyyyy !")};
function ask(Parameter1,Parameter2,Parameter3) {
    if (Parameter1 === "Do you agree?") {
        Parameter2()
        Parameter3()
    }      
}