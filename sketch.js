var ball;
var position, db;

function setup(){
    createCanvas(500,500);

    db = firebase.database();

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    var pos1 = db.ref('ball/position');
    pos1.on("value", readPosition , showError)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
                changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    db.ref('ball/position').set({
        x:position.x+x,
        y:position.y+y    })
}

function readPosition(data){
position=data.val();
ball.x =position.x;
ball.y=position.y;
}

function showError(){
    console.log("error")
}