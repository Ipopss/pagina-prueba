window.addEventListener("load",function(){
    var lista=[];//lista que nos para almacenar el JSON
var historial=localStorage.getItem('MisVentas');//Obteniendo datos del local storage con el nombre que le pusimos
lista=JSON.parse(historial);//convirtiendo a JSON los datos obtenidos, y almacenados en "lista"
var fila=document.getElementById("Mitabla");//obtencion del body de la tabla del html
for(var x=0;x<lista.length;x++)//recorriendo el JSON
{
    //Ingresando los datos a la tabla
    fila.innerHTML+='<tr> <td>'+lista.datos[x].Producto+'</td><td>'+ lista.datos[x].Precio +'</td><td>'+lista.datos[x].Subtotal+ '</td></tr>';
}
});


