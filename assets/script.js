const navMenu = document.querySelector('#nav-menu');
    navToggle = document.querySelector('#nav-toggle');
    navClose = document.querySelector('#nav-close');

    /* ====== MENU SHOW ======= */

    //Validar se existe constante
    if(navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu');
        })
    }

    /* ======= MENU HIDDEN ======= */
    //Validar se existe constante
    if(navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        })
    }


    /* ============= REMOVE MENU MOBILE ============= */
    const navLink = document.querySelectorAll('.nav-link');

    const linkAction = () => {
        const navMenu = document.querySelector('#nav-menu');
        // Quando Clicarmos nas nav-links, Vamos remover o Show-menu
        navMenu.classList.remove('show-menu');
    }
    navLink.forEach(n => n.addEventListener('click', linkAction))

    /* =============== ADD TO BLUR TO HEADER ================= */ 
    const blurHeader = () => {
        const header = document.querySelector("#header");
        //quando a rolagem for maior que 50 de altura da janela de visualização, adicione a classe de cabeçalho de desfoque a
        this.scrollY >= 50 ? header.classList.add('blur-header')
                            :header.classList.remove('blur-header')
    }

    window.addEventListener('scroll', blurHeader)
  
    // =============== SHOW SCROLL UP =============
    const scrollUp = () => {
        const scrollUp = document.getElementById('scroll-up');
        // Quando o scroll atingir a altura de 350, irá adicionar a classe para  o efeito.
        this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                            : scrollUp.classList.remove('show-scroll');
    };
    window.addEventListener('scroll', scrollUp);

    // ========== SCROLL SECTION ACTIVE LINKS ============
   const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute('id');
    const sectionClass = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);

    if (scrollY > sectionTop && scrollY <= sectionTop + current.offsetHeight) {
      sectionClass.classList.add('active-link');
    } else {
      sectionClass.classList.remove('active-link');
    }
  });
};
window.addEventListener('scroll', scrollActive);