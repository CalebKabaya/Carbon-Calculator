import React, { useState } from 'react';
import {
    Dialog,
    DialogTitle,
    IconButton,
    DialogContent,
    Button,
    Typography,
    TextField,
    Select,
    MenuItem,
    SelectChangeEvent
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
// import { useCreateUserStore } from 'CarbonCarculator/store/useUserStore';
// import { toast } from 'sonner';
// import { CreateUserRequest, UserRole } from 'CarbonCarculator/models';
// import { getAgencyNameFromStorage, retrieveEncryptedData } from 'CarbonCarculator/utils/AppSessionStorage';

interface AddNewUserProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const AddNewUser: React.FC<AddNewUserProps> = ({ isOpen, setIsOpen }) => {
    // const { createUser, isLoading } = useCreateUserStore();
    // const [userRole, setUserRole] = useState<UserRole>(UserRole.ROLE_AGENT);
    // const [formData, setFormData] = useState({
    //     firstName: '',
    //     lastName: '',
    //     emailAddress: ''
    // });

    // const roleName = retrieveEncryptedData();
    // const agencyName=getAgencyNameFromStorage();

    // const handleChange = (e: SelectChangeEvent<UserRole>) => {
    //     setUserRole(e.target.value as UserRole);
    // };

    const handleClose = () => {
        setIsOpen(false);
    };

    // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const { name, value } = event.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value
    //     });
    // };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        // const userData: CreateUserRequest = {
        //     ...formData,
        //     roleName: userRole,
        //     agencyName: agencyName!
        // };

        // try {
        //     await createUser(userData);
        //     toast.success('User created successfully');
        //     setIsOpen(false);
        //     // clear the form data
        //     setFormData({
        //         firstName: '',
        //         lastName: '',
        //         emailAddress: ''
        //     });
        //     setUserRole(UserRole.ROLE_AGENT); // Reset the role selection
        // } catch (error) {
        //     toast.error(`Failed to create user: ${error}`);
        // }
    };

    return (
        <Dialog
            open={isOpen}
            onClose={handleClose}
            maxWidth="md"
            fullWidth
            sx={{
                '& .MuiDialog-paper': {
                    width: '70%',
                    maxWidth: '600px'
                }
            }}
        >
            <DialogTitle>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#4A5568' }}>Create new user</span>
                    <IconButton onClick={handleClose}>
                        <ClearIcon />
                    </IconButton>
                </div>
                <div style={{ marginTop: '0.5rem', color: '#718096', fontSize: '0.875rem' }}>Please fill in the following details</div>
            </DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit}>
                    <div style={{ paddingBottom: '1rem' }}>
                        <Typography style={{ marginBottom: '0.25rem', fontSize: '0.875rem', fontWeight: '500', color: '#718096' }}>
                            Full Name
                        </Typography>
                        <TextField
                            placeholder="Enter Full Name"
                            required
                            name="firstName"
                            variant="outlined"
                            // value={formData.firstName}
                            // onChange={handleInputChange}
                            fullWidth
                        />
                    </div>
                    <div style={{ paddingBottom: '1rem' }}>
                        <Typography style={{ marginBottom: '0.25rem', fontSize: '0.875rem', fontWeight: '500', color: '#718096' }}>
                            Other Name
                        </Typography>
                        <TextField
                            placeholder="Enter Full Name"
                            required
                            name="lastName"
                            variant="outlined"
                            // value={formData.lastName}
                            // onChange={handleInputChange}
                            fullWidth
                        />
                    </div>
                    <div style={{ paddingBottom: '1rem' }}>
                        <Typography style={{ marginBottom: '0.25rem', fontSize: '0.875rem', fontWeight: '500', color: '#718096' }}>
                            Email
                        </Typography>
                        <TextField
                            placeholder="Enter Email"
                            required
                            name="emailAddress"
                            variant="outlined"
                            type="email"
                            // value={formData.emailAddress}
                            // onChange={handleInputChange}
                            fullWidth
                        />
                    </div>

                    <div style={{ paddingBottom: '1rem' }}>
                        <Typography style={{ marginBottom: '0.25rem', fontSize: '0.875rem', fontWeight: '500', color: '#718096' }}>
                            Select A Role
                        </Typography>
                        {/* <Select value={userRole} onChange={handleChange} fullWidth>
                            {roleName === 'ROLE_ADMINISTRATOR' ? (
                                <>
                                    <MenuItem value={UserRole.ROLE_ADMINISTRATOR}>Administrator</MenuItem>
                                    <MenuItem value={UserRole.ROLE_AGENT}>Agent</MenuItem>
                                </>
                            ) : (
                                <MenuItem value={UserRole.ROLE_AGENT}>Agent</MenuItem>
                            )}
                        </Select> */}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
                        <Button
                            onClick={handleClose}
                            variant="outlined"
                            sx={{
                                color: '#4A5568',
                                borderColor: '#4A5568',
                                backgroundColor: '#ffffff'
                            }}
                            // disabled={isLoading} // Disable button while loading
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            variant="outlined"
                            sx={{
                                backgroundColor: '#673ab7',
                                color: '#ffffff',
                                marginLeft: '1.5rem',
                                '&:hover': {
                                    backgroundColor: '#ffffff',
                                    color: '#673ab7',
                                    borderColor: '#673ab7'
                                },
                                '&.Mui-disabled': {
                                    color: '#ffffff',
                                    backgroundColor: '#98A2B3'
                                }
                            }}
                            // disabled={isLoading} // Disable button while loading
                        >
                            Submit
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default AddNewUser;
