corruptour-google-maps
===================

Mapa interactivo del corrouptour - http://josketres.github.io/corruptour-google-maps/

Como utilizar (desarrollo)
-----
Una vez instalados los prerequisitos, se puede correr la aplicación de la siguiente manera:

    git clone https://github.com/josketres/corruptour-google-maps.git
    cd corruptour-google-maps/
    npm install
    bower install
    grunt serve

Publicar en GitHub Pages
-----

    grunt build:dist
    grunt buildcontrol:pages

Prerequisitos
-----

* Node.js (http://nodejs.org)
* Yeoman `npm install -g yo`
* Ruby (See https://forwardhq.com/support/installing-ruby-windows for windows install)
* Compass `gem install compass`

Scaffolding (inicializacion)
-----
Para inicializar el proyecto se utilizo yeoman y el generador de angular. 

No es necesario inicializar el proyecto de nuevo.
   
    npm install -g generator-angular
    yo angular
