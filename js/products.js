// ==================== CHILLI CATALOG (Modal) ====================
  const chilliVarieties = [
    {
      name: "SURYA",
      category: "Chilli",
      image: "assets/images/chilli/surya.png", // <-- add your image later (or keep fallback)
    },
    {
      name: "DIVYA",
      category: "Chilli",
      image: "assets/images/chilli/DIVYA.png",
    },
    {
      name: "RANTEJA",
      category: "Chilli",
      image: "assets/images/chilli/RANTEJA.png",
    },
    {
      name: "DIVYATEJ",
      category: "Chilli",
      image: "assets/images/chilli/DIVYATEJ.png",
    },
    {
      name: "DHATRI-245",
      category: "Chilli",
      image: "assets/images/chilli/DHATRI-245.png",
    },
    {
      name: "AADYA",
      category: "Chilli",
      image: "assets/images/chilli/AADYA.png",
    },
    {
      name: "RAAVAN-222",
      category: "Chilli",
      image: "assets/images/chilli/RAAVAN-222.png",
    },
    {
      name: "RED-V",
      category: "Chilli",
      image: "assets/images/chilli/RED-V.png",
    },
    {
      name: "VARAD-6631",
      category: "Chilli",
      image: "assets/images/chilli/VARAD-6631.png",
    },
    {
      name: "VSPH-128",
      category: "Chilli",
      image: "assets/images/chilli/VSPH-128.png",
    },
    {
      name: "VARAD-4023",
      category: "Chilli",
      image: "assets/images/chilli/VARAD-4023.png",
    },
    {
      name: "AKSHAYA-41",
      category: "Chilli",
      image: "assets/images/chilli/AKSHAYA-41.png",
    },
    {
      name: "SHRI KAVYA",
      category: "Chilli",
      image: "assets/images/chilli/SHRI KAVYA.png",
    },
    {
      name: "VARAD-555",
      category: "Chilli",
      image: "assets/images/chilli/VARAD-555.png",
    },
    {
      name: "PADMINI",
      category: "Chilli",
      image: "assets/images/chilli/PADMINI.png",
    },
    {
      name: "AWANI-2214",
      category: "Chilli",
      image: "assets/images/chilli/AWANI-2214.png",
    },
    {
      name: "VARAD-DD",
      category: "Chilli",
      image: "assets/images/chilli/VARAD-DD.png",
    },
    {
      name: "VARAD 9576",
      category: "Chilli",
      image: "assets/images/chilli/VARAD 9576.png",
    },
    {
      name: "VARAD HOT",
      category: "Chilli",
      image: "assets/images/chilli/VARAD HOT.png",
    }
    ,
    {
      name: "4316.",
      category: "Chilli",
      image: "assets/images/chilli/4316.png",
    },
    {
      name: "SUPER SURYA",
      category: "Chilli",
      image: "assets/images/chilli/SUPER SURYA.png",
    },
    {
      name: "DEVRA",
      category: "Chilli",
      image: "assets/images/chilli/DEVRA.png",
    },
    {
      name: "DEVRAJ",
      category: "Chilli",
      image: "assets/images/chilli/DEVRAJ.png",
    }
  ];
  // ==================== ONION CATALOG (Modal) ====================
  const onionVarieties = [
    { name: "ONION PRODUCTS", image: "assets/images/onion/SHAKTI.png" },
    { name: "BAHUBALI-101", image: "assets/images/onion/BAHUBALI-101.png" },
    { name: "ONION GOLD (202)", image: "assets/images/onion/ONION GOLD (202).png" },
     { name: "ONION GAWARAN(LR 241)", image: "assets/images/onion/ONION GAWARAN(LR 241).png" },
     { name: "ONION SUPER GOLD", image: "assets/images/onion/ONION SUPER GOLD.png" }
  ];
  
  
  // ==================== BRINJAL CATALOG (Modal) ====================
  const brinjalVarieties = [
    { name: "BRINJAL AMEYA", image: "assets/images/brinjal/BRINJAL AMEYA.png" },
    { name: "BRINJAL-804", image: "assets/images/brinjal/BRINJAL-804.png" },
    { name: "PRIYANKA", image: "assets/images/brinjal/PRIYANKA.png" }
  ];
  
  // ==================== Maize CATALOG (Modal) ====================
  const maizeVarieties = [
    { name: "MAIZE-RENUKA", image: "assets/images/Maize/MAIZE-RENUKA.png" }
  ];
  
  // ==================== SPONGE GOURD CATALOG ====================
  const spongeGourdVarieties = [
    { name: "VARAD SPONGE ROSHNI", image: "assets/images/spongegourd/ROSHNI.png" },
    { name: "VARAD SPONGE VSPH-2", image: "assets/images/spongegourd/VSPH-2.png" }
  ];
  
  // ==================== RIDGE GOURD CATALOG ====================
  const ridgeGourdVarieties = [
    { name: "VARAD RIDGE GOURD SUREKH", image: "assets/images/ridgegourd/SUREKH.png" }
  ];
  
  // ==================== WATERMELON CATALOG ====================
  const watermelonVarieties = [
    { name: "VARAD WATERMELON - SHAKTIMAN", image: "assets/images/watermelon/SHAKTIMAN.png" }
  ];
  
  // ==================== BHENDI (OKRA) CATALOG ====================
  const bhendiVarieties = [
    { name: "VARAD BHENDI - 5015", image: "assets/images/bhendi/5015.png" },
    { name: "VARAD BHENDI - ANMOL", image: "assets/images/bhendi/ANMOL.png" },
    { name: "VARAD BHENDI - DHANLAXMI-15", image: "assets/images/bhendi/DHANLAXMI-15.png" },
    { name: "VARAD BHENDI - RESEARCH 1503", image: "assets/images/bhendi/RESEARCH 1503.png" },
  ];
  
  // ==================== BITTER GOURD (KARELA) CATALOG ====================
  const karelaVarieties = [
    { name: "VARAD KARELA - AMAN-01", image: "assets/images/karela/AMAN-01.png" },
    { name: "VARAD KARELA - RACHANA", image: "assets/images/karela/RACHAN.png" },
     { name: "VARAD KARELA - ZALLI-01", image: "assets/images/karela/ZALLI-01.png" }
  ];
  
  // ==================== PUMPKIN CATALOG ====================
  const pumpkinVarieties = [
    { name: "VARAD PUMPKIN - VSPH-2", image: "assets/images/pumpkin/VSPH-2.png" }
  ];
  // ==================== CUCUMBER CATALOG ====================
  const cucumberVarieties = [
    { name: "VARAD CUCUMBER -MANASI", image: "assets/images/cucumber/MANASI.png" }
    
  ];
  
  // ==================== CAPSICUM CATALOG ====================
  const capsicumVarieties = [
    { name: "VARAD CAPSICUM - ARISTO-11", image: "assets/images/capsicum/ARISTO-11.png" },
    { name: "VARAD CAPSICUM - VARAD-4316", image: "assets/images/capsicum/VARAD-4316.png" }
  ];
  // ==================== TOMATO CATALOG ====================
  const tomatoVarieties = [
    { name: "VARAD TOMATO - ABHIRAJ", image: "assets/images/tomato/ABHIRAJ.png" },
    { name: "VARAD TOMATO - RATAN", image: "assets/images/tomato/RATAN.png" },
    { name: "VARAD TOMATO - VS-8520", image: "assets/images/tomato/VS-8520.png" }
  ];
  // ==================== CABBAGE CATALOG ====================
  const cabbageVarieties = [
    { name: "VARAD CABBAGE - VARAD-999", image: "assets/images/cabbage/VARAD-999.png" }
    
  ];
  // ==================== MUSKMELON CATALOG ====================
  const muskmelonVarieties = [
    { name: "VARAD MUSKMELON - MUSKMELON VARAD-101 F1", image: "assets/images/muskmelon/MUSKMELON VARAD-101 F1.png" }
   
  ];
  // ==================== RADISH CATALOG ====================
  const radishVarieties = [
    { name: "VARAD RADISH - RADISH F1.SANEHAL", image: "assets/images/radish/RADISH F1.SANEHAL.png" }
    
  ];
  // ==================== MARIGOLD CATALOG ====================
  const marigoldVarieties = [
    { name: "MARIGOLD - MARIGOLD VARAD-101 F1", image: "assets/images/marigold/MARIGOLD VARAD-101 F1.png" },
    { name: "MARIGOLD - MARIGOLD VARAD-999 F1", image: "assets/images/marigold/MARIGOLD VARAD-999 F1.png" }
  ];
  
  // ==================== CAULIFLOWER CATALOG ====================
  const cauliflowerVarieties = [
    { name: "CAULIFLOWER - F1 CAULIFLOWER VARAD-101", image: "assets/images/cauliflower/F1 CAULIFLOWER VARAD-101.png" }
   
  ];
  
  // ==================== SOYBEAN CATALOG ====================
