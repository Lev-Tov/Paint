
	

// ------------------------------------------

		// ----------HEADER-------------

// ------------------------------------------

	var Header= document.createElement('div');
	Header.id="Header";
	Header.innerHTML =" <br>WELCOME TO PAINT PROGRAM <br> Select a color and let your creativity drives you CRAZY!";
	
	document.body.appendChild(Header);
// ------------------------------------------
		
		// ----------CANVAS------------

// ------------------------------------------

	var Canvas= document.createElement('div');
	Canvas.id="Canvas";
	
	document.body.appendChild(Canvas);

// ------------------------------------------

		// ----------COLOR-BOARD-----------

// ------------------------------------------

	var Colorboard= document.createElement('div');
	Colorboard.id="Colorboard";
	
	document.body.appendChild(Colorboard);

// ------------------------------------------

		// ------------COLORS---------------

// ------------------------------------------

	var Blue= document.createElement('div');
	Blue.id="Blue";
	Blue.className="Colors";
	Blue.addEventListener("click",getColor);
	Colorboard.appendChild(Blue);

	var Green= document.createElement('div');
	Green.id="Green";
	Green.className="Colors";	
	Green.addEventListener("click",getColor);
	Colorboard.appendChild(Green);

	var Pink= document.createElement('div');
	Pink.id="Pink";
	Pink.className="Colors";
	Pink.addEventListener("click",getColor);
	Colorboard.appendChild(Pink);

	var Orange= document.createElement('div');
	Orange.id="Orange";
	Orange.className="Colors";
	Orange.addEventListener("click",getColor);
	Colorboard.appendChild(Orange);

	var Black= document.createElement('div');
	Black.id="Black";
	Black.className="Colors";
	Black.addEventListener("click",getColor);
	Colorboard.appendChild(Black);

	// // -------------------------------------------------------------

						// FONCTION getColor

	// // -------------------------------------------------------------

var selectedColor="white";
var counter =0;
var ColorSelection;

	function getColor(e){

		ColorSelection=e.target.id;
	// var style=window.getComputedStyle(ColorSelection);
	// selectedColor=style.getPropertyValue("background-color");
}

	for(var i= 0; i<2500 ; i++){
			
				
			var printPixel= document.createElement('div');
			printPixel.className="pixel";
			printPixel.addEventListener("mousemove", paintPixel)
			Canvas.appendChild(printPixel);

			
}

function paintPixel(e){

	if(e.buttons == 1)
	{//is the mouse clicked when im moving over the pixel
	e.target.style.backgroundColor = ColorSelection;
}
}
