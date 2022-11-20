const calcular = () => {
    const operation = document.getElementById('operation').value
    const resultado = []
    let resultadoA

    const rex = /\d+[\-\/\+\*]\d+/
    const rexOp = /[\-\/\+\*]/

    let found = operation.match(rex)

    if (found === null) {
        alert('error debe ingresar una operacion correcta')
    } else {
        const operador = found[0].match(rexOp)
        const ope = operador[0]
        const numeros = operation.split(ope)

        numeros.forEach((num) => {
            const value = parseInt(num)
            resultado.push(value)
        })

        switch (ope) {
            case '+':
                resultadoA = resultado[0] + resultado[1]
                document.getElementById(
                    'result'
                ).innerHTML = `el resultado de sumar ${resultado[0]} y ${resultado[1]} es: ${resultadoA}`
                break
            case '-':
                resultadoA = resultado[0] - resultado[1]
                document.getElementById(
                    'result'
                ).innerHTML = `el resultado de restar ${resultado[0]} y ${resultado[1]} es: ${resultadoA}`
                break
            case '*':
                resultadoA = resultado[0] * resultado[1]
                document.getElementById(
                    'result'
                ).innerHTML = `el resultado de multiplicar ${resultado[0]} y ${resultado[1]} es: ${resultadoA}`
                break
            case '/':
                resultadoA = resultado[0] / resultado[1]
                document.getElementById(
                    'result'
                ).innerHTML = `el resultado de dividir ${resultado[0]} y ${resultado[1]} es: ${resultadoA}`
                break
            default:
                console.log('error de operador!')
                break
        }

        console.log(resultadoA)
    }
}
