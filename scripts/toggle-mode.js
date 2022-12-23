const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark-mode');
});


function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    document.getElementById("logo-blk").style.display = "none";

    document.getElementById("logo-wht").style.width = "150px";
 }