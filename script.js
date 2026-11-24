/**
 * ARTEK ELEVADORES - CONTROLADOR PRINCIPAL
 * Arquitetura modular seguindo princípios SOLID (SRP / OCP) e Clean Code.
 */

// ==========================================
// 1. MÓDULO DE COMPONENTES GLOBAIS (HEADER & FOOTER)
// ==========================================
const GlobalLayout = (() => {
  const HEADER_TEMPLATE = `
    <header class="navbar navbar-expand-lg navbar-dark w-100">
      <div class="container">
        <a class="navbar-brand" href="index.html#topo">
          <img src="assets/img/logo-white-no-tag.png" alt="ARTEK Elevadores" class="logo">
        </a>
        
        <button class="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#menuArtek" aria-controls="menuArtek" aria-expanded="false" aria-label="Abrir menu">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-end" id="menuArtek">
          <nav aria-label="Navegação principal">
            <ul class="navbar-nav gap-lg-4 text-center mt-3 mt-lg-0">
              <li class="nav-item"><a class="nav-link" href="index.html#topo">Home</a></li>
              <li class="nav-item"><a class="nav-link" href="index.html#servicos">Serviços</a></li>
              <li class="nav-item"><a class="nav-link" href="index.html#clientes">Clientes</a></li>
              <li class="nav-item"><a class="nav-link" href="index.html#como-funciona">Sobre nós</a></li>
              <li class="nav-item"><a class="nav-link" href="index.html#contato">Fale conosco</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  `;

  const FOOTER_TEMPLATE = `
    <footer class="rodape">
      <div class="container">
        <div class="row g-5 pb-5 border-bottom">
          
          <!-- Coluna 1: Marca e Redes Sociais -->
          <div class="col-12 col-lg-4">
            <a href="index.html#topo" class="d-inline-block mb-4">
              <img src="assets/img/logo-artek-colorido.png" alt="ARTEK Elevadores" class="rodape-logo mb-0">
            </a>
            <div class="d-flex gap-3 justify-content-center justify-content-lg-start">
              <a href="https://www.instagram.com/artekelevadores/" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Instagram ARTEK">
                <img src="assets/img/icon-inst.png" alt="">
              </a>
              <a href="https://www.facebook.com/people/ARTEK-Elevadores/61593385235680/" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Facebook ARTEK">
                <img src="assets/img/icon-fb.png" alt="">
              </a>
              <a href="https://www.linkedin.com/company/artek-elevadores/home/?viewAsMember=true" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="LinkedIn ARTEK">
                <img src="assets/img/icon-lin.png" alt="">
              </a>
            </div>
          </div>

          <!-- Coluna 2: Links Rápidos -->
          <div class="col-12 col-md-5 col-lg-3 links-col">
            <h3>Links</h3>
            <ul class="rodape-links">
              <li><a href="index.html#topo">Home</a></li>
              <li><a href="index.html#servicos">Serviços</a></li>
              <li><a href="index.html#clientes">Clientes</a></li>
              <li><a href="index.html#como-funciona">Sobre nós</a></li>
              <li><a href="index.html#contato">Fale conosco</a></li>
            </ul>
          </div>

<!-- Coluna 3: Informações de Contato -->
          <div class="col-12 col-md-7 col-lg-4 ms-lg-auto contato-col">
            <h3 class="text-center text-lg-start">Fale com a ARTEK Elevadores</h3>
            <div class="d-flex flex-column align-items-center align-items-lg-start gap-3">
              <div class="info-item justify-content-center justify-content-lg-start">
                <img src="assets/img/icon-fone.png" alt="" class="info-icon">
                <div class="info-texto text-center text-lg-start">
                  <span class="telefone-destaque">0800 031 0304</span>
                  <span class="telefone-sub">(Atendimento 24h em todo Litoral Paulista)</span>
                </div>
              </div>

              <div class="info-item justify-content-center justify-content-lg-start">
                <img src="assets/img/icon-intern.png" alt="" class="info-icon">
                <div class="info-texto text-center text-lg-start">
                  <p>contato@artekelevadores.com.br</p>
                  <p>www.artekelevadores.com.br</p>
                </div>
              </div>

              <div class="info-item justify-content-center justify-content-lg-start">
                <img src="assets/img/icon-location.png" alt="" class="info-icon">
                <div class="info-texto text-center text-lg-start">
                  <p>Av. Dezenove de Maio, 367 -<br>Jardim Albatroz, Bertioga - SP, 11250-000</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- Barra Inferior -->
        <div class="rodape-bottom pt-4 d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
          <p class="mb-0">Copyright &amp; Design by @Marconemidia</p>
          <div class="rodape-legal">
            <a href="termos_de_uso.html">Termos de uso</a>
            <span class="separador">|</span>
            <a href="politica_privacidade.html">Política de privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  `;

  const init = () => {
    const headerSlot = document.getElementById('header-global');
    const footerSlot = document.getElementById('footer-global');

    if (headerSlot) headerSlot.innerHTML = HEADER_TEMPLATE;
    if (footerSlot) footerSlot.innerHTML = FOOTER_TEMPLATE;

    if (typeof AOS !== 'undefined') {
      AOS.init({ duration: 800, easing: 'ease-out-cubic', once: true, offset: 60 });
    }
  };

  return { init };
})();

