'use strict';

const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const schedule = document.querySelector('.schedule');

let scheduleDays = '';

const addScheduleHTML = function (day) {
  let iconName = 'people-outline';
  let contentName = 'Multiplayer with Friends';
  let dayType = 'days';

  if (day === 'Wednesday') {
    iconName = 'person-outline';
    contentName = 'Singleplayer';
  } else if (day === 'Friday') {
    iconName = 'cash-outline';
    contentName = 'Free to Play Friday';
    dayType = 'days days-friday schedule-friday';
  }

  scheduleDays += `<div class="${dayType}">
      <p class="schedule-days">${day}</p>
      <p class="schedule-hours">19:00-23:00</p>
      <ion-icon class="schedule-icon" name="${iconName}">
      </ion-icon>
      <p class="schedule-content">${contentName}</p>
     </div>`;
};

weekdays.forEach(day => addScheduleHTML(day));

schedule.innerHTML = scheduleDays;

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
  galleryVideo += `<div class='gallery-video'>
      <iframe
        class='gallery-yt-video'
        width='350'
        height='197'
        src=${link};
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen>
      </iframe>
     </div>`;
};

videoYoutube.forEach(element => addVideoHTML(element));

gallery.innerHTML = galleryVideo;

// Mobile navigation

const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});

// Smooth scrolling

const allLinks = document.querySelectorAll('.main-nav-link');

// allLinks.forEach(function (link) {
//   link.addEventListener('click', function (e) {
//     e.preventDefault();
//     const href = link.getAttribute('href');

//     if (href === '#') window.scrollTo({ top: 0, behavior: 'smooth' });

//     if ((href === '#') & href.startsWith('#')) {
//       const sectionEl = document.querySelector(href);
//       sectionEl.scrollIntoView({ behavior: 'smooth' });
//     }

//     if (link.classList.contains('main-nav-link'))
//       headerEl.classList.toggle('nav-open');
//   });
// });

allLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const href = link.getAttribute('href');
    const sectionEl = document.querySelector(href);
    sectionEl.scrollIntoView({ behavior: 'smooth' });
  });
});
