import { Navbar } from './components/Navbar.js';

// Define the routes, mapping each to an HTML file in the pages folder
const routes = {
  '/': 'pages/home.html',
  '/about': 'pages/about.html',
  '/menu': 'pages/menu.html',
  '/team': 'pages/team.html',
  '/gallery': 'pages/gallery.html',
  '/blog':'pages/blog.html',
  '/reservation': 'pages/reservation.html',
  '/contact':'pages/contact.html',
};

// Function to fetch and load HTML content for the current route
async function loadPage(path) {
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error('Page not found');
    return await response.text();
  } catch (error) {
    return `<div><h1>Error</h1><p>Page not found</p></div>`;
  }
}

// Function to render the current route's content
async function renderRoute() {
  const path = window.location.hash.slice(1) || '/';
  const pagePath = routes[path] || routes['/'];
  const content = await loadPage(pagePath);

  // Render Navbar and Page Content
  document.getElementById('app').innerHTML = `
    ${Navbar()}
    <main>${content}</main>
  `;
}

// Event listeners to render content when the hash changes or on initial load
window.addEventListener('hashchange', renderRoute);
window.addEventListener('load', renderRoute);


