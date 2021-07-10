const Store = require('electron-store');
const store = new Store();
var value;
var error;
var output;
var code;
var value2;
var delay = "";
var errormsg = "";
var count = 0;
var site = 'main';
var qs = window.location.href;
var documentName;

qs = qs.substr(qs.indexOf("?") + 1);
try {
  if(process.versions.electron) {
    version = process.versions.electron;
  }
} catch (error) {}

if (qs == version) {}
else {
  window.location.href="about:blank";
}

window.onload = resizeWindow();
function resizeWindow() {
    var screenWidth = screen.height;
    var zoomValue = 1080 / screenWidth;
    var zoomPercentage = 100 / zoomValue;
    document.getElementById('body').style.zoom = zoomPercentage + '%';
}

document.getElementById("download-btn").addEventListener("click", function() {
    document.getElementById("logo-icon").style.display = "none";
    document.getElementById("loading-icon").style.display = "inline-flex";
    document.getElementById("error-message").innerHTML = "";
    //setTimeout(generateMacro, 1000);

    if (count == 0) {
        count = 1;
        var elem = document.getElementById("progress-text");
        var progress = 1;
        var id = setInterval(frame, 10);

        function frame() {
            if (progress >= 100) {
                clearInterval(id);
                count = 0;
                elem.innerHTML = progress + '% ' + langGenerated;
                generateMacro();
            } else {
                progress++;
                elem.innerHTML = langGenerating + progress + "%";
            }
        }
    }
})

function generateMacro() {
    value = document.getElementById("word").value;
    value2 = document.getElementById("delay").value;
    delay = value2 * 1000;
    documentName = document.getElementById("name").value;
    if (documentName == "") {
        documentName = "Generated Macro"
    }

    var character = value.split("");
    var i;
    for (i = 0; i < character.length; i++) {
        
    if(character[i] == character[i].toLowerCase() && character[i] != character[i].toUpperCase()) {    
        if ("a" == character[i]) code = 30;
        else if ("b" == character[i]) code = 48;
        else if ("c" == character[i]) code = 46;
        else if ("d" == character[i]) code = 32;
        else if ("e" == character[i]) code = 18;
        else if ("f" == character[i]) code = 33;
        else if ("g" == character[i]) code = 34;
        else if ("h" == character[i]) code = 35;
        else if ("i" == character[i]) code = 23;
        else if ("j" == character[i]) code = 36;
        else if ("k" == character[i]) code = 37;
        else if ("l" == character[i]) code = 38;
        else if ("m" == character[i]) code = 50;
        else if ("n" == character[i]) code = 49;
        else if ("o" == character[i]) code = 24;
        else if ("p" == character[i]) code = 25;
        else if ("q" == character[i]) code = 16;
        else if ("r" == character[i]) code = 19;
        else if ("s" == character[i]) code = 31;
        else if ("t" == character[i]) code = 20;
        else if ("u" == character[i]) code = 22;
        else if ("v" == character[i]) code = 47;
        else if ("w" == character[i]) code = 17;
        else if ("x" == character[i]) code = 45;
        else if ("y" == character[i]) code = 44;
        else if ("z" == character[i]) code = 21;
        else var error = true;

        output = output + '<MacroEvent><Type>1</Type><Delay>' + delay + '</Delay><KeyEvent><Makecode>' + code + '</Makecode></KeyEvent></MacroEvent><MacroEvent><Type>1</Type><KeyEvent><Makecode>' + code + '</Makecode><State>1</State></KeyEvent></MacroEvent>';
    }
        
        else if(character[i] == character[i].toUpperCase() && character[i] != character[i].toLowerCase()) {
        if ("A" == character[i]) code = 30;
        else if ("B" == character[i]) code = 48;
        else if ("C" == character[i]) code = 46;
        else if ("D" == character[i]) code = 32;
        else if ("E" == character[i]) code = 18;
        else if ("F" == character[i]) code = 33;
        else if ("G" == character[i]) code = 34;
        else if ("H" == character[i]) code = 35;
        else if ("I" == character[i]) code = 23;
        else if ("J" == character[i]) code = 36;
        else if ("K" == character[i]) code = 37;
        else if ("L" == character[i]) code = 38;
        else if ("M" == character[i]) code = 50;
        else if ("N" == character[i]) code = 49;
        else if ("O" == character[i]) code = 24;
        else if ("P" == character[i]) code = 25;
        else if ("Q" == character[i]) code = 16;
        else if ("R" == character[i]) code = 19;
        else if ("S" == character[i]) code = 31;
        else if ("T" == character[i]) code = 20;
        else if ("U" == character[i]) code = 22;
        else if ("V" == character[i]) code = 47;
        else if ("W" == character[i]) code = 17;
        else if ("X" == character[i]) code = 45;
        else if ("Y" == character[i]) code = 44;
        else if ("Z" == character[i]) code = 21;
        else var error = true;
        
        output = output + '<MacroEvent><Type>1</Type><KeyEvent><Makecode>42</Makecode></KeyEvent></MacroEvent><MacroEvent><Type>1</Type><Delay>' + delay + '</Delay><KeyEvent><Makecode>' + code + '</Makecode></KeyEvent></MacroEvent><MacroEvent><Type>1</Type><KeyEvent><Makecode>' + code + '</Makecode><State>1</State></KeyEvent></MacroEvent><MacroEvent><Type>1</Type><KeyEvent><Makecode>42</Makecode><State>1</State></KeyEvent></MacroEvent>'
        }
        else {
            if (" " == character[i]) code = 57;
            else if ("-" == character[i]) code = 41;
            else if ("=" == character[i]) code = 13;
            else if ("/" == character[i]) code = 53;
            else if ("." == character[i]) code = 52;
            else if ("," == character[i]) code = 51;
            else if ("1" == character[i]) code = 2;
            else if ("2" == character[i]) code = 3;
            else if ("3" == character[i]) code = 4;
            else if ("4" == character[i]) code = 5;
            else if ("5" == character[i]) code = 6;
            else if ("6" == character[i]) code = 7;
            else if ("7" == character[i]) code = 8;
            else if ("8" == character[i]) code = 9;
            else if ("9" == character[i]) code = 10;
            else if ("0" == character[i]) code = 11;
            else var error = true;
            
            output = output + '<MacroEvent><Type>1</Type><Delay>' + delay + '</Delay><KeyEvent><Makecode>' + code + '</Makecode></KeyEvent></MacroEvent><MacroEvent><Type>1</Type><KeyEvent><Makecode>' + code + '</Makecode><State>1</State></KeyEvent></MacroEvent>';
        }
    }

    output = '<?xml version="1.0" encoding="utf-8"?><Macro xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema"><Name>' + documentName + '</Name><Guid>ae184a94-a59e-41d2-854d-fdb83dc3c08d</Guid><MacroEvents>' + output + '</MacroEvents></Macro>';

    if (error == true) {
        document.getElementById("error-message").innerHTML = "";
        document.getElementById("error-message").innerHTML = langNoKey;
        document.getElementById("loading-icon").style.display = "none";
        document.getElementById("logo-icon").style.display = "inline-flex";
        document.getElementById("progress-text").innerHTML = "";
        return;
    } else if (delay == "" || delay == "e" || delay == ".") {
        document.getElementById("error-message").innerHTML = "";
        document.getElementById("error-message").innerHTML = langNoDelay;
        document.getElementById("loading-icon").style.display = "none";
        document.getElementById("logo-icon").style.display = "inline-flex";
        document.getElementById("progress-text").innerHTML = "";
        return;
    } else {
        document.getElementById("error-message").innerHTML = "";
    }


    document.getElementById("loading-icon").style.display = "none";
    document.getElementById("download-icon").style.display = "inline-flex";
    document.getElementById("download-box").innerHTML = '<button class="btn download-btn" onclick="downloadXML()">'+ langDownload +'</button>'
}

