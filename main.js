/* ═══════════════════════════════════════════════════════
   Ateliê Tutu Baby — Scripts
   Arquivo: main.js
   ═══════════════════════════════════════════════════════ */
/* ─── TABELA DE MEDIDAS OFICIAL ──────────────────────── */
// Fonte: Tabela_medidas.jpeg fornecida pelo ateliê
const sizeTable = {
  1:  { busto: 51, cintura: 50, comprimento: 45 },
  2:  { busto: 52, cintura: 51, comprimento: 50 },
  3:  { busto: 54, cintura: 52, comprimento: 55 },
  4:  { busto: 56, cintura: 54, comprimento: 60 },
  6:  { busto: 60, cintura: 61, comprimento: 65 },
  8:  { busto: 62, cintura: 63, comprimento: 70 },
  10: { busto: 64, cintura: 65, comprimento: 75 },
};

   /* ─── PRODUTOS ───────────────────────────────────────── */
const products = [
  { id:1, 
    name:'Vestido Barbie Glamour', 
    cat:'barbie',    
    icon:'img/vestido_barbie.jpeg', 
    bg:'p-barbie',    
    price:189.90, 
    oldPrice:229.90, 
    tag:'Mais Vendido', 
    availableSizes: [1, 2, 3, 4, 6, 8, 10],
    description: 'Um vestido digno da Barbie mais estilosa! Confeccionado em tecido acetinado com tule sobreposto, conta com corpete bordado em rosa vibrante, saia rodada e laço encantador nas costas. Perfeito para a festinha mais instagramável do ano.',
    features: ['Tecido acetinado premium', 'Saia com tule duplo', 'Laço bordado nas costas', 'Pode incluir nome bordado', 'Fecho em zíper invisível'],
    care: 'Lavar à mão com água fria. Não torcer. Secar à sombra.',},

  { id:2, 
    name:'Vestido Minnie Classic', 
    cat:'minnie',    
    icon:'img/vestido_minnie.jpeg', 
    bg:'p-minnie',    
    price:159.90, 
    oldPrice:null,   
    tag:'Novidade', 
    availableSizes: [1, 2, 3, 4, 6, 8],
    description: 'A Minnie mais clássica e charmosa para a sua princesa! Com saia rodada em poás brancos sobre vermelho vibrante e laço icônico, este vestido é reconhecido por qualquer criança — e amado por todas elas.',
    features: ['Estampa poá clássica', 'Laço temático da Minnie', 'Saia levemente rodada', 'Tecido confortável para dançar', 'Disponível com ou sem manga'],
    care: 'Lavar à mão. Não usar água quente. Passar em temperatura baixa.',},

  { id:3, 
    name:'Vestido Stitch Fluffy',  
    cat:'stitch',    
    icon:'img/vestido_lilostitch.jpeg', 
    bg:'p-stitch',    
    price:174.90, 
    oldPrice:199.90, 
    tag:'Promoção', 
    availableSizes: [2, 3, 4, 6, 8, 10],
    description: 'Para as fãs do fofinho e travesso Stitch! Vestido azul-anil com detalhes em lilás, apliques bordados do personagem e saia com camadas de tule que deixam qualquer criança se sentindo numa aventura no Havaí.',
    features: ['Apliques bordados do Stitch', 'Azul-anil com detalhes lilás', 'Saia multicamadas em tule', 'Bordado artesanal', 'Acompanha tiara temática opcional'],
    care: 'Lavar à mão. Não centrifugar. Guardar em saco de tecido.',},

  { id:4, 
    name:'Vestido Bluey e Bingo',    
    cat:'bluey',     
    icon:'img/vestido_bluey.jpeg', 
    bg:'p-bluey',     
    price:164.90, 
    oldPrice:null,   
    tag:'Destaque', 
    availableSizes: [1, 2, 3, 4, 6, 8],
    description: 'Bluey e Bingo juntas em um vestido adorável! Azul celeste com detalhes em laranja, o vestido traz os personagens favoritos da garotada em um design leve e divertido. Ideal para festas temáticas e aniversários descontraídos.',
    features: ['Personagens Bluey e Bingo bordados', 'Azul celeste com detalhes laranja', 'Tecido leve e fresco', 'Saia midi confortável', 'Pode ter o nome bordado'],
    care: 'Lavar à mão com sabão neutro. Não usar alvejante.',},

  { id:5, 
    name:'Vestido Cinderela',      
    cat:'princesas', 
    icon:'img/vestido_cinderella.jpeg', 
    bg:'p-cinderela', 
    price:199.90, 
    oldPrice:239.90, 
    tag:'Mais Vendido', 
    availableSizes: [2, 3, 4, 6, 8, 10],
    description: 'O vestido de princesa mais mágico do baile! Inspirado na Cinderela, com saia em godê azul bebê e tule prateado que brilha a cada movimento. Corpete com detalhes em strass e laço delicado. Sua filha vai se sentir pronta para o baile do reino.',
    features: ['Saia em godê com tule prateado', 'Corpete com strass', 'Azul bebê clássico', 'Bordado artesanal', 'Acompanha luvas decorativas (opcional)'],
    care: 'Lavar à mão com cuidado. Não torcer o tule. Guardar em cabide.',},

  { id:6, 
    name:'Vestido Emilly Vick',       
    cat:'princesas', 
    icon:'img/vestido_emillyvick.jpeg', 
    bg:'p-emilly',  
    price:194.90, 
    oldPrice:null,   
    tag:'Novidade', 
    availableSizes: [2, 3, 4, 6, 8, 10],
    description: 'Inspirado no estilo doce e romântico da Emilly Vick, este vestido une o charme das princesas clássicas com um toque moderno. Tons suaves de rosa e lilás com detalhes delicados em renda e fita de cetim.',
    features: ['Tons rose e lilás suaves', 'Detalhe em renda artesanal', 'Fita de cetim na cintura', 'Saia midi rodada', 'Tecido respirável para o verão'],
    care: 'Lavar à mão com água morna. Não usar secadora.',},

  { id:7, 
    name:'Vestido Pequena Sereia',   
    cat:'princesas', 
    icon:'img/vestido_pequenasereia.jpeg', 
    bg:'p-ariel', 
    price:184.90, 
    oldPrice:219.90, 
    tag:'Destaque', 
    availableSizes: [2, 3, 4, 6, 8],
    description: 'Mergulhe no fundo do mar com a Ariel! Vestido verde-esmeralda com detalhes em coral e purpurina que imita as escamas da nossa pequena sereia favorita. Saia assimétrica com efeito onda que encanta a cada giro.',
    features: ['Verde-esmeralda com purpurina', 'Detalhes em coral', 'Saia assimétrica efeito onda', 'Aplique de conchas', 'Bordado artesanal da Ariel'],
    care: 'Lavar à mão em água fria. Não esfregar a parte com purpurina.',},

  { id:8, 
    name:'Vestido Copa do Mundo',      
    cat:'custom',    
    icon:'img/vestido_copamundo.jpeg', 
    bg:'p-copa', 
    price:209.90, 
    oldPrice:null,   
    tag:'Personaliz.', 
    availableSizes: [1, 2, 3, 4, 6, 8, 10],
    description: 'Para a torcedora mais estilosa do Brasil! Vestido temático com as cores da seleção brasileira em um design elegante e divertido. Verde e amarelo com detalhes em ouro e estrelinha da seleção bordada. Único no mercado!',
    features: ['Verde e amarelo da seleção', 'Estrelinha bordada', 'Detalhes em dourado', 'Saia rodada festiva', 'Pode personalizar com nome e número'],
    care: 'Lavar à mão. Não usar água quente. Passar do avesso.',},
];