// ==========================================
// 2. MÓDULO DE ANIMAÇÕES DE REVELAÇÃO (.escondido -> .mostrar)
// ==========================================
const ScrollRevealController = (() => {
  const init = () => {
    const elementos = document.querySelectorAll('.escondido');
    if (!elementos.length) return;

    const observador = new IntersectionObserver((entradas, obs) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('mostrar');
          obs.unobserve(entrada.target);
        }
      });
    }, { threshold: 0.15 });

    elementos.forEach((el) => observador.observe(el));
  };

  return { init };
})();

// ==========================================
// 3. MÓDULO SHOWCASE "PORQUE NOS ESCOLHER!" (OCP)
// ==========================================
const ShowcaseController = (() => {
  const INTERVALO_MS = 4000;

  const init = () => {
    const secao = document.getElementById('porque-escolher');
    const gatilhos = Array.from(document.querySelectorAll('[data-showcase-trigger]'));
    const alvos = Array.from(document.querySelectorAll('[data-showcase-target]'));

    if (!secao || !gatilhos.length || !alvos.length) return;

    let indiceAtual = 0;
    let timerId = null;

    const selecionarSlide = (novoIndice) => {
      indiceAtual = novoIndice;
      const chave = String(novoIndice);

      gatilhos.forEach((gatilho) => {
        const ativo = gatilho.dataset.showcaseTrigger === chave;
        gatilho.classList.toggle('is-active', ativo);
        gatilho.setAttribute('aria-selected', String(ativo));
      });

      alvos.forEach((alvo) => {
        const ativo = alvo.dataset.showcaseTarget === chave;
        alvo.classList.toggle('is-active', ativo);
      });
    };

    const pararLoop = () => {
      if (timerId) {
        clearInterval(timerId);
        timerId = null;
      }
    };

    const iniciarLoop = () => {
      pararLoop();
      timerId = setInterval(() => {
        selecionarSlide((indiceAtual + 1) % gatilhos.length);
      }, INTERVALO_MS);
    };

    gatilhos.forEach((gatilho) => {
      const indice = Number(gatilho.dataset.showcaseTrigger);
      ['mouseenter', 'click', 'focus'].forEach((evento) => {
        gatilho.addEventListener(evento, () => {
          pararLoop();
          selecionarSlide(indice);
        });
      });
    });

    secao.addEventListener('mouseenter', pararLoop);
    secao.addEventListener('mouseleave', iniciarLoop);

    iniciarLoop();
  };

  return { init };
})();

// ==========================================
// 4. MÓDULO CARROSSEL DE CLIENTES
// ==========================================
const ClientesCarouselController = (() => {
  const LARGURA_CARD = 260;
  const GAP_CARD = 35;

  const init = () => {
    const track = document.querySelector('.carrossel-track');
    const wrapper = document.querySelector('.carrossel-wrapper');
    const cards = document.querySelectorAll('.cliente-card');
    const dots = document.querySelectorAll('.dot');
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');

    if (!track || !wrapper || !cards.length) return;

    let indiceAtual = 2;

    const atualizar = (novoIndice) => {
      indiceAtual = (novoIndice + cards.length) % cards.length;

      cards.forEach((card, i) => card.classList.toggle('ativo', i === indiceAtual));
      dots.forEach((dot, i) => dot.classList.toggle('ativo', i === indiceAtual));

      const centroCard = indiceAtual * (LARGURA_CARD + GAP_CARD) + LARGURA_CARD / 2;
      const deslocamento = wrapper.offsetWidth / 2 - centroCard;
      track.style.transform = `translateX(${deslocamento}px)`;
    };

    if (btnNext) btnNext.addEventListener('click', () => atualizar(indiceAtual + 1));
    if (btnPrev) btnPrev.addEventListener('click', () => atualizar(indiceAtual - 1));

    cards.forEach((card, i) => card.addEventListener('click', () => atualizar(i)));
    dots.forEach((dot, i) => dot.addEventListener('click', () => atualizar(i)));

    window.addEventListener('load', () => atualizar(indiceAtual));
    window.addEventListener('resize', () => atualizar(indiceAtual));
  };

  return { init };
})();