document.getElementById("download-icon").addEventListener("click", function() {
    downloadXML()
})

function downloadXML() {
    if (documentName == "") {
        documentName = "Generated Macro"
    }
    var blob = new Blob([output], {
        type: "text/plain;charset=utf-8"
    });
    saveAs(blob, documentName + ".xml");
}

//Menu
document.getElementById("reload").addEventListener("click", function() {
    location.reload();
})

// HELP Modal
// Get DOM Elements
const modal = document.querySelector('#help-modal');
const modalBtn = document.querySelector('#help');
const closeBtn = document.querySelector('.close');

// Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
    modal.style.display = 'block';
}

// Close
function closeModal() {
    modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}

//SETTINGS Modal
const modal2 = document.querySelector('#settings-modal');
const modalBtn2 = document.querySelector('#settings');
const closeBtn2 = document.querySelector('#close2');

// Events
modalBtn2.addEventListener('click', openModal2);
closeBtn2.addEventListener('click', closeModal2);
window.addEventListener('click', outsideClick2);

// Open
function openModal2() {
    modal2.style.display = 'block';
}

// Close
function closeModal2() {
    modal2.style.display = 'none';
}

// Close If Outside Click
function outsideClick2(e) {
    if (e.target == modal2) {
        modal2.style.display = 'none';
    }
}

document.getElementById("theme-slider").addEventListener("click", function() {
    if (document.getElementById('theme-slider').checked) {
        store.set('theme', 'light');
        document.getElementById("stylesheet").setAttribute('href', 'assets/css/style-light.css');
    } else {
        store.set('theme', 'dark');
        document.getElementById("stylesheet").setAttribute('href', 'assets/css/style-dark.css');
    }
});

window.onload = function() {
    checkTheme();
    detectLanguage();
}

function checkTheme() {
    var theme = store.get('theme');
    if (theme == "light") {
        document.getElementById("stylesheet").setAttribute('href', 'assets/css/style-light.css');
        document.getElementById("theme-slider").checked = true;
    } else {
        document.getElementById("stylesheet").setAttribute('href', 'assets/css/style-dark.css');
        document.getElementById("theme-slider").checked = false;
    }
};

function detectLanguage() {
    var visit;
    if (store.has('visit')) {
      visit = store.get('visit');
      parseInt(visit);
      visit++;
      store.set('visit', visit);
      var lang = store.get('lang');
      if (lang == 'de-DE') {
        setGerman();
      } else {
        setEnglish();
      }
    } else {
      store.set('visit', 0);
      var userLang = navigator.language || navigator.userLanguage;
      if (userLang == 'de-DE') {
        store.set('lang', 'de-DE');
        setGerman();
      } else {
        store.set('lang', 'en-US');
        setEnglish();
      }
    }
  
    var userLang = navigator.language || navigator.userLanguage;
  }

  document.getElementById('language').addEventListener('change', logValue, false);
  function logValue() {
    switch (this.value) {
      case '1':
        store.set('lang', 'de-DE');
        setGerman();
        break;
      case '2':
        store.set('lang', 'en-US');
        setEnglish();
        break;
    }
  }

var socket = io('http://syntaxx-license.herokuapp.com')

socket.on("connect", () => {
  if(store.has('license') && store.get('activated') == true) {
    socket.emit('currentUsing', store.get('license'), socket.id)
  }
})