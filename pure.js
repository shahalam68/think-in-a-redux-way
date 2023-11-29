const state = {
    value: 5,
};


function impure(multiplire){
    state.value = state.value * multiplire;
}
impure(2);
console.log(state.value);