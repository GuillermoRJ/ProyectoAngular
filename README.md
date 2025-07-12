# RepasoAngular

## 📁 Estructura del Proyecto

La estructura principal del proyecto es la siguiente:

```
RepasoAngular/
├── README.md
├── angular.json
├── docs
│   ├── 1dataBinding.pdf
│   ├── 2formulariosAngular.pdf
│   ├── 3Práctica_empleados_clase3_Formulario.pdf
│   ├── Práctica empleados clase4 Menu_Rutas.pdf
│   └── teoria rutas.pdf
├── package-lock.json
├── package.json
├── public
│   └── favicon.ico
├── src
│   ├── app
│   │   ├── app.component.css
│   │   ├── app.component.html
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   │   ├── app.routes.ts
│   │   ├── componentes
│   │   │   ├── agregar-empleado
│   │   │   │   ├── agregar-empleado.component.css
│   │   │   │   ├── agregar-empleado.component.html
│   │   │   │   ├── agregar-empleado.component.spec.ts
│   │   │   │   └── agregar-empleado.component.ts
│   │   │   └── listar-empleados
│   │   │   │   ├── listar-empleados.component.css
│   │   │   │   ├── listar-empleados.component.html
│   │   │   │   ├── listar-empleados.component.spec.ts
│   │   │   │   └── listar-empleados.component.ts
│   │   │   │
│   │   │   └── eliminar-empleados
│   │   │       ├── eliminar-empleados.component.css
│   │   │       ├── eliminar-empleados.component.html
│   │   │       ├── eliminar-empleados.component.spec.ts
│   │   │       └── eliminar-empleados.component.ts
│   │   │   
│   │   │   
│   │   ├── empleados.service.spec.ts
│   │   ├── empleados.service.ts
│   │   └── models
│   │       └── personal.ts
│   ├── data
│   │   └── plantilla.json
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.spec.json
```
---

## 🎯 Clase #7: Objetivos y Tarea (viernes 11 de julio 2025)

<details>
<summary>Haz clic para ver los objetivos y la tarea</summary>

### Objetivos del Módulo

Implementar la opción de actualizar datos de empleados, actualizando la vista y el localstorage.

¿Qué vamos a hacer hoy?
1.	Crear el componente actualizar
2.	Configurar el archivo de rutas para usar la vista de  actualizar cuando seleccionen la opción del menu
3.	En el ts del componente actualizar inyectar el servicio, obtener los datos de los empleados e implementar un método que busque un empleado por id
4.	Implementar el html del componente actualizar para mostrar los empleados colocando el botón de actualizar
5.	Actualizar el html del componente menú para la llamada a la vista del componente actualizar
6.	Crear el componente editar que será llamado por el componente actualizar pasando un id de un empleado para editarlo. 
7.	Actualizar el archivo de rutas con el componente editar recibiendo un id
8.	Implementar la lógica del componente editar. Preparar el Código para enviar mensaje de registro editado y direccionar la ejecución a la vista del componente listar
9.	Implementar la vista del componente editar con el formulario con los datos actuales del empleado. 
10.	Implementar el css del componente editar


### Tarea personal

> En tu proyecto de doctores:
> 
1.	Crear el componente actualizar
2.	Configurar el archivo de rutas para usar la vista de  actualizar cuando seleccionen la opción del menu
3.	En el ts del componente actualizar inyectar el servicio, obtener los datos de los doctores e implementar un método que busque un doctor por id
4.	Implementar el html del componente actualizar para mostrar los doctores colocando el botón de actualizar
5.	Actualizar el html del componente menú para la llamada a la vista del componente actualizar
6.	Crear el componente editar que será llamado por el componente actualizar pasando un id de un doctor para editarlo. 
7.	Actualizar el archivo de rutas con el componente editar recibiendo un id
8.	Implementar la lógica del componente editar. Preparar el Código para enviar mensaje de registro editado y direccionar la ejecución a la vista del componente listar
9.	Implementar la vista del componente editar con el formulario con los datos actuales del doctor
10.	Implementar el css del componente editar


  



