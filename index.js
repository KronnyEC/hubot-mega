// Description:
//   hubot-mega is a collection of automatic responses and commands
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//    go for it, gopherit, gopher it, goes for it, going for it: gopher surprise
//

module.exports = function (robot) {
  // A list of responses for hubot. Each response should consist of either
  // a 'hear' or 'respond' regex. 'hear' will reply if the regex is in any
  // message, 'respond' will only reply if the message is directed at the bot.
  // The responses must also include either a 'send' or 'reply' array, which
  // a response will be chosen randomly from. If using 'send', the bot will
  // just say the response, if using 'reply', the bot will reply to whoever
  // said the phrase.
  var responses = {
    gopherit: {
      hear: /(go for it)|(gopherit)|(gopher it)|(goes for it)|(going for it)/i,
      send: [
        'https://www.youtube.com/watch?v=y8Kyi0WNg40',
        'http://i.imgur.com/YGtEqGT.jpg',
        'http://www.sixprizes.com/wp-content/uploads/gopher_caddyshack.jpg',
        'http://i.imgur.com/Y51RUi0.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Urocitellus_columbianus_Alberta_Martybugs.jpg/220px-Urocitellus_columbianus$',
        'http://colourlovers.com.s3.amazonaws.com/blog/wp-content/uploads/2008/09/cg/Gopher-Broke.jpg',
        'http://www.bakingdom.com/wp-content/uploads/2010/09/caddyshack-gopher.jpg',
        'http://www.quickmeme.com/img/8e/8eb558b54f0a0522520d05f4c990536b646e63b1d42d8984fbc42ff082a05ee1.jpg',
        'http://weknowmemes.com/generator/uploads/generated/g1381159009196981166.jpg',
        'http://www.quickmeme.com/img/6f/6f8cb22cc6aff2709fc3d760b85b84f6fdbcb4aca0285bd40d8c5a7f74280f9b.jpg',
        'https://i.chzbgr.com/maxW500/1415148288/hF21C98D1/',
        'http://i.huffpost.com/gen/1365387/thumbs/n-BILL-MURRAY-CADDYSHACK-large570.jpg',
        'http://cdn.cutestpaw.com/wp-content/uploads/2012/06/l-Gopher-greeting.jpg',
        'http://www.lawlz.org/wp-content/uploads/2012/07/gopher-tech-support-have-you-tried-chewing-on-the-cable-computer-meme.jpg',
        'http://www.tnt-audio.com/jpeg/gopher.jpg',
        'http://dailypicksandflicks.com/wp-content/uploads/2012/01/stand-back-i-got-this-gopher.jpg',
        'http://funnyasduck.net/wp-content/uploads/2012/12/funny-fat-squirrel-gopher-groundhog-egg-atop-burger-dont-mind-if-do-pics.jpg',
        'http://notalwaysrelated.com/wp-content/uploads/2012/11/3r7hje.jpeg',
        'http://farm3.staticflickr.com/2268/1992861119_88028372b1_o.jpg',
        'http://www.zerotocruising.com/wp-content/uploads/2013/04/groundhog.jpg',
      ]
    },
    bluesBrothers: {
      hear: /(blues brothers)/i,
      reply: [
        'We\'re on a mission from God'
      ]
    },
    bluesBrothersHitIt: {
      hear: /(106 miles to Chicago)/i,
      reply: [
          'hit it'
      ]
    },
    bluesBrothersNazis: {
      hear: /(Illinois Nazis)/i,
      reply: [
          'I hate Illinois Nazis.'
      ]
    },
    seenTheLight: {
	hear: /(seen the light)/i,
	reply: [
	  'YES! YES! JESUS H. TAP-DANCING CHRIST... I HAVE SEEN THE LIGHT!'
	]
    }

  };

  // Generate responses based on the config file
  Object.keys(responses).forEach(function (key) {
    var response = responses[key];
    if (response.hear) {
      robot.hear(response.hear, function (msg) {
        "use strict";
        if (response.reply) {
          msg.reply(msg.random(response.reply));
        } else if (response.send) {
          msg.send(msg.random(response.send))
        }
      });
    } else if (response.respond) {
      robot.respond(response.response, function (msg) {
        if (response.reply) {
          msg.reply(msg.random(response.reply));
        } else if (response.send) {
          msg.send(msg.random(response.send))
        }
      });
    }
  });
};
