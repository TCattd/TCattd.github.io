---
author: Esteban
comments: true
date: 2013-09-05 19:52:25+00:00
layout: post
link: https://itsaboutactitud.wordpress.com/2013/09/05/como-respaldar-correos-desde-gmail/
slug: como-respaldar-correos-desde-gmail
title: Como respaldar correos desde Gmail
wordpress_id: 300
categories:
- Seguridad
tags:
- backup
- gmail
- respaldo
---

Hace un poco más de un año escribí respecto a como podían respaldar sus emails, Gmail específicamente (incluidas cuentas Google Apps) offline en sus computadores.




Por acá está aquel artículo: [https://plus.google.com/109194612351651927706/posts/HRuj12r9cy4](https://plus.google.com/109194612351651927706/posts/HRuj12r9cy4) La solución que voy a comentar la añadí en un comentario del artículo que ya les mencioné, pero jamás lo probe.En un año pasan muchas cosas. Mi antiguo respaldo de Gmail había dejado de funcionar hace algunos meses, y flojera por delante, no había vuelto a reconfigurar todo o probar otra de las alternativas.

Decidí aprovechar y cambiarme a Gmvault. Por lo que había leído cuando lo recomendé, gmvault no solo permite respaldar, si no que también soporta _inyectar_ el respaldo de emails en otra cuenta gmail.
Un simple:
_gmvault restore tunuevacuentagmail@gmail.com_
...y tendrás tu respaldo montado en otra cuenta Gmail.
Simpático.

Nota: antes que todo, deben preparar su Gmail para estos respaldos, habilitando IMAP en sus cuentas.
Aquí lo dejan claro con pantallazos, por si no saben como hacerlo:[http://gmvault.org/gmail_setup.html](http://gmvault.org/gmail_setup.html)
Despues de habilitar IMAP, confirmen que en "Labels" las carpetas que quieren respaldar tengan el tick "Show in IMAP". De otra forma, esas carpetas sin el tick no se respaldarán.
Pueden dejar sin tickear la carpeta Spam y Trash, por ejemplo. ¿Para qué quieren respaldos de como obtener viagra con 50% de descuento?.

**Instalando y configurando GMVault**.
En Xubuntu (Ubuntu me imagino que va a ser lo mismo o similar) es muy sencillo.

1.- Deben tener PIP (de Python) instalado:
_sudo apt-get install python-pip_

2.- Instalan gmvault:
_sudo pip install --upgrade distribute && sudo pip install gmvault_

3.- Ejecutan la primera sincronización, desde la misma terminal:
_gmvault sync tucuentagmail@gmail.com -d $HOME/Backups/Gmail_
Esto puede tomar varias horas. Depende de la cantidad de correos que tengan en sus cuentas y el espacio que estos usen.
Cuando corran este comando, gmvault les pedirá autenticar la aplicación. Va a abrir una ventana del navegador predeterminado que tengan, y los llevará a darle permisos a gmvault con un token OAuth para que este pueda acceder a vuestro correo (aquel token se guarda en sus computadores, dentro de $HOME/.gmvault/).
Esto es solo necesario la primera vez que sincronizan. Luego, con ese token que le dieron a gmvault, no molestará más con permisos para acceder.

El comando
_gmvault sync tucuentagmail@gmail.com -d $HOME/Backups/Gmail_
Le dice a gmvault que sincronice/respalde la cuenta gmail que ponen (puede ser un Google Apps también). Por default, el respaldo se guarda en:
_$HOME/.gmvault-db_

Si quieren cambiar esa ruta, como yo lo hice, la especifican así:
_-d $HOME/Backups/Gmail_

**Esperen** a que termine la primera sincronización.
Tomó casi cinco horas acá. Mucha paciencia.
Vayan a meditar o a matar huevones online un rato.

Ahora, ¿como hacer que esto corra cada X tiempo?.
Con un **Cronjob** :)

Lo vamos a correr una vez al día. ¿Para qué más?
Si quieren que corra cada una hora, cambien el /cron.daily/ por /cron.hourly/. Asimismo tienen disponible /cron.monthly/ y /cron.weekly/.

Creemos el cron. En una terminal:
_sudo mousepad /etc/cron.daily/gmvault_

Dentro del editor (mousepad en este caso) coloquen (ojo, reemplacen con sus datos y ruta del respaldo):
_#!/bin/sh_
_sleep 30_
_gmvault sync tucuentagmail@gmail.com -d $HOME/Backups/Gmail --resume_

Guardan, cierran, y hacen ejecutable el archivo que recién crearon:
_sudo chmod uga+x /etc/cron.daily/gmvault_

Como pueden notar, despues del sleep 30 va el comando para sincronizar.
**Es importante** que al comando aquel le añadan al final un: **--resume** al final. Eso permite que el proceso de respaldo siga desde donde quedó y que no se ponga a hacer todo de cero cada vez que el cron corre.
La linea del _sleep 30_ está ahí simplemente por si corre el cron aquel cuando recién inician su computador, y no tienen una conexión a internet que conecte inmediatamente (la wifi acá demora en pescar). No es obligatoria.

Una vez que hagan la primera sincronización, pueden añadir una linea (a su cron) como esta:
_gmvault sync --resume -t quick --check-db yes -d $HOME/Backups/Gmail tugmail@gmail.com_

El _--resume_ ya lo expliqué. Solo córranlo con ese parámetro después de la primera gran sincronización.

El _--check-db yes_ fuerza a que elimine tambien de la db y respaldo LOCAL cualquier email que en Gmail haya sido eliminado. Si no quieren hacer eso y desean que el respaldo local solo agregue contenido y no sea una copia 1:1, entonces pongan _--check-db no_

El _-t quick_ es una sincronización rápida. En vez de revisar los emails desde el inicio de los tiempos, gmvault solo revisará los correos desde los últimos siete días. Pueden revisar aún más días si cambian el parámetro _quick_days_de la configuración de gmvault en $HOME/.gmvault/gmvault_defaults.conf
Es mucho mas rápido si lo dejan así y lo corren en un cron diario. Es mucha menos data que revisar online via imap para gmvault.

Y si no les interesan los chats y los logs que gmail guarda dentro como una carpeta más, pueden añadir _--emails-only_ a vuestra linea de comando para respaldar solamente los emails e ignorar los chats.

Eso sería todo.
Así de simple y bonito.






Fuente: http://gmvault.org
