// Assignment 2 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
var filenames = [
  'flowers-pink',
  'flowers-purple',
  'flowers-red',
  'flowers-white',
  'flowers-yellow',
];

/* Functions
-------------------------------------------------- */
function createImgElement(attr) {
  var path = 'images/' + attr.file;
  var img = document.createElement('img');

  img.setAttribute('src', path);
  img.setAttribute('alt', attr.file);
  img.setAttribute('width', attr.width);
  img.setAttribute('height', attr.height);

  return img;
}

function updateFigureElement(name) {
  var file = name + '-large.jpg';
  var path = 'images/' + file;

  var img = document.querySelector('figure img');
  img.setAttribute('src', path);
  img.setAttribute('alt', file);

  var fig = document.querySelector('figure figcaption');
  fig.innerHTML = name.toUpperCase();
}

/* Initialize DOM
-------------------------------------------------- */
window.addEventListener('load', function () {
  filenames.forEach(function (name) {
    var attr = {
      file: name + '-small.jpg',
      width: 240,
      height: 160
    };
    // Create thumbnail img
    var img = createImgElement(attr);
    // Register click event
    img.addEventListener('click', function () {
      updateFigureElement(name);
    });
    // Add img tag
    var li = document.createElement('li');
    li.appendChild(img);
    // Add li tag    
    var ulEle = document.querySelector('#thumbnails');
    ulEle.appendChild(li);
  });
});
