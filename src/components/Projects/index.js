import {Component} from 'react'
import Projectslist from '../Projectslist'

import './index.css'

class Projects extends Component {
  state = {
    projectList: [],
    name: '',
    links: '',
    description: '',
  }

  onAddProject = () => {
    const {name, links, description} = this.state
    const newProject = {
      name,
      links,
      description,
    }
    this.setState(prevState => ({
      projectList: [...prevState.projectList, newProject],
      name: '',
      links: '',
      description: '',
    }))
  }

  renderProjects = () => {
    const {projectList} = this.state

    return projectList.map(eachProject => (
      <Projectslist projectDetails={eachProject} />
    ))
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeLink = event => {
    this.setState({links: event.target.value})
  }

  onChangeDescription = event => {
    this.setState({description: event.target.value})
  }

  renderName = () => {
    const {name} = this.state
    return (
      <>
        <label className="name" htmlFor="name">
          Project Name
        </label>
        <input
          type="text"
          id="name"
          className="name"
          value={name}
          onChange={this.onChangeName}
        />
      </>
    )
  }

  renderLink = () => {
    const {links} = this.state
    return (
      <>
        <label className="links" htmlFor="links">
          Project Link
        </label>
        <input
          type="links"
          id="links"
          className="links"
          value={links}
          onChange={this.onChangeLink}
        />
      </>
    )
  }

  renderDescription = () => {
    const {description} = this.state
    return (
      <>
        <label className="description" htmlFor="description">
          Description
        </label>
        <textarea
          rows="10"
          cols="50"
          id="description"
          value={description}
          onChange={this.onChangeDescription}
        />
      </>
    )
  }

  render() {
    const {name, links, description, projectList} = this.state
    return (
      <>
        <div className="project-container">
          <h1 className="heading">Add Project</h1>
          <form className="form-container">
            <div className="input-container">{this.renderName()}</div>
            <div className="input-container">{this.renderLink()}</div>
            <div className="input-container">{this.renderDescription()}</div>
            <button
              type="button"
              className="add-button"
              onClick={this.onAddProject}
            >
              Add
            </button>
          </form>
        </div>
        <div className="projects-list-container">{this.renderProjects()}</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1436"
          height="112"
          viewBox="0 0 1436 112"
          fill="none"
        >
          <path
            d="M0 83.9182L59.8333 74.594C119.667 65.2697 239.333 46.6212 359 48.9523C478.667 51.2833 598.333 74.594 718 74.594C837.667 74.594 957.333 51.2833 1077 34.9659C1196.67 18.6485 1316.33 9.32425 1376.17 4.66212L1436 0V111.891H1376.17C1316.33 111.891 1196.67 111.891 1077 111.891C957.333 111.891 837.667 111.891 718 111.891C598.333 111.891 478.667 111.891 359 111.891C239.333 111.891 119.667 111.891 59.8333 111.891H0V83.9182Z"
            fill="#FDC435"
          />
        </svg>
      </>
    )
  }
}

export default Projects
