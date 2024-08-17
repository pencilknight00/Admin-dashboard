import React from 'react';
import Header from '../../components/Header';
import { Box, Button, Typography, IconButton, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import { mockTransactions } from '../../data/mockData';
import DownloadOulinedIcon from '@mui/icons-material/DownloadOutlined';
import EmailIcon from '@mui/icons-material/Email';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import TrafficIcon from '@mui/icons-material/Traffic';
import StatBox from '../../components/StatBox';
import ProgressCircle from '../../components/ProgressCircle';
import Linechart from '../../components/Linechart';
import Barchart from '../../components/Barchart';
import Geographychart from '../../components/Geographychart';


const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Box display="flex" justifyContent={"space-between"} alignItems={"center"}>
            <Header title="DASHBOARD" subtitle="welcome to your dashboard"/>

            <Box>
                <Button
                    sx={{
                        background: colors.blueAccent[700],
                        color: colors.grey[100],    
                        fontSize: '14px',
                        fontWeight: 'bold',
                        padding: '10px 20px',

                    }}
                >
                    <DownloadOulinedIcon sx={{ mr: '10px' }}/>
                    Download Reports
                </Button>
            </Box>
        </Box>
            {/* Grid and Chart */}
            <Box 
                display={"grid"}
                gridTemplateColumns={"repeat(12, 1fr)"} 
                gridAutoRows={"140px"}
                gap={"20px"}    
            >
                {/* ROW 1 */}
                <Box 
                    gridColumn="span 3" 
                    backgroundColor={colors.primary[400]}
                    display='flex'
                    alignItems='center'
                    justifyContent="center"
                >
                    <StatBox 
                        title="12,361" 
                        subtitle="Emails Sent" 
                        icon={<EmailIcon sx={{ fontSize: '26px', color: colors.greenAccent[600] }}/>}
                        progress="0.75"
                        increase="+14%"
                    />

                </Box>

                <Box 
                    gridColumn="span 3" 
                    backgroundColor={colors.primary[400]}
                    display='flex'
                    alignItems='center'
                    justifyContent="center"
                >
                    <StatBox 
                        title="431,335" 
                        subtitle="Sales Obtained" 
                        icon={<PointOfSaleIcon sx={{ fontSize: '26px', color: colors.greenAccent[600] }}/>}
                        progress="0.5"
                        increase="+21%"
                    />

                </Box>

                <Box 
                    gridColumn="span 3" 
                    backgroundColor={colors.primary[400]}
                    display='flex'
                    alignItems='center'
                    justifyContent="center"
                >
                    <StatBox 
                        title="32,441" 
                        subtitle="New Clients" 
                        icon={<PersonAddIcon sx={{ fontSize: '26px', color: colors.greenAccent[600] }}/>}
                        progress="0.30"
                        increase="+5%"
                    />

                </Box>

                <Box 
                    gridColumn="span 3" 
                    backgroundColor={colors.primary[400]}
                    display='flex'
                    alignItems='center'
                    justifyContent="center"
                >
                    <StatBox 
                        title="1,422,361" 
                        subtitle="Traffic Inbound" 
                        icon={<TrafficIcon sx={{ fontSize: '26px', color: colors.greenAccent[600] }}/>}
                        progress="0.80"
                        increase="+43%"
                    />

                </Box>

                {/* ROW 2 */}
                <Box
                    gridColumn={"span 8"}
                    gridRow={"span 2"}
                    backgroundColor={colors.primary[400]}
                >
                    <Box 
                        display='flex'
                        mt='25px'
                        p='0 30px'
                        alignItems={'center'}
                        justifyContent={'space-between'}
                    >
                        <Box>
                            <Typography variant='h5' fontWeight={600} sx={{ color: colors.grey[100] }}>Revenue Generated</Typography>
                            <Typography variant='h3' fontWeight={"bold"} sx={{ color: colors.greenAccent[500] }}>$59,345,987</Typography>
                        </Box>
                        
                        <Box>
                            <IconButton>
                                <DownloadOulinedIcon sx={{ color: colors.greenAccent[500], fontSize: '26px' }}/>
                            </IconButton>
                        </Box>
                    </Box>
                    <Box height='250px' mt='-20px'>
                        <Linechart isDashboard={true}/>
                    </Box>
                    </Box>
                    <Box 
                        gridColumn={"span 4"} 
                        gridRow={"span 2"} 
                        backgroundColor={colors.primary[400]} 
                        overflow={"auto"}
                    >
                        <Box 
                            display='flex' 
                            justifyContent={"space-between"}
                            alignItems={"center"}
                            borderBottom={`4px solid ${colors.primary[500]}`}
                            color={colors.grey[100]}
                            p='15px'
                        >
                            <Typography color={colors.grey[100]} variant='h5' fontWeight={"600"}>
                                Recent Transactions
                            </Typography>
                        </Box>
                        {mockTransactions.map((transaction, index) => (
                            <Box key={`${transaction.txId}-${index}`}
                                display='flex'
                                justifyContent='space-between'
                                alignItems='center'
                                borderBottom={`4px solid ${colors.primary[500]}`} 
                                p='15px'   
                            >
                                <Box>
                                    <Typography color={colors.greenAccent[500]} variant='h5' fontWeight={"600"}>
                                    {transaction.txId}
                                    </Typography>

                                    <Typography color={colors.grey[100]}>
                                    {transaction.user}
                                    </Typography>
                                </Box>
                                <Box color={colors.grey[100]}>
                                    {transaction.date}
                                </Box>
                                <Box 
                                    color={colors.grey[100]} 
                                    backgroundColor={colors.greenAccent[500]} 
                                    padding='5px 10px'
                                    borderRadius={'4px'}
                                >
                                    ${transaction.cost}
                                </Box>
                                
                            </Box>
                        ))}
                    </Box>

                    {/* ROW 3 */}
                    <Box
                        gridColumn={"span 4"}
                        gridRow={"span 2"}
                        backgroundColor={colors.primary[400]}
                        p='30px'
                    >
                        <Typography variant='h5' fontWeight={"600"}>
                             Campaign
                        </Typography>
                        <Box 
                            display='flex' 
                            flexDirection='column'
                            alignItems={"center"}
                            mt='25px'
                        >
                            <ProgressCircle size='125'/>
                            <Typography 
                                variant='h5' 
                                color={colors.greenAccent[500]}
                                sx={{ mt: '15px' }}
                            >
                                $48,542 revenue generated
                            </Typography>
                            <Typography>
                                Include extra misc expenditures and coits
                            </Typography>
                        </Box>
                    </Box>

                    <Box
                        gridColumn={"span 4"}
                        gridRow={"span 2"}
                        backgroundColor={colors.primary[400]}
                    >
                        <Typography variant='h5' fontWeight={"600"} sx={{ p: '30px 30px o 30px'}}>
                            Sales Quantity
                        </Typography>
                        <Box 
                            height={'250px'}
                            mt='-20px'
                        >
                            <Barchart isDashboard={true}/>  
                        </Box>
                    </Box>

                    <Box
                        gridColumn={"span 4"}
                        gridRow={"span 2"}
                        backgroundColor={colors.primary[400]}
                        p='30px'
                    >
                        <Typography variant='h5' fontWeight={"600"} sx={{ mb: "15px" }}>
                            Geography Based Traffic
                        </Typography>
                        <Box 
                            height={'200px'}
                            mt='-20px'
                        >
                            <Geographychart isDashboard={true}/>  
                        </Box>
                    </Box>

                </Box>
        </Box>
        
    );
};

export default Dashboard;