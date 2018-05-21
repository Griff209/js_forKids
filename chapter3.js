//adapted from insult generator challenge
function complimentGenerator() {
  var pick, unused, used, buildCompliment;
  pick = function(array) {
    var index = Math.floor(Math.random() * array.length);
    return array[index];
  }
  unused = {quality: ["sense of humor", "smile", "curiosity", "charm", "manners", "intelligence", "quick wit"],
            adjective: ["bright", "warm", "a fresh", "the world's greatest", "superlative", "my favorite", "the best"],
            noun: ["wildflowers", "hugs", "sunny day", "apple pie", "afternoon in the garden", "chicken soup", "cuppa joe"]
          };
  used = {quality: [], adjective: [], noun: []};
  buildCompliment = function(name = "Friend", unused, used) {
    var quality, adjective, noun, compliment;
    if (unused.quality.length === 0) {
      unused = Object.assign({}, used);
    }
    quality = pick(unused.quality);
    adjective = pick(unused.adjective);
    noun = pick(unused.noun);
    if(window.confirm("Care for a compliment?")) {
      if((name === null) || (name === "Friend")) {
        name = window.prompt("Howdy. What's your name?", "Friend");
      }
     compliment = `${name}, your ${quality} makes me feel like ${adjective} ${noun}`;
     window.alert(compliment);
     used.quality.push(quality);
     used.adjective.push(adjective);
     used.noun.push(noun);
     unused.quality = unused.quality.filter((qual => qual != this), quality);
     unused.adjective = unused.adjective.filter((qual => qual != this), adjective);
     unused.noun = unused.noun.filter((qual => qual != this), noun);
     buildCompliment(name, unused, used);
    }
  };
  buildCompliment("Friend", unused, used);
}
complimentGenerator();
