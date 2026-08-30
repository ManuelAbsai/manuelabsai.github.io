---
layout: qa-caso
title: "Actualización de perfil de usuario"
category: manual
order: 1
breadcrumb: "Pruebas manuales"
tool_meta: "Buggy Cars Rating · Partición de equivalencia y valores límite · 7 casos ejecutados"
summary: "Suite de siete casos derivada de una historia de usuario, con matriz de partición de equivalencia y valores límite para cinco campos. Se documentaron dos defectos, uno de ellos bloqueante del cambio de contraseña."
meta: ["7 casos de prueba", "5 campos analizados"]
findings: "2 defectos documentados"
sitemap: false
---

<div class="block">
  <h4 class="blocktitle">Historia de usuario</h4>
  <div class="story">
    <dl>
      <dt>Como</dt><dd>usuario del sitio Buggy Cars</dd>
      <dt>Quiero</dt><dd>una opción para actualizar mi perfil de usuario</dd>
      <dt>Para</dt><dd>poder cambiar mis datos personales</dd>
      <dt>Criterios de aceptación</dt>
      <dd>La página debe permitir actualizar nombre, apellido, dirección, teléfono y hobby. La contraseña requiere mínimo 6 caracteres, con una mayúscula y un carácter especial. Nombre y apellido son obligatorios y no pueden quedar vacíos.</dd>
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
          <td class="case-name">Actualizar todos los campos con datos válidos</td>
          <td>Nombre, apellido, dirección, teléfono, hobby</td>
          <td>El usuario se actualiza exitosamente</td>
          <td class="io-value obtenido">Mensaje "The profile has been saved successful"</td>
        </tr>
        <tr>
          <td><span class="rownum">2</span></td>
          <td class="case-name">Guardar dejando los campos en blanco</td>
          <td>Campos vacíos</td>
          <td>El sistema no permite guardar sin datos</td>
          <td class="io-value obtenido">Botón "save" bloqueado; error "First Name is required"</td>
        </tr>
        <tr class="fail">
          <td><span class="rownum">3</span></td>
          <td class="case-name">Nombre y apellido con caracteres no alfanuméricos, resto válido</td>
          <td>Nombre/apellido: <code>!"#$</code> · resto válido</td>
          <td>El sistema debe rechazar y mostrar error</td>
          <td class="io-value obtenido">El sistema guarda los cambios sin validar</td>
        </tr>
        <tr>
          <td><span class="rownum">4</span></td>
          <td class="case-name">Nombre y apellido válidos, dirección y teléfono inválidos</td>
          <td>Teléfono: <code>abc</code></td>
          <td>No debe permitir guardar datos de contacto inválidos</td>
          <td class="io-value obtenido">El campo teléfono rechaza caracteres no numéricos</td>
        </tr>
        <tr class="fail">
          <td><span class="rownum">5</span></td>
          <td class="case-name">Cambiar contraseña con cadena alfabética válida</td>
          <td>Nueva contraseña: <code>Abcde1234?</code></td>
          <td>El sistema debe permitir el cambio</td>
          <td class="io-value obtenido">Error desconocido, el cambio nunca se completa</td>
        </tr>
        <tr class="fail">
          <td><span class="rownum">6</span></td>
          <td class="case-name">Cambiar contraseña con cadena no alfabética</td>
          <td>Nueva contraseña: <code>!"#$</code></td>
          <td>El sistema debe rechazar y mostrar error</td>
          <td class="io-value obtenido">Error desconocido, el cambio nunca se completa</td>
        </tr>
        <tr class="fail">
          <td><span class="rownum">7</span></td>
          <td class="case-name">Cambiar contraseña dejando el campo vacío</td>
          <td>Contraseña vacía</td>
          <td>El sistema debe rechazar y mostrar error</td>
          <td class="io-value obtenido">Error desconocido, el cambio nunca se completa</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="compare-note">← desliza en móvil si la tabla no cabe en pantalla</div>
</div>

<div class="block">
  <h4 class="blocktitle">Defectos reportados</h4>

  <div class="defect">
    <div class="defect-id">ID-2 / SP-3 · Prioridad moderada</div>
    <p class="defect-title">El sistema guarda nombre y apellido inválidos</p>
    <p>Los campos aceptan caracteres no alfanuméricos y permiten guardar el perfil, incumpliendo el criterio de aceptación. Se esperaba un mensaje de error que bloqueara la operación; el sistema la completó sin restricción.</p>
  </div>

  <div class="defect">
    <div class="defect-id">ID-2 / SP-567 · Prioridad mayor</div>
    <p class="defect-title">El cambio de contraseña nunca se completa</p>
    <p>Cualquier intento de actualizar la contraseña —con valores válidos, inválidos o vacíos— devuelve un mensaje de "error desconocido". La funcionalidad queda inutilizable para el usuario en cualquier escenario.</p>
  </div>
</div>

<div class="block">
  <h4 class="blocktitle">Evidencia</h4>
  <div class="figs">
    <figure class="figure">
      <img src="{{ '/assets/qa/perfil/cp-3.png' | relative_url }}" alt="CP-3 — el perfil se guarda con nombre y apellido inválidos">
      <figcaption class="figcaption">CP-3 — el perfil se guarda con datos inválidos</figcaption>
    </figure>
    <figure class="figure">
      <img src="{{ '/assets/qa/perfil/cp-5.png' | relative_url }}" alt="CP-5 — error desconocido al cambiar la contraseña">
      <figcaption class="figcaption">CP-5 — error desconocido al cambiar la contraseña</figcaption>
    </figure>
    <figure class="figure">
      <img src="{{ '/assets/qa/perfil/cp-1.png' | relative_url }}" alt="CP-1 — actualización exitosa del perfil">
      <figcaption class="figcaption">CP-1 — actualización exitosa con datos válidos</figcaption>
    </figure>
    <figure class="figure">
      <img src="{{ '/assets/qa/perfil/cp-2.png' | relative_url }}" alt="CP-2 — validación de campos obligatorios">
      <figcaption class="figcaption">CP-2 — bloqueo al dejar campos obligatorios vacíos</figcaption>
    </figure>
  </div>
</div>
