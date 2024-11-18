
const apiKey = 'AIzaSyBNIXJRcXxHopEWgYj3f4vtKlN654s4-N8';

const comentarios = [];

document.addEventListener('DOMContentLoaded', ()=> {
  const body = document.querySelector('body');
  body.addEventListener('click', listener);
});

const listener = (event) => {
  if(event.target && event.target.id == 'obtenerComentarios') getComments();
  if(event.target && event.target.id == 'generate') writeResult();
}

function getVideoId(url) {
  const regex = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})|(?:https?:\/\/)?(?:www\.)?youtu\.be\/([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] || match[2] : null;
}

async function getComments() {

  const comentR = document.getElementById('result');

  const videoUrl = document.getElementById('videoUrl').value;
  const videoId = getVideoId(videoUrl);

  if (!videoId) {
    alert("Porfavor ingresa un enlace valido de Youtube")
    return;
  }
  const url = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${apiKey}&maxResults=10`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.items) {
      
      data.items.forEach(item => {
        const comment = item.snippet.topLevelComment.snippet.textDisplay;
        comentR.innerHTML += `<li>${comment}</li>`;
        console.log(comment);
        comentarios.push(comment);
      });
      active('active');
      console.log(comentarios);
    } else {

    }
  } catch (error) {
    console.error('Error:', error);
  }
}

