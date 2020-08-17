import React, { Component } from 'react'
import StringForm from './StringForm';

class ComparePhrases extends Component {

    initialState = {
        s1: "Je l'espère enfin",
        s2: ""
    }
    state = this.initialState

    handlePhraseSubmit = (string) => {
        // alert('Le texte a été soumis : ' + string);
        this.setState({ s2: string })
        // this.setState({ sentences: [...this.state.sentences, string] })
    }

    render() {

        var s1 = this.state.s1;
        var s2 = this.state.s2;

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

        var editDistance = costs[s2.length];

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

        return (

            <div>
                <StringForm s2={s2} handlePhraseSubmit={this.handlePhraseSubmit} />
                <h1>Bonjour! '{s1}' et '{s2}' sont similaires à {perc} % </h1>
            </div >
        );

    }

}


export default ComparePhrases;