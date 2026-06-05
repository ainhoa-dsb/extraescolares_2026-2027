# Preinscripcion de extraescolares

Este proyecto deja preparada una solucion sin coste para recoger interes por actividades extraescolares:

- `index.html`: pagina informativa publica.
- `styles.css`: estilos de la pagina.
- `crear-formulario.gs`: script opcional para generar el Google Form automaticamente.
- Google Forms: recogida de respuestas.
- Google Sheets: recuento automatico para decidir que grupos se abren.

## Flujo recomendado

1. Edita en `crear-formulario.gs` las actividades, horarios, precios y minimo de grupo si cambia algo.
2. Crea un proyecto en Google Apps Script: <https://script.google.com/>.
3. Pega el contenido de `crear-formulario.gs`.
4. Ejecuta la funcion `crearFormularioExtraescolares`.
5. Copia desde los logs el enlace "Formulario para familias".
6. Sustituye en `index.html` el enlace `https://forms.gle/REEMPLAZAR-CON-TU-FORMULARIO` por el enlace real del formulario.
7. Publica esta carpeta gratis con GitHub Pages, Netlify o cualquier hosting estatico.
8. Comparte el enlace y un QR con las familias.

## Formulario

Titulo:

```text
Preinscripcion extraescolares 2026/2027
```

Descripcion:

```text
Estamos preparando la oferta de extraescolares para el proximo curso. Esta preinscripcion nos ayudara a saber si hay alumnado suficiente para formar grupo. Rellenarla no garantiza plaza ni obliga al pago; sirve para organizar la oferta definitiva.
```

Preguntas recomendadas:

| Pregunta | Tipo | Obligatoria |
| --- | --- | --- |
| Nombre y apellidos del alumno/a | Respuesta corta | Si |
| Curso o edad | Respuesta corta | Si |
| Nombre de la persona responsable | Respuesta corta | Si |
| Telefono o email de contacto | Respuesta corta | Si |
| Marca las actividades que te interesan | Casillas | Si |
| Actividad preferida | Desplegable | Si |
| Segunda opcion | Desplegable | No |
| Si el horario no encaja, puedes indicar otra disponibilidad | Parrafo | No |
| Observaciones o necesidades a tener en cuenta | Parrafo | No |
| Acepto que estos datos se usen solo para organizar la oferta de extraescolares | Casilla de verificacion | Si |

## Oferta

| Actividad | Horario | Socios AMPA | No socios AMPA |
| --- | --- | ---: | ---: |
| Robotica educativa LEGO | Lunes y miercoles 17:00-18:00 | 22 euros | 24 euros |
| DivertiLEGO | Lunes y miercoles 17:00-18:00 | 22 euros | 24 euros |
| Lenguaje de signos | Lunes y miercoles 17:00-18:00 | 22 euros | 24 euros |
| Apoyo escolar | Lunes y miercoles 17:00-18:00 | 22 euros | 24 euros |
| Krav maga: defensa personal | Martes y jueves 17:00-18:00 | 22 euros | 24 euros |
| Karate | Martes y jueves 17:00-18:00 | 22 euros | 24 euros |
| Multideporte | Martes y jueves 17:00-18:00 | 22 euros | 24 euros |
| Funky | Martes y jueves 17:00-18:00 | 22 euros | 24 euros |
| Musica y movimiento | Martes y jueves 17:00-18:00 | 22 euros | 24 euros |
| Defensa personal femenina | Martes y jueves 17:00-18:00 | 22 euros | 24 euros |
| Cocina | Viernes 17:00-18:30 | 25 euros | 27 euros |
| Pintura | Viernes 17:00-18:30 | 20 euros | 22 euros |
| Teatro | Viernes 17:00-18:30 | 20 euros | 22 euros |
| Comic | Viernes 17:00-18:30 | 20 euros | 22 euros |
| Inteligencia emocional | Viernes 17:00-18:30 | 20 euros | 22 euros |

## Recuento en Google Sheets

El script crea una pestana `Recuento` con estas columnas:

| Actividad | Horario | Precio socios | Precio no socios | Minimo | Interes | Estado |
| --- | --- | --- | --- | ---: | ---: | --- |

Formula orientativa para contar una actividad si la columna `E` contiene las actividades marcadas:

```text
=COUNTIF(E:E,"*Robotica educativa LEGO*")
```

Formula orientativa para estado, si `E2` es el minimo y `F2` el interes:

```text
=IF(F2>=E2,"Abrir grupo","No abrir todavia")
```

## Publicacion gratis

La forma mas sencilla es GitHub Pages:

1. Sube estos archivos a un repositorio de GitHub.
2. Entra en `Settings > Pages`.
3. En `Build and deployment`, elige `Deploy from a branch`.
4. Selecciona la rama principal y la carpeta raiz.
5. Guarda y espera a que GitHub genere el enlace.

Tambien puedes usar Netlify arrastrando la carpeta del proyecto a su panel de despliegue.
