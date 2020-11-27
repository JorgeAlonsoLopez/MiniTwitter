# MiniTwitter

El proyecto MiniTwitter consiste en simular a la red social, pero con funcionalidades básicas. En este caso, solo tendremos la opción de crear un usuario, iniciar sesión, ver todos los tweets y publicar uno.

Para iniciar el proyecto se ha ejecutar ``` npm install ``` en la carpeta Proyecto, dentro de la raíz del repositorio, para instalar los componentes necesarios y después  ``` ng serve -o ``` , en la misma ubicación, para lanzar el servidor.

Al terminar de cargar aparecerá el login, donde insertaremos nuestras credenciales. Las comprobaremos y si son correctas, podremos hacer login.

Si no tenemos cuenta, procedemos a registrarnos. Si los datos que hemos proporcionado ya están siendo usados por otra cuenta, no pasará nada y tendremos que proporcionar unos nuevos. Si con los datos proporcionado, se ha podido crear el usuario sin problemas, aparecerá un mensaje indicándonoslo.

Al iniciar sesión de forma correcta, tendremos acceso al listado de todos los tweets. En estos tendremos la opción de marcar uno como favorito, donde se nos notificará que se ha marcado de forma correcta, pero para comprobarlo hay que refrescar la página.  
Para ver los usuarios que han marcado como favorito un tweet, tendremos junto con dicho tweet un desplegable que nos mostrará el nombre de los usuarios.  

Tendremos también la opción de refrescar la página, cerrar sesión y publicar un nuevo tweet, que abrirá un desplegable con el formulario para insertar el mensaje y la confirmación de publicación.

Un usario de prueba es:  
Correo: ``` dam2019@gmail.com ```  
Contraseña: ``` 1234 ```