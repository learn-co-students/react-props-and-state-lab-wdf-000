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
    }

    this.handleOnChangeType = this.handleOnChangeType.bind(this)
    this.handleOnFindPetsClick = this.handleOnFindPetsClick.bind(this)
    this.apiUrl = this.apiUrl.bind(this)
    this.handleOnAdoptPet = this.handleOnAdoptPet.bind(this)
  }

  handleOnChangeType(event){
    this.setState({
      filters: Object.assign({}, this.state.filters, {
        type: event
       })
      }
    )
  }

  handleOnFindPetsClick(event){
   return fetch(this.apiUrl(this.state.filters.type))
  }
  
  handleOnAdoptPet(id){
    this.setState({
      adoptedPets: id
      })
   }
  apiUrl(filter){
    const base_url = `/api/pets`
    return filter === "all" ? base_url : `${base_url}?type=${filter}`
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
              <Filters filters={this.state.filters} onChangeType={this.handleOnChangeType} onFindPetsClick={this.handleOnFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.handleOnAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;
