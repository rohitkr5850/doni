// Array of movie image URLs (replace these with actual URLs of images)
const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg'
  ];
  
  let currentIndex = 0;
  
  // Function to update the slideshow image
  function updateImage() {
    const imageElement = document.getElementById('slideshowImage');
    imageElement.src = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
  }
  
  // Set the initial image and start the slideshow
  document.addEventListener('DOMContentLoaded', () => {
    updateImage();
    setInterval(updateImage, 2000); // Change image every 2000ms
  });