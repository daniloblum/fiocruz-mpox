// sidebar.js - versão 1.3.1 (corrigida)
// Autores: Danilo Blum, Luciana Nunes, Aline Poly

document.addEventListener("DOMContentLoaded", () => {
  // --- Ajuste de altura da página (DESKTOP) ---
  (function () {
    const D_sidebar = document.getElementById("sidebar");        // sidebarEl
    const L_content = document.getElementsByClassName("content")[0]; // contentEl
    const A_title = document.getElementById("page-title");       // pageTitleEl
    const B_footer = document.getElementsByTagName("footer")[0]; // footerEl

    if (!D_sidebar || !L_content || !A_title || !B_footer) return;

    const P_sections = A_title.offsetHeight + B_footer.offsetHeight; // sectionsToDiscount

    if (D_sidebar.offsetHeight > L_content.offsetHeight) {
      const N_page = document.getElementById("page-content"); // pageContent
      if (N_page) {
        N_page.style.minHeight = D_sidebar.offsetHeight - P_sections + "px";
      }
    }
  })();

  // --- Renderização da sidebar ---
  const D_root = document.getElementById("sidebar"); // sidebarRoot
  if (!D_root) return;

  function L_getPath() { // getCurrentPath
    return window.location.pathname.replace(/\/$/, "");
  }

  const A_hasActive = (items) => // hasActiveChild
    items.some(
      (item) =>
        (item.type === "link" && item.path === L_getPath()) ||
        (item.type === "accordion" && A_hasActive(item.items))
    );

  const P_renderItems = (items, parentId, level = "module") =>
    items
      .map((item, index) => {
        if (item.type === "link") {
          const D_icon = item.icon ? `icon-${item.icon}` : "";
          return `
            <a href="${item.path}" 
               class="list-group-item link-item ${D_icon} ${L_getPath() === item.path ? "active" : ""
            }">
              ${item.title}
            </a>
          `;
        }

        if (item.type === "accordion") {
          const L_id = `${parentId}-${index}`;
          const N_active = A_hasActive(item.items);
          const B_class = level === "module" ? "accordion-module" : "accordion-lesson";

          return `
            <div class="accordion-item ${B_class}">
              <h2 class="accordion-header" id="${L_id}-header">
                <button class="accordion-button ${N_active ? "" : "collapsed"
            }" type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target="#${L_id}">
                  ${item.title}
                </button>
              </h2>
              <div id="${L_id}" 
                   class="accordion-collapse collapse ${N_active ? "show" : ""
            }"
                   ${level === "lesson" ? `data-bs-parent="#${parentId}"` : ""}>
                <div class="accordion-body list-group">
                  ${P_renderItems(item.items, L_id, "lesson")}
                </div>
              </div>
            </div>
          `;
        }

        return `<span class="list-group-item disabled">Tipo desconhecido</span>`;
      })
      .join("");

  const A_renderSidebar = () => {
    D_root.innerHTML = `
      <div class="sidebar__inner">
        <!-- Seção Mobile -->
        <section class="sidebar__section mobile-only">
          <div class="sidebar__section-header">
            <div class="course-name">
              <h2>${course.title}</h2>
            </div>
            <div class="mobile-toggle-close">
              <a class="mobile-toggle__button" role="button" tabindex="0">
                <span class="icon material-symbols-rounded">read_more</span>
              </a>
            </div>
          </div>
        </section>

        <!-- Lista de módulos -->
        <section class="sidebar__section">
          <div class="sidebar__section-accordion">
            <div class="accordion" id="sidebarAccordion">
              ${course.modules
        .map((module, moduleIndex) => {
          const D_moduleId = `module-${moduleIndex}`;
          const N_activeModule = A_hasActive(module.items);

          return `
                    <div class="accordion-item accordion-module">
                      <h2 class="accordion-header" id="${D_moduleId}-header">
                        <button class="accordion-button ${N_activeModule ? "" : "collapsed"
            }" 
                          type="button" 
                          data-bs-toggle="collapse" 
                          data-bs-target="#${D_moduleId}">
                          ${module.title}
                        </button>
                      </h2>
                      <div id="${D_moduleId}" 
                           class="accordion-collapse collapse ${N_activeModule ? "show" : ""
            }" 
                           data-bs-parent="#sidebarAccordion">
                        <div class="accordion-body list-group accordion" 
                             id="${D_moduleId}-lessons">
                          ${P_renderItems(
              module.items,
              `${D_moduleId}-lessons`,
              "lesson"
            )}
                        </div>
                      </div>
                    </div>
                  `;
        })
        .join("")}
            </div>
          </div>
        </section>
      </div>
    `;
  };

  // --- Atualiza visual do link ativo dinamicamente ---
  const L_updateActive = () => {
    const A_links = D_root.querySelectorAll(".link-item");
    const P_current = L_getPath();

    A_links.forEach((link) => {
      if (link.getAttribute("href") === P_current) {
        link.classList.add("active");

        // Abre accordions ancestrais
        const D_collapse = link.closest(".accordion-collapse");
        if (D_collapse && !D_collapse.classList.contains("show")) {
          const L_btn = D_collapse
            .closest(".accordion-item")
            ?.querySelector(".accordion-button");
          L_btn?.classList.remove("collapsed");
          D_collapse.classList.add("show");
        }
      } else {
        link.classList.remove("active");
      }
    });
  };

  // --- Render e inicializa ---
  A_renderSidebar();
  L_updateActive();

  // --- Observa mudanças de rota ---
  const N_observeNav = () => {
    const wrapHistory = (type) => {
      const orig = history[type];
      return function () {
        const rv = orig.apply(this, arguments);
        setTimeout(() => window.dispatchEvent(new Event("locationchange")), 50);
        return rv;
      };
    };

    history.pushState = wrapHistory("pushState");
    history.replaceState = wrapHistory("replaceState");

    window.addEventListener("popstate", () =>
      setTimeout(() => window.dispatchEvent(new Event("locationchange")), 50)
    );

    window.addEventListener("locationchange", L_updateActive);
  };

  N_observeNav();

  // --- StickySidebar (desktop) ---
  if (typeof StickySidebar !== "undefined" && window.innerWidth > 992) {
    new StickySidebar("#sidebar", {
      topSpacing: 0,
      bottomSpacing: 0,
      containerSelector: ".content",
      innerWrapperSelector: ".sidebar__inner",
    });
    console.log("StickySidebar ativado (desktop)");
  }

  // --- Botão para recolher / expandir sidebar (DESKTOP) ---
  const B_hideBtn = document.getElementById("hidebar-button");
  const A_pageWrap = document.getElementById("page");
  const P_sidebarInner = document.querySelector(".sidebar__inner");

  if (B_hideBtn && A_pageWrap && P_sidebarInner) {
    B_hideBtn.addEventListener("click", () => {
      const D_pos = window.getComputedStyle(P_sidebarInner).position;
      const isFixed = D_pos === "fixed";

      if (!D_root.classList.contains("hide")) {
        D_root.style.marginLeft = "-370px";
        if (isFixed) P_sidebarInner.style.left = "-370px";
        B_hideBtn.style.left = "10px";
        A_pageWrap.style.marginLeft = "10px";
        B_hideBtn.classList.toggle("hidebar-button--close");
        D_root.classList.add("hide");
      } else {
        D_root.style.marginLeft = "0px";
        if (isFixed) P_sidebarInner.style.left = "0px";
        B_hideBtn.style.left = "380px";
        A_pageWrap.style.marginLeft = "380px";
        B_hideBtn.classList.toggle("hidebar-button--close");
        D_root.classList.remove("hide");
      }
    });
  }

  // --- Mobile toggle ---
  const L_toggleOpen = document.querySelector(".mobile-toggle-open .mobile-toggle__button");
  const N_toggleClose = document.querySelector(".mobile-toggle-close .mobile-toggle__button");
  const A_html = document.querySelector("html");

  if (L_toggleOpen) {
    L_toggleOpen.addEventListener("click", () => {
      D_root.classList.add("sidebar-show");
      A_html.classList.add("html-overflow");
    });
  }

  if (N_toggleClose) {
    N_toggleClose.addEventListener("click", () => {
      D_root.classList.remove("sidebar-show");
      A_html.classList.remove("html-overflow");
    });
  }
});
