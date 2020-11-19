
//Cmbiar color al div
function cambia(e)
{
  $("#principal").css("background",e.value);
  if(e.value=="#1C1C1C")
  {$(".texto").css("color","white");}
  else{$(".texto").css("color","black");}
}
//Cambiarl imagen de fondo
function cambiarFondo()
{
     $("#verde").click(function(){
       $("body").css("backgroundImage","url(img/hojas.jpg)");
     });
     $("#azul").click(function(){
      $("body").css("backgroundImage","url(img/cielo.jpg)");
    });
    $("#rojo").click(function(){
      $("body").css("backgroundImage","url(img/rojo.jpg)");
    });
   
} 


//reloj
var Horas=function ()
{
    
    var Factual=new Date();
    var hora=Factual.getHours();
    var minuto=Factual.getMinutes();
    var segundo=Factual.getSeconds();
    var mes=Factual.getMonth();
    var dia=Factual.getDay();
    var diaMes=Factual.getDate();
    var anio=Factual.getFullYear();
    var AmPm;
    var meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    var MesActual=meses[mes];
    var Dias=["Domingo","lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
    var DiaHoy= Dias[dia];
    AmPm=(hora>12)?"pm":"am";
    hora=(hora>12)?hora-12:hora;
    hora=(hora<10)? "0"+hora:hora;
    minuto=(minuto<10)?"0"+minuto:minuto;
    segundo=(segundo<10)?"0"+segundo:segundo;
    document.getElementById("hora").innerHTML=hora+":"+minuto+":"+segundo+AmPm;
    document.getElementById("fecha").innerHTML=DiaHoy+" "+diaMes+" "+"de "+MesActual+" del "+anio;
}



$(document).ready(function(){
 $(".flexslider").flexslider({
    	touch: true,
    	pauseOnAction: false,
    	pauseOnHover: false,
    });
  cambiarFondo();//Llamado a la funcioan de cambiar fondo

    $("#Slider").slider({//Slider
        min:50,
        value:100,
        max:100,
        change: function(e,ui){
          $("#portada").css("opacity",ui.value+"%");
          console.log(ui.value);
        }
    });
    //Para volver al inicio de la pagina
  $(function(){
    $("#inicio").click(function()
   {
      $('html,body').animate({scrollTop:0},'1000');
   });
  
  });
//Acordeon
  $("#acordeon").accordion({collapsible: true});

 Horas();//Llamado de la funcion del reloj
  setInterval(Horas,1000);//Hacer que la funcion Horas se ejecute cada un segundo

  
  $("#rel").click(function()
  {
     $('html,body').animate({scrollTop:1000},'1000');
  });
  
  $("#contacto").click(function()
  {
    location.href="Contacto.html";
  });
});

