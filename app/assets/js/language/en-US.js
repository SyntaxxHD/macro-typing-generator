window.langDownload = 'Download'
window.langGenerating = 'Generating... '
window.langGenerated = 'generated'
window.langNoKey = 'Error, some key is not available'
window.langNoDelay = "Error, delay wasn't set properly"
window.langInvalidLicense = 'The license key is invalid. Please check for any typing errors.'
window.langNoInternet = 'You are not connected to the internet. Please establish an internet connection to actrivate the license.'
window.langNoServerConnection = 'Can not establish connection to the server. If this error occurs longer, try to upadate the software.'
window.langInUse = 'Another device is currently using the program. Please close it, as only one program can use the license at the same time.'
window.langUpdateAvailable = 'A new update is available. Downloading now...'
window.langUpdateDone = 'Update Downloaded. It will be installed on restart. Restart now?'

function setEnglish() {
  if (document.getElementById('en')) {
    document.getElementById('en').selected = 'selected'
  }
  window.langDownload = 'Download'
  window.langGenerating = 'Generating... '
  window.langGenerated = 'generated'
  window.langNoKey = 'Error, some key is not available'
  window.langNoDelay = "Error, delay wasn't set properly"
  window.langSupportedLength = 'Only audio files with a length of up to one hour are supported'
  window.langInvalidLicense = 'The license key is invalid. Please check for any typing errors.'
  window.langNoInternet = 'You are not connected to the internet. Please establish an internet connection to actrivate the license.'
  window.langNoServerConnection = 'Can not establish connection to the server. If this error occurs longer, try to upadate the software.'

  document.getElementById("download-btn").innerHTML = "Generate"
  document.getElementById("lang-settings").innerHTML = "Settings"
  document.getElementById("lang-theme").innerHTML = "Theme"
  document.getElementById("lang-language").innerHTML = "Language"
  document.getElementById("help-title").innerHTML = "How to save and import the Macro/XML-File?"
  document.getElementById("help-l1").innerHTML = 'After your Macro is generated, click the "Download" button. Click on "save" to save the xml-file.'
  document.getElementById("help-l2").innerHTML = "In Razer Synapse 3.0 go to the Macro tab and click on the icon with the arrow pointing in a box to import your Macro. Choose the xml-file you previously created."
  document.getElementById("help-l3").innerHTML = 'Select any button on your Razer keyboard or your Razer mouse, then select Macro and then select your Macro, you just have imported. To execute the Macro, press the button which you linked the Macro with.'
  document.getElementById("name").placeholder = "Name"
  document.getElementById("word").placeholder = "Text"
  document.getElementById("delay").placeholder = "Delay"
}