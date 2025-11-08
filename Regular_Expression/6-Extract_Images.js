const files = [
    "video.mp4",
    "image.jpg",
    "music.mp3",
    "document.pdf",
    "clip.mov",
    "photo.jpg",
    "presentation.pptx",
    "archive.zip",
    "animation.gif",
    "movie.mkv",
    "song.wav",
    "screenshot.jpeg"
  ];
  
let regex = /\.(jpg|jpeg)$/i;
  
let matches = files.filter(file => regex.test(file));
  
console.log(matches);