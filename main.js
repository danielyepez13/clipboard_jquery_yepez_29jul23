$(document).ready(function (){
  // Hacer dos funciones que agreguen y remuevan la clase en la etiqueta span
  function add(){
    $(".copied").addClass("bounce-effect")
    $(".copied").removeClass("d-none")
  }

  function remove(){
    $(".copied").removeClass("bounce-effect")
    $(".copied").addClass("d-none")
  }

  //Llamamos a las funciones y copiamos el texto con el click en el boton
  $(".copy-btn").click(function () {
    $("#textField").select();
    document.execCommand("copy");

    add();
    setTimeout(remove, 800)
  })
})