import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// third-party
import ApexCharts from 'apexcharts';
import Chart from 'react-apexcharts';

// project imports
import SkeletonTotalGrowthBarChart from 'ui-component/cards/Skeleton/TotalGrowthBarChart';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import countryData from '../chart-data/CountryData';

// chart data
const status = [
    {
        value: 'today',
        label: 'Scope 3'
    },
    {
        value: 'month',
        label: 'Scope 2'
    },
    {
        value: 'year',
        label: 'Scope 1'
    }
];

// ==============================|| DASHBOARD DEFAULT - TOTAL GROWTH BAR CHART ||============================== //

const EmissionByCountryAnalysis = ({ isLoading }) => {
    const [value, setValue] = React.useState('today');

    // Define custom colors
    const customPrimary = '#095C37'; // Custom primary color
    const customSecondary = '#2CA58D'; // Custom secondary color
    const customTertiary = 'EAECF0'; // Custom tertiary color
    const customDark = '#1C2833'; // Custom dark color for borders, dividers, etc.
    const customTextColor = 'grey-600'; // Custom text color
    const customDividerColor = '#EAECF0'; // Custom divider color

    React.useEffect(() => {
        const newChartData = {
            ...countryData.options,
            colors: [customPrimary, customSecondary, customTertiary, customDark],
            xaxis: {
                labels: {
                    style: {
                        colors: [customTextColor, customTextColor, customTextColor, customTextColor]
                    }
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: [customTextColor]
                    }
                }
            },
            grid: { borderColor: customDividerColor },
            tooltip: { theme: 'light' },
            legend: { labels: { colors: customTextColor } }
        };

        // do not load chart when loading
        if (!isLoading) {
            ApexCharts.exec(`bar-chart`, 'updateOptions', newChartData);
        }
    }, [isLoading]);

    return (
        <>
            {isLoading ? (
                <SkeletonTotalGrowthBarChart />
            ) : (
                <MainCard>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12}>
                            <Grid container alignItems="center" justifyContent="space-between">
                                <Grid item>
                                    <Grid container direction="column" spacing={1}>
                                        <Grid item>
                                            <Typography variant="subtitle1" sx={{ color: customTextColor }}>
                                                Emission By Country
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="subtitle2" sx={{ color: customTextColor }}>
                                                Track and filter Emission By Country
                                            </Typography>
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
                                    bgcolor: 'background.default'
                                }
                            }}
                        >
                            <Chart {...countryData} />
                        </Grid>
                    </Grid>
                </MainCard>
            )}
        </>
    );
};

EmissionByCountryAnalysis.propTypes = {
    isLoading: PropTypes.bool
};

export default EmissionByCountryAnalysis;
