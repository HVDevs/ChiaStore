import { Action } from "@ngrx/store";
import { type } from "os";

/*
En este apartado definiremos las acciones que se realizaran durante la aplicacion,
sabemos que necesitaremos conocer que productos tenemos y sus atributos
sabemos que necesitaremos agregar prodcutos al carro de compra
sabemos que necesitaremos quitar items del carro de compra
necesitamos saber si los items se agregaron correctamente al carro

manejaremos esas acciones, primero las enumeraremos y despues crearemos clases que instancien
las mismas y para ello extenderemos la clase Action, propia de la libreria ngrx
*/ 

// definimos una interface para manejar los productos
interface Product {
    name: string;
    price: number;
    description: string;
    image: string;
}

// definimos un enumerador de las acciones que realizaremos
export enum ActionTypes {
    Add = '[Product] Add to cart',
    Remove = '[Product] Remove from cart',
    LoadItems = '[Products] Load items from server',
    LoadSuccess = '[Products] Load success'
}

// definimos la clase agregar al carrito, que extiende desde la clase Action de la libreria ngrx
export class AddToCart implements Action{
    readonly type = ActionTypes.Add;

    constructor(public payload: Product){}
}

// definimos la clase obtener, que extiende desde la clase Action de la libreria ngrx
export class GetItems implements Action{
    readonly type = ActionTypes.LoadItems;
}

// definimos la clase quitar del carrito, que extiende desde la clase Action de la libreria ngrx
export class RemoveFromCart implements Action{
    readonly type = ActionTypes.Remove;

    constructor(public payload: Product){}
}

// definimos la clase cargar, que extiende desde la clase Action de la libreria ngrx
export class Load implements Action{
    readonly type = ActionTypes.LoadSuccess;

    constructor(public payload: Product[]){}
}

export type ActionsUnion = AddToCart | RemoveFromCart | GetItems | Load