class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase()+ string.slice( 1 )
  }

  static sanitize(string){
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(string){
    //string is a word here
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    //first letter to capitalize
    let stringToCapitalize = string.charAt(0).toUpperCase() + string.slice(1)
    //array of capitalized first letters
    let array = stringToCapitalize.split(" ")
    return array.map(string => {
      if (exceptions.includes(string)) {
        return string
      } else {
        return string.charAt(0).toUpperCase() + string.slice(1)
      }
    }).join(" ")




  }
  }
