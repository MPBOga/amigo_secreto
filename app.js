// Array para almacenar los nombres de los amigos ingresados
let amigos = [];

/* Función para controlar el estado del botón de sorteo:
   Se deshabilita cuando la lista está vacía y se habilita en otro caso. */
function controlarEstadoSorteo() {
  const btnSortear = document.querySelector(".button-draw");
  btnSortear.disabled = amigos.length === 0;
}

// Función para agregar un amigo a la lista
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  // Validación: campo no vacío
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  // Verificar duplicados
  if (amigos.includes(nombre)) {
    alert("El nombre ya ha sido agregado. Por favor, ingrese un nombre diferente.");
    return;
  }

  // Agregar y actualizar lista
  amigos.push(nombre);
  input.value = "";
  actualizarLista();
}

// Función para actualizar el listado en el HTML
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista existente
  
    // Recorrer el array y colocar cada nombre con un botón "eliminar" (solo ícono)
    for (let i = 0; i < amigos.length; i++) {
      lista.innerHTML += `
        <li>
          ${amigos[i]}
          <button class="delete-button" onclick="eliminarAmigo(${i})" aria-label="Eliminar ${amigos[i]}" title="eliminar">
            <img src="assets/trash.png" alt="Eliminar">
          </button>
        </li>
      `;
    }
    controlarEstadoSorteo();
  }
  

// Función para eliminar un amigo específico de la lista
function eliminarAmigo(index) {
  amigos.splice(index, 1);
  actualizarLista();
}

// Función para sortear aleatoriamente un amigo y eliminarlo de la lista
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay suficientes amigos para sortear.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `El amigo secreto es: ${amigoSorteado}`;

  // Eliminar el amigo sorteado para que no vuelva a aparecer
  amigos.splice(indiceAleatorio, 1);
  actualizarLista();

  // Si la lista queda vacía después del sorteo, se notifica al usuario
  if (amigos.length === 0) {
    alert("La lista está vacía. No hay más amigos para sortear.");
  }
}

// Función para exportar la lista de amigos a un archivo CSV
function exportarCSV() {
  if (amigos.length === 0) {
    alert("No hay nombres para exportar.");
    return;
  }

  let csvContent = "data:text/csv;charset=utf-8,";
  amigos.forEach(amigo => {
    csvContent += amigo + "\n";
  });

  // Crea nombre en base a la fecha y la palabra amigos
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  const now = new Date();
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `amigos_${now.toISOString().slice(0,10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Función para importar una lista de nombres desde un archivo CSV
function importarCSV(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const text = e.target.result;
    const lines = text.split(/\r?\n/);
    let addedCount = 0;
    let skippedCount = 0;

    lines.forEach(line => {
      const nombre = line.trim();
      // Se agrega el nombre solo si no está vacío y no es duplicado
      if (nombre !== "" && !amigos.includes(nombre)) {
        amigos.push(nombre);
        addedCount++;
      } else if (nombre !== "") {
        skippedCount++;
      }
    });
    
    actualizarLista();
    event.target.value = ""; // Reiniciar el input file
    alert(`Importación completada. Se han agregado ${addedCount} nombres y se omitieron ${skippedCount} duplicados o vacíos.`);
  };

  reader.onerror = function() {
    alert("Error al leer el archivo CSV.");
  };

  reader.readAsText(file);
}

// Habilitar ingreso al presionar la tecla ENTER en el campo de texto
document.getElementById("amigo").addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    agregarAmigo();
  }
});

// Al cargar la página se establece el estado correcto del botón de sorteo
controlarEstadoSorteo();
