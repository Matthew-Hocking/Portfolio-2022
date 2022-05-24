import React from 'react'
import { Accordion, Box, AccordionSummary, AccordionDetails } from "@mui/material";


function ProjectAccordian({ project }) {
  

  return (
    <Box>
      <Accordion
        disableGutters={true}
        style={{ border: "none", boxShadow: "none" }}
      >
        <AccordionSummary>
          <h2> {project.name}</h2>
        </AccordionSummary>
        <AccordionDetails>
          <p>{project.description}</p>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default ProjectAccordian;