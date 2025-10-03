// sidebar.js - versão 1.2 (produção)
document.addEventListener("DOMContentLoaded", () => {


  // --- Mobile toggle ---
  const sidebarToggleOpen = document.querySelector(
    ".mobile-toggle-open .mobile-toggle__button"
  );
  const sidebarToggleClose = document.querySelector(
    ".mobile-toggle-close .mobile-toggle__button"
  );
  const sidebarShow = document.querySelector("#sidebar");

  if (sidebarToggleOpen) {
    sidebarToggleOpen.addEventListener("click", () => {
      sidebarShow?.classList.add("show");
    });
  }
  if (sidebarToggleClose) {
    sidebarToggleClose.addEventListener("click", () => {
      sidebarShow?.classList.remove("show");
    });
  }

  // --- Renderização da sidebar ---
  const sidebarRoot = document.getElementById("sidebar");
  if (!sidebarRoot) return;

  const currentPath = window.location.pathname;

  function hasActiveChild(items) {
    return items.some(
      (item) =>
        (item.type === "link" && item.path === currentPath) ||
        (item.type === "accordion" && hasActiveChild(item.items))
    );
  }

  function renderItems(items, parentId, typeLevel = "module") {
    return items
      .map((item, index) => {
        if (item.type === "link") {
          const iconClass = item.icon ? `icon-${item.icon}` : "";
          return `<a href="${item.path}" class="list-group-item link-item ${iconClass} ${currentPath === item.path ? "active" : ""
            }">${item.title}</a>`;
        }

        if (item.type === "accordion") {
          const accordionId = `${parentId}-${index}`;
          const isActive = item.items.some(
            (child) =>
              (child.type === "link" && child.path === currentPath) ||
              (child.type === "accordion" && hasActiveChild(child.items))
          );

          const accordionClass =
            typeLevel === "module" ? "accordion-module" : "accordion-lesson";

          return `
            <div class="accordion-item ${accordionClass}">
              <h2 class="accordion-header" id="${accordionId}-header">
                <button class="accordion-button ${isActive ? "" : "collapsed"}"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#${accordionId}">
                  ${item.title}
                </button>
              </h2>
              <div id="${accordionId}" class="accordion-collapse collapse ${isActive ? "show" : ""
            }" ${typeLevel === "lesson" ? `data-bs-parent="#${parentId}"` : ""}>
                <div class="accordion-body list-group">
                  ${renderItems(item.items, accordionId, "lesson")}
                </div>
              </div>
            </div>
          `;
        }

        return `<span class="list-group-item disabled">Tipo desconhecido</span>`;
      })
      .join("");
  }

  // --- Inserir HTML da sidebar + módulos ---
  sidebarRoot.innerHTML = `
    <div class="sidebar__inner">
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
      <section class="sidebar__section">
        <div class="sidebar__section-hidebar">
          <a role="button" tabindex="0">
            <span class="material-symbols-rounded">left_panel_close</span>
          </a>
        </div>
      </section>
      <section class="sidebar__section">
        <div class="sidebar__section-accordion">
          <div class="accordion" id="sidebarAccordion">
            ${course.modules
      .map((module, moduleIndex) => {
        const moduleId = `module-${moduleIndex}`;
        const isActive = module.items.some(
          (item) =>
            (item.type === "link" && item.path === currentPath) ||
            (item.type === "accordion" && hasActiveChild(item.items))
        );

        return `
                  <div class="accordion-item accordion-module">
                    <h2 class="accordion-header" id="${moduleId}-header">
                      <button class="accordion-button ${isActive ? "" : "collapsed"
          }" type="button" data-bs-toggle="collapse" data-bs-target="#${moduleId}">
                        ${module.title}
                      </button>
                    </h2>
                    <div id="${moduleId}" class="accordion-collapse collapse ${isActive ? "show" : ""
          }" data-bs-parent="#sidebarAccordion">
                      <div class="accordion-body list-group accordion" id="${moduleId}-lessons">
                        ${renderItems(module.items, `${moduleId}-lessons`, "lesson")}
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

  // --- Inicializa StickySidebar (script separado no HTML) ---
  if (typeof StickySidebar !== "undefined") {
    new StickySidebar("#sidebar", {
      topSpacing: 0,
      bottomSpacing: 0,
      containerSelector: ".main",
      innerWrapperSelector: ".sidebar__inner",
      minWidth: 991,
    });
  }

  // --- Ajuste de altura da página (DESKTOP) ---
  // (function () {
  //   let sidebarEl = document.getElementById("sidebar");
  //   let contentEl = document.getElementsByClassName("content")[0];
  //   let pageTitleEl = document.getElementById("page-title");
  //   let footerEl = document.getElementsByTagName("footer")[0];

  //   if (!sidebarEl || !contentEl || !pageTitleEl || !footerEl) return;

  //   let sectionsToDiscount = pageTitleEl.offsetHeight + footerEl.offsetHeight;

  //   if (sidebarEl.offsetHeight > contentEl.offsetHeight) {
  //     let pageContent = document.getElementById("page-content");
  //     if (pageContent) {
  //       pageContent.style.minHeight =
  //         sidebarEl.offsetHeight - sectionsToDiscount + "px";
  //     }
  //   }
  // })();

  (function () {

    const sidebarEl = document.querySelector('#sidebar');
    const pageTitleEl = document.querySelector('#page-title');
    const pageContentEl = document.querySelector('#page-content');
    const navTopicsEl = document.querySelector('#nav-topics');
    const footerEl = document.querySelector('footer');

    const sidebarHeight = sidebarEl.offsetHeight;
    const pageTitleHeight = pageTitleEl.offsetHeight;
    const pageContentHeight = pageContentEl.offsetHeight;
    const navTopicsHeight = navTopicsEl.offsetHeight;
    const footerHeight = footerEl.offsetHeight;

    console.log(
      "sidebar ", sidebarHeight,
      "page-title ", pageTitleHeight,
      "page-content ", pageContentHeight,
      "nav-topics ", navTopicsHeight,
      "footer ", footerHeight
    )
    console.log(pageTitleHeight + pageContentHeight + navTopicsHeight + footerHeight)

    const compareToHeight = pageTitleHeight + pageContentHeight + navTopicsHeight + footerHeight

    const sectionsToDiscount = pageTitleHeight + navTopicsHeight + footerHeight;

    if (sidebarHeight > compareToHeight) {


      pageContentEl.style.minHeight = sidebarHeight - sectionsToDiscount + 'px';
      console.log("maior", pageContentEl.offsetHeight)

      //($(".sidebar").height() - ($(".header").height() + 2 * $("footer").height()))
    } else {
      console.log("menor")

    }
  })();


});
