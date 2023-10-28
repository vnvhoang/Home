document.addEventListener("DOMContentLoaded", function () {
    // Get the current page's filename (e.g., "index.html" or "resume.html")
    var currentFileName = location.pathname.split('/').slice(-1)[0];

    // Add an "active" class to the sub-page link that corresponds to the current page
    var subpageLink = document.querySelector(`a[href="${currentFileName}"]`);
    if (subpageLink) {
        subpageLink.classList.add("active");
    }

    // Array of background images
    var backgroundImages = [
        'Background1.jpg',
        'Background2.jpg',
        'Background3.jpg'
        // Add more image URLs as needed
    ];

    var currentImageIndex = 0;
    var body = document.body;

    function changeBackgroundImage() {
        body.style.backgroundImage = `url('${backgroundImages[currentImageIndex]}')`;
        currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
    }

    // Change background image every 1 minute (60000 milliseconds)
    setInterval(changeBackgroundImage, 0.5*60000);
});
