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
6. El script programa automaticamente el cierre del formulario para el 13 de junio de 2026 a las 23:59.
7. Sustituye en `index.html` el enlace del boton por el enlace real del formulario si cambia.
8. Publica esta carpeta gratis con GitHub Pages, Netlify o cualquier hosting estatico.
9. Comparte el enlace y un QR con las familias.

## Cierre automatico

El cierre se configura en `crear-formulario.gs`:

```text
fecha: new Date(2026, 5, 13, 23, 59, 0)
```

En JavaScript los meses empiezan en `0`, por eso `5` significa junio.

Cuando ejecutes `crearFormularioExtraescolares`, el script:

- crea el formulario;
- guarda internamente el identificador del formulario;
- crea un disparador temporal;
- cerrara el formulario el 13 de junio de 2026 a las 23:59;
- mostrara el mensaje: "El plazo de preinscripcion ha finalizado. Gracias por participar."

Puedes comprobar el disparador en Apps Script desde el icono de reloj o en `Activadores`.

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
| Nombre y apellidos del menor o persona participante | Respuesta corta | Si |
| Curso, edad o etapa | Respuesta corta | Si |
| Telefono de contacto | Respuesta corta | Si |
| Actividades de Infantil | Casillas | No |
| Actividades de Primaria | Casillas | No |
| Actividades de Adultos | Casillas | No |
| Actividad preferida | Desplegable | Si |
| Segunda opcion | Desplegable | No |
| Observaciones o necesidades a tener en cuenta | Parrafo | No |
| Acepto que estos datos se usen solo para organizar la oferta de extraescolares | Casilla de verificacion | Si |

## Oferta por etapa

### Infantil

| Actividad | Horario | Socios AMPA | No socios AMPA |
| --- | --- | ---: | ---: |
| Cocina | Viernes 17:00-18:30 | 24 euros | 27 euros |
| DivertiLEGO | Martes y jueves 17:00-18:00 | 21 euros | 24 euros |
| Funky | Lunes y miercoles 17:00-18:00 | 21 euros | 24 euros |
| Inteligencia emocional | Viernes 17:00-18:30 | 21 euros | 24 euros |
| Karate | Lunes y miercoles 17:00-18:00 | 21 euros | 24 euros |
| Multideporte | Lunes y miercoles 17:00-18:00 | 21 euros | 24 euros |
| Musica y movimiento | Martes y jueves 17:00-18:00 | 21 euros | 24 euros |

### Primaria

| Actividad | Horario | Socios AMPA | No socios AMPA |
| --- | --- | ---: | ---: |
| Apoyo escolar | Lunes y miercoles 17:00-18:00 | 21 euros | 24 euros |
| Comic | Viernes 17:00-18:30 | 21 euros | 24 euros |
| Cocina | Viernes 17:00-18:30 | 24 euros | 27 euros |
| Funky | Martes y jueves 17:00-18:00 | 21 euros | 24 euros |
| Gimnasia ritmica | Martes y jueves 17:00-18:00 | 21 euros | 24 euros |
| Inteligencia emocional | Viernes 17:00-18:30 | 21 euros | 24 euros |
| Karate | Martes y jueves 17:00-18:00 | 21 euros | 24 euros |
| Krav maga: defensa personal | Martes y jueves 17:00-18:00 | 21 euros | 24 euros |
| Lenguaje de signos | Lunes y miercoles 17:00-18:00 | 21 euros | 24 euros |
| Multideporte | Martes y jueves 17:00-18:00 | 21 euros | 24 euros |
| Musicarte | Martes y jueves 17:00-18:00 | 21 euros | 24 euros |
| Pintura | Viernes 17:00-18:30 | 21 euros | 24 euros |
| Robotica educativa LEGO | Lunes y miercoles 17:00-18:00 | 21 euros | 24 euros |
| Teatro | Viernes 17:00-18:30 | 21 euros | 24 euros |

### Adultos

| Actividad | Horario | Socios AMPA | No socios AMPA |
| --- | --- | ---: | ---: |
| Defensa personal femenina | Martes y jueves 17:00-18:00 | 31 euros | 34 euros |

## Recuento en Google Sheets

El script crea una pestana `Recuento` con estas columnas:

| Actividad | Horario | Precio socios | Precio no socios | Minimo | Interes | Estado |
| --- | --- | --- | --- | ---: | ---: | --- |

El interes se cuenta buscando cada actividad en las columnas de Infantil, Primaria y Adultos.

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
