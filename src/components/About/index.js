import {Component} from 'react'
import './index.css'

class About extends Component {
  renderProjects = () => {
    const {history} = this.props
    history.replace('/projects')
  }

  render() {
    return (
      <>
        <div className="about-container">
          <div className="content-container">
            <p className="para">UI/UX Designer</p>
            <h1 className="heading">Hello, my name is Madelyn Torff</h1>
            <p className="paragraph">
              Short text with details about you, what you do or your
              professional career. You can add more information on the about
              page.
            </p>
            <div className="btn">
              <button
                type="button"
                className="primary-btn"
                onClick={this.renderProjects}
              >
                Projects
              </button>
              <button type="button" className="secondary-btn">
                LinkedIn
              </button>
            </div>
          </div>
          <hr className="image" />
        </div>
      </>
    )
  }
}

export default About