// ==========================================
// 5. MÓDULO DE ENVIO DO FORMULÁRIO (EMAILJS)
// ==========================================




const ContactFormController = (() => {
  const PUBLIC_KEY = 'nOimYNtQE_TWIiDr4';
  const SERVICE_ID = 'service_yvt8rra';
  const TEMPLATE_ID = 'template_gns4pqr';

  const init = () => {
    const form = document.querySelector('.contato-form');
    if (!form) return;

    // Inicializa o EmailJS com sua chave pública
    emailjs.init({ publicKey: PUBLIC_KEY });

    form.addEventListener('submit', async (evento) => {
      evento.preventDefault();

      const btn = form.querySelector('.btn-enviar') || form.querySelector('button[type="submit"]');
      const textoOriginal = btn.innerText;

      btn.innerText = 'Enviando...';
      btn.disabled = true;

      try {
        // Envia todos os campos do form diretamente para o template
        await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form);

        const inputNext = form.querySelector('input[name="_next"]');

        if (inputNext && inputNext.value) {
          window.location.href = inputNext.value;
        } else {
          btn.innerText = 'Mensagem Enviada! ✓';
          btn.style.backgroundColor = '#198754';
          form.reset();

          setTimeout(() => {
            btn.innerText = textoOriginal;
            btn.style.backgroundColor = '';
            btn.disabled = false;
          }, 4000);
        }
      } catch (erro) {
        console.error('Erro EmailJS:', erro);
        alert('Ocorreu um erro ao enviar. Verifique sua conexão ou contate pelo WhatsApp.');
        btn.innerText = textoOriginal;
        btn.disabled = false;
      }
    });
  };

  return { init };
})();

// Inicializa o formulário de contato
ContactFormController.init();


// ==========================================
// 6. MÓDULO DE TRANSIÇÕES ENTRE PÁGINAS DE SERVIÇOS
// ==========================================
const PageTransitionController = (() => {
  const STORAGE_KEY = 'artek_direcao_slide';
  const PAGINAS = ['modernizacao.html', 'elevadores_novos.html', 'manutencao.html'];
  const BANNERS = [
    'assets/img/apertando o botão.webp',
    'assets/img/elevador.webp',
    'assets/img/bg_tecnico_analisando_elevador.webp'
  ];

  const preCarregarRecursos = () => {
    PAGINAS.forEach((href) => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = href;
      document.head.appendChild(link);
    });

    BANNERS.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  };

  const aplicarAnimacaoEntrada = () => {
    const direcao = sessionStorage.getItem(STORAGE_KEY);
    const heroInterno = document.querySelector('.mod-hero-content, .novos-hero-content, .manut-hero-content');

    if (!direcao || !heroInterno) return;

    heroInterno.removeAttribute('data-aos');
    heroInterno.classList.remove('escondido', 'delay-1');
    document.body.classList.add(direcao === 'direita' ? 'entrada-direita' : 'entrada-esquerda');
    sessionStorage.removeItem(STORAGE_KEY);
  };

  const init = () => {
    preCarregarRecursos();
    aplicarAnimacaoEntrada();

    document.querySelectorAll('.mod-seta').forEach((seta) => {
      seta.addEventListener('click', (evento) => {
        evento.preventDefault();
        const destino = seta.getAttribute('href');
        const irParaDireita = seta.classList.contains('mod-seta-dir');

        document.body.classList.add(irParaDireita ? 'saindo-esquerda' : 'saindo-direita');
        sessionStorage.setItem(STORAGE_KEY, irParaDireita ? 'direita' : 'esquerda');

        setTimeout(() => {
          window.location.href = destino;
        }, 260);
      });
    });
  };

  return { init };
})();

// ==========================================
// INICIALIZAÇÃO DA APLICAÇÃO
// ==========================================
GlobalLayout.init();
document.addEventListener('DOMContentLoaded', () => {
  ScrollRevealController.init();
  ShowcaseController.init();
  ClientesCarouselController.init();
  PageTransitionController.init();
});