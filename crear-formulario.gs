const CONFIG = {
  titulo: 'Preinscripcion extraescolares 2026/2027',
  descripcion:
    'Estamos preparando la oferta de extraescolares para el proximo curso. Esta preinscripcion nos ayudara a saber si hay alumnado suficiente para formar grupo. Rellenarla no garantiza plaza ni obliga al pago; sirve para organizar la oferta definitiva.',
  minimoGrupo: 8,
  actividades: [
    {
      nombre: 'Robotica educativa LEGO',
      horario: 'Lunes y miercoles 17:00-18:00',
      descripcion: 'Iniciacion a la construccion y programacion con LEGO mediante retos y juegos. Se trabaja logica, creatividad, resolucion de problemas y trabajo en equipo.',
      precioSocios: '22 euros socios AMPA',
      precioNoSocios: '24 euros no socios AMPA'
    },
    {
      nombre: 'DivertiLEGO',
      horario: 'Lunes y miercoles 17:00-18:00',
      descripcion: 'Construcciones, retos y juegos con piezas LEGO para estimular imaginacion, motricidad fina, logica y cooperacion.',
      precioSocios: '22 euros socios AMPA',
      precioNoSocios: '24 euros no socios AMPA'
    },
    {
      nombre: 'Lenguaje de signos',
      horario: 'Lunes y miercoles 17:00-18:00',
      descripcion: 'Introduccion practica a la lengua de signos para aprender vocabulario, expresiones cotidianas y formas de comunicacion inclusiva.',
      precioSocios: '22 euros socios AMPA',
      precioNoSocios: '24 euros no socios AMPA'
    },
    {
      nombre: 'Apoyo escolar',
      horario: 'Lunes y miercoles 17:00-18:00',
      descripcion: 'Acompanamiento para reforzar aprendizajes, organizar tareas y adquirir habitos de estudio con apoyo adaptado a las necesidades del alumnado.',
      precioSocios: '22 euros socios AMPA',
      precioNoSocios: '24 euros no socios AMPA'
    },
    {
      nombre: 'Krav maga: defensa personal',
      horario: 'Martes y jueves 17:00-18:00',
      descripcion: 'Iniciacion a la defensa personal desde la seguridad, el autocontrol y el respeto. Se trabajan tecnica basica, coordinacion y confianza.',
      precioSocios: '22 euros socios AMPA',
      precioNoSocios: '24 euros no socios AMPA'
    },
    {
      nombre: 'Karate',
      horario: 'Martes y jueves 17:00-18:00',
      descripcion: 'Practica de karate adaptada a la edad para trabajar disciplina, equilibrio, coordinacion, respeto y control corporal.',
      precioSocios: '22 euros socios AMPA',
      precioNoSocios: '24 euros no socios AMPA'
    },
    {
      nombre: 'Multideporte',
      horario: 'Martes y jueves 17:00-18:00',
      descripcion: 'Juegos deportivos variados para moverse, cooperar, mejorar habilidades motrices y descubrir diferentes disciplinas.',
      precioSocios: '22 euros socios AMPA',
      precioNoSocios: '24 euros no socios AMPA'
    },
    {
      nombre: 'Funky',
      horario: 'Martes y jueves 17:00-18:00',
      descripcion: 'Baile con musica actual y coreografias adaptadas para trabajar ritmo, coordinacion, expresion corporal y confianza en grupo.',
      precioSocios: '22 euros socios AMPA',
      precioNoSocios: '24 euros no socios AMPA'
    },
    {
      nombre: 'Musica y movimiento',
      horario: 'Martes y jueves 17:00-18:00',
      descripcion: 'Actividad musical y corporal para explorar ritmo, canciones, movimiento, expresion y escucha activa de forma ludica.',
      precioSocios: '22 euros socios AMPA',
      precioNoSocios: '24 euros no socios AMPA'
    },
    {
      nombre: 'Defensa personal femenina',
      horario: 'Martes y jueves 17:00-18:00',
      descripcion: 'Espacio para trabajar seguridad, prevencion, confianza y recursos basicos de defensa personal desde una perspectiva adaptada y respetuosa.',
      precioSocios: '22 euros socios AMPA',
      precioNoSocios: '24 euros no socios AMPA'
    },
    {
      nombre: 'Cocina',
      horario: 'Viernes 17:00-18:30',
      descripcion: 'Taller practico para aprender recetas sencillas, manipulacion segura de alimentos, autonomia, creatividad y trabajo en equipo.',
      precioSocios: '25 euros socios AMPA',
      precioNoSocios: '27 euros no socios AMPA'
    },
    {
      nombre: 'Pintura',
      horario: 'Viernes 17:00-18:30',
      descripcion: 'Exploracion de tecnicas pictoricas, color, composicion y creatividad mediante proyectos artisticos adaptados por edades.',
      precioSocios: '20 euros socios AMPA',
      precioNoSocios: '22 euros no socios AMPA'
    },
    {
      nombre: 'Teatro',
      horario: 'Viernes 17:00-18:30',
      descripcion: 'Juegos dramaticos, expresion corporal, voz e improvisacion para ganar confianza, creatividad y habilidades de comunicacion.',
      precioSocios: '20 euros socios AMPA',
      precioNoSocios: '22 euros no socios AMPA'
    },
    {
      nombre: 'Comic',
      horario: 'Viernes 17:00-18:30',
      descripcion: 'Creacion de personajes, vinietas e historias visuales. Se trabaja dibujo, narracion, planificacion de escenas y creatividad.',
      precioSocios: '20 euros socios AMPA',
      precioNoSocios: '22 euros no socios AMPA'
    },
    {
      nombre: 'Inteligencia emocional',
      horario: 'Viernes 17:00-18:30',
      descripcion: 'Actividad para reconocer emociones, mejorar la autoestima, practicar habilidades sociales y aprender estrategias de calma y convivencia.',
      precioSocios: '20 euros socios AMPA',
      precioNoSocios: '22 euros no socios AMPA'
    }
  ]
};

