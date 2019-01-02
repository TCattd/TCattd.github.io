---
author: Esteban
comments: true
date: 2015-04-04 15:34:40+00:00
layout: post
link: https://itsaboutactitud.wordpress.com/2015/04/04/actualizar-moto-g-xt1032-convertido-a-gpe-a-android-5-1/
slug: actualizar-moto-g-xt1032-convertido-a-gpe-a-android-5-1
title: Actualizar Moto G XT1032 convertido a GPE, a Android 5.1
wordpress_id: 328
categories:
- tecnología
tags:
- android
- lollipop
- moto-g
- motorola
- ota
---

Publiqué esta guía en los [foros de XDA Developers](http://forum.xda-developers.com/showpost.php?p=59878002&postcount=57) ayer, y quiero compartirla ahora con ustedes acá. En español.

Como actualizar un Moto G convertido a GPE, a Android 5.1 Lollipop.

No voy a enseñarles como convertir sus Moto G XT1032 a una edición GPE. Ya [hay](http://forum.xda-developers.com/showthread.php?t=2726041) [guías](http://forum.xda-developers.com/moto-g/general/gpe-ota-lrx21z-5-0-1-xt1033-xt1032-t2969847) al respecto. Síganlas.

El problema es que al convertir el fono a una edición GPE, no todo queda 100% GPE. La banda base, por ejemplo, depende del proveedor de telefonía que ustedes tengan. No hay edición latinoamericana de un Moto G GPE, y la banda base del Moto G GPE no funciona en la telefonía acá en Chile por lo menos. Y la banda base correcta se requiere para poder tener telefonía en el fono. Un fono sin poder usarlo como fono para llamar, ¿cuál es la gracia?.

El zip también falla si tienen un recovery modificado instalado, como TWRP o PhilZ CWM.

Por eso una actualización OTA de un Moto G convertido a la edición GPE no funciona.

Pero hay solución.

La modificación al ZIP del OTA es sencilla. Simplemente hay que remover, del update-script dentro del ZIP del OTA, el checkeo que hace al fingerprint del fono. Eso es todo.

No necesitan hacerlo ustedes. El ZIP modificado ya lo hice, y se los voy a compartir.

De hecho, ya lo probé. Lo apliqué en el Moto G XT1032 de mi SO, equipo que fue convertido a una edición GPE y estaba en la versión 5.0.1, lista para recibir el OTA a 5.1

Primero, deberían actualizar el recovery de sus fonos. Ya sea que tengan instalado TWRP o Philz CWM, actualicen a la versión más nueva de ellos.

Página de descarga de [TWRP para falcon](http://dl.twrp.me/xt1032/) (Moto G XT1032).

Página de descarga de [PhilZ CWM para falcon](http://forum.xda-developers.com/showthread.php?t=2639583) (Moto G XT1032).

Bajen el .img del recovery actualizado, y usando [Flashify](https://play.google.com/store/apps/details?id=com.cgollner.flashify&hl=es_419) en sus fonos, carguen la nueva imagen recovery.

Simple.

Ahora, la actualización a 5.1, paso a paso:




  1. Inicien el fono en el recovery, pueden usar [Simple Reboot](https://play.google.com/store/apps/details?id=simple.reboot.com&hl=es_419) de Franco para iniciar desde el fono al recovery de forma sencilla. En vuestro recovery, hagan un respaldo de todo. Por si acaso. Mal que mal, seguir esta guía y lo que pueda pasar con sus fonos, es de vuestra responsabilidad.


  2. Si tenían Xposed Framework instalado, desinstálenlo. Yo lo hice [siguiendo esta guía](http://forum.xda-developers.com/showpost.php?p=58964632&postcount=2262). [Pantallazo de respaldo](http://itsaboutactitud.files.wordpress.com/2015/04/xposeduninstall.jpg).


  3. Bajen la última imagen del recovery que estén usando. Si están usando TWRP [bajen la imagen desde acá](http://dl.twrp.me/xt1032/); si están usando PhilZ CWM bajen el ZIP flasheable (no la imagen) [desde acá](http://forum.xda-developers.com/showthread.php?t=2639583). Dejen el recovery en la memoria interna del fono.


  4. Bajen el último zip de SuperSU [desde acá](http://download.chainfire.eu/supersu), y pónganlo en la memoria interna del fono.


  5. Bajen el zip del OTA a 5.1 modificado que preparé [desde acá](https://www.androidfilehost.com/?fid=95916177934551651). Colóquenlo en la memoria interna del fono.


  6. Remuevan el root. Abran el app SuperSU, entren a la configuración, y busquen el "full unroot", y háganlo. El app se cerrará por si solo cuando termine de remover el root del fono.


  7. Reiniciar en el recovery. Deben apagar el fono. Luego, presionan al mismo tiempo y mantienen las teclas de volumen abajo y power por unos segundos. Debería iniciar en la pantalla del bootloader, ahí sueltan ambos botones. En esa pantalla navegan con el volumen abajo y seleccionan con el volumen arriba (¡mucho ojo con eso!). Seleccionen entrar al recovery.


  8. ¿Hicieron el respaldo al inicio?. Si no, es un buen momento para hacerlo. En serio.


  9. Flasheen el zip del OTA 5.1 modificado que dejaron en la memoria interna del fono. Esperen unos minutos. Toma un tiempo.


  10. Cuando termine, vuelvan al inicio del recovery (no reinicien aún). Ahora flasheen el recovery que están usando. Si es TWRP, deben entrar al Install y luego seleccionar el botón "images" abajo a la derecha. Con eso pueden navegar y buscar un .img; flasheen el .img del TWRP. Si es PhilZ CWM el recovery que estaban usando, simplemente usen el install nuevamente y busquen el zip del recovery que dejaron en la memoria interna del fono. Flasheenlo. Esto es porque el OTA 5.1 escribe de vuelta el recovery stock de Android, y no queremos eso... para poder rootear luego nuevamente.


  11. Reinicia el fono. No dejes que tu recovery instale SuperSU; detectará que tu equipo no esta rooteado, y te ofrecerá hacerlo antes de reiniciar. Dile que no. Por seguridad, queremos ver que el fono inicie sin problemas primero.


  12. Al iniciar (paciencia, demora un resto en "actualizar" los apps), verifica que todo esté funcionando como corresponde, y que estés en la versión 5.1 de Android ya.


  13. Reinicia en el recovery nuevamente (como en el paso 7). Ahora si, desde el recovery instala el zip de SuperSU. Vuelve a reiniciar el fono.


  14. Listo :)


Pueden borrar el respaldo antiguo que hizo el recovery, para recuperar ese espacio.

Como les comenté, este proceso ya lo probé en el Moto G XT1032 de mi SO, equipo que yo mismo convertí a la edición GPE.

Es un proceso mucho más sencillo si ya estaban en el build LRX21Z y versión 5.0.1. No perderán nada de sus datos internos, apps instaladas, nada.

Es un camino mucho mas corto que el que están sugiriendo en linea, el que implica hacer downgrade a 4.4.4 GPE y flashear la banda base GPE en ese proceso, actualizar con el OTA a 5.0.1 vía sideload, luego aplicar otro sideload nuevamente para subir a 5.1, y finalmente volver a flashear la banda base latinoamericana para recuperar la señal de telefonía y flashear el recovery si es que quieren rootear. Una lata.

Pruebas:

[gallery link="file" columns="4" ids="330,331,332,329"]

Esta guía la traduje principalmente para mi (cada vez más) hermosa hija que va a tener que actualizar su equipo a la distancia, sin la ayuda de su padre nerd. ¡Suerte! ![](https://blog.actitud.xyz/wp-content/plugins/wp-emoji-one/icons/1F63D.png)

---

Actualización (2015-04-07):

Subieron las imágenes stock de Android 5.1 versión GPE para el Moto G XT1032. La encuentran [por acá](http://www.filefactory.com/file/66ovuqgdya3h/GPE_5.1_XT1032_LMY47M.M001_CFC.xml.zip). Por si necesitan flashear la versión 5.1 GPE desde cero, usando mfastboot.

Y si tienen un recovery como TWRP o PhilZ CWM instalado, pueden flashear directamente el rom de la 5.1 completo [con los zip flasheables de acá](http://forum.xda-developers.com/moto-g/development/rom-stock-motorola-lollipop-rom-t3017510) (buscar versión "**GPE 5.1 ROM (Optimized) (323mb) v1.2b**"), sin necesidad de usar fastboot. Muy cómodo. Esto también sirve para actualizar a la versión 5.1 directamente, sin usar el OTA.

Es más, les recomiendo que si están en la versión 5.0.x del rom GPE, actualicen a la 5.1 con esos zip flasheables directamente, y no con el proceso del OTA que les di anteriormente. Van a quedar en la 5.1 igual, sin perder sus datos tampoco. Respalden igual con TWRP o PhilZ CWM antes de flashear el zip.

¡Siempre respalden antes!

Fuente: [XDA](http://forum.xda-developers.com/showthread.php?p=59930345#post59930345).

---

Actualización dos (2015-09-14):

Google lanzó una actualización para el Moto G GPE. Sigue siendo Android 5.1 (y no la 5.1.1). Esta actualización parcha la vulnerabilidad [Stagefright](http://www.androidcentral.com/stagefright).

Modifiqué el zip del OTA ([que fue subido acá](http://forum.xda-developers.com/moto-g/general/ota-stagefright-patch-gpe-5-1-firmware-t3199305)) para remover la verificación de la versión del modem. El zip ahora instala no importando el baseband que tengan en el fono.

Pueden descargar el OTA modificado [por acá](https://www.androidfilehost.com/?fid=24052804347815541). Deben estar en la 5.1 LMY47M.M001 para poder aplicar este OTA. Los dejará en la compilación LMY47M.M003.

Si por algún motivo falla en instalar, es porque modificaron algún archivo del sistema. Por ejemplo, acá no instaló con un Moto G con el rom "GPE 5.1 ROM (Optimized) (323mb) v1.2b"; lógicamente, puesto que aquella rom está modificada (optimizada). Para poder instalar el OTA, se tuvo que flashear "GPE 5.1 ROM (Untouched) (484mb)" (que deja el fono sin archivos modificados y en la misma 5.1) encima de la _optimized_, y luego instalar el zip modificado del OTA encima. Finalmente flashear SuperSU nuevamente antes de reiniciar.

Funciona sin problemas: [prueba uno](http://i.imgur.com/Gnt3Y97.jpg), [y dos](http://i.imgur.com/GiYOFEo.jpg).

---

Actualización tres (2015-09-17)

Se subió a XDA la versión 1.3 del rom optimizado y stock de Android 5.1 del Moto G GPE. [Lo pueden bajar por acá](http://forum.xda-developers.com/moto-g/development/rom-stock-motorola-lollipop-rom-t3017510). Les recomiendo instalar la versión "GPE 5.1 ROM (Optimized) (311mb) v1.3". Si aún no han aplicado el OTA para el parche Stagefright pero están en la GPE 5.1, pueden bajar este rom completo, y flashear encima. Quedarán con el OTA aplicado en sus fonos. Si ya están en el OTA con el parche Stagefright, igual pueden flashear encima para ganar los beneficios de la optimización de aquel rom. Respalden antes, claro.
