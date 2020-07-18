import React from 'react'


function RoundsNumber(n) {
    let rounds = prompt("entrez le nombre de tours ");
    let cpt = 1;

    for (cpt = 1; cpt <= rounds; cpt++) {
        let msg = ' Tour ' + cpt;
        alert(msg);
    }
    alert('La partie est terminée!');

    return <p> Résultat de la partie </p>

}

export default RoundsNumber;