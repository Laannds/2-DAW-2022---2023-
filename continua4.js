let listaContactos =  [ {nombre : "Maxwell Wright",telefono: "(0191)7196495",correo : "Curabitur.egestas.nun@nonummyac.co.uk"},
                        {nombre : "Raja Villareal",telefono : "0866 398 2895",correo : "posuere.vulputate@sed.com"},
                        {nombre : "Helen Richards ", telefono : "0800 1111", correo : "libero@convalis.edu"}
                    ];

listaContactos.push ({nombre : "Maisie Haley", telefono : "0913 531 3030", correo : "risus.Quisque@urna.ca"});

let elegir = Number(prompt("Selecciona que quieres hacer ,\n  (1) •	Mostrar el primer contacto (primero), \n "+
        " (2) •	Mostrar el último contacto (último), \n  (3) •	Añadir un nuevo contacto (nuevo). ")) ; 
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
    default:
      console.log("ERROR");
      window.alert("ERROR");
  }







