import { Component, signal } from '@angular/core';

interface ProductoInterface{
  nombre: string;
  precio: number;
  stock: number;
  descripcion: string;
  imagen: string;
  estado: boolean;

}

@Component({
  selector: 'app-producto-carrito',
  imports: [],
  templateUrl: './producto-carrito.html',
  styleUrl: './producto-carrito.css',
})
export class ProductoCarrito {
  productos: ProductoInterface[] = [];
  carrito = signal<ProductoInterface[]>([]);

  constructor(){
    const prod = localStorage.getItem("productos") || "[]";
    this.productos = JSON.parse(prod);
  }

  agregarCarrito(prod: ProductoInterface){
    
  }

}
