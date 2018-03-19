import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'


class LandingPage extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
      <div className="hero text-center">
        <Link to="/home"><h1 className="hero-title"> THINGS </h1></Link>
        <h1>landing page</h1>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    thing: state.thing,
  }
}

export default connect(mapStateToProps)(LandingPage)