/* ─── ESTADO DO CARRINHO ─────────────────────────────── */
let cart = [];

/* ─── RENDERIZAR PRODUTOS ────────────────────────────── */
function renderProducts() {
  const grid = document.getElementById('products-grid');
  grid.innerHTML = products.map((p, index) => `
    <div class="product-card reveal" style="transition-delay:${(index % 4) * 0.08}s">
      <div class="product-img ${p.bg}">
        <div class="prod-icon"><img src="${p.icon}" alt="${p.name}"></div>
        ${p.tag ? `<span class="product-tag">${p.tag}</span>` : ''}
        <button class="product-wishlist" onclick="showToast('Adicionado aos favoritos 💕')">♡</button>
      </div>
      <div class="product-info">
        <div class="product-name">${p.name}</div>
        <div class="product-sizes">Tamanhos: ${p.sizes}</div>
        <div class="product-price">
          <span class="price-current">R$ ${p.price.toFixed(2).replace('.', ',')}</span>
          ${p.oldPrice ? `<span class="price-old">R$ ${p.oldPrice.toFixed(2).replace('.', ',')}</span>` : ''}
        </div>
         <button class="btn-view-product" onclick="event.stopPropagation(); openProductModal(${p.id})">Ver detalhes</button>
      </div>
    </div>
  `).join('');
  initReveal();
}

