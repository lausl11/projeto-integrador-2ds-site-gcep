(function () {
  const footerHTML = `
  <footer class="cep-footer">
    <!-- FAIXA SUPERIOR (AZUL MAIS CLARO) -->
    <div class="footer-top-bar">
      <div class="footer-top-links footer-reveal" style="--stagger: 0;">
        <a href="/" class="top-pill-btn">
          <svg viewBox="0 0 24 24" class="pill-icon"><path fill="currentColor" d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/></svg>
          INÍCIO
        </a>
        <a href="/avisos" class="top-pill-btn">
          <svg viewBox="0 0 24 24" class="pill-icon"><path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z"/></svg>
          AVISOS
        </a>
        <a href="/eventos" class="top-pill-btn">
          <svg viewBox="0 0 24 24" class="pill-icon"><path fill="currentColor" d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10z"/></svg>
          EVENTOS
        </a>
        <a href="/merenda" class="top-pill-btn">
          <svg viewBox="0 0 24 24" class="pill-icon"><path fill="currentColor" d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/></svg>
          CARDÁPIO / MERENDA
        </a>
      </div>
    </div>

    <!-- CORPO PRINCIPAL DO RODAPÉ (AZUL INSTITUCIONAL) -->
    <div class="footer-main-area">
      <div class="footer-container">
        
        <!-- LADO ESQUERDO: LOGO + LINHA VERTICAL + DADOS DO CEP -->
        <div class="footer-brand-block footer-reveal" style="--stagger: 1;">
          <img src="../public/images/cep_logo.png" alt="Logo CEP" class="footer-logo">
          
          <div class="vertical-divider"></div>

          <div class="footer-school-info">
            <h2>COLÉGIO ESTADUAL DO PARANÁ - CEP</h2>
            
            <p class="address-line">
              <span>Av. João Gualberto, 250 - Alto da Glória - 80030-000 - Curitiba - PR</span>
              <a href="https://www.google.com/maps/place/Col%C3%A9gio+Estadual+do+Paran%C3%A1/@-25.4230305,-49.2664072,17z/data=!3m1!4b1!4m6!3m5!1s0x94dce416950f8e93:0x2d3ec1ab7018a1d4!8m2!3d-25.4230305!4d-49.2664072!16s%2Fg%2F122j3rb1?entry=ttu&g_ep=EgoyMDI2MTEyMy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" class="map-inline-link">
                <svg class="pin-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>
                MAPA
              </a>
            </p>

            <p class="phone-line">
              <a href="tel:+554133048900">Telefone: (41) 3304-8900</a>
            </p>
          </div>
        </div>

        <!-- LADO DIREITO: GCEPERS / REDES SOCIAIS -->
        <div class="footer-right-block footer-reveal" style="--stagger: 2;">
          <span class="right-label">GCEPERS • SIGA-NOS</span>
          <div class="social-icons">
            <!-- Instagram -->
            <a href="https://www.instagram.com/daxautomacao/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" class="social-icon">
                <path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            <!-- YouTube -->
            <a href="https://www.youtube.com/channel/UC5KDCLfsKAMnwSipBmrlcyA" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <svg viewBox="0 0 24 24" class="social-icon">
                <path fill="currentColor" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>

            <!-- WhatsApp -->
            <a href="https://wa.me/554133048900" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" class="social-icon">
                <path fill="currentColor" d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>

      <!-- DIREITOS AUTORAIS -->
      <div class="company-rights footer-reveal" style="--stagger: 3;">
        <p>© 2026 CEP • Grêmio Estudantil (GCEPERS). Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>

<style>
.cep-footer {
  width: 100%;
  box-sizing: border-box;
  font-family: 'Segoe UI', Arial, sans-serif;
  color: #ffffff;
}

/* ================= FAIXA SUPERIOR (ESTILO PORTAL PARANÁ) ================= */
.footer-top-bar {
  background-color: #167ec2;
  padding: 12px 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
}

.footer-top-links {
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}

.top-pill-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 7px 14px;
  border: 1px solid rgba(255, 255, 255, 0.45);
  border-radius: 4px;
  color: #ffffff;
  text-decoration: none;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  background-color: rgba(255, 255, 255, 0.04);
  transition: background-color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
}

.top-pill-btn:hover {
  background-color: rgba(255, 255, 255, 0.16);
  border-color: #ffffff;
  transform: translateY(-1px);
}

.pill-icon {
  width: 15px;
  height: 15px;
  flex-shrink: 0;
}

/* ================= CORPO PRINCIPAL DO RODAPÉ ================= */
.footer-main-area {
  background-color: #006eb6;
  padding: 36px 24px 24px 24px;
}

.footer-container {
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
}

/* LADO ESQUERDO: LOGO + DIVISOR VERTICAL + TEXTOS */
.footer-brand-block {
  display: flex;
  align-items: center;
  gap: 24px;
}

.footer-logo {
  width: 96px;
  height: auto;
  display: block;
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

.footer-logo:hover {
  transform: scale(1.04);
}

.vertical-divider {
  width: 1.5px;
  height: 76px;
  background-color: rgba(255, 255, 255, 0.65);
  flex-shrink: 0;
}

.footer-school-info h2 {
  font-size: 17px;
  font-weight: 700;
  letter-spacing: 0.4px;
  margin: 0 0 10px 0;
  color: #ffffff;
  text-transform: uppercase;
}

.address-line {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  margin: 0 0 6px 0;
  font-size: 13.5px;
  color: rgba(255, 255, 255, 0.92);
}

.map-inline-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: #ffffff;
  font-weight: 700;
  font-size: 13px;
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: opacity 0.2s ease;
}

.map-inline-link:hover {
  opacity: 0.8;
}

.pin-icon {
  width: 15px;
  height: 15px;
}

.phone-line {
  margin: 0;
  font-size: 13.5px;
}

.phone-line a {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
}

.phone-line a:hover {
  text-decoration: underline;
}

/* LADO DIREITO: REDES SOCIAIS */
.footer-right-block {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
}

.right-label {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 0.85);
}

.social-icons {
  display: flex;
  align-items: center;
  gap: 10px;
}

.social-icons a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.35);
  background-color: rgba(255, 255, 255, 0.08);
  color: #ffffff;
  transition: background-color 0.25s ease, transform 0.25s ease;
}

.social-icons a:hover {
  background-color: rgba(255, 255, 255, 0.22);
  transform: translateY(-2px);
}

.social-icon {
  width: 18px;
  height: 18px;
}

/* DIREITOS AUTORAIS */
.company-rights {
  max-width: 1140px;
  margin: 28px auto 0 auto;
  padding-top: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.18);
  text-align: center;
}

.company-rights p {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.75);
  margin: 0;
}

/* ANIMAÇÃO SUAVE AO ROLAR */
.footer-reveal {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.6s ease, transform 0.6s ease;
  transition-delay: calc(var(--stagger, 0) * 0.1s);
}

.footer-reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* RESPONSIVIDADE */
@media (max-width: 820px) {
  .footer-container {
    flex-direction: column;
    align-items: flex-start;
  }

  .footer-right-block {
    align-items: flex-start;
  }
}

@media (max-width: 560px) {
  .footer-brand-block {
    flex-direction: column;
    align-items: flex-start;
    gap: 14px;
  }

  .vertical-divider {
    display: none;
  }
}
</style>
  `;

  function configurarAnimacoesRodape() {
    const elementos = document.querySelectorAll(".cep-footer .footer-reveal");
    if (!elementos.length) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elementos.forEach(el => observer.observe(el));
  }

  function montarRodape() {
    const alvo = document.getElementById("footer-placeholder") || document.body;
    if (alvo === document.body) {
      alvo.insertAdjacentHTML("beforeend", footerHTML);
    } else {
      alvo.innerHTML = footerHTML;
    }

    configurarAnimacoesRodape();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", montarRodape);
  } else {
    montarRodape();
  }
})();