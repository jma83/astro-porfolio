import type IconData from "../types/IconData.ts";
import {
  flutterLogo,
  openglLogo,
  reactLogo,
  vueLogo,
} from "@static/pathTechFrameworkItems.ts";
import {
  assemblyLogo,
  cPlusLogo,
  cSharpLogo,
  cssLogo,
  dartLogo,
  htmlLogo,
  javaLogo,
  jsLogo,
  kotlinLogo,
  phpLogo,
  swiftLogo,
} from "@static/pathTechLanguageItems.ts";
import {
  androidLogo,
  firebaseLogo,
  iosLogo,
} from "@static/pathTechSoftwareItems.ts";
import {
  aeLogo,
  blenderLogo,
  dsmax,
  prLogo,
  unityLogo,
} from "@static/pathTechIDEItems.ts";

export interface IconProjectData extends IconData {
  title: string;
  subtitle: string;
  description: string;
  pathTech: IconData[];
  github?: string;
  demo: boolean;
}

const projectItems: IconProjectData[] = [
  {
    src: "/images/projects/project_plogging-challenge.png",
    alt: "Plogging Challenge app",
    title: "Plogging Challenge - App en Flutter para Android e IOS!",
    subtitle: "App Android e IOS",
    description:
      "Desarrollo de una app para Android e IOS en Flutter sobre rutas y navegación con Plogging. Práctica realizada durante el máster en informática móvil en la UPSA.",
    pathTech: [flutterLogo, dartLogo, firebaseLogo, androidLogo, iosLogo],
    github: "https://github.com/jma83/TFM_flutter_plogging_app",
    demo: false,
  },
  {
    src: "/images/projects/project_rick-and-morty.png",
    alt: "Rick and Morty hybrid app",
    title: "Rickpedia - App en ReactNative para Android e IOS!",
    subtitle: "App Android e IOS",
    description:
      "Desarrollo de una app de enciclopedia sobre la serie Rick y Morty, con React Native. Práctica realizada durante el máster en informática móvil en la UPSA.",
    pathTech: [reactLogo, cssLogo, androidLogo, iosLogo],
    github: "https://github.com/jma83/ReactNativeProject",
    demo: false,
  },
  {
    src: "/images/projects/project_fit-up.png",
    alt: "Fit Up Android app",
    title: "FitUp - App de entrenamientos para Android!",
    subtitle: "App Android",
    description:
      "Desarrollo de una app de entrenamientos para Android, con Java y Kotlin. Práctica realizada durante el máster en informática móvil en la UPSA.",
    pathTech: [javaLogo, kotlinLogo, androidLogo],
    github: "https://github.com/jma83/PracticaAndroid-FitUp",
    demo: false,
  },
  {
    src: "/images/projects/project_books.png",
    alt: "Books IOS app",
    title: "Books - App en Swift para IOS!",
    subtitle: "App IOS",
    description:
      "Desarrollo de una app para IOS de libros con Swift. Práctica realizada durante el máster en informática móvil en la UPSA.",
    pathTech: [iosLogo, swiftLogo],
    github: "https://github.com/jma83/PracticaIOS",
    demo: false,
  },
  {
    src: "/images/projects/project_movie-guessr.png",
    alt: "Movie Guessr game",
    title: "MovieGuessr - Juego para web en JS!",
    subtitle: "Página web",
    description:
      "Desarrollo de una página web de un juego de adivinar películas a partir de imagenes, con HTML, CSS, JS y Vue. Práctica realizada durante el máster en informática móvil en la UPSA.",
    pathTech: [vueLogo, htmlLogo, cssLogo, jsLogo],
    github: "https://github.com/jma83/WordGuesser",
    demo: true,
  },
  {
    src: "/images/projects/project_volley-force.png",
    alt: "Volley Force game",
    title: "VolleyForce - Juego en 1 semana en Unity",
    subtitle: "Videojuego",
    description:
      "Desarrollo de un videojuego de VolleyBall en una semana con Unity. Reto iniciado a partir de: <a href='https://www.mediavida.com/foro/gamedev/mv-retos-gamedev-edicion-i-641479'>https://www.mediavida.com/foro/gamedev/mv-retos-gamedev-edicion-i-641479</a>. Enlaces para jugarlo: <a href='https://bit.ly/2w8wzWM' target='_blank'>https://bit.ly/2w8wzWM</a> <a href='http://www.jmartdev.ovh/games/volleyball/' target='_blank'>http://www.jmartdev.ovh/games/volleyball/</a>",
    pathTech: [unityLogo, cSharpLogo],
    github: "https://github.com/jma83/VolleyBall_Project",
    demo: true,
  },
  {
    src: "/images/projects/project_hunger.png",
    alt: "Hunger web game",
    title: "Ahorcado - Juego para web en JS!",
    subtitle: "Página web",
    description:
      "Desarrollo de una página web del juego del ahorcado, con HTML, CSS, JS y React. Práctica realizada durante el máster en informática móvil en la UPSA.",
    pathTech: [reactLogo, cssLogo],
    github: "https://github.com/jma83/AhorcadoWebReact",
    demo: true,
  },
  {
    src: "/images/projects/project_three-in-line.png",
    alt: "Three in line web game",
    title: "3 en raya - Juego para web en JS!",
    subtitle: "Página web",
    description:
      "Desarrollo de una página web del juego 3 en raya, con HTML, CSS y JS. Jugador vs Jugador o Jugador vs IA. Práctica realizada durante el máster en informática móvil en la UPSA.",
    pathTech: [htmlLogo, cssLogo, jsLogo],
    github: "https://github.com/jma83/TresEnLinea",
    demo: true,
  },
  {
    src: "/images/projects/project_age-of-karts.png",
    alt: "Age of Karts game",
    title: "Age of Karts - Videojuego en C++ y OpenGL",
    subtitle: "Videojuego",
    description:
      "Age Of Karts. Videojuego de carreras de karts históricos, realizado en C++, Bullet (librería de físicas), OpenGL (motor gráfico própio basado en OpenGL), Raknet (partida online) y SFML (gestión de eventos). Grupo de 6 estudiantes de Ingeniería Multimedia en la UA. Twitter @SocketWar0. Canal de Youtube: <a href='https://www.youtube.com/channel/UCATVwJlJnV1g6ozQ5axnmYw' target='_blank'>https://www.youtube.com/channel/UCATVwJlJnV1g6ozQ5axnmYw</a>",
    pathTech: [cPlusLogo, openglLogo],
    github: "https://github.com/tomrock8/Age-of-karts",
    demo: false,
  },
  {
    src: "/images/projects/project_football.png",
    alt: "Football web game",
    title: "Juego de fútbol Web - Utilizando Canvas y Vanilla js",
    subtitle: "Página web",
    description:
      "Juego de fútbol para Web. Trabajando con Lean Canvas #HTML #CSS #JAVASCRIPT Enlace: <a href='http://www.jmartdev.ovh/games/football/' target='_blank'>http://www.jmartdev.ovh/games/football/</a>",
    pathTech: [htmlLogo, cssLogo, jsLogo],
    demo: true,
  },
  {
    src: "/images/projects/project_ar-hunters.png",
    alt: "AR Hunters game",
    title: "ARHunters - Videojuego de Realidad aumentada para Android",
    subtitle: "Videojuego Android",
    description:
      "Trabajo de fin de Grado. Desarrollo de un Videojuego de Realidad Aumentada en Unity, para dispositivos móviles. Combina hasta 3 tipos de realidad aumentada en un juego para móviles: con marcadores, sin marcadores y basados en ubicación. Encuentra distintos eventos que te rodean a través de el mapa y tu posición. Sube de nivel y enfrentate a retos más desafiantes. ARHunters, ¡ya disponible en Google Play Store!",
    pathTech: [unityLogo, cSharpLogo],
    github: "https://github.com/jma83/TFG_AR",
    demo: false,
  },
  {
    src: "/images/projects/project_lightning-video.png",
    alt: "Lighting video editing",
    title: "Generar Rayos entre dedos - Postproducción digital",
    subtitle: "Edición de video",
    description:
      "Postproducción digital con AfterEffects y Premiere. <a href='https://www.youtube.com/watch?v=IcIqs7DkU_s'>Enlace al video</a>.",
    pathTech: [aeLogo, prLogo],
    demo: true,
  },
  {
    src: "/images/projects/project_blender-models.png",
    alt: "Blender 3d models",
    title: "Modelado objetos 3D en Blender",
    subtitle: "Modelado 3D",
    description: "Algunos modelos 3D en Blender. Usado en proyecto de OpenGL.",
    pathTech: [blenderLogo],
    demo: false,
  },
  {
    src: "/images/projects/project_pixar-animation.png",
    alt: "Pixar animation game",
    title: "Animación Pixar Modificada (Modelado y Animación 3D)",
    subtitle: "Modelado y animación 3D",
    description:
      "Modelado y Animación 3D. Modelado Robot Giru (Dragon Ball GT) + adaptación animada al corto de Pixar #3dsMax. Video: <a href='https://www.youtube.com/watch?v=zq93Zc0yXWY' target='_blank'>https://www.youtube.com/watch?v=zq93Zc0yXWY</a>",
    pathTech: [dsmax],
    demo: true,
  },
  {
    src: "/images/projects/project_pixel-brawl.png",
    alt: "Pixel brawl game",
    title: "Amstrad CPC: Pixel Brawl (Ensablador)",
    subtitle: "Videojuego",
    description:
      "Programación en ensamblador de juegos retro. Pixel Brawl #Amstrad #Z80 #Assembly <a href='https://www.youtube.com/watch?v=13IRG1vTddM' target='_blank'>https://www.youtube.com/watch?v=13IRG1vTddM</a>",
    pathTech: [assemblyLogo],
    demo: false,
  },
  {
    src: "/images/projects/project_saloon-scene.png",
    alt: "Saloon 3d scene",
    title: "Escena interior de Saloon",
    subtitle: "Modelado 3D",
    description:
      "Modelado 3D. Recreación de un Bar o Saloon del lejano Oeste #3dsMax",
    pathTech: [dsmax],
    demo: false,
  },
  {
    src: "/images/projects/project_lego-scene.png",
    alt: "Lego 3d scene",
    title: "Escena casa de Lego",
    subtitle: "Modelado 3D",
    description: "Comienzos Modelado en 3D. Casa de Lego modelada en 3dsMax.",
    pathTech: [dsmax],
    demo: false,
  },
  {
    src: "/images/projects/project_hardware-zone.png",
    alt: "HardwareZone web",
    title: "Hardwarezone - Web de compras online con Wordpress",
    subtitle: "Página web",
    description:
      "Página web HardwareZone, en la que se pueden adquirir productos relacionados con el mundo del Hardware y los ordenadores . Tienda online funcional, con todo el proceso de pago implementado. Hecha en local con #Wordpress y #Xampp.",
    pathTech: [htmlLogo, cssLogo, phpLogo],
    demo: false,
  },
  {
    src: "/images/projects/project_dragon-ware.png",
    alt: "DragonWare web",
    title: "DragonWare - Web de compras online con Wix",
    subtitle: "Página web",
    description:
      "Primera página web orientada a la compra online. Tienda desarrollada a través de Wix. Enlace: <a href='http://dragonwareshop.wixsite.com/dragonwareinc/' target='_blank'>http://dragonwareshop.wixsite.com/dragonwareinc/</a>",
    pathTech: [htmlLogo, cssLogo],
    demo: true,
  },
  {
    src: "/images/projects/project_own-mind.png",
    alt: "OwnMind web",
    title: "OwnMind - Red social con vanilla js",
    subtitle: "Página web",
    description:
      "Programación Hipermedia 2. Página web/red social OwnMind #JAVASCRIPT #CSS #HTML #AJAX",
    pathTech: [htmlLogo, cssLogo, jsLogo],
    demo: true,
  },
  {
    src: "/images/projects/project_picstories.png",
    alt: "PicStories web",
    title: "PicStories - Red social con PHP",
    subtitle: "Página web",
    description:
      "Programación Hipermedia 1. Página web Picstories: red social con fotos, álbumes, etc. #PHP #HTML #CSS. Página implementada en local a través de xampp.",
    pathTech: [htmlLogo, cssLogo, phpLogo],
    demo: false,
  },
  {
    src: "/images/projects/project_frozen-hearts.png",
    alt: "Frozen Hearts game",
    title:
      "Frozen Hearts - Videjouego multiplataforma desarrollado en GameMaker",
    subtitle: "Videojuego Android y Windows",
    description: "Comienzos Modelado en 3D. Casa de Lego modelada en 3dsMax.",
    pathTech: [cPlusLogo],
    demo: false,
  },
  {
    src: "/images/projects/project_olympic.png",
    alt: "Olympic web",
    title: "Olympic - Red social con WordPress",
    subtitle: "Página web",
    description:
      "Olympic, primiera página web/red social hecha con Wordpress. Comienzos en #Wordpress.",
    pathTech: [htmlLogo, cssLogo, phpLogo],
    demo: false,
  },
  {
    src: "/images/projects/project_fridge.png",
    alt: "Fridge web",
    title: "Nevera web - Comienzos con HTML, CSS y JS",
    subtitle: "Página web",
    description:
      "Página Web para control y gestión de un frigorífico. Comienzos en programación Web #HTML #CSS #JAVASCRIPT",
    pathTech: [htmlLogo, cssLogo, jsLogo],
    demo: false,
  },
];

export default projectItems;
