
// Client ID and API key from the Developer Console
var CLIENT_ID = '807405985371-pmfbcqkvd4p1fied02e2k0pdlsr6tgms.apps.googleusercontent.com';
var API_KEY = 'AIzaSyBmiTvmgAPTTZEcSBVVy3xSHXNxCRdRA9I';

// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";

/**
 *  On load, called to load the auth2 library and API client library.
 */
function handleClientLoad() {
  gapi.load('client', initClient);
}

/**
 *  Initializes the API client library and sets up sign-in state
 *  listeners.
 */
function initClient() {
  gapi.client.init({
    apiKey: API_KEY,
    clientId: CLIENT_ID,
    discoveryDocs: DISCOVERY_DOCS,
    scope: SCOPES
  }).then(function () {
    listDetails();
  }, function(error) {
    appendPre(JSON.stringify(error, null, 2));
  });
}

/**
 * Append a pre element to the body containing the given message
 * as its text node. Used to display the results of the API call.
 *
 * @param {string} message Text to be placed in pre element.
 */
function appendPre(message) {
  var pre = document.getElementById('content');
  var textContent = document.createTextNode(message + '\n');
  pre.appendChild(textContent);
}

/**
 * Print the names and majors of students in a sample spreadsheet:
 * https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 */
function listDetails() {
  gapi.client.sheets.spreadsheets.values.get({
    spreadsheetId: '1rx0h6ejTAwF0acmcd-0FbC0baeuIfdQBLFVdaDJGxTk',
    range: 'Sheet1',
  }).then(function(response) {
    var range = response.result;
    if (range.values.length > 0) {
      for (i = 0; i < range.values.length; i++) {
        var row = range.values[i];
        // Print columns A and E, which correspond to indices 0 and 4.
        document.getElementById('EventTitle').appendChild(document.createTextNode(row[0]));
        document.getElementById('EventDate').appendChild(document.createTextNode(row[1]));
        document.getElementById('EventStart').appendChild(document.createTextNode(row[2]));
        document.getElementById('EventEnd').appendChild(document.createTextNode(row[3]));
        document.getElementById('EventLocation').appendChild(document.createTextNode(row[4]));
        document.getElementById('EventDescription').appendChild(document.createTextNode(row[5]));
      }
    } else {
      appendPre('No data found.');
    }
  }, function(response) {
    appendPre('Error: ' + response.result.error.message);
    for (i = 0; i < range.values.length; i++) {
      var row = range.values[i];
      // Print columns A and E, which correspond to indices 0 and 4.
      document.getElementById('EventTitle').appendChild(document.createTextNode(row[0]));
      document.getElementById('EventDate').appendChild(document.createTextNode(row[1]));
      document.getElementById('EventStart').appendChild(document.createTextNode(row[2]));
      document.getElementById('EventEnd').appendChild(document.createTextNode(row[3]));
      document.getElementById('EventLocation').appendChild(document.createTextNode(row[4]));
      document.getElementById('EventDescription').appendChild(document.createTextNode(row[5]));
    }
  });
}