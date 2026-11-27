(function () {
  const headerHTML = `
  <header class="navbar">
    <div class="nav-brand">
      <div class="logo">
        <a href="/index.html"><img src="../public/images/cep_logo.png" alt="Logo"></a>
      </div>
      <span class="brand-name">GCEPERS</span>
    </div>

    <nav class="nav-menu">
      <a href="/afm" class="nav-link">PAINEL ADM</a>
      <a href="/index.html" class="nav-link">INÍCIO</a>
      <a href="pages/avisos.html" class="nav-link">AVISOS</a>
      <a href="pages/eventos.html" class="nav-link">EVENTOS</a>
      <a href="pages/merenda.html" class="nav-link">MERENDA</a>
      <a href="pages/perfil.html" class="nav-link">PERFIL</a>
    </nav>

    <div class="header-actions">
      <div class="searchbar-box">
        <svg class="searchbar-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input type="text" placeholder="Search for..." class="searchbar-input">
      </div>

      <a href="/login" class="profile-btn" aria-label="Perfil">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      </a>
    </div>
  </header>

<style>

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#header-placeholder {
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
}

html, body {
  overflow-x: clip;
}

.navbar {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f4f6f8;
  border-bottom: 20px solid #167ec2;
  padding: 0 20px;
  height: 120px;
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

.logo img:hover {
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
  height: 70px;
  background-color: #fff;
  box-shadow: 0 0 8px #999;
}

.nav-link {
  display: flex;
  align-items: center;
  padding: 0 20px;
  color: #000;
  text-decoration: none;
  font-weight: bold;
  font-size: 21px;
  letter-spacing: 0.5px;
  transition: background-color 0.2s, transform 0.25s ease-out;
}

.nav-link.active {
  color: red;
  transform: translateY(-10px);
}

.nav-link:hover {
  background-color: #7dd3fc;
  animation: popUp .25s ease-out forwards;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-right: 200px;
}

.profile-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 1);
  text-decoration: none;
  box-sizing: border-box;
  transition: background-color 0.2s ease, transform 0.2s ease;
  flex-shrink: 0;
}

.profile-btn:hover {
  background-color: rgba(255, 255, 255, 0.5);
}

.profile-btn svg {
  width: 20px;
  height: 20px;
  stroke: #000000;
  display: block;
}

.searchbar-box {
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  padding: 0 16px;
  height: 38px;
  max-width: 180px;
  box-sizing: border-box;
  transition: background-color 0.2s ease;
}

.searchbar-icon {
  width: 18px;
  height: 18px;
  stroke: #000000;
  margin-right: 8px;
  flex-shrink: 0;
  display: block;
}

.searchbar-input {
  background: transparent;
  border: none;
  outline: none;
  color: #000000;
  font-size: 14px;
  width: 100%;
  height: 100%;
  padding: 0;
}

.searchbar-input::placeholder {
  color: #000000;
  opacity: 0.85;
}

@keyframes popUp {
  from { 
    transform: translateY(0);
  }
  to { 
    transform: translateY(-5px);
  }
}

@keyframes logoRoll {
  from { 
    transform: rotate(0deg);
  }
  to { 
    transform: rotate(180deg);
  }
}
</style>
  `;

  function montarHeader() {
    const alvo = document.getElementById("header-placeholder");
    if (alvo) {
      alvo.innerHTML = headerHTML;
    } else {
      // Insere no INÍCIO do body (afterbegin) e não no final (beforeend)
      document.body.insertAdjacentHTML("afterbegin", headerHTML);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", montarHeader);
  } else {
    montarHeader();
  }
})();