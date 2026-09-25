# Plantilla de sitio web con Payload

Esta es la plantilla oficial de **Payload Website**. Puede utilizarse para crear sitios web, blogs o portafolios, desde proyectos pequeños hasta aplicaciones empresariales.

El proyecto incluye un backend completamente funcional, un panel de administración de nivel empresarial y un sitio web preparado para producción.

## ¿Para quién es esta plantilla?

Esta plantilla es adecuada para:

* Sitios web personales o empresariales.
* Blogs y portafolios.
* Plataformas de publicación de contenido con flujos de trabajo completos.
* Proyectos que quieran explorar las capacidades de Payload.

## Características principales

* Configuración de Payload preconfigurada.
* Autenticación de usuarios.
* Control de acceso.
* Constructor de diseños.
* Vista previa de borradores.
* Vista previa en tiempo real.
* Revalidación bajo demanda.
* SEO.
* Búsqueda.
* Redirecciones.
* Trabajos programados y publicación programada.
* Sitio web integrado con Next.js.

---

# Inicio rápido

Para ejecutar este proyecto localmente, sigue estos pasos.

## Clonar el proyecto

Si todavía no tienes una copia independiente del repositorio en tu computador, puedes utilizar el CLI de Payload:

```bash
pnpx create-payload-app my-project -t website
```

## Desarrollo

1. Clona el repositorio si todavía no lo has hecho.
2. Copia las variables de entorno:

```bash
cd my-project && cp .env.example .env
```

3. Instala las dependencias y ejecuta el servidor:

```bash
pnpm install && pnpm dev
```

4. Abre el proyecto en el navegador:

```text
http://localhost:3000
```

Los cambios realizados dentro de `./src` se reflejarán automáticamente en la aplicación.

Después podrás seguir las instrucciones que aparecen en pantalla para crear el primer usuario administrador.

---

# ¿Cómo funciona?

La configuración de Payload está preparada para cubrir las necesidades de la mayoría de sitios web.

## Colecciones

Las colecciones permiten administrar diferentes tipos de contenido dentro de Payload.

### Usuarios

Los usuarios tienen autenticación habilitada y pueden acceder al panel de administración y al contenido que todavía no ha sido publicado.

### Publicaciones

Las publicaciones pueden utilizarse para crear:

* Artículos.
* Noticias.
* Entradas de blog.
* Otros contenidos publicados periódicamente.

Las publicaciones permiten utilizar el constructor de diseños y también pueden guardarse como borradores antes de publicarse.

### Páginas

Las páginas utilizan el constructor de diseños para crear diferentes estructuras de contenido.

También pueden guardarse como borradores y visualizarse antes de publicarlas.

### Media

La colección **Media** permite subir y administrar:

* Imágenes.
* Videos.
* Descargas.
* Otros archivos.

También permite configurar diferentes tamaños de imágenes, puntos focales y redimensionamiento manual.

### Categorías

Las categorías permiten organizar las publicaciones y otros contenidos.

También pueden organizarse de forma jerárquica.

Por ejemplo:

```text
Noticias
├── Tecnología
├── Moda
└── Negocios
```

---

# Elementos globales

Payload también permite crear contenido global que puede utilizarse en diferentes partes del sitio.

## Header

Contiene la información necesaria para mostrar el encabezado del sitio web, como los enlaces de navegación.

## Footer

Contiene la información necesaria para mostrar el pie de página.

---

# Control de acceso

El proyecto incluye un sistema básico de control de acceso.

* `users`: los usuarios pueden acceder al panel de administración y crear o editar contenido.
* `posts`: cualquier persona puede acceder a publicaciones que hayan sido publicadas, pero solamente los usuarios autorizados pueden crearlas, modificarlas o eliminarlas.
* `pages`: cualquier persona puede acceder a las páginas publicadas, pero solamente los usuarios autorizados pueden crearlas, modificarlas o eliminarlas.

---

# Constructor de diseños

Payload permite crear diferentes diseños para las páginas utilizando bloques.

La plantilla incluye:

* Hero.
* Contenido.
* Media.
* Llamada a la acción.
* Archivo.

Estos bloques están integrados con el frontend del sitio.

---

# Editor Lexical

El editor Lexical proporciona una experiencia completa para crear contenido.

Permite trabajar con:

* Texto.
* Bloques de Payload.
* Imágenes.
* Enlaces.
* Diferentes elementos de contenido.

---

# Vista previa de borradores

Las publicaciones y páginas pueden guardarse como borradores.

Esto significa que cuando se crea un contenido nuevo, este puede permanecer como borrador y no será visible públicamente hasta que sea publicado.

También es posible visualizar una vista previa antes de publicar el contenido.

---

# Vista previa en tiempo real

Payload permite habilitar una vista previa en tiempo real.

Esto permite visualizar cómo quedará una página mientras se está editando el contenido desde el panel de administración.

---

# Revalidación bajo demanda

Los cambios realizados en colecciones y elementos globales pueden actualizar automáticamente el frontend mediante la revalidación bajo demanda de Next.js.

Por ejemplo, cuando se modifica una página o contenido publicado, el frontend puede actualizarse automáticamente.

