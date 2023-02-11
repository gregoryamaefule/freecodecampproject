function truthCheck(collection, pre) {
  for( const i of collection){
    if (!Boolean(i[pre])){
      return false
    }
  }
  return true;
}

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");