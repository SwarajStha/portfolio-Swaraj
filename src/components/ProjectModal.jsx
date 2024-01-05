import Modal from "react-modal";

const ProjectModal = ({ isOpen, onRequestClose, project }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Project Details"
      style={{
        overlay: { backgroundColor: "rgba(0, 0, 0, 0.75)" },
        content: { color: "lightsteelblue" },
      }}
    >
      <h2>{project.title}</h2>
      <img src={projectimg} alt={project.title} />
      <p>{project.description}</p>
      <a href={project.githubLink}>GitHub Repo: </a>
      <p>Languages used: {project.languages}</p>
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default ProjectModal;
