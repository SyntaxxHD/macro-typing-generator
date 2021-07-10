//Ändert alles auf Deutsch
function setGerman() {
  if(document.getElementById('de')) {
    document.getElementById('de').selected = 'selected';
  }
  langDownload = 'Herunterladen';
  langGenerating = 'Generiert... ';
  langGenerated = 'generiert';
  langNoKey = 'Fehler, eine Taste ist nicht verfügbar';
  langNoDelay= "Fehler, die Verzögerung ist nicht richtig gesetzt";
  langInvalidLicense = 'Der Lizenzschlüssel ist ungültig. Bitte überprüfe, ob Tippfehler vorliegen.';
  langNoInternet = 'Sie sind nicht mit dem Internet verbunden. Bitte stellen Sie eine Internetverbindung her, um die Lizenz zu aktivieren.';
  langNoServerConnection = 'Verbindung zum Server kann nicht hergestellt werden. Wenn dieser Fehler länger auftritt, versuchen Sie, die Software zu aktualisieren.';
  langInUse = 'Ein anderes Gerät benutzt das Programm gerade. Bitte schließen sie es, da nur ein Programm gleichzeigt die Lizenz nutzen kann.';
  langUpdateAvailable = 'Ein neues Update ist verfügbar. Es wird herunterladen...';
  langUpdateDone = 'Update heruntergeladen. Es wird beim Neustart installiert. Jetzt neustarten?';
  if(site == 'main') {
    document.getElementById("download-btn").innerHTML = "Generieren";
    document.getElementById("lang-settings").innerHTML = "Einstellungen";
    document.getElementById("lang-theme").innerHTML = "Theme";
    document.getElementById("lang-language").innerHTML = "Sprache";
    document.getElementById("help-title").innerHTML = "Speichern und importieren vom Makro/XML-File";
    document.getElementById("help-l1").innerHTML = 'Nach dem dein Makro generiert wurde, klicke auf "Download" um die XML Datei zu speichern.';
    document.getElementById("help-l2").innerHTML = "In Razer Synapse 3.0 gehe zu dem Makro Tab und klicke auf das Symbol mit dem Pfeil der in eine Box zeigt um den Makro zu importieren. Wähle die XML Datei die du gerade eben generiert hast.";
    document.getElementById("help-l3").innerHTML = 'Wähle eine beliebige Taste auf deiner Razer Tastatur oder Razer Maus, dann wähle Makro und dann deinen Makro aus den du eben importiert hast. Um den Makro auszuführen, drücke die Taste die du mit dem Makro verbunden hast.';
    document.getElementById("name").placeholder = "Name";
    document.getElementById("word").placeholder = "Text";
    document.getElementById("delay").placeholder = "Verzögerung";
  }
  else if(site == 'license') {
    document.getElementById("license-title").innerHTML = "Bitte Lizenz eingeben";
    document.getElementById("license").placeholder = "Lizenz";
    document.getElementById("submit").value = "Lizenz eingeben";
  }
}
