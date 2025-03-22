# Guía de Instalación de phpMyAdmin

## Requisitos Previos
- Un servidor web (Apache o Nginx).
- MySQL instalado y en funcionamiento.

## Pasos para Instalar phpMyAdmin

1. **Descargar phpMyAdmin**
   - Visita el [sitio web oficial de phpMyAdmin](https://www.phpmyadmin.net/downloads/) y descarga la última versión.

2. **Descomprimir el Archivo**
   - Descomprime el archivo descargado en tu computadora.

3. **Mover la Carpeta**
   - Mueve la carpeta descomprimida a la raíz de tu servidor web. Por ejemplo, si usas Apache, la ruta podría ser `C:\xampp\htdocs\` en Windows o `/var/www/html/` en Linux.

4. **Configurar phpMyAdmin**
   - Renombra el archivo `config.sample.inc.php` a `config.inc.php`.
   - Abre `config.inc.php` y ajusta las configuraciones necesarias, como el nombre de usuario y la contraseña de MySQL.

5. **Acceder a phpMyAdmin**
   - Abre un navegador web y accede a `http://localhost/phpmyadmin` (o la URL correspondiente si lo has movido a otra ubicación).
   - Inicia sesión con tus credenciales de MySQL.

## Notas Adicionales
- Asegúrate de que tu servidor web y MySQL estén en funcionamiento antes de intentar acceder a phpMyAdmin.
- Consulta la [documentación oficial de phpMyAdmin](https://docs.phpmyadmin.net/en/latest/) para más detalles y configuraciones avanzadas.
