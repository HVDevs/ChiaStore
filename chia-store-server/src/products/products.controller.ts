import { Controller, Get, Param } from '@nestjs/common';
import { product } from './models/product.model';

// es muy importatnte qu el decorador @Controller pase el string 'products', ya que esto indica que atendera 
// a rutas que estan DENTRO de la carpeta products
@Controller('products') 
export class ProductsController {
    // ejemplo de ruta madre, en este caso devuelve un string
    @Get()
    getHelloInProducts(): string{
        return "Productos"
    }

    // ejemplo de ruta anidada, en este caso devuelve array de categorias
    @Get('categories')
    getUserInProducts(): string[]{
        var categories: string[] = []
        var counter: number = 0;
        while (counter < 3 ) {
            categories.push(`Category${counter}`)
            counter++
        }
        return categories
    }

    // ejemplo de ruta con parametros
    // datos de ejemplo
    productos: product[] = [
        {
            id: '01',
            name: 'Ropa',
            value: '100'
        },
        {
            id: '02',
            name: 'Gorra',
            value: '150'
        },
        {
            id: '03',
            name: 'Ropa',
            value: '100'
        },
    ]

    // creamos la ruta
    @Get(':id') // le indicamos el parametro que necesitaremos
    find(@Param() params): string{  // le pasamos el argumento decorador @Params
        var productName: string = ''
        for (let i = 0; i < this.productos.length; i++) {
            const e = this.productos[i];
            if (e.id === params.id) { //usamos el parametro para nuestra logica, en este caso en una condicion
                productName = e.name 
                break
            } else { 
                productName = 'No existe el producto'
            }
            
        }
        return productName // retornamos algo, ya que es obligatorio
    }




}
