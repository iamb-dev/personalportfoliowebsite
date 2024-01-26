import './index.css'

const Projectslist = props => {
  const {projectDetails} = props
  const {name, links, description} = projectDetails

  return (
    <div className="list-container">
      <div className="project-list">
        <h1 className="project-heading">{name}</h1>
        <a className="project-link" alt={links} href={links}>
          {links}
        </a>
        <p className="project-description">{description}</p>
      </div>
    </div>
  )
}

export default Projectslist