const soybeanVarieties = [
  { name: "SOYBEAN-VS 9305", image: "assets/images/soybean/SOYBEAN-VS 9305.png" }
];
// ==================== PIGEON PEA (TOOR) CATALOG ====================
const pigeonPeaVarieties = [
  { name: "PIGEON PEA(TUR) DHAMAKA", image: "assets/images/pigeonpea/PIGEON PEA(TUR) DHAMAKA.png" } 
];
// ==================== BOTTLE GOURD (LAUKI) CATALOG ====================
const bottleGourdVarieties = [
  { name: "SARTHAK-8", image: "assets/images/bottlegourd/SARTHAK-8.png" },
  { name: "SHIV", image: "assets/images/bottlegourd/SHIV.png" },
  { name: "VARDHAN", image: "assets/images/bottlegourd/VARDHAN.png" }
];

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // Fallback image if local variety image not present yet
  function chilliImg(src){
    return src && src.startsWith("assets/") ? src : "https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?w=900";
  }
  
  
  
  function openChilliCatalog(){
    const body = modal.querySelector(".modal-body");
    body.classList.add("chilli-modal");
  
    body.innerHTML = `
      <div class="chilli-header">
        <div>
          <div class="chilli-title">Chilli</div>
          <div class="chilli-sub">Select a variety to view details and open the Package of Practices PDF.</div>
        </div>
        <button class="btn btn-primary" id="openChilliPdfTop">Package Of Practices</button>
      </div>
  
      <div class="chilli-grid">
        ${chilliVarieties.map((v, idx) => `
          <div class="chilli-card" data-idx="${idx}">
            <img src="${chilliImg(v.image)}" alt="${v.name}">
            <div class="cc-body">
              <h4>${v.name}</h4>
              <p>Click to view details</p>
            </div>
          </div>
        `).join("")}
      </div>
    `;
  
    // PDF button (top)
    document.getElementById("openChilliPdfTop").addEventListener("click", () => {
      window.open("assets/pdfs/chilli.pdf", "_blank", "noopener");
    });
  
    // Click any variety
    body.querySelectorAll(".chilli-card").forEach(card => {
      card.addEventListener("click", () => {
        const idx = Number(card.getAttribute("data-idx"));
        openChilliDetail(idx);
      });
    });
  
    modal.classList.add("active");
  }
  function openChilliDetail(idx){
    const v = chilliVarieties[idx];
    const body = modal.querySelector(".modal-body");
  
    body.innerHTML = `
      <div class="chilli-header">
        <button class="btn btn-primary" id="backToChilliList">← Back</button>
        <div style="flex:1;"></div>
        <a class="btn btn-primary" href="assets/pdfs/chilli.pdf" target="_blank" rel="noopener">Package Of Practices</a>
        
      </div>
  
      <div class="chilli-detail" style="grid-template-columns:1fr;">
        <div class="chilli-detail-left">
          <img
            src="${chilliImg(v.image)}"
            alt="${v.name}"
            style="
              width:100%;
              max-height:75vh;
              object-fit:contain;
              background:#fff;
              cursor:zoom-in;
            "
            onclick="window.open('${chilliImg(v.image)}','_blank','noopener')"
          />
        </div>
  
        <div class="chilli-actions" style="justify-content:center;">
          <a class="btn btn-primary" href="#contact">Quick Enquiry</a>
          <a class="btn btn-secondary" href="#products">Back to Products</a>
        </div>
      </div>
    `;
  
    document.getElementById("backToChilliList")
      .addEventListener("click", openChilliCatalog);
  
    modal.classList.add("active");
  }
  
  
  function openOnionCatalog(){
    const body = modal.querySelector(".modal-body");
    body.classList.add("chilli-modal");
  
    body.innerHTML = `
      <div class="chilli-header">
        <div>
          <div class="chilli-title">Onion</div>
          <div class="chilli-sub">Select onion variety</div>
        </div>
        <button class="btn btn-primary" id="openOnionPdf">Package Of Practices</button>
      </div>
  
      <div class="chilli-grid">
        ${onionVarieties.map((v, idx) => `
          <div class="chilli-card" data-idx="${idx}">
            <img src="${chilliImg(v.image)}">
            <div class="cc-body">
              <h4>${v.name}</h4>
              <p>Click to view details</p>
            </div>
          </div>
        `).join("")}
      </div>
    `;
  
    document.getElementById("openOnionPdf").onclick = () =>
      window.open("assets/pdfs/onion.pdf","_blank","noopener");
  
    body.querySelectorAll(".chilli-card").forEach(card=>{
      card.onclick=()=>{
        const idx=card.getAttribute("data-idx");
        openOnionDetail(idx);
      }
    });
  
    modal.classList.add("active");
  }
  
  function openOnionDetail(idx){
    const v = onionVarieties[idx];
    const body = modal.querySelector(".modal-body");
  
    body.innerHTML = `
      <div class="chilli-header">
        <button class="btn btn-primary" id="backToOnionList">← Back</button>
        <div style="flex:1"></div>
        <a class="btn btn-primary" href="assets/pdfs/onion.pdf" target="_blank">Package Of Practices</a>
      
      </div>
  
      <div class="chilli-detail" style="grid-template-columns:1fr;">
        <div class="chilli-detail-left">
          <img src="${chilliImg(v.image)}"
               style="width:100%;max-height:75vh;object-fit:contain;background:#fff;">
        </div>
      </div>
    `;
  
    document.getElementById("backToOnionList").onclick=openOnionCatalog;
  }
  
  
  function openBrinjalCatalog(){
    const body = modal.querySelector(".modal-body");
    body.classList.add("chilli-modal");
  
    body.innerHTML = `
      <div class="chilli-header">
        <div>
          <div class="chilli-title">Brinjal</div>
          <div class="chilli-sub">Select brinjal variety</div>
        </div>
        <button class="btn btn-primary" id="openBrinjalPdf">Package Of Practices</button>
      </div>
  
      <div class="chilli-grid">
        ${brinjalVarieties.map((v, idx) => `
          <div class="chilli-card" data-idx="${idx}">
            <img src="${chilliImg(v.image)}">
            <div class="cc-body">
              <h4>${v.name}</h4>
              <p>Click to view details</p>
            </div>
          </div>
        `).join("")}
      </div>
    `;
  
    document.getElementById("openBrinjalPdf").onclick = () =>
      window.open("assets/pdfs/brinjal.pdf","_blank","noopener");
  
    body.querySelectorAll(".chilli-card").forEach(card=>{
      card.onclick=()=>{
        const idx=card.getAttribute("data-idx");
        openBrinjalDetail(idx);
      }
    });
  
    modal.classList.add("active");
  }
  
  function openBrinjalDetail(idx){
    const v = brinjalVarieties[idx];
    const body = modal.querySelector(".modal-body");
  
    body.innerHTML = `
      <div class="chilli-header">
        <button class="btn btn-primary" id="backToBrinjalList">← Back</button>
        <div style="flex:1"></div>
        <a class="btn btn-primary" href="assets/pdfs/brinjal.pdf" target="_blank">Package Of Practices</a>
    
      </div>
  
      <div class="chilli-detail" style="grid-template-columns:1fr;">
        <div class="chilli-detail-left">
          <img src="${chilliImg(v.image)}"
               style="width:100%;max-height:75vh;object-fit:contain;background:#fff;">
        </div>
      </div>
    `;
  
    document.getElementById("backToBrinjalList").onclick=openBrinjalCatalog;
  }
  
  function openMaizeCatalog(){
    const body = modal.querySelector(".modal-body");
    body.classList.add("chilli-modal");
  
    body.innerHTML = `
      <div class="chilli-header">
        <div>
          <div class="chilli-title">Maize</div>
          <div class="chilli-sub">Select maize variety</div>
        </div>
        <button class="btn btn-primary" id="openMaizePdf">Package Of Practices</button>
      </div>
  
      <div class="chilli-grid">
        ${maizeVarieties.map((v, idx) => `
          <div class="chilli-card" data-idx="${idx}">
            <img src="${chilliImg(v.image)}">
            <div class="cc-body">
              <h4>${v.name}</h4>
              <p>Click to view details</p>
            </div>
          </div>
        `).join("")}
      </div>
    `;
  
    document.getElementById("openMaizePdf").onclick = () =>
      window.open("assets/pdfs/maize.pdf","_blank","noopener");
  
    body.querySelectorAll(".chilli-card").forEach(card=>{
      card.onclick=()=>{
        openMaizeDetail(card.getAttribute("data-idx"));
      };
    });
  
    modal.classList.add("active");
  }
  
  function openMaizeDetail(idx){
    const v = maizeVarieties[idx];
    const body = modal.querySelector(".modal-body");
  
    body.innerHTML = `
      <div class="chilli-header">
        <button class="btn btn-primary" id="backToMaizeList">← Back</button>
        <div style="flex:1"></div>
        <a class="btn btn-primary" href="assets/pdfs/maize.pdf" target="_blank">Package Of Practices</a>
         
      </div>
  
      <div class="chilli-detail" style="grid-template-columns:1fr;">
        <div class="chilli-detail-left">
          <img src="${chilliImg(v.image)}"
               style="width:100%;max-height:75vh;object-fit:contain;background:#fff;">
        </div>
      </div>
    `;
  
    document.getElementById("backToMaizeList").onclick=openMaizeCatalog;
  }
  function openSpongeGourdCatalog(){
    const body = modal.querySelector(".modal-body");
    body.classList.add("chilli-modal");
  
    body.innerHTML = `
      <div class="chilli-header">
        <div>
          <div class="chilli-title">Sponge Gourd</div>
          <div class="chilli-sub">Select sponge gourd variety</div>
        </div>
        <button class="btn btn-primary" id="openSpongeGourdPdf">Package Of Practices</button>
      </div>
  
      <div class="chilli-grid">
        ${spongeGourdVarieties.map((v, idx) => `
          <div class="chilli-card" data-idx="${idx}">
            <img src="${chilliImg(v.image)}">
            <div class="cc-body">
              <h4>${v.name}</h4>
              <p>Click to view details</p>
            </div>
          </div>
        `).join("")}
      </div>
    `;
  
    document.getElementById("openSpongeGourdPdf").onclick = () =>
      window.open("assets/pdfs/spongegourd.pdf","_blank","noopener");
  
    body.querySelectorAll(".chilli-card").forEach(card=>{
      card.onclick=()=>{
        openSpongeGourdDetail(card.getAttribute("data-idx"));
      };
    });
  
    modal.classList.add("active");
  }
  
  function openSpongeGourdDetail(idx){
    const v = spongeGourdVarieties[idx];
    const body = modal.querySelector(".modal-body");
  
    body.innerHTML = `
      <div class="chilli-header">
        <button class="btn btn-primary" id="backToSpongeGourdList">← Back</button>
        <div style="flex:1"></div>
        <a class="btn btn-primary" href="assets/pdfs/spongegourd.pdf" target="_blank" rel="noopener">Package Of Practices</a>
        
      </div>
  
      <div class="chilli-detail" style="grid-template-columns:1fr;">
        <div class="chilli-detail-left">
          <img src="${chilliImg(v.image)}"
               style="width:100%;max-height:75vh;object-fit:contain;background:#fff;">
        </div>
      </div>
    `;
  
    document.getElementById("backToSpongeGourdList").onclick = openSpongeGourdCatalog;
  }
  
  function openRidgeGourdCatalog(){
    const body = modal.querySelector(".modal-body");
    body.classList.add("chilli-modal");
  
    body.innerHTML = `
      <div class="chilli-header">
        <div>
          <div class="chilli-title">Ridge Gourd</div>
          <div class="chilli-sub">Select ridge gourd variety</div>
        </div>
        <button class="btn btn-primary" id="openRidgeGourdPdf">Package Of Practices</button>
      </div>
  
      <div class="chilli-grid">
        ${ridgeGourdVarieties.map((v, idx) => `
          <div class="chilli-card" data-idx="${idx}">
            <img src="${chilliImg(v.image)}">
            <div class="cc-body">
              <h4>${v.name}</h4>
              <p>Click to view details</p>
            </div>
          </div>
        `).join("")}
      </div>
    `;
  
    document.getElementById("openRidgeGourdPdf").onclick = () =>
      window.open("assets/pdfs/ridgegourd.pdf","_blank","noopener");
  
    body.querySelectorAll(".chilli-card").forEach(card=>{
      card.onclick=()=>{
        openRidgeGourdDetail(card.getAttribute("data-idx"));
      };
    });
  
    modal.classList.add("active");
  }
  
  function openRidgeGourdDetail(idx){
    const v = ridgeGourdVarieties[idx];
    const body = modal.querySelector(".modal-body");
  
    body.innerHTML = `
      <div class="chilli-header">
        <button class="btn btn-primary" id="backToRidgeGourdList">← Back</button>
        <div style="flex:1"></div>
        <a class="btn btn-primary" href="assets/pdfs/ridgegourd.pdf" target="_blank" rel="noopener">Package Of Practices</a>
         
      </div>
  
      <div class="chilli-detail" style="grid-template-columns:1fr;">
        <div class="chilli-detail-left">
          <img src="${chilliImg(v.image)}"
               style="width:100%;max-height:75vh;object-fit:contain;background:#fff;">
        </div>
      </div>
    `;
  
    document.getElementById("backToRidgeGourdList").onclick = openRidgeGourdCatalog;
  }
  
  
  function openWatermelonCatalog(){
    const body = modal.querySelector(".modal-body");
    body.classList.add("chilli-modal");
  
    body.innerHTML = `
      <div class="chilli-header">
        <div>
          <div class="chilli-title">Watermelon</div>
          <div class="chilli-sub">Select watermelon variety</div>
        </div>
        <button class="btn btn-primary" id="openWatermelonPdf">
          Package Of Practices
        </button>
      </div>
  
      <div class="chilli-grid">
        ${watermelonVarieties.map((v, i) => `
          <div class="chilli-card" data-i="${i}">
            <img src="${chilliImg(v.image)}">
            <div class="cc-body">
              <h4>${v.name}</h4>
              <p>Click to view details</p>
            </div>
          </div>
        `).join("")}
      </div>
    `;
  
    document.getElementById("openWatermelonPdf").onclick = () =>
      window.open("assets/pdfs/watermelon.pdf","_blank","noopener");
  
    body.querySelectorAll(".chilli-card").forEach(card=>{
      card.onclick = () =>
        openWatermelonDetail(card.getAttribute("data-i"));
    });
  
    modal.classList.add("active");
  }
  
  function openWatermelonDetail(i){
    const v = watermelonVarieties[i];
    const body = modal.querySelector(".modal-body");
  
    body.innerHTML = `
      <div class="chilli-header">
        <button class="btn btn-primary" id="backWatermelon">← Back</button>
        <div style="flex:1"></div>
        <a class="btn btn-primary" href="assets/pdfs/watermelon.pdf" target="_blank">Open PDF</a>
        
      </div>
  
      <div class="chilli-detail" style="grid-template-columns:1fr;">
        <img src="${chilliImg(v.image)}"
             style="width:100%;max-height:75vh;object-fit:contain;">
      </div>
    `;
  
    document.getElementById("backWatermelon").onclick = openWatermelonCatalog;
  }
  
  function openBhendiCatalog(){
    const body = modal.querySelector(".modal-body");
    body.classList.add("chilli-modal");
  
    body.innerHTML = `
      <div class="chilli-header">
        <div>
          <div class="chilli-title">Lady's Finger (Bhendi)</div>
          <div class="chilli-sub">Select bhendi variety</div>
        </div>
        <button class="btn btn-primary" id="openBhendiPdf">
          Package Of Practices
        </button>
      </div>
  
      <div class="chilli-grid">
        ${bhendiVarieties.map((v, i) => `
          <div class="chilli-card" data-i="${i}">
            <img src="${chilliImg(v.image)}" alt="${v.name}">
            <div class="cc-body">
              <h4>${v.name}</h4>
              <p>Click to view details</p>
            </div>
          </div>
        `).join("")}
      </div>
    `;
  
    document.getElementById("openBhendiPdf").onclick = () =>
      window.open("assets/pdfs/bhendi.pdf","_blank","noopener");
  
    body.querySelectorAll(".chilli-card").forEach(card=>{
      card.onclick = () =>
        openBhendiDetail(card.getAttribute("data-i"));
    });
  
    modal.classList.add("active");
  }
  
  function openBhendiDetail(i){
    const v = bhendiVarieties[i];
    const body = modal.querySelector(".modal-body");
  
    body.innerHTML = `
      <div class="chilli-header">
        <button class="btn btn-primary" id="backBhendi">← Back</button>
        <div style="flex:1"></div>
        <a class="btn btn-primary" href="assets/pdfs/bhendi.pdf" target="_blank" rel="noopener">Open PDF</a>
        
      </div>
  
      <div class="chilli-detail" style="grid-template-columns:1fr;">
        <div class="chilli-detail-left">
          <img src="${chilliImg(v.image)}" alt="${v.name}"
               style="width:100%;max-height:75vh;object-fit:contain;background:#fff;">
        </div>
      </div>
    `;
  
    document.getElementById("backBhendi").onclick = openBhendiCatalog;
  }
  function openKarelaCatalog(){
    const body = modal.querySelector(".modal-body");
    body.classList.add("chilli-modal");
  
    body.innerHTML = `
      <div class="chilli-header">
        <div>
          <div class="chilli-title">Bitter Gourd (Karela)</div>
          <div class="chilli-sub">Select karela variety</div>
        </div>
        <button class="btn btn-primary" id="openKarelaPdf">
          Package Of Practices
        </button>
      </div>
  
      <div class="chilli-grid">
        ${karelaVarieties.map((v, i) => `
          <div class="chilli-card" data-i="${i}">
            <img src="${chilliImg(v.image)}" alt="${v.name}">
            <div class="cc-body">
              <h4>${v.name}</h4>
              <p>Click to view details</p>
            </div>
          </div>
        `).join("")}
      </div>
    `;
  
    document.getElementById("openKarelaPdf").onclick = () =>
      window.open("assets/pdfs/karela.pdf","_blank","noopener");
  
    body.querySelectorAll(".chilli-card").forEach(card=>{
      card.onclick = () => openKarelaDetail(card.getAttribute("data-i"));
    });
  
    modal.classList.add("active");
  }
  
  function openKarelaDetail(i){
    const v = karelaVarieties[i];
    const body = modal.querySelector(".modal-body");
  
    body.innerHTML = `
      <div class="chilli-header">
        <button class="btn btn-primary" id="backKarela">← Back</button>
        <div style="flex:1"></div>
        <a class="btn btn-primary" href="assets/pdfs/karela.pdf" target="_blank" rel="noopener">Open PDF</a>
         
      </div>
  
      <div class="chilli-detail" style="grid-template-columns:1fr;">
        <div class="chilli-detail-left">
          <img src="${chilliImg(v.image)}" alt="${v.name}"
               style="width:100%;max-height:75vh;object-fit:contain;background:#fff;">
        </div>
      </div>
    `;
  
    document.getElementById("backKarela").onclick = openKarelaCatalog;
  }
  
  function openPumpkinCatalog(){
    const body = modal.querySelector(".modal-body");
    body.classList.add("chilli-modal");
  
    body.innerHTML = `
      <div class="chilli-header">
        <div>
          <div class="chilli-title">Pumpkin</div>
          <div class="chilli-sub">Select pumpkin variety</div>
        </div>
        <button class="btn btn-primary" id="openPumpkinPdf">
          Package Of Practices
        </button>
      </div>
  
      <div class="chilli-grid">
        ${pumpkinVarieties.map((v, i) => `
          <div class="chilli-card" data-i="${i}">
            <img src="${chilliImg(v.image)}" alt="${v.name}">
            <div class="cc-body">
              <h4>${v.name}</h4>
              <p>Click to view details</p>
            </div>
          </div>
        `).join("")}
      </div>
    `;
  
    document.getElementById("openPumpkinPdf").onclick = () =>
      window.open("assets/pdfs/pumpkin.pdf","_blank","noopener");
  
    body.querySelectorAll(".chilli-card").forEach(card=>{
      card.onclick = () =>
        openPumpkinDetail(card.getAttribute("data-i"));
    });
  
    modal.classList.add("active");
  }
  
  function openPumpkinDetail(i){
    const v = pumpkinVarieties[i];
    const body = modal.querySelector(".modal-body");
  
    body.innerHTML = `
      <div class="chilli-header">
        <button class="btn btn-primary" id="backPumpkin">← Back</button>
        <div style="flex:1"></div>
        <a class="btn btn-primary" href="assets/pdfs/pumpkin.pdf" target="_blank" rel="noopener">
          Open PDF
        </a>
        <a class="btn btn-primary" href="assets/pdfs/pumpkin.pdf" download>
          Download PDF
        </a>
      </div>
  
      <div class="chilli-detail" style="grid-template-columns:1fr;">
        <div class="chilli-detail-left">
          <img src="${chilliImg(v.image)}" alt="${v.name}"
               style="width:100%;max-height:75vh;object-fit:contain;background:#fff;">
        </div>
      </div>
    `;
  
    document.getElementById("backPumpkin").onclick = openPumpkinCatalog;
  }
  function openCucumberCatalog(){
    const body = modal.querySelector(".modal-body");
    body.classList.add("chilli-modal");
  
    body.innerHTML = `
      <div class="chilli-header">
        <div>
          <div class="chilli-title">Cucumber</div>
          <div class="chilli-sub">Select cucumber variety</div>
        </div>
        <button class="btn btn-primary" id="openCucumberPdf">Package Of Practices</button>
      </div>
  
      <div class="chilli-grid">
        ${cucumberVarieties.map((v, i) => `
          <div class="chilli-card" data-i="${i}">
            <img src="${chilliImg(v.image)}" alt="${v.name}">
            <div class="cc-body">
              <h4>${v.name}</h4>
              <p>Click to view details</p>
            </div>
          </div>
        `).join("")}
      </div>
    `;
  
    document.getElementById("openCucumberPdf").onclick = () =>
      window.open("assets/pdfs/cucumber.pdf","_blank","noopener");
  
    body.querySelectorAll(".chilli-card").forEach(card=>{
      card.onclick = () => openCucumberDetail(card.getAttribute("data-i"));
    });
  
    modal.classList.add("active");
  }
  
  function openCucumberDetail(i){
    const v = cucumberVarieties[i];
    const body = modal.querySelector(".modal-body");
  
    body.innerHTML = `
      <div class="chilli-header">
        <button class="btn btn-primary" id="backCucumber">← Back</button>
        <div style="flex:1"></div>
        <a class="btn btn-primary" href="assets/pdfs/cucumber.pdf" target="_blank" rel="noopener">Open PDF</a>
         
      </div>
  
      <div class="chilli-detail" style="grid-template-columns:1fr;">
        <div class="chilli-detail-left">
          <img src="${chilliImg(v.image)}" alt="${v.name}"
               style="width:100%;max-height:75vh;object-fit:contain;background:#fff;">
        </div>
      </div>
    `;
  
    document.getElementById("backCucumber").onclick = openCucumberCatalog;
  }
  
  function openCapsicumCatalog(){
    const body = modal.querySelector(".modal-body");
    body.classList.add("chilli-modal");
  
    body.innerHTML = `
      <div class="chilli-header">
        <div>
          <div class="chilli-title">Capsicum</div>
          <div class="chilli-sub">Select capsicum variety</div>
        </div>
        <button class="btn btn-primary" id="openCapsicumPdf">
          Package Of Practices
        </button>
      </div>
  
      <div class="chilli-grid">
        ${capsicumVarieties.map((v, i) => `
          <div class="chilli-card" data-i="${i}">
            <img src="${chilliImg(v.image)}" alt="${v.name}">
            <div class="cc-body">
              <h4>${v.name}</h4>
              <p>Click to view details</p>
            </div>
          </div>
        `).join("")}
      </div>
    `;
  
    document.getElementById("openCapsicumPdf").onclick = () =>
      window.open("assets/pdfs/capsicum.pdf","_blank","noopener");
  
    body.querySelectorAll(".chilli-card").forEach(card=>{
      card.onclick = () => openCapsicumDetail(card.getAttribute("data-i"));
    });
  
    modal.classList.add("active");
  }
  
  function openCapsicumDetail(i){
    const v = capsicumVarieties[i];
    const body = modal.querySelector(".modal-body");
  
    body.innerHTML = `
      <div class="chilli-header">
        <button class="btn btn-primary" id="backCapsicum">← Back</button>
        <div style="flex:1"></div>
        <a class="btn btn-primary" href="assets/pdfs/capsicum.pdf" target="_blank" rel="noopener">
          Open PDF
        </a>
        <a class="btn btn-primary" href="assets/pdfs/capsicum.pdf" download>
          Download PDF
        </a>
      </div>
  
      <div class="chilli-detail" style="grid-template-columns:1fr;">
        <div class="chilli-detail-left">
          <img src="${chilliImg(v.image)}" alt="${v.name}"
               style="width:100%;max-height:75vh;object-fit:contain;background:#fff;">
        </div>
      </div>
    `;
  
    document.getElementById("backCapsicum").onclick = openCapsicumCatalog;
  }
  function openTomatoCatalog(){
    const body = modal.querySelector(".modal-body");
    body.classList.add("chilli-modal");
  
    body.innerHTML = `
      <div class="chilli-header">
        <div>
          <div class="chilli-title">Tomato</div>
          <div class="chilli-sub">Select tomato variety</div>
        </div>
        <button class="btn btn-primary" id="openTomatoPdf">Package Of Practices</button>
      </div>
  
      <div class="chilli-grid">
        ${tomatoVarieties.map((v, i) => `
          <div class="chilli-card" data-i="${i}">
            <img src="${chilliImg(v.image)}" alt="${v.name}">
            <div class="cc-body">
              <h4>${v.name}</h4>
              <p>Click to view details</p>
            </div>
          </div>
        `).join("")}
      </div>
    `;
  
    document.getElementById("openTomatoPdf").onclick = () =>
      window.open("assets/pdfs/tomato.pdf","_blank","noopener");
  
    body.querySelectorAll(".chilli-card").forEach(card=>{
      card.onclick = () => openTomatoDetail(card.getAttribute("data-i"));
    });
  
    modal.classList.add("active");
  }
  
  function openTomatoDetail(i){
    const v = tomatoVarieties[i];
    const body = modal.querySelector(".modal-body");
  
    body.innerHTML = `
      <div class="chilli-header">
        <button class="btn btn-primary" id="backTomato">← Back</button>
        <div style="flex:1"></div>
        <a class="btn btn-primary" href="assets/pdfs/tomato.pdf" target="_blank" rel="noopener">Open PDF</a>
         
      </div>
  
      <div class="chilli-detail" style="grid-template-columns:1fr;">
        <div class="chilli-detail-left">
          <img src="${chilliImg(v.image)}" alt="${v.name}"
               style="width:100%;max-height:75vh;object-fit:contain;background:#fff;">
        </div>
      </div>
    `;
  
    document.getElementById("backTomato").onclick = openTomatoCatalog;
  }
  
  function openCabbageCatalog(){
    const body = modal.querySelector(".modal-body");
    body.classList.add("chilli-modal");
  
    body.innerHTML = `
      <div class="chilli-header">
        <div>
          <div class="chilli-title">Cabbage</div>
          <div class="chilli-sub">Select cabbage variety</div>
        </div>
        <button class="btn btn-primary" id="openCabbagePdf">
          Package Of Practices
        </button>
      </div>
  
      <div class="chilli-grid">
        ${cabbageVarieties.map((v, i) => `
          <div class="chilli-card" data-i="${i}">
            <img src="${chilliImg(v.image)}" alt="${v.name}">
            <div class="cc-body">
              <h4>${v.name}</h4>
              <p>Click to view details</p>
            </div>
          </div>
        `).join("")}
      </div>
    `;
  
    document.getElementById("openCabbagePdf").onclick = () =>
      window.open("assets/pdfs/cabbage.pdf","_blank","noopener");
  
    body.querySelectorAll(".chilli-card").forEach(card=>{
      card.onclick = () => openCabbageDetail(card.getAttribute("data-i"));
    });
  
    modal.classList.add("active");
  }
  
  function openCabbageDetail(i){
    const v = cabbageVarieties[i];
    const body = modal.querySelector(".modal-body");
  
    body.innerHTML = `
      <div class="chilli-header">
        <button class="btn btn-primary" id="backCabbage">← Back</button>
        <div style="flex:1"></div>
        <a class="btn btn-primary" href="assets/pdfs/cabbage.pdf" target="_blank" rel="noopener">
          Open PDF
        </a>
        <a class="btn btn-primary" href="assets/pdfs/cabbage.pdf" download>
          Download PDF
        </a>
      </div>
  
      <div class="chilli-detail" style="grid-template-columns:1fr;">
        <div class="chilli-detail-left">
          <img src="${chilliImg(v.image)}" alt="${v.name}"
               style="width:100%;max-height:75vh;object-fit:contain;background:#fff;">
        </div>
      </div>
    `;
  
    document.getElementById("backCabbage").onclick = openCabbageCatalog;
  }
  function openMuskmelonCatalog(){
    const body = modal.querySelector(".modal-body");
    body.classList.add("chilli-modal");
  
    body.innerHTML = `
      <div class="chilli-header">
        <div>
          <div class="chilli-title">Muskmelon</div>
          <div class="chilli-sub">Select muskmelon variety</div>
        </div>
        <button class="btn btn-primary" id="openMuskmelonPdf">Package Of Practices</button>
      </div>
  
      <div class="chilli-grid">
        ${muskmelonVarieties.map((v, i) => `
          <div class="chilli-card" data-i="${i}">
            <img src="${chilliImg(v.image)}" alt="${v.name}">
            <div class="cc-body">
              <h4>${v.name}</h4>
              <p>Click to view details</p>
            </div>
          </div>
        `).join("")}
      </div>
    `;
  
    document.getElementById("openMuskmelonPdf").onclick = () =>
      window.open("assets/pdfs/muskmelon.pdf","_blank","noopener");
  
    body.querySelectorAll(".chilli-card").forEach(card=>{
      card.onclick = () => openMuskmelonDetail(card.getAttribute("data-i"));
    });
  
    modal.classList.add("active");
  }
  
  function openMuskmelonDetail(i){
    const v = muskmelonVarieties[i];
    const body = modal.querySelector(".modal-body");
  
    body.innerHTML = `
      <div class="chilli-header">
        <button class="btn btn-primary" id="backMuskmelon">← Back</button>
        <div style="flex:1"></div>
        <a class="btn btn-primary" href="assets/pdfs/muskmelon.pdf" target="_blank" rel="noopener">Open PDF</a>
        
      </div>
  
      <div class="chilli-detail" style="grid-template-columns:1fr;">
        <div class="chilli-detail-left">
          <img src="${chilliImg(v.image)}" alt="${v.name}"
               style="width:100%;max-height:75vh;object-fit:contain;background:#fff;">
        </div>
      </div>
    `;
  
    document.getElementById("backMuskmelon").onclick = openMuskmelonCatalog;
  }
  function openRadishCatalog(){
    const body = modal.querySelector(".modal-body");
    body.classList.add("chilli-modal");
  
    body.innerHTML = `
      <div class="chilli-header">
        <div>
          <div class="chilli-title">Radish</div>
          <div class="chilli-sub">Select radish variety</div>
        </div>
        <button class="btn btn-primary" id="openRadishPdf">
          Package Of Practices
        </button>
      </div>
  
      <div class="chilli-grid">
        ${radishVarieties.map((v, i) => `
          <div class="chilli-card" data-i="${i}">
            <img src="${chilliImg(v.image)}" alt="${v.name}">
            <div class="cc-body">
              <h4>${v.name}</h4>
              <p>Click to view details</p>
            </div>
          </div>
        `).join("")}
      </div>
    `;
  
    document.getElementById("openRadishPdf").onclick = () =>
      window.open("assets/pdfs/radish.pdf","_blank","noopener");
  
    body.querySelectorAll(".chilli-card").forEach(card=>{
      card.onclick = () => openRadishDetail(card.getAttribute("data-i"));
    });
  
    modal.classList.add("active");
  }
  
  function openRadishDetail(i){
    const v = radishVarieties[i];
    const body = modal.querySelector(".modal-body");
  
    body.innerHTML = `
      <div class="chilli-header">
        <button class="btn btn-primary" id="backRadish">← Back</button>
        <div style="flex:1"></div>
        <a class="btn btn-primary" href="assets/pdfs/radish.pdf" target="_blank" rel="noopener">
          Open PDF
        </a>
        <a class="btn btn-primary" href="assets/pdfs/radish.pdf" download>
          Download PDF
        </a>
      </div>
  
      <div class="chilli-detail" style="grid-template-columns:1fr;">
        <div class="chilli-detail-left">
          <img src="${chilliImg(v.image)}" alt="${v.name}"
               style="width:100%;max-height:75vh;object-fit:contain;background:#fff;">
        </div>
      </div>
    `;
  
    document.getElementById("backRadish").onclick = openRadishCatalog;
  }
  function openMarigoldCatalog(){
    const body = modal.querySelector(".modal-body");
    body.classList.add("chilli-modal");
  
    body.innerHTML = `
      <div class="chilli-header">
        <div>
          <div class="chilli-title">Marigold Flower</div>
          <div class="chilli-sub">Select marigold variety</div>
        </div>
        <button class="btn btn-primary" id="openMarigoldPdf">
          Package Of Practices
        </button>
      </div>
  
      <div class="chilli-grid">
        ${marigoldVarieties.map((v, i) => `
          <div class="chilli-card" data-i="${i}">
            <img src="${chilliImg(v.image)}" alt="${v.name}">
            <div class="cc-body">
              <h4>${v.name}</h4>
              <p>Click to view details</p>
            </div>
          </div>
        `).join("")}
      </div>
    `;
  
    document.getElementById("openMarigoldPdf").onclick = () =>
      window.open("assets/pdfs/marigold.pdf","_blank","noopener");
  
    body.querySelectorAll(".chilli-card").forEach(card=>{
      card.onclick = () => openMarigoldDetail(card.getAttribute("data-i"));
    });
  
    modal.classList.add("active");
  }
  
  function openMarigoldDetail(i){
    const v = marigoldVarieties[i];
    const body = modal.querySelector(".modal-body");
  
    body.innerHTML = `
      <div class="chilli-header">
        <button class="btn btn-primary" id="backMarigold">← Back</button>
        <div style="flex:1"></div>
        <a class="btn btn-primary" href="assets/pdfs/marigold.pdf" target="_blank" rel="noopener">
          Open PDF
        </a>
        <a class="btn btn-primary" href="assets/pdfs/marigold.pdf" download>
          Download PDF
        </a>
      </div>
  
      <div class="chilli-detail" style="grid-template-columns:1fr;">
        <div class="chilli-detail-left">
          <img src="${chilliImg(v.image)}" alt="${v.name}"
               style="width:100%;max-height:75vh;object-fit:contain;background:#fff;">
        </div>
      </div>
    `;
  
    document.getElementById("backMarigold").onclick = openMarigoldCatalog;
  }
  function openCauliflowerCatalog(){
    const body = modal.querySelector(".modal-body");
    body.classList.add("chilli-modal");
  
    body.innerHTML = `
      <div class="chilli-header">
        <div>
          <div class="chilli-title">Cauliflower</div>
          <div class="chilli-sub">Select cauliflower variety</div>
        </div>
        <button class="btn btn-primary" id="openCauliflowerPdf">
          Package Of Practices
        </button>
      </div>
  
      <div class="chilli-grid">
        ${cauliflowerVarieties.map((v, i) => `
          <div class="chilli-card" data-i="${i}">
            <img src="${chilliImg(v.image)}" alt="${v.name}">
            <div class="cc-body">
              <h4>${v.name}</h4>
              <p>Click to view details</p>
            </div>
          </div>
        `).join("")}
      </div>
    `;
  
    document.getElementById("openCauliflowerPdf").onclick = () =>
      window.open("assets/pdfs/cauliflower.pdf","_blank","noopener");
  
    body.querySelectorAll(".chilli-card").forEach(card=>{
      card.onclick = () => openCauliflowerDetail(card.getAttribute("data-i"));
    });
  
    modal.classList.add("active");
  }
  
  function openCauliflowerDetail(i){
    const v = cauliflowerVarieties[i];
    const body = modal.querySelector(".modal-body");
  
    body.innerHTML = `
      <div class="chilli-header">
        <button class="btn btn-primary" id="backCauliflower">← Back</button>
        <div style="flex:1"></div>
        <a class="btn btn-primary" href="assets/pdfs/cauliflower.pdf" target="_blank" rel="noopener">
          Open PDF
        </a>
        <a class="btn btn-primary" href="assets/pdfs/cauliflower.pdf" download>
          Download PDF
        </a>
      </div>
  
      <div class="chilli-detail" style="grid-template-columns:1fr;">
        <div class="chilli-detail-left">
          <img src="${chilliImg(v.image)}" alt="${v.name}"
               style="width:100%;max-height:75vh;object-fit:contain;background:#fff;">
        </div>
      </div>
    `;
  
    document.getElementById("backCauliflower").onclick = openCauliflowerCatalog;
  }
  
  function openSoybeanCatalog(){
  const body = modal.querySelector(".modal-body");
  body.classList.add("chilli-modal");

  body.innerHTML = `
    <div class="chilli-header">
      <div>
        <div class="chilli-title">Soybean</div>
        <div class="chilli-sub">Select soybean variety</div>
      </div>
      <button class="btn btn-primary" id="openSoybeanPdf">
        Package Of Practices
      </button>
    </div>

    <div class="chilli-grid">
      ${soybeanVarieties.map((v, i) => `
        <div class="chilli-card" data-i="${i}">
          <img src="${chilliImg(v.image)}" alt="${v.name}">
          <div class="cc-body">
            <h4>${v.name}</h4>
            <p>Click to view details</p>
          </div>
        </div>
      `).join("")}
    </div>
  `;

  document.getElementById("openSoybeanPdf").onclick = () =>
    window.open("assets/pdfs/soybean.pdf","_blank","noopener");

  body.querySelectorAll(".chilli-card").forEach(card=>{
    card.onclick = () => openSoybeanDetail(card.getAttribute("data-i"));
  });

  modal.classList.add("active");
}

