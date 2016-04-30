'use strict'
import test from 'tape'


test('object assign', (assert) => {
    let a = {
        astring: "TEXT",
        aboolean: true
    };
    let b = {
        anumber: 100
    }
    let result = Object.assign({
        target: 'this'
    }, a, b);

    assert.comment(`${result}`);
    assert.same(result, {
        astring: "TEXT",
        aboolean: true,
        anumber: 100,
        target: 'this'
    });
    assert.end();
});


test('object properties', (assert) => {
    let object = {
        astring: "TEXT",
        aboolean: true,
        anumber: 100,
        target: 'this'
    };

    let properties = [];
    for (let property in object) {
        if (object.hasOwnProperty(property)) {
            properties.push(property);
        }
    }

    assert.comment(`${properties}`);
    assert.same(properties, [
        'astring', 'aboolean', 'anumber', 'target'
    ]);
    assert.end();
});
