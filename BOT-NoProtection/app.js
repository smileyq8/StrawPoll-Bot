const botPoll = require('strawpoll-bots').default;
console.log("Iniciando bot :)");

// Args: (url, optionID, protection, socksFilePath, amount)
botPoll('https://strawpoll.com/ocfa6k8xe', 2, false, null, 500);