/* ─── MODAL DE PRODUTO ───────────────────────────────── */
let selectedSize = null; /*mudança 1*/
 
function openProductModal(productId) {
  const p = products.find(x => x.id === productId);
  if (!p) return;
  selectedSize = null;
 
  const isImg = p.icon && p.icon.match(/\.(jpeg|jpg|png|webp)/i);
  const imgHtml = isImg
    ? `<img src="${p.icon}" alt="${p.name}" class="pm-main-img" onerror="this.outerHTML='<div class=\\'pm-img-fallback ${p.bg}\\'><span style=\\'font-size:5rem\\'>👗</span></div>'">`
    : `<div class="pm-img-fallback ${p.bg}"><span style="font-size:5rem">${p.icon}</span></div>`;
 
  const sizeBtns = p.availableSizes.map(sz => {
    const m = sizeTable[sz];
    return `<button class="pm-size-btn" data-size="${sz}"
      onclick="selectSize(${productId}, ${sz}, this)"
      title="Busto ${m.busto}cm · Cintura ${m.cintura}cm · Comp. ${m.comprimento}cm">
      ${sz}
    </button>`;
  }).join('');
 
  const featuresHtml = p.features.map(f => `<li>✦ ${f}</li>`).join('');
 
  document.getElementById('product-modal-body').innerHTML = `
    <div class="pm-layout">
 
      <!-- Imagem -->
      <div class="pm-gallery">
        <div class="pm-img-wrap">
          ${imgHtml}
          ${p.tag ? `<span class="pm-badge">${p.tag}</span>` : ''}
        </div>
      </div>
 
      <!-- Info -->
      <div class="pm-info">
        <p class="pm-cat">${p.cat.toUpperCase()}</p>
        <h2 class="pm-name">${p.name}</h2>
 
        <div class="pm-price-row">
          <span class="pm-price-current">R$ ${p.price.toFixed(2).replace('.', ',')}</span>
          ${p.oldPrice ? `<span class="pm-price-old">R$ ${p.oldPrice.toFixed(2).replace('.', ',')}</span>
          <span class="pm-discount">−${Math.round((1 - p.price/p.oldPrice)*100)}%</span>` : ''}
        </div>
        <p class="pm-installment">ou 12x de R$ ${(p.price/12).toFixed(2).replace('.', ',')} sem juros</p>
 
        <p class="pm-desc">${p.description}</p>
 
        <!-- Seletor de tamanho -->
        <div class="pm-size-section">
          <div class="pm-size-header">
            <span class="pm-size-label">Escolha o tamanho <span class="pm-size-req">*</span></span>
            <button class="pm-size-guide-btn" onclick="toggleSizeGuide()">📏 Guia de medidas</button>
          </div>
          <div class="pm-size-btns">${sizeBtns}</div>
          <p class="pm-size-hint" id="pm-size-hint">Clique em um número para ver as medidas correspondentes</p>
 
          <!-- Guia de medidas -->
          <div class="pm-size-guide" id="pm-size-guide" style="display:none">
            <h4>📏 Tabela de Medidas Oficial</h4>
            <p class="pm-guide-sub">Todas as medidas em centímetros (cm)</p>
            <div class="pm-table-wrap">
              <table class="pm-table">
                <thead>
                  <tr>
                    <th>Medida</th>
                    ${Object.keys(sizeTable).map(s => `<th>Tam. ${s}</th>`).join('')}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="pm-td-label">Busto</td>
                    ${Object.values(sizeTable).map(m => `<td>${m.busto}</td>`).join('')}
                  </tr>
                  <tr>
                    <td class="pm-td-label">Cintura</td>
                    ${Object.values(sizeTable).map(m => `<td>${m.cintura}</td>`).join('')}
                  </tr>
                  <tr>
                    <td class="pm-td-label">Comprimento</td>
                    ${Object.values(sizeTable).map(m => `<td>${m.comprimento}</td>`).join('')}
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="pm-guide-tips">
              <p>💡 <strong>Como medir:</strong> Use uma fita métrica flexível. Meça sempre sobre a roupa de baixo, sem apertar. Para o comprimento, meça do ombro até onde deseja que o vestido termine.</p>
            </div>
          </div>
        </div>
 
        <!-- Detalhes do produto -->
        <div class="pm-features">
          <p class="pm-features-title">✨ O que tem neste vestido</p>
          <ul>${featuresHtml}</ul>
        </div>
 
        <!-- Cuidados -->
        <div class="pm-care">
          <p class="pm-care-title">🧺 Cuidados</p>
          <p>${p.care}</p>
        </div>
 
        <!-- Ações -->
        <div class="pm-actions">
          <button class="pm-btn-cart" id="pm-btn-cart-${p.id}" onclick="addToCartFromModal(${p.id})">
            🛒 Adicionar ao Carrinho
          </button>
          <button class="pm-btn-wpp" onclick="openWhatsAppProduct(${p.id})">
            💬 Pedir pelo WhatsApp
          </button>
        </div>
 
        <div class="pm-trust-row">
          <span>🚚 Envio para todo o Brasil</span>
          <span>🔒 Compra segura</span>
          <span>🎀 Feito à mão</span>
        </div>
      </div>
    </div>
  `;
 
  document.getElementById('product-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
 
function closeProductModal() {
  document.getElementById('product-modal').classList.remove('open');
  document.body.style.overflow = '';
  selectedSize = null;
}
 
function selectSize(productId, size, btn) {
  selectedSize = size;
  // Highlight selected button
  document.querySelectorAll('.pm-size-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  // Mostrar medidas
  const m = sizeTable[size];
  document.getElementById('pm-size-hint').innerHTML =
    `<strong>Tamanho ${size}:</strong> Busto ${m.busto}cm · Cintura ${m.cintura}cm · Comprimento ${m.comprimento}cm`;
}
 
function toggleSizeGuide() {
  const guide = document.getElementById('pm-size-guide');
  guide.style.display = guide.style.display === 'none' ? 'block' : 'none';
}
 
function addToCartFromModal(productId) {
  if (!selectedSize) {
    // Shake the size buttons to signal required selection
    const sizeRow = document.querySelector('.pm-size-btns');
    sizeRow.classList.add('shake');
    setTimeout(() => sizeRow.classList.remove('shake'), 600);
    showToast('Escolha um tamanho antes de adicionar 📏');
    return;
  }
  const p = products.find(x => x.id === productId);
  const key = `${productId}-${selectedSize}`;
  const existing = cart.find(x => x.cartKey === key);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...p, cartKey: key, selectedSize, qty: 1 });
  }
  updateCartUI();
  showToast(`"${p.name}" (tam. ${selectedSize}) adicionado! 🎀`);
  closeProductModal();
  setTimeout(openCart, 400);
}
 
