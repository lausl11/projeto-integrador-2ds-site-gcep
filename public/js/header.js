(function () {
  const headerHTML = `

  <header class="navbar">
    <div class="nav-brand">
      <div class="logo">
        <a href="/"><img src="/images/cep_logo.png" alt="Logo"></a>
      </div>
      <span class="brand-name">GCEPERS</span>
    </div>

    <nav class="nav-menu">
      <a href="/" class="nav-link">INÍCIO</a>
      <a href="/avisos" class="nav-link">AVISOS</a>
      <a href="/eventos" class="nav-link">EVENTOS</a>
      <a href="/merenda" class="nav-link">MERENDA</a>
      <a href="/perfil" class="nav-link">PERFIL</a>
    </nav>

    <div class="nav-search">
        <div class="nav-right">
    <a href="/login" class="btn-login-nav">LOGIN</a>
      <input type="text" placeholder="Pesquisar">
      <button type="button">&#128269</button>
    </div>
  </header>

<style>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f4f6f8;
  border-bottom: 3px solid #0081a7;
  padding: 0 20px;
  height: 90px;
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: 200px;
}

.logo img {
  height: 80px;
  width: auto;
  display: block;
}

.logo img hover {
  animation: logoRoll .7s ease-out forwards;
}

.brand-name {
  font-size: 1.3rem;
  font-weight: bold;
  letter-spacing: 1px;
  color: #000;
}

.nav-menu {
  display: flex;
  height: 100%;
}

.nav-link {
  display: flex;
  align-items: center;
  padding: 0 20px;
  color: #000;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2rem;
  letter-spacing: 0.5px;
  transition: background-color 0.2s;
}

.nav-link.active {
  color: red;
  transform: translateY(-10px);
}

.nav-link:hover {
  scale: 1.5;
  animation: popUp .25s ease-out forwards;
}

.nav-search {
  display: flex;
  align-items: center;
  border-bottom: 2px solid #000;
  padding-bottom: px;
  margin-right: 200px;
}
.nav-search input {
  border: none;
  background: transparent;
  outline: none;
  padding: 4px 8px;
  font-size: 0.95rem;
  color: #555;
  width: 140px;
}

.nav-search button {
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 15px;
}

.btn-login-nav {
  color: #004080;
  text-decoration: none;
  font-weight: bold;
  font-size: 0.9rem;
  letter-spacing: 0.5px;
}

.btn-login-nav:hover {
  transform: scale(1.05);
}

@keyframes popUp {
  from { 
    transform: translateY(0);
    scale: (.4);
  }
  to { 
    transform: translateY(-10px);
    scale: (1.4); 
  }
}

@keyframes logoRoll {
  from { 

  }
  to { 
    rotation: 90deg;
  }
}

</style>

  `;

  function configurarAnimacoesHeader() {
    const elementos = document.querySelectorAll(".page-end-section .header-reveal");
    if (!elementos.length) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            setTimeout(() => {
              entry.target.style.transitionDelay = "0s";
            }, 900);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elementos.forEach(el => observer.observe(el));
  }

  function montarHeader() {
    const alvo = document.getElementById("header-placeholder") || document.body;
    if (alvo === document.body) {
      alvo.insertAdjacentHTML("beforeend", headerHTML);
    } else {
      alvo.innerHTML = headerHTML;
    }

    configurarAnimacoesHeader();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", montarHeader);
  } else {
    montarHeader();
  }
})();