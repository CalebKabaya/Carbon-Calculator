import PropTypes from 'prop-types';

// material-ui
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// third party
import Chart from 'react-apexcharts';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import React, { useEffect } from 'react';
import { useStatisticsStore } from 'CarbonCarculator/store';

// ===========================|| REVENUE CHART CARD ||=========================== //

const EmissionsChartCard = () => {
    const { isLoading, isError, error, statisticData, getStatistic } = useStatisticsStore();

    useEffect(() => {
        getStatistic();
    }, [getStatistic]);

    // Define chartData dynamically based on statisticData
    const chartData = {
        height: 228,
        type: 'donut',
        options: {
            chart: {
                id: 'revenue-chart'
            },
            dataLabels: {
                enabled: false
            },
            labels: ['Scope 1', 'Scope 2', 'Scope 3'],
            legend: {
                show: true,
                position: 'bottom',
                fontFamily: 'inherit',
                labels: {
                    colors: 'inherit'
                },
                itemMargin: {
                    horizontal: 10,
                    vertical: 10
                }
            }
        },
        series: [
            statisticData?.scope1Total || 0,
            statisticData?.scope2Total || 0,
            statisticData?.scope3Total || 0
        ]
    };


    if (isError) return <div>Error: {error}</div>;

    return (
        <MainCard title="Total Emissions">
            <Grid container spacing={2} direction={{ xs: 'column', sm: 'row', md: 'column' }}>
                <Grid item xs={12} sm={7} md={12}>
                    <Chart {...chartData} />
                </Grid>
                <Box sx={{ display: { xs: 'none', sm: 'block', md: 'none' } }}>
                    <Grid item>
                        <Divider />
                    </Grid>
                </Box>
                <Grid item container justifyContent="space-around" alignItems="center" xs={12} sm={5} md={12}>
                    <Grid item sm={4}>
                        <Grid container direction="column">
                            <Typography variant="h6">Scope 1</Typography>
                            <Typography variant="subtitle1" sx={{ color: 'error.main' }}>
                                 {statisticData?.scope1Total || '0%'}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item sm={4}>
                        <Grid container direction="column">
                            <Typography variant="h6">Scope 2</Typography>
                            <Box sx={{ color: 'primary.main' }}>
                                <Typography variant="subtitle1" color="inherit">
                                     {statisticData?.scope2Total || '0%'}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid item sm={4}>
                        <Grid container direction="column">
                            <Typography variant="h6">Scope 3</Typography>
                            <Typography variant="subtitle1" sx={{ color: 'secondary.main' }}>
                                 {statisticData?.scope3Total || '0%'}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </MainCard>
    );
};

EmissionsChartCard.propTypes = {
    chartData: PropTypes.object
};

export default EmissionsChartCard;
