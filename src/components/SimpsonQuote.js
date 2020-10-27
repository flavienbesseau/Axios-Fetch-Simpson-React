import axios from 'axios';
import React from 'react';

class SimpsonQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image:
        'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185',
      character: 'Nelson Muntz',
      quote:
        'Shoplifting is a victimless crime, like punching someone in the dark.',
      characterDirection: 'Left',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const url = 'https://thesimpsonsquoteapi.glitch.me/quotes';
    axios
      .get(url)
      .then((response) => response.data)
      .then((persons) => this.setState(persons[0]));
  }

  render() {
    const { image, character, quote, characterDirection } = this.state;
    return (
      <div>
        <img src={image} alt={character}></img>
        <h1>{character}</h1>
        <p>{quote}</p>
        <p>{characterDirection}</p>
        <button id="change" type="button" onClick={this.handleClick}>
          Change
        </button>
      </div>
    );
  }
}

export default SimpsonQuote;
