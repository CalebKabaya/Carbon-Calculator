import { useEffect } from 'react';

// material-ui
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// project imports
import EarningCard from './EarningCard';
import PopularCard from './PopularCard';
import TotalOrderLineChartCard from './TotalOrderLineChartCard';
import TotalIncomeDarkCard from '../../../ui-component/cards/TotalIncomeDarkCard';
import TotalIncomeLightCard from '../../../ui-component/cards/TotalIncomeLightCard';
import TotalGrowthBarChart from './ScopeEmissions';
import OptionsTabs from './Tabs';
import MainCard from 'ui-component/cards/MainCard';

// store
import { useStatisticsStore } from 'CarbonCarculator/store';

// assets
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
import { gridSpacing } from 'store/constant';
import React from 'react';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
    const { isLoading, isError, error, statisticData, getStatistic } = useStatisticsStore();

    useEffect(() => {
        getStatistic();
    }, [getStatistic]);

    if (isError) return <div>Error: {error}</div>;

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <MainCard sx={{ mb: 3 }}>
                    <Typography variant="h3">
                        Greenhouse Gas Emissions overview{' '}
                        <Typography variant="h3" component="span" sx={{ color: '#2CA58D' }}>
                            (tCO2e)
                        </Typography>
                    </Typography>
                </MainCard>

                <Grid container spacing={gridSpacing}>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <EarningCard isLoading={isLoading} netEmissions={statisticData?.netEmissions || 0} />
                    </Grid>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <TotalIncomeLightCard
                                isLoading={isLoading}
                                total={statisticData?.scope1Total || 0}
                                label="Total Scope 1"
                                icon={<StorefrontTwoToneIcon fontSize="inherit" />}
                            />
                            <TotalIncomeLightCard
                                isLoading={isLoading}
                                total={statisticData?.scope2Total || 0}
                                label="Total Scope 2"
                                icon={<StorefrontTwoToneIcon fontSize="inherit" />}
                            />
                        </Box>
                    </Grid>

                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <TotalIncomeLightCard
                                isLoading={isLoading}
                                total={statisticData?.scope3Total || 0}
                                label="Total Scope 3"
                                icon={<StorefrontTwoToneIcon fontSize="inherit" />}
                            />
                            <TotalIncomeLightCard
                                isLoading={isLoading}
                                total={statisticData?.totalEmissions || 0}
                                label="Total Emissions"
                                icon={<StorefrontTwoToneIcon fontSize="inherit" />}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <OptionsTabs />
            </Grid>
            {/* <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} md={8}>
                        <TotalGrowthBarChart isLoading={isLoading} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <PopularCard isLoading={isLoading} />
                    </Grid>
                </Grid>
            </Grid> */}
        </Grid>
    );
};

export default Dashboard;
