import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';

// project imports
import { ThemeMode } from 'config';

import chartData from './Emissions/chart-data';

// assets
import MainCard from 'ui-component/cards/MainCard';
import { Grid } from '@mui/material';
import TotalGrowthBarChart from './TotalGrowthBarChart';
import EmissionsChartCard from './Emissions/totalEmissions';
import useConfig from 'hooks/useConfig';
import EmissionMonthlyAnalysis from './Emissions/monthlyAnalysis';
import EmissionByCountryAnalysis from './Emissions/countryAnalysis';
import OffsetMonthlyAnalysis from './Offsets/monthlyOffsets';

// tab content customize
function TabPanel({ children, value, index, ...other }) {
    return (
        <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
    };
}

// ================================|| UI TABS - COLOR ||================================ //

export default function OptionsTabs() {
    const theme = useTheme();
    const [value, setValue] = useState(0);
    const [isLoading, setLoading] = useState(true);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        setLoading(false);
    }, []);

    const { mode } = useConfig();

    const backColor = theme.palette.background.paper;
    const secondary = theme.palette.secondary.main;
    const error = theme.palette.error.main;
    const primary = theme.palette.primary.main;
    const successDark = theme.palette.success.dark;
    const orange = theme.palette.orange.main;
    const orangeDark = theme.palette.orange.dark;

    React.useEffect(() => {
        const newRevenueChartCardData = {
            ...chartData.RevenueChartCardData.options,
            colors: [error, primary, secondary],
            stroke: { colors: [backColor] }
        };

        ApexCharts.exec(`revenue-chart`, 'updateOptions', newRevenueChartCardData);
    }, [mode, backColor, secondary, error, primary, successDark, orange, orangeDark]);

    return (
        <>
            <Box
                sx={{
                    backgroundColor: 'white',
                    p: 1,
                    borderRadius: 2
                }}
            >
                <Tabs
                    value={value}
                    variant="scrollable"
                    onChange={handleChange}
                    textColor="secondary"
                    indicatorColor="none"
                    sx={{
                        mb: 0,
                        py: 0,
                        borderBottom: 'none',
                        '& .MuiTabs-flexContainer': {
                            borderBottom: 'none'
                        },
                        '& a': {
                            minHeight: 'auto',
                            minWidth: 10,
                            py: 1.5,
                            px: 1,
                            mr: 2.2,
                            color: theme.palette.mode === ThemeMode.DARK ? 'grey.600' : 'grey.900',
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 1
                        },
                        '& a.Mui-selected': {
                            backgroundColor: 'secondary.main',
                            color: 'white' // Text color for active tab
                        },
                        '& a > svg': {
                            mb: '0px !important',
                            mr: 1.1
                        }
                    }}
                >
                    <Tab component={Link} to="#" label="Emissions" {...a11yProps(0)} />
                    <Tab component={Link} to="#" label="Carbon Offsets" {...a11yProps(1)} />
                </Tabs>
            </Box>

            <TabPanel
                value={value}
                index={0}
                sx={{
                    p: 0
                }}
            >
                <Box
                    sx={{
                        display: 'flex', // Flex container
                        gap: 2, // Add gap between the components (adjust as needed)
                        alignItems: 'flex-start', // Align components to the top
                        justifyContent: 'space-between', // Space between the components
                        width: '100%' // Ensure full width
                    }}
                >
                    <Grid item xs={12} md={4} sx={{ p: 0, m: 0 }}>
                        <EmissionsChartCard chartData={chartData.RevenueChartCardData} />
                    </Grid>
                    <Grid item xs={12} md={8} sx={{ p: 0, m: 0 }}>
                        <TotalGrowthBarChart isLoading={isLoading} />
                    </Grid>
                </Box>
                <Grid item xs={12} md={12} sx={{ p: 0, mt: 3 }}>
                        <EmissionMonthlyAnalysis isLoading={isLoading} />
                    </Grid>

                    <Grid item xs={12} md={12} sx={{ p: 0, mt: 3 }}>
                        <EmissionByCountryAnalysis isLoading={isLoading} />
                    </Grid>
            </TabPanel>

            <TabPanel value={value} index={1}>
            <OffsetMonthlyAnalysis isLoading={isLoading} />

            </TabPanel>
        </>
    );
}
