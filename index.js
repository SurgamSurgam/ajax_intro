document.addEventListener('DOMContentLoaded', () => {

    let button = document.querySelector('.button');
    let body = document.querySelector('body');

    let xhr = new XMLHttpRequest();

    function getRandomImage() {
      xhr.open('get', 'https://dog.ceo/api/breeds/image/random', true);
      xhr.send();
    }

    let result;
    let dogName = document.createElement('h1');
    let imgNode = document.createElement('img');

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        result = JSON.parse(xhr.response).message;
        let resultCopy = result.split('/');

        body.appendChild(imgNode);

        dogName.innerText = resultCopy[4];
        body.appendChild(dogName);

        imgNode.setAttribute('src', result);
      }
    }

  button.addEventListener('click', () => {
    getRandomImage();
  });
})
