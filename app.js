// Alexa Skill for BP Hackathon
// Team DroneSoc
// Written by Shreeyam Kacker, 2017-06-17

const Alexa = require('alexa-sdk'),
      http = require('http'),
      extensions = require('./extensions'),
      serverUrl =  '', // todo
      appId = 'amzn1.ask.skill.a8e13fd4-59cd-468f-ba76-724309587de3'; 

// Handler for intents
const handlers = {
    'TestIntent': function() {
        this.emit(':tell', 'Hey Nathan, nice face');
    },
    'DeliverIntent': function() {

    },
    'LandIntent': function() {

    },
    'GoHomeIntent': function() {

    },
    'SingIntent': function() {

    }
}

// Exports handler, called by Lambda
exports.handler = (event, context, callback) => {
    var alexa = Alexa.handler(event, context, callback);
    alexa.appId = appId;
    alexa.registerHandlers(handlers);
    alexa.execute();
};



