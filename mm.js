const imageUrls = [
  "./img/1.jpg",
  "./img/2.jpg",
  "./img/3.jpg",
  "./img/4.jpg",
  "./img/5.jpg",
  "./img/6.jpg",
  "./img/7.jpg",
  "./img/8.jpg",
  "./img/9.jpg",
  "./img/10.jpg",
  "./img/11.jpg",
  "./img/12.jpg",
  "./img/13.jpg",
  "./img/14.jpg",
  "./img/15.jpg",
  "./img/16.jpg",
];

const imagesContainer = document.querySelector('.images');
    const imageContainers = document.querySelectorAll('.image-container');
    let currentIndex = 0;

    function placeImagesRandomly() {
      imageContainers.forEach(container => container.innerHTML = '');
      const shuffledImages = [...imageUrls].sort(() => Math.random() - 0.5);

      shuffledImages.forEach((url, index) => {
        const img = document.createElement('img');
        img.src = url;
        img.classList.add('image-item');
        img.style.animationDelay = `${index * 0.1}s`;
        imageContainers[index].appendChild(img);
      });
    }

    function showImage(index) {
      currentIndex = (index + imageUrls.length) % imageUrls.length;
      placeImagesRandomly();
    }

    document.getElementById('left-icon').addEventListener('click', () => showImage(currentIndex - 1));
    document.getElementById('right-icon').addEventListener('click', () => showImage(currentIndex + 1));
    document.getElementById('rotate-icon').addEventListener('click', () => {
      imageContainers.forEach(container => container.classList.toggle('flipped'));
    });

    placeImagesRandomly();