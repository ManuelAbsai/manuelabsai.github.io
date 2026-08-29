---
layout: qa-caso
title: "Registro de usuario nuevo"
category: manual
order: 2
breadcrumb: "Pruebas manuales"
tool_meta: "Buggy Cars Rating · Validación de campos obligatorios · 4 casos ejecutados"
summary: "Validación de campos obligatorios, longitud mínima de contraseña y unicidad de la cuenta. Cuatro casos ejecutados contra los criterios de aceptación, todos con el comportamiento esperado."
meta: ["4 casos de prueba", "Pruebas positivas y negativas"]
sitemap: false
---

<div class="block">
  <h4 class="blocktitle">Historia de usuario</h4>
  <div class="story">
    <dl>
      <dt>Como</dt><dd>usuario del sitio Buggy Cars</dd>
      <dt>Quiero</dt><dd>una opción para registrar mi usuario y contraseña</dd>
      <dt>Para</dt><dd>poder crear mis credenciales de acceso al sitio</dd>
      <dt>Criterios de aceptación</dt>
      <dd>El registro solicita login, nombre, apellido y contraseña; todos los campos son obligatorios. La contraseña requiere mínimo 6 caracteres, con una mayúscula y un carácter especial. Un usuario solo puede registrarse una vez.</dd>
    </dl>
  </div>
</div>

<div class="block">
  <h4 class="blocktitle">Suite de pruebas</h4>
  <table class="matrix">
    <thead><tr><th></th><th>Caso</th><th>Resultado</th></tr></thead>
    <tbody>
      <tr><td>1</td><td>Registrar un nuevo usuario llenando todos los campos correctamente</td><td class="result ok">Aprobado</td></tr>
      <tr><td>2</td><td>Registrar dejando los campos requeridos en blanco</td><td class="result ok">Aprobado</td></tr>
      <tr><td>3</td><td>Registrar con una contraseña de 4 caracteres</td><td class="result ok">Aprobado</td></tr>
      <tr><td>4</td><td>Registrar un usuario ya existente</td><td class="result ok">Aprobado</td></tr>
    </tbody>
  </table>
</div>

<div class="block">
  <h4 class="blocktitle">Resultado</h4>
  <p style="font-size:14.5px;max-width:62ch;">En los cuatro casos el sistema respondió conforme a los criterios de aceptación: bloqueó el botón de registro con campos vacíos, mostró el mensaje de longitud mínima ante una contraseña corta, e impidió registrar dos veces el mismo usuario. No se documentaron defectos en esta suite.</p>
</div>

<div class="block">
  <h4 class="blocktitle">Evidencia</h4>
  <div class="figs">
    <figure class="figure">
      <img src="{{ '/assets/qa/registro/cp-1.png' | relative_url }}" alt="CP-1 — registro exitoso">
      <figcaption class="figcaption">CP-1 — registro completado con datos válidos</figcaption>
    </figure>
    <figure class="figure">
      <img src="{{ '/assets/qa/registro/cp-2.png' | relative_url }}" alt="CP-2 — bloqueo con campos vacíos">
      <figcaption class="figcaption">CP-2 — botón de registro bloqueado con campos vacíos</figcaption>
    </figure>
    <figure class="figure">
      <img src="{{ '/assets/qa/registro/cp-4a.png' | relative_url }}" alt="CP-4 — usuario ya existente, parte 1">
      <figcaption class="figcaption">CP-4 — mensaje al registrar un usuario existente</figcaption>
    </figure>
    <figure class="figure">
      <img src="{{ '/assets/qa/registro/cp-4b.png' | relative_url }}" alt="CP-4 — usuario ya existente, parte 2">
      <figcaption class="figcaption">CP-4 — detalle del mensaje de error</figcaption>
    </figure>
  </div>
</div>
