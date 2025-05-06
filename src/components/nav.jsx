import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
function Nav(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} mx-1`}>
      <div className={`container-fluid sel bg-${props.mode}`}>
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/contact">{props.title1}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
        </div>
        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
          <input className="form-check-input" type="checkbox" role="switch" id="switchCheckChecked" onClick={props.toggleMode} />
          <label className="form-check-label" htmlFor="switchCheckChecked">{props.mode === 'light' ? 'dark_mode' : 'light_Mode'}</label>
        </div>

      </div>
    </nav>
  )
}

Nav.propTypes = {
  title: PropTypes.string.isRequired,
  title1: PropTypes.string.isRequired
}



export default Nav;