---
layout: post
title: "La soberanía digital se sostiene"
date: 2026-08-30
tag: Ensayo
readTime: 13 min
featured: true
description: China ordenó a sus agencias de gobierno salir de Windows. Venezuela lo decretó en 2004 y no se cumplió. Francia lleva dieciocho años y va en el 97%. La diferencia no está en el software.
---

Hace unos meses instalé Fedora en una laptop vieja que ya no servía, quería ver si podía revivirla, y la verdad resultó bastante más fácil de lo que esperaba. La máquina volvió a arrancar, dejó de calentarse y con la RAM que tenía era suficiente para correr el OS. Me di cuenta de que lo que no sirve es Windows 11, no mi lap, que ya quedó usable nuevamente y es de donde escribo esto.

Me gustó tanto que decidí instalarlo en mi PC principal. Ahí ya no me gustó tanto, tardé todo un sábado (desayuné y cené frente al monitor), se ha roto al menos dos veces, he pasado tardes enteras leyendo foros y consultando IAs para entender por qué el sistema no arranca, pero volver a Windows ya no es opción.

Cuento esto porque hace unos días salió una nota que me hizo pensar en todo ese tiempo invertido en Linux. China ordenó a algunas de sus agencias de gobierno abandonar Windows y migrar a distribuciones Linux de fabricación nacional. La noticia circuló como un triunfo del software libre, como el inicio de una nueva era de la democracia del software. A mí me parece que es bastante exagerado verlo de esa manera, creo que podemos darle una lectura diferente.

## Qué pasó

