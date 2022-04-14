import React, {useState} from 'react'
import { Card, Box } from '@mui/material';
import { Button, Modal } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ProjectCard = (props) => {

  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Card className='projects__card'>
      <div >
        <h2>{props.name}</h2>
        <p>{props.blurb}</p>
      </div>
      <Button onClick={toggleOpen}>See More</Button>
      <Modal
        open={isOpen}
        onClose={toggleOpen}
      >
        <Box sx={style}>
          <h2>Hello World</h2>
          <p>i work!!</p>
        </Box>
      </Modal>
    </Card>
  )
}

export default ProjectCard