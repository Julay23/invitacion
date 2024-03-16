document.getElementById('carta').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'block';
});

document.getElementsByClassName('close')[0].addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

// Ampliar imagen al hacer clic en ella
document.getElementById('imagen-modal').addEventListener('click', function() {
    this.classList.toggle('ampliada'); // Cambiar entre clases 'ampliada' y normal
});
document.getElementById('imagen-modal2').addEventListener('click', function() {
    this.classList.toggle('ampliada'); // Cambiar entre clases 'ampliada' y normal
});

document.getElementById('acepto').addEventListener('click', function() {
    window.location.href = 'https://wa.me/+50376644582'; // Reemplaza 'pagina_de_redireccion.html' con la URL de la página a la que quieras redirigir.
});