function openSoybeanDetail(i){
  const v = soybeanVarieties[i];
  const body = modal.querySelector(".modal-body");

  body.innerHTML = `
    <div class="chilli-header">
      <button class="btn btn-primary" id="backSoybean">← Back</button>
      <div style="flex:1"></div>
      <a class="btn btn-primary" href="assets/pdfs/Soyabean.pdf" target="_blank" rel="noopener">
        Open PDF
      </a>
    </div>

    <div class="chilli-detail" style="grid-template-columns:1fr;">
      <div class="chilli-detail-left">
        <img src="${chilliImg(v.image)}" alt="${v.name}"
             style="width:100%;max-height:75vh;object-fit:contain;background:#fff;">
      </div>
    </div>
  `;

  document.getElementById("backSoybean").onclick = openSoybeanCatalog;
}
function openPigeonPeaCatalog(){
  const body = modal.querySelector(".modal-body");
  body.classList.add("chilli-modal");

  body.innerHTML = `
    <div class="chilli-header">
      <div>
        <div class="chilli-title">Pigeon Pea (Toor)</div>
        <div class="chilli-sub">Select pigeon pea variety</div>
      </div>
      <button class="btn btn-primary" id="openPigeonPeaPdf">
        Package Of Practices
      </button>
    </div>

    <div class="chilli-grid">
      ${pigeonPeaVarieties.map((v, i) => `
        <div class="chilli-card" data-i="${i}">
          <img src="${chilliImg(v.image)}" alt="${v.name}">
          <div class="cc-body">
            <h4>${v.name}</h4>
            <p>Click to view details</p>
          </div>
        </div>
      `).join("")}
    </div>
  `;

  document.getElementById("openPigeonPeaPdf").onclick = () =>
    window.open("assets/pdfs/pigeon_pea.pdf","_blank","noopener");

  body.querySelectorAll(".chilli-card").forEach(card=>{
    card.onclick = () => openPigeonPeaDetail(card.getAttribute("data-i"));
  });

  modal.classList.add("active");
}

