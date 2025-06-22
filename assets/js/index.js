precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

cantidadSpan = document.querySelector(`#cantidad`)
cantidad.innerHTML = Number(cantidadSpan.innerHTML)
valortotal = document.querySelector('#valortotal')
valortotal.innerHTML = precio * cantidadSpan.innerHTML

//Me encontré con dos problemas en el ejercicio
//cuyo método no está en las guías ni tampoco lo
//vimos en clases. El primero es cómo hacer que
//la página se actualice sola para que el monto
//del total cambie. El segundo, cómo hacer que el
//monto no pase a un número negativo. Me vi
//obligado a investigar en internet y llegué a
//esta solución:

setInterval(`
  cantidad = Number(cantidadSpan.innerHTML)
  cantidad = Math.max(cantidad, 0)
  cantidadSpan.innerHTML = cantidad
  valortotal.innerHTML = cantidad * precio
`, 100)


