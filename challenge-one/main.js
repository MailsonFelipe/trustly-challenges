// Declaration of given links as consts
const EST = "https://worldclockapi.com/api/json/est/now";
const UTC = "https://worldclockapi.com/api/json/utc/now";
const CET = "https://worldclockapi.com/api/jsonp/cet/now?callback=mycallback";

// Function that prepares string to be displayed
function treats_json(object) {
  object = JSON.stringify(object, ",", "<br>"); // Replaces "," into lf
  object = object.replace(/['"]+/g, ""); // Takes all quotation marks
  object = object.replace(/['{}]+/g, ""); // Takes all { or }
  return object;
}

// Function to get json
async function get_json(url) {
  let data = null;
  try {
    // Init of promisse
    data = await (await fetch(url)).json();
    data = treats_json(data);
    document.getElementById("data").innerHTML = data; // Display
  } catch (e) {
    return "error";
  }
}

// Function to get jsonp
function get_jsonp(url) {
  let newURL = url.replace(url.split("=")[1], "jp_parser"); // Rename value of parameter
  // in order to have the same name of local funtion
  var script = document.createElement("script");
  script.src = newURL;
  document.body.appendChild(script);
}

// Function getter of data came from get_jspon requisition
function jp_parser(data) {
  data = treats_json(data);
  document.getElementById("data").innerHTML = data; // Display
}

// Function that observes the user choice
function get_choice() {
  var select = document.getElementById("list");
  var id = select.options[select.selectedIndex].id;

  // Choices
  switch (id) {
    case "0": // Case Eastern Standard Time
      document.getElementById("modal-title").innerHTML =
        "Eastern Standard Time";
      get_json(EST);
      break;

    case "1": // Case Coordinated Universal Time
      document.getElementById("modal-title").innerHTML =
        "Coordinated Universal Time";
      get_json(UTC);
      break;

    case "2": // Case Central European Standard Time
      document.getElementById("modal-title").innerHTML =
        "Central European Standard Time";
      get_jsonp(CET);
      break;
    default:
      break;
  }
}
