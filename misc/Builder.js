'use strict';

function AnimalSounds() {}

AnimalSounds.prototype.cow = function() {
    console.log("moo");
    return this;
}

AnimalSounds.prototype.pig = function() {
    console.log("oink");
    return this;
}

AnimalSounds.prototype.dog = function() {
    console.log("woof");
    return this;
}

var sounds = new AnimalSounds();

sounds.cow();
sounds.pig();
sounds.dog();

sounds.cow().pig().dog();
