

// #############    #sleep 

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// *****
// #Example

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
    for (let i = 0; i < 5; i++) {
        console.log(`Waiting ${i} seconds...`);
        await sleep(i * 1000);
    }
    console.log('Done');
}

demo();


// ################## bad way of doing it

function sleepFor(sleepDuration){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ 
        /* Do nothing */ 
    }
}

function sleepThenAct(){
    sleepFor(2000);
    console.log("Hello, JavaScript sleep!");
}

sleepThenAct()



// ################# copy to clipboard   <- bad and deprecated.
//  make an input and append and copy and remove

function copy(text) {
    var input = document.createElement('textarea');
    input.innerHTML = text;
    document.body.appendChild(input);
    input.select();
    var result = document.execCommand('copy');
    document.body.removeChild(input);
    return result;
}


// ############ fetch json request

fetch( SITELINK  , {
  			headers: {
    				'Content-Type': 'application/json',
 			 },
			})
			.then((res) => res.json())
			.then((data) => {
				response = data;
			});

// ############# local storage chrome set value

localStorage.variablename = pair[1];


// ############ jQuery click
$('.buy-now').trigger('click');


// ###########  copy to clipboard (BAD)

function copyToClipboard(element) {
	  var $temp = $("<input>");
	  $("body").append($temp);
	  $temp.val(element).select();
	  document.execCommand("copy");
	  $temp.remove();
	}


// ########## sleep-2 BAD

	function sleep(miliseconds) {
	   var currentTime = new Date().getTime();

	   while (currentTime + miliseconds >= new Date().getTime()) {
	   }
	}
	

// #################    jQUERY EXIT BAD
function exit( status ) 
	{
		var i;
		$('body').html('');

		window.addEventListener('error', function (e) {e.preventDefault();e.stopPropagation();}, false);

		var handlers = [
			'copy', 'cut', 'paste',
			'beforeunload', 'blur', 'change', 'click', 'contextmenu', 'dblclick', 'focus', 'keydown', 'keypress', 'keyup', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'resize', 'scroll',
			'DOMNodeInserted', 'DOMNodeRemoved', 'DOMNodeRemovedFromDocument', 'DOMNodeInsertedIntoDocument', 'DOMAttrModified', 'DOMCharacterDataModified', 'DOMElementNameChanged', 'DOMAttributeNameChanged', 'DOMActivate', 'DOMFocusIn', 'DOMFocusOut', 'online', 'offline', 'textInput',
			'abort', 'close', 'dragdrop', 'load', 'paint', 'reset', 'select', 'submit', 'unload'
		];

		function stopPropagation (e) {
			e.stopPropagation();
			// e.preventDefault(); // Stop for the form controls, etc., too?
		}
		for (i=0; i < handlers.length; i++) {
			window.addEventListener(handlers[i], function (e) {stopPropagation(e);}, true);
		}

		if (window.stop) {
			window.stop();
		}

		throw '';
	}
	
// ################################# 

// ######## address show automation div

intoaddress = document.createElement("div");
intoaddress.classList.add("shipping-info-dialog");
intoaddress.classList.add("next-overlay-inner");
intoaddress.classList.add("next-dialog");
intoaddress.innerHTML= `${oid} ${response.first_name}  ${response.last_name}_1}`;
intoaddress.style.fontSize = "16px";
intoaddress.style.position = "absolute";
intoaddress.style.zIndex = "9000";
intoaddress.style.width="12%";			

// ########## input box auto copy

var input = document.createElement("input");
				input.type = "text";
				input.className = "name-copy";
				input.id = "name-copy";
				input.value = `${response.first_name} ${response.last_name}`;
				buttonaddress.appendChild(input);
// event listener 
document.getElementById("name-copy").onclick = function() {
					this.select();
					document.execCommand('copy');
				}

// #######################







