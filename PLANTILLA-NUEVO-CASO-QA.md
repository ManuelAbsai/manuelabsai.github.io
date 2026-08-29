<!--
  CÓMO USAR ESTA PLANTILLA
  ========================
  1. Copia todo el contenido de este archivo.
  2. En GitHub, ve a la carpeta _qa_casos/ → "Add file" → "Create new file".
  3. Nómbralo con guiones, sin espacios ni acentos, terminado en .md
     Ejemplos: prueba-carrito-vacio.md · api-postman-login.md
  4. Pega el contenido copiado y rellena lo que está entre < >.
  5. Borra los bloques (<div class="block">...) que no apliquen a este caso.
  6. Commit directo a "main". Jekyll publica en 1-3 minutos.
  7. NO necesitas tocar qa/index.html — el caso aparece solo en su sección
     (manual o automatizacion) según lo que pongas en "category", ordenado
     por el número en "order".

  Borra este bloque de comentario antes de guardar el archivo real.
-->
---
layout: qa-caso
title: "<Título del caso, tal como debe verse en la lista y en el detalle>"
category: <manual o automatizacion>
order: <número — controla el orden dentro de su sección, 1 = primero>
breadcrumb: "<Pruebas manuales o Automatización>"
tool_meta: "<Herramienta/sitio · dato clave · ej: 5 casos ejecutados>"
summary: "<2-3 líneas que aparecen en la tarjeta de la portada, resumiendo qué se hizo y qué se encontró>"
meta: ["<dato corto 1>", "<dato corto 2>"]
findings: "<opcional — solo si hay algo que resaltar en guindo, ej: '1 defecto documentado' o 'Video de ejecución'. Borra esta línea si no aplica>"
sitemap: false
---

<!-- ============ HISTORIA DE USUARIO (solo pruebas manuales) ============ -->
<div class="block">
  <h4 class="blocktitle">Historia de usuario</h4>
  <div class="story">
    <dl>
      <dt>Como</dt><dd>...</dd>
      <dt>Quiero</dt><dd>...</dd>
      <dt>Para</dt><dd>...</dd>
      <dt>Criterios de aceptación</dt>
      <dd>...</dd>
    </dl>
  </div>
</div>

<!-- ============ SUITE DE PRUEBAS (pruebas manuales) ============ -->
<div class="block">
  <h4 class="blocktitle">Suite de pruebas</h4>
  <table class="matrix">
    <thead><tr><th></th><th>Caso</th><th>Resultado</th></tr></thead>
    <tbody>
      <!-- usa class="result ok" para Aprobado, class="result gap" para Fallido/Defecto -->
      <tr><td>1</td><td>...</td><td class="result ok">Aprobado</td></tr>
      <tr><td>2</td><td>...</td><td class="result gap">Fallido</td></tr>
    </tbody>
  </table>
</div>

<!-- ============ OBJETIVO (casos de automatización) ============ -->
<div class="block">
  <h4 class="blocktitle">Objetivo</h4>
  <table class="matrix">
    <tr><td style="width:150px;">Herramienta</td><td>...</td></tr>
    <tr><td>Sitio de prueba</td><td><a href="...">...</a></td></tr>
    <tr><td>Flujo</td><td>...</td></tr>
    <tr><td>Resultado</td><td>...</td></tr>
  </table>
</div>

<!-- ============ SCRIPT (casos de automatización) ============ -->
<div class="block">
  <h4 class="blocktitle">Script</h4>
  <pre class="code">pega aquí tu código tal cual, sin sangrías raras</pre>
</div>

<!-- ============ DEFECTOS (solo si encontraste bugs) ============ -->
<div class="block">
  <h4 class="blocktitle">Defectos reportados</h4>
  <div class="defect">
    <div class="defect-id">ID · Prioridad</div>
    <p class="defect-title">Título corto del defecto</p>
    <p>Descripción: qué se esperaba vs. qué ocurrió realmente.</p>
  </div>
</div>

<!-- ============ NOTAS (opcional, comentarios técnicos) ============ -->
<div class="block">
  <h4 class="blocktitle">Notas</h4>
  <p style="font-size:14.5px;max-width:62ch;">...</p>
</div>

<!-- ============ EVIDENCIA — imágenes ============
     Antes de pegar esto, sube tus capturas a:
     assets/qa/<nombre-de-tu-caso>/tu-imagen.png
-->
<div class="block">
  <h4 class="blocktitle">Evidencia</h4>
  <div class="figs">
    <figure class="figure">
      <img src="{{ '/assets/qa/<carpeta>/<archivo>.png' | relative_url }}" alt="descripción breve">
      <figcaption class="figcaption">Descripción de la captura</figcaption>
    </figure>
  </div>
</div>

<!-- ============ EVIDENCIA — video (usa esta versión en vez de la de arriba si es un video) ============
     El navegador reproduce .mp4 de forma nativa. Si tu video es .mkv, conviértelo primero
     (cualquier convertidor gratuito en línea sirve) — .mkv no se reproduce en Chrome.
-->
<div class="block">
  <h4 class="blocktitle">Evidencia</h4>
  <div class="figs single">
    <figure class="figure">
      <video controls preload="metadata" src="{{ '/assets/qa/<carpeta>/<archivo>.mp4' | relative_url }}"></video>
      <figcaption class="figcaption">Video de la ejecución — nombre-del-archivo.mp4</figcaption>
    </figure>
  </div>
</div>
