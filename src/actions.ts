import { Action } from "./types";

const partialActions: Omit<Action, "id">[] = [
  {
    action: "Toman todos!",
    explanation: "No necesita mucha explicación, a tomar todos! Salud!🍺",
  },
  {
    action: "Toman los hombres!",
    explanation: "Es momento de brillar chicos 🧑🍺",
  },
  {
    action: "Yo nunca",
    explanation:
      "El  jugador debe decir Yo nunca…🤷‍♀️‍ y luego decir algo que nunca haya hecho, toman aquellos jugadores que lo hayan hecho 💁‍♂️",
  },
  {
    action: "Toma el más pequeño!",
    explanation: "Toma el más joven de los jugadores 👶",
  },
  {
    action: "Cultura Chupistica",
    explanation:
      "Escoge una categoría que se te ocurra(Ej: Marcas de cigarrillos 🚬, series de televisión 📺, etc) y nombra un elemento de este. Los jugadores deben nombran otros",
  },
  {
    action: "Crea una regla",
    explanation:
      "Crea una regla 😈 que deba ser cumplida por todos los jugadores (tú incluido), que se mantendrá por todo el juego (la regla puede ser eliminada por alguien que caiga en esta casilla). ",
  },
  {
    action: "Chiste",
    explanation:
      "Cuenta un chiste 😂 lo suficientemente divertido que haga que los demas se rian, los que rian tomaran 🍷 ",
  },
  {
    action: "Karaoke",
    explanation:
      "Elije una canción de tu gusto la cual sepas la letra y cantala 🎙, los jugadores que no canten la letra 🎼 deberan tomar 1 sorbo. La canción pára una ves que el jugador lo estime conveniente o todos ya hayan perdido. Si el jugador que elijio la canción no se sabe la canción y en partes tararea o tan solo no canta, debera pagar con 3 sorbos 🥃",
  },
  {
    action: "Subasta",
    explanation:
      "Elije una categoria de tu gusto(Ej: Marcas de autos, Marcas de cerveza, etc) ofrece la cantidad de elementos de esa categoria que creas que tu puedes nombrar 🔢, cualquier jugador puede ofrecer más que tu, y asi cada uno puede subir la apuesta. Cuando se estime que ya no habran mas ofertas se cierra la subasta y el jugador ofrecio más 💲, debera nombrar la cantidad de elementos de esa categoria la cual el ofrecio, si este las nombra podra regalar esa cantidad de sorbos o distribuirlos entre los jugadores, pero si el jugador no nombra la cantidad que ofrecio este debera tomarse esa cantidad",
  },
  {
    action: "Fantasma",
    explanation:
      "Ninguno de los jugadores te puede nombrar 🧙‍♀️, el jugador que te nombre deberá pagar con un 🍶. Esto dura hasta que otro jugador caiga en una casilla fantasma y obtenga este beneficio",
  },
  {
    action: "¿Esto o Esto?",
    explanation:
      "Preguntas que prefieres, Ej: Coca-cola o Pepsi, los que contesten erradamente toman 🍹",
  },
  {
    action: "Toman las Mujeres!",
    explanation: "Es momento de brillar chicas 👸🍺",
  },
  {
    action: "Toma el mas grande",
    explanation: "Toma el más viejo de los jugadores 👵🏻",
  },
  {
    action: "Android",
    explanation: "Toma los android lovers! 🥰🥰",
  },
  {
    action: "Iphone",
    explanation: "Toma los Iphone📱 lovers! 🥰🥰",
  },
  {
    action: "Impar",
    explanation: "Todos lo que hayan nacido en un año impar toman! 😆",
  },
  {
    action: "Hermanos",
    explanation: "Toman los que tengan hermanos 👨‍👨‍👧‍👧",
  },
  {
    action: "Zona cultural",
    explanation:
      "Haz una pregunta, que tenga varias respuestas quien no sepa la respuesta a la pregunta toma 🙋🏻‍♀️",
  },
  {
    action: "Par",
    explanation: "Toman los que jugadores que tenga años pares! 🎯",
  },
  {
    action: "Silbar",
    explanation:
      "Tiene que aguantar todo un turno silbando, si no lo logra, toma 🥤",
  },
  {
    action: "Compartir",
    explanation: "Reparte el número de tragos 🥃, del numero del dado 🎲",
  },
  {
    action: "Solteros",
    explanation: "Toman los solteros! 💁🏾‍♀️",
  },
  {
    action: "Tú y?",
    explanation: "Tomas tú y otra persona que elijas 👩🏿‍🤝‍🧑🏿",
  },
  {
    action: "Verdad o reto",
    explanation:
      "Escoge a cualquier jugador y preguntale verdad o reto? 🤜🏾 Si no cumple o no hace el reto, debe tomar un trago 🍸",
  },
  {
    action: "No me juzguen pero...",
    explanation:
      "El jugador en esta casilla, debe decir algo de lo cual no se siente tan orgullosos 🙍🏿‍♂️, toman un sorbo 🍹todos aquellos que lo juzguen",
  },
  {
    action: "Historia",
    explanation:
      "El jugador en turno, debe contar una historia vergonzante 🤦‍♀️(debe ser verdad), si todos consideran que es realmente humillante, toman sino, debes tomar tu 3 sorbos 🍺, por contar una historia tan mala 🙄",
  },
  {
    action: "Numero de parejas",
    explanation:
      "Los jugadores deberán tomar 🍻 la cantidad de personas con las que han salido 👩🏻‍🤝‍🧑🏼",
  },
  {
    action: "Piedra papel o tijeras",
    explanation:
      "Escoge cualquier jugador de la mesa y desafialo 🗡a piedra papel o tijera, el que pierda debe tomar 🖐🏼👊🏼🖖🏼",
  },
  {
    action: "El mas largo",
    explanation:
      "El jugador con el nombre más largo toma 👩🏼‍🦳, deberán sumar todos sus nombres y apellidos el número más alto gana!!!➕ ",
  },
  {
    action: "Descripción",
    explanation:
      "El jugador en turno, deberá escoger una personalidad famosa 😎 y describirla, el primer jugador que lo descubra gana, el resto de los perdedores toma un trago 🍺",
  },
  {
    action: "Mudo",
    explanation:
      "El jugador en esta casilla deberá permanecer callado 🤐 hasta que finalice el turno, cada vez que hable 😯, deberá tomar un trago 🍹",
  },
  {
    action: "El juego del alfabeto",
    explanation:
      "El jugador en turno comienza escogiendo una categoría (Ejm: Películas 🎬) y nombrando algo de esa categoría que empiece con la letra A. El jugador actual 😋 decide quien es la siguiente persona y debe decir algo de esa categoría ahora con la letra B y así sucesivamente hasta que haya un perdedor 😪. Ejemplo Películas (Avatar, Believe, Casablanca, Diamante de sangre etc)",
  },
  {
    action: "¿Quien soy?",
    explanation:
      "El jugador actual, deberá pensar en una alguien famoso 👑, y los otros jugadores deben adivinar quién es ❓, haciendo preguntas de si o no, y el jugador actual deberá responderlas, hasta que alguien adivine 🙋🏼‍♀️. Toman un trago los perdedores.  ",
  },
  {
    action: "Sigue la historia",
    explanation:
      "Junto con los demás jugadores deberán crear una historia coherente 🧾, la cual será formada con 1 o 2 palabras, como prefiera el jugador, por jugador. Al momento de que a un jugador le toque continuar la historia, si este se demora mucho, lo que provoca que se pierda la continuidad, queda automáticamente como perdedor 😫, y deberá tomar 1 sorbo 🥃",
  },
  {
    action: "Toman todos!",
    explanation: "No necesita mucha explicación, a tomar todos! Salud!🍺",
  },
  {
    action: "Yo nunca",
    explanation:
      "El  jugador debe decir Yo nunca…🤷‍♀️‍ y luego decir algo que nunca haya hecho, toman aquellos jugadores que lo hayan hecho 💁‍♂️",
  },
  {
    action: "Cultura Chupistica",
    explanation:
      "Escoge una categoría que se te ocurra(Ej: Marcas de cigarrillos 🚬, series de televisión 📺, etc) y nombra un elemento de este. Los jugadores deben nombran otros",
  },
  {
    action: "Chiste",
    explanation:
      "Cuenta un chiste 😂 lo suficientemente divertido que haga que los demas se rian, los que rian tomaran 🍷 ",
  },
  {
    action: "Subasta",
    explanation:
      "Elije una categoria de tu gusto(Ej: Marcas de autos, Marcas de cerveza, etc) ofrece la cantidad de elementos de esa categoria que creas que tu puedes nombrar 🔢, cualquier jugador puede ofrecer más que tu, y asi cada uno puede subir la apuesta. Cuando se estime que ya no habran mas ofertas se cierra la subasta y el jugador ofrecio más 💲, debera nombrar la cantidad de elementos de esa categoria la cual el ofrecio, si este las nombra podra regalar esa cantidad de sorbos o distribuirlos entre los jugadores, pero si el jugador no nombra la cantidad que ofrecio este debera tomarse esa cantidad",
  },
  {
    action: "¿Historia Real?",
    explanation:
      "Cuenta una anécdota de tu vida, cuando acabes los demás jugadores deberán decidir si era verdadera o una mentira, cuando todos contestado, se dirá si era real o no. Tomarán 1 sorbo los que se equivoquen 🍸",
  },
  {
    action: "Toma el mas grande",
    explanation: "Toma el más viejo de los jugadores 👵🏻",
  },
  {
    action: "Iphone",
    explanation: "Toma los Iphone📱 lovers! 🥰🥰",
  },
  {
    action: "Hermanos",
    explanation: "Toman los que tengan hermanos 👨‍👨‍👧‍👧",
  },
  {
    action: "Par",
    explanation: "Toman los que jugadores que tenga años pares! 🎯",
  },
  {
    action: "Compartir",
    explanation: "Reparte el número de tragos 🥃, del numero del dado 🎲",
  },
  {
    action: "Tú y?",
    explanation: "Tomas tú y otra persona que elijas 👩🏿‍🤝‍🧑🏿",
  },
  {
    action: "Historia",
    explanation:
      "El jugador en turno, debe contar una historia vergonzante 🤦‍♀️(debe ser verdad), si todos consideran que es realmente humillante, toman sino, debes tomar tu 3 sorbos 🍺, por contar una historia tan mala 🙄",
  },
  {
    action: "El mas largo",
    explanation:
      "El jugador con el nombre más largo toma 👩🏼‍🦳, deberán sumar todos sus nombres y apellidos el número más alto gana!!!➕ ",
  },
  {
    action: "Mudo",
    explanation:
      "El jugador en esta casilla deberá permanecer callado 🤐 hasta que finalice el turno, cada vez que hable 😯, deberá tomar un trago 🍹",
  },
  {
    action: "¿Quien soy?",
    explanation:
      "El jugador actual, deberá pensar en una alguien famoso 👑, y los otros jugadores deben adivinar quién es ❓, haciendo preguntas de si o no, y el jugador actual deberá responderlas, hasta que alguien adivine 🙋🏼‍♀️. Toman un trago los perdedores.  ",
  },
  {
    action: "Toman los hombres!",
    explanation: "Es momento de brillar chicos 🧑🍺",
  },
  {
    action: "Toma el más pequeño!",
    explanation: "Toma el más joven de los jugadores 👶",
  },
  {
    action: "Crea una regla",
    explanation:
      "Crea una regla 😈 que deba ser cumplida por todos los jugadores (tú incluido), que se mantendrá por todo el juego (la regla puede ser eliminada por alguien que caiga en esta casilla). ",
  },
  {
    action: "Karaoke",
    explanation:
      "Elije una canción de tu gusto la cual sepas la letra y cantala 🎙, los jugadores que no canten la letra 🎼 deberan tomar 1 sorbo. La canción pára una ves que el jugador lo estime conveniente o todos ya hayan perdido. Si el jugador que elijio la canción no se sabe la canción y en partes tararea o tan solo no canta, debera pagar con 3 sorbos 🥃",
  },
  {
    action: "Fantasma",
    explanation:
      "Ninguno de los jugadores te puede nombrar 🧙‍♀️, el jugador que te nombre deberá pagar con un 🍶. Esto dura hasta que otro jugador caiga en una casilla fantasma y obtenga este beneficio",
  },
  {
    action: "Toman las Mujeres!",
    explanation: "Es momento de brillar chicas 👸🍺",
  },
  {
    action: "Android",
    explanation: "Toma los android lovers! 🥰🥰",
  },
  {
    action: "Impar",
    explanation: "Todos lo que hayan nacido en un año impar toman! 😆",
  },
  {
    action: "Zona cultural",
    explanation:
      "Haz una pregunta, que tenga varias respuestas quien no sepa la respuesta a la pregunta toma 🙋🏻‍♀️",
  },
  {
    action: "Silbar",
    explanation:
      "Tiene que aguantar todo un turno silbando, si no lo logra, toma 🥤",
  },
  {
    action: "Solteros",
    explanation: "Toman los solteros! 💁🏾‍♀️",
  },
  {
    action: "Verdad o reto",
    explanation:
      "Escoge a cualquier jugador y preguntale verdad o reto? 🤜🏾 Si no cumple o no hace el reto, debe tomar un trago 🍸",
  },
  {
    action: "Historia",
    explanation:
      "El jugador en turno, debe contar una historia vergonzante 🤦‍♀️(debe ser verdad), si todos consideran que es realmente humillante, toman sino, debes tomar tu 3 sorbos 🍺, por contar una historia tan mala 🙄",
  },
  {
    action: "Piedra papel o tijeras",
    explanation:
      "Escoge cualquier jugador de la mesa y desafialo 🗡a piedra papel o tijera, el que pierda debe tomar 🖐🏼👊🏼🖖🏼",
  },
  {
    action: "Descripción",
    explanation:
      "El jugador en turno, deberá escoger una personalidad famosa 😎 y describirla, el primer jugador que lo descubra gana, el resto de los perdedores toma un trago 🍺",
  },
  {
    action: "Zona libre",
    explanation: "Ya casi ganas! un trago para festejar!! 🍷🍸🍹🍶🍺🥃〽",
  },
];

export const actions: Action[] = partialActions.map((action, index) => ({
  ...action,
  id: index + 1,
}));
