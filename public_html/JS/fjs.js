var total=0;
window.addEventListener("load",function(){
var JsonCarrito;
var objeto={};
var productos=new Array();
var precios=new Array();
var subtotales=new Array();
var i=0;
var objetos=document.querySelector(".i");
console.log(objetos);
document.addEventListener("click",function(e){
    if(e.target.getAttribute("class")=="i")
    {   
         var cadena="";
        var descripcion=e.target.getAttribute("id");
        var Pventa=document.querySelector("."+e.target.getAttribute("id")).textContent;
        for(var x=1;x<Pventa.length;x++){
         cadena+=Pventa[x];
        }
         total+=parseInt(cadena);
      
        
    
       localStorage.setItem("Tot",total);
        productos[i]=descripcion;
        precios[i]=Pventa;
        var datos=[];
        for(y=0;y<productos.length;y++)
        {

            datos.push({ 
                "Producto":productos[y],
                "Precio":precios[y],

            });
        }
        i++;
        objeto.datos=datos;
        console.log(JSON.stringify(objeto));


            alert("Producto agregado al Carrito");
    } 
   localStorage.setItem('MisVentas',JSON.stringify((objeto))); 
});

document.getElementById("ventas").addEventListener("click",function(){

    
});

        


});


