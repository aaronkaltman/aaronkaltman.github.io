/********************************

Author: Aaron k. Altman
Date: 10:51 PM


 ********************************/


 module.exports = function(robot) {
  //  YOUR CODE HERE
  //  Example
   // give bot cat emoji
   bot.on('start', function() {
     // more information about additional params https://api.slack.com/methods/chat.postMessage
     var params = {
       icon_emoji: ':cat:'
     };

     // define channel, where bot exist. You can adjust it there https://my.slack.com/services
     bot.postMessageToChannel('general', 'meow!', params);

     // define existing username instead of 'user_name'
     bot.postMessageToUser('aaronkaltman', 'meow!', params);
   });
     //`.hear` command listens for a specific phrase anywhere in the Slack room. You don't have to mention
  //your Hubot in order to get a response.
  robot.hear(/Hello!/, function(res) {
    return res.send("what do you want?");
  });
   // hear about food
   robot.hear(/http/, function(res){
     return res.send("Cool website");
   });
//`.respond` is similar to `.hear`, except it will only be triggered when someone specifically mentions
//the Hubot using `@`, or sends a direct message
robot.respond(/What's your favorite food?/, function(res) {
  return res.send("I'm a robot--what's your favorite food?");
});

robot.respond(/Hi Hubot! My name is (.*)/i, function(msg) {
  var name;
  name = msg.match[1];
  if (name == "Hubot") {
    return msg.send("You're not Hubot--I'm Hubot!");
  } else {
    return msg.reply("Nice to meet you, " + name + "!");
  }
  ;
};
 }
