window.addEventListener("DOMContentLoaded", async (event) => {
    const HEADER = `<header class="p-3 bg-dark text-white">
    <nav class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
      <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
        <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
          <use xlink:href="#bootstrap"></use>
        </svg>
      </a>

      <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
        <li><a href="/" class="nav-link px-2 text-secondary">Accueil</a></li>
        <li><a href="/cookies" class="nav-link px-2 text-white">Cookies</a></li>
        <li><a href="contact.html" class="nav-link px-2 text-white">Contact</a></li>
        <li><a href="nos-services.html" class="nav-link px-2 text-white">Nos services</a></li>
        <li><a href="apropos.html" class="nav-link px-2 text-white">A propos</a></li>
      </ul>

      <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
        <input type="search" class="form-control form-control-dark" placeholder="Search..." aria-label="Search">
      </form>

      <div class="text-end">
        <button type="button" class="btn btn-outline-light me-2">Login</button>
        <button type="button" class="btn btn-warning">Sign-up</button>
      </div>
    </nav>
  </header>`;
    const FOOTER = `<footer class="footer mt-auto py-3 bg-light">
  <div class="container">
    <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
      <li><a href="index.html" class="nav-link px-2 text-secondary">Accueil</a></li>
      <li><a href="cookies.html" class="nav-link px-2">Cookies</a></li>
      <li><a href="contact.html" class="nav-link px-2">Contact</a></li>
      <li><a href="cookies.html" class="nav-link px-2">Nos services</a></li>
      <li><a href="apropos.html" class="nav-link px-2">A propos</a></li>
    </ul>
  </div>
</footer>`;
    let temp = document.createElement('div');
    temp.innerHTML = HEADER;
    let htmlObject = temp.firstChild;
    document.getElementsByTagName('body')[0].prepend(htmlObject);
    temp = document.createElement('div');
    temp.innerHTML = FOOTER;
    htmlObject = temp.firstChild;
    document.getElementsByTagName('body')[0].append(htmlObject);
})