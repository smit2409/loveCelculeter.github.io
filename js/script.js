function resultBox() {
    let first = document.getElementById('first-val').value;
    let last = document.getElementById('last-val').value;
    if (first == "") {
        alert('Please enter your Name');
    } else if (first.length <= 2) {
        alert('Please enter your valid Name');
    } else if (!isNaN(first)) {
        alert('In this cannot write the namber');
    } else if (last == "") {
        alert('Please enter your Love Name');
    } else if (last.length <= 2) {
        alert('Please enter your valid Love Name');
    } else if (!isNaN(last)) {
        alert('In this cannot write the namber');
    } else {
        let loveData = Math.floor(Math.random() * 100);
        document.getElementById('result').value = loveData + '%';
    }
}