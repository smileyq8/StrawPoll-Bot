const botPoll = require('strawpoll-bots').default;
console.log("Iniciando bot :)");

// Args: (url, optionID, protection, socksFilePath, amount)
botPoll('https://www.strawpoll.me/45236758', 2, false, null, 100);
