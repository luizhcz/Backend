const AssistantV1 = require('watson-developer-cloud/assistant/v1');

const assistant = new AssistantV1({
    iam_apikey: "0k_Rw5nLTMeXMIkJqkQid5PMaczrAfkih4u3XP1Vh1AM",
    url: 'https://gateway-wdc.watsonplatform.net/assistant/api',
    version: '2018-02-16',
  });


module.exports = assistant;