/*$(document).ready(function(){
    $(".box").on("click",function(){
        var classNames = $(this).attr("class").split(" ");
        $("." + classNames[1]).css("background-color","red");
    })
})*/

$(document).ready(function(){
    $(".box").on("click",function(){
       /* when we click on an element with a 'box' class, this event will be fired*/
       var classNames = $(this).attr("class").split(" ");
       var boxClass = classNames[0];
       var className = classNames[1];
       if ($(this).css("background-color") == "rgb(255,0,0)") {
           //if this object is red, turn it black
           $("." + className).css("background-color","#000");
       } else {
           // Else turn all elements with the box class black
           // and then change the colour of all elements
           // with the same class name as the clicked element
           $("." + boxClass).css("background-color","#000");
           $("." + className).css("background-color","red"); 
        }
       });
})
