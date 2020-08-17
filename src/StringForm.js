import React, { Component } from 'react'

class StringForm extends Component {
    // Deplacer l'état local vers le parent ComparePhrases: Maintenir et sauvegarder le string dans le parent. On utilise le props pour lui envoyer le string s2
    //initialState = { string: '', }
    //  state = this.initialState


    handleChange = (e) => {
        //   this.setState({
        //       string: e.target.value})
        //     alert('TEST : ' + e.target.value);
        //alert('new1 : ' + this.props(e.target.value));
        this.props.handlePhraseSubmit(e.target.value)
    }

    submitStringForm = () => {
        alert('OK : ' + this.state.string);
        this.props.handleStringSubmit(this.state.string)
        //  this.setState(this.initialState)
    }

    submitPhraseForm = () => {
        console.log('ca marche');
        //  alert('OK : ' + this.state.string);
        //this.props.handlePhraseSubmit(this.state.string)
        //  this.setState(this.initialState)
    }

    render() {
        //const { string } = this.state; // transmission de string soumis à state
        const string = this.props.s2;//destructure
        return (<div>
            <form onSubmit={this.handlePhraseSubmit}>
                <input
                    type="text"
                    placeholder="Votre string"
                    id="string"
                    value={string}
                    onChange={this.handleChange} />
                <input type="button" value="Ajouter" onClick={this.submitPhraseForm} />
            </form>
            <p>{string}</p>
        </div>

        );

    }
}

export default StringForm;