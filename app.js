// Checking age //
let age;
let allowed_age;
let terms_conditions;

alert("Te damos la bienvenida a Shakin' at home, un lugar para vivir la experiencia de la coctelería en casa. Para continuar debemos confirmar que estés autorizado para comprar bebidas alcohólicas.");

age = parseInt(prompt("Ingresa el año en que naciste"));
console.log(allowed_age = 2022 - age);
check_age();
check_tc();

function check_age() {
    if (allowed_age >= 18){
        terms_conditions = prompt("¡Qué bien, eres mayor de edad! Ahora, ¿aceptas los términos y condiciones? Y/N");
    }
    else {
        alert("La compra de licor solo está autorizada para mayores de 18 años"); 
}}

function check_tc() {
    if (terms_conditions === "Y" || terms_conditions === "y") {
    
        alert("Nos alegra que estés aquí, inicia la compra de tus productos");
    }
        
    else {
        alert("Para hacer uso de nuestro sistema, debes aceptar y cumplir con los términos y condiciones"); 
}}

