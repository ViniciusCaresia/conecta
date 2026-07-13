// "assets/images/fotos/bg1.jpeg",
const images = [
  "assets/images/banner/1.jpg",
  "assets/images/banner/2.jpg",
  "assets/images/banner/3.jpg",
  "assets/images/banner/4.jpg"
];

let current = 0;
const home = document.getElementById("home");
const overlay = home ? home.querySelector('.fade-overlay') : null;

if (home) {
setInterval(() => {
  // ativa escurecimento
  home.classList.add('fadeing');

  // espera a transição escurecer (1s)
  setTimeout(() => {
    current = (current + 1) % images.length;
    home.style.backgroundImage = `url(${images[current]})`;
    home.setAttribute('data-jarallax-original-styles', `url(${images[current]})`);

    // remove o escurecimento
    home.classList.remove('fadeing');
  }, 1000);
}, 8000);
}


window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
    navLinks.forEach(link => link.classList.remove('active'));
    const homeLink = document.querySelector('.navbar-nav .nav-link[href="#home"], .nav-link[href="index.html"]');
    if (homeLink) {
      homeLink.classList.add('active');
    }
  }
});



// PRELOADER
function preLoader() {
  const preloader = select('.preloader');
  if (!isVariableDefined(preloader)) {
    return;
  }

  window.addEventListener('load', function () {
    preloader.className += ' animate__animated animate__fadeOut';
    setTimeout(function () {
      preloader.style.display = 'none';
    }, 200);

    // Mostra o modal apenas quando a página estiver totalmente carregada
    const modalElement = document.getElementById('myModal');
    if (modalElement && window.bootstrap) {
      const myModal = new bootstrap.Modal(modalElement, {
        keyboard: false
      });
      //myModal.show();
    }
  });
}


// WAVE CANVAS
function waveCanvas() {
  var canvas = document.getElementById('waveCanvas')
  if (isVariableDefined(canvas)) {
    var ctx = canvas.getContext('2d')

    function resizeCanvas() {
      canvas.width = canvas.parentNode.offsetWidth
      canvas.height = window.innerWidth < 576 ? 180 : (window.innerWidth < 992 ? 210 : 240)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    let step = 0
    const lines = 4

    function loop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      step += .8
      for (let i = 0; i < lines; i++) {
        ctx.fillStyle = i === 0 ? 'rgba(255,255,255,.96)' : 'rgba(255,255,255,.72)'
        var angle = (step + i * 180 / lines) * Math.PI / 180
        var deltaHeight = Math.sin(angle) * 42
        var deltaHeightRight = Math.cos(angle) * 34
        var base = canvas.height * .38
        ctx.beginPath()
        ctx.moveTo(0, base + deltaHeight)
        ctx.bezierCurveTo(canvas.width / 2, base + deltaHeight - 34, canvas.width / 2, base + deltaHeightRight - 34, canvas.width, base + deltaHeightRight)
        ctx.lineTo(canvas.width, canvas.height)
        ctx.lineTo(0, canvas.height)
        ctx.lineTo(0, base + deltaHeight)
        ctx.closePath()
        ctx.fill()
      }
      requestAnimationFrame(loop)
    }
    loop()
  }
}


