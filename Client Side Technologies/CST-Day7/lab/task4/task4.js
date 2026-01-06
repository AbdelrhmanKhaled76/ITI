const inputField = document.getElementById("txt1");
// document.getElementById("aElem").onclick = function () {
//   alert();
//   return false;
//   //
//   // location.assign(this.href)
// };

document.getElementById("diplayBtn").value = "ay 7aga";
//   document.getElementById("displayBtn").onclick=function () {
// console.log(this)
//     var sel = document.getElementById("menu");
//     console.log(sel.selectedIndex);
//     console.log(sel.options[sel.selectedIndex].text);
//     console.log(sel.options[sel.selectedIndex].value);
//     //multiple selection (TASK)
//   }
// displayNum()

function clearFun(){
    inputField.value = ""
}

var eraseVal = function () {
    inputField.value = inputField.value.substring(inputField.value.length - 1 , 0);
}; 


function displayNum(elem) {
    var val = elem.value;
    inputField.value += val.trim();
}

function displayOptions() {
    var sel = document.getElementById("menu");
    var selectedOptions = []
    for(let i = 0; i < sel.options.length; i++){
        if(sel.options[i].selected){
            console.log(sel.options[i].value)
            selectedOptions.push(sel.options[i].value);
        }
    }
}
function displayContent(txtField) {
    var txt = txtField.value;
    document.getElementById("div1id").innerHTML = txt;
}
