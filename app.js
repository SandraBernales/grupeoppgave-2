//model


//view
updateView()
function updateView() {
	document.getElementById('app').innerHTML = /*html*/`
	<div class="game-screen">
        <div class="tamagotchi">
            <div class="hp">
                <p>Sleep: <span id="sleep-hp">100</span>%</p>
                <div class="container">
                    <div id="sleepDiv"></div>
                </div>
                
				<p>Hunger: <span id="hunger-hp">100</span>%</p>
                <div class="container">
                    <div id="feedDiv"></div>
                </div>
                
				<p>Play: <span id="play-hp">100</span>%</p>
                <div class="container">
                    <div id="playDiv"></div>
                </div>

                <p id="score-bar">Score: <span id="score"></span></p>

            </div>



            <div class="buttons">
                <button class="button" onclick="bar1()">Sleep</button>
                <button class="button" onclick="bar2()">Feed</button>
                <button class="button" onclick="bar3()">Play</button>
                <br>
                <button class="startGame" onclick="startGame">Start game</button>
            </div>
        </div>
    </div>
	`
}

//controller
function barElement(element) {
	return document.getElementById(element);
}

function bar1(sleep) {
	const element = barElement("sleepDiv")
	let width = 100;
	const id = setInterval(frame, 200);
	function frame() {
		if (width == 0) {
			clearInterval(id);
		} else {
			width--;
			element.style.width = width + '%';
		}
	}

}
function bar2(feed) {
	const element = barElement("feedDiv");
	let width = 100;
	const id = setInterval(frame, 150);
	function frame() {
		if (width == 0) {
			clearInterval(id);
		} else {
			width--;
			element.style.width = width + '%';
		}
	}
}
function bar3(play) {
	const element = barElement("playDiv");
	let width = 100;
	const id = setInterval(frame, 175);
	function frame() {
		if (width == 0) {
			clearInterval(id);
		} else {
			width--;
			element.style.width = width + '%';
		}
	}
}