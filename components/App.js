const React = require('react');
const Filters = require('./Filters');
const PetBrowser = require('./PetBrowser');

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
    this.onChangeType = this.onChangeType.bind(this);
    this.onFindPetsClick = this.onFindPetsClick.bind(this);
    this.onAdoptPet = this.onAdoptPet.bind(this);
  }
  onChangeType(e) {
    this.setState({
      filters: {
        type: e
      }
    });
  }
  onFindPetsClick(e) {
    var url = (this.state.filters.type == 'all') ? '/api/pets' : `/api/pets?type=${this.state.filters.type}`
    fetch(url);
  }
  onAdoptPet(id) {
    this.setState({
      adoptedPets: this.state.adoptedPets.concat([id])
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
              <Filters filters={this.state.filters} onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;
