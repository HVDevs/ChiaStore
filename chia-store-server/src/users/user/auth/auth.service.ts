// este servicio manejara la validacion del usuario

import { Injectable, NotAcceptableException } from '@nestjs/common'; // Utilizaremos el metodo NotAcceptableExeption cuando haya error
import { UserService } from 'src/users/services/user/user.service'; // Utilizaremos el servicio de usuario para buscarlo en BD
import * as bcrypt  from 'bcrypt' // utilizaremps bcrypt para desencriptar la hashedPassword guardada en BD
import { JwtService } from '@nestjs/jwt'; // usaremos el servicio de JWT para el login
import { User } from 'src/entities/user.model'; // usaremos la entidad usuario

@Injectable()
export class AuthService {
    // en el constructor instanciaremos los servicios que utilizaremos 
    constructor(private readonly userService: UserService, private jwtService: JwtService) {}

    // creamos el metodo para validar al usuario
    async validateUser(username: string, password: string) : Promise<User>{ // pasamos los datos del usuario
        const user = await this.userService.getUser(username); // llamamos al metodo getUser del servicio de usuarios

        // si no encuentra el usuario devuelve una excepcion.
        if(!user[0]){
            throw new NotAcceptableException('No se encontro el usuario')
        }

        // si existe que compare la hashedPassword
        const passwordValid = await bcrypt.compare(password, user[0].password); 

        // y despues que valide todo y duevuelva al usuario
        if(user[0] && passwordValid){
            return user[0];
        }

    }

    // tambien creamos el metodo de login
    async login(user: User){
        const payload = { username: user.username, sub: user.user_id} // pasamos los datos del usuario para que los use en la creacion del token
        return {
            access_token: this.jwtService.sign(payload) // usamos el metodo del servicio JWT para firmar el token y retornarlo
        }
    }
}
