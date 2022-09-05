import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container } from '@mui/material';
import Testimonial from '../Testimonial/Testimonial';
import Explain from '../Explain/Explain';


const FAQ = () => {
    const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
    return (
        <>
        <Typography
                  variant="h2"
                  mt={5}
                  mb={5}
                  sx={{
                    fontSize: 50,
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: 900,
                    textAlign:"center",
                    color: "#eb7c05",
                    marginBottom:"80px"
                   
                  }}
                >
                  FAQ
                </Typography>
                
                <div style={{backgroundColor:"rgba(128, 128, 128, 0.58)", paddingTop:"40px",paddingBottom:"90px"}}>
                <Container style={{marginTop:"40px",
                  
              
              
              }}>
      <Accordion  expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography variend="h1" sx={{ width: '100%', flexShrink: 0 }}>
            How do you select specialists according to the needs of the client?
          </Typography>
         
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Proin posuere, enim vel efficitur suscipit, leo odio efficitur lacus, eu laoreet diam lacus in justo. Aenean efficitur est leo, sed rutrum ligula egestas ut. Mauris id erat non eros placerat mollis.

Suspendisse potenti. Integer iaculis sapien nec ex condimentum pharetra. Aliquam sit amet lectus gravida, pharetra felis non, pulvinar massa.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Do you do project-based work?</Typography>
         
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Nullam fermentum pharetra

Sed nisi sed magna lacinia mattis. Curabitur egestas urna ut nunc aliquet, at consequat justo gravida. Curabitur dapibus velit non ligula lobortis porttitor.

Curabitur dapibus

Nullam fermentum pharetra dolor, a volutpat nunc tristique vitae. Morbi hendrerit convallis ornare. Praesent ut justo ac turpis lobortis tempus. Donec volutpat dolor quis dui dignissim fermentum.

Donec volutpat dolor

Maecenas sed erat a justo tempor viverra. Etiam vel porttitor ex. Vivamus dapibus ex non felis aliquam rutrum.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Is it difficult to work with a remote employee?
          </Typography>
         
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>How do you from your price?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Can I change my specialist?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Can I have a discount?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>How can I contact Seven A counting?</Typography>
        </AccordionSummary>
      </Accordion>
    </Container>
                </div>
                <Explain/>
         <Testimonial/>
        </>
    );
};

export default FAQ;