---
layout: qa-caso
title: "Smoke test de la página de inicio"
category: automatizacion
order: 2
breadcrumb: "Automatización"
tool_meta: "Cypress · shop.geekqa.net · 3 bloques de prueba"
summary: "Tres bloques de aserciones independientes que verifican logo, banner, secciones de producto y que cada sección liste al menos un artículo."
meta: ["Cypress", "3 bloques de prueba"]
findings: "Video de ejecución"
sitemap: false
---

<div class="block">
  <h4 class="blocktitle">Objetivo</h4>
  <table class="matrix">
    <tr><td style="width:150px;">Herramienta</td><td>Cypress, JavaScript, Visual Studio Code</td></tr>
    <tr><td>Sitio de prueba</td><td><a href="https://shop.geekqa.net/litecart/public_html/">shop.geekqa.net/litecart</a></td></tr>
    <tr><td>Validaciones</td><td>Logo y banner visibles · secciones "Campaign Products", "Popular Products" y "Latest Products" presentes · al menos un producto listado en cada sección</td></tr>
    <tr><td>Resultado</td><td>La página cargó exitosamente; todos los elementos y secciones fueron detectados y mostrados correctamente por Cypress</td></tr>
  </table>
</div>

<div class="block">
  <h4 class="blocktitle">Script</h4>
  <pre class="code">describe("Test suite - conjunto de pruebas", () => {
    beforeEach(() => {
        cy.visit("https://shop.geekqa.net/litecart/public_html/")
    })

    it("Validación pagina de inicio", () => {
        cy.get('img[alt="Rocket Cart"]').should("be.visible")
        cy.get("#site-menu").find('img[alt="Geek Toys Store"]').should("be.visible")
    })

    it("Validación de secciónes", () => {
        cy.get("#box-campaign-products").contains("Campaign Products").should("be.visible")
        cy.get("#box-popular-products").contains("Popular Products").should("be.visible")
        cy.get("#box-latest-products").contains("Latest Products").should("be.visible")
    })

    it("Validación Productos", () => {
        cy.get("#box-campaign-products").find("article").should("have.length.at.least", 1)
        cy.get("#box-popular-products").find("article").should("have.length.at.least", 1)
        cy.get("#box-latest-products").find("article").should("have.length.at.least", 1)
    })
})</pre>
</div>

<div class="block">
  <h4 class="blocktitle">Notas</h4>
  <p style="font-size:14.5px;max-width:62ch;">Sirve como verificación inicial básica (smoke test) para confirmar que el sitio está en línea y cargando sus componentes clave, y permite detectar fallos graves antes de correr pruebas más complejas. Está dividido en bloques <code>it</code> separados para aislar y depurar errores si una sección específica falla.</p>
</div>

<div class="block">
  <h4 class="blocktitle">Evidencia</h4>
  <div class="figs single">
    <figure class="figure">
      <video controls preload="metadata" src="{{ '/assets/qa/smoke/ejecucion.mp4' | relative_url }}"></video>
      <figcaption class="figcaption">Video de la ejecución — Smoke_test.mp4</figcaption>
    </figure>
  </div>
</div>
