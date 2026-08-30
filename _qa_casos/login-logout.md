---
layout: qa-caso
title: "Inicio y cierre de sesión"
category: automatizacion
order: 3
breadcrumb: "Automatización"
tool_meta: "Cypress · shop.geekqa.net · Flujo completo"
summary: "Doble validación del login: mensaje de confirmación y nombre de usuario visible. Sin esperas explícitas, aprovechando el manejo dinámico de Cypress."
meta: ["Cypress", "Flujo completo"]
findings: "Video de ejecución"
sitemap: false
---

<div class="block">
  <h4 class="blocktitle">Objetivo</h4>
  <table class="matrix">
    <tr><td style="width:150px;">Herramienta</td><td>Cypress, JavaScript, Visual Studio Code</td></tr>
    <tr><td>Sitio de prueba</td><td><a href="https://shop.geekqa.net/litecart/public_html/">shop.geekqa.net/litecart</a></td></tr>
    <tr><td>Flujo</td><td>Acceder al sitio → click en "Sign In" → ingresar correo y contraseña → validar mensaje de inicio exitoso → validar nombre de usuario visible → logout → validar mensaje de cierre de sesión</td></tr>
    <tr><td>Resultado</td><td>Todas las validaciones fueron exitosas; el flujo se ejecutó sin errores y se confirmaron los mensajes esperados en cada paso</td></tr>
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
          <td class="step-name">Iniciar sesión con credenciales válidas</td>
          <td>Correo y contraseña de prueba</td>
          <td>La sesión inicia correctamente</td>
          <td>Login exitoso</td>
        </tr>
        <tr>
          <td><span class="rownum">2</span></td>
          <td class="step-name">Verificar confirmación de inicio de sesión</td>
          <td>—</td>
          <td><span class="assert-code">.alert-success.should("contain.text","logged")</span></td>
          <td>Mensaje de confirmación mostrado</td>
        </tr>
        <tr>
          <td><span class="rownum">3</span></td>
          <td class="step-name">Verificar nombre de usuario visible</td>
          <td>—</td>
          <td>"Manuel" visible en el menú</td>
          <td>Nombre de usuario visible tras el login</td>
        </tr>
        <tr>
          <td><span class="rownum">4</span></td>
          <td class="step-name">Cerrar sesión y verificar confirmación</td>
          <td>—</td>
          <td><span class="assert-code">.alert-success.should("contain.text","logged out")</span></td>
          <td>Mensaje de cierre de sesión confirmado</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="compare-note">← desliza en móvil si la tabla no cabe en pantalla</div>
</div>

<div class="block">
  <h4 class="blocktitle">Script</h4>
  <pre class="code">describe("Test suite - conjunto de pruebas", () => {
    beforeEach(() => {
        cy.visit("https://shop.geekqa.net/litecart/public_html/")
    })

    it("Login test", () => {
        //ingresar información
        cy.get("#offcanvas").contains(" Sign In").click()
        cy.get(".dropdown-menu.dropdown-menu-end").find('input[name="email"]').type("Correodeprueba@outlook.com")
        cy.get(".dropdown-menu.dropdown-menu-end").find('input[name="password"]').type(".123123123.")
        cy.get(".dropdown-menu.dropdown-menu-end").find('button[name="login"]').click()

        //Confirmación de inicio de sesión
        cy.get("#notices").find(".alert.alert-success").should("contain.text", "logged")
        cy.get("#offcanvas").contains(" Manuel").should("be.visible")

        //Logout
        cy.get("#offcanvas").find(".nav-item.account.dropdown").click()
        cy.get(".nav-item.account.dropdown").contains("Logout").click()

        //confirmación logout
        cy.get("#notices").find(".alert.alert-success").should("contain.text", "logged out")
    })
})</pre>
</div>

<div class="block">
  <h4 class="blocktitle">Notas</h4>
  <p style="font-size:14.5px;max-width:62ch;">Se usó una doble validación para confirmar el login: mensaje de éxito y nombre visible del usuario. El uso de <code>contains()</code> y <code>find()</code> permite localizar elementos sin depender de clases genéricas. Se evitaron esperas (<code>wait()</code>) innecesarias, ya que Cypress maneja bien los tiempos de espera dinámicos.</p>
</div>

<div class="block">
  <h4 class="blocktitle">Evidencia</h4>
  <div class="figs single">
    <figure class="figure">
      <video controls preload="metadata" src="{{ '/assets/qa/login-logout/ejecucion.mp4' | relative_url }}"></video>
      <figcaption class="figcaption">Video de la ejecución — Login_Test.mp4</figcaption>
    </figure>
  </div>
</div>
