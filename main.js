const btn = document.getElementById('btn');
const frame = document.getElementById('frame');

// Using: 'The Cat API' https://thecatapi.com/

// Here's your API key : 01521186-bcd4-41e0-a99c-d338b5df4fc2
// Here's your user_id : izbwig

const url = "https://api.thecatapi.com/v1/images/search?size=small&mime_types=jpg,png01521186-bcd4-41e0-a99c-d338b5df4fc2";

function ajax_get() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            frame.src = JSON.parse(this.responseText)[0]["url"];
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
};