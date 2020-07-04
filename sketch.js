var database;
var drawing=[];

function setup(){
   var canvas = createCanvas(500,500);
    var firebaseConfig = {
        apiKey: "AIzaSyDBDoCecesqOyDz8Wg4hrj682MQVbxqFw0",
        authDomain: "paint-game-52a39.firebaseapp.com",
        databaseURL: "https://paint-game-52a39.firebaseio.com",
        projectId: "paint-game-52a39",
        storageBucket: "paint-game-52a39.appspot.com",
        messagingSenderId: "473048792786",
        appId: "1:473048792786:web:9dc84237d57cc05f87770b"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
    database= firebase.database();

}

function draw(){
    background(0);

    if(mouseIsPressed){
       var point = {
           x:mouseX,
           y:mouseY
       }

        drawing.push(point);
    }

    beginShape();
    stroke(255);
    strokeWeight(4);
    noFill()
    for(i = 0; i < drawing.length;i++){
        vertex(drawing[i].x,drawing[i].y);
    }
    endShape();

}



