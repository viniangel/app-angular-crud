import { Routes } from '@angular/router';
import { Blog } from './blog/blog';
import { Producto } from './producto/producto';
import { ProductoCarrito } from './producto-carrito/producto-carrito';
import { Error404 } from './error404/error404';

export const routes: Routes = [
   { path: '', component: Blog},
   { path: 'productos', component: Producto},
   { path: 'productos-venta', component: ProductoCarrito},
   { path: '**', component: Error404}
];
