// Checking age //
let age;
let allowed_age;
let terms_conditions;
let alcohol;
let side;
let costo_ginebra = 100;
let costo_ron = 130;
let costo_whiskey = 250;
let costo_tequila = 400;
let costo_tonica = 45;
let costo_soda = 15;
let costo_coca = 10;
let costo_hielo = "1 kg de hielo de cortesía";
let costo_kit = 35;


alert("Te damos la bienvenida a Shakin' at home, un lugar para vivir la experiencia de la coctelería en casa. Para continuar debemos confirmar que estés autorizado para comprar bebidas alcohólicas.");

age = parseInt(prompt("Ingresa el año en que naciste"));
allowed_age = 2022 - age;

if (allowed_age >= 18) {
    age = true;
    if (age = true){
        terms_conditions = prompt("¿Estás de acuerdo con nuestros términos y condiciones? Si/No")
    }
    if (terms_conditions.toLowerCase() == "si" || terms_conditions.toLowerCase() == "sí") {
        terms_conditions = true;
        }
    if (age == true && terms_conditions == true){
        choosing_alcohol(); //Función//
        }
    else {
        alert("Para hacer uso de nuestro sistema, debes aceptar y cumplir con los términos y condiciones"); 
        }
}
else {
    alert("Para hacer uso de nuestro sistema, debes ser mayor de edad"); 
    }

// Choosing alcohol/liqueur //

function choosing_alcohol() {
    alcohol = prompt("¿Qué alcohol quieres llevar hoy? Escribe solo el nombre del licor, sin la marca: Ginebra Tranqueray ($100). Ron Xacapa ($130). Whiskey Macallan ($250). Tequila Jose Cuervo Reserva de la Familia ($400)");
    
    if(alcohol.toLowerCase() == "ginebra"){
        console.log("Ginebra Tanqueray $" + costo_ginebra);
        side = prompt("Con la ginebra va bien la Tónica Fever Tree ($45) o la Soda ($15). ¿Qué acompañante/side prefieres para tu licor? (Escribe solo el nombre, no la marca). Si no quieres side, deja vacío este campo.");
        if(side.toLowerCase() == "tonica" || side.toLowerCase() == "tónica"){
            console.log("Elegiste Tónica Fever Tree $" + costo_tonica);
            alert("El costo total es: $" + (costo_ginebra + costo_tonica));
        }
        else if(side.toLowerCase() == "soda"){
            console.log("Elegiste soda $" + costo_soda);
            alert("El costo total es: $" + (costo_ginebra + costo_soda));
        }
        else{
            console.log("No llevarás acompañante");
            alert("El costo total es $" + costo_ginebra);
        }
    }

    if(alcohol.toLowerCase() == "ron"){
        console.log("Ron Xacapa $" + costo_ron);
        side = prompt("Con el ron va bien con Coca Cola ($10) o con Soda ($15). ¿Qué acompañante/side prefieres para tu licor? (Escribe solo el nombre, no la marca). Si no quieres side, deja vacío este campo.");
        if(side.toLowerCase() == "coca cola" || side.toLowerCase() == "coca" || side.toLowerCase() == "cola"){
            console.log("Elegiste Coca Cola $" + costo_coca);
            alert("El costo total es: $" + (costo_ron + costo_coca));
        }
        else if(side.toLowerCase() == "soda"){
            console.log("Elegiste soda $" + costo_soda);
            alert("El costo total es: $" + (costo_ron + costo_soda));            
        }
        else{
            console.log("No llevarás acompañante");
            alert("El costo total es: $" + costo_ron);
        }
    }

    if(alcohol.toLowerCase() == "whiskey"){
        console.log("Whiskey Macallan 10 años $" + costo_whiskey);
        side = prompt("¿Quieres llevar hielo? Si/No");
        if(side.toLowerCase() == "si" || side.toLowerCase() == "sí"){
            console.log("Elegiste llevar " + costo_hielo);
            alert("El costo total es: $" + (costo_whiskey + ". El hielo es cortesía."));
        }
        else{
            console.log("No llevarás acompañante");
            alert("El costo total es: $" + costo_whiskey);
        }
    }

    if(alcohol.toLowerCase() == "tequila"){
        console.log("Tequila Jose Cuervo Reserva de la Familia $" + costo_tequila);
        side = prompt("Con un tequila de esta calidad te recomendamos consumir solo con hielo o puedes adquirir el kit mexicano (sal de gusano y naranja) ($35). Si no quieres side, deja vacío este campo.");
        if(side.toLowerCase() == "hielo"){
            console.log("Elegiste llevar " + costo_hielo);
            alert("El costo total es: $" + (costo_tequila + ". El hielo es cortesía."));
        }
        else if(side.toLowerCase() == "kit" || side.toLowerCase() == "kit mexicano"){
            console.log("Elegiste el kit mexicano $" + costo_kit);
            alert("El costo total es: $" + (costo_tequila + costo_kit));  
        }
        else{
            console.log("No llevarás acompañante");
            alert("El costo total es: $" + costo_tequila);
        }
    }
}


