import PropTypes from 'prop-types';
import React from 'react';

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
import monthlyData from '../chart-data/MontlyData';
import countryData from '../chart-data/CountryData';

// chart data

const status = [
    {
        value: 'today',
        label: 'Scope  3'
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

    React.useEffect(() => {
        const newChartData = {
            ...countryData.options,
            colors: [primary200, primaryDark, secondaryMain, secondaryLight],
            xaxis: {
                labels: {
                    style: {
                        colors: [primary, primary, primary, primary, primary, primary, primary, primary, primary, primary, primary, primary]
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

        // do not load chart when loading
        if (!isLoading) {
            ApexCharts.exec(`bar-chart`, 'updateOptions', newChartData);
        }
    }, [mode, primary200, primaryDark, secondaryMain, secondaryLight, primary, darkLight, divider, isLoading, grey500]);

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
                                            <Typography variant="subtitle1">Emission By Country</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="subtitle2">Track and filter Emission By Country </Typography>
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
