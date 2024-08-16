import { Box, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import Header from '../../components/Header';
import GeoGeographychart from '../../components/Geographychart';
const Line = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box m="20px">
            <Header title={"GEOGRAPHY CHART"} subtitle={"Simple Geogaphy Chart"}></Header>
            <Box height={"75vh"} border={`1px solid ${colors.grey[100]}`} borderRadius={"4px"}>
                <GeoGeographychart isDashboard={false}/>
            </Box>
        </Box>
    );
};

export default Line;
