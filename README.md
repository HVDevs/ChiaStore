# Nest Server - Implementacion de JWT y bcrypt para hashing de contraseña

Documentacion: https://docs.nestjs.com/security/authentication <br>
Tutorial (usan Mongodb): https://blog.logrocket.com/how-to-implement-jwt-authentication-nestjs/#configuring-jwt

# Instalacion de dependencias
```
$ npm install --save @nestjs/passport passport passport-local
$ npm install --save-dev @types/passport-local
$ npm i bcrypt
```

# Creamos las/os siguientes entidades, modulos, servicios y controladores

Modulo user.module.ts <br>
Entidad user.model.ts <br>
Controlador user.controller.ts <br>
Servicio user.service.ts

# Adicionalmente creamos Modulo auth

Modulo auth.module.ts <br>
Servicio auth.service.ts <br>
Controlador auth.controller.ts

# Pruebas con PostMan

<strong> Endpoints:</strong> <br>
http://localhost:3000/auth/signup > crear usuario <br>
Ejemplo Body:<br>
  JSON:<br>
  ```
  {
      "username" : "prueba@prueba.com",
      "password" : "ejemplo1",
      "user_id"  : "" // lo dejamos vacio ya que el controlador asigna numero random 4 digitos.
  } 
  ```


http://localhost:3000/auth/users > obtener array de usuarios <br>
Body: Vacio <br>
Ejemplo Response: <br>
  JSON: <br>
  ```
  [
      {
          "user_id": 1062,
          "password": "$2b$10$JV9S8w16gcQtoNBCC9OdNuj4Xj5PT651LzN8wLNKewtORjpvlDF82", // hashed password
          "username": "prueba@prueba.com"
      },
      ...
   ]
   ```
 
http://localhost:3000/auth/login > login de usuario <br>
Ejemplo Body:<br>
  JSON:<br>
  ```
  {
      "username" : "prueba@prueba.com",
      "password" : "ejemplo1",
      "user_id"  : "" // lo dejamos vacio ya que no es un campo obligatorio (busca al user por el mail)
  }
  ```

Ejemplo respuesta: <br>
JSON:<br>
```
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1hdGlhc0BnbWFpbC5jb20iLCJzdWIiOjY3ODQsImlhdCI6MTY2NTE3MjY4MywiZXhwIjoxNjY1MTcyODAzfQ.BifxvDt-bVGbQGwGlezSaVO9ZSXZaRwM9KsGgeTEGrQ"
}
```

<br><br><br>
Hecho con amor por <strong>@unknowncode44</strong> para <strong>@HVDevs</strong>


 
 

