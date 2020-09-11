import { Action } from "./types";

const partialActions: Omit<Action, "id">[] = [
  {
    action: "Everyone drinks!",
    explanation:
      "this doesn't need too much explanation, everyone should drink!!🍺",
  },
  {
    action: "Men drink!!",
    explanation: "Guys, it's your time to shine🧑🍺",
  },
  {
    action: "I have never ever",
    explanation:
      "The player must say I never… 🤷‍♀️‍ and then say something that they have never done, take those players who have done it 💁‍♂️",
  },
  {
    action: "The youngest person have to drink!!",
    explanation: "The baby of the group should drink! 👶",
  },
  {
    action: "Drinking culture",
    explanation:
      "Choose a category that comes to mind (Ex: Cigarette brands 🚬, television series 📺, etc) and name an element of it. Players must name others",
  },
  {
    action: "Create a rule!",
    explanation:
      "Create a rule 😈 that must be followed by all players (including you), which will be maintained throughout the game (the rule can be removed by someone who lands on this box).",
  },
  {
    action: "Joke!",
    explanation:
      "Tell a joke 😂 funny enough that it makes others laugh, those who laugh will drink 🍷",
  },
  {
    action: "Karaoke",
    explanation:
      "Choose a song of your liking which you know the lyrics and sing it 🎙, players who do not sing the lyrics 🎼 should take 1 sip. The song for once the player deems it appropriate or everyone has already lost. If the player who chose the song does not know the song and hums in parts or only does not sing, he must pay with 3 sips 🥃",
  },
  {
    action: "Auction",
    explanation:
      "Choose a category of your liking (Ex: Car brands, Beer brands, etc) offers the amount of elements of that category that you think you can name 🔢, any player can offer more than you, and so each one can upload the bet. When it is estimated that there will be no more offers, the auction is closed and the player offered more 💲, he must name the number of elements of that category which he offered, if he names them, he can give that amount of sips or distribute them among the players, but if the player does not name the amount he offered, he should take that amount",
  },
  {
    action: "Ghost",
    explanation:
      "None of the players can name you 🧙‍♀️, the player who names you must pay with a 🍶. This lasts until another player lands on a ghost square and gains this buff",
  },
  {
    action: "Would you rather?",
    explanation:
      "Questions you prefer, Ex: Coca-Cola or Pepsi, those who answer wrongly drink 🍹",
  },
  {
    action: "Women drink!",
    explanation: "Girls, it's your time to shine!",
  },
  {
    action: "The oldest person should drink!",
    explanation: "The oldest person in the group has to drink! 👵🏻",
  },
  {
    action: "Android",
    explanation: "Drink for android lovers! 🥰🥰",
  },
  {
    action: "Iphone",
    explanation: "Drink for iPhone lovers! 🥰🥰",
  },
  {
    action: "Odd",
    explanation:
      "All the players who were born in a odd year have to drink!.😆",
  },
  {
    action: "Siblings!",
    explanation: "All the players who has siblings should drink!👨‍👨‍👧‍👧",
  },
  {
    action: "Culture zone",
    explanation:
      "Ask a question, which has several answers who do not know the answer to the question should drink! 🙋🏻‍♀️",
  },
  {
    action: "Pair",
    explanation:
      "All the players who were born in a pair year have to drink!🎯",
  },
  {
    action: "Whistle",
    explanation:
      "The person has to whistler during all the turn, if the person won't make it, he must drink! 🥤",
  },
  {
    action: "Share",
    explanation:
      "Distribute the number of drinks 🥃, taking the number from the die 🎲",
  },
  {
    action: "Singles!",
    explanation: "All the singles in the game have to drink 💁🏾‍♀️",
  },
  {
    action: "You and ?",
    explanation:
      "You and another person that you choose have to drink! 👩🏿‍🤝‍🧑🏿",
  },
  {
    action: "truth or dare!",
    explanation:
      "Choose any player and ask him truth or dare? 🤜🏾 If you do not meet or do not do the challenge, you must have a drink 🍸",
  },
  {
    action: "Don't judge me but...",
    explanation:
      "The player in this box, must say something of which he is not so proud 🙍🏿‍♂️, take a sip 🍹 all those who judge him",
  },
  {
    action: "Story",
    explanation:
      "The player, in turn, must tell a shameful story 🤦‍♀️ (it must be true), if everyone considers that it is really humiliating, must drink! if not, you must take your 3 sips 🍺, for telling such a bad story 🙄",
  },
  {
    action: "Numbers of lovers!",
    explanation:
      "Players must drink 🍻 the number of people they have dated 👩🏻‍🤝‍🧑🏼",
  },
  {
    action: "Rock paper or scissors",
    explanation:
      "Choose any player at the table and challenge 🗡 to rock paper or scissors, whoever loses must drink! 🖐🏼👊🏼🖖🏼",
  },
  {
    action: "The longest",
    explanation:
      "The player with the longest name must drink! 👩🏼‍🦳, add all their names and surnames the highest number wins !!! ➕",
  },
  {
    action: "Description!",
    explanation:
      "The player in turn must choose a famous personality 😎 and describe it, the first player to discover it wins, the rest of the losers have a drink 🍺",
  },
  {
    action: "Mute",
    explanation:
      "The player in this box must remain silent 🤐 until the end of the turn, each time he speaks 😯, he must take a drink 🍹",
  },
  {
    action: "The alphabet game",
    explanation:
      "The player in turn begins by choosing a category (Eg: Movies 🎬) and naming something from that category that begins with the letter A. The current player 😋 decides who the next person is and must say something from that category now with the letter B and so on until there is a loser 😪. Example Movies (Avatar, Believe, Casablanca, Blood Diamond etc)",
  },
  {
    action: "Who am I?",
    explanation:
      "The current player must think of a famous someone 👑, and the other players must guess who it is ❓, asking yes or no questions, and the current player must answer them, until someone guesses 🙋🏼‍♀️. Losers have a drink.",
  },
  {
    action: "Follow the story",
    explanation:
      "Together with the other players, they must create a coherent story 🧾, which will be made up of 1 or 2 words, as the player prefers, per player. As soon as a player has to continue the story, if it takes too long, which causes continuity to be lost, he or she is automatically a loser 😫, and must take 1 sip 🥃",
  },
  {
    action: "Everyone drinks!",
    explanation:
      "this doesn't need too much explanation, everyone should drink!!🍺",
  },
  {
    action: "I have never ever",
    explanation:
      "The player must say I never… 🤷‍♀️‍ and then say something that they have never done, take those players who have done it 💁‍♂️",
  },
  {
    action: "Drinking culture",
    explanation:
      "Choose a category that comes to mind (Ex: Cigarette brands 🚬, television series 📺, etc) and name an element of it. Players must name others",
  },
  {
    action: "Joke!",
    explanation:
      "Tell a joke 😂 funny enough that it makes others laugh, those who laugh will drink 🍷",
  },
  {
    action: "Auction",
    explanation:
      "Choose a category of your liking (Ex: Car brands, Beer brands, etc) offers the amount of elements of that category that you think you can name 🔢, any player can offer more than you, and so each one can upload the bet. When it is estimated that there will be no more offers, the auction is closed and the player offered more 💲, he must name the number of elements of that category which he offered, if he names them, he can give that amount of sips or distribute them among the players, but if the player does not name the amount he offered, he should take that amount",
  },
  {
    action: "Is it a real story?",
    explanation:
      "Tell an anecdote of your life, when you finish the other players will have to decide if it was true or a lie, when all answered, it will be said if it was real or not. Those who make a mistake will take 1 sip 🍸",
  },
  {
    action: "The oldest person should drink!",
    explanation: "The oldest person in the group has to drink! 👵🏻",
  },
  {
    action: "Iphone",
    explanation: "Drink for iPhone lovers! 🥰🥰",
  },
  {
    action: "Siblings!",
    explanation: "All the players who has siblings should drink!👨‍👨‍👧‍👧",
  },
  {
    action: "Pair",
    explanation:
      "All the players who were born in a pair year have to drink!🎯",
  },
  {
    action: "Share",
    explanation:
      "Distribute the number of drinks 🥃, taking the number from the die 🎲",
  },
  {
    action: "You and ?",
    explanation:
      "You and another person that you choose have to drink! 👩🏿‍🤝‍🧑🏿",
  },
  {
    action: "Story",
    explanation:
      "The player, in turn, must tell a shameful story 🤦‍♀️ (it must be true), if everyone considers that it is really humiliating, must drink! if not, you must take your 3 sips 🍺, for telling such a bad story 🙄",
  },
  {
    action: "The longest",
    explanation:
      "The player with the longest name must drink! 👩🏼‍🦳, add all their names and surnames the highest number wins !!! ➕",
  },
  {
    action: "Mute",
    explanation:
      "The player in this box must remain silent 🤐 until the end of the turn, each time he speaks 😯, he must take a drink 🍹",
  },
  {
    action: "Who am I?",
    explanation:
      "The current player must think of a famous someone 👑, and the other players must guess who it is ❓, asking yes or no questions, and the current player must answer them, until someone guesses 🙋🏼‍♀️. Losers have a drink.",
  },
  {
    action: "Men drink!!",
    explanation: "Guys, it's your time to shine🧑🍺",
  },
  {
    action: "The youngest person have to drink!!",
    explanation: "The baby of the group should drink! 👶",
  },
  {
    action: "Create a rule!",
    explanation:
      "Create a rule 😈 that must be followed by all players (including you), which will be maintained throughout the game (the rule can be removed by someone who lands on this box).",
  },
  {
    action: "Karaoke",
    explanation:
      "Choose a song of your liking which you know the lyrics and sing it 🎙, players who do not sing the lyrics 🎼 should take 1 sip. The song for once the player deems it appropriate or everyone has already lost. If the player who chose the song does not know the song and hums in parts or only does not sing, he must pay with 3 sips 🥃",
  },
  {
    action: "Ghost",
    explanation:
      "None of the players can name you 🧙‍♀️, the player who names you must pay with a 🍶. This lasts until another player lands on a ghost square and gains this buff",
  },
  {
    action: "Women drink!",
    explanation: "Girls, it's your time to shine!",
  },
  {
    action: "Android",
    explanation: "Drink for android lovers! 🥰🥰",
  },
  {
    action: "Odd",
    explanation:
      "All the players who were born in a odd year have to drink!.😆",
  },
  {
    action: "Culture zone",
    explanation:
      "Ask a question, which has several answers who do not know the answer to the question should drink! 🙋🏻‍♀️",
  },
  {
    action: "Whistle",
    explanation:
      "The person has to whistler during all the turn, if the person won't make it, he must drink! 🥤",
  },
  {
    action: "Singles!",
    explanation: "All the singles in the game have to drink 💁🏾‍♀️",
  },
  {
    action: "truth or dare!",
    explanation:
      "Choose any player and ask him truth or dare? 🤜🏾 If you do not meet or do not do the challenge, you must have a drink 🍸",
  },
  {
    action: "Story",
    explanation:
      "The player, in turn, must tell a shameful story 🤦‍♀️ (it must be true), if everyone considers that it is really humiliating, must drink! if not, you must take your 3 sips 🍺, for telling such a bad story 🙄",
  },
  {
    action: "Rock paper or scissors",
    explanation:
      "Choose any player at the table and challenge 🗡 to rock paper or scissors, whoever loses must drink! 🖐🏼👊🏼🖖🏼",
  },
  {
    action: "Description!",
    explanation:
      "The player in turn must choose a famous personality 😎 and describe it, the first player to discover it wins, the rest of the losers have a drink 🍺",
  },
  {
    action: "I have never ever",
    explanation:
      "The player must say I never… 🤷‍♀️‍ and then say something that they have never done, take those players who have done it 💁‍♂️",
  },
  {
    action: "Drinking culture",
    explanation:
      "Choose a category that comes to mind (Ex: Cigarette brands 🚬, television series 📺, etc) and name an element of it. Players must name others",
  },
  {
    action: "Joke!",
    explanation:
      "Tell a joke 😂 funny enough that it makes others laugh, those who laugh will drink 🍷",
  },
  {
    action: "Auction",
    explanation:
      "Choose a category of your liking (Ex: Car brands, Beer brands, etc) offers the amount of elements of that category that you think you can name 🔢, any player can offer more than you, and so each one can upload the bet. When it is estimated that there will be no more offers, the auction is closed and the player offered more 💲, he must name the number of elements of that category which he offered, if he names them, he can give that amount of sips or distribute them among the players, but if the player does not name the amount he offered, he should take that amount",
  },
  {
    action: "Is it a real story?",
    explanation:
      "Tell an anecdote of your life, when you finish the other players will have to decide if it was true or a lie, when all answered, it will be said if it was real or not. Those who make a mistake will take 1 sip 🍸",
  },
  {
    action: "Mute",
    explanation:
      "The player in this box must remain silent 🤐 until the end of the turn, each time he speaks 😯, he must take a drink 🍹",
  },
  {
    action: "Free zone",
    explanation: "You almost won! a drink to celebrate !!🍷🍸🍹🍶🍺🥃〽",
  },
];

export const actions: Action[] = partialActions.map((action, index) => ({
  ...action,
  id: index + 1,
}));
