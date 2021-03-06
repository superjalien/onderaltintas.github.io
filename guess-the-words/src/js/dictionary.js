function Dictionary(){
  this.puzzles = [{
    sentence: "Eclipse",
    difficulty: 1,
    category: "IDE",
    hint: "JAVA",
    hintPicture: "http://www.moc.com/a.jpg"
  },{
    sentence: "Apple",
    difficulty: 1,
    category: "Vegetable",
    hint: "Red",
    hintPicture: "http://www.moc.com/a.jpg"
  },{
    sentence: "Pencil",
    difficulty: 1,
    category: "School",
    hint: "Writes",
    hintPicture: "http://www.moc.com/a.jpg"
  },{
    sentence: "Terminator 2",
    difficulty: 2,
    category: "Movies",
    hint: "I'll back",
    hintPicture: "http://www.moc.com/a.jpg"
  },{
    sentence: "Mortal Kombat",
    difficulty: 2,
    category: "Games",
    hint: "C with K",
    hintPicture: "http://www.moc.com/a.jpg"
  },{
    sentence: "I will be back",
    difficulty: 3,
    category: "Movie quotes",
    hint: "I'll back",
    hintPicture: "http://www.moc.com/a.jpg"
  },{
    sentence: "Astala vista baby",
    difficulty: 3,
    category: "Movie quotes",
    hint: "I'll back",
    hintPicture: "http://www.moc.com/a.jpg"
  },{
    sentence: "This statement is false",
    difficulty: 3,
    category: "Game quotes",
    hint: "Portal 2",
    hintPicture: "http://www.moc.com/a.jpg"
  }]
}

Dictionary.prototype.getDifficulties = function(){
  var difficulties = [];
  for(var i = 0; i < this.puzzles.length;i++){
    var found = false;
    for(var j = 0; j < difficulties.length;j++){
      if(this.puzzles[i].difficulty === difficulties[j]){
        found = true;
      }
    }
    
    if(!found){
      difficulties.push(this.puzzles[i].difficulty);
    }
  }
  
  return difficulties;
}

Dictionary.prototype.getPuzzle = function(difficulty){
  var puzzlesFiltered = [];
  for(var i = 0 ; i < this.puzzles.length; i++){
    if(this.puzzles[i].difficulty === difficulty){
      puzzlesFiltered.push(this.puzzles[i]);
    }
  }
  
  var rnd = Math.floor(Math.random() * puzzlesFiltered.length);
  return puzzlesFiltered[rnd];
}
