import React, { Component } from 'react'

class SentenceForm extends Component {
    initialState = {
        string: '',
    }
    state = this.initialState


    handleChange = (e) => {
        this.setState({
            string: e.target.value
        })
    }

    submitForm = () => {
        //  alert('OK : ' + this.state.string);
        this.props.handleSubmit(this.state.string)
        this.setState(this.initialState)
    }

    render() {
        const { string } = this.state; // transmission de string soumis à state

        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Votre phrase"
                    id="string"
                    value={string}
                    onChange={this.handleChange} />
                <input type="button" value="Ajouter" onClick={this.submitForm} />
            </form>

        );
    }
}

export default SentenceForm;