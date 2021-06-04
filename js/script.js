function resultBox() {
    let first = document.getElementById('first-val').value;
    let last = document.getElementById('last-val').value;
    let resultInput = document.getElementById('result');
    let resultBtn = document.getElementById('btn');
    let warningBox = document.getElementById('warning');
    let warningText = document.getElementById('w-text');
    let warningbtn = document.getElementById('w-btn');
    let percentageR = document.getElementById('percentage-box');

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
                                                    
        // warning pop pop print karava mate 

        let loveData = Math.floor(Math.random() * 101);
        document.getElementById('result').value = loveData + '%';

        // result pop pop print krava mate 
        let percentageImage = document.getElementById('percentage-image');
        let percentageText = document.getElementById('pMsgInput');
        let audioPlay = document.getElementById('audioP');
        if (resultInput.value >= '80%') {
            function resultPop(params) {
                setTimeout(
                    function () {
                        let resultval = resultInput.value
                        // let audioPlay = document.querySelector('audio');
                        let heartVal = document.getElementById('heart-result');
                        percentageR.style.display = "block";
                        percentageImage.setAttribute("src","image/animated-heart-image-0069.gif");
                        heartVal.innerText = resultval;
                        percentageText.innerText = `Your love is successfully`;
                        audioPlay.innerHTML = 
                        `<audio controls autoplay>
                            <source class="audio-play" src="audio/clapping_audio.mp3"  type="audio/mp3"> 
                            <source class="audio-play" src="audio/clapping_audio.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio>`
                    },
                    1000);
            }
            resultPop();
        }
        if ((resultInput.value < '80%') == (resultInput.value >= '40%')) {
            function resultPop(params) {
                setTimeout(
                    function () {
                        let resultval = resultInput.value
                        let heartVal = document.getElementById('heart-result');
                        percentageR.style.display = "block";
                        percentageImage.setAttribute("src","image/clapping-hand.gif");
                        heartVal.innerText = resultval;
                        percentageText.innerText = `Your love tracking to fulfill...`;
                        audioPlay.innerHTML = 
                        `<audio controls autoplay>
                            <source class="audio-play" src=""  type="audio/mp3"> 
                            <source class="audio-play" src="" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio>`
                    },
                    1000);
            }
            resultPop();
        }
        if ((resultInput.value < '40%') == (resultInput.value >= '0%')) {
            function resultPop(params) {
                setTimeout(
                    function () {
                        let resultval = resultInput.value
                        let heartVal = document.getElementById('heart-result');
                        percentageR.style.display = "block";
                        percentageImage.setAttribute("src","image/cry-sorry.gif");
                        heartVal.innerText = resultval;
                        percentageText.innerText = `Your love is not successfully`;
                        audioPlay.innerHTML = 
                        `<audio controls autoplay>
                            <source class="audio-play" src="audio/cry_audio.mp3"  type="audio/mp3"> 
                            <source class="audio-play" src="audio/cry_audio.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio>`
                    },
                    1000);
            }
            resultPop();
        }
        
    }

    // warning pop pop ne bandh karva 

    warningbtn.addEventListener('click',function () {
        warningBox.style.display= "none";
    });

    // percentage box pop pop ne bandh karva 
    
    // time limit in percentage box pop pop display none 
    // setTimeout(function(){percentageR.style.display= "none";},6000);

    // btn click to display none 

    let percentageBtn = document.getElementById('p-btn');
    percentageBtn.addEventListener('click',function () {
        percentageR.style.display= "none";
        resultBtn.disabled = true;
    });

    // btn to not dbl click
    let firstInput = document.getElementById('first-val');
    let lastInput = document.getElementById('last-val');
    firstInput.addEventListener('input', function(){
        resultBtn.disabled = false;
    })
    lastInput.addEventListener('input', function(){
        resultBtn.disabled = false;
    })
}