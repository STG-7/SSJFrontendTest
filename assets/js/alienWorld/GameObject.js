import GameEnv from './GameEnv.js';

class GameObject {
    constructor(canvas, image, speedRatio) {
        this.x = 0;
        this.y = 0;
        this.frame = 0;
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.image = image;
        this.width = image.width;  // Image() width (meta data)
        this.height = image.height; // Image() height
        this.collisionWidth = 0;
        this.collisionHeight = 0;
        this.aspect_ratio = this.width / this.height;
        this.speedRatio = speedRatio;
        this.speed = GameEnv.gameSpeed * this.speedRatio;
    }

    // X position getter and setter
    getX() {
        return this.x;
    }

    setX(x) {
        this.x = x;
    }

    // Y position getter and setter
    getY() {
        return this.y;
    }

    setY(y) {
        this.y = y;
    }

    /* Collision detection method
     * usage: if (player.isCollision(platform)) { // action }
    */
    isCollision(otherGameObject) {
        return (
            this.x + this.collisionWidth > otherGameObject.x &&
            this.x < otherGameObject.x + otherGameObject.collisionWidth &&
            this.y + this.collisionHeight > otherGameObject.y &&
            this.y < otherGameObject.y + otherGameObject.collisionHeight
        );
    }
}

export default GameObject;
