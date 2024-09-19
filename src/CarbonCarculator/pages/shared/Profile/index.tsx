import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';



import useConfig from 'hooks/useConfig';
import Avatar from 'ui-component/extended/Avatar';
import MainCard from 'ui-component/cards/MainCard';
import Breadcrumbs from 'ui-component/extended/Breadcrumbs';
import ImagePlaceholder from 'ui-component/cards/Skeleton/ImagePlaceholder';
import { ThemeMode, DASHBOARD_PATH } from 'config';

import { gridSpacing } from 'store/constant';

// assets
import { IconInbox } from '@tabler/icons-react';

import Cover from 'assets/images/profile/img-profile-bg.jpg';


function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
    };
}

const tabOptions = [
    {
        to: '/profile',
        icon: <IconInbox stroke={1.5} size="17px" />,
        label: 'Profile',
        value: 'posts'
    }
];

// ==============================|| SOCIAL PROFILE ||============================== //

const SocialProfile = () => {
    const theme = useTheme();

    
    const navigate = useNavigate();
    const { borderRadius } = useConfig();

    let tab = 'posts';
    let breadcrumbTitle = '';
    let breadcrumbHeading = '';

    const [value, setValue] = React.useState(tab);
    const handleChange = (event, newValue) => {
        setValue(newValue);
        navigate(`apps/user/social-profile/${newValue}`);
    };

    useEffect(() => {
        setValue(tab);
    }, [tab]);

    let breadcrumbLinks = [
        { title: 'Home' },
        { title: 'Profile', to: '/profile' },
        { title: breadcrumbTitle }
    ];
    if (tab === 'posts') {
        breadcrumbLinks = [{ title: 'Home' },  { title: 'Social Profile' }];
    }

    const [isLoading, setLoading] = useState(true);


    return (
        <>
            <Breadcrumbs custom heading={breadcrumbHeading} links={breadcrumbLinks} />
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                    <MainCard
                        contentSX={{
                            p: 1.5,
                            paddingBottom: '0px !important',
                            [theme.breakpoints.down('lg')]: {
                                textAlign: 'center'
                            }
                        }}
                    >
                        {isLoading ? (
                            <ImagePlaceholder
                                sx={{
                                    borderRadius: `${borderRadius}px`,
                                    overflow: 'hidden',
                                    mb: 3,
                                    height: { xs: 85, sm: 150, md: 260 }
                                }}
                            />
                        ) : (
                            <CardMedia
                                component="img"
                                image={Cover}
                                sx={{ borderRadius: `${borderRadius}px`, overflow: 'hidden', mb: 3, height: 205, sm: 150, md: 260 }}
                                alt="profile-background"
                            />
                        )}
                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={12} md={3}>
                                {isLoading ? (
                                    <ImagePlaceholder
                                        sx={{
                                            margin: '-70px 0 0 auto',
                                            borderRadius: '16px',
                                            [theme.breakpoints.down('lg')]: {
                                                margin: '-70px auto 0'
                                            },
                                            [theme.breakpoints.down('md')]: {
                                                margin: '-60px auto 0'
                                            },
                                            width: { xs: 72, sm: 100, md: 140 },
                                            height: { xs: 72, sm: 100, md: 140 }
                                        }}
                                    />
                                ) : (
                                    <Avatar
                                    alt='name'
                                    sx={{
                                      margin: '-70px 0 0 auto',
                                      border: 4,
                                      borderRadius: '50%', // Make border radius round
                                      backgroundColor: theme.palette.primary.main, // Set background color
                                      color: theme.palette.primary.contrastText, // Set text color
                                      width: { xs: 72, sm: 100, md: 140 },
                                      height: { xs: 72, sm: 100, md: 140 },
                                      fontSize: '36px', // Set font size to larger size
                                      fontWeight: 'bold', // Set font weight to bold
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                    }}
                                  >
                                    CK
                                  </Avatar>
                                )}
                            </Grid>
                            <Grid item xs={12} md={9}>
                                <Grid container spacing={gridSpacing}>
                                    <Grid item xs={12} md={8}>
                                        <Typography variant="h5">
                                           Caleb kabaya
                                        </Typography>
                                        <Typography variant="subtitle2">UX UI </Typography>
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <Grid
                                            container
                                            spacing={1}
                                            sx={{
                                                justifyContent: 'flex-end',
                                                [theme.breakpoints.down('lg')]: {
                                                    justifyContent: 'center'
                                                }
                                            }}
                                        >
                                            <Grid item>
                                                {/* <EditProfile /> */}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid container justifyContent="flex-end">
                                    <Tabs
                                        value={value}
                                        variant="scrollable"
                                        onChange={handleChange}
                                        sx={{
                                            marginTop: 2.5,
                                            '& .MuiTabs-flexContainer': {
                                                border: 'none'
                                            },
                                            '& a': {
                                                minHeight: 'auto',
                                                minWidth: 10,
                                                py: 1.5,
                                                px: 1,
                                                mr: 2.25,
                                                color: theme.palette.mode === ThemeMode.DARK ? 'grey.600' : 'grey.900',
                                                display: 'flex',
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            },
                                            '& a.Mui-selected': {
                                                color: 'primary.main'
                                            },
                                            '& a > svg': {
                                                marginBottom: '4px !important',
                                                mr: 1.25
                                            }
                                        }}
                                    >
                                        {tabOptions.map((option, index) => (
                                            <Tab
                                                key={index}
                                                component={Link}
                                                to={option?.to}
                                                value={option.value}
                                                icon={option.icon}
                                                label={option.label}
                                                {...a11yProps(index)}
                                            />
                                        ))}
                                    </Tabs>
                                </Grid>
                            </Grid>
                        </Grid>
                    </MainCard>
                </Grid>
                <Grid item xs={12}>
                    {/* <Box sx={{ p: 0 }}>{tab === 'posts' && <Profile />}</Box> */}
                </Grid>
            </Grid>
        </>
    );
};

export default SocialProfile;
