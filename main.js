Canvas= new fabric.Canvas("my_canvas");
var player_x=40;
var player_y=0;
var block_width=30;
var block_height=30;
var player_object="";
var block_object="";

function player_update(){
fabric.Image.fromURL("player.png", function(Img){
    player_object=Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
        top: player_y,
        left: player_x
    });
Canvas.add(player_object);
});
}
function new_block(get_img){
fabric.Image.fromURL(get_img, function(Img){
    block_object=Img;
    block_object.scaleToWidth(block_width);
    block_object.scaleToHeight(block_height);
    block_object.set({
        top: player_y,
        left: player_x
    });
    Canvas.add(block_object);
});
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
keypressed=e.keyCode;
console.log(keypressed);

if(e.shiftKey == true && keypressed=="80"){
    console.log("Shift + p, pressed");
    block_height= block_height + 10;
    block_width=block_width + 10;
    document.getElementById("Current_height").innerHTML=block_height;
    document.getElementById("Current_width").innerHTML=block_width;
}
if(e.shiftKey == true && keypressed=="77"){
    console.log("Shift + m, pressed");
    block_height= block_height - 10;
    block_width=block_width - 10;
    document.getElementById("Current_height").innerHTML=block_height;
    document.getElementById("Current_width").innerHTML=block_width;
}
if(keypressed == '38'){
up();
console.log("up");
}
if(keypressed == '40'){
    down();
    console.log("down");
    }
    if(keypressed == '37'){
        left();
        console.log("left");
        }
        if(keypressed == '39'){
            right();
            console.log("right");
            }
            if(keypressed == "87"){
                new_block("wall.jpg");
                console.log("w");
                }
                if(keypressed == "71"){
                    new_block("ground.png");
                    console.log("g");
                    }
if(keypressed == "76"){
new_block("light_green.png");
console.log("light_green");
}
if(keypressed == "84"){
    new_block("trunk.jpg");
    console.log("t");
    }
    if(keypressed == "82"){
        new_block("roof.jpg");
        console.log("r");
        }
        if(keypressed == "89"){
            new_block("yellow_wall.png");
            console.log("y");
            }
            if(keypressed == "68"){
                new_block("dark_green.png");
                console.log("dark_green");
                }
                if(keypressed == "67"){
                    new_block("cloud.jpg");
                    console.log("c");
                    }
                    if(keypressed == "85"){
                        new_block("unique.png");
                        console.log("u");
                        }
}

function up(){
    if(player_y>=0){
        player_y=player_y-block_height;
        console.log("block height:"+ block_height);
        console.log("when up arrow key is pressed,x="+ player_x+",y="+player_y);
        Canvas.remove(player_object);
        player_update();
    }
}
function down(){
    if(player_y<=500){
        player_y=player_y+block_height;
        console.log("block height:"+ block_height);
        console.log("when up arrow key is pressed,x="+ player_x+",y="+player_y);
        Canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if(player_x>=0){
        player_x=player_x-block_width;
        console.log("block height:"+ block_width);
        console.log("when up arrow key is pressed,x="+ player_x+",y="+player_y);
        Canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if(player_x>=0){
        player_x=player_x+block_width;
        console.log("block height:"+ block_width);
        console.log("when up arrow key is pressed,x="+ player_x+",y="+player_y);
        Canvas.remove(player_object);
        player_update();
    }
}