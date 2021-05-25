function resultBox() {
    let first = document.getElementById('first-val').value;
    let last = document.getElementById('last-val').value;
    let warningBox = document.getElementById('warning');
    let warningText = document.getElementById('w-text');
    let warningbtn = document.getElementById('w-btn');
    let resultBtn = document.getElementById('btn');
    if (first == "") {
        warningBox.style.display= "block";
        warningText.innerText = "Please enter your Name";
    } else if (first.length <= 2) {
        warningBox.style.display= "block";
        warningText.innerText = "Please enter your valid Name";
    } else if (!isNaN(first)) {
        warningBox.style.display= "block";
        warningText.innerText = "In this cannot write the namber";
    } else if (last == "") {
        warningBox.style.display= "block";
        warningText.innerText = "Please enter your Love Name";
    } else if (last.length <= 2) {
        warningBox.style.display= "block";
        warningText.innerText = "Please enter your valid Love Name";
    } else if (!isNaN(last)) {
        warningBox.style.display= "block";
        warningText.innerText = "In this cannot write the namber";
    } else {
        let loveData = Math.floor(Math.random() * 100);
        document.getElementById('result').value = loveData + '%';
    }
    warningbtn.addEventListener('click',function () {
        warningBox.style.display= "none";
    });
    if (first.length == first.length) {
        resultBtn.addEventListener("click", function(event){
            event.preventDefault()
          });
    }
}