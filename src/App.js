import React, { Component } from 'react'
import './App.css';

import CompareStrings from './CompareStrings'
import SentenceForm from './SentenceForm'
import SentenceList from './SentenceList';
import RoundsNumber from './RoundsNumber';
import Watson from './Watson';
import StringList from './StringList';
import ComparePhrases from './ComparePhrases'




class App extends Component {

  state = {
    sentences: ["Premier essai", "Deuxième essai"]
  };

  handleSubmit = (string) => {
    // alert('Le texte a été soumis : ' + string);
    this.setState({ sentences: [...this.state.sentences, string] })
  }

  handleStringSubmit = (string) => {
    alert('Le texte a été soumis : ' + string);
    // this.setState({ sentences: [...this.state.sentences, string] })
  }

  render() {


    const title = <h1> Tours <span> </span> </h1>;
    const new1 = "Oh my God "
    const new2 = "Coucou comment ça va"


    const { sentences } = this.state;

    return (

      <div className="App">

        {title}


        <SentenceForm handleSubmit={this.handleSubmit} />
        <SentenceList data={sentences} />

        <ComparePhrases />
        <CompareStrings str1={new1} str2={new2} />


        {/**<RoundsNumbers /> */}

        <Watson />

      </div >

    )
  }


}


export default App;
