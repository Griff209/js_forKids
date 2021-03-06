//Adapted from JavaScript for Kids, Chapter 3 Programming Challenges

function complimentGenerator() {
  //store globals in their own object to avoid name clashes - could also use let in the lower functions, const here
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
  
  function remove(key) {
    return key != this;
  }
  //main function
  function buildCompliment(name = "Friend", unused) {
    var quality, adjective, noun, compliment;
    //quality, adjective, and noun are of equal length 
    //quality.length of 0 means we've exhausted the options: reset
    if (unused.quality.length === 0) {
      unused = Object.assign({}, globals.unused);
    }
    quality = pick(unused.quality);
    adjective = pick(unused.adjective);
    noun = pick(unused.noun);
    if(window.confirm("Care for a compliment?")) {
      if (name === "Friend") {
        name = window.prompt("What shall I call you?", "Friend");
      }
      while (name === null) {
        var sure = window.confirm("Are you sure you care for a compliment?");
        if (sure) {
          name = window.prompt("What shall I call you?", "Friend");
        }
        if (!sure) {
          return window.alert("Ok, let me know if you change your mind");
        }
      }
     compliment = `${name}, your ${quality} makes me feel like ${adjective} ${noun}`;
     window.alert(compliment);
     unused.quality = unused.quality.filter(remove, quality);
     unused.adjective = unused.adjective.filter(remove, adjective);
     unused.noun = unused.noun.filter(remove, noun);
     buildCompliment(name, unused);
    }
  };
  buildCompliment("Friend", Object.assign({}, globals.unused));
};
