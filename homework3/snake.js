let end = false;
let moving = false;
let head = {x:10, y:200};
let direction = "right";

let visited = [];
let curHead = {};

setInterval(snake, 75);

function snake() {
    let context = document.getElementById("snake").getContext("2d");
    context.fillStyle = "#ff2121";
    
    if (!end) {
        if (moving) {
            switch (direction) {
                case "right":
                    head.x += 1;
                    break;
                case "up":
                    head.y -= 1;
                    break;
                case "left":
                    head.x -= 1;
                    break;
                case "down":
                    head.y += 1;
                    break;
                default:
                    break;
            }

            curHead = {x:head.x, y:head.y};
            visited.push(curHead);
    
            context.rect(Number(head.x), Number(head.y), 5, 5);
            context.fill();

            if (aboutToCollide()) {
                end = true;
            }
        }
    }
}

function turnLeft() {
    switch (direction) {
        case "right":
            direction = "up";
            break;
        case "up":
            direction = "left";
            break;
        case "left":
            direction = "down";
            break;
        case "down":
            direction = "right";
            break;
        default:
            break;
    }
}

function turnRight() {
    switch (direction) {
        case "right":
            direction = "down";
            break;
        case "down":
            direction = "left";
            break;
        case "left":
            direction = "up";
            break;
        case "up":
            direction = "right";
            break;
        default:
            break;
    }
}

function toggleStartStop() {
    (moving) ? moving = false : moving = true;
    (document.getElementById("toggle").value === "Start") ?
    document.getElementById("toggle").value = "Stop" :
    document.getElementById("toggle").value = "Start";
}

function aboutToCollide() {
    let collision = false;
    switch (direction) {
        case "right":
            if (head.x >= 1000 || containsCoordinate(head.x + 1, head.y))
            collision = true;
            break;
        case "down":
            if (head.y >= 500 || containsCoordinate(head.x, head.y + 1))
            collision = true;
            break;
        case "left":
            if (head.x <= 0 || containsCoordinate(head.x - 1, head.y))
            collision = true;
            break;
        case "up":
            if (head.y <= 0 || containsCoordinate(head.x, head.y - 1))
            collision = true;
            break;
        default:
            break;
    }

    return collision;
}

function containsCoordinate(x, y) {
    for (var i = 0; i < visited.length; i++) {
        if (visited[i].x === x && visited[i].y === y) {
            return true;
        }
    }

    return false;
}
