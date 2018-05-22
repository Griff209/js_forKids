//adapted from insult generator challenge
//I opted for string interpolation over the suggestions below, but for the sake of completeness
//compliment =  [name, "your", quality, "makes", "me", feel, like, adjective, noun].join(" ");
//compliment=  name + "your" + quality + "makes me feel like" + adjective + noun;

function complimentGenerator() {
  //store globals in their own object to avoid name clashes - could also use let or const
  var globals = {};
  globals.unused = {quality: ["sense of humor", "kindness", "curiosity", "charm", "manners", "intelligence", "quick wit"],
            adjective: ["bright", "warm", "a fresh", "the world's greatest", "superlative", "my favorite", "the best"],
            noun: ["wildflowers", "hugs", "sunny day", "apple pie", "afternoon in the garden", "chicken soup", "cuppa joe"]
          };
  //utility functions
  function pick(array) {
    var index = Math.floor(Math.random() * array.length);
    return array[index];
  }
  
  function rmvKey(key) {
    return key != this;
  }
  //main function
  function buildCompliment(name = "Friend", unused, used) {
    var quality, adjective, noun, compliment;
    if (unused.quality.length === 0) {
      unused = Object.assign({}, globals.unused);
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
     unused.quality = unused.quality.filter(rmvKey, quality);
     unused.adjective = unused.adjective.filter(rmvKey, adjective);
     unused.noun = unused.noun.filter(rmvKey, noun);
     buildCompliment(name, unused, used);
    }
  };
  buildCompliment("Friend", Object.assign({}, globals.unused));
} 
complimentGenerator();