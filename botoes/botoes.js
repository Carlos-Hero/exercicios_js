var array1 = ["Stark", "Targaryen", "Lannister", "Baratheon"];
array1.push ("Martel");
array1.push ("Tarly");

function casa() {
 for ( var i= 0; i < array1.length; i++)
 document.write('<button onclick="alert(' + "'" + array1[i] + "'" + ')">' +  array1[i] + "</button> <br> <br>");
}

casa();