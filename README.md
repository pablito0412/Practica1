 Practica-1
# Práctica Web Service (Backend - Frontend)

Este proyecto es parte de la práctica de la materia sobre Web Services, donde se trabajó tanto el Backend como el Frontend.

---

## En el **backend** se usó estos comandos para la instalación y configuración:

- `npm` → es el gestor de paquetes de Node.js
- `npm init` → sirve para crear un nuevo proyecto (crea el archivo package.json)
- Se creó un archivo llamado `index.js` → donde se puso el código del servidor
- `npm install express` → para instalar el framework Express
- `npm intall cors` → para permitir que el frontend se conecte sin errores de seguridad
- `node index.js` → para correr el servidor

---

## En el directorio **frontend** se usó estos para la configuración:

- `npm create vite@latest` → para crear el proyecto
  - Se eligió **Vanilla** y después **JavaScript**
- Luego se entró a la carpeta con `cd hello`
- Se ejecutó `npm install` → para instalar las dependencias
- Y finalmente `npm run dev` → para arrancar el servidor del frontend

# Web Service de Gestión de Libros 📚

Este proyecto implementa un Web Service RESTful usando **Node.js** y **Express**, que permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre una colección de libros. El servicio fue desplegado en un contenedor Docker y está preparado para ejecutarse fácilmente en una instancia Ubuntu en AWS.

---

## 🚀 Endpoints disponibles

### 🔹 `GET /libros`
Devuelve todos los libros en formato JSON.  
**Ejemplo de respuesta:**

```json
[
 { "id": 1, "titulo": "AWS", "autor": "luciano Torres" },
  { "id": 2, "titulo": "Base de datos", "autor": "Andy Becerra" },
  { "id": 3, "titulo": "Sistemas Operativos", "autor": "Antonio Lema" }
]
```

---

### 🔹 `GET /libros/:id`
Devuelve un libro específico por su ID.  
**Ejemplo:** `GET /libros/2`  
**Respuesta:**

```json
  { "id": 2, "titulo": "Base de datos", "autor": "Andy Becerra" }
```

Si no se encuentra el libro:

```json
{ "mensaje": "Libro no encontrado" }
```

---

### 🔹 `GET /libros?autor=nombre`
Filtra libros por autor.  
**Ejemplo:** `GET /libros?autor=Antonio`  
**Respuesta:**

```json
[
 { "id": 3, "titulo": "Sistemas Operativos", "autor": "Antonio Lema" }
]
```

---

### 🔹 `POST /libros`
Crea un nuevo libro.  
**Body esperado (JSON):**

```json
{
  "titulo": "El Principito",
  "autor": "Antonio de Saint-Exupéry"
}
```

**Respuesta exitosa:**

```json
{
{
  "id": 4,
  "titulo": "El Principito",
  "autor": "Antonio de Saint-Exupéry"
}
}
```

Si falta algún campo:

```json
{ "mensaje": "Se requiere título y autor" }
```

---

### 🔹 `PUT /libros/:id`
Actualiza un libro por su ID.  
**Ejemplo:** `PUT /libros/4`  
**Body:**

```json
{
  "titulo": "Clean Code Reeditado"
}
```

**Respuesta:**

```json
{
  "id": 4,
  "titulo": "El Principito",
  "autor": "Pablo Chulde"
}
```

Si el ID no existe:

```json
{ "mensaje": "Libro no encontrado" }
```

---

### 🔹 `DELETE /libros/:id`
Elimina un libro por ID.  
**Ejemplo:** `DELETE /libros/4`  
**Respuesta:**

```json
{ "mensaje": "Libro eliminado correctamente" }
```

Si el ID no existe:

```json
{ "mensaje": "Libro no encontrado" }
```

---

## 🐳 Despliegue con Docker

Este Web Service fue desplegado en un contenedor Docker.  
Ya que docker ya lo utilizamoas anteriormente asi que no es necesario volverlo a instalar
ya que este ya se encuntra configurado.
### Dockerfile utilizado:

```Dockerfile
FROM node:20.10.0-alpine3.18

WORKDIR /app

COPY package.json .

RUN npm i

COPY index.js .

EXPOSE 8080

CMD [ "node", "index.js" ]
```

### Comandos Docker usados:

```bash
# Construir la imagen
docker build -t libros .

# Ejecutar el contenedor
docker run -p 8080:8080 libros
```

---

## 📦 Dependencias

- **Node.js**
- **Express**

---

## 👨‍💻 Autor

**Pablo Andres Chulde Chulde**  
_Primer periodo académico 2025_  
_Docente: Ing. Ana Montenegro_
