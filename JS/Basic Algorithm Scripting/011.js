// Title Case a Sentence

function titleCase(str) {
    let s = str.toLowerCase()
    
    return s.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
  
  }
  
  console.log(titleCase("I'm a little tea pot"))