function openWhatsAppProduct(productId) {
  const p = products.find(x => x.id === productId);
  const sizeInfo = selectedSize
    ? `Tamanho ${selectedSize} (Busto ${sizeTable[selectedSize].busto}cm · Cintura ${sizeTable[selectedSize].cintura}cm · Comprimento ${sizeTable[selectedSize].comprimento}cm)`
    : 'Ainda preciso escolher o tamanho';
  const msg = encodeURIComponent(
`Olá! Vi o site do Ateliê Tutu Baby e me interessei por:
 
👗 *${p.name}*
💰 R$ ${p.price.toFixed(2).replace('.', ',')}
📏 ${sizeInfo}
 
Poderia me passar mais informações? 🎀`
  );
  window.open(`https://wa.me/5541999999999?text=${msg}`, '_blank');
}

/* ─── CARRINHO — ADICIONAR ───────────────────────────── */
function addToCart(productId) {
  const p = products.find(x => x.id === productId);
  const existing = cart.find(x => x.id === productId);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...p, qty: 1 });
  }
  updateCartUI();
  showToast(`"${p.name}" adicionado! 🎀`);
}

/* ─── CARRINHO — REMOVER ─────────────────────────────── */
function removeFromCart(productId) {
  cart = cart.filter(x => x.id !== productId);
  updateCartUI();
}

