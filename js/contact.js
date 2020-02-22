alert('hello')

let result= confirm ('Do you want to proceed?')

console.log(result)

function checkforblank() {
    if (document.getElementById('name').value == "") {
        alert('please enter your first Name');
        return false;
    }
}