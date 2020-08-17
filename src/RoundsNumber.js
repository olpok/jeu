import React from 'react'


function RoundsNumber() {
    let rounds = prompt("entrez le nombre de tours ");
    let n = 1;

    for (n = 1; n <= rounds; n++) {
        let msg = ' Tour ' + n;
        alert(msg);
    }
    alert('La partie est terminée!');

    return <p> Résultat de la partie </p>

}

export default RoundsNumber;