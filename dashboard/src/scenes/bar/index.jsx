import { Box } from '@mui/material';
import Barchart from '../../components/Barchart';
import Header from '../../components/Header';
const Bar = () => {
    return (
        <Box m="20px">
            <Header title="BAR CHART" subtitle="Simple Bar Chart"/>
            <Box height={"75vh"}>
                <Barchart isDashboard={false}/>
            </Box>
        </Box>
        
    );
};

export default Bar;