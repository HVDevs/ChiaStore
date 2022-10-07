// el controlador auth es para manejar el login del usuario, usando el decorador UseGuard para forzar la autenticacion
// del usuario cuando intenta logearse. Usando el metodo AuthGuard del decorador hacemos uso de nuestra estrategia local de autenticacion
// que consta en la comparacion de la hashed password.

// si esta todo ok con el AuthGuard pasamos a loggear al usuario usando sus credenciales y devolviendo el token.

import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @UseGuards(AuthGuard('local')) // hacemos referencia a nuestra strategia local
    @Post('login') // hacemos un post a la ruta de login
    async login(@Request() req){
        console.log(req);
        return this.authService.login(req.user)
    }
}