/* ─── CARRINHO — ALTERAR QUANTIDADE ─────────────────── */
function changeQty(productId, delta) {
  const item = cart.find(x => x.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(productId);
  else updateCartUI();
}

/* ─── CARRINHO — ATUALIZAR UI ────────────────────────── */
function updateCartUI() {
  const count = cart.reduce((a, b) => a + b.qty, 0);
  document.getElementById('cart-count').textContent = count;

  const body   = document.getElementById('cart-body');
  const footer = document.getElementById('cart-footer');
  const total  = cart.reduce((a, b) => a + b.price * b.qty, 0);

  if (cart.length === 0) {
    body.innerHTML = `
      <div class="cart-empty">
        <div class="empty-icon">🛍️</div>
        <p>Seu carrinho está vazio</p>
        <p style="font-size:.8rem;color:var(--text-xlt);margin-top:8px">
          Adicione vestidos mágicos para sua princesa
        </p>
        <a href="#bestsellers"
           style="display:inline-block;margin-top:20px;"
           class="btn-primary"
           onclick="closeCart()">Ver Coleção ✨</a>
      </div>`;
    footer.style.display = 'none';
  } else {
    body.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div class="cart-item-img ${item.bg}">${item.icon}</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-size">Tamanho: 4 anos</div>
          <div class="cart-item-qty">
            <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
            <span>${item.qty}</span>
            <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
          </div>
        </div>
        <div class="cart-item-price">
          R$ ${(item.price * item.qty).toFixed(2).replace('.', ',')}
        </div>
      </div>
    `).join('');
    footer.style.display = 'block';
    document.getElementById('cart-total-value').textContent =
      `R$ ${total.toFixed(2).replace('.', ',')}`;
  }
}

/* ─── CARRINHO — ABRIR / FECHAR ──────────────────────── */
function openCart() {
  document.getElementById('cart-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  document.getElementById('cart-modal').classList.remove('open');
  document.body.style.overflow = '';
}

/* ─── CARRINHO — CHECKOUT ────────────────────────────── */
function handleCheckout() {
  showToast('Redirecionando para o checkout… 💳');
  setTimeout(closeCart, 1200);
}

/* ─── BUSCA ──────────────────────────────────────────── */
let searchOpen = false;
function toggleSearch() {
  searchOpen = !searchOpen;
  const bar = document.getElementById('search-bar');
  if (searchOpen) {
    bar.classList.add('open');
    document.getElementById('search-input').focus();
  } else {
    bar.classList.remove('open');
  }
}

/* ─── LOGIN / CADASTRO ───────────────────────────────── */
function openLogin() {
  document.getElementById('login-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLogin() {
  document.getElementById('login-modal').classList.remove('open');
  document.body.style.overflow = '';
}
function switchTab(tab) {
  document.getElementById('login-form').style.display    = tab === 'login'    ? 'block' : 'none';
  document.getElementById('register-form').style.display = tab === 'register' ? 'block' : 'none';
  document.querySelectorAll('.modal-tab').forEach((btn, i) => {
    btn.classList.toggle('active',
      (i === 0 && tab === 'login') || (i === 1 && tab === 'register')
    );
  });
}

/* ─── MENU MOBILE (DRAWER) ───────────────────────────── */
function closeDrawer() {
  document.getElementById('nav-drawer').classList.remove('open');
  document.body.style.overflow = '';
}

/* ─── TOAST ──────────────────────────────────────────── */
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 2800);
}

/* ─── NAVBAR — SCROLL ────────────────────────────────── */
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 30);
});

/* ─── PÉTALAS FLUTUANTES ─────────────────────────────── */
function createPetals() {
  const container = document.getElementById('petals-container');
  const colors = ['#f5c6d0', '#e8ddf5', '#f5e6de', '#faeaed', '#e8d5a8'];
  for (let i = 0; i < 14; i++) {
    const el   = document.createElement('div');
    el.className = 'petal';
    const size = 8 + Math.random() * 18;
    el.style.cssText = `
      width:${size}px;
      height:${size}px;
      left:${Math.random() * 100}%;
      background:${colors[Math.floor(Math.random() * colors.length)]};
      animation-duration:${12 + Math.random() * 14}s;
      animation-delay:${Math.random() * -20}s;
    `;
    container.appendChild(el);
  }
}

/* ─── SCROLL REVEAL ──────────────────────────────────── */
function initReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
}

/*Scroll PC para reviews*/
function moveReviews(direction) {
  const container =
    document.querySelector('.reviews-scroll');

  container.scrollBy({
    left: direction * 320,
    behavior: 'smooth'
  });
}

/* ─── EVENTOS ────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  /* Navbar */
  document.getElementById('search-toggle').addEventListener('click', toggleSearch);
  document.getElementById('login-toggle').addEventListener('click', openLogin);
  document.getElementById('cart-toggle').addEventListener('click', openCart);

  /* Carrinho */
  document.getElementById('cart-close').addEventListener('click', closeCart);
  document.getElementById('cart-backdrop').addEventListener('click', closeCart);

  /* Login */
  document.getElementById('login-close').addEventListener('click', closeLogin);
  document.getElementById('login-backdrop').addEventListener('click', closeLogin);

  /* Drawer mobile */
  document.getElementById('hamburger-btn').addEventListener('click', () => {
    document.getElementById('nav-drawer').classList.add('open');
    document.body.style.overflow = 'hidden';
  });
  document.getElementById('drawer-close').addEventListener('click', closeDrawer);

  /* Init */
  renderProducts();
  createPetals();
  initReveal();
});

/* ═══════════════════════════════════════════════════════
   PERSONALIZAÇÃO — WIZARD DE PEDIDO
   ═══════════════════════════════════════════════════════ */
 
/* ─── ESTADO DO PEDIDO ───────────────────────────────── */
const orderData = {
  personagem: '',
  medidas: {},
  cores: [],
  estilo: '',
  extras: [],
  nomeBordado: '',
  obsCores: '',
  fotoRefs: [],     // File objects
  refLink: '',
  descModelo: '',
  nomeCliente: '',
  telCliente: '',
  origem: '',
};
 
let currentStep = 1;
 
/* ─── NAVEGAÇÃO ENTRE PASSOS ─────────────────────────── */
function nextStep(target) {
  if (target > currentStep && !validateStep(currentStep)) return;
 
  document.getElementById(`step-${currentStep}`).classList.remove('active');
  document.getElementById(`step-${target}`).classList.add('active');
 
  // Marca passos concluídos
  document.querySelectorAll('.pstep').forEach(el => {
    const n = parseInt(el.dataset.step);
    el.classList.remove('active', 'done');
    if (n === target) el.classList.add('active');
    else if (n < target) el.classList.add('done');
  });
 
  currentStep = target;
 
  // Ao chegar no passo 5, gera o resumo
  if (target === 5) buildOrderSummary();
 
  // Scroll suave até o topo da seção
  document.getElementById('personalize').scrollIntoView({ behavior: 'smooth', block: 'start' });
}
 
/* ─── VALIDAÇÃO POR PASSO ────────────────────────────── */
function validateStep(step) {
  if (step === 1) {
    if (!orderData.personagem) {
      showToast('Selecione um personagem antes de continuar 🎭');
      return false;
    }
    if (orderData.personagem === 'outro') {
      const custom = document.getElementById('custom-char-field').value.trim();
      if (!custom) { showToast('Digite o nome do personagem desejado ✏️'); return false; }
      orderData.personagem = custom;
    }
  }
  if (step === 2) {
    const required = ['m-idade','m-altura','m-peso','m-busto','m-cintura','m-comprimento','m-data'];
    for (const id of required) {
      const el = document.getElementById(id);
      if (!el.value.trim()) {
        el.focus();
        el.style.borderColor = 'var(--rose-deep)';
        setTimeout(() => el.style.borderColor = '', 2000);
        showToast('Preencha todos os campos obrigatórios 📏');
        return false;
      }
    }
    // Coleta medidas
    orderData.medidas = {
      idade:        document.getElementById('m-idade').value + ' anos',
      altura:       document.getElementById('m-altura').value + ' cm',
      peso:         document.getElementById('m-peso').value + ' kg',
      busto:        document.getElementById('m-busto').value + ' cm',
      cintura:      document.getElementById('m-cintura').value + ' cm',
      quadril:      document.getElementById('m-quadril').value ? document.getElementById('m-quadril').value + ' cm' : 'Não informado',
      comprimento:  document.getElementById('m-comprimento').value + ' cm',
      dataEvento:   formatDate(document.getElementById('m-data').value),
    };
  }
  if (step === 3) {
    if (orderData.cores.length === 0) {
      showToast('Escolha ao menos uma cor preferida 🎨');
      return false;
    }
    if (!orderData.estilo) {
      showToast('Selecione o estilo do vestido 👗');
      return false;
    }
    // Coleta extras
    orderData.extras = [...document.querySelectorAll('.extra-cb:checked')].map(el => el.value);
    orderData.nomeBordado = document.getElementById('nome-bordado').value.trim();
    orderData.obsCores    = document.getElementById('obs-cores').value.trim();
  }
  return true;
}
 
/* ─── PASSO 1 — SELEÇÃO DE PERSONAGEM ───────────────── */
document.addEventListener('DOMContentLoaded', () => {
 
  document.querySelectorAll('.char-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.char-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      const val = card.dataset.char;
      orderData.personagem = val;
 
      const customWrap = document.getElementById('custom-char-wrap');
      if (val === 'outro') {
        customWrap.style.display = 'block';
        document.getElementById('custom-char-field').focus();
        orderData.personagem = 'outro';
      } else {
        customWrap.style.display = 'none';
      }
 
      document.getElementById('btn-step1-next').disabled = false;
    });
  });
 
  /* ─── PASSO 3 — CORES ──────────────────────────────── */
  document.querySelectorAll('.color-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const color = chip.dataset.color;
      if (chip.classList.contains('selected')) {
        chip.classList.remove('selected');
        orderData.cores = orderData.cores.filter(c => c !== color);
      } else {
        if (orderData.cores.length >= 3) {
          showToast('Máximo 3 cores. Desmarque uma para trocar 🎨');
          return;
        }
        chip.classList.add('selected');
        orderData.cores.push(color);
      }
    });
  });
 
  /* ─── PASSO 3 — ESTILO ─────────────────────────────── */
  document.querySelectorAll('.style-opt').forEach(opt => {
    opt.addEventListener('click', () => {
      document.querySelectorAll('.style-opt').forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      orderData.estilo = opt.dataset.style;
    });
  });
 
  /* ─── PASSO 3 — BORDADO COM NOME ───────────────────── */
  document.querySelectorAll('.extra-cb').forEach(cb => {
    cb.addEventListener('change', () => {
      const bordadoWrap = document.getElementById('name-embroider-wrap');
      const hasBordado  = [...document.querySelectorAll('.extra-cb:checked')]
                            .some(el => el.value === 'Bordado com nome');
      if (bordadoWrap) bordadoWrap.style.display = hasBordado ? 'block' : 'none';
    });
  });
 
  /* ─── PASSO 4 — UPLOAD DE FOTOS ────────────────────── */
  const refPhotoInput = document.getElementById('ref-photo');
  const uploadArea    = document.getElementById('upload-area');
 
  refPhotoInput.addEventListener('change', handleFileSelect);
 
  // Drag & Drop
  uploadArea.addEventListener('dragover', e => {
    e.preventDefault();
    uploadArea.classList.add('drag-over');
  });
  uploadArea.addEventListener('dragleave', () => uploadArea.classList.remove('drag-over'));
  uploadArea.addEventListener('drop', e => {
    e.preventDefault();
    uploadArea.classList.remove('drag-over');
    const files = [...e.dataTransfer.files].filter(f => f.type.startsWith('image/'));
    addFiles(files);
  });
 
});
 
function handleFileSelect(e) {
  const files = [...e.target.files];
  addFiles(files);
}
 
function addFiles(files) {
  const remaining = 3 - orderData.fotoRefs.length;
  if (remaining <= 0) { showToast('Máximo de 3 fotos já atingido 📸'); return; }
  const toAdd = files.slice(0, remaining);
  toAdd.forEach(file => {
    orderData.fotoRefs.push(file);
    renderPreview(file, orderData.fotoRefs.length - 1);
  });
  if (files.length > remaining) showToast(`Apenas ${remaining} foto(s) adicionada(s) — limite é 3`);
}
 
function renderPreview(file, index) {
  const previews = document.getElementById('upload-previews');
  const reader   = new FileReader();
  reader.onload  = e => {
    const thumb = document.createElement('div');
    thumb.className  = 'preview-thumb';
    thumb.dataset.idx = index;
    thumb.innerHTML  = `
      <img src="${e.target.result}" alt="Referência ${index+1}" />
      <button class="preview-remove" onclick="removePreview(${index})">✕</button>
    `;
    previews.appendChild(thumb);
  };
  reader.readAsDataURL(file);
}
 
function removePreview(index) {
  orderData.fotoRefs.splice(index, 1);
  const previews = document.getElementById('upload-previews');
  previews.innerHTML = '';
  orderData.fotoRefs.forEach((file, i) => renderPreview(file, i));
}
 
/* ─── PASSO 5 — RESUMO DO PEDIDO ────────────────────── */
function buildOrderSummary() {
  const m = orderData.medidas;
  const rows = [
    { label: 'Personagem',    value: orderData.personagem || '—' },
    { label: 'Idade / Altura',value: `${m.idade || '—'} · ${m.altura || '—'}` },
    { label: 'Medidas',       value: `Busto ${m.busto || '—'} · Cintura ${m.cintura || '—'} · Comprimento ${m.comprimento || '—'}` },
    { label: 'Data do evento',value: m.dataEvento || '—' },
    { label: 'Cores',         value: orderData.cores.join(', ') || '—' },
    { label: 'Estilo',        value: orderData.estilo || '—' },
    { label: 'Detalhes extra',value: orderData.extras.length ? orderData.extras.join(', ') : 'Nenhum' },
    { label: 'Bordado',       value: orderData.nomeBordado || 'Não solicitado' },
    { label: 'Fotos enviadas',value: orderData.fotoRefs.length ? `${orderData.fotoRefs.length} foto(s)` : 'Nenhuma' },
    { label: 'Observações',   value: orderData.obsCores || 'Nenhuma' },
  ];
 
  document.getElementById('order-summary').innerHTML = `
    <h4>✨ Resumo do seu pedido</h4>
    <div class="summary-rows">
      ${rows.map(r => `
        <div class="summary-row">
          <span class="sr-label">${r.label}</span>
          <span class="sr-value">${r.value}</span>
        </div>
      `).join('')}
    </div>
  `;
}
 
/* ─── ENVIO PELO WHATSAPP ────────────────────────────── */
function sendOrder() {
  const nome = document.getElementById('nome-cliente').value.trim();
  const tel  = document.getElementById('tel-cliente').value.trim();
 
  if (!nome) {
    document.getElementById('nome-cliente').focus();
    showToast('Informe seu nome para continuar 👤');
    return;
  }
  if (!tel || tel.length < 10) {
    document.getElementById('tel-cliente').focus();
    showToast('Informe seu WhatsApp corretamente 📱');
    return;
  }
 
  orderData.nomeCliente = nome;
  orderData.telCliente  = tel;
  orderData.origem      = document.getElementById('origem-cliente').value;
  const m = orderData.medidas;
 
  const msg = encodeURIComponent(
`🎀 *NOVO PEDIDO — Ateliê Tutu Baby*
 
👤 *Cliente:* ${orderData.nomeCliente}
📱 *WhatsApp:* ${orderData.telCliente}
📣 *Como nos encontrou:* ${orderData.origem || 'Não informado'}
 
─────────────────────────
🎭 *PERSONAGEM*
${orderData.personagem}
 
📏 *MEDIDAS*
• Idade: ${m.idade || '—'}
• Altura: ${m.altura || '—'}
• Peso: ${m.peso || '—'}
• Busto: ${m.busto || '—'}
• Cintura: ${m.cintura || '—'}
• Quadril: ${m.quadril || '—'}
• Comprimento do vestido: ${m.comprimento || '—'}
• 📅 Data do evento: ${m.dataEvento || '—'}
 
🎨 *CORES PREFERIDAS*
${orderData.cores.join(' · ') || '—'}
 
👗 *ESTILO*
${orderData.estilo || '—'}
 
✨ *DETALHES EXTRAS*
${orderData.extras.length ? orderData.extras.join('\n') : 'Nenhum'}
${orderData.nomeBordado ? `• Nome para bordado: ${orderData.nomeBordado}` : ''}
 
📝 *OBSERVAÇÕES*
${orderData.obsCores || 'Nenhuma'}
 
🖼️ *REFERÊNCIAS*
${orderData.refLink ? `• Link: ${orderData.refLink}` : ''}
${document.getElementById('desc-modelo').value.trim() ? `• Descrição: ${document.getElementById('desc-modelo').value.trim()}` : ''}
${orderData.fotoRefs.length ? `• ${orderData.fotoRefs.length} foto(s) de referência anexada(s) — enviarei em seguida!` : ''}
─────────────────────────
✅ Pedido enviado pelo site Ateliê Tutu Baby`
  );
 
  // Número do WhatsApp da confeccionista
  const waNumber = '5541999999999';
  window.open(`https://wa.me/${waNumber}?text=${msg}`, '_blank');
 
  // Mostra sucesso
  document.querySelector('.pers-step-panel.active').querySelectorAll('.step-header, .order-summary, .field-group, .send-info-box, .step-actions').forEach(el => {
    el.style.display = 'none';
  });
  document.getElementById('send-success').style.display = 'block';
  showToast('Pedido enviado! 🎉');
}
 
/* ─── UTILITÁRIO: FORMATAR DATA ──────────────────────── */
function formatDate(dateStr) {
  if (!dateStr) return '—';
  const [y, m, d] = dateStr.split('-');
  return `${d}/${m}/${y}`;
}