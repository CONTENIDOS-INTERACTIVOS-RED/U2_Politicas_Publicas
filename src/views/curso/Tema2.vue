<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Gobernabilidad, gobernanza e implementación de políticas públicas'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-

    .row.mb-5
      .col-lg-5.order-2
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
      .col-lg-7.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") Comprender la implementación de políticas públicas exige atender las condiciones institucionales, políticas y sociales, que influyen en su desarrollo. En este marco, los conceptos de gobernabilidad y gobernanza ofrecen herramientas analíticas fundamentales para evaluar los factores que determinan el éxito o fracaso de las intervenciones estatales.
    
        .bg-color-6.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Mientras que la gobernabilidad alude a la capacidad del Estado para ejecutar decisiones con legitimidad y eficacia, la gobernanza se refiere a la calidad de los procesos colaborativos, mediante los cuales esas decisiones se construyen.
    
    p.mb-4 Estos conceptos permiten examinar la manera en que se articulan intereses, se negocian responsabilidades y se genera confianza entre actores involucrados, especialmente en contextos marcados por la pluralidad de actores, la descentralización administrativa y la presión social por resultados tangibles.

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Influencia de la gobernabilidad en la eficacia del Estado y sus políticas 
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/3.png", data-aos="zoom-in")
      .col-lg-8
        p La gobernabilidad, entendida como la capacidad del sistema político para procesar demandas, tomar decisiones y ejecutarlas con legitimidad, es un pilar fundamental de la eficacia del Estado. Esta no se limita a garantizar orden o estabilidad política, sino que implica una capacidad real de implementación coherente, eficiente y justa, en un marco de legalidad y desarrollo humano.
        p Su estudio requiere considerar elementos como:
        .bg-ppal-claro.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto.order-2
              img(src="@/assets/curso/tema2/4.svg", style="max-width: 90px").mx-auto
            .col-lg.order-1
              ul.lista-ul--color
                li.mb-1.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Legitimidad del sistema político.
                li.mb-1.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Capacidad administrativa del Estado.
                li.mb-1.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Calidad de las instituciones.
                li.mb-1.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Alineamiento entre actores estratégicos.
                
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
          p.mb-0 Una buena gobernabilidad es aquella que permite alcanzar los objetivos prefijados, con el menor costo político y administrativo posible.
    
    h2(data-aos="fade-left") Gobernabilidad y formulación de políticas públicas
    p El proceso de formulación está profundamente influido por el diseño institucional y por la existencia de mecanismos de deliberación, negociación y decisión. Cuando predominan estructuras rígidas, polarización ideológica o fragmentación partidaria, la gobernabilidad se debilita, afectando la coherencia y la continuidad de las políticas públicas, especialmente en momentos de crisis.
    p.mb-5 En América Latina, estos problemas se manifiestan en fenómenos como:

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-5.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/5.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Primero
              p.mb-0 Gobiernos divididos.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-5.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/6.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Segundo
              p.mb-0 Sistemas partidarios poco institucionalizados.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-5.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/7.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Tercero
              p.mb-0 Burocracias débiles o politizadas.
    
    p.mb-4 Todo ello puede conducir al denominado bloqueo institucional, que impide respuestas efectivas a desafíos sociales, económicos o ambientales.

    h2(data-aos="fade-left") Gobernabilidad y capacidad de implementación
    p.mb-5 El éxito de una política, no depende solo de su diseño técnico, sino también de la capacidad del Estado para implementarla. Factores claves que inciden en esta capacidad, son:

    div.bg-ppal-azul.px-4
      .row.align-items-center.justify-content-center
        .col-lg-4.mb-3.mb-lg-0
          img(src="@/assets/curso/tema2/8.svg").mx-auto
        .col-lg-7
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Calidad técnica de la burocracia.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Coordinación interinstitucional.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Grado de descentralización.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Recursos financieros y humanos disponibles.

    div.bg-color-4.mb-5
      .px-4.px-md-5.py-4
        p.mb-0 La ausencia de estos elementos produce una gobernabilidad operativa limitada, que se traduce en decisiones ineficaces, pérdida de confianza ciudadana y aumento de la conflictividad social.
    
    h2.mb-5(data-aos="fade-left") Gobernabilidad democrática

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/9.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Aunque la gobernabilidad puede existir en regímenes autoritarios, en contextos democráticos debe evaluarse no solo por su eficacia, sino también por su legitimidad y respeto a los derechos ciudadanos. Joan Prats, subraya que solo puede hablarse de gobernabilidad democrática, cuando está orientada al desarrollo humano, la equidad y la expansión de capacidades ciudadanas.
    
        .bg-color-9.px-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto.order-2
              img(src="@/assets/curso/tema2/10.svg", style="max-width: 250px").mx-auto
            .col-lg.order-1
              p Esto implica integrar:
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Eficiencia institucional.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Valores democráticos.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Participación ciudadana.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Evaluación del impacto social.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/11.png", data-aos="zoom-in")
      .col-lg-8
        h2(data-aos="fade-left") El papel de los actores estratégicos
        p(data-aos="fade-left") La gobernabilidad no depende exclusivamente del Estado. Los actores estratégicos, partidos, sindicatos, empresas, medios, grupos de presión, influyen decisivamente en el proceso político. Su comportamiento puede:
    
        .bg-color-6.p-4.mb-3(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Facilitar acuerdos y fortalecer la estabilidad.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Sabotear reformas y alimentar la inestabilidad.
        p Para una gobernabilidad efectiva, estos actores deben:
    
    .row.justify-content-center.align-items-stretch.mb-4.text-center.text-white.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-2.p-4(data-aos="fade-up").h-100
          p.mb-0 Respetar las reglas del juego democrático.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-10.p-4(data-aos="fade-down").h-100
          p.mb-0 Participar en acuerdos mínimos sobre el rumbo del país.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-2.p-4(data-aos="fade-up").h-100
          p.mb-0 Colaborar desde el marco legal establecido.

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/12.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        h2(data-aos="fade-left") Gobernabilidad multinivel e implementación
        p.mb-5(data-aos="fade-left") Las políticas públicas actuales, se desarrollan en entornos multinivel, donde intervienen:
    
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Gobiernos centrales y subnacionales.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Organizaciones de la sociedad civil.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Actores internacionales.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/13.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Esta dinámica requiere una alta coordinación institucional y reglas claras de competencia y rendición de cuentas. En su ausencia, surgen:
    
        .bg-color-7.p-4.mb-3(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Conflictos intergubernamentales.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Superposición de funciones.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Vacíos de responsabilidad.
    
    .bg-full-width.bg-color-2.mb-5
      .row.align-items-center
        .col-lg-3.order-2
          img(src="@/assets/curso/tema2/14.svg").mx-auto
        .col-lg-9.text-white.px-5.order-1.mb-3.mb-lg-0
          p Diseñar políticas con una visión sistémica, permite articular de manera efectiva a todos los actores y mejorar la implementación.
          p.mb-0 La gobernabilidad, más que un concepto abstracto, es una condición operativa y estratégica para la eficacia del Estado. Su análisis permite identificar fortalezas y debilidades del sistema político, y proponer mejoras que aumenten la capacidad de respuesta estatal.
    
    p.mb-4 Formular e implementar políticas públicas, requiere más que conocimiento técnico. Supone comprender:

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-5.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/15.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Primero
              p.mb-0 Dinámicas institucionales.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-5.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/16.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Segundo
              p.mb-0 Equilibrios de poder.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-5.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/17.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Tercero
              p.mb-0 Demandas sociales.
    
    p.mb-4 Desde esta perspectiva, la gobernabilidad se convierte en una lente, imprescindible, para estudiar y transformar la gestión pública en América Latina.

    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] La gobernanza como red de actores: sector público, sociedad civil y mercado 
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/18.png", data-aos="zoom-in")
      .col-lg-8
        p La gobernanza moderna, redefine la gestión de los asuntos públicos. Sustituye la estructura jerárquica vertical tradicional, donde el Estado imponía decisiones, por una red compleja de relaciones interdependientes entre actores del sector público, la sociedad civil y el mercado. Este paradigma reconoce que ningún actor puede enfrentar por sí solo, desafíos como el desarrollo sostenible, la equidad o la innovación en políticas públicas.
        .bg-color-13.p-4(data-aos="fade-left")
          p Lejos de reemplazar al gobierno, la gobernanza transforma su lógica:
          ul.lista-ul--color.mb-0
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Del control a la colaboración.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 De la imposición a la coordinación.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 De la centralización al diálogo.
            
        .bg-color-14.p-4.mb-3(data-aos="fade-left")
          p.mb-0 El principio de interdependencia se vuelve central: los actores necesitan colaborar para alcanzar objetivos compartidos, articulando capacidades, recursos y legitimidad.
    
    p.mb-4 La estructura de interacción: una tríada estratégica es: 

    .bg-full-width.bg-fondo-2.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-6
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema2/19.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="49%" y="6.5%" numero="+")
                h5 Sector público
                p Coordinador y garante del interés general. Aunque conserva funciones exclusivas (fuerza, ley, presupuesto), su eficacia se basa en generar consensos y facilitar el diálogo.
    
              .bg-color-white.box-shadow.p-3(x="87%" y="74.5%" numero="+")
                h5 Sociedad civil
                p Voz organizada de la ciudadanía. Aporta control social, coproduce soluciones y refuerza la rendición de cuentas a través de su participación estructurada y deliberativa.
    
              .bg-color-white.box-shadow.p-3(x="13%" y="74.5%" numero="+")
                h5 Sector privado
                p Aporta dinamismo, innovación y recursos. Su participación es clave en alianzas público-privadas, pero requiere regulación clara para evitar capturas del interés público.

    h2(data-aos="fade-left") Interacciones dinámicas y confianza institucional
    p.mb-5 A continuación, se presenta un recorrido por las dinámicas que configuran las redes de gobernanza y el papel crucial que juega la confianza institucional en su éxito. Este video invita a reflexionar sobre cómo se construyen acuerdos, se toman decisiones colectivas y se fortalece la legitimidad en la gestión pública.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/9cqLwqWDCzs?si=F1b2M6SlLRnGqFf9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    h2(data-aos="fade-left") Ejemplo práctico: una política ambiental colaborativa
    p.mb-5 Imagine un programa de gestión de residuos urbanos. Bajo una lógica burocrática, el Estado diseña la política, contrata servicios y aplica sanciones. Bajo un enfoque de gobernanza, en cambio, la política:

    .bg-full-width.bg-color-15
      .row.align-items-center
        .col-lg-4
          img(src="@/assets/curso/tema2/20.svg").mx-auto
        .col-lg-8
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Está diseñada, juntamente, con organizaciones de recicladores, empresas de servicios, expertos y asociaciones de vecinos.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Se implementa a través de acuerdos de corresponsabilidad, donde cada actor asume compromisos específicos.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Se evalúa públicamente, mediante observatorios ciudadanos y auditorías compartidas.
    
    .bg-full-width.bg-color-9.mb-5
      .px-4.px-md-5.py-4
        p.mb-0 Este cambio no solo mejora los resultados, sino que aumenta el sentido de pertenencia y responsabilidad colectiva, respecto a los objetivos de la política pública.
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/21.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        h2(data-aos="fade-left") Riesgos y desafíos: gobernanza sin legitimidad
        p(data-aos="fade-left") El hecho de que haya múltiples actores no garantiza, por sí mismo, mejores decisiones. Existen riesgos importantes como:
    
        .bg-color-7.p-4.mb-3(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Exclusión de grupos vulnerables o sin capacidad organizativa.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Opacidad en la representación de intereses.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Falta de coordinación entre niveles de gobierno.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Confusión de responsabilidades y debilitamiento de la autoridad pública.
    
    .bg-color-1.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema2/22.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Por lo tanto, la calidad de la gobernanza debe evaluarse no solo por su capacidad de generar consensos, sino también por su compromiso con la equidad, la transparencia y la inclusión social. Entender la gobernanza como red de actores permite ver el Estado no como un ente aislado, sino como parte de un entramado social, económico y político más amplio. El verdadero reto está en equilibrar la autonomía y la cooperación, la eficacia y la legitimidad, la eficiencia técnica y la justicia social. Al desarrollar habilidades para identificar, analizar y fortalecer estas redes, se contribuye al diseño de políticas públicas más sostenibles, innovadoras y participativas.
    
    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Estudios de caso: políticas públicas exitosas y fallidas, desde la perspectiva institucional

    .bg-full-width.bg-color-12.mb-5
      .p-4.p-md-5
        .row
          .col-lg-3.order-2
            figure
              img(src="@/assets/curso/tema2/23.png", data-aos="zoom-in")
          .col-lg-9.order-1.mb-3.mb-lg-0
            p.mb-5(data-aos="fade-left") Al analizar la implementación de políticas públicas, se hace necesario observar cómo las estructuras institucionales, las capacidades del Estado y las dinámicas de gobernabilidad y gobernanza, inciden directamente en los resultados. Desde una mirada comparativa, los casos hipotéticos permiten explorar situaciones realistas que ilustran cómo una política puede fortalecerse o debilitarse en función del contexto institucional donde se desarrolla.
        
            .bg-color-6.p-4(data-aos="fade-left")
              p.mb-0 En esta sección, se exponen dos casos hipotéticos: uno exitoso y otro fallido, ambos situados en un contexto nacional con elementos aplicables al análisis público. Este ejercicio busca fortalecer la comprensión crítica sobre los factores que determinan la calidad de una política desde la perspectiva de la acción estatal, la coordinación multiactor y la legitimidad del proceso.
        
    h2(data-aos="fade-left") Caso hipotético exitoso: Programa “Educación para Todos” en el Departamento de Sierra Verde
    p En el año 2022, la Gobernación de Sierra Verde, lanzó el programa “Educación para Todos”, orientado a reducir la deserción escolar rural, mediante acceso a tecnologías, transporte escolar y formación docente intercultural. La estrategia fue construida a partir de un diagnóstico participativo en los municipios más afectados por abandono escolar, y articuló a la Secretaría de Educación, las alcaldías locales, cooperativas rurales y asociaciones de padres.
    p.mb-5 Factores institucionales que favorecieron el éxito:
    
    .bg-full-width.bg-color-7.mb-5
      .row.align-items-center
        .col-lg-4.mb-3.mb-lg-0
          img(src="@/assets/curso/tema2/24.svg").mx-auto
        .col-lg-8
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Un marco normativo claro, alineado con las competencias territoriales y con respaldo financiero descentralizado.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Liderazgo político estable que garantizó continuidad administrativa durante el ciclo de planificación, ejecución y evaluación.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Creación de mesas interinstitucionales y comunitarias para la toma de decisiones, con representación de todos los actores implicados.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Implementación de un sistema de evaluación técnica y social, basado en indicadores de cobertura, satisfacción y permanencia escolar.
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/25.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Los resultados mostraron una reducción del 40 % en la deserción escolar en zonas rurales, fortalecimiento de capacidades locales y mayor apropiación ciudadana de los procesos educativos. Este caso ilustra cómo una gobernabilidad legítima, articulada con un modelo de gobernanza participativa, potencia la eficacia estatal y genera valor público sostenible.
        h2(data-aos="fade-left") Caso hipotético fallido: programa “Empleo Rural Productivo” del Ministerio del Trabajo
    
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/26.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En el año 2018, el Ministerio del Trabajo implementó el programa “Empleo Rural Productivo”, destinado a generar empleo agrícola mediante subsidios a pequeños productores, capacitación técnica y acceso a mercados. La iniciativa fue diseñada en un entorno urbano, sin consulta territorial ni evaluación previa de necesidades locales.
        p Factores institucionales que explican su fracaso:
    
    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/27.png", alt="").mb-4.mb-lg-0
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Diseño centralizado y escasa coordinación")
            p Generó duplicación de esfuerzos, desarticulación operativa y falta de adaptación a las realidades territoriales.
    
          .div(titulo="Falta de criterios de focalización")
            p Permitió que grandes productores captaran subsidios destinados a poblaciones vulnerables.
    
          .div(titulo="Ausencia de un sistema efectivo de evaluación")
            p Se priorizó la ejecución presupuestal sobre los resultados sociales, afectando la calidad de la política.
    
          .div(titulo="Falta de transparencia en la asignación de recursos")
            p Causó conflictos entre actores, desconfianza institucional y baja participación comunitaria.
    
    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/28.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0.text-white Al cabo de dos años, el programa fue suspendido sin haber alcanzado el 20 % de su meta de beneficiarios. Se evidencia una débil gobernabilidad técnica y política, así como una gobernanza ausente o distorsionada, por intereses sectoriales.
    
    .titulo-figura.mb-4
      h5 Tabla 2.
      span Comparación institucional: elementos diferenciadores
    .tabla-a.color-acento-botones.mb-5
      table
        thead
          tr
            th.bg-color-5 Dimensión analizada
            th.bg-color-5 Caso exitoso: Educación para Todos
            th.bg-color-5 Caso fallido: Empleo Rural Productivo
        tbody
          tr
            td.text-bold Diseño normativo.
            td Claro, coherente con competencias.
            td Centralizado, sin enfoque territorial.
          tr
            td.text-bold Participación ciudadana.
            td Alta y estructurada en mesas locales.
            td Limitada y sin representatividad.
          tr
            td.text-bold Coordinación interinstitucional.
            td Fluida entre niveles de gobierno.
            td Inexistente o vertical.
          tr
            td.text-bold Evaluación y seguimiento.
            td Permanente, con ajuste a indicadores.
            td Ausente o centrado en ejecución presupuestal.
          tr
            td.text-bold Transparencia.
            td Elevada, con control social activo.
            td Baja, con denuncias de clientelismo.
          tr
            td.text-bold Resultados en legitimidad.
            td Aumento de confianza institucional.
            td Desconfianza y desgaste político.
    
    h2.mb-5(data-aos="fade-left") Análisis reflexivo desde la gobernabilidad y gobernanza

    .bg-color-7.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema2/29.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Ambos casos reflejan cómo las políticas públicas dependen, en gran medida, de condiciones institucionales que van más allá del contenido técnico o del presupuesto asignado. Cuando se logra una gobernabilidad democrática, es decir, una capacidad estatal ejercida con legitimidad, eficacia y apertura, se crean las bases para una política sólida. Y si esta gobernabilidad se complementa con mecanismos de gobernanza inclusiva, es decir, con procesos donde múltiples actores participan, se fortalecen tanto los resultados como la legitimidad del proceso.
    
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/30.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") Por el contrario, un diseño excluyente, una implementación fragmentada y una evaluación ineficaz, generan condiciones institucionales que propician el fracaso, incluso cuando la intención inicial es positiva. En este sentido, se invita a reconocer que los problemas públicos requieren enfoques sistémicos, que consideran no solo qué hacer, sino también, con quién y bajo qué condiciones se lleva a cabo, una intervención.
    
        .bg-color-1.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/31.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El uso de casos hipotéticos representa una herramienta pedagógica poderosa para reflexionar sobre la relación entre diseño institucional, gobernabilidad, gobernanza y resultados. Al situarse en estas situaciones simuladas, se fortalece la capacidad de análisis crítico y se abren espacios para el diseño de estrategias más coherentes, participativas y sostenibles en el ámbito de la política pública.
    
    .bg-full-width.bg-color-6.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0.order-lg-2
            h2.mb-4(data-aos="flip-up") Estrategias para fortalecer la gobernabilidad y la gobernanza
            p.mb-4(data-aos="fade-right") Se invita a leer el documento <b>Estrategias para fortalecer la gobernabilidad y la gobernanza</b>, donde se aborda la necesidad de consolidar sistemas democráticos eficaces y legítimos, mediante acciones que refuercen tanto la capacidad institucional del Estado, como los procesos de toma de decisiones participativos.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Estrategias para fortalecer la gobernabilidad y la gobernanza.
    
          .col-lg-5.order-lg-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/32.png', alt='')

    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>
          
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/74452/?as_all=gobernanza&as_all_op=unaccent__icontains&prev=as " target="_blank" rel="noopener noreferrer") Valadés, D. (2005). Gobernabilidad y constitucionalismo en América Latina. Instituto de Investigaciones Jurídicas - UNAM. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://olacefs.com/ctpbg/document/fundamentos-conceptuales-sobre-la-gobernanza/ " target="_blank" rel="noopener noreferrer") OLACEFS. (2021). Fundamentos conceptuales sobre la Gobernanza. OLACEFS. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=03zkwjj1n44" target="_blank" rel="noopener noreferrer") Razón Pública. (2023). ¿Crisis de gobernabilidad o ruido? [video]. YouTube.  



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema2',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de las siguientes es una característica fundamental de los derechos humanos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Son temporales y cambiantes',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Son universales y aplican a todas las personas',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Son exclusivos de ciertos grupos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Son opcionales',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál de las siguientes afirmaciones sobre la diversidad cultural es correcta?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Fomenta la homogeneización cultural',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Promueve el respeto y la aceptación de las diferencias',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Debilita la identidad cultural de los pueblos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Limita las oportunidades de interacción',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              'La mediación en un conflicto tiene como objetivo principal:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Imponer una solución rápida',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Facilitar el diálogo entre las partes',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Determinar la culpabilidad',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Ignorar las preocupaciones de una parte',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto: 'En un foro comunitario, es importante:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Escuchar solo a las autoridades',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Fomentar la participación de todos los miembros',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Decidir por votación sin consultar a los demás',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Excluir las opiniones de los más jóvenes',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué busca la justicia restaurativa en el contexto de un conflicto?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Aplicar una sanción severa',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Reparar el daño y restablecer las relaciones',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Castigar a las partes involucradas',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Ignorar el contexto del conflicto',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
