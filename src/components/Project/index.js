import './index.css'

const Project = () => (
  <>
    <div className="projects-container">
      <h1 className="heading">Projects</h1>
      <div className="container">
        <div className="product-info">
          <h1 className="heading">Project Name</h1>
          <p className="para">
            I created this personal project in order to show how to create an
            interface in Figma using a portfolio as an example.
          </p>
          <button type="button" className="btn">
            View Project
          </button>
        </div>
        <img
          src="https://res.cloudinary.com/din4ndwa7/image/upload/v1706110727/pexels-elly-fairytale-3823207_1_i9xdz9.png"
          alt="project"
          className="image"
        />
      </div>
    </div>
  </>
)

export default Project
