class Pizza {
  constructor (nombre, precio, tamaño) {
    this.nombre = nombre;
    this.precio = precio;
    this.tamaño = tamaño;
  }
}

class UI {
  addPizza (pizza) {
        const listaPizza = document.getElementById('lista-pizza');
        const element = document.createElement('div');
        element.innerHTML = `<div class="card text-center mb-4">
        <div class="card-body">
        <strong>Pizza Nombre</strong>: ${pizza.nombre}
        <strong>Pizza Precio</strong>: ${pizza.precio}
        <strong>Pizza Tamaño</strong>: ${pizza.tamaño}
        <a href="#" class="btn btn-danger" nombre="delete">Delete</a>
        </div>
        </div>
        `;
        productList.appendChild(element);

        resetForm() {
          document.getElementById('pizza-form').reset();
        }
        
  }

  deletePizza (element) {
           if(element.nombre === 'delete') {
            element.parentElement.parentElement.parentElement.remove();
           }
           
  }

  showMessage (message,cssClass) {
    const div = document.createElement('div');
    div.className = `alert alert-${cssClass}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const app = document.querySelector('#App');
    container.insertBefore(div, app);

  }
}

document.getElementById('pizza-form').addEventListener('submit', function(e) {
  const nombre = document.getElementById('nombre').value;
  const precio = document.getElementById('precio').value;
  const tamaño = document.getElementById('tamaño').value;

  const pizza = new Pizza(nombre,precio,tamaño);
  const ui = new UI();
  ui.addPizza(pizza);
  ui.resetForm();
  ui.showMessage('Pedido Exitoso', 'succes');

  e.preventDefault();
});

document.getElementById('lista-pizza').addEventListener('click', function(e) {
  const ui = new UI();
  ui.deletePizza(e.target);

})