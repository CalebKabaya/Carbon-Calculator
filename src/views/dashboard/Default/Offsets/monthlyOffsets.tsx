import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

// third-party
import ApexCharts from 'apexcharts';
import Chart from 'react-apexcharts';

// project imports
import useConfig from 'hooks/useConfig';
import SkeletonTotalGrowthBarChart from 'ui-component/cards/Skeleton/TotalGrowthBarChart';
import MainCard from 'ui-component/cards/MainCard';
import { ThemeMode } from 'config';
import { gridSpacing } from 'store/constant';
import OffsetData from './OffestData';

// Zustand Store
import { useOffsetStore } from 'CarbonCarculator/store';

// chart data options
const status = [
    { value: 'today', label: 'Scope 3' },
    { value: 'month', label: 'Scope 2' },
    { value: 'year', label: 'Scope 1' }
];

const OffsetMonthlyAnalysis = ({ isLoading }) => {
    const [value, setValue] = React.useState('today');
    const theme = useTheme();
    const { mode } = useConfig();

    const { primary } = theme.palette.text;
    const darkLight = theme.palette.dark.light;
    const divider = theme.palette.divider;
    const grey500 = theme.palette.grey[500];

    const primary200 = theme.palette.primary[200];
    const primaryDark = theme.palette.primary.dark;
    const secondaryMain = theme.palette.secondary.main;
    const secondaryLight = theme.palette.secondary.light;

    // Zustand Store
    const { isLoading: storeLoading, offsetData, getOffset } = useOffsetStore();

    useEffect(() => {
        getOffset(); // Fetch offset data when the component mounts
    }, [getOffset]);

    console.log(offsetData, 'offsetData')

    useEffect(() => {
        if (!storeLoading && offsetData) {
            // Extract months and offsets from offsetData
            const months = offsetData.map((item) => item.month); // x-axis labels (months)
            const offsets = offsetData.map((item) => item.offset); // y-axis data (offsets)
    
            const newChartData = {
                ...OffsetData.options,
                colors: [primary200, primaryDark, secondaryMain, secondaryLight],
                xaxis: {
                    ...OffsetData.options.xaxis,
                    categories: months, // Use months for x-axis labels
                    labels: {
                        style: {
                            colors: new Array(months.length).fill(primary)
                        }
                    }
                },
                yaxis: {
                    labels: {
                        style: {
                            colors: [primary]
                        }
                    }
                },
                grid: { borderColor: divider },
                tooltip: { theme: mode },
                legend: { labels: { colors: grey500 } }
            };
    
            // Update series data with the fetched offsets
            newChartData.series = [
                {
                    name: 'Offset',
                    data: offsets // Use the offset values for the data series
                }
            ];
    
            // Update the chart
            ApexCharts.exec('line-chart', 'updateOptions', newChartData);
        }
    }, [storeLoading, offsetData, mode, primary200, primaryDark, secondaryMain, secondaryLight, primary, divider, grey500]);
    

    return (
        <>
            {isLoading || storeLoading ? (
                <SkeletonTotalGrowthBarChart />
            ) : (
                <MainCard>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12}>
                            <Grid container alignItems="center" justifyContent="space-between">
                                <Grid item>
                                    <Grid container direction="column" spacing={1}>
                                        <Grid item>
                                            <Typography variant="subtitle1">Carbon Offset Monthly Analysis</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="subtitle2">Solar Power Project</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                               
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sx={{
                                '& .apexcharts-menu.apexcharts-menu-open': {
                                    bgcolor: mode === ThemeMode.DARK ? 'background.default' : 'background.paper'
                                }
                            }}
                        >
                            <Chart {...OffsetData} />
                        </Grid>
                    </Grid>
                </MainCard>
            )}
        </>
    );
};

OffsetMonthlyAnalysis.propTypes = {
    isLoading: PropTypes.bool
};

export default OffsetMonthlyAnalysis;
