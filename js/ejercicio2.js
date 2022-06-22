/** 
  2- Generar un programa que le pida a una persona un color del semaforo,con este se debe
  determinar que se debe de hacer cuando un semaforo este en rojo,verde o amarillo, si este
  esta en verde debe decir siga, si esta en amarillo precaucion, si esta en rojo alto, si la
  persona dijita un color que no pertenece al semaforo debe aparecer un alert que diga que
  debe digitar un color del semaforo. 
*/
let color = prompt("Digite un del color del semaforo: ")

if (color=="rojo"){
  alert("Alto")
}else if (color=="amarillo"){
  alert("Precaucion")
}else if (color=="verde"){
  alert("Siga")
}else{
  alert("Debe digitar un color del semaforo.")
}