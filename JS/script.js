'use strict';

// YouTube gallery

const videoYoutube = [
  'https://www.youtube.com/embed/FP0LxSLKYAE',
  'https://www.youtube.com/embed/VZhMjjHETGY',
  'https://www.youtube.com/embed/J0jjVD4334Q',
  'https://www.youtube.com/embed/9dcPOyULkjk',
  'https://www.youtube.com/embed/strhYZsS3nw',
  'https://www.youtube.com/embed/WnPMepQkAAc',
  'https://www.youtube.com/embed/p8kgg6rP-Tc',
  'https://www.youtube.com/embed/JGjzo7MB2oc',
  'https://www.youtube.com/embed/6avIL7jV38A',
  'https://www.youtube.com/embed/VuQI7mAzApY',
  'https://www.youtube.com/embed/QDRoxdtYQto',
  'https://www.youtube.com/embed/3EAirKb7HEk',
];

const gallery = document.querySelector('.gallery');

let galleryVideo = '';

const addVideoHTML = function (link) {
  galleryVideo += ` <div class='gallery-video'>
          <iframe
            class='gallery-yt-video'
            width='350'
            height='197'
            src=${link};
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
        </div>`;
};

for (let i = 0; i < videoYoutube.length; i++) {
  addVideoHTML(videoYoutube[i]);
}

gallery.innerHTML = galleryVideo;

console.log(gallery);

// Mobile navigation

const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});

// Smooth scrolling

const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const href = link.getAttribute('href');

    if (href === '#') window.scrollTo({ top: 0, behavior: 'smooth' });

    if ((href === '#') & href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }

    if (link.classList.contains('main-nav-link'))
      headerEl.classList.toggle('nav-open');
  });
});
