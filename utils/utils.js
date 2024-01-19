//para validar string en local
// el primer parametro se compara con el segundo pero si este no esta diponible automaticamente retorna TRUE
export function includesString(name,nameCompare){
    if(!nameCompare) return true
    return name.toLowerCase().includes(nameCompare.toLowerCase())
}