export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'El Estado y las políticas públicas',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Fundamentos conceptuales de gobernabilidad y gobernanza',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Concepto y evolución de la gobernabilidad en el pensamiento político contemporáneo',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'La gobernanza como nuevo paradigma en la gestión pública',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Gobernabilidad, gobernanza e implementación de políticas públicas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Influencia de la gobernabilidad en la eficacia del Estado y sus políticas ',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'La gobernanza como red de actores: sector público, sociedad civil y mercado ',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Estudios de caso: políticas públicas exitosas y fallidas, desde la perspectiva institucional',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Rovira, A. (Coord.). (2013). Gobernanza democrática. Marcial Pons Ediciones Jurídicas y Sociales. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/101852',
    },
    {
      referencia:
        'Porras Nadales, A. (2014). La acción de gobierno: gobernabilidad, gobernanza, gobermedia. Editorial Trotta, S.A. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/61358 ',
    },
    {
      referencia:
        'Valencia Escamilla, L. (2007). Representación política, instituciones y gobernanza. Ediciones y Gráficos Eón.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/73439',
    },
    {
      referencia:
        'Prats, J. (2003). El concepto y el análisis de la gobernabilidad. ',
      link: 'https://www.ses.unam.mx/docencia/2007II/Lecturas/Mod3_Oriol.pdf ',
    },
    {
      referencia:
        'González, FE (2006). Gobernabilidad y gobernanza en América Latina.',
      link:
        'https://horizon.documentation.ird.fr/exl-doc/pleins_textes/divers10-06/010044908.pdf ',
    },
    {
      referencia:
        'Mayntz, R. (2005). La hoy gobernanza: 10 textos de referencia . ',
      link:
        'https://consultorestema.com/wp-content/uploads/2020/02/La_gobernanza_hoy-ConsultoresTema.pdf ',
    },
  ],
  glosario: [
    {
      termino: 'Actores estratégicos',
      significado:
        'sujetos con capacidad de incidir o bloquear decisiones dentro de una red de gobernanza.',
    },
    {
      termino: 'Articulación interinstitucional',
      significado:
        'coordinación funcional entre entidades del mismo o diferente nivel de gobierno, para lograr objetivos comunes.',
    },
    {
      termino: 'Capacidad estatal',
      significado:
        'habilidad del Estado para diseñar, implementar y hacer cumplir políticas públicas.',
    },
    {
      termino: 'Concertación',
      significado:
        'mecanismo de diálogo y acuerdo entre actores sociales y gubernamentales, sobre temas de interés común.',
    },
    {
      termino: 'Corresponsabilidad',
      significado:
        'distribución equitativa de los deberes entre los actores públicos, privados y comunitarios, en la gestión pública.',
    },
    {
      termino: 'Diálogo social',
      significado:
        'espacio formal o informal donde se intercambian ideas y se negocian decisiones entre múltiples sectores.',
    },
    {
      termino: 'Evaluación participativa',
      significado:
        'proceso que incluye a los actores ciudadanos en la revisión y análisis de políticas o programas públicos.',
    },
    {
      termino: 'Gobernabilidad',
      significado:
        'capacidad del sistema político para tomar decisiones legítimas y aplicarlas, de manera eficaz.',
    },
    {
      termino: 'Gobernanza',
      significado:
        'proceso de gestión pública basado en la interacción entre diversos actores sociales, públicos y privados.',
    },
    {
      termino: 'Institucionalidad',
      significado:
        'conjunto de reglas, normas y estructuras que regulan el funcionamiento del estado y sus relaciones con la sociedad.',
    },
    {
      termino: 'Multinivel',
      significado:
        'enfoque de gobernanza que considera la acción coordinada de distintos niveles de gobierno (nacional, regional, local).',
    },
    {
      termino: 'Participación ciudadana',
      significado:
        'intervención activa de la población en procesos de toma de decisiones públicas.',
    },
    {
      termino: 'Redes colaborativas',
      significado:
        'estructuras de cooperación entre actores diversos que trabajan en torno a un objetivo público común.',
    },
    {
      termino: 'Representatividad',
      significado:
        'condición mediante la cual los actores participantes reflejan la diversidad y pluralidad social existente.',
    },
    {
      termino: 'Transparencia',
      significado:
        'principio que implica el acceso libre y comprensible a la información pública por parte de la ciudadanía.',
    },
  ],
}
