let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A
let varAux;

console.log(varA, varB, varC);

varAux = varA;
varA = varB;
varB = varC;
varC = varAux;

console.log(varA, varB, varC);

[varA, varB, varC] = [varC, varA, varB];

console.log(varA, varB, varC);