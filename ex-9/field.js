import React, { Component } from 'react'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'

import { changeValue } from './fieldActions'

class Field extends Component {
  render() {
    return (
      <div>
      <label>{this.props.value}</label><br />
      <input type="text" onChange={this.props.changeValue}  value={this.props.value}/>
      </div>
    )
  }
}

//Estes métodos está te ensinando como pegará a parte do state e jogar em outros componentes
function mapStateToProps(state){
  return {
    value: state.field.value
  }
}

//Actions Creators, os métodos que irão disparar ações e mapear dentro das propriedades do meu componente
//O bind irá fazer isso automaticamente, ou seja, o dispatch irá fazer isso automaticamente. Do clique já chama automaticamente o actioncreator e já faz o dispatch
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeValue }, dispatch)  // O dispatch é o cara que irá disparar as ações
}

export default connect(mapStateToProps, mapDispatchToProps)(Field)
