const URLJSON = "/proyectoFinal/data.json"


const datosUsuario =  { nombre: "maria", email: "florenciadejuan@gmail.com" }
$("body").prepend('<button id="usuario"> Hola!</button>');
$("#usuario").click(() => { 
    $.post(URLJSON, datosUsuario ,(respuesta, estado) => {
        if(estado === "success"){
            $("body").prepend(`<div>
save:${respuesta.nombre}
</div>`);
        }  
    });
});

$("#usuario").click(() => { 
$.getJSON(URLJSON, function (respuesta, estado) {
    if(estado === "success"){
      let datosUsuario = respuesta;
      for (const data of datosUsuario) {
        $("body").prepend(`<div>
                                <h3>${data.nombre}</h3>
                                <p> ${data.email}</p>
                            </div>`)
      }  
    }
    });
});