function crearFormularioExtraescolares() {
  const form = FormApp.create(CONFIG.titulo);
  form.setDescription(CONFIG.descripcion);
  form.setCollectEmail(false);
  form.setConfirmationMessage(
    'Gracias. Hemos registrado tu interes. Cuando sepamos que grupos pueden abrirse, enviaremos la informacion definitiva.'
  );

  form.addTextItem()
    .setTitle('Nombre y apellidos del alumno/a')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Curso o edad')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Nombre de la persona responsable')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Telefono o email de contacto')
    .setRequired(true);

  const opciones = CONFIG.actividades.map(formatearActividad);

  form.addCheckboxItem()
    .setTitle('Marca las actividades que te interesan')
    .setChoiceValues(opciones)
    .setRequired(true);

  form.addListItem()
    .setTitle('Actividad preferida')
    .setChoiceValues(opciones)
    .setRequired(true);

  form.addListItem()
    .setTitle('Segunda opcion')
    .setChoiceValues(['No tengo segunda opcion'].concat(opciones))
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('Si el horario no encaja, puedes indicar otra disponibilidad')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('Observaciones o necesidades a tener en cuenta')
    .setRequired(false);

  form.addCheckboxItem()
    .setTitle('Consentimiento')
    .setChoiceValues([
      'Acepto que estos datos se usen solo para organizar la oferta de extraescolares.'
    ])
    .setRequired(true);

  const sheet = SpreadsheetApp.create(CONFIG.titulo + ' - respuestas');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, sheet.getId());
  crearHojaRecuento(sheet, CONFIG.actividades);

  Logger.log('Formulario para editar: ' + form.getEditUrl());
  Logger.log('Formulario para familias: ' + form.getPublishedUrl());
  Logger.log('Hoja de respuestas: ' + sheet.getUrl());
}

function crearHojaRecuento(sheet, actividades) {
  const resumen = sheet.insertSheet('Recuento');
  resumen.getRange('A1:G1').setValues([['Actividad', 'Horario', 'Precio socios', 'Precio no socios', 'Minimo', 'Interes', 'Estado']]);

  actividades.forEach((actividad, index) => {
    const row = index + 2;
    resumen.getRange(row, 1, 1, 5).setValues([
      [actividad.nombre, actividad.horario, actividad.precioSocios, actividad.precioNoSocios, CONFIG.minimoGrupo]
    ]);
    resumen.getRange(row, 6).setFormula(
      '=IFERROR(COUNTIF(\'Form Responses 1\'!E:E,"*' + actividad.nombre + '*"),COUNTIF(\'Respuestas de formulario 1\'!E:E,"*' + actividad.nombre + '*"))'
    );
    resumen.getRange(row, 7).setFormula(
      '=IF(F' + row + '>=E' + row + ',"Abrir grupo","No abrir todavia")'
    );
  });

  resumen.autoResizeColumns(1, 7);
}

function formatearActividad(actividad) {
  return actividad.nombre + ' | ' + actividad.horario + ' | ' + actividad.precioSocios + ' / ' + actividad.precioNoSocios + ' | ' + actividad.descripcion;
}
