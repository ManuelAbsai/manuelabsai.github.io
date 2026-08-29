---
layout: qa-caso
title: "Compra end-to-end"
category: automatizacion
order: 1
breadcrumb: "Automatización"
tool_meta: "Katalon Recorder · shop.geekqa.net · Flujo completo de 16 pasos"
summary: "Flujo completo desde el catálogo hasta la confirmación del pedido, con validación del mensaje de éxito. Requirió manejo de carga dinámica del carrito."
meta: ["Katalon Recorder", "16 pasos"]
findings: "Video de ejecución"
sitemap: false
---

<div class="block">
  <h4 class="blocktitle">Objetivo</h4>
  <table class="matrix">
    <tr><td style="width:150px;">Herramienta</td><td>Katalon Recorder (extensión de navegador)</td></tr>
    <tr><td>Sitio de prueba</td><td><a href="https://shop.geekqa.net/litecart/public_html/">shop.geekqa.net/litecart</a></td></tr>
    <tr><td>Flujo</td><td>Ingresar al sitio → agregar producto al carrito → checkout → llenar datos del comprador → confirmar la compra → validar mensaje de éxito → finalizar sesión</td></tr>
    <tr><td>Resultado</td><td>El mensaje de confirmación fue detectado correctamente con <code>verifyText</code>; el flujo se completó sin interrupciones</td></tr>
  </table>
</div>

<div class="block">
  <h4 class="blocktitle">Script</h4>
  <pre class="code">open	https://shop.geekqa.net/litecart/public_html/
click	xpath=//img[@alt='Yellow Duck']
click	name=add_cart_product
pause	2000
click	xpath=//a[@id='cart']/div[2]
click	name=firstname
type	name=firstname	Manuel
type	name=lastname	Absaí
type	name=address1	Calle1
type	name=postcode	22013
type	name=city	Monterrey
select	name=country_code	label=Albania
type	name=email	manuelabsai@outlook.com
type	name=phone	5553423123
click	name=save_customer_details
click	name=terms_agreed
click	name=confirm_order
verifyText	xpath=//section[@id='box-order-success']/div[2]/p
        Thank you for your purchase. An order confirmation email has been sent. We will process your order shortly.</pre>
</div>

<div class="block">
  <h4 class="blocktitle">Notas</h4>
  <p style="font-size:14.5px;max-width:62ch;">El sitio carga dinámicamente algunos elementos, como el carrito, por lo que fue necesario agregar una pausa. Se usó <code>verifyText</code> para confirmar el mensaje de éxito tras completar la compra, asegurando que el flujo se ejecutó correctamente de inicio a fin.</p>
</div>

<div class="block">
  <h4 class="blocktitle">Evidencia</h4>
  <div class="figs">
    <figure class="figure">
      <img src="{{ '/assets/qa/compra/intro-shop.png' | relative_url }}" alt="Página de inicio de la tienda de prueba">
      <figcaption class="figcaption">Página de inicio del sitio de prueba</figcaption>
    </figure>
  </div>
  <p style="font-size:12.5px;font-family:'IBM Plex Mono',monospace;color:var(--faint);margin-top:14px;">
    Video de la ejecución completa disponible en <code>/assets/qa/compra/ejecucion.mkv</code> — pendiente de convertir a .mp4 para reproducirse en el navegador.
  </p>
</div>