function openPigeonPeaDetail(i){
  const v = pigeonPeaVarieties[i];
  const body = modal.querySelector(".modal-body");

  body.innerHTML = `
    <div class="chilli-header">
      <button class="btn btn-primary" id="backPigeonPea">← Back</button>
      <div style="flex:1"></div>
      <a class="btn btn-primary" href="assets/pdfs/pigeon_pea.pdf" target="_blank" rel="noopener">
        Open PDF
    </div>

    <div class="chilli-detail" style="grid-template-columns:1fr;">
      <div class="chilli-detail-left">
        <img src="${chilliImg(v.image)}" alt="${v.name}"
             style="width:100%;max-height:75vh;object-fit:contain;background:#fff;">
      </div>
    </div>
  `;

  document.getElementById("backPigeonPea").onclick = openPigeonPeaCatalog;
}

function openBottleGourdCatalog(){
  const body = modal.querySelector(".modal-body");
  body.classList.add("chilli-modal");

  body.innerHTML = `
    <div class="chilli-header">
      <div>
        <div class="chilli-title">Bottle Gourd (Lauki)</div>
        <div class="chilli-sub">Select bottle gourd variety</div>
      </div>
      <button class="btn btn-primary" id="openBottleGourdPdf">
        Package Of Practices
      </button>
    </div>

    <div class="chilli-grid">
      ${bottleGourdVarieties.map((v, i) => `
        <div class="chilli-card" data-i="${i}">
          <img src="${chilliImg(v.image)}" alt="${v.name}">
          <div class="cc-body">
            <h4>${v.name}</h4>
            <p>Click to view details</p>
          </div>
        </div>
      `).join("")}
    </div>
  `;

  document.getElementById("openBottleGourdPdf").onclick = () =>
    window.open("assets/pdfs/bottle_gourd.pdf","_blank","noopener");

  body.querySelectorAll(".chilli-card").forEach(card=>{
    card.onclick = () => openBottleGourdDetail(card.getAttribute("data-i"));
  });

  modal.classList.add("active");
}

