class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '')

  }

  static titleize(string){
    let sentence = string.split(" ")

    let nonCaps = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    return sentence.map(e => {
      if (!nonCaps.includes(e) || e === sentence[0]){
        return Formatter.capitalize(e)
      }
      else return e
    }).join(" ")




  }
}