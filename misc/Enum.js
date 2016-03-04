'use strict';

let Enum = {
    STAGE0: {value: (1 << 0), name: 'stage-0', code: '0'},
    STAGE1: {value: (1 << 4), name: 'stage-1', code: '1'},
    STAGE1_1: {value: (2 << 4), name: 'stage-1.1', code: '1.1'},
    STAGE1_2: {value: (3 << 4), name: 'stage-1.2', code: '1.2'},
    STAGE1_3: {value: (4 << 4), name: 'stage-1.3', code: '1.3'},
    STAGE2: {value: (1 << 8), name: 'stage-2', code: '2'},
    STAGE2_1: {value: (2 << 8), name: 'stage-2.2', code: '2.1'},
    STAGE3: {value: (1 << 12), name: 'stage-3', code: '3'},
    STAGE3_1: {value: (2 << 12), name: 'stage-3.1', code: '3.1'},
    STAGE3_2: {value: (3 << 12), name: 'stage-3.2', code: '3.2'},
    STAGE4: {value: (1 << 16), name: 'stage-4', code: '4'},
    STAGE5: {value: (1 << 20), name: 'stage-5', code: '5'}
};

console.log(JSON.stringify(Enum.STAGE0));
console.log(JSON.stringify(Enum.STAGE1));
console.log(JSON.stringify(Enum.STAGE1_1));
console.log(JSON.stringify(Enum.STAGE1_2));
console.log(JSON.stringify(Enum.STAGE1_3));
console.log(JSON.stringify(Enum.STAGE2));
console.log(JSON.stringify(Enum.STAGE2_1));
console.log(JSON.stringify(Enum.STAGE3));
console.log(JSON.stringify(Enum.STAGE3_1));
console.log(JSON.stringify(Enum.STAGE3_2));
console.log(JSON.stringify(Enum.STAGE4));
console.log(JSON.stringify(Enum.STAGE5));
