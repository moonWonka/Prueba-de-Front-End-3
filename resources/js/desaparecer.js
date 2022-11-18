const ocultar = () => {

    const txtTarget = document.getElementById('txt_nombre').value

    if (txtTarget.length === 0) {
        alert('ingrese su nombre')
    } else {
        const target = document.getElementById('imagen-auto')
        alert(`su nombre es: ${txtTarget}`)
        target.style.display = 'none';    
    }
}