</details>

[Aqui realiza la entrega de avance de proyecto de doctores. Clase7 Actualizar Doctores Límite viernes 11 de julio 2025](https://forms.gle/r8meGCVLS857CYvh8)

---

---

## 🎯 Clase #6: Objetivos y Tarea (viernes 4 de julio 2025)

<details>
<summary>Haz clic para ver los objetivos y la tarea</summary>

### Objetivos del Módulo

Implementar la opción de eliminar registros, la eliminación considera actualizar la vista y localstorage. 

¿Qué vamos a hacer hoy?
1.	Crear el componente eliminar
2.	Incluir la ruta eliminar en el archivo app.routes.ts
3.	Actualizar el link en a opción de eliminar en el archivo menú.component.html
4.	Trabajar la lógica del componente eliminar, inyectando el uso del servicio y recuperando los registros de empleados y mostrarlos en la vista.
5.	Trabajar la lógica del componente eliminar, inyectando el uso del servicio,  recuperar los registros de empleados con un método cargarEmpleados e implementar un método eliminarEmpleado por id, ambos métodos a su vez llaman a métodos del servicio.
6.	Implementar la vista del componente eliminar, mostrando datos de los empleados y el botón de eliminar en cada registro.
7.	Aplicar estilos al alert que indica que el registro fue eliminado
8.	En el archivo eliminar.ts actualizar el método eliminar empleado por id, para que   el alert que indica registro eliminado solo dure unos segundos  y desaparezca


### Tarea personal

> En tu proyecto de doctores:
> 
1.	Crear el componente eliminar
2.	Incluir la ruta eliminar en el archivo app.routes.ts
3.	Actualizar el link en a opción de eliminar en el archivo menú.component.html
4.	Trabajar la lógica del componente eliminar, inyectando el uso del servicio y recuperando los registros de doctores y mostrarlos en la vista.
5.	Trabajar la lógica del componente eliminar, inyectando el uso del servicio,  recuperar los registros de doctores con un método cargarEmpleados e implementar un método eliminarDoctor por id, ambos métodos a su vez llaman a métodos del servicio.
6.	Implementar la vista del componente eliminar, mostrando datos de los doctores y el botón de eliminar en cada registro.
7.	Aplicar estilos al alert que indica que el registro fue eliminado
8.	En el archivo eliminar.ts actualizar el método eliminar doctor por id, para que   el alert que indica registro eliminado solo dure unos segundos y desaparezca


 

</details>


[Clic aquí para realizar la entrega de avance de proyecto de doctores. Clase6 Eliminar Doctores. Límite viernes 4 de julio 2025](https://forms.gle/uet2CbxoqR5CeAs16)
---



## 🎯 Clase #5: Objetivos y Tarea

<details>
<summary>Haz clic para ver los objetivos y la tarea</summary>

### Objetivos del Módulo

Implementar la consulta de datos de un empleado por id, utilizando ActivatedRoute para la lectura de parámetros de ruta en la URL y router.navigate() correspondiente a la navegación programática dentro del sistema de rutas. 

-	Para realizar la consulta de empleados por id, generar un componente consulta
-	Implementar lógica del componente consulta (ts)
-	Implementar la vista del componente consulta (html).
-	Implementar el uso de la lectura de parámetros en la URL y obtener el id del empleado que viene adjunto en la ruta.
-	Implementar el uso de la navegación programática del sistema de rutas, utilizado para cambiar de componente desde el código Typescript  y no desde una plantilla html


### Tarea personal

> En tu proyecto de doctores:
>
> -	Para realizar la consulta de doctores por id, generar un componente consulta
> -	Implementar lógica del componente consulta (ts)
> -	Implementar la vista del componente consulta (html).
> -	Implementar el uso de la lectura de parámetros en la URL y obtener el id del doctor que viene adjunto en la ruta.
> -	Implementar el uso de la navegación programática del sistema de rutas, utilizado para cambiar de componente desde el código Typescript  y no desde una plantilla html





</details>

---

## 📚 Archivos de Teoría y Práctica

- [Teoría de rutas2](docs/teoria_rutas_2.pdf)
- [Práctica de Empleados. Clase #5. Rutas Consulta](docs/Práctica_empleados_clase5_Rutas_Consulta.pdf)

---


## 🎯 Clase #4: Objetivos y Tarea

<details>
<summary>Haz clic para ver los objetivos y la tarea</summary>

### Objetivos del Módulo

- Generar un componente menú.
- Implementar lógica del componente menú (`.ts`).
- Implementar la vista del componente menú (`.html`).
- Implementar rutas en el proyecto, para el funcionamiento de las opciones de Listar y Agregar.

### Tarea personal

> En tu proyecto de doctores:
>
> - Generar un menú con las opciones que trabajamos en el proyecto de empleados.
> - Implementar lógica del componente menú (`.ts`).
> - Implementar la vista del componente menú (`.html`).
> - Implementar rutas en el proyecto de doctores, para el funcionamiento de las opciones de Listar y Agregar.

</details>

---

## 📚 Archivos de Teoría y Práctica

- [Teoría de rutas](docs/teoria%20rutas.pdf)
- [Práctica de Empleados. Clase #4. Rutas Menú](docs/Práctica%20empleados%20clase4%20Menu_Rutas.pdf)

---

---

## 🎯 Clase #3: Objetivos y Tarea

<details>
<summary>Haz clic para ver los objetivos y la tarea</summary>

### Objetivos del Módulo

- Generar un componente `agregar-empleado`.
- Implementar la lógica del componente `agregar-empleado` (`.ts`).
- Implementar el formulario por template en el componente `agregar-empleado`.
- Probar que el formulario agrega registros tanto en la **vista** como en el **localStorage**.

### Tarea personal

> En tu proyecto de doctores:
>
> - Genera un componente `agregar-doctor`.
> - Implementa la lógica del componente `agregar-doctor` (`.ts`).
> - Crea el formulario por template en el componente `agregar-doctor`.
> - Asegúrate de que el formulario agrega registros correctamente, tanto en la **vista** como en el **localStorage**.
> - Actualiza tu repositorio en GitHub.

</details>

---

## 📚 Archivos de Teoría y Práctica

- [¿Qué es el DataBinding? y los tipos de dataBinding en Angular](docs/1dataBinding.pdf)
- [Formularios en Angular: Template y Reactivos](docs/2formulariosAngular.pdf)
- [Práctica de Empleados. Clase #3. Formulario](docs/3Práctica_empleados_clase3_Formulario.pdf)

## 🚀 Instrucciones para Ejecutar el Proyecto

### 1. Instalación de dependencias

Ejecuta el siguiente comando en la raíz del proyecto para instalar las dependencias:

```bash
npm install
```

### 2. Servidor de desarrollo

Para iniciar el servidor de desarrollo y ver la aplicación en tu navegador:

```bash
ng serve
```

Luego abre [http://localhost:4200/](http://localhost:4200/) en tu navegador.

### 3. Generar un nuevo componente

Para crear un nuevo componente (por ejemplo, `agregar-empleado`):

```bash
ng generate component componentes/agregar-empleado
```

### 4. Ejecutar pruebas unitarias

Para correr los tests unitarios con Karma:

```bash
ng test
```

---

## 🛠️ Recursos adicionales

- [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli)
- [Documentación oficial de Angular](https://angular.dev/)

---

## ℹ️ Notas

- El archivo [`src/data/plantilla.json`](src/data/plantilla.json) contiene la plantilla de empleados utilizada por el servicio.
- El servicio principal para la gestión de empleados es [`EmpleadosService`](src/app/empleados.service.ts).
- El componente principal de listado es [`ListarEmpleadosComponent`](src/app/componentes/listar-empleados/listar-empleados.component.ts).

---

¡Recuerda mantener tu repositorio actualizado y seguir las buenas prácticas de desarrollo!
#   P r o y e c t o A n g u l a r  
 #   P r o y e c t o A n g u l a r  
 