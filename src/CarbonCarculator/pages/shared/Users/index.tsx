import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';
import UsersList from './users';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import { IconPlus, IconSearch } from '@tabler/icons-react';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import AddNewUser from 'CarbonCarculator/components/modals/CreateUser';

const UserList = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [isAddUserDialogOpen, setIsAddUserDialogOpen] = useState(false);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const addUserDialog = () => {
        setIsAddUserDialogOpen(true);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
    };

    const handleRowsPerPageChange = (rows: number) => {
        setRowsPerPage(rows);
        setCurrentPage(1); // Reset to first page when rows per page change
        handleClose();
    };

    return (
        <>
            <MainCard
                title={
                    <Grid container alignItems="center" justifyContent="space-between" spacing={gridSpacing}>
                        <Grid item>
                            <Typography variant="h3">Users List</Typography>
                            <Typography pt={1} variant="subtitle2">
                                Manage  users permissions and roles
                            </Typography>
                        </Grid>
                        <Grid container alignItems="top" justifyContent="flex-end" spacing={gridSpacing}>
                            <Grid item>
                                <OutlinedInput
                                    id="input-search-list-style1"
                                    placeholder="Search"
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <IconSearch stroke={1.5} size="16px" />
                                        </InputAdornment>
                                    }
                                    size="small"
                                />
                            </Grid>
                            <Grid item>
                                <Button disableElevation variant="contained" onClick={addUserDialog} startIcon={<IconPlus />}>
                                    Add User
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                }
                content={false}
            >
                <UsersList
                    searchTerm={searchTerm}
                    currentPage={currentPage}
                    rowsPerPage={rowsPerPage}
                />
                <Grid item xs={12} sx={{ p: 3 }}>
                    <Grid container justifyContent="space-between" spacing={gridSpacing}>
                        <Grid item>
                            <Pagination count={Math.ceil(100 / rowsPerPage)} color="primary" page={currentPage} onChange={handlePageChange} />
                        </Grid>
                        <Grid item>
                            <Button
                                size="large"
                                sx={{ color: 'grey.900' }}
                                color="secondary"
                                endIcon={<ExpandMoreRoundedIcon />}
                                onClick={handleClick}
                            >
                                {rowsPerPage} Rows
                            </Button>
                            {anchorEl && (
                                <Menu
                                    id="menu-user-list-style1"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                    variant="selectedMenu"
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right'
                                    }}
                                    transformOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right'
                                    }}
                                >
                                    {[10, 20, 30].map((rows) => (
                                        <MenuItem key={rows} onClick={() => handleRowsPerPageChange(rows)}>
                                            {rows} Rows
                                        </MenuItem>
                                    ))}
                                </Menu>
                            )}
                        </Grid>
                    </Grid>
                </Grid>
            </MainCard>

            <AddNewUser isOpen={isAddUserDialogOpen} setIsOpen={setIsAddUserDialogOpen} />
        </>
    );
};

export default UserList;
