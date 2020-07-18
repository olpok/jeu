import React from 'react'

function CompareStrings(props) {
    let s1 = props.str1
    let s2 = props.str2


    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();
    var costs = [];
    for (var i = 0; i <= s1.length; i++) {
        var lastValue = i;
        for (var j = 0; j <= s2.length; j++) {
            if (i === 0)
                costs[j] = j;
            else {
                if (j > 0) {
                    var newValue = costs[j - 1];
                    if (s1.charAt(i - 1) !== s2.charAt(j - 1))
                        newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;

                    costs[j - 1] = lastValue;
                    lastValue = newValue;
                }
            }
        }
        if (i > 0)
            costs[s2.length] = lastValue;

    }

    var editDistance = costs[s2.length]

    var longer = s1;

    if (s1.length < s2.length) {
        longer = s2;
    }

    var longerLength = longer.length;
    if (longerLength === 0) {
        return 1.0;
    }

    var similarity = (longerLength - editDistance) / parseFloat(longerLength);
    const perc = Math.round(similarity * 10000) / 100;

    return <p>Les phrases: '{props.str1}' et '{props.str2}' sont similaires à {perc} % </p>;

}


export default CompareStrings;