---

# SEO

La plantilla incluye configuración para administrar información SEO desde el panel de administración.

Esto permite controlar los datos SEO que utiliza el frontend.

---

# Búsqueda

La plantilla incluye funcionalidades de búsqueda integradas con Next.js y Payload.

Esto permite implementar búsquedas del contenido desde el frontend.

---

# Redirecciones

La colección de redirecciones permite crear redirecciones cuando se migra un sitio web o se cambia una URL.

Esto ayuda a evitar enlaces rotos y permite mantener correctamente las URLs antiguas.

---

# Publicación programada

Payload permite programar la publicación o despublicación de contenido.

Los trabajos programados utilizan la cola de trabajos de Payload y pueden ejecutarse automáticamente según una programación.

---

# Sitio web

La plantilla incluye un frontend desarrollado con **Next.js App Router**, que funciona junto con Payload.

Características principales:

* Next.js App Router.
* TypeScript.
* React Hook Form.
* Payload Admin Bar.
* Tailwind CSS.
* Componentes shadcn/ui.
* Cuentas de usuario y autenticación.
* Blog.
* Flujo de publicación.
* Modo oscuro.
* Bloques de diseño.
* SEO.
* Búsqueda.
* Redirecciones.
* Vista previa en tiempo real.

---

# Desarrollo

Para ejecutar el proyecto localmente:

```bash
pnpm install
pnpm dev
```

Después abre:

```text
http://localhost:3000
```

También puedes utilizar el panel de administración de Payload:

```text
http://localhost:3000/admin
```

---

# PostgreSQL

Payload puede trabajar con PostgreSQL.

Las bases de datos SQL utilizan un esquema estricto para administrar los datos.

Cuando se realizan cambios importantes en el esquema, es importante utilizar migraciones para evitar problemas o pérdida de información.

## Desarrollo local

Durante el desarrollo, el adaptador de PostgreSQL puede utilizar `push: true`.

Esto permite agregar, modificar o eliminar campos y colecciones sin tener que crear manualmente las migraciones.

En una base de datos de producción se recomienda utilizar:

```text
push: false
```

para evitar problemas con los datos o con las migraciones.

## Migraciones

Las migraciones son código SQL que permite mantener versiones de los cambios realizados en la estructura de la base de datos.

Para crear una migración:

```bash
pnpm payload migrate:create
```

Para ejecutar las migraciones:

```bash
pnpm payload migrate
```

---

# Docker

También puedes ejecutar el proyecto utilizando Docker.

Primero configura el archivo `.env` y después ejecuta:

```bash
docker-compose up
```

Después podrás acceder al proyecto y crear el usuario administrador.

---

# Base de datos de ejemplo

Payload incluye una opción para cargar datos de ejemplo desde el panel de administración.

**Importante:** cargar los datos de ejemplo es una operación destructiva porque elimina la información actual de la base de datos para cargar los datos de ejemplo.

No utilices esta función si ya tienes información importante en tu base de datos.

---

# Producción

Para ejecutar Payload en producción:

```bash
npm run build
```

Después:

```bash
npm run start
```

El comando `build` genera la aplicación preparada para producción.

---

# Despliegue en Vercel

Esta plantilla también puede desplegarse en Vercel.

Para utilizar PostgreSQL de Vercel puedes instalar:

```bash
pnpm add @payloadcms/db-vercel-postgres
```

Después se configura el adaptador PostgreSQL en `payload.config.ts`.

También se puede utilizar Vercel Blob para almacenar archivos:

```bash
pnpm add @payloadcms/storage-vercel-blob
```

Esto permite almacenar archivos como las imágenes utilizadas por la colección `Media`.

---

# Autoalojamiento

Antes de desplegar la aplicación debes comprobar que:

1. La aplicación se puede construir correctamente.
2. La aplicación puede ejecutarse en producción.
3. Las variables de entorno están configuradas.
4. Las migraciones de la base de datos están preparadas.

Payload puede desplegarse como cualquier otra aplicación Node.js o Next.js.

---

# Proyecto de tienda online

Para utilizar esta plantilla como base para una tienda online de pijamas, se pueden agregar colecciones específicas como:

```text
Productos
├── Nombre
├── Precio
├── Descripción
├── Imágenes
├── Categoría
├── Talla
├── Color
├── Stock
└── Disponible
```

Las imágenes de los productos pueden administrarse mediante la colección **Media** de Payload.

Por ejemplo:

```text
Media
├── pijama-rosa.jpg
├── pijama-azul.jpg
├── pijama-negra.jpg
└── pijama-floral.jpg
```

Después cada producto puede relacionarse con una o varias imágenes.

El frontend desarrollado con Next.js puede obtener estos productos desde Payload y mostrarlos automáticamente en la página principal.

---

# Tecnologías utilizadas

* Payload CMS
* Next.js
* React
* TypeScript
* PostgreSQL
* Tailwind CSS
* shadcn/ui

## Ejecución local

Para iniciar el proyecto:

```bash
npm install
npm run dev
```

Después abre:

```text
http://localhost:3000
```

Para acceder al administrador:

```text
http://localhost:3000/admin
```
