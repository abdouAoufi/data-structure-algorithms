function toCamelCase(str){
    let splited = str.split("");
    for (let i = 0; i < splited.length; i++) {
      if (splited[i] === "-" || splited[i] === "_") {
        splited[i] = "";
        if (splited[i + 1].toUpperCase() !== splited[i + 1]) {
          splited[i + 1] = splited[i + 1].toUpperCase();
        }
      }
    }
    if (splited[0].toUpperCase() == splited[0]) {
      splited[0] = splited[0].toLowerCase();
    }
    return (splited.join(""));
  }

console.log(toCamelCase("A-B-C"));