// BACK TO TOP
function backToTop() {
  const backBtn = document.querySelector('.back-top');

  if (backBtn) {
    // Mostra/esconde o botão baseado na posição do scroll
    window.addEventListener('scroll', function () {
      if (window.pageYOffset >= 500) {
        backBtn.classList.add('btn-show');
      } else {
        backBtn.classList.remove('btn-show');
      }
    });

    // Rola suavemente para o topo quando clicado
    backBtn.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}


// TINY SLIDER
function tinySlider() {
  var $carousel = select('.tiny-slider-inner');
  if (isVariableDefined($carousel)) {
    var tnsCarousel = selectAll('.tiny-slider-inner');
    tnsCarousel.forEach(slider => {
      var slider1 = slider;
      var sliderMode = slider1.getAttribute('data-mode') ? slider1.getAttribute('data-mode') : 'carousel';
      var sliderAxis = slider1.getAttribute('data-axis') ? slider1.getAttribute('data-axis') : 'horizontal';
      var sliderSpace = slider1.getAttribute('data-gutter') ? slider1.getAttribute('data-gutter') : 30;
      var sliderEdge = slider1.getAttribute('data-edge') ? slider1.getAttribute('data-edge') : 0;

      var sliderItems = slider1.getAttribute('data-items') ? slider1.getAttribute('data-items') : 4;
      var sliderItemsXl = slider1.getAttribute('data-items-xl') ? slider1.getAttribute('data-items-xl') : Number(sliderItems);
      var sliderItemsLg = slider1.getAttribute('data-items-lg') ? slider1.getAttribute('data-items-lg') : Number(sliderItemsXl);
      var sliderItemsMd = slider1.getAttribute('data-items-md') ? slider1.getAttribute('data-items-md') : Number(sliderItemsLg);
      var sliderItemsSm = slider1.getAttribute('data-items-sm') ? slider1.getAttribute('data-items-sm') : Number(sliderItemsMd);
      var sliderItemsXs = slider1.getAttribute('data-items-xs') ? slider1.getAttribute('data-items-xs') : Number(sliderItemsSm);

      var sliderSpeed = slider1.getAttribute('data-speed') ? slider1.getAttribute('data-speed') : 500;
      var sliderautoWidth = slider1.getAttribute('data-autowidth') === 'true';
      var sliderArrow = slider1.getAttribute('data-arrow') !== 'false';
      var sliderDots = slider1.getAttribute('data-dots') !== 'false';

      var sliderAutoPlay = slider1.getAttribute('data-autoplay') !== 'false';
      var sliderAutoPlayTime = slider1.getAttribute('data-autoplaytime') ? slider1.getAttribute('data-autoplaytime') : 4000;
      var sliderHoverPause = slider1.getAttribute('data-hoverpause') === 'true';
      var sliderLoop = slider1.getAttribute('data-loop') !== 'false';
      var sliderRewind = slider1.getAttribute('data-rewind') === 'true';
      var sliderAutoHeight = slider1.getAttribute('data-autoheight') === 'true';
      var sliderfixedWidth = slider1.getAttribute('data-fixedwidth') === 'true';
      var sliderTouch = slider1.getAttribute('data-touch') !== 'false';
      var sliderDrag = slider1.getAttribute('data-drag') !== 'false';

      var ifRtl = document.getElementsByTagName("html")[0].getAttribute("dir");
      var sliderDirection;
      if (ifRtl === 'rtl') {
        sliderDirection = 'rtl';
      }

      var tnsSlider = tns({
        container: slider,
        mode: sliderMode,
        axis: sliderAxis,
        gutter: sliderSpace,
        edgePadding: sliderEdge,
        speed: sliderSpeed,
        autoWidth: sliderautoWidth,
        controls: sliderArrow,
        nav: sliderDots,
        autoplay: sliderAutoPlay,
        autoplayTimeout: sliderAutoPlayTime,
        autoplayHoverPause: sliderHoverPause,
        autoplayButton: false,
        autoplayButtonOutput: false,
        controlsPosition: 'top',
        navPosition: 'top',
        autoplayPosition: 'top',
        controlsText: [
          '‹',
          '›'
        ],
        loop: sliderLoop,
        rewind: sliderRewind,
        autoHeight: sliderAutoHeight,
        fixedWidth: sliderfixedWidth,
        touch: sliderTouch,
        mouseDrag: sliderDrag,
        arrowKeys: true,
        items: sliderItems,
        textDirection: sliderDirection,
        responsive: {
          0: {
            items: Number(sliderItemsXs)
          },
          576: {
            items: Number(sliderItemsSm)
          },
          768: {
            items: Number(sliderItemsMd)
          },
          992: {
            items: Number(sliderItemsLg)
          },
          1200: {
            items: Number(sliderItemsXl)
          }
        }
      });
    });
  }
}


// SCROLL SPY
function scrollSpy() {
  const navLinks = Array.from(document.querySelectorAll('.navbar-nav .nav-link[href^="#"]'));
  const navbarCollapse = document.querySelector('.navbar-collapse');

  if (!navLinks.length) {
    return;
  }

  const sections = navLinks
    .map(link => {
      const id = link.getAttribute('href');
      return id && id.length > 1 ? document.querySelector(id) : null;
    })
    .filter(Boolean);

  if (!sections.length) {
    return;
  }

  function setActiveBySection() {
    const header = document.querySelector('.site-header');
    const headerOffset = header ? header.offsetHeight + 32 : 120;
    const scrollPosition = window.scrollY + headerOffset;
    let activeId = sections[0].id;

    sections.forEach(section => {
      if (section.offsetTop <= scrollPosition) {
        activeId = section.id;
      }
    });

    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${activeId}`);
    });
  }

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        setActiveBySection();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  window.addEventListener('resize', setActiveBySection);
  window.addEventListener('hashchange', setActiveBySection);

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        const collapseInstance = bootstrap.Collapse.getOrCreateInstance(navbarCollapse, { toggle: false });
        collapseInstance.hide();
      }

      setTimeout(setActiveBySection, 80);
    });
  });

  setActiveBySection();
}

document.addEventListener("DOMContentLoaded", function () {
  preLoader();
  waveCanvas();
  backToTop();
  scrollSpy();
  tinySlider();
});