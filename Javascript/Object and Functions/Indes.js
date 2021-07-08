let container = {
  name: "Aoufi abderahmane",
  log: function () {
    let self = this;
    this.name = "Aoufi tarek";
    console.log(this); // ! this will point to the current object
    let setName = function () {
      console.log(self); // ! this will point to the global object !! but we will fixe it
      this.name = "Hemmad Maissa";
    };
    setName();
  },
};

function log() {
  console.log(this); // ! this will point to the global object
  this.hoby = "Demain";
}

log();

const holder = function () {
  console.log(this); // ! this will point to the global object again !!
};

const bigholder = { 
  anonymHolder: () => {
    console.log(this);
  },
};

const holderr = function () {
  small();
  function small() {
    console.log(this);
  }
};

// holderr();
