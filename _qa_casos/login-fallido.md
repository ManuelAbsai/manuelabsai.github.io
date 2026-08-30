---
layout: qa-caso
title: "Login fallido con credenciales incorrectas"
category: automatizacion
order: 4
breadcrumb: "Automatización"
tool_meta: "Cypress · shop.geekqa.net · Prueba negativa"
summary: "Prueba negativa que confirma el mensaje de error y verifica que la URL permanezca en la página de login, sin acceso a áreas restringidas."
meta: ["Cypress", "Prueba negativa"]
findings: "Video de ejecución"
sitemap: false
---

<div class="block">
  <h4 class="blocktitle">Objetivo</h4>
  <table class="matrix">
    <tr><td style="width:150px;">Herramienta</td><td>Cypress, JavaScript, Visual Studio Code</td></tr>
    <tr><td>Sitio de prueba</td><td><a href="https://shop.geekqa.net/litecart/public_html/">shop.geekqa.net/litecart</a></td></tr>
    <tr><td>Flujo</td><td>Acceder al sitio → click en "Sign In" → ingresar credenciales incorrectas → click en "Login" → validar redirección y mensaje de error</td></tr>
    <tr><td>Resultado</td><td>El sistema respondió correctamente ante las credenciales inválidas, mostró el mensaje de error esperado y mantuvo al usuario en la página de login</td></tr>
  </table>
</div>

<div class="block" style="max-width:none;">
  <h4 class="blocktitle">Aserciones ejecutadas</h4>
  <div class="table-scroll">
    <table class="assertions">
      <thead>
        <tr><th></th><th>Paso / aserción</th><th>Dato de entrada</th><th>Resultado esperado</th><th>Resultado obtenido</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><span class="rownum">1</span></td>
          <td class="step-name">Ingresar credenciales inválidas y enviar login</td>
          <td><code>CorreError@outlook.com</code> / <code>ContraseñaError</code></td>
          <td>El sistema rechaza el acceso</td>
          <td>Acceso rechazado, sin sesión iniciada</td>
        </tr>
        <tr>
          <td><span class="rownum">2</span></td>
          <td class="step-name">Verificar URL tras el intento fallido</td>
          <td>—</td>
          <td><span class="assert-code">cy.url().should("eq", ".../login")</span></td>
          <td>Permanece en /login, sin acceso a zona restringida</td>
        </tr>
        <tr>
          <td><span class="rownum">3</span></td>
          <td class="step-name">Verificar mensaje de error visible</td>
          <td>—</td>
          <td><span class="assert-code">.alert-danger.should("contain.text","not exist")</span></td>
          <td>Alerta roja mostrada con el texto esperado</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="compare-note">← desliza en móvil si la tabla no cabe en pantalla</div>
</div>

<div class="block">
  <h4 class="blocktitle">Script</h4>
  <pre class="code">describe ("Test suite - conjunto de pruebas", () => {
    beforeEach(() => {
        cy.visit("https://shop.geekqa.net/litecart/public_html/")
    })

    it ("Login fallido con credenciales incorrectas", () => {
        //ingresar información
        cy.get("#offcanvas").contains(" Sign In").click()
        cy.get(".dropdown-menu.dropdown-menu-end").find('input[name="email"]').type("CorreError@outlook.com")
        cy.get(".dropdown-menu.dropdown-menu-end").find('input[name="password"]').type("ContraseñaError")
        cy.get(".dropdown-menu.dropdown-menu-end").find('button[name="login"]').click()

        //Confirmación de error en inicio de sesión
        cy.url().should("eq", "https://shop.geekqa.net/litecart/public_html/login")
        cy.get("#notices").find(".alert.alert-danger").should("contain.text", "not exist")
    })
})</pre>
</div>

<div class="block">
  <h4 class="blocktitle">Notas</h4>
  <p style="font-size:14.5px;max-width:62ch;">Verifica el correcto manejo de errores del sistema. La validación con <code>should("contain.text", "not exist")</code> detecta texto parcial y evita fallos si cambia el formato exacto del mensaje. Validar también la URL asegura que no se accede a áreas restringidas tras un login fallido — mantener pruebas negativas en el portafolio muestra un enfoque de calidad más completo.</p>
</div>

<div class="block">
  <h4 class="blocktitle">Evidencia</h4>
  <div class="figs single">
    <figure class="figure">
      <video controls preload="metadata" src="{{ '/assets/qa/login-fallido/ejecucion.mp4' | relative_url }}"></video>
      <figcaption class="figcaption">Video de la ejecución — Login_error_test.mp4</figcaption>
    </figure>
  </div>
</div>
