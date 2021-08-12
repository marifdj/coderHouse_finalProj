
//agregar titulos y botones
$('body').prepend('<p id="pTitle">La mejor calidad de la city!</p>');
$('body').prepend( '<a class="btn btn-1">Principal</a>');
$('body').prepend( '<a class="btn btn-2">Reservas</a>');
$('body').prepend( '<a class="btn btn-3">Ayuda</a>');
$('body').prepend( '<a class="btn btn-4">Contacto</a>' );

$('article').prepend('<h4 id="ptitle2">Aquí estan los productos del carrito --></h4>');


$("p").fadeOut("slow", function(){
    $("p").fadeIn(4000);
}); 

$(".btn btn-1").click(() => { 
    $(".btn btn-1").toggle("fast");
});

$("#ptitle2").css("color", "#black")
        .slideUp(4000)
        .slideDown(3000);



