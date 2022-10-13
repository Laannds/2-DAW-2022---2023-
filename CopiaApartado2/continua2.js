let listaContactos =  [ {nombre : "Maxwell Wright",telefono: "(0191)7196495",correo : "Curabitur.egestas.nun@nonummyac.co.uk"},
                        {nombre : "Raja Villareal",telefono : "0866 398 2895",correo : "posuere.vulputate@sed.com"},
                        {nombre : "Helen Richards ", telefono : "0800 1111", correo : "libero@convalis.edu"}

                    ];

listaContactos.push ({nombre : "Maisie Haley", telefono : "0913 531 3030", correo : "risus.Quisque@urna.ca"});
//new listaContactos("Maisie Haley","0913 531 3030","risus.Quisque@urna.ca");

var i = 0 ; 
for (const iterator of listaContactos) {
    if(i == 0 || i == listaContactos.length-1)
    {
        console.log(iterator)
    }
    i = i + 1 ; 
}