function openBottleGourdDetail(i){
  const v = bottleGourdVarieties[i];
  const body = modal.querySelector(".modal-body");

  body.innerHTML = `
    <div class="chilli-header">
      <button class="btn btn-primary" id="backBottleGourd">← Back</button>
      <div style="flex:1"></div>
      <a class="btn btn-primary" href="assets/pdfs/bottle_gourd.pdf" target="_blank" rel="noopener">
        Open PDF
      </a>
       
    </div>

    <div class="chilli-detail" style="grid-template-columns:1fr;">
      <div class="chilli-detail-left">
        <img src="${chilliImg(v.image)}" alt="${v.name}"
             style="width:100%;max-height:75vh;object-fit:contain;background:#fff;">
      </div>
      <div class="chilli-actions" style="justify-content:center;">
        <a class="btn btn-primary" href="#contact">Quick Enquiry</a>
        <a class="btn btn-secondary" href="#products">Back to Products</a>
      </div>
    </div>
  `;

  document.getElementById("backBottleGourd").onclick = openBottleGourdCatalog;
}


  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // Hook chilli overlay click
  document.querySelectorAll(".open-chilli").forEach(btn => {
    btn.addEventListener("click", function(e){
      e.preventDefault();
      openChilliCatalog();
    });
  });
  
  document.querySelectorAll(".open-onion").forEach(btn=>{
    btn.addEventListener("click",e=>{
      e.preventDefault();
      openOnionCatalog();
    });
  });
  
  document.querySelectorAll('.product-card[data-product="onion"] .product-image img, .product-card[data-product="onion"] .product-info')
  .forEach(el=>{
    el.style.cursor="pointer";
    el.onclick=e=>{
      e.preventDefault();
      openOnionCatalog();
    };
  });
  
  document.querySelectorAll(".open-brinjal").forEach(btn=>{
    btn.addEventListener("click",e=>{
      e.preventDefault();
      openBrinjalCatalog();
    });
  });
  
  document.querySelectorAll('.product-card[data-product="brinjal"] .product-image img, .product-card[data-product="brinjal"] .product-info')
  .forEach(el=>{
    el.style.cursor="pointer";
    el.onclick=e=>{
      e.preventDefault();
      openBrinjalCatalog();
    };
  });
  
  document.querySelectorAll(".open-maize").forEach(btn=>{
    btn.addEventListener("click",e=>{
      e.preventDefault();
      openMaizeCatalog();
    });
  });
  
  document.querySelectorAll(
    '.product-card[data-product="maize"] .product-image img, .product-card[data-product="maize"] .product-info'
  ).forEach(el=>{
    el.style.cursor="pointer";
    el.onclick=e=>{
      e.preventDefault();
      openMaizeCatalog();
    };
  });
  
  
  document.querySelectorAll(".open-spongegourd").forEach(btn=>{
    btn.addEventListener("click",e=>{
      e.preventDefault();
      openSpongeGourdCatalog();
    });
  });
  
  document.querySelectorAll(
    '.product-card[data-product="spongegourd"] .product-image img, .product-card[data-product="spongegourd"] .product-info'
  ).forEach(el=>{
    el.style.cursor="pointer";
    el.onclick=e=>{
      e.preventDefault();
      openSpongeGourdCatalog();
    };
  });
  
  document.querySelectorAll(".open-ridgegourd").forEach(btn=>{
    btn.addEventListener("click",e=>{
      e.preventDefault();
      openRidgeGourdCatalog();
    });
  });
  
  document.querySelectorAll(
    '.product-card[data-product="ridgegourd"] .product-image img, .product-card[data-product="ridgegourd"] .product-info'
  ).forEach(el=>{
    el.style.cursor="pointer";
    el.onclick=e=>{
      e.preventDefault();
      openRidgeGourdCatalog();
    };
  });
  
  document.querySelectorAll(".open-watermelon").forEach(btn=>{
    btn.onclick = e => {
      e.preventDefault();
      openWatermelonCatalog();
    };
  });
  
  document.querySelectorAll(
    '.product-card[data-product="watermelon"] img, .product-card[data-product="watermelon"] .product-info'
  ).forEach(el=>{
    el.style.cursor="pointer";
    el.onclick = e => {
      e.preventDefault();
      openWatermelonCatalog();
    };
  });
  document.querySelectorAll(".open-bhendi").forEach(btn=>{
    btn.addEventListener("click", e=>{
      e.preventDefault();
      openBhendiCatalog();
    });
  });
  
  document.querySelectorAll(
    '.product-card[data-product="bhendi"] img, .product-card[data-product="bhendi"] .product-info'
  ).forEach(el=>{
    el.style.cursor="pointer";
    el.addEventListener("click", e=>{
      e.preventDefault();
      openBhendiCatalog();
    });
  });
  
  
  document.querySelectorAll(".open-karela").forEach(btn=>{
    btn.addEventListener("click", e=>{
      e.preventDefault();
      openKarelaCatalog();
    });
  });
  
  document.querySelectorAll(
    '.product-card[data-product="karela"] img, .product-card[data-product="karela"] .product-info'
  ).forEach(el=>{
    el.style.cursor="pointer";
    el.addEventListener("click", e=>{
      e.preventDefault();
      openKarelaCatalog();
    });
  });
  
  document.querySelectorAll(".open-pumpkin").forEach(btn=>{
    btn.addEventListener("click", e=>{
      e.preventDefault();
      openPumpkinCatalog();
    });
  });
  
  document.querySelectorAll(
    '.product-card[data-product="pumpkin"] img, .product-card[data-product="pumpkin"] .product-info'
  ).forEach(el=>{
    el.style.cursor="pointer";
    el.addEventListener("click", e=>{
      e.preventDefault();
      openPumpkinCatalog();
    });
  });
  
  document.querySelectorAll(".open-cucumber").forEach(btn=>{
    btn.addEventListener("click", e=>{
      e.preventDefault();
      openCucumberCatalog();
    });
  });
  
  document.querySelectorAll(
    '.product-card[data-product="cucumber"] img, .product-card[data-product="cucumber"] .product-info'
  ).forEach(el=>{
    el.style.cursor="pointer";
    el.addEventListener("click", e=>{
      e.preventDefault();
      openCucumberCatalog();
    });
  });
  document.querySelectorAll(".open-capsicum").forEach(btn=>{
    btn.addEventListener("click", e=>{
      e.preventDefault();
      openCapsicumCatalog();
    });
  });
  
  document.querySelectorAll(
    '.product-card[data-product="capsicum"] img, .product-card[data-product="capsicum"] .product-info'
  ).forEach(el=>{
    el.style.cursor="pointer";
    el.addEventListener("click", e=>{
      e.preventDefault();
      openCapsicumCatalog();
    });
  });
  
  document.querySelectorAll(".open-tomato").forEach(btn=>{
    btn.addEventListener("click", e=>{
      e.preventDefault();
      openTomatoCatalog();
    });
  });
  
  document.querySelectorAll(
    '.product-card[data-product="tomato"] img, .product-card[data-product="tomato"] .product-info'
  ).forEach(el=>{
    el.style.cursor="pointer";
    el.addEventListener("click", e=>{
      e.preventDefault();
      openTomatoCatalog();
    });
  });
  
  document.querySelectorAll(".open-cabbage").forEach(btn=>{
    btn.addEventListener("click", e=>{
      e.preventDefault();
      openCabbageCatalog();
    });
  });
  
  document.querySelectorAll(
    '.product-card[data-product="cabbage"] img, .product-card[data-product="cabbage"] .product-info'
  ).forEach(el=>{
    el.style.cursor="pointer";
    el.addEventListener("click", e=>{
      e.preventDefault();
      openCabbageCatalog();
    });
  });
  document.querySelectorAll(".open-muskmelon").forEach(btn=>{
    btn.addEventListener("click", e=>{
      e.preventDefault();
      openMuskmelonCatalog();
    });
  });
  
  document.querySelectorAll(
    '.product-card[data-product="muskmelon"] img, .product-card[data-product="muskmelon"] .product-info'
  ).forEach(el=>{
    el.style.cursor="pointer";
    el.addEventListener("click", e=>{
      e.preventDefault();
      openMuskmelonCatalog();
    });
  });
  document.querySelectorAll(".open-radish").forEach(btn=>{
    btn.addEventListener("click", e=>{
      e.preventDefault();
      openRadishCatalog();
    });
  });
  
  document.querySelectorAll(
    '.product-card[data-product="radish"] img, .product-card[data-product="radish"] .product-info'
  ).forEach(el=>{
    el.style.cursor="pointer";
    el.addEventListener("click", e=>{
      e.preventDefault();
      openRadishCatalog();
    });
  });
  document.querySelectorAll(".open-marigold").forEach(btn=>{
    btn.addEventListener("click", e=>{
      e.preventDefault();
      openMarigoldCatalog();
    });
  });
  
  document.querySelectorAll(
    '.product-card[data-product="marigold"] img, .product-card[data-product="marigold"] .product-info'
  ).forEach(el=>{
    el.style.cursor="pointer";
    el.addEventListener("click", e=>{
      e.preventDefault();
      openMarigoldCatalog();
    });
  });
  document.querySelectorAll(".open-cauliflower").forEach(btn=>{
    btn.addEventListener("click", e=>{
      e.preventDefault();
      openCauliflowerCatalog();
    });
  });
  
  document.querySelectorAll(
    '.product-card[data-product="cauliflower"] img, .product-card[data-product="cauliflower"] .product-info'
  ).forEach(el=>{
    el.style.cursor="pointer";
    el.addEventListener("click", e=>{
      e.preventDefault();
      openCauliflowerCatalog();
    });
  });
  document.querySelectorAll(".open-soybean").forEach(btn=>{
  btn.addEventListener("click", e=>{
    e.preventDefault();
    openSoybeanCatalog();
  });
});

