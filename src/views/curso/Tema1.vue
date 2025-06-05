<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Fundamentos conceptuales de gobernabilidad y gobernanza'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-3.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Para comprender en profundidad el papel del Estado en el diseño e implementación de las políticas públicas, resulta imprescindible analizar los conceptos de gobernabilidad y gobernanza, entendidos como categorías claves para interpretar la calidad de la gestión pública, la legitimidad institucional y la participación ciudadana. Aunque vinculados, ambos términos expresan enfoques distintos sobre cómo se organiza el poder, se distribuyen responsabilidades y se canalizan las demandas sociales en un sistema democrático.
    
    h2.mb-4(data-aos="fade-left") Gobernabilidad: estabilidad y legitimidad del sistema político

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p.mb-5(data-aos="fade-left") El concepto de gobernabilidad alude a la capacidad de un sistema político para mantener el orden, formular políticas efectivas y sostener su legitimidad ante la ciudadanía. Este término surge en los años setenta como respuesta a la denominada “crisis de sobrecarga” de los Estados, en la cual las instituciones no lograban atender simultáneamente el aumento de demandas sociales, expectativas económicas y conflictos políticos (Aguilar Villanueva, 2013).
    
        .bg-color-6.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Con el tiempo, el concepto se amplió para incluir dimensiones como la eficiencia institucional, la confianza ciudadana en las autoridades y la estabilidad democrática (Oszlak, 2007). En América Latina, la gobernabilidad también se relaciona con desafíos estructurales como la desigualdad, la corrupción, la debilidad institucional y la limitada capacidad de respuesta del Estado. Desde esta perspectiva, una gobernabilidad democrática exige no solo ejercer el poder, sino hacerlo con legitimidad, transparencia y participación ciudadana (Ziccardi, 2012).
    
    .row.mb-5
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/4.png", data-aos="zoom-in")
      .col-lg-9
        h2(data-aos="fade-left") Gobernanza: redes, cooperación y actores múltiples
        p(data-aos="fade-left") En contraste, el concepto de gobernanza se refiere a los procesos de coordinación y cooperación entre actores gubernamentales y no gubernamentales en la formulación, implementación y evaluación de políticas públicas (Rojas, 2005). Este enfoque cuestiona el modelo tradicional del Estado como único centro decisor y propone una lógica de acción basada en redes, negociaciones, alianzas público-privadas y participación comunitaria.
    
        .bg-color-9.px-4.mb-5(data-aos="fade-left")
          .row.align-items-end
            .col-lg-auto
              img(src="@/assets/curso/tema1/5.svg", style="max-width: 90px").mx-auto
            .col-lg.p-4
              p.mb-0 Según Mayntz (2005), la gobernanza implica una transformación en el ejercicio del poder, en la que el Estado comparte responsabilidades con otros actores para enfrentar problemas complejos.
        p En el contexto latinoamericano, la gobernanza se ha impulsado como una alternativa al modelo burocrático vertical, sobre todo donde el Estado no ha logrado responder eficazmente a los desafíos del desarrollo (Ziccardi, 2012). Este nuevo paradigma propone fortalecer la comunicación con la ciudadanía, institucionalizar mecanismos de colaboración y valorar el conocimiento local como parte del diseño de políticas públicas.

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Concepto y evolución de la gobernabilidad en el pensamiento político contemporáneo 
    
    p El concepto de gobernabilidad se ha convertido en una herramienta clave para analizar la capacidad del Estado para responder a las demandas sociales, políticas y económicas en contextos complejos. Aunque no es un término nuevo, su consolidación teórica ha estado marcada por múltiples enfoques y significados, a veces, incluso, contradictorios.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-1.p-3.h-100(data-aos="fade-left")
          p(data-aos="fade-left") Su aparición como categoría de análisis, se remonta a los años setenta, cuando la Comisión Trilateral, integrada por Crozier, Huntington y Watanuki, alertó sobre una “crisis del Estado democrático”. Esta crisis se originaba en el crecimiento desmedido de las demandas ciudadanas, frente a una administración pública con signos de desgaste institucional.
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/6.png" data-aos="zoom-in")
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-7.p-3.h-100(data-aos="fade-left")
          p(data-aos="fade-left") Desde esta perspectiva, la gobernabilidad fue entendida como la capacidad de las instituciones para mantener el orden y responder eficazmente, sin perder legitimidad. La idea central era lograr un equilibrio entre demandas sociales crecientes y la capacidad del Estado para gestionarlas.
    
    .bg-full-width.bg-color-2.mb-5
      .row.align-items-center
        .col-lg-3.mb-3.mb-lg-0
          img(src="@/assets/curso/tema1/7.png").mx-auto
        .col-lg-9.text-white.px-4
          p.mb-0 Durante las décadas de los años ochenta y noventa, organismos como el Banco Mundial y el PNUD retomaron el concepto y lo vincularon a variables como el control de la corrupción, la calidad del gasto público, la eficacia regulatoria y el respeto al Estado de derecho. Esta visión más técnica e instrumental, asoció la gobernabilidad con el buen gobierno y con la estabilidad macroeconómica.
    
    p.mb-4 Sin embargo, esta mirada fue criticada por limitarse a factores administrativos, descuidando las dinámicas políticas y sociales que influyen en la legitimidad del poder estatal. Desde el ámbito académico, autores como Guillermo O'Donnell y Adam Przeworski, ampliaron el debate. Sostuvieron que la gobernabilidad no puede reducirse a eficiencia técnica, sino que debe incluir la expansión de derechos, la participación ciudadana y el fortalecimiento democrático. En este marco, se diferencian dos tipos de gobernabilidad:

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-5.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/8.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Autoritaria
              p.mb-0 Impone orden sin consensos ni legitimidad.
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-5.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/9.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Democrática
              p.mb-0 Se basa en el diálogo, la inclusión y los acuerdos amplios.
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/10.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p.mb-5(data-aos="fade-left") Un aporte importante viene del enfoque relacional. Este propone que la gobernabilidad no es una cualidad inherente al Estado, sino el resultado de un equilibrio dinámico entre las expectativas sociales y la capacidad estatal de respuesta <b>(Mayorga & Córdova, 2007).</b>
    
        .bg-color-6.p-4.mb-3(data-aos="fade-left")
          p.mb-0 Este equilibrio exige la existencia de élites políticas con capacidad de negociación, instituciones democráticas estables y legitimidad social suficiente para implementar decisiones públicas. En América Latina, este enfoque cobra especial relevancia por las frecuentes crisis de legitimidad, la desigualdad estructural y la fragmentación institucional.
        p Según Prats (2003), lograr una gobernabilidad democrática en la región requiere consolidar sistemas capaces de garantizar derechos, procesar demandas y prevenir retrocesos autoritarios.
        p En este proceso, es clave diferenciar gobernabilidad y gobernanza:

    .bg-full-width.bg-color-8
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/11.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Primer tema
                p.mb-0 La primera, se refiere a la capacidad del Estado para conducir eficazmente.
          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/12.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Segundo tema
                p.mb-0 La segunda, alude a las formas en que interactúan distintos actores públicos y privados en el ejercicio del poder.
    
    p.mb-4 Esta distinción permite entender la dimensión operativa (gobernabilidad) y la dimensión estructural (gobernanza) de la acción pública.

    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto.mb-3.mb-lg-0
            img(src="@/assets/curso/tema1/13.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Estudiar la gobernabilidad desde una mirada contemporánea, implica analizar no solo la capacidad de un gobierno para ejercer el poder, sino también su legitimidad, eficacia y orientación democrática. Este enfoque resulta clave para evaluar la calidad de las instituciones, diseñar políticas públicas efectivas y fortalecer la estabilidad democrática en diversos contextos.
    
    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] La gobernanza como nuevo paradigma en la gestión pública 
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/14.png", data-aos="zoom-in")
      .col-lg-8
        p.mb-5(data-aos="fade-left") El concepto de gobernanza marca un cambio fundamental en la comprensión de la gestión del Estado y la forma en que se abordan los asuntos públicos. A diferencia de enfoques anteriores, centrados exclusivamente en la autoridad jerárquica del gobierno, este nuevo paradigma reconoce que el poder se distribuye y se ejerce a través de una red compleja de actores, instituciones y procesos interdependientes.
    
        .bg-color-9.p-4(data-aos="fade-left")
          p.mb-0 Se parte de la premisa de que ningún actor, por sí solo, puede enfrentar eficientemente los desafíos públicos, lo que da paso a una lógica de acción colectiva. En esta, el Estado deja de actuar de manera aislada y pasa a colaborar activamente con actores sociales, económicos y territoriales. Este enfoque incorpora valores como la transparencia, la corresponsabilidad, la participación ciudadana y la flexibilidad institucional (Prats, 2003).

    .titulo-figura.mb-4
      h5 Tabla 1.
      span Comparación entre modelos de gestión pública
    .tabla-a.color-acento-botones.mb-3
      table
        thead
          tr
            th.bg-color-5 Característica
            th.bg-color-5 Modelo burocrático tradicional
            th.bg-color-5 Modelo de gobernanza
        tbody
          tr
            td.text-bold Estructura organizativa.
            td Jerárquica y centralizada.
            td Horizontal y en red.
          tr
            td.text-bold Relación entre actores.
            td Vertical y unidireccional.
            td Interdependiente y cooperativa.
          tr
            td.text-bold Proceso de toma de decisiones.
            td Exclusivo del Estado.
            td Compartido con múltiples actores.
          tr
            td.text-bold Recursos utilizados.
            td Públicos.
            td Públicos, privados y comunitarios.
          tr
            td.text-bold Enfoque en políticas públicas.
            td Control y cumplimiento.
            td Coordinación, diálogo y adaptación.
          tr
            td.text-bold Responsabilidad institucional.
            td Concentrada en el aparato estatal.
            td Distribuida entre sectores.
    
    .bg-full-width.bg-color-12.mb-5
      .px-4.px-md-5.py-4
        .row
          .col-lg-3.order-2
            figure
              img(src="@/assets/curso/tema1/15.png", data-aos="zoom-in")
          .col-lg-9.order-1.mb-3.mb-lg-0
            h2(data-aos="fade-left") Gobernanza: un nuevo paradigma
            p(data-aos="fade-left") El modelo de gobernanza rompe con el monopolio estatal del interés general. Se reconoce que los problemas públicos son tan complejos que requieren la cooperación activa de todos los sectores implicados. La relación entre Estado y sociedad se redefine: de una dependencia unilateral, se transita hacia una interdependencia institucional, donde cada actor aporta capacidades y recursos específicos para lograr objetivos comunes.
        
            .bg-color-7.p-4(data-aos="fade-left")
              .row.align-items-end
                .col-lg-auto
                  img(src="@/assets/curso/tema1/16.svg", style="max-width: 90px").mx-auto
                .col-lg.p-4
                  p.mb-0 Uno de los aspectos más relevantes de este enfoque es su carácter adaptativo y contextual: no se establece como un modelo único o universal, sino que se ajusta al nivel de gobierno, al sector de política y a las condiciones locales. Esta flexibilidad permite abordar los desafíos con estrategias adaptadas a las realidades institucionales y sociales, de cada entorno.

    p.mb-4 Aunque el Estado pierde capacidad de control directo, no desaparece ni se debilita, sino que asume un nuevo rol como facilitador, coordinador y articulador de las redes de gobernanza. Esto exige nuevas habilidades por parte de las autoridades públicas, como la capacidad de gestionar conflictos, construir consensos, mediar entre intereses diversos y coordinar acciones de largo alcance.

    h2(data-aos="fade-left") Características claves de la gobernanza contemporánea
    p.mb-5 Según la literatura especializada (Kooiman, 2005; Peters & Pierre, 1998), la gobernanza presenta las siguientes características distintivas:

    .bg-full-width.bg-ppal-claro
      .row.align-items-center
        .col-lg-4.mb-3.mb-lg-0
          img(src="@/assets/curso/tema1/17.svg").mx-auto
        .col-lg-8
          ul.lista-ul--color
            li.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 <b>Interdependencia</b> entre organizaciones.
            li.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Existencia de <b>redes de actores diversos</b>: públicos, privados y de la sociedad civil.
            li.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 <b>Procesos interactivos y descentralizados</b> de toma de decisiones.
            li.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Uso de <b>diálogo, confianza y negociación</b>, como mecanismos de regulación.
            li.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 <b>Combinación de recursos y competencias</b> en la gestión de lo público.
    
    .bg-full-width.bg-color-1.mb-5
      .px-4.px-md-5.py-4
        p.mb-0 Estas características hacen de la gobernanza un enfoque eficaz para abordar problemas complejos como el cambio climático, la seguridad ciudadana, la educación o la salud, donde los resultados dependen de la coordinación entre múltiples niveles de gobierno, sectores económicos y comunidades locales.

    h2.mb-5(data-aos="fade-left") Gobernanza en el contexto latinoamericano

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-9.p-3.h-100(data-aos="fade-left")
          p(data-aos="fade-left") En América Latina, la gobernanza ha sido vista como una respuesta a los límites de los modelos tradicionales de gobierno, caracterizados por la centralización, la opacidad y la escasa inclusión ciudadana. Diversos estudios destacan que este enfoque mejora la eficacia de las políticas públicas y refuerza la legitimidad democrática de las instituciones (Mayorga & Córdova, 2007).
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/18.png" data-aos="zoom-in")
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-6.p-3.h-100(data-aos="fade-left")
          p(data-aos="fade-left") Sin embargo, también se advierte sobre los riesgos de una gobernanza sin responsabilidad. La dispersión de funciones entre múltiples actores, puede generar ambigüedad en la rendición de cuentas. Por ello, se considera clave acompañar los procesos de gobernanza con mecanismos claros de control ciudadano, transparencia y evaluación pública, para asegurar que las decisiones beneficien al interés general.
    
    h2(data-aos="fade-left") Gobernanza y organismos internacionales
    p.mb-5 Organismos como la <b>OCDE, el PNUD y el Banco Mundial</b>, han adoptado y promovido el enfoque de gobernanza colaborativa, impulsando reformas administrativas centradas en:

    .row.justify-content-center.align-items-stretch.mb-4.text-center.text-white.mb-5
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-2.p-4(data-aos="fade-up").h-100
          p.mb-0 Coordinación multinivel.
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-10.p-4(data-aos="fade-down").h-100
          p.mb-0 Eficiencia institucional.
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-2.p-4(data-aos="fade-up").h-100
          p.mb-0 Innovación en la gestión pública.
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-10.p-4(data-aos="fade-down").h-100
          p.mb-0 Ciudadanía como eje de la acción pública.
    
    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/19.png", data-aos="zoom-in")
      .col-lg-7
        p(data-aos="fade-left") Adoptar el paradigma de la gobernanza, implica repensar la manera en que se ejerce el poder público. Ya no basta con diseñar políticas desde los escritorios estatales; se requiere integrar a múltiples actores, reconocer la diversidad social, negociar objetivos y construir consensos duraderos.
    
        .bg-color-7.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/20.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Como estudiante de políticas públicas, este enfoque le permitirá evaluar críticamente los procesos de decisión y proponer mecanismos de gestión más inclusivos, transparentes y eficaces.

    .bg-full-width.bg-color-6.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Diferencias claves entre gobernabilidad y gobernanza: implicaciones para el Estado
            p.mb-4(data-aos="fade-right") Se invita a leer el documento <b>Diferencias clave entre gobernabilidad y gobernanza</b>, donde se aborda la distinción conceptual y práctica entre dos pilares fundamentales del análisis político y de políticas públicas.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Diferencias claves entre gobernabilidad y gobernanza: implicaciones para el Estado.
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/21.png', alt='')
    
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/73439 " target="_blank" rel="noopener noreferrer") Valencia Escamilla, L. (2007). Representación política, instituciones y gobernanza. Ediciones y Gráficos Eón. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.undp.org/es/latin-america/publicaciones/gobernanza-democratica-gobernanza-efectiva-y-desigualdad-en-america-latina" target="_blank" rel="noopener noreferrer") United Nations Development Programme. (25 de enero de 2025) Gobernanza democrática, gobernanza efectiva y desigualdad en América Latina [blog] 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=LSzKyblJUwI" target="_blank" rel="noopener noreferrer") INDEE. (2022). ¿Qué es la gobernabilidad? [video]. YouTube. 



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
