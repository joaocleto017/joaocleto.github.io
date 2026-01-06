// ====================== VANTA BACKGROUND ======================
    VANTA.NET({
      el: "#vanta-bg",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200,
      minWidth: 200,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0xf59e0b,        // vermelho principal
      backgroundColor: 0x1a0000, // fundo escuro avermelhado
      points: 12,
      maxDistance: 28,
      spacing: 16
    });

    // ====================== ANIMAÇÃO FOTO SOBRE MIM ======================
    gsap.to(".foto-sobre", {
      scrollTrigger: {
        trigger: "#sobre",
        start: "top 70%",
        toggleActions: "play none none reverse"
      },
      opacity: 1,
      y: 0,
      duration: 1.4,
      ease: "power3.out",
      delay: 0.3
    });

    // ====================== ANIMAÇÕES GERAIS ======================
    gsap.from("h1", { y: -100, opacity: 0, duration: 1.5, ease: "bounce.out" });
    gsap.from("section", { y: 80, opacity: 0, duration: 1, stagger: 0.2, ease: "power2.out" });

    // ====================== BARRAS DE HABILIDADES ======================
    gsap.to(".skill-bar", {
      width: (i, el) => el.parentElement.previousElementSibling.lastElementChild.textContent,
      duration: 1.8,
      ease: "power3.out",
      scrollTrigger: { trigger: ".skill-bar", start: "top 80%" },
      stagger: 0.15
    });

    // ====================== HOVER NOS PROJETOS ======================
    document.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('mouseenter', () => gsap.to(card, { y: -12, duration: 0.4 }));
      card.addEventListener('mouseleave', () => gsap.to(card, { y: 0, duration: 0.4 }));
    });

    // ====================== DADOS DOS PROJETOS ======================
    const projects = {
      video1: {
        type: "video",
        title: "Creative Istanbul",
        description: "O conceito do vídeo para o trabalho apresentado era a redução e a seleção de partes de um vídeo para a criação deste.",
        video: "https://www.youtube.com/embed/BIRUbjRrYEM?si=YaxfeWKITXx3lLLk"
      },
      video2: {
        type: "video",
        title: "Ghost in the shell Sound Redesign",
        description: "Este trabalho foi consebido para conseguir criar um novo design de som para a intro do filme Ghost In The Shell.",
        video: "https://www.youtube.com/embed/WsiV34MqeBA?si=jQiri3Hf5AVQ3EEo"
      },
      video3: {
        type: "video",
        title: "Como verificar Fake news",
        description: "Este vídeo foi um trabalho para intuito de E-Learnig, em grupo fizemos dois vídeos sobre as fake news e eu fiquei encarregue deste vídeo.",
        video: "https://www.youtube.com/embed/WWTjkFjfu6Q?si=rPOEG_GPAfJ3ci6X"
      },
      video4: {
        type: "video",
        title: "Noticiário planetário",
        description: "Este vídeo foi criado para realizar um trabalho de criação de um genérico televisivo com o uso do green screen.",
        video: "https://www.youtube.com/embed/s2Ff5fooUME?si=Pi13-oUb_L40zqm8"
      },
      video5: {
        type: "video",
        title: "Video motivacional",
        description: "Este vídeo foi um dos primeiros em que me gravei para um trabalho de vídeo de tema livre, e escolhi este tema motivacional para aquelas pessoas que quando pensam que não alcançaram nada olhem para trás para ver as diferenças.",
        video: "https://www.youtube.com/embed/wpYzAhj86Jw?si=gv1rJxFiHkxJ-9fD"
      },
      video6: {
        type: "video",
        title: "Top 10 reasons my city shines: Torres Vedras",
        description: "Este vídeo só tratei da edição, que foi para um trabalho de inglês de uma pessoa, que consiste em mostrar e falar de 10 coisas de Torres Vedras.",
        video: "https://www.youtube.com/embed/wYhaYG-xMZo?si=0WAwdpFnSknLa2ph"
      },
      
      foto1: {
        type: "gallery",
        title: "Madrid",
        description: "Fotos tiradas em Madrid, Espanha.",
        images: [
          "fotografia/madrid/1.jpg",
          "fotografia/madrid/2.jpg",
          "fotografia/madrid/3.jpg",
          "fotografia/madrid/4.jpg",
          "fotografia/madrid/5.jpg",
          "fotografia/madrid/6.jpg",
          "fotografia/madrid/7.jpg",
        ]
      },
      foto2: {
        type: "gallery",
        title: "Lisboa",
        description: "Fotos tiradas em Lisboa, Portugal",
        images: [
          "lisboa/1.jpg",
          "lisboa/2.jpg",
          "lisboa/3.jpg",
          "lisboa/4.jpg",
          "lisboa/5.jpg",
          "lisboa/6.jpg",
          "lisboa/7.jpg",
          "lisboa/8.jpg",
        ]
      },
      foto3: {
        type: "gallery",
        title: "Açores",
        description: "Fotos tiradas em São Miguel, Açores",
        images: [
          "fotografia/acores/1.jpg",
          "fotografia/acores/2.jpg",
          "fotografia/acores/3.jpg",
          "fotografia/acores/4.jpg",
          "fotografia/acores/5.jpg",
          "fotografia/acores/6.jpg",
          "fotografia/acores/7.jpg",
          "fotografia/acores/8.jpg",
          "fotografia/acores/9.jpg",
        ]
      },
      foto4: {
        type: "gallery",
        title: "Paisagens",
        description: "Fotos tiradas no dia a dia",
        images: [
          "fotografia/paisagens/1.jpg",
          "fotografia/paisagens/2.jpg",
          "fotografia/paisagens/3.jpg",
          "fotografia/paisagens/4.jpg",
          "fotografia/paisagens/5.jpg",
          "fotografia/paisagens/6.jpg",
          "fotografia/paisagens/7.jpg",
          "fotografia/paisagens/8.jpg",
          "fotografia/paisagens/9.jpg",
          "fotografia/paisagens/10.jpg",
          "fotografia/paisagens/11.jpg",
        ]
      },
      foto5: {
        type: "gallery",
        title: "Basebol",
        description: "Fotos minhas a praticar o meu desporto favorito, basebol.",
        images: [
          "fotografia/basebol/1.jpg",
          "fotografia/basebol/2.jpg",
          "fotografia/basebol/3.jpg",
          "fotografia/basebol/4.jpg",
        ]
      },
      d31: {
        type: "gallery",
        title: "Cadeira",
        description: "Este trabalho de modelação tinha como objetivo criar uma cadeira e um ambiente para a mesma no 3DsMAX.",
        images: [
          "cadeira/1.png",
          "cadeira/2.png",
          "cadeira/3.png",
          "cadeira/4.png",
        ]
      },
      d32: {
        type: "gallery",
        title: "Rato",
        description: "Este trabalho de modelação tinha como objetivo criar um rato de teclado e um ambiente em volta do mesmo no 3DsMAX.",
        images: [
          "rato/1.png",
          "rato/2.png",
          "rato/3.png",
          "rato/4.png",
          "rato/5.png",
          "rato/6.png",
          "rato/7.png",
        ]
      },
      d33: {
        type: "gallery",
        title: "Peixe",
        description: "Este trabalho de modelação tinha como objetivo criar peixes e um ambiente para eles no 3DsMAX.",
        images: [
          "peixe/1.png",
          "peixe/2.png",
          "peixe/3.png",
        ]
      },
      d34: {
        type: "mixed",
        title: "Tabuleiro",
        description: "Este trabalho de modelação tinha como objetivo criar um tabuleiro de jogo e criar uma animação de colisão entre objetos e um ambiente em volta do mesmo no 3DsMAX.",
        items: [
          { type: "image", src: "tabu/1.png" },  
          { type: "image", src: "tabu/2.png" },
          { type: "image", src: "tabu/3.png" },
          { type: "image", src: "tabu/4.png" },
          { type: "image", src: "tabu/5.png" },
          { type: "video", src: "https://www.youtube.com/embed/9dcswXCNV6w?si=DtwCX1-It5PUutFS" }
        ]
      },
      estagio1: {
        type: "video",
        title: "Vídeo 25 de Abril",
        description: "Vídeo comemorativo do 25 de abril",
        video: "projetos/estagio/25deabril/25_de_abril_me.mp4"
      },
      estagio2: {
        type: "video",
        title: "Guia de Acesso ao Ensino Superior 2024/2025",
        description: "Vídeo de ilustração de uma revista da Mais Educativa.",
        video: "https://youtube.com/embed/shorts/_ORTbITI5Ag?si=1GLneRiH2pc6XqxH"
      },
      estagio3: {
        type: "video",
        title: "Dia do trabalhador",
        description: "Vídeo comemorativo do dia do trabalhador.",
        video: "projetos/estagio/dia_trabalhador/video.mp4"
      },
      projeto1: {
        type: "gallery",
        title: "VrEstate - Design",
        description: "Aqui mostro algumas das coisas que realizamos em termos de design.",
        images: [
          "projetos/projeto/design/1.jpg",
          "projetos/projeto/design/2.png",
          "projetos/projeto/design/3.png",
          "projetos/projeto/design/4.png",
          "projetos/projeto/design/5.jpg",
          "projetos/projeto/design/6.png",
        ]
      },
      projeto2: {
        type: "gallery",
        title: "VrEstate - Redes Sociais",
        description: "Aqui apresento alguns posts ficticios que realizamos para apresentar o projeto.",
        images: [
          "projetos/projeto/redes/post 1.png",
          "projetos/projeto/redes/post 2.png",
          "projetos/projeto/redes/post 3.png",
          "projetos/projeto/redes/post 4.png",
        ]
      },
      projeto3: {
        type: "mixed",
        title: "VrEstate - Vídeos",
        description: "Estes videos são: uma animação de logotipo, uma ilustração de mockus de acuncios em sites e um anuncio televisivo da VrEstate.",
        items: [
          { type: "video", src: "projetos/projeto/videos/vb2.mp4" },
          { type: "video", src: "projetos/projeto/videos/mockup_ads.mp4" },  
          { type: "video", src: "projetos/projeto/videos/vrestateanuncio_rede.mp4" }
        ]
      },
      projeto4: {
        type: "gallery",
        title: "VrEstate - App Store",
        description: "Estas ilustrações são os grafismos que seriam apresentados na App Store ou na Google Store.",
        images: [
          "projetos/projeto/app/4.jpg",
          "projetos/projeto/app/1.png",
          "projetos/projeto/app/2.png",
          "projetos/projeto/app/3.png",
        ]
      },
      projeto5: {
        type: "iframe",
        title: "VrEstate - App mobile(Propótipo Interativo)",
        description: "Este é o protótipo de uma aplicação mobile para a VrEstate que mostra como seria para a procura e agendamento da visita a uma casa.Aconselho a clicarem na primeira casa apresentada nos 'Apartamentos' para ver a parte protótipada e no icon da VrEstate e experimentar Fazer Login e Registar conta. Desenvolvido em Figma.",
        iframe: "https://embed.figma.com/proto/xxJ0rPbRDbGNKHdCGnhthK/VRESTATE_mobile?node-id=241-2&p=f&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=241%3A2&embed-host=share",
      },
    };

    // ====================== MODAL - ABRIR ======================
    document.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.dataset.modal;
        const p = projects[id];

        if (!p) {
          console.error("Projeto não encontrado:", id);
          return;
        }

        let content = `
          <h2 class="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-red-600 bg-clip-text text-transparent">
            ${p.title}
          </h2>
          <p class="text-xl text-gray-300 mb-10 leading-relaxed">${p.description}</p>
        `;

        // === VÍDEO ÚNICO ===
        if (p.type === "video") {
          if (p.video.includes("youtube.com") || p.video.includes("vimeo.com") || p.isExternal) {
            content += `
              <div class="w-full max-w-4xl mx-auto py-8">
                <div class="relative pb-[56.25%] rounded-2xl overflow-hidden shadow-2xl">
                  <iframe class="absolute inset-0 w-full h-full" 
                          src="${p.video}" 
                          frameborder="0" 
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                          allowfullscreen></iframe>
                </div>
              </div>
            `;
          } else {
            content += `
              <div class="w-full max-w-4xl mx-auto py-8">
                <div class="flex items-center justify-center bg-black/40 rounded-2xl overflow-hidden shadow-2xl p-4">
                  <video class="max-w-full max-h-[75vh] rounded-2xl shadow-2xl" 
                        controls preload="metadata" playsinline>
                    <source src="${p.video}" type="video/mp4">
                    O teu navegador não suporta vídeo.
                  </video>
                </div>
              </div>
            `;
          }
        }

        // === IFRAME (FIGMA, etc.) ===
        else if (p.type === "iframe") {
          content += `
            <div class="w-full max-w-5xl mx-auto py-8">
              <div class="relative w-full h-[75vh] rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
                <iframe src="${p.iframe}" 
                        class="absolute inset-0 w-full h-full border-0"
                        allowfullscreen
                        allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-modals">
                </iframe>
              </div>
              <p class="text-center text-gray-400 text-sm mt-4 italic">
                Clique no ícone de fullscreen no canto do protótipo para ver em ecrã inteiro
              </p>
            </div>
          `;
        }

        // === GALERIA DE IMAGENS OU MISTA (VÍDEOS + IMAGENS) ===
        else if (p.type === "gallery" || p.type === "mixed") {
          // Unifica itens: gallery → imagens, mixed → items
          const items = p.type === "gallery" 
            ? p.images.map(src => ({ type: "image", src })) 
            : p.items;

          let slides = '';
          items.forEach(item => {
            if (item.type === "video") {
              if (item.src.includes("youtube.com") || item.src.includes("vimeo.com")) {
                slides += `
                  <div class="swiper-slide flex items-center justify-center bg-black/60 p-4">
                    <div class="relative w-full max-w-4xl h-[70vh]">
                      <iframe class="absolute inset-0 w-full h-full rounded-2xl shadow-2xl"
                              src="${item.src}"
                              frameborder="0"
                              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                              allowfullscreen></iframe>
                    </div>
                  </div>
                `;
              } else {
                slides += `
                  <div class="swiper-slide flex items-center justify-center bg-black/60 p-4">
                  <video class="max-w-full max-h-[75vh] rounded-2xl shadow-2xl" 
                        controls preload="metadata" playsinline>
                    <source src="${item.src}" type="video/mp4">
                    O teu navegador não suporta vídeo.
                  </video>
                  </div>
                `;
              }
            } else if (item.type === "image") {
              slides += `
                <div class="swiper-slide flex items-center justify-center bg-black/60 p-4">
                  <img src="${item.src}" 
                      class="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl cursor-pointer transition hover:scale-105"
                      onclick="openFullscreen(this.src)"
                      alt="Clique para fullscreen">
                </div>
              `;
            }
          });

          content += `
            <div class="w-full max-w-5xl mx-auto py-8">
              <div class="swiper mySwiper rounded-2xl overflow-hidden shadow-2xl">
                <div class="swiper-wrapper">
                  ${slides}
                </div>
                <div class="swiper-button-next text-red-500 text-4xl !w-14 !h-14 !right-6"></div>
                <div class="swiper-button-prev text-red-500 text-4xl !w-14 !h-14 !left-6"></div>
                <div class="swiper-pagination !bottom-8"></div>
              </div>
            </div>
          `;
        }

        // Injetar conteúdo
        document.getElementById('modalContent').innerHTML = content;
        document.getElementById('modal').classList.add('active');
        document.getElementById('modalBox').style.transform = 'scale(1)';
        document.getElementById('modalBox').style.opacity = '1';
        document.body.classList.add('modal-open');

        // === INICIALIZAR SWIPER (gallery ou mixed) ===
        if (p.type === "gallery" || p.type === "mixed") {
          // Destruir Swiper anterior para evitar bugs
          if (window.currentSwiper) {
            window.currentSwiper.destroy(true, true);
          }

          setTimeout(() => {
            window.currentSwiper = new Swiper(".mySwiper", {
              loop: true,
              centeredSlides: true,
              slidesPerView: 1,
              spaceBetween: 30,
              grabCursor: true,
              keyboard: { enabled: true },
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
              },
              pagination: {
                el: ".swiper-pagination",
                clickable: true,
                dynamicBullets: true
              },
              // Pausa vídeos locais ao mudar de slide
              on: {
                slideChange: function () {
                  const videos = document.querySelectorAll('#modalContent video');
                  videos.forEach(video => {
                    video.pause();
                    // video.currentTime = 0; // opcional: volta ao início
                  });
                }
              }
            });
          }, 150);
        }
      });
    });

    // ====================== MODAL - FECHAR ======================
    function closeModal() {
    document.getElementById('modal').classList.remove('active');
    document.getElementById('modalBox').style.transform = 'scale(0.95)';
    document.getElementById('modalBox').style.opacity = '0';
    document.body.classList.remove('modal-open'); // ← devolve scroll
  }
    document.getElementById('closeModal').addEventListener('click', closeModal);
    document.getElementById('modal').addEventListener('click', (e) => {
      if (e.target === document.getElementById('modal')) closeModal();
    });

    // ====================== FUNÇÃO FULLSCREEN PARA IMAGENS ======================
    function openFullscreen(src) {
      const fullscreenDiv = document.createElement('div');
      fullscreenDiv.id = 'imageFullscreen';
      fullscreenDiv.className = 'fixed inset-0 bg-black z-[99999] flex items-center justify-center cursor-zoom-out';
      fullscreenDiv.innerHTML = `
        <img src="${src}" class="max-w-full max-h-full object-contain">
        <button class="absolute top-8 right-8 text-5xl text-white hover:text-red-500 transition">
          ×
        </button>
      `;
      fullscreenDiv.onclick = () => document.body.removeChild(fullscreenDiv);
      document.body.appendChild(fullscreenDiv);
    }