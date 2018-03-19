import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import * as ThingActions from '../../actions/ThingActions'

class Thing extends React.Component{
  constructor(props) {
    super(props)
  }

render() {

  return(
    <div>
    <div className="row">
    <div className="container">
      <h2>hello, list all things here</h2>
      </div>
      </div>
      </div>
  )
}
}

const mapStateToProps = (state) => {
  return {
    things: state.things
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // createThing: thing => dispatch(ThingActions.createThing(thing))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Thing)
