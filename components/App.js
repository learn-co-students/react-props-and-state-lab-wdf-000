const React = require('react');

const Filters = require('./Filters');
const PetBrowser = require('./PetBrowser');

class App extends React.Component {
  constructor() {
    super();
    this.handleFetch = this.handleFetch.bind(this);
    this.handleChangeType = this.handleChangeType.bind(this);
    this.handlePushArray = this.handlePushArray.bind(this);
    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }
  
  handlePushArray(id){
    this.setState({
      adoptedPets: [...this.state.adoptedPets,id],
    });
  }
  handleFetch() {
    var url = this.state.filters.type == 'all' ? '/api/pets' : `/api/pets?type=${this.state.filters.type}`;
    fetch(url).then(resp => resp.json()).then(json => this.setState({ pets: json, }))
  }

  handleChangeType(type) {
    var hash = {type:type};
    this.setState({
     filters : hash,
    });
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.handleChangeType} onFindPetsClick={this.handleFetch} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.handlePushArray} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;
