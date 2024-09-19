// material-ui
import { useTheme } from '@mui/material/styles';

// project imports
import { ThemeMode } from 'config';

import logo from 'assets/images/Carbon Calculator Logo.png';

import logoDark from 'assets/images/logo-dark.svg';


const Logo = () => {
    const theme = useTheme();

    return <img src={theme.palette.mode === ThemeMode.DARK ? logoDark : logo} alt="Carbon Calculator" width="200" />;
};

export default Logo;
