var titulo = document.getElementById('saludo');

function cambiarColor (){
    titulo.classList.remove("saludo");
    titulo.classList.add("nuevaClase")
};


var caja_html = document.getElementById('caja');


function funcionCaja (){
    
    caja_html.classList.remove("estilo_1");
    caja_html.classList.add("estilo_2");
    
};

function cambiar () {
    btn_html.classList.remove("ds_btn");
    btn_html.classList.add("ds_btn2");

    
};
/*-------------------------*/

var btn_html = document.getElementById('boton');

btn_html.addEventListener('click', cambiarColor);





btn_html.addEventListener('click', funcionCaja);


btn_html.addEventListener('click', cambiar);




                          
                

