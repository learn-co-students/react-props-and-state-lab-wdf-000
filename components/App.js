// const React = require('react');
//
// const Filters = require('./Filters');
// const PetBrowser = require('./PetBrowser');
//
// class App extends React.Component {
//   constructor() {
//     super();
//
//     this.change = this.change.bind(this);
//     this.fetch = this.fetch.bind(this);
//     this.adopt = this.adopt.bind(this);
//
//     this.state = {
//       pets: [],
//       adoptedPets: [],
//       filters: {
//         type: 'all',
//       }
//     };
//   }
//
//   change(type) {
//     this.setState({
//       filters: Object.assign({}, this.state.filters, {
//         type: type
//       })
//     })
//   }
//
//   fetch() {
//     const url = '/api/pets';
//
//
//     fetch(url)
//       .then(res => res.json())
//       .then(pets => this.setState({pets}))
//   }
//
//   adopt(petId) {
//     this.setState({
//       adoptedPets: this.state.adoptedPets.push(petId)
//     })
//   }
//
//
//
//   render() {
//
//     return (
//       <div className="ui container">
//         <header>
//           <h1 className="ui dividing header">React Animal Shelter</h1>
//         </header>
//         <div className="ui container">
//           <div className="ui grid">
//             <div className="four wide column">
//               <Filters filters={this.state.filters} onChangeType={this.change} onFindPetsClick={this.fetch} />
//             </div>
//             <div className="twelve wide column">
//               <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.adopt} />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
//
// module.exports = App;

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

    this.handleChangeFilterType = this.handleChangeFilterType.bind(this);
    this.fetchPets = this.fetchPets.bind(this);
    this.handleAdoptPet = this.handleAdoptPet.bind(this);
  }

  fetchPets() {
    let url = '/api/pets';

    if (this.state.filters.type !== 'all') {
      url += `?type=${this.state.filters.type}`;
    }

    fetch(url)
      .then(res => res.json())
      .then(pets => this.setState({ pets }));
  }

  handleChangeFilterType(type) {
    this.setState({
      filters: Object.assign({}, this.state.filters, {
        type: type,
      })
    });
  }

  handleAdoptPet(petId) {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, petId],
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
              <Filters filters={this.state.filters}
                       onChangeType={this.handleChangeFilterType}
                       onFindPetsClick={this.fetchPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.handleAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;
