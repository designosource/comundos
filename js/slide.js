jQuery(window).load(function() {

  jQuery('#slidebox').flexslider({
    animation: "fade",
    directionNav:true,
    controlNav:false
  });

    if ( jQuery('html').attr('lang') == 'nl' ) {

      jQuery('.frmore').text("lees meer");

      jQuery('#block-views-view-news-news-articles h2').text('Nieuws');


  } else if ( jQuery('html').attr('lang') == 'en' ) {
      // Slide 1
  	jQuery('.slide1').html("About comundos");
  	jQuery('.slide1-text').html("<p>Comundos connects young people worldwide and their stories. We promote digital storytelling as a technique for identity development, critical awareness and social intercultural interaction. Through short voiced photo movies, digital stories, young people from different worlds can work together and communicate about what matters to them.</p>");


  	jQuery('.slide2').html("Digital stories");
  	jQuery('.slide2-text').html("<p>Search and view digital stories by country, theme or language.</p>");

  	jQuery('.slide3').html("Participate");
  	jQuery('.slide3-text').html("<p>Do you want to build an intercultural dialogue with Comundos? Like us on Facebook and follow us on Twitter! Please contact us to work together or for a workshop tailored to your school or organization.</p>");

  }

  else if ( jQuery('html').attr('lang') == 'pt-br' ) {
  	jQuery('.frmore').text("Leia mais");
  	jQuery('#block-views-view-news-news-articles h2').text('Notícia');
      // Slide 1
  	jQuery('.slide1').html("Sobre Comundos");
  	jQuery('.slide1-text').html("<p>Comundos conecta jovens no mundo todo e suas histórias. Promovemos digital storytelling como uma técnica para o desenvolvimento da identidade, consciência crítica e interação social intercultural. Através de filmes curtos com fotos, histórias digitais, jovens de diferentes mundos podem trabalhar em conjunto e comunicar sobre o que querem expressar.</p>");
	
	jQuery('.slide2').html("Histórias digitais");
  	jQuery('.slide2-text').html("<p>Pesquisar e assistir histórias digitais por país, por tema ou por idioma.</p>");

  	jQuery('.slide3').html("Participar");
  	jQuery('.slide3-text').html("<p>Quer construir um diálogo intercultural junto com Comundos? Curta-nós no Facebook e siga-nos no Twitter. Entre em contato conosco para trabalhar em conjunto ou para uma oficina sob medida para a sua escola ou organização.</p>");
  }

    else if ( jQuery('html').attr('lang') == 'es' ) {
    	jQuery('.frmore').text("Lee mas");
    	jQuery('#block-views-view-news-news-articles h2').text('Noticias');
      // Slide 1
  	jQuery('.slide1').html("Sobre Comundos");
  	jQuery('.slide1-text').html("<p>Comundos conecta a los jóvenes de todo el mundo y sus historias. Promovemos la narración digital como una técnica para el desarrollo de la identidad, la conciencia crítica y la interacción social intercultural. Expresándose a través de películas cortas con sonido y fotografías, historias digitales, jóvenes de diferentes mundos pueden trabajar juntos y comunicarse acerca lo que quieren expressar.</p>");

	jQuery('.slide2').html("Los relatos digitales");
  	jQuery('.slide2-text').html("<p>Buscar y ver historias digitales por país, por tema o por idioma.</p>");

  	jQuery('.slide3').html("Participar");
  	jQuery('.slide3-text').html("Quer construir um diálogo intercultural junto com Comundos? Curta-nós no Facebook e siga-nos no Twitter. Entre em contato conosco para trabalhar em conjunto ou para uma oficina sob medida para a sua escola ou organização.</p>");
  }

});