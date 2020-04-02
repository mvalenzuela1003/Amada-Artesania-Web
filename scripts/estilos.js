var menuBtn = document.getElementById('menu-boton');
var menu = document.getElementById('menu');

//origenes
var menuInic = document.getElementById('menuinic');
var menuBien = document.getElementById('menubien');
var menuProd = document.getElementById('menuprod');
var menuCont = document.getElementById('menucont');
var volverProd = document.getElementById('volverprod');
var volverCont = document.getElementById('volvercont');
//destinos
var inicio = document.getElementById('inicio');
var bienvenida = document.getElementById('bienvenida');
var productos = document.getElementById('productos');
var contacto = document.getElementById('contacto');



function headerScroll() {
    var cuerpo = document.getElementById('inicio')
    var header = document.getElementById('header');
    var logo = document.getElementById('logo');
    var menuBtn = document.getElementById('menu-boton')
    var menu = document.getElementById('menu');
    var menuLi = document.querySelectorAll('.menu-li');
    var posCuerpo = cuerpo.getBoundingClientRect().bottom;
    var posPantalla = window.innerHeight;

    if (posCuerpo + 30 < posPantalla) {
        header.classList.add('scroll-header');
        logo.classList.add('scroll-logo');
        logo.classList.remove('no-scroll');
        menuBtn.classList.add('scroll-menu-boton');
        menu.classList.add('scroll-menu');
        menuLi.forEach(function(elem) {
            elem.classList.add('scroll-li');
        });
    }
    if (posCuerpo + 5 > posPantalla) {
        header.classList.remove('scroll-header');
        logo.classList.remove('scroll-logo');
        logo.classList.add('no-scroll');
        menuBtn.classList.remove('scroll-menu-boton');
        menu.classList.remove('scroll-menu');
        menuLi.forEach(function(elem) {
            elem.classList.remove('scroll-li');
        });
    }

}

function smoothScroll(destino, duracion) {
    //Posicion del de la parte superior del destino  respecto a la parte superior de la pantalla
    var posInicio = window.pageYOffset;
    var posDestino = destino.getBoundingClientRect().top + posInicio - 90;

    var distancia = posDestino - posInicio;
    var momInicio = null;

    function animacionScroll(momActual) {
        if (momInicio === null) {
            momInicio = momActual;
        }
        var tiempoPasado = momActual - momInicio;
        var run = suavizado(tiempoPasado, posInicio, distancia, duracion);
        //if (destino === bienvenida || destino === productos) {
        //  run -= 85;
        //}

        window.scrollTo(0, run);

        if (tiempoPasado < duracion) {
            requestAnimationFrame(animacionScroll);
        }
    }


    function suavizado(t, b, c, d) {
        t /= d;
        return c * t * t + b;
    }

    requestAnimationFrame(animacionScroll);

}

function mostrarMenu() {
    var menu = document.getElementById('menu');
    this.classList.toggle('menu-click');
    menu.classList.toggle('mostrar-menu');
    window.addEventListener('scroll', cerrarMenu);
}

function cerrarMenu() {
    var menu = document.getElementById('menu');
    menuBtn.classList.remove('menu-click');
    menu.classList.remove('mostrar-menu');
}


menuBtn.addEventListener('click', mostrarMenu);


document.addEventListener('scroll', headerScroll)



menuinic.addEventListener('click', function() {
    smoothScroll(inicio, 500)
});
menubien.addEventListener('click', function() {
    smoothScroll(bienvenida, 500)
});
menuprod.addEventListener('click', function() {
    smoothScroll(productos, 500)
});
menucont.addEventListener('click', function() {
    smoothScroll(contacto, 500)
});
volverProd.addEventListener('click', function() {
    smoothScroll(inicio, 250)
});
volverCont.addEventListener('click', function() {
    smoothScroll(inicio, 250)
});