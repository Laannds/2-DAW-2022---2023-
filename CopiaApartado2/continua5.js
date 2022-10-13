let listaContactos =  [ {nombre : "Maxwell Wright",telefono: "(0191)7196495",correo : "Curabitur.egestas.nun@nonummyac.co.uk"},
                        {nombre : "Raja Villareal",telefono : "0866 398 2895",correo : "posuere.vulputate@sed.com"},
                        {nombre : "Helen Richards ", telefono : "0800 1111", correo : "libero@convalis.edu"}
                    ];

listaContactos.push ({nombre : "Maisie Haley", telefono : "0913 531 3030", correo : "risus.Quisque@urna.ca"});

// Auxiliar validador 
let validar = false ; 

do {
let elegir = Number(prompt("Selecciona que quieres hacer ,\n  (1) •	Mostrar el primer contacto (primero), \n "+
        " (2) •	Mostrar el último contacto (último), \n (3) •	Mostrar todos los contactos (todos)    \n (4) •	Añadir un nuevo contacto (nuevo) , "+
        "\n (5) Salir")) ; 
  

switch(elegir) {
    case 1:
        console.log(listaContactos[0]);
        window.alert(listaContactos[0].nombre);
      break;
    case 2:
        console.log(listaContactos[listaContactos.length-1]);
         window.alert(listaContactos[listaContactos.length-1].nombre);
      break;
    case 3:
        var i = 0 ; 
        for (const iterator of listaContactos) {
               console.log(iterator)
             i = i + 1 ; 
        }
        
    break;
    case 4:
        let nombreIntroducido = prompt("Introduce el nombre") ; 
        let telefonoIntroducido = prompt("Introduce el telefono");
        let correoTelefono = prompt("Introduce correo");


        if(nombreIntroducido.length == 0  || telefonoIntroducido.length == 0 || correoTelefono.length == 0 )
        {   
            window.alert("ERROR ");
            break;
        }
        listaContactos.push({nombre : nombreIntroducido , telefono : telefonoIntroducido , correo : correoTelefono} );
        console.log(listaContactos[listaContactos.length-1]);
        window.alert(listaContactos[listaContactos.length-1].nombre);
        
        break;
    case 5 :
        validar=true ; 
       break ; 
    default:
      console.log("ERROR");
      window.alert("ERROR");
    break;
  }
}while(validar!= true);








