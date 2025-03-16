# Amigo Secreto
Este proyecto es una aplicación web sencilla para agregar nombres de amigos y sortear de forma aleatoria el "amigo secreto". Está desarrollada utilizando HTML, CSS y JavaScript. Como parte de el deafío de ORacle ONE Amigo Secreto

## Requerimientos
- Navegador web moderno.
- Conexión a Internet (para cargar las Google Fonts).

## Instalación
1. **Clona el repositorio:**
   ```bash
   git clone https://tu-repositorio-url.git
   cd nombre-del-repositorio
2.	Abre el proyecto:
Simplemente abre el archivo index.html en tu navegador preferido.

## Dependencias
* Google Fonts Se utilizan las familias Inter y Merriweather a través de enlaces CDN en el HTML.
* Tecnologías estándar: HTML, CSS y JavaScript.

## Cómo ejecutar el proyecto
1. Abre el archivo index.html en tu navegador.
2. Ingresa el nombre de un amigo en el campo de texto.
3. Haz clic en el botón **Añadir** para agregar el nombre a la lista.
4. Una vez añadidos uno o varios nombres, haz clic en el botón **Sortear amigo** para ver el resultado del sorteo.

## Posibles problemas y soluciones
* **Problema: La fuente (Google Fonts) no se carga correctamente.** *Solución:* Verifica que tengas conexión a Internet. Si trabajas sin conexión, descarga las fuentes y ajusta la ruta en el <link> correspondiente en el HTML.
* **Problema: El sorteo no muestra ningún resultado.** *Solución:* Asegúrate de que al menos haya un nombre en la lista de amigos antes de sortear.
 
## Detalles adicionales
* **Entrada con ENTER:** Se añadió un event listener al input que verifica si la tecla presionada es ENTER y, en tal caso, llama a agregarAmigo().
* **Eliminación del amigo sorteado:** La función sortearAmigo() elimina el amigo sorteado usando splice() y actualiza la lista.
* **Botones manejo CSV:**
    * El botón de exportación genera un archivo CSV con todos los nombres actuales, se usa la palabra amigos más la fecha de la exportación para generar el nombre en forma automática.
    * La importación se realiza a través de un input de tipo file (oculto) que se activa mediante un label estilizado. Durante la importación se agregan sólo los nombres que sean válidos y que no sean duplicados.
    * **Estado del botón de sorteo:** La función controlarEstadoSorteo() se encarga de habilitar o deshabilitar el botón según la cantidad de nombres en la lista. Se ejecuta tanto al actualizar la lista como al cargar la página.
    * **Puntos clave del HTML:**
        * Cada botón tiene únicamente su <img> y se ha añadido el atributo title para mostrar el tooltip.
         * El botón de sorteo, exportar e importar (a través del label) muestran los textos "sortear amigo", "descargar CSV" y "cargar CSV" respectivamente.
        
## Conclusión
Esta aplicación permite llevar a cabo un sorteo de amigo secreto de manera interactiva y sencilla. Puedes personalizarla o ampliarla según tus necesidades, ya que trabaja con tecnologías web básicas y de uso muy extendido.
