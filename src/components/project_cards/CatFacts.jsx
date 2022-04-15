import React, {useState} from 'react'
import { Box } from '@mui/material';
import { Modal } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: "15px",
  border: 'none',
  boxShadow: 24,
  p: 5,
};

const CatFacts = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='projects__card catfacts' onClick={toggleOpen}>
      <Modal
        open={isOpen}
        onClose={toggleOpen}
      >
        <Box sx={style}>
          <h2>Hihi</h2>
          <p>Hihi is a social media app heavily inspired by twitter</p>
          <p id="tools">Node.js, React, Redux, Express, SQLite3, SASS</p>
        </Box>
      </Modal>
    </div>
  )
}

export default CatFacts