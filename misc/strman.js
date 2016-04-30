'use strict'
import test from 'tape'

import {
    replace
} from 'strman'


test('strman replace', (assert) => {
    let url = "/api/v1/resource";
    let result = replace(url, "/", "-");

    assert.comment(`${url} becomes ${result}`);
    assert.equals(result,"-api-v1-resource");
    assert.end();
});
