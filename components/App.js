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
  }

  handleChangeType(pettype){
    this.setState({
      filters: Object.assign({}, this.state.filters, {type: pettype})
    })
  }


  findPets(){
    var api;
    if(this.state.filters.type === 'all'){
      api = '/api/pets'
    }else{ api = `/api/pets?type=${this.state.filters.type}`}
    fetch(api).then(resp => resp.json()).then(json => this.setState({
      pets: Object.assign({}, this.state.pets, json)
    }))
  }

  adopted(petId){
    this.setState({
      adoptedPets: [...this.state.pets, petId]
    })

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
              <Filters filters={this.state.filters} onChangeType={this.handleChangeType.bind(this)}
              onFindPetsClick={this.findPets.bind(this)}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.adopted.bind(this)} pets={this.state.pets} adoptedPets={this.state.adoptedPets}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;
