import { Component, signal } from '@angular/core';

interface ProductoInterface {
  nombre: string;
  precio: number;
  stock: number;
  descripcion: string;
  imagen: string;

}

interface CarritoInterface {
  nombre: string;
  precio: number;
  stock: number;
  descripcion: string;
  imagen: string;
  cantidad: number;

}


@Component({
  selector: 'app-producto-carrito',
  imports: [],
  templateUrl: './producto-carrito.html',
  styleUrl: './producto-carrito.css',
})
export class ProductoCarrito {
  productos = signal<ProductoInterface[]>([]);
  carrito = signal<CarritoInterface[]>([]);
  total = signal<number>(0);

  constructor() {
    const prod = localStorage.getItem("productos") || "[]";
    this.productos.set(JSON.parse(prod));
    const carrito = localStorage.getItem("carrito") || "[]";
    this.carrito.set(JSON.parse(carrito));
    const total = localStorage.getItem("total") || "0";
    this.total.set(Number(JSON.parse(total)));
  }

  agregarCarrito(prod: ProductoInterface) {
    const productoEncontrado = this.carrito().find((item) => item.nombre === prod.nombre);
    if (productoEncontrado) {
      productoEncontrado.precio += prod.precio; 
      productoEncontrado.cantidad += 1
    }
    else {
      this.carrito.update((listaActual) => [...listaActual, {...prod, cantidad: 1}]);
      
    }
    this.total.update(valorActual => valorActual + prod.precio);
    localStorage.setItem("carrito", JSON.stringify(this.carrito()));
    localStorage.setItem("total", JSON.stringify(this.total()));
  }

  eliminarItemCarrito(item: CarritoInterface){
    this.carrito.update(i => i.filter( p => p.nombre !== item.nombre));
    this.total.update(total => total - item.precio);
    localStorage.setItem("total", JSON.stringify(this.total()));
    localStorage.setItem("carrito", JSON.stringify(this.carrito()));
  }

  reset(){
    localStorage.removeItem("carrito");
    this.carrito.set([]);
    localStorage.removeItem("total");
    this.total.set(0);
  }

}
