# Simple Image Carousel

A minimal and lightweight JavaScript image carousel that displays 4 images with infinite looping functionality. When users navigate past the last image, the carousel automatically returns to the first image.

## Features

- Pure JavaScript implementation without any external dependencies
- Infinite looping through 4 images
- Next and Previous navigation buttons
- Smooth slide transitions
- Responsive design ready
- Lightweight and easy to integrate

## How It Works

The carousel uses CSS transforms to slide images horizontally. Each image is positioned absolutely within a container. The counter keeps track of the current image index, and when it reaches the end (after the 4th image), it resets to 0 to show the first image again.

## Installation

1. Clone this repository or download the files
2. Include the CSS and JavaScript files in your HTML
3. Add your images to the slider container

Author 
M.Junaid
    <button class="prev-btn" onclick="goPrev()">Previous</button>
    <button class="next-btn" onclick="goNext()">Next</button>
</div>
