const CONFIG = {
  titulo: 'Preinscripcion extraescolares 2026/2027',
  descripcion:
    'Estamos preparando la oferta de extraescolares para el proximo curso. Esta preinscripcion nos ayudara a saber si hay alumnado suficiente para formar grupo. Rellenarla no garantiza plaza ni obliga al pago; sirve para organizar la oferta definitiva.',
  minimoGrupo: 8,
  cierre: {
    fecha: new Date(2026, 5, 12, 23, 59, 0),
    mensaje: 'El plazo de preinscripcion ha finalizado. Gracias por participar.'
  },
  categorias: [
    {
      nombre: 'Infantil',
      actividades: [
        actividad('Karate', 'Martes y jueves 17:00-18:00', 'Practica de karate adaptada a la edad para trabajar disciplina, equilibrio, coordinacion, respeto y control corporal.', '22 euros socios AMPA', '24 euros no socios AMPA'),
        actividad('Multideporte', 'Martes y jueves 17:00-18:00', 'Juegos deportivos variados para moverse, cooperar, mejorar habilidades motrices y descubrir diferentes disciplinas.', '22 euros socios AMPA', '24 euros no socios AMPA'),
        actividad('Funky', 'Martes y jueves 17:00-18:00', 'Baile con musica actual y coreografias adaptadas para trabajar ritmo, coordinacion, expresion corporal y confianza en grupo.', '22 euros socios AMPA', '24 euros no socios AMPA'),
        actividad('DivertiLEGO', 'Lunes y miercoles 17:00-18:00', 'Construcciones, retos y juegos con piezas LEGO para estimular imaginacion, motricidad fina, logica y cooperacion.', '22 euros socios AMPA', '24 euros no socios AMPA'),
        actividad('Cocina', 'Viernes 17:00-18:30', 'Taller practico para aprender recetas sencillas, manipulacion segura de alimentos, autonomia, creatividad y trabajo en equipo.', '25 euros socios AMPA', '27 euros no socios AMPA'),
        actividad('Inteligencia emocional', 'Viernes 17:00-18:30', 'Actividad para reconocer emociones, mejorar la autoestima, practicar habilidades sociales y aprender estrategias de calma y convivencia.', '20 euros socios AMPA', '22 euros no socios AMPA'),
        actividad('Musica y movimiento', 'Martes y jueves 17:00-18:00', 'Actividad musical y corporal para explorar ritmo, canciones, movimiento, expresion y escucha activa de forma ludica.', '22 euros socios AMPA', '24 euros no socios AMPA')
      ]
    },
    {
      nombre: 'Primaria',
      actividades: [
        actividad('Apoyo escolar', 'Lunes y miercoles 17:00-18:00', 'Acompanamiento para reforzar aprendizajes, organizar tareas y adquirir habitos de estudio con apoyo adaptado a las necesidades del alumnado.', '22 euros socios AMPA', '24 euros no socios AMPA'),
        actividad('Comic', 'Viernes 17:00-18:30', 'Creacion de personajes, vinietas e historias visuales. Se trabaja dibujo, narracion, planificacion de escenas y creatividad.', '20 euros socios AMPA', '22 euros no socios AMPA'),
        actividad('Krav maga: defensa personal', 'Martes y jueves 17:00-18:00', 'Iniciacion a la defensa personal desde la seguridad, el autocontrol y el respeto. Se trabajan tecnica basica, coordinacion y confianza.', '22 euros socios AMPA', '24 euros no socios AMPA'),
        actividad('Karate', 'Martes y jueves 17:00-18:00', 'Practica de karate adaptada a la edad para trabajar disciplina, equilibrio, coordinacion, respeto y control corporal.', '22 euros socios AMPA', '24 euros no socios AMPA'),
        actividad('Multideporte', 'Martes y jueves 17:00-18:00', 'Juegos deportivos variados para moverse, cooperar, mejorar habilidades motrices y descubrir diferentes disciplinas.', '22 euros socios AMPA', '24 euros no socios AMPA'),
        actividad('Funky', 'Martes y jueves 17:00-18:00', 'Baile con musica actual y coreografias adaptadas para trabajar ritmo, coordinacion, expresion corporal y confianza en grupo.', '22 euros socios AMPA', '24 euros no socios AMPA'),
        actividad('Robotica educativa LEGO', 'Lunes y miercoles 17:00-18:00', 'Iniciacion a la construccion y programacion con LEGO mediante retos y juegos. Se trabaja logica, creatividad, resolucion de problemas y trabajo en equipo.', '22 euros socios AMPA', '24 euros no socios AMPA'),
        actividad('Cocina', 'Viernes 17:00-18:30', 'Taller practico para aprender recetas sencillas, manipulacion segura de alimentos, autonomia, creatividad y trabajo en equipo.', '25 euros socios AMPA', '27 euros no socios AMPA'),
        actividad('Lenguaje de signos', 'Lunes y miercoles 17:00-18:00', 'Introduccion practica a la lengua de signos para aprender vocabulario, expresiones cotidianas y formas de comunicacion inclusiva.', '22 euros socios AMPA', '24 euros no socios AMPA'),
        actividad('Musicarte', 'Martes y jueves 17:00-18:00', 'Acercamiento a la musica a traves de la voz, el movimiento, la escucha y los instrumentos, trabajando ritmo, creatividad, expresion y educacion en valores.', '22 euros socios AMPA', '24 euros no socios AMPA'),
        actividad('Inteligencia emocional', 'Viernes 17:00-18:30', 'Actividad para reconocer emociones, mejorar la autoestima, practicar habilidades sociales y aprender estrategias de calma y convivencia.', '20 euros socios AMPA', '22 euros no socios AMPA'),
        actividad('Pintura', 'Viernes 17:00-18:30', 'Exploracion de tecnicas pictoricas, color, composicion y creatividad mediante proyectos artisticos adaptados por edades.', '20 euros socios AMPA', '22 euros no socios AMPA'),
        actividad('Teatro', 'Viernes 17:00-18:30', 'Juegos dramaticos, expresion corporal, voz e improvisacion para ganar confianza, creatividad y habilidades de comunicacion.', '20 euros socios AMPA', '22 euros no socios AMPA')
      ]
    },
    {
      nombre: 'Adultos',
      actividades: [
        actividad('Defensa personal femenina', 'Martes y jueves 17:00-18:00', 'Espacio para trabajar seguridad, prevencion, confianza y recursos basicos de defensa personal desde una perspectiva adaptada y respetuosa.', '22 euros socios AMPA', '24 euros no socios AMPA')
      ]
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
    .setTitle('Nombre y apellidos del menor o persona participante')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Curso, edad o etapa')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Telefono de contacto')
    .setRequired(true);

  CONFIG.categorias.forEach((categoria) => {
    form.addSectionHeaderItem()
      .setTitle(categoria.nombre.toUpperCase())
      .setHelpText('Opciones de extraescolares para ' + categoria.nombre + '.');

    form.addCheckboxItem()
      .setTitle('Actividades de ' + categoria.nombre)
      .setHelpText('Puedes marcar una o varias opciones de ' + categoria.nombre + '.')
      .setChoiceValues(categoria.actividades.map((item) => formatearActividad(item, categoria.nombre)))
      .setRequired(false);
  });

  const opciones = obtenerActividades().map((item) => formatearActividad(item, item.categoria));

  form.addListItem()
    .setTitle('Actividad preferida')
    .setChoiceValues(opciones)
    .setRequired(true);

  form.addListItem()
    .setTitle('Segunda opcion')
    .setChoiceValues(['No tengo segunda opcion'].concat(opciones))
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
  crearHojaRecuento(sheet, obtenerActividades());
  guardarFormularioActivo(form);
  programarCierreFormulario();

  Logger.log('Formulario para editar: ' + form.getEditUrl());
  Logger.log('Formulario para familias: ' + form.getPublishedUrl());
  Logger.log('Hoja de respuestas: ' + sheet.getUrl());
  Logger.log('Cierre programado: ' + CONFIG.cierre.fecha);
}

function programarCierreFormulario() {
  eliminarDisparadoresCierre();
  ScriptApp.newTrigger('cerrarFormularioExtraescolares')
    .timeBased()
    .at(CONFIG.cierre.fecha)
    .create();
}

function cerrarFormularioExtraescolares() {
  const formId = PropertiesService.getScriptProperties().getProperty('FORMULARIO_EXTRAESCOLARES_ID');
  if (!formId) {
    throw new Error('No hay formulario guardado. Ejecuta crearFormularioExtraescolares o guarda un formulario con guardarFormularioActivo.');
  }

  const form = FormApp.openById(formId);
  form.setCustomClosedFormMessage(CONFIG.cierre.mensaje);
  form.setAcceptingResponses(false);
}

function guardarFormularioActivo(form) {
  PropertiesService.getScriptProperties().setProperty('FORMULARIO_EXTRAESCOLARES_ID', form.getId());
}

function eliminarDisparadoresCierre() {
  ScriptApp.getProjectTriggers()
    .filter((trigger) => trigger.getHandlerFunction() === 'cerrarFormularioExtraescolares')
    .forEach((trigger) => ScriptApp.deleteTrigger(trigger));
}

function crearHojaRecuento(sheet, actividades) {
  const resumen = sheet.insertSheet('Recuento');
  resumen.getRange('A1:H1').setValues([['Etapa', 'Actividad', 'Horario', 'Precio socios', 'Precio no socios', 'Minimo', 'Interes', 'Estado']]);

  actividades.forEach((item, index) => {
    const row = index + 2;
    resumen.getRange(row, 1, 1, 6).setValues([
      [item.categoria, item.nombre, item.horario, item.precioSocios, item.precioNoSocios, CONFIG.minimoGrupo]
    ]);
    resumen.getRange(row, 7).setFormula(
      '=IFERROR(SUM(COUNTIF(\'Form Responses 1\'!E:G,"*' + item.nombre + ' (' + item.categoria + ')*")),SUM(COUNTIF(\'Respuestas de formulario 1\'!E:G,"*' + item.nombre + ' (' + item.categoria + ')*")))'
    );
    resumen.getRange(row, 8).setFormula(
      '=IF(G' + row + '>=F' + row + ',"Abrir grupo","No abrir todavia")'
    );
  });

  resumen.autoResizeColumns(1, 8);
}

function obtenerActividades() {
  return CONFIG.categorias.reduce((todas, categoria) => {
    const actividades = categoria.actividades.map((item) => Object.assign({ categoria: categoria.nombre }, item));
    return todas.concat(actividades);
  }, []);
}

function actividad(nombre, horario, descripcion, precioSocios, precioNoSocios) {
  return { nombre: nombre, horario: horario, descripcion: descripcion, precioSocios: precioSocios, precioNoSocios: precioNoSocios };
}

function formatearActividad(actividad, categoria) {
  return actividad.nombre + ' (' + categoria + ') | ' + actividad.horario + ' | ' + actividad.precioSocios + ' / ' + actividad.precioNoSocios + ' | ' + actividad.descripcion;
}
