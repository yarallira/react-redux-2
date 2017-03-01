import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {inc, dec, stepChanged} from './counterActions'

const Counter = props => (
    <div>
      <h1>{props.counter.number}</h1>
      <input value={props.counter.step} type='number' onChange={ props.stepChanged }/>
      <button onClick={props.dec}>Dec</button>
      <button onClick={props.inc}>Inc</button>
    </div>
)

const mapStateToProps = state => ({counter: state.counter})

const mapDispatchToProps = dispatch => bindActionCreators({inc,dec,stepChanged}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
