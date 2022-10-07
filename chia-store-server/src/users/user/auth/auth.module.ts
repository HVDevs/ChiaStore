// el AuthModule se encargara de manejar la autenticacion, y usara JWT para proveer seguridad al usuario.

import { Module }           from '@nestjs/common'; 
import { UserModule }       from '../user.module';                          // utilizaremos el modulo User
import { AuthService }      from './auth.service';                          // utilizaremos el servicio de autenticacion
import { PassportModule }   from '@nestjs/passport';                        // utilizaremos la libreria passport de nest (JWT)
import { JwtModule }        from "@nestjs/jwt";                             // el modulo JWT
import { AuthController }   from './auth.controller';                       // llamaremos el controlador de autenticacion
import { UserService }      from 'src/users/services/user/user.service';    // utilizaremos el servicio user 
import { User }             from 'src/entities/user.model';                 // usaremos la entidad creada para el usuario
import { LocalStrategy }    from './local.auth';                            // la estrategia es para validar el token
import { TypeOrmModule }    from '@nestjs/typeorm';                         // usamos TYPEORM para manejar las solicitudes a BD


@Module({
    imports:        [UserModule, PassportModule, JwtModule.register({
        secret: 'secreykey',                // JWT necesitaria una llave secreta (guardarla en variables de entorno!!)
        signOptions: { expiresIn: '120s' }, // definimos el tiempo de duracion del token
    }), TypeOrmModule.forFeature([ User ])],
    providers:      [ AuthService, UserService, LocalStrategy ],
    controllers:    [ AuthController ]
})
export class AuthModule {}
