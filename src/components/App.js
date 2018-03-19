import React from 'react'
import {Link} from 'react-router'

const App = (props) => {
  let noShow = localStorage.getItem('welcome')
  let wordsHere = "Made by: "
  return (

    <div>
    {noShow &&
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand title"> <Link to="/home">THINGS</Link> </a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>
        </div>
        </nav>
      }
        {props.children}
        {noShow &&
        <div className="footer">
        <p className="navbar-text">{wordsHere}<a href="https://cassandratorske.com" className="navbar-link">Cassandra</a></p>
        </div>
      }
      </div>

  )

}

export default App
