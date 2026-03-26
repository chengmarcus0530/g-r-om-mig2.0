// dropdown.js

const data = {
  web: {
    title: "Web Archives",
    text: "lorem1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  books: {
    title: "Books Collection",
    text: "lorem2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  video: {
    title: "Video Archive",
    text: "lorem3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  audio: {
    title: "Audio Library",
    text: "lorem4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  collections: {
    title: "Curated Collections",
    text: "lorem5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
};

const links = document.querySelectorAll('.site-nav a[data-category]');
const dropdownBox = document.getElementById('dropdown-box');
const dropdownTitle = document.getElementById('dropdown-title');
const dropdownText = document.getElementById('dropdown-text');

let currentOpen = null;

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const category = link.dataset.category;

    if (currentOpen === category) {
      dropdownBox.classList.add('hidden');
      currentOpen = null;
      return;
    }

    dropdownTitle.textContent = data[category].title;
    dropdownText.textContent = data[category].text;

    dropdownBox.classList.remove('hidden');
    currentOpen = category;
  });
});

document.addEventListener('click', e => {
  if (!e.target.closest('.site-nav') && !e.target.closest('#dropdown-box')) {
    dropdownBox.classList.add('hidden');
    currentOpen = null;
  }
});
