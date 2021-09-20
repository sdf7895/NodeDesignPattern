const stampit = require('stampit');


/*
    props : 초기화를 해준다
    compose 를 해줬을때 this 로 접근해주면된다
*/
const character = stampit().
    props({
        name: 'anonymous',
        lifePoints: 100,
        x: 0,
        y: 0
    });

const mover = stampit().
    methods({
        move(xIncr, yIncr){
            this.x += xIncr;
            this.y += yIncr;
            console.log(`${this.name} moved to [${this.x}, ${this.y}]`);
        }
    });

const slasher = stampit()
    .methods({
        slash(direction){
            console.log(`${this.name}`);
        }
    });

const shooter = stampit()
    .props({
        bullets : 6
    })
    .methods({
        shoot(direction) {
            if (this.buillets > 0){
                --this.bullets;
                console.log(`${this.name}`)
            }
        }
    });


const runner = stampit.compose(character, mover);
const samurai = stampit.compose(character, mover, slasher);
const sniper = stampit.compose(character,shooter);
const gunslinger = stampit.compose(character,mover,shooter);
const westernSamurai = stampit.compose(gunslinger,samurai);

const gojiro = westernSamurai();

gojiro.name = 'Kiryu';
gojiro.move(1,0);
gojiro.slash('left');
gojiro.shoot('right');

