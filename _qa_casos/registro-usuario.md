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

<div class="block" style="max-width:none;">
  <h4 class="blocktitle">Suite de pruebas</h4>
  <div class="table-scroll">
    <table class="matrix2">
      <thead>
        <tr><th></th><th>Caso de prueba</th><th>Datos de entrada</th><th>Resultado esperado</th><th>Resultado obtenido</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><span class="rownum">1</span></td>
          <td class="case-name">Registrar un nuevo usuario llenando todos los campos correctamente</td>
          <td>Login, nombre, apellido, contraseña</td>
          <td>El usuario se registra exitosamente</td>
          <td class="io-value obtenido">Mensaje confirmando el registro</td>
        </tr>
        <tr>
          <td><span class="rownum">2</span></td>
          <td class="case-name">Registrar dejando los campos requeridos en blanco</td>
          <td>Sin datos</td>
          <td>El sistema debe solicitar los datos faltantes</td>
          <td class="io-value obtenido">Botón de registro bloqueado (sombreado)</td>
        </tr>
        <tr>
          <td><span class="rownum">3</span></td>
          <td class="case-name">Registrar con una contraseña de 4 caracteres</td>
          <td>Contraseña: 4 caracteres</td>
          <td>Debe mostrar error indicando el mínimo requerido</td>
          <td class="io-value obtenido">Mensaje solicitando el mínimo de caracteres</td>
        </tr>
        <tr>
          <td><span class="rownum">4</span></td>
          <td class="case-name">Registrar un usuario ya existente</td>
          <td>Login y contraseña de una cuenta ya registrada</td>
          <td>Debe indicar que el usuario ya existe</td>
          <td class="io-value obtenido">Mensaje confirmando que el usuario ya existe</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="compare-note">← desliza en móvil si la tabla no cabe en pantalla</div>
</div>

<div class="block">
  <h4 class="blocktitle">Resultado</h4>
  <p style="font-size:14.5px;max-width:62ch;">En los cuatro casos el sistema respondió conforme a los criterios de aceptación. No se documentaron defectos en esta suite.</p>
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
