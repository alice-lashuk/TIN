function longestWord(str) {
    let splitted = str.split(' ');
    let n = 0;
    let word ='';
    for(let i = 0; i < splitted.length; i++) {
      if(splitted[i].length > n) {
        n = splitted[i].length;
        word = splitted[i];
       }
    }
    return word;
  }

  console.log(longestWord("You'll see the rainbow bridge after it rains cats and dogs"))
  console.log(longestWord("The irony of the situation wasn't lost on anyone in the room"))