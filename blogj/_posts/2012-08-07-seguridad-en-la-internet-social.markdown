---
author: Esteban
comments: true
date: 2012-08-07 19:49:06+00:00
layout: post
link: https://itsaboutactitud.wordpress.com/2012/08/07/seguridad-en-la-internet-social/
slug: seguridad-en-la-internet-social
title: Seguridad en la Internet Social
wordpress_id: 297
categories:
- Seguridad
tags:
- apple
- contraseñas
- icloud
- internet
- keepass
- keepassx
- password
---

La foto adjunta dice mucho respecto a lo que voy a compartir aquí.
Es que no es nuevo. Ni lo que pasó, ni la existencia de vulnerabilidades en las marcas mas conocidas de software.

Esto ocurrió hace algunos días (3 de agosto), y más de alguno de ustedes ya debió leerlo en algún sitio de tecnología.

Voy a partir dejando las fuentes.
La directa:
[http://www.emptyage.com/post/28679875595/yes-i-was-hacked-hard](http://www.emptyage.com/post/28679875595/yes-i-was-hacked-hard)
Y otras más:
[http://www.wired.com/gadgetlab/2012/08/apple-amazon-mat-honan-hacking/](http://www.wired.com/gadgetlab/2012/08/apple-amazon-mat-honan-hacking/)
[http://forums.macrumors.com/showthread.php?t=1417975](http://forums.macrumors.com/showthread.php?t=1417975)
[http://www.zdnet.com/how-apple-let-a-hacker-remotely-wipe-an-iphone-ipad-macbook-7000002141/](http://www.zdnet.com/how-apple-let-a-hacker-remotely-wipe-an-iphone-ipad-macbook-7000002141/)

Mat Honan, escritor-bloggero, parte de Gizmodo, escribe para Wired, un geek-nerd como muchos en su misma onda, terminó perdiendo toda su "digitalidad" de una sola pasada.

Sus archivos, sus datos, sus claves, sus cuentas y casi todo su "ser" digital fue borrado.

Esta vez no habian crackeado su password. Tampoco un keylogger o un virus. Y no es que porque use un _Mac_ que está seguro de esos ataques, para nada. Se sabe que existen ya versiones de malware y virus para los equipos de Apple. Aunque Apple hace bien, comercialmente hablando, _callando_ esos incidentes, y entre otras cosas, no promoviendo el uso de herramientas de terceros para seguridad, como los famosos _antivirus_ en Windows (bien por ellos, no por sus consumidores).
No porque sitios y geeks fanáticos te digan que es un OS seguro y _el más avanzado del planeta_, aquello se convierte en realidad.

El tema ahora es mas grave, desde cierto punto de vista.
La ingenieria social, el "hackeo social", es algo en lo que todos podemos caer.

Esto es mas o menos como Emilio Sutherland en el programa _En su propia trampa_ de Canal13 muestra respecto a los cuentos del Tío y las estafas. Si recopilan suficiente información de ti, y lo hacen en el momento preciso, eventualmente puedes caer (avaricia de por lado).

A Mat Honan se lo cagaron con un _hackeo social_. Llamaron y se hicieron pasar por el en el soporte de iCloud, el servicio de _respaldo_en la nube de Apple. Tambien lo habían hecho antes en Amazon, lo que les dió el nombre de su ID en Apple, y otros datos que necesitaban.

Honan mismo lo comenta " _Apple tech support gave the hackers access to my iCloud account. Amazon tech support gave them the ability to see a piece of information — a partial credit card number — that Apple used to release information. In short, the very four digits that Amazon considers unimportant enough to display in the clear on the web are precisely the same ones that Apple considers secure enough to perform identity verification._ "

Teniendo el respaldo de todos los datos que tenia en su macbook gracias al acceso no autorizado que Apple le entregó al hacker a la cuenta de iCloud de Honan, teniendo ahora acceso a sus contraseñas, acceso al gmail de Honan, y contando con _las maravillosas caracteristicas_ de OSX (ref: [http://apple.stackexchange.com/questions/40025/how-can-i-remotely-delete-sensitive-data-and-log-out-from-a-stolen-mac](http://apple.stackexchange.com/questions/40025/how-can-i-remotely-delete-sensitive-data-and-log-out-from-a-stolen-mac) ), el_hacker_ borro remotamente todos los datos de su macbook, de su ipad, de su iphone, se robaron su twitter, **borraron su cuenta gmail completa**, entre otras cosas.

Si saber si quiera como programar o crear un malware, hicieron todo eso. ¿Que tal?.

A veces, la nube no es tan segura como creemos.
El no tenerla en frente nuestro, el no ver el lugar físico donde está nuestra "digitalidad", el no ver los equipos donde es guardada ni a la gente que trabaja al rededor de _nuestros_ datos, nos da una falsa e infantil sensación de seguridad.
_Si no lo veo, no existe_.

Wozniak también lo sabe [http://www.france24.com/en/20120805-apple-co-founder-wozniak-sees-trouble-cloud](http://phys.org/news/2012-08-apple-co-founder-wozniak-cloud.html)
Y hasta cierto punto, comparto aquello.

Nuestros datos se vuelven _nuestros_ datos cuando delegas cierta tutela a alguien mas en la red.

Pregúntate: ¿eres usuario de gmail?, ¿usas facebook?, ¿los mensajes de facebook?, ¿mandas mensajes a través de whatsapp?, ¿foursquare?, ¿icloud?, ¿google drive?, ¿dropbox?, ¿office 360?, ¿usas un servicio como lastpass para no tener que recordar las cientos de contraseñas que tienes?.

Aunque algunos servicios son útiles de verdad, otros rayan en lo estúpido.

Lastpass, por mucho que te asegure que encripta todo lo que llega a su servidor y que sus propios empleados no pueden ver lo que guardas ahí, ¿has pensado en como te envía de vuelta el password en texto plano para poder meterlo automáticamente en formularios vía web o en móviles?. (Aquí hablo sin conocer; aunque el no conocer como funciona desde ya es un motivo para no confiar algo así de sensible como las contraseñas) Y aunque sea un hash con un salt para volverlo más al azar y difícil de crackear, ¿no has pensado que una copia de ese salt está en tu equipo local?, ¿que debe haber una forma de tomar lo que se te envía y des-encriptarlo para poder usar el password en un sitio?, ¿que pasa si alguien dentro de la compañía filtra toda la db JUNTO con los salt?. Peor: ¿y si les toca un hackeo como el de PSN de Sony?. Crítico: ¿y si te comes un keylogger y regalas tu contraseña maestra de Lastpass a un NN?... tendría acceso automático a TODOS los servicios que usas con Lastpass.
Ese tipo de datos NO están hechos para ser guardados en la nube. Ningún password. Si necesitas ayuda recordándolos, considera dos opciones:
.- Un algoritmo mental, que puedas aplicar a cualquier servicio para generar una contraseña única y que puedas recordar, usando el mismo patrón-formula siempre: [http://www.acleandesign.com/2008/05/password-algorithms-create-and-remember-unique-passwords-for-every-account/](http://www.acleandesign.com/2008/05/password-algorithms-create-and-remember-unique-passwords-for-every-account/) ese es solo un ejemplo. Tu propio algoritmo mental debe ser... tuyo, pensado por ti, para ser NATURAL para ti, obvio para ti y no para el resto, y... secreto.
.- Un servicio local offline como KeepassX.org, donde tu pequeña DB de password queda encriptada en AES/Twofish. Si se pierde tu DB, y tu password maestro es fuerte, es muy difícil que puedan crackear aquel archivo. Y puedes usar un servicio como Dropbox o Google Drive para respaldar tu archivo-db local offline, sin mucho peligro (esta encriptado), e incluso sincronizar con tu smartphone (dropsync) para usarlo con KeepassDroid [https://play.google.com/store/apps/details?id=com.android.keepass&hl=es](https://play.google.com/store/apps/details?id=com.android.keepass&hl=es) ...pero todo SIEMPRE encriptado offline en tu equipo, y la copia online y la lista de passwords jamás en un servicio en la nube sin encriptar o en base a una _seguridad de papel_ que no conoces (iCloud, Amazon, PSN hace mucho tiempo atrás ya, etc) y por tanto, _seguridad de papel_ en la que no deberías confiar.

**No deberías confiar a ciegas en ninguna compañía (o desarrollador). Menos en su seguridad.**

_Dime que usas y te diré quien eres_.

Perdí cerca de seis meses de fotografías familiares hace muchos años ya. No por un hackeo. Por un disco duro que explosionó dentro del computador (uno de escritorio). No solo fotografías. Mi trabajo también.
Pero cuando las fotografías y videos familiares están de por medio, tu trabajo te importa una raja. Son ayuda-recuerdos los que perdiste, por siempre. Tu trabajo lo sabes hacer, lo puedes volver a hacer, lo puedes recuperar (como en mi caso) si trabajabas online y al menos el producto final estaba en linea. Pero esos momentos en esas fotografías no los puedes _volver a hacer_ para intentar tener una imagen nueva. Se fueron.
Desde aquel día que mantengo una copia offline de mis fotografías en un disco duro externo, junto con la copia en mi tarro de todos los dias. Aparte, cada año, hago dos respaldos de cero de esas imágenes en dvd's (son pocos, solo cuatro por ahora) y los guardo totalmente alejados del disco duro externo de hecho, pensando en situaciones extremadamente trágicas (mi casa quemada, un robo, etc).
Hace pocos años, sumé a estos respaldos, uno en linea. Android facilitó mucho las cosas también desde Google+, Dropbox tambien.
Pero aunque tengo copia digital **y privada** de esas fotografías, mis copias offline de **lo que más me importa** de esta _digitalidad_, está segura... hasta donde se puede... fuera de esa nube traicionera. No voy a dejar esa rutina.

Por algo mis abuelos aún tienen álbumes... físicos... de fotos, y aquellas imágenes siguen ahí.

Estimados,

Manejando datos sensibles también, para los clientes y empresas para las que trabajamos (ref: [http://www.killtro.com](http://www.killtro.com/) o mi sitio personal ) no puedo decirles **lo importante que es** que cuiden su correo electrónico.
Y sus otras cuentas también, **siendo responsables**, usando datos distintos para c/u, puntualmente **contraseñas distintas** siempre (no es difícil si aplican un algoritmo mental el cual pueden mezclar mil veces y nunca olvidaran lo básico de el, y generarán cientos de contraseñas que tienen como pilar esa lógica... contraseñas todas distintas), cosa que en caso de una perdida de acceso en un servicio, eso no se convierta en una escalada y les ocurra una perdida total de vuestra _digitalidad_.

Soy un usuario de la identificación de 2 pasos de Google, hace mas de un año, y puedo decirles con certeza que no genera Cancer, que no los hace mas pajeros, ni les contagia lepra por su uso. Los segundos que demoras en poner tu pin extra después de tu contraseña no son nada versus la seguridad que entrega. Recibes el código en tu fono, y no tiene porque ser un smartphone; el código en Chile lo puedes recibir via SMS también. ¿Qué mas cómodo?.

No cuesta nada: [http://9to5google.com/2012/08/07/googles-matt-cutts-turn-on-two-factor-authentication/](http://9to5google.com/2012/08/07/googles-matt-cutts-turn-on-two-factor-authentication/)

Si Mat Honan hubiese estado usando la autenticación de dos pasos de Google, podría haber conservado parte de los datos que le fueron arrebatados dos veces: una, cuando decidió confiar en una compañía de mierda que junto con sus _Genios_ (nombre para huevón por la cresta) les confías tus respaldos, tus datos, tus archivos y TU PROPIEDAD, y la habilidad de borrar y barrer por completo con tus equipos de forma remota...  y dos, cuando un _hacker_ con _el don de la palabra_ logró troll-earselo.

Resumiendo.

No se aferren a la falsa sensación de seguridad de la nube.
Aún peco en confiar en ella, con mi correo electrónico. Asumo que siempre va a estar ahí, aunque no lo sé. Pero aprendí la lección hace muchos años, por lo que más me importa: mi familia, nuestras fotografías. Mi trabajo: también seguro, en al menos dos servicios distintos y privados.

No se aferren a servicios huevones, donde más encima, voluntariamente, ceden sus propios datos y se desprenden de vuestra privacidad.
No se aferren a la mentira de la seguridad inviolable de sus antivirus ultra pro o de sus computadores con manzanas. Valen hongo. Ambos.
No se aferren a un solo servicio o marca. Si tienes problemas con la autoestima, puedes pegarle un sticker de una manzana, un apio o una palta a tu computador actual y ver si eso mejora un poco lo triste de tu ser. Y si lo hacen, asegúrense de tener una conversación con ustedes mismos respecto a los riesgos que están tomando.
No se aferren a la nube. No al cien.
Es una opción, si, pero no lo único que debes ver como opción.

Mientras más entregues a la nube, menos de _tuyo_ tienen tus datos.
