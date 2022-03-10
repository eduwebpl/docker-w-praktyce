class Container {
   constructor() {
     // run our web application
   }
}

class Image {
  constructor() {
    // create a template
  }
  
  createContainer(data) {
    return new Container(data, this);
  }
  
}

class Dockerfile {
  build() {
    // installing and setting up the dependencies
    // ... 
    return new Image();
  }
}


const phpImage = new Dockerfile.build();
const phpContainer = phpImage.createContainer();
const phpContainer2 = phpImage.createContainer();