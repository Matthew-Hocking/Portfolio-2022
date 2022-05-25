import React, {useState} from 'react'
import { Box, Modal } from "@mui/material";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "40vw",
  maxWidth: "400px",
  borderRadius: "25px",
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

function ProjectModal({ project }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <h2 onClick={handleOpen}>{ project.name }</h2>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <div className='modal__header'>
            <h2>{project.name}</h2>
            <div className='modal__header_links'>
              <a href={project.github} target="_blank">Github</a>
              {project.deployLink ? <a href={project.deployLink} target="_blank">Live</a> : null}
            </div>
          </div>
          <p>{project.description}</p>
        </Box>
      </Modal>
    </div>
  );
}

export default ProjectModal;