'use strict'
import test from 'tape'


test('array reduce', (assert) => {

    // reduce repeated data
    let source = [
        {
            name: "Anna",
            group: "Women"
      },
        {
            name: "Carl",
            group: "Men"
      },
        {
            name: "Anna",
            group: "Women"
      },
        {
            name: "Carl",
            group: "Men"
      },
        {
            name: "Anna",
            group: "Women"
      },
    ];

    let reducer = (accumulator, currentValue) => {
        accumulator[currentValue.group] = currentValue;
        return accumulator;
    }
    let setGroups = source.reduce(reducer, {});
    let result = Object.keys(setGroups).map((key)=>setGroups[key]);

    assert.comment(JSON.stringify(result));
    assert.same(result, [
        {
            name: "Anna",
            group: "Women"
      },
        {
            name: "Carl",
            group: "Men"
      },
    ]);
    assert.end();
});
