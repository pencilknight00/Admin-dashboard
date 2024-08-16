import { Box, useTheme, Typography } from '@mui/material';
import Header from '../../components/Header';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from '../../theme';

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box m='20px'>
            <Header title="FAQ" subtitle="Frequently Asked Questions page"/>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                        An important question 
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        This is the answer to the important question. This is the answer to the important question.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                        Another important question 
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        This is the answer to the important question. This is the answer to the important question.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            

            <Accordion defaultExpanded> 
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                        Some random questions 
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        This is the answer to the random question..
                    </Typography>
                </AccordionDetails>
            </Accordion>

            

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                        The last important question 
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        This is the answer to thelast  important question. This is the answer to the last important question.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

export default FAQ;

