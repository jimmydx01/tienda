# Milagrro Shop


Tienda en línea de demostración desarrollada con HTML, CSS y JavaScript. Permite explorar un catálogo local, filtrar productos por categoría y gestionar un carrito que se conserva en el navegador.

## Funciones

- Catálogo cargado desde `js/productos.json`.
- Filtros de ropa, tecnología y vehículos.
- Carrito con contador, eliminación de productos, vaciado y total calculado.
- Persistencia del carrito con `localStorage`.
- Diseño adaptable a escritorio y móvil.
- Páginas de contacto, usuario y formulario visual para subir productos.

## Ejecutar localmente

No requiere instalación de paquetes ni proceso de compilación. Como el catálogo se carga con `fetch`, abre la web mediante un servidor local y no directamente como archivo.

Con Python instalado, desde la carpeta del proyecto ejecuta:

```bash
py -m http.server 8000
```

En sistemas donde el comando `py` no esté disponible, usa:

```bash
python -m http.server 8000
```

Después abre [http://localhost:8000](http://localhost:8000). Para detener el servidor, usa `Ctrl+C` en la terminal.

## Estructura

```text
.
├── index.html             # Catálogo principal
├── carrito.html           # Carrito de compras
├── formulario.html        # Interfaz para subir productos
├── contacto.html          # Página de contacto
├── usuario.html           # Interfaz de registro e inicio de sesión
├── abrigo-01.html         # Ejemplo de ficha de producto
├── css/
│   ├── main.css           # Estilos del catálogo y carrito
│   ├── formulario.css     # Estilos del formulario de productos
│   ├── contacto.css
│   ├── style.css
│   └── styles.css
├── js/
│   ├── productos.json     # Datos del catálogo
│   ├── main.js            # Catálogo, filtros y acciones del carrito
│   ├── carrito.js         # Vista y acciones del carrito
│   ├── menu.js            # Menú móvil
│   ├── script.js
│   └── index.js
└── img/                   # Imágenes y recursos del catálogo
```

## Catálogo

Los productos se editan en `js/productos.json`. Cada elemento usa esta estructura:

```json
{
  "id": "abrigo-01",
  "titulo": "Abrigo 01",
  "imagen": "./img/abrigos/01.jpg",
  "descripcion": "Descripción del producto",
  "categoria": {
    "nombre": "Ropa",
    "id": "Ropa"
  },
  "precio": 1000
}
```

El `id` debe ser único. Las imágenes deben existir en la ruta indicada y el precio debe ser numérico. Los identificadores de categoría deben coincidir con los filtros definidos en `index.html` (`Ropa`, `Tegnologuia` y `Vehiculos`). El botón de descripción busca una página con el nombre del identificador, por ejemplo `abrigo-01.html`.

## Tecnologías y recursos

- HTML5, CSS3 y JavaScript sin framework.
- `localStorage` para guardar el carrito en el navegador.
- Bootstrap Icons, Toastify, SweetAlert2 y el SDK de PayPal cargados desde CDN.
- Google Fonts cargada desde la web.

Se necesita conexión a Internet para cargar estos recursos externos.

## Estado y limitaciones

Este repositorio es una demostración frontend; no incluye servidor, base de datos ni configuración de despliegue.

- El formulario de producto apunta a `guardar_producto.php`, pero ese endpoint no está incluido. La interfaz por sí sola no publica productos ni actualiza el catálogo.
- Las páginas de contacto y usuario no están conectadas a un servicio de envío, autenticación o almacenamiento.
- La integración de PayPal requiere configuración de credenciales y una creación segura del pedido en un backend. Antes de aceptar pagos reales, el importe debe calcularse en el servidor a partir del carrito.
- Para que todos los botones de descripción funcionen, debe existir una página HTML cuyo nombre coincida con el `id` de cada producto.
