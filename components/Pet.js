// const React = require('react');
//
// class Pet extends React.Component {
//   constructor() {
//     super();
//
//     this.findGender = this.findGender.bind(this);
//     this.adopt = this.adopt.bind(this);
//
//     this.state = {
//       name: this.props.pet.name,
//       type: this.props.pet.type,
//       age: this.props.pet.age,
//       weight: this.props.pet.weight
//     }
//   }
//
//   findGender() {
//     if (this.props.pet.gender ==="male") {
//       return '♂'
//     } else {
//       return '♀'
//     }
//   }
//
//   adopt() {
//     this.props.onAdoptPet(this.props.pet.id)
//   }
//
//
//
//   render() {
//     return (
//       <div className="card">
//         <div className="content">
//           <a className="header">Pet name {this.props.pet.name} (gender: ♂ or ♀) {this.findGender}</a>
//           <div className="meta">
//             <span className="date">Pet type {this.props.pet.type}</span>
//           </div>
//           <div className="description">
//             <p>Age: {this.props.pet.age}</p>
//             <p>Weight: {this.props.pet.weight}</p>
//           </div>
//         </div>
//         <div className="extra content">
//           {!this.props.isAdopted ? <button className="ui primary button" onClick={this.adopt}>Adopt pet</button> : <button className="ui disabled button">Already adopted</button>}
//
//         </div>
//       </div>
//     );
//   }
// }
//
// Pet.propTypes = {
//   pet: React.PropTypes.object,
//   isAdopted: React.PropTypes.bool,
//   onAdoptPet: React.PropTypes.func
// }
//
// module.exports = Pet;

const React = require('react');

class Pet extends React.Component {
  constructor() {
    super();

    this.handleAdoptPet = this.handleAdoptPet.bind(this);
  }

  handleAdoptPet() {
    this.props.onAdoptPet(this.props.pet.id);
  }

  render() {
    const { pet, isAdopted } = this.props;
    const { name, type, gender, age, weight } = pet;

    return (
      <div className="card">
        <div className="content">
          <a className="header">{name} {gender === 'male' ? '♂' : '♀'}</a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          {!isAdopted && <button className="ui primary button" onClick={this.handleAdoptPet}>Adopt pet</button>}
          {isAdopted && <button className="ui disabled button">Already adopted</button>}
        </div>
      </div>
    );
  }
}

module.exports = Pet;
