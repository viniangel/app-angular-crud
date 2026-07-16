import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-producto',
  imports: [FormsModule],
  templateUrl: './producto.html',
  styleUrl: './producto.css',
})
export class Producto {
  //Atributos (Puede ser interfaz)
  nombre: string = "";
  precio: number = 0;
  descripcion: string;
  imagen: string;
  stock: number;


  editando: boolean = false;
  posicion: number = -1;
  //Base de datos temporal
  productos: any[] = []
  //Constructor
  constructor() {
    //Inicializar datos
    this.stock = 0;
    this.descripcion = "";
    this.imagen = "";

    const prods = localStorage.getItem("productos") || "[]"
    this.productos = JSON.parse(prods);
  }

  guardar() {
    if (this.editando) {
      this.productos[this.posicion].nombre = this.nombre;
      this.productos[this.posicion].precio = this.precio
      this.productos[this.posicion].imagen = this.imagen
      this.productos[this.posicion].stock = this.stock
      this.productos[this.posicion].descripcion = this.descripcion
      this.editando = false
    }
    else {
      this.productos.push({ nombre: this.nombre, precio: this.precio, descripcion: this.descripcion, imagen: this.imagen, stock: this.stock });
    }

    //Guardar en LocalStorage
    localStorage.setItem("productos", JSON.stringify(this.productos));
    this.resetear()
  }

  eliminar(posicion: number) {
    if (confirm("Estás seguro de eliminar el producto?")) {
      this.productos.splice(posicion, 1);
      this.resetear()
    }
  }

  editar(prod: any, posicion: number) {
    this.editando = true;
    this.posicion = posicion;
    this.nombre = prod.nombre,
    this.precio = prod.precio,
    this.descripcion = prod.descripcion;
    this.imagen = prod.imagen;
    this.stock = prod.stock;
  }

  resetear() {
    this.nombre = "";
    this.precio = 0;
    this.descripcion = "";
    this.imagen = "";
    this.stock = 0;
  }
}
