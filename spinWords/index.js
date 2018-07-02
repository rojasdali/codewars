function spinWords(str){
    //TODO Have fun :)
    const words = str.split(' ');
    
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > 4) {
        words[i] = words[i].split('').reverse().join('')
       
      }
    }
    return words.join(' ')
  }