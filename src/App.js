import React, { Component } from "react";
import Card from "./components/Card";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Container from "./components/Container";
import Row from "./components/Row";
import Column from "./components/Column";
import pokemon from "./components/Pokemon.json";

function shufflePokemon(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  // Set this.state
  state = {
    pokemon,
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
    clicked: [],
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({clicked:this.state.clicked.concat(id)});
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      rightWrong: ""
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 24) {
      this.setState({ rightWrong: "You clicked them all!" });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      rightWrong: "You already picked that Pokémon!!",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledPokemon = shufflePokemon(pokemon);
    this.setState({ pokemon: shuffledPokemon });
  };

  render() {
    return (
      <Wrapper>
        <Nav
          title="Pokémon Memory Game"
          rightWrong={this.state.rightWrong}
          score={this.state.currentScore}
          topScore={this.state.topScore}
        />

        <Header>
            Click each Pokémon Picture, but don't click the same picture twice!
        </Header>

        <Container>
          <Row>
            {this.state.pokemon.map(pokemon => (
              <Column size="md-3 sm-6">
                <Card
                  key={pokemon.id}
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  handleShuffle={this.handleShuffle}
                  id={pokemon.id}
                  image={pokemon.image}
                />
              </Column>
            ))}
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default App;