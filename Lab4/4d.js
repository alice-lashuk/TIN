function sortAlph(str){
    let letters = str.split('');
    let temp;
    for(let i = 0; i < letters.length; i++){
      for(let j = i + 1; j < letters.length; j++){
        if(letters[i] > letters[j]){
          temp = letters[i];
          letters[i] = letters[j];
          letters[j] = temp;
        }
      }
    }
    return letters.join('');
  }


  console.log(sortAlph("webmaster"))