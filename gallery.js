alert(document.getElementById("sun").nodeName);

var thoughts = document.getElementsByTagName('p');
alert(thoughts[0].innerHTML);

function changeImage(){
	document.getElementById("sunset1").src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Hazy_Crazy_Sunrise.jpg/1200px-Hazy_Crazy_Sunrise.jpg";
	document.getElementById("sunset2").src="https://roseville-estate-planning.websitehabitat.com/wp-content/uploads/sites/46/2017/07/rising-sun.jpg";

}
function myFunction() {
    document.getElementById("sun").style.color = "red";
    document.getElementById("carl").style.color = "blue";
}

$(document).ready(function(){
	$("#bye").click(function(){
		$("#sun").toggle();
	});
});

