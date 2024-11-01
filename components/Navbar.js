
export function Navbar() {
  
  return `
      <header class="fixed-top">
      <nav class="navbar  navbar-expand-lg  ">
    <div class="container">
      <a class="navbar-brand logo"  href="#/"  data-link> JONG NHAM </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>
  
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto w-100 justify-content-end ">
          <li class="nav-item active" >
            <a class="nav-link" href="#/" data-link
              >Home <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/about" data-link>About</a>
          </li>
  
          <li class="nav-item">
            <a class="nav-link" href="#/menu" data-link>Menu</a>
          </li>
  
          <li class="nav-item">
            <a class="nav-link" href="#/team" data-link>Team</a>
          </li>
  
          <li class="nav-item">
            <a class="nav-link" href="#/gallery" data-link>Gallery</a>
          </li>
  
          <li class="nav-item">
            <a class="nav-link" href="#/blog" data-link>Blog</a>
          </li>
  
          <li class="nav-item">
            <a class="nav-link" href="#/reservation" data-link>Reservation</a>
          </li>
  
          <li class="nav-item contactbox">
            <a class="nav-link" href="#/contact" data-link>Contact</a>
          </li>
          <li class="nav-item ">
            <a class="nav-link icon" href="#/contact" data-link><i class="fas fa-search"></i></a>
          </li>
          <li class="nav-item ">
            <a class="nav-link icon" href="#/contact" data-link><i class="fa-solid fa-cart-shopping"></i></a>
          </li>
          
        </ul>
        
      </div>
      
    </div>
    
  </nav>
  </header>
    `;
}
