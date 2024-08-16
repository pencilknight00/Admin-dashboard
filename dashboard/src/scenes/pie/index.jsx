import { Box } from '@mui/material';
import Header from '../../components/Header';
import Piechart from '../../components/Piechart';
const Pie = () => {
    return (
        <Box m="20px">
            <Header title={"PIE CHART"} subtitle={"Simple Pie Chart"}></Header>
            <Box height={"75vh"}>
                <Piechart isDashboard={false}/>
            </Box>
        </Box>
    );
};

export default Pie;