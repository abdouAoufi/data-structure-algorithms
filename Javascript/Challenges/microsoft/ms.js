class OneDayArray {
  print(list) {
    let savedPattern = {};
    let holder = [];
    let result = "";
    list.forEach((path) => {
      const filtredPath = path
        .split("/")
        .filter((folder) => !folder.includes("."));
      filtredPath.forEach((folder) => {
        if (!savedPattern[folder]) {
          savedPattern[folder] = folder;
        }
      });
    });

    let constructedPaths;
    list.forEach((path, index) => {
      if (index === 0) {
        return holder.push(
          path.split("/").map((currentFolder) => {
            return currentFolder + " --> ";
          })
        );
      }
      let lastFolder = "";
      constructedPaths = path.split("/").map((currentFolder, index) => {
        if (currentFolder in savedPattern) {
          lastFolder = currentFolder;
          return ".".repeat(savedPattern[currentFolder].length) + " ";
        } else {
          if (lastFolder in savedPattern) {
            return savedPattern[lastFolder] + " --> " + currentFolder;
          } else {
            return currentFolder;
          }
        }
      });
      holder.push(constructedPaths);
    });
    holder.forEach((listInside) => {
      if (listInside.length > 1) {
        listInside.shift();
      }
      result += listInside.join("");
      result += "\n";
    });
    return result;
  }
}

function main() {
  const list = [];
  list.push("app/src/root/game/file1.cpp");
  list.push("app/src/root/game/file2.cpp");
  list.push("app/src/root/tool/file3.cpp");
  list.push("app/src/root/file4.cpp");
  list.push("app/data/file5.cpp");
  list.push("pop.xml");
  let result = new OneDayArray().print(list);
  console.log(result);
}

/*
  'app --> src --> root --> game --> file1.cpp',
  '..............................--> file2.cpp',
  '.....................--> tool --> file3.cpp',
  '.....................--> file4.cpp',
  '...--> data --> file5.cpp',
  '--> pop.xml'
*/

main();
