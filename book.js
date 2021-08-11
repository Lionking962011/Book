
function searchj()
{
   var bookType=getSelectBoxValue('bookType');
   var age=getSelectBoxValue('age');

   if (bookType=="Horror" && age=="5") {
      window.alert("Finding some books");
      console.log("type1");
      window.location ="horrorbooksfor5to6.html";
   }
   if (bookType=="Horror" && age=="7") {
      window.alert("Finding some books");
      console.log("type2");
      window.location ="horrorbooksfor7to8.html";
   }
   if (bookType=="Horror" && age=="9") {
      window.alert("Finding some books");
      console.log("type3");
      window.location ="horrorbooksfor9to10.html";
   }
   if (bookType=="Horror" && age=="11") {
      window.alert("Finding some books");
      console.log("type4");
      window.location ="horrorbooksfor11to12.html";
   }
   //fantasy
   if (bookType=="Fantasy" && age=="5") {
      window.alert("Finding some books");
      console.log("type1");
      window.location ="fantasybooksfor5to6.html";
   }
   if (bookType=="Fantasy" && age=="7") {
      window.alert("Finding some books");
      console.log("type2");
      window.location ="fantasybooksfor7to8.html";
   }
   if (bookType=="Fantasy" && age=="9") {
      window.alert("Finding some books");
      console.log("type3");
      window.location ="fantasybooksfor9to10.html";
   }
   if (bookType=="Fantasy" && age=="11") {
      window.alert("Finding some books");
      console.log("type4");
      window.location ="fantasybooksfor11to12.html";
   }
   //my
   if (bookType=="My" && age=="5") {
      window.alert("Finding some books");
      console.log("type1");
      window.location ="mysbooksfor5to6.html";
   }
   if (bookType=="My" && age=="7") {
      window.alert("Finding some books");
      console.log("type2");
      window.location ="mysbooksfor7to8.html";
   }
   if (bookType=="My" && age=="9") {
      window.alert("Finding some books");
      console.log("type3");
      window.location ="mysbooksfor9to10.html";
   }
   if (bookType=="My" && age=="11") {
      window.alert("Finding some books");
      console.log("type4");
      window.location ="mysbooksfor11to12.html";
   }
}

/**
 * Get Select Box Value By ID
 * @param eid Element ID
 * @return string
 */

 function getSelectBoxValue(id) {
   return document.getElementById(id).options[document.getElementById(id).selectedIndex].value;
}