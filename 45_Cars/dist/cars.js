"use strict";
function storeCareInfo(manufacture, modelName, ...extraOption) {
    const carInfo = Object.assign({ manufacture,
        modelName }, Object.assign({}, ...extraOption));
    return carInfo;
}
;
let anserwer = storeCareInfo(`Honda`, `civic`, { color: `black` }, { feathuers: [`navigation`, `power window`] });
console.log(anserwer);
