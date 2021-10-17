const {getElectronegativyDiff, getBondType} = require('./src/bonds/bonds.js')


/* Pruebas */
getElectronegativyDiff("N", "H").then(res => console.log(res)) // 0.84
getBondType("N", "H").then(res => console.log(res)) // Polar
getBondType("F", "Ca").then(res => console.log(res)) // Ionico
getBondType("Cl", "Cl").then(res => console.log(res)) // Covalent