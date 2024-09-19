import PropTypes from 'prop-types';
import MainCard from 'ui-component/cards/MainCard';
import { Box, Typography } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NoResultsFoundIcon from 'assets/images/nothing_8423523.png'; // Assuming this is a valid image path

const NoResultsFound = ({ title }) => {
    return (
        <MainCard sx={{ mb: 2 }}>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                sx={{
                    textAlign: 'center',
                    cursor: 'pointer',
                    '&:hover .hover-text': {
                        textDecoration: 'underline'
                    },
                    height: '100%' // Ensure Box takes full height if needed
                }}
            >
                 <Box
                    component="img"
                    src={NoResultsFoundIcon}
                    alt="No Results Found"
                    mb={2}
                    sx={{
                        width: { xs: '15%', sm: '15%', md: '7%' }, // Responsive sizing
                        maxWidth: '100px'
                    }}
                />

                 <Box display="flex" alignItems="center">
                <Typography variant="h5" ml={1} className="hover-text">
                    {title}
                </Typography>
            </Box>
               
            </Box>
           
        </MainCard>
    );
};

NoResultsFound.propTypes = {
    title: PropTypes.string.isRequired
};

export default NoResultsFound;
