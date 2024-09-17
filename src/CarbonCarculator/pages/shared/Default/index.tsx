import { useEffect, useState } from 'react';

// material-ui
import Grid from '@mui/material/Grid';

// project imports
import EarningCard from './EarningCard';
import PopularCard from './PopularCard';
import TotalOrderLineChartCard from './TotalOrderLineChartCard';
import TotalIncomeDarkCard from 'ui-component/cards/TotalIncomeDarkCard';
import TotalIncomeLightCard from 'ui-component/cards/TotalIncomeLightCard';
import TotalGrowthBarChart from './TotalGrowthBarChart';

import { gridSpacing } from 'store/constant';

// assets
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
import React from 'react';
import OptionsTabs from './Tabs';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={3} md={6} sm={6} xs={12}>
                        <TotalIncomeLightCard
                            {...{
                                isLoading: isLoading,
                                total: 13.45,
                                label: 'Total Scope 1',
                                icon: <StorefrontTwoToneIcon fontSize="inherit" />
                            }}
                        />{' '}
                    </Grid>
                    <Grid item lg={3} md={6} sm={6} xs={12}>
                        <TotalIncomeLightCard
                            {...{
                                isLoading: isLoading,
                                total: 13.45,
                                label: 'Total Scope 2',
                                icon: <StorefrontTwoToneIcon fontSize="inherit" />
                            }}
                        />{' '}
                    </Grid>
                    <Grid item lg={3} md={6} sm={6} xs={12}>
                        <TotalIncomeLightCard
                            {...{
                                isLoading: isLoading,
                                total: 13.45,
                                label: 'Total Scope 3',
                                icon: <StorefrontTwoToneIcon fontSize="inherit" />
                            }}
                        />{' '}
                    </Grid>
                    <Grid item lg={3} md={6} sm={6} xs={12}>
                        <TotalIncomeLightCard
                            {...{
                                isLoading: isLoading,
                                total: 40.56,
                                label: 'Total Emissions',
                                icon: <StorefrontTwoToneIcon fontSize="inherit" />
                            }}
                        />{' '}
                    </Grid>
                    <Grid item lg={3} md={6} sm={6} xs={12}>
                        <TotalIncomeLightCard
                            {...{
                                isLoading: isLoading,
                                total: 30.22,
                                label: 'Net Emissions',
                                icon: <StorefrontTwoToneIcon fontSize="inherit" />
                            }}
                        />{' '}
                    </Grid>
                  
                </Grid>
            </Grid>
            <Grid item xs={12}>
            <OptionsTabs/>
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
