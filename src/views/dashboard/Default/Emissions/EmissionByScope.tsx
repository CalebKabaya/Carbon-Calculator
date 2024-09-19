import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

// third-party
import Chart from 'react-apexcharts';

// project imports
import useConfig from 'hooks/useConfig';
import SkeletonTotalGrowthBarChart from 'ui-component/cards/Skeleton/TotalGrowthBarChart';
import MainCard from 'ui-component/cards/MainCard';
import { ThemeMode } from 'config';
import { gridSpacing } from 'store/constant';
import { useEmissionStore } from 'CarbonCarculator/store';

// Define initial chart data
const monthlyData = {
    height: 240,
    type: 'bar',
    options: {
        chart: {
            id: 'monthly-data-chart',
        },
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            categories: [], // Default empty, will be updated dynamically
            labels: {
                style: {
                    colors: [], // Default empty, will be updated dynamically
                },
            },
        },
        yaxis: {
            labels: {
                style: {
                    colors: [], // Default empty, will be updated dynamically
                },
            },
        },
        grid: {
            borderColor: '#e0e0e0',
        },
        tooltip: {
            theme: 'light', // Adjust based on theme mode
        },
        legend: {
            labels: {
                colors: '#333', // Adjust based on theme
            },
        },
    },
    series: [
        {
            name: 'Emissions',
            data: [], // Default empty, will be updated dynamically
        },
    ],
};

// Define status for scopes
const status = [
    {
        value: 'Scope 1',
        label: 'Scope 1',
    },
    {
        value: 'Scope 2',
        label: 'Scope 2',
    },
    {
        value: 'Scope 3',
        label: 'Scope 3',
    },
];

// ==============================|| DASHBOARD DEFAULT - TOTAL GROWTH BAR CHART ||============================== //

const EmissionByScopeAnalysis = () => {
    const [value, setValue] = useState('Scope 1');
    const theme = useTheme();
    const { mode } = useConfig();

    // Extracting values from the theme
    const { primary } = theme.palette.text;
    const divider = theme.palette.divider;
    const grey500 = theme.palette.grey[500];

    // Zustand store
    const { isLoading, isError, error, emissionData, getEmissionDataByScope } = useEmissionStore();

    useEffect(() => {
        getEmissionDataByScope();
    }, [getEmissionDataByScope]);

    // Generate chart data based on emissionData filtered by selected scope
    const generateChartData = () => {
        if (!emissionData) return monthlyData; // Fallback to default data if no data is available

        // Find the scope data based on the selected value
        const scopeData = emissionData.find((scope) => scope.scopeName === value);

        if (!scopeData || !scopeData.emissions) return monthlyData;

        return {
            ...monthlyData,
            options: {
                ...monthlyData.options,
                xaxis: {
                    ...monthlyData.options.xaxis,
                    categories: scopeData.emissions.map((emission) => emission.activityName),
                    labels: {
                        style: {
                            colors: Array(scopeData.emissions.length).fill(primary),
                        },
                    },
                },
                yaxis: {
                    ...monthlyData.options.yaxis,
                    labels: {
                        style: {
                            colors: [primary],
                        },
                    },
                },
                grid: { borderColor: divider },
                tooltip: { theme: mode },
                legend: { labels: { colors: grey500 } },
            },
            series: [
                {
                    name: 'Emissions',
                    data: scopeData.emissions.map((emission) => emission.emission),
                },
            ],
        };
    };

    const chartData = generateChartData();

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
                                            <Typography variant="subtitle1">Emission By Scope</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="subtitle2">Track and filter Emission By Scope</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <TextField
                                        id="standard-select-scope"
                                        select
                                        value={value}
                                        onChange={(e) => setValue(e.target.value)}
                                    >
                                        {status.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sx={{
                                '& .apexcharts-menu.apexcharts-menu-open': {
                                    bgcolor: mode === ThemeMode.DARK ? 'background.default' : 'background.paper',
                                },
                            }}
                        >
                            <Chart {...chartData} />
                        </Grid>
                    </Grid>
                </MainCard>
            )}
        </>
    );
};

EmissionByScopeAnalysis.propTypes = {
    isLoading: PropTypes.bool,
};

export default EmissionByScopeAnalysis;
