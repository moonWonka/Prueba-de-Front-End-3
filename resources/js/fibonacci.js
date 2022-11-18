const calcularFibo = (num) => {
  let n = 0;
  const serieFibo = [];

  for (n; n < num; n++) {
    if (n === 0) {
      serieFibo.push(0);
    } else if (n === 1) {
      serieFibo.push(1);
    } else {
      let operacion = serieFibo[n - 1] + serieFibo[n - 2];
      serieFibo.push(operacion);
    }
  }

  return serieFibo;
  //0 1 1 2 3 5 8
};

const comprobar = (str) => {
  const value = parseInt(str);
  const revisar = isNaN(value);

  if (revisar || value < 1) {
    alert("debe ingresar un numero positivo");
    return false;
  }

  return true;
};

const agregarSerie = (secuencia) => {
  console.log("que pasa");
  const nodo = document.getElementById("secuencia");
  console.log("olita");

  secuencia.forEach((ele) => {
    const li = document.createElement("li");
    const txtNode = document.createTextNode(ele);

    li.appendChild(txtNode);
    nodo.appendChild(li);
  });
};

const mostrarFibo = () => {
  let secuencia;
  const target = document.getElementById("txt_number").value;
  //console.log(target)
  const comprobacion = comprobar(target);

  if (comprobacion) {
    const cantidad = parseInt(target);
    secuencia = calcularFibo(cantidad);
    agregarSerie(secuencia);
    //document.getElementById('txt_number').value = ""
    console.log(secuencia);
  } else {
    document.getElementById("txt_number").value = "";
  }
};