Debemos regresar a la nota, porque se está contando mal, o al menos exagerada. No es un decreto general que obligue a toda la administración china a usar Linux. Según el reporte de Bloomberg que originó todo, el Ministerio de Seguridad del Estado instruyó a [ciertas entidades vinculadas al gobierno](https://www.tomshardware.com/software/operating-systems/china-reportedly-orders-state-agencies-to-uninstall-its-government-only-edition-of-windows-10) a retirar de sus sistemas una versión muy específica: Windows 10 China Government Edition.

Esa versión no la hizo Microsoft por su cuenta, salió de C&M Information Technologies, conocida como CMIT, una empresa creada en 2016 como coinversión entre Microsoft y China Electronics Technology Group, que es estatal y tiene la participación mayoritaria. [Microsoft lo anunció en Shanghái en mayo de 2017](https://blogs.windows.com/windowsexperience/2017/05/23/announcing-windows-10-china-government-edition-new-surface-pro/), con Lenovo como socio para preinstalarlo y con la aduana china, la ciudad de Shanghái y una empresa estatal como primeros clientes piloto.

No es el Windows que conocemos, fue una versión recortada, le quitaron OneDrive y otros servicios de consumo, le dieron al gobierno control sobre la telemetría y las actualizaciones, rutearon las actualizaciones y la activación de licencias por infraestructura dentro de China, y permitieron sustituir la criptografía de Microsoft por algoritmos de cifrado chinos. Un Windows a la medida, negociado durante dos años y [con fecha de expiración para 2027](https://techstory.in/china-moves-government-desktops-from-windows-to-linux/).

En 2019 China ya había ordenado sustituir todos los equipos de marcas extranjeras en las administraciones centrales en un plazo de tres años, y [en 2022 la medida se extendió a las empresas estatales](https://eloutput.com/noticias/aplicaciones/china-acelera-la-retirada-de-windows-10-en-sus-administraciones-y-refuerza-el-software-local/). Esto lleva años en marcha.

Entonces no es por propia iniciativa, ya que iba a expirar, y tampoco es algo nuevo, ya que la orden de la migración ya se había dado. Ahora, cuánto de esa campaña ha llegado a la gente. En julio de este año Windows representaba el 87.64% del tráfico web de escritorio en China, según datos de StatCounter. Windows 10 todavía era el 43.56% del uso de Windows en el país, nueve meses después de que Microsoft terminara el soporte general. Alrededor de dos de cada cinco computadoras de escritorio chinas corren hoy un sistema de Microsoft sin soporte.

La migración es del aparato estatal, mientras la población sigue por otro rumbo. Ahora bien, cuando se conoció la noticia, las acciones de Hunan Kylinsec y Archermind Technology, dos de los principales desarrolladores de software alternativo chino, subieron hasta el límite diario permitido del 20% en la bolsa de Shanghái. La soberanía digital también cotiza.

## Soberanía no es igual que libertad

Aquí está lo que me interesa del asunto, y es donde creo los entusiastas se equivocan.

Las dos alternativas más consolidadas para sustituir a Windows son KylinOS y UOS, de UnionTech. Ambas corren sobre Linux, son técnicamente sólidas, y llevan años posicionadas como opciones domésticas para agencias de gobierno, empresas estatales e infraestructura crítica.

[Kylin se empezó a desarrollar en 2001](https://en.wikipedia.org/wiki/Kylin_(operating_system)) en la Universidad Nacional de Tecnología de Defensa, dentro del Programa 863, un plan estatal cuyo objetivo explícito era volver a China independiente de la tecnología extranjera. Las primeras versiones estaban basadas en FreeBSD y estaban destinadas al ejército chino y a organizaciones de gobierno. Hoy, junto con su variante NeoKylin, dominan el sector gubernamental chino, aunque conviene tomar con pinzas las cifras exactas que circulan: la más repetida habla de un 90% de ese mercado, pero se cita sin fecha ni fuente original desde hace años.

O sea, no es un proyecto comunitario que el Estado adoptó. Es un proyecto militar y estatal desde su primer día.

Esto no lo digo como denuncia. Un país que quiere depender menos de la infraestructura tecnológica de otro tiene razones legítimas para desarrollar la propia, y de hecho me parece sensato que lo haga. Lo que quiero señalar es otra cosa: que un funcionario chino pase de un sistema operativo que responde a una corporación estadounidense a uno que responde a su propio Estado no le devuelve a ese funcionario ninguna capacidad nueva sobre su máquina. Cambia quién tiene la llave. No cambia si él la tiene.

Y esa distinción es la misma que ya pensamos en el artículo sobre el fracking en Coahuila, donde la nación es dueña del subsuelo en el papel mientras el dinero se va por otro lado. La propiedad formal no dice nada sobre quién controla en los hechos.

Existe openKylin, la versión realmente abierta del proyecto, disponible para cualquiera. Pero no es lo que se está desplegando en las oficinas de gobierno.

## Tres intentos, tres resultados

La pregunta es por qué a algunos les funciona migrar y a otros no. Conviene revisar algunos casos para tratar de responderlo.

**Venezuela lo intentó primero.** El 23 de diciembre de 2004, Hugo Chávez firmó el [Decreto 3.390](https://www.gacetaoficial.io/venezuela/2004-12-28-gaceta-oficial-38095), publicado cinco días después en la Gaceta Oficial 38.095, que establecía que la administración pública nacional emplearía prioritariamente software libre con estándares abiertos. Los considerandos son casi los mismos argumentos que usa China hoy: fortalecer la industria nacional de software, reducir la brecha tecnológica, garantizar la interoperabilidad del Estado. Solo que enmarcados como soberanía popular y no como seguridad nacional.

El decreto fijaba veinticuatro meses para completar la migración en todos los entes de gobierno.

¿Qué pasó después? No sé, es más difícil de responder de lo que debería. No encontré ninguna evaluación oficial del Estado venezolano sobre el cumplimiento de ese plazo, ni un balance público de cuántas instituciones migraron. Incluso el texto del decreto sobrevive hoy en copias académicas y comunitarias, sin una página oficial del Estado venezolano que lo publique, o al menos yo no la encontré. Lo que hay son trabajos académicos y proyectos de migración publicados institución por institución durante los años siguientes, lo que sugiere que el proceso continuaba mucho después del plazo fijado, y diagnósticos que repiten las mismas razones: resistencia del personal, capacitación insuficiente, falta de decisión de las jefaturas.

Eso es todo lo que puedo afirmar con lo que hay disponible. Que un decreto de esta importancia no tenga una evaluación pública de resultados veinte años después ya dice algo por sí mismo.

**Francia lo hizo distinto.** La Gendarmería Nacional empezó en 2004 cambiando programas sueltos, primero el navegador, después la suite de oficina. Recién en 2008 lanzó GendBuntu, su propia versión de Ubuntu, y desde entonces fue migrando máquinas de forma gradual, año con año, con capacitación al personal y un equipo dedicado a sostenerlo.

Para junio de 2024 corría en [103,164 estaciones de trabajo, el 97% del parque](https://thenextweb.com/news/france-linux-windows-migration-digital-sovereignty) de la institución. El ahorro ronda los dos millones de euros anuales solo en licencias, y el costo total de propiedad bajó alrededor del 40%. Es la migración de escritorio a Linux más grande y más sostenida que existe.

Y ahora Francia está escalando eso a todo el gobierno. En febrero de este año la dirección digital del Estado francés [citó explícitamente a la Gendarmería](https://techhq.com/news/france-digital-sovereignty-linux-migration/) como el modelo de gobernanza para el despliegue nacional, con la instrucción de que los ministerios sigan el mismo camino gradual: primero las aplicaciones, después el sistema operativo. La razón que dio el gobierno francés fue que su dependencia de la tecnología estadounidense constituye un riesgo estratégico.

**Y México tiene su propio caso.** En 2022 el colectivo Guacamaya se llevó seis terabytes de correos y documentos de la Secretaría de la Defensa Nacional, material que iba de 2016 a 2022. La entrada no fue por una hazaña de espionaje sofisticado. Fue por un servidor Zimbra sin actualizar.

Zimbra había publicado el parche [desde marzo de ese año](https://www.volexity.com/blog/2022/08/10/mass-exploitation-of-unauthenticated-zimbra-rce-cve-2022-27925/), según la investigación de Volexity, la firma que documentó la explotación masiva de esa vulnerabilidad. La Sedena no lo aplicó y los hackers entraron en agosto, cinco meses después, y ellos mismos lo dijeron en [una entrevista con La Lista](https://la-lista.com/mexico/2022/10/10/hackers-guacamaya-entrevista-exclusiva-con-el-grupo-hacktivista): la Sedena dejó amablemente su servidor sin actualizar todo ese tiempo. Y ni siquiera fueron los primeros. Al entrar encontraron [rastros de otros intrusos](https://www.xataka.com.mx/seguridad/grupo-que-hackeo-sedena-dice-que-no-fueron-unicos-entrar-a-servidores-habia-evidencia-que-alguien-tenia-acceso) metidos en el servidor desde el 5 de julio. El 17 de octubre de 2025, el secretario Ricardo Trevilla [lo reconoció públicamente como falla humana](https://grupoanimal.mx/seguridad/hackeo-guacamaya-leaks-error-humano-sedena).

Zimbra no es software pirata, es una plataforma de correo que existe en dos ediciones, una libre de código abierto y una comercial de pago, y los reportes técnicos del caso señalan que las vulnerabilidades explotadas afectaban a la edición comercial, que era la que corría la Sedena. El problema nunca fue el origen del software sino que nadie lo mantuvo.

Según el análisis de Article 19, la Sedena [siguió pidiendo cotizaciones a empresas de la red de Pegasus](https://ddosecrets.substack.com/p/sedena-mexico-secretaria-defensa-nacional): a Comercializadora Antsua en noviembre de 2020, a Proyectos y Diseños VME en marzo de 2021, y a KBH Track en abril de 2022, cuando el parche de Zimbra que nunca aplicaron ya llevaba semanas publicado. Había presupuesto y gestiones para comprar software de vigilancia, pero no para actualizar el servidor de correo. Eso da para un texto aparte, pero conviene dejarlo anotado.

Tres países con tres resultados distintos. Lo que separa a Francia de los otros dos no es la ideología, ni la marca del software, ni siquiera el presupuesto. Es que le metieron dieciocho años, gente capacitada y mantenimiento constante.

Volviendo a las distribuciones chinas, KylinOS 10 salió en 2020 con la versión 4.19 del núcleo de Linux, cuyo soporte terminó en diciembre de 2024. La versión 11, lanzada en 2025, usa el núcleo 6.6, cuyo soporte [termina en diciembre de este año](https://www.theregister.com/2025/08/29/kylinos_11/), dieciséis meses después del lanzamiento. Mantener un sistema operativo sobre un núcleo sin soporte es exactamente el mismo problema que tenía la Sedena con Zimbra, solo que a escala nacional.

## El privilegio de migrar

Yo pude migrar. Tenía una laptop vieja de sobra para experimentar sin arriesgar nada, tenía tiempo libre para dedicarle tardes enteras, tenía conocimientos previos suficientes para entender qué estaba leyendo en los foros, y tenía cómo resolverlo cuando se rompió. Nada de eso es mérito sino condiciones materiales.

Alguien que use su única computadora para trabajar no puede permitirse que el sistema no arranque un martes en horario laboral. Quien nunca ha tocado una terminal no va a saber qué hacer cuando algo falle. El que trabaja diez horas al día no tiene tardes para leer documentación.

La mayoría de la gente no podrá migrar, otros no querrán, y están en su derecho. Pero muchísimos ni siquiera saben que existe la opción.

Ese último grupo es el que me interesa, porque no está eligiendo nada. No sabe que hay algo llamado software libre, ni qué implicaciones tiene usarlo, ni que existen proyectos comunitarios que uno puede modificar y adaptar a lo que necesita. No es que hayan evaluado la alternativa y la hayan descartado. Es que la alternativa nunca apareció frente a ellos como algo posible.

En [*Vigilar y castigar*](https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S1870-23332010000100002) Foucault plantea que el poder y el saber se producen mutuamente: no hay relación de poder que no constituya al mismo tiempo un campo de saber, ni saber que no implique relaciones de poder. El conocimiento no flota libre en el aire esperando a que alguien lo tome. Está organizado, distribuido y administrado, y esa distribución es en sí misma una forma de poder.

Que la mayoría de la gente no sepa qué hace su computadora no es una casualidad ni una falta de curiosidad personal. Es el resultado de un arreglo donde el conocimiento técnico se concentra en quien lo produce y lo vende, mientras el usuario recibe una caja que funciona y no se pregunta más. La opacidad es parte del diseño del producto.

Es la misma estructura que observamos en el texto anterior sobre el fracking. Lo que enferma ahí no es solo el riesgo, es el riesgo sin información. Es no saber qué te están inyectando debajo de la casa y no tener forma de averiguarlo. La estructura es idéntica cuando no puedes saber qué hace tu máquina con lo que escribes en ella. En los dos casos la impotencia no es una percepción exagerada, es una descripción correcta de la posición de indefensión en la que uno está.

## En México

En nuestro país no tenemos esta discusión. Francia calificó su dependencia de la tecnología estadounidense como un riesgo estratégico y actuó en consecuencia. China lleva más de dos décadas desarrollando su propio sistema operativo desde una universidad militar. Venezuela lo intentó por decreto y le salió mal, pero al menos lo intentó.

Aquí la Secretaría de la Defensa perdió seis terabytes por no aplicar un parche publicado cuatro meses antes, mientras pedía cotizaciones de software espía.

Lo que estos casos muestran juntos es que la soberanía tecnológica no se declara, se sostiene. Requiere gente capacitada, presupuesto continuo, mantenimiento y años de trabajo. Y todo eso es una decisión sobre a quién se le asigna el gasto público, que es siempre una decisión de clase.

Un país que no produce su tecnología y tampoco invierte en la capacidad de mantener la que usa termina en la peor posición posible: dependiente de fuera y vulnerable adentro. Es la misma conclusión a la que llegué escribiendo sobre el gas de Coahuila, en otro terreno y con otros actores.

Yo seguiré usando Fedora, y probablemente se me vuelva a romper. Pero cuando eso pasa puedo entender qué salió mal, buscar en dónde, y arreglarlo. Esa posibilidad es lo que estamos discutiendo cuando hablamos de software libre, y no debería depender de tener una laptop vieja de repuesto y tardes libres.

---

**Fuentes**

- Tom's Hardware, "China reportedly orders state agencies to uninstall its government-only edition of Windows 10" (agosto de 2026) — [alcance de la directiva y datos de StatCounter](https://www.tomshardware.com/software/operating-systems/china-reportedly-orders-state-agencies-to-uninstall-its-government-only-edition-of-windows-10)
- Windows Experience Blog, "Announcing Windows 10 China Government Edition and the new Surface Pro" (23 de mayo de 2017) — [anuncio original de Microsoft sobre CMIT](https://blogs.windows.com/windowsexperience/2017/05/23/announcing-windows-10-china-government-edition-new-surface-pro/)
- TechStory, "China Moves Government Desktops From Windows to Linux" (agosto de 2026) — [calendario de migración y fecha de expiración](https://techstory.in/china-moves-government-desktops-from-windows-to-linux/)
- El Output, "China acelera la retirada de Windows 10 en sus administraciones y refuerza el software local" (agosto de 2026) — [antecedentes de 2019 y 2022, y reacción bursátil](https://eloutput.com/noticias/aplicaciones/china-acelera-la-retirada-de-windows-10-en-sus-administraciones-y-refuerza-el-software-local/)
- Wikipedia, "Kylin (operating system)" — [origen del proyecto](https://en.wikipedia.org/wiki/Kylin_(operating_system)). El origen (2001, Programa 863, base FreeBSD, uso militar) está corroborado por fuentes independientes; la cifra del 90% del sector gubernamental circula sin fuente original fechada
- The Register, "China's KylinOS Linux takes a great leap forward to v11 and kernel 6.6" (29 de agosto de 2025) — [núcleos y fechas de fin de soporte](https://www.theregister.com/2025/08/29/kylinos_11/)
- Decreto 3.390 (23 de diciembre de 2004), Gaceta Oficial de Venezuela 38.095 del 28 de diciembre — [ficha de esa gaceta en un archivo ciudadano](https://www.gacetaoficial.io/venezuela/2004-12-28-gaceta-oficial-38095). El índice visible de la página no lista el decreto; la referencia de publicación está documentada en decenas de trabajos académicos
- The Next Web, "France orders all government ministries to ditch Windows for Linux in digital sovereignty push" (2026) — [cifras de GendBuntu y despliegue nacional](https://thenextweb.com/news/france-linux-windows-migration-digital-sovereignty)
- TechHQ, "France's Digital Sovereignty Linux Migration Is Different This Time" (abril de 2026) — [el modelo gradual y el papel de DINUM](https://techhq.com/news/france-digital-sovereignty-linux-migration/)
- La Lista, "Entrevista exclusiva | La vulnerabilidad de Sedena fue explotada en masa por muchos hackers" (10 de octubre de 2022) — [entrevista con el colectivo Guacamaya](https://la-lista.com/mexico/2022/10/10/hackers-guacamaya-entrevista-exclusiva-con-el-grupo-hacktivista)
- Volexity, "Mass Exploitation of (Un)authenticated Zimbra RCE: CVE-2022-27925" (10 de agosto de 2022) — [parche de marzo de 2022 y explotación masiva](https://www.volexity.com/blog/2022/08/10/mass-exploitation-of-unauthenticated-zimbra-rce-cve-2022-27925/)
- Xataka México, "El grupo que hackeó la Sedena dice que no fueron los únicos en entrar a los servidores" (octubre de 2022) — [otros intrusos desde el 5 de julio y edición comercial de Zimbra](https://www.xataka.com.mx/seguridad/grupo-que-hackeo-sedena-dice-que-no-fueron-unicos-entrar-a-servidores-habia-evidencia-que-alguien-tenia-acceso)
- Animal Político, "Hackeo de Guacamaya Leaks fue error humano, admite Sedena" (17 de octubre de 2025) — [declaración del secretario Trevilla](https://grupoanimal.mx/seguridad/hackeo-guacamaya-leaks-error-humano-sedena)
- Distributed Denial of Secrets, ficha de la filtración de la Sedena citando el informe de Article 19 — [cotizaciones a la red de Pegasus](https://ddosecrets.substack.com/p/sedena-mexico-secretaria-defensa-nacional)
- Foucault, M., *Vigilar y castigar. Nacimiento de la prisión* (1975), México, Siglo XXI — [comentario académico sobre poder-saber](https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S1870-23332010000100002)
