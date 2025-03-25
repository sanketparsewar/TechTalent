function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

function getDownloadLink(name, certificateId) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();

  for (var i = 1; i < data.length; i++) { // Start from 1 to skip headers
    if (data[i][5] === name && data[i][7] == certificateId) {
      return data[i][0]; // Return the download link
    }
  }
  return 'Invalid data';
}