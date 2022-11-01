// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return (`This Saturday, I want to ${activity}!`);
}
saturdayFun();

const mondayWork = function (action = "go to the office") {
    return (`This Monday, I will ${action}.`);
}
mondayWork();

const wrapAdjective = function (eee = '*') {
return function attaboy (adj = 'really good'){
    return `You are ${eee}${adj}${eee}!`
}
}
wrapAdjective('!')
