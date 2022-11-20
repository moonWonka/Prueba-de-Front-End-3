const calcularFibo = (num) => {
    let n = 0
    const serieFibo = []

    for (n; n < num; n++) {
        if (n === 0) {
            serieFibo.push(0)
        } else if (n === 1) {
            serieFibo.push(1)
        } else {
            let operacion = serieFibo[n - 1] + serieFibo[n - 2]
            serieFibo.push(operacion)
        }
    }

    return serieFibo
    //0 1 1 2 3 5 8
}

const comprobar = (str) => {
    const value = parseInt(str)
    const revisar = isNaN(value)

    if (revisar || value < 1) {
        alert('debe ingresar un numero positivo')
        return false
    }

    return true
}

const agregarSerie = (secuencia) => {
    const nodo = document.getElementById('secuencia')

    const crearUl = document.createElement('ul')

    secuencia.forEach((ele) => {
        const li = document.createElement('li')
        const txtNode = document.createTextNode(ele)

        li.appendChild(txtNode)
        nodo.appendChild(li)
    })
}

const mostrarFibo = () => {
    let secuencia
    //comprobar si es un numero
    const target = document.getElementById('txt_number').value
    const comprobacion = comprobar(target)
    //comprobar si hay elementos <li>
    const largoLi = document.querySelectorAll('li').length > 0

    if (largoLi) {
        eliminarSerie()
    }

    if (comprobacion) {
        //transformar a int el numero
        const cantidad = parseInt(target)
        //crear secuencia
        secuencia = calcularFibo(cantidad)
        //agregar secuencia a los li
        agregarSerie(secuencia)
    } else {
        document.getElementById('txt_number').value = ''
    }
}

const eliminarSerie = () => {
    const target = document.querySelector('.uwu')
    target.innerHTML = ''
}
