export function obtenerDifereciaYear (year){
    return new Date().getFullYear() - year
}

export function calcularMarca(marca){
    let incremento
    switch (marca) {
        case "1":
            incremento= 1.30
            break;
        case "2":
            incremento= 1.05
            break;
    
            case "3":
            incremento= 1.15
            break;
        default:
            break;
    }
    return incremento
}

export function calcularPlan(plan){
    let masPlan
    switch (plan) {
        case "1":
            masPlan = 1.20
            break;
            case "2":
            masPlan = 1.50
            break;
    
        default:
            break;
    }
    return masPlan
    // otra forma de hacerlo con un condicional //todo return plan === "1"?1.2 :1.5
}

export function formatearDinero(cantidad){
    return cantidad.toLocaleString('es-ES',{
        style: 'currency',
        currency: "EUR"
    })
}