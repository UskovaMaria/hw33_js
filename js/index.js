function showPostsList() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((posts) => {
      const postList = document.querySelector('.post-list__items');

      posts.forEach((post) => {
        const listItem = document.createElement('li');
        listItem.textContent = post.title;
        listItem.addEventListener('click', () => showPost(post.id));
        postList.appendChild(listItem);
      });
    });
}

function showPost(postId) {
  const overlay = document.querySelector('.overlay');
  const popup = document.querySelector('.popup');

  overlay.style.display = 'flex';
  
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((response) => response.json())
    .then((post) => {
      const popupTitle = document.querySelector('.popup__title');
      
      const popupContent = document.querySelector('.popup__content');
      
      popupTitle.textContent = post.title;
      popupContent.textContent = post.body;
      popup.style.display = 'block';
    });
}

function closePopup() {
  const overlay = document.querySelector('.overlay');
  const popup = document.querySelector('.popup');

  overlay.style.display = 'none';
  popup.style.display = 'none';
}

