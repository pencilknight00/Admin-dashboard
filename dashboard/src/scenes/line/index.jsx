import { Box } from '@mui/material';
import Header from '../../components/Header';
import Linechart from '../../components/Linechart';
const Line = () => {
    return (
        <Box m="20px">
            <Header title={"LINE CHART"} subtitle={"Simple Line Chart"}></Header>
            <Box height={"75vh"}>
                <Linechart isDashboard={false}/>
            </Box>
        </Box>
    );
};

export default Line;
