import React, { useEffect, useState } from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead;
import TableRow from '@mui/material/TableRow';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Avatar from 'ui-component/extended/Avatar';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BlockTwoToneIcon from '@mui/icons-material/BlockTwoTone';
import EditIcon from '@mui/icons-material/Edit';
import Loader from 'ui-component/Loader';
import NoResultsFound from 'CarbonCarculator/components/NoResultsFound';

interface UsersListProps {
    searchTerm: string;
    currentPage: number;
    rowsPerPage: number;
}

interface User {
    firstName: string;
    lastName: string;
    emailAddress: string;
    role: {
        roleName: string;
    };
    createdAt: string;
    locked: boolean;
}

const mockUserData: User[] = [
    {
        firstName: 'John',
        lastName: 'Doe',
        emailAddress: 'john.doe@example.com',
        role: { roleName: 'ROLE_AGENT' },
        createdAt: '2023-01-10T08:30:00Z',
        locked: false,
    },
    {
        firstName: 'Jane',
        lastName: 'Smith',
        emailAddress: 'jane.smith@example.com',
        role: { roleName: 'ROLE_AGENCY_ADMIN' },
        createdAt: '2023-02-15T09:45:00Z',
        locked: true,
    },
    {
        firstName: 'Mark',
        lastName: 'Brown',
        emailAddress: 'mark.brown@example.com',
        role: { roleName: 'ROLE_AGENT' },
        createdAt: '2023-03-20T10:00:00Z',
        locked: false,
    },
    // Add more mock users as needed
];

const roleMapping: Record<string, string> = {
    ROLE_AGENT: 'Agent',
    ROLE_AGENCY_ADMIN: 'Agency Admin',
    // Add more role mappings as needed
};

const UsersList: React.FC<UsersListProps> = ({ searchTerm, currentPage, rowsPerPage }) => {
    const theme = useTheme();
    const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

    useEffect(() => {
        // Filter user data based on search term
        const filtered = mockUserData.filter((user) =>
            `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredUsers(filtered);
    }, [searchTerm]);

    // Paginate the filtered data
    const paginatedUsers = filteredUsers.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    );

    if (!filteredUsers.length) {
        return <NoResultsFound title="No results found" />;
    }

    const formatRoles = (roleString: string) => {
        return roleString
            .split(',')
            .map((role) => roleMapping[role] || role)
            .join(', ');
    };

    return (
        <TableContainer>
            <Table>
                {/* <TableHead> */}
                    <TableRow>
                        <TableCell sx={{ pl: 3 }}>Name</TableCell>
                        <TableCell>Role</TableCell>
                        <TableCell>Date Created</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell align="center" sx={{ pr: 3 }}>
                            Actions
                        </TableCell>
                    </TableRow>
                {/* </TableHead> */}
                <TableBody>
                    {paginatedUsers.map((user, index) => {
                        const firstNameInitial = user.firstName ? user.firstName.charAt(0).toUpperCase() : '?';
                        const lastNameInitial = user.lastName ? user.lastName.charAt(0).toUpperCase() : '?';

                        return (
                            <TableRow hover key={index}>
                                <TableCell sx={{ pl: 3 }}>
                                    <Stack direction="row" alignItems="center" spacing={2}>
                                        <Avatar
                                            sx={{ fontSize: '0.9rem' }}
                                            alt={`${user.firstName || 'N/A'} ${user.lastName || 'N/A'}`}
                                        >
                                            {firstNameInitial}{lastNameInitial}
                                        </Avatar>
                                        <Stack>
                                            <Stack direction="row" alignItems="center" spacing={0.25}>
                                                <Typography variant="subtitle1">
                                                    {user.firstName} {user.lastName}
                                                </Typography>
                                                {!user.locked && (
                                                    <CheckCircleIcon sx={{ color: 'success.dark', width: 14, height: 14 }} />
                                                )}
                                            </Stack>
                                            <Typography variant="subtitle2" noWrap>
                                                {user.emailAddress}
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                </TableCell>
                                <TableCell>{formatRoles(user.role.roleName)}</TableCell>
                                <TableCell>{new Date(user.createdAt).toLocaleDateString()}</TableCell>
                                <TableCell>
                                    {!user.locked ? (
                                        <Chip
                                            label="Active"
                                            size="small"
                                            sx={{
                                                bgcolor:
                                                    theme.palette.mode === 'dark'
                                                        ? 'dark.main'
                                                        : alpha(theme.palette.success.light, 0.6),
                                                color: 'success.dark'
                                            }}
                                        />
                                    ) : (
                                        <Chip
                                            label="Inactive"
                                            size="small"
                                            sx={{
                                                bgcolor:
                                                    theme.palette.mode === 'dark'
                                                        ? 'dark.main'
                                                        : alpha(theme.palette.orange.light, 0.8),
                                                color: 'orange.dark'
                                            }}
                                        />
                                    )}
                                </TableCell>
                                <TableCell align="center" sx={{ pr: 3 }}>
                                    <Stack direction="row" justifyContent="center" alignItems="center">
                                        <Tooltip placement="top" title="Edit">
                                            <IconButton color="primary" aria-label="edit" size="large">
                                                <EditIcon sx={{ fontSize: '1.1rem' }} />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip placement="top" title="Deactivate">
                                            <IconButton
                                                color="primary"
                                                sx={{
                                                    color: 'orange.dark',
                                                    borderColor: 'orange.main',
                                                    '&:hover ': { bgcolor: 'orange.light' }
                                                }}
                                                size="large"
                                            >
                                                <BlockTwoToneIcon sx={{ fontSize: '1.1rem' }} />
                                            </IconButton>
                                        </Tooltip>
                                    </Stack>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default UsersList;