document.querySelectorAll(
  '.product-card[data-product="soybean"] img, .product-card[data-product="soybean"] .product-info'
).forEach(el=>{
  el.style.cursor="pointer";
  el.addEventListener("click", e=>{
    e.preventDefault();
    openSoybeanCatalog();
  });
});
document.querySelectorAll(".open-pigeonpea").forEach(btn=>{
  btn.addEventListener("click", e=>{
    e.preventDefault();
    openPigeonPeaCatalog();
  });
});

document.querySelectorAll(
  '.product-card[data-product="pigeonpea"] img, .product-card[data-product="pigeonpea"] .product-info'
).forEach(el=>{
  el.style.cursor="pointer";
  el.addEventListener("click", e=>{
    e.preventDefault();
    openPigeonPeaCatalog();
  });
});
document.querySelectorAll(".open-bottlegourd").forEach(btn=>{
  btn.addEventListener("click", e=>{
    e.preventDefault();
    openBottleGourdCatalog();
  });
});

document.querySelectorAll(
  '.product-card[data-product="bottlegourd"] img, .product-card[data-product="bottlegourd"] .product-info'
).forEach(el=>{
  el.style.cursor="pointer";
  el.addEventListener("click", e=>{
    e.preventDefault();
    openBottleGourdCatalog();
  });
});




  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // Also open catalog when clicking the chilli product image/card (optional nice UX)
  document.querySelectorAll('.product-card[data-product="chilli"] .product-image img, .product-card[data-product="chilli"] .product-info')
    .forEach(el => {
      el.style.cursor = "pointer";
      el.addEventListener("click", (e) => {
        e.preventDefault();
        openChilliCatalog();
      });
    });
  
          // ==================== INTERSECTION OBSERVER FOR ANIMATIONS ====================
          const observerOptions = {
              threshold: 0.1,
              rootMargin: '0px 0px -50px 0px'
          };
  
          const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.style.opacity = '1';
                      entry.target.style.transform = 'translateY(0)';
                  }
              });
          }, observerOptions);
  
          // Observe all cards and sections
          document.querySelectorAll(
          '.feature-card, .product-card, .why-card, .gallery-item').forEach(el => {
              el.style.opacity = '0';
              el.style.transform = 'translateY(30px)';
              el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
              observer.observe(el);
          });
  
          // ==================== SEARCH FUNCTIONALITY ====================
          const searchInput = document.querySelector('.search-box input');
          const searchButton = document.querySelector('.search-box button');
  
          searchButton.addEventListener('click', function() {
              const searchTerm = searchInput.value.toLowerCase().trim();
              if (searchTerm) {
                  // Filter products
                  productCards.forEach(card => {
                      const productName = card.querySelector('.product-info h3').textContent.toLowerCase();
                      const productVariety = card.querySelector('.variety').textContent.toLowerCase();
                      
                      if (productName.includes(searchTerm) || productVariety.includes(searchTerm)) {
                          card.style.display = 'block';
                          card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      } else {
                          card.style.display = 'none';
                      }
                  });
                  
                  // Reset category buttons
                  categoryBtns.forEach(btn => btn.classList.remove('active'));
                  document.querySelector('[data-category="all"]').classList.add('active');
              }
          });
  
          searchInput.addEventListener('keypress', function(e) {
              if (e.key === 'Enter') {
                  searchButton.click();
              }
          });
  
          // ==================== DROPDOWN TOGGLE FOR MOBILE ====================
          if (window.innerWidth <= 992) {
              document.querySelectorAll('.nav-menu > li > a').forEach(link => {
                  if (link.querySelector('i')) {
                      link.addEventListener('click', function(e) {
                          e.preventDefault();
                          const dropdown = this.nextElementSibling;
                          if (dropdown) {
                              dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
                          }
                      });
                  }
              });
           }
  
          // ==================== LAZY LOADING IMAGES ====================
          if ('IntersectionObserver' in window) {
              const imageObserver = new IntersectionObserver((entries) => {
                  entries.forEach(entry => {
                      if (entry.isIntersecting) {
                          const img = entry.target;
                          if (img.dataset.src) {
                              img.src = img.dataset.src;
                              img.removeAttribute('data-src');
                          }
                          imageObserver.unobserve(img);
                      }
                  });
              });
  
              document.querySelectorAll('img[data-src]').forEach(img => {
                  imageObserver.observe(img);
              });
          }
  
          // ==================== ADD TO CART ANIMATION ====================
          document.querySelectorAll('.product-overlay a[title="Add to Cart"]').forEach(btn => {
              btn.addEventListener('click', function(e) {
                  e.preventDefault();
                  const icon = this.querySelector('i');
                  icon.classList.remove('fa-shopping-cart');
                  icon.classList.add('fa-check');
                  this.style.background = '#4caf50';
                  
                  setTimeout(() => {
                      icon.classList.remove('fa-check');
                      icon.classList.add('fa-shopping-cart');
                      this.style.background = '';
                  }, 1500);
              });
          });
  
          // ==================== WISHLIST TOGGLE ====================
          document.querySelectorAll('.product-overlay a[title="Wishlist"]').forEach(btn => {
              btn.addEventListener('click', function(e) {
                  e.preventDefault();
                  const icon = this.querySelector('i');
                  icon.classList.toggle('fas');
                  icon.classList.toggle('far');
                  
                  if (icon.classList.contains('fas')) {
                      icon.style.color = '#e91e63';
                  } else {
                      icon.style.color = '';
                  }
              });
          });
  
          console.log('🌱 Varad Seeds Website Loaded Successfully!');
