import { AppBar, Backdrop, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import React, { Suspense, lazy, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { orange } from '../../constants/color'
import { Menu as MenuIcon, Search as SearchIcon, Add as AddIcon, Group as GroupIcon, Logout as LogoutIcon, Notifications as NotificationsIcon } from '@mui/icons-material'
const SearchDialog = lazy(() => import("../specific/Search"));
const NotificationDialog =lazy(() => import ("../specific/Notification"));
const NewGroupsDialog = lazy(()=>import("../specific/NewGroups"));

const Header = () => {

    const [isMobile, setIsMobile] = useState(false);
    const [isSearch, setisSearch] = useState(false);
    const [isNewGroup, setisNewGroup] = useState(false);
    const [isNotification, setisNotification] = useState(false);



    const navigate = useNavigate();
    const handleMobile = () => {
        setIsMobile(prev => !prev)
    };

    const openSearch = () => {
        setisSearch(prev => !prev);
    };
    const openNewGroup = () => {
        setisNewGroup(prev => !prev);
    };
    const openNotification = () => {
        setisNotification(prev => !prev);
    }
    const navigateToGroup = () => navigate("/groups");

    const logoutHandler = () => {
        console.log("mobile");
    };


    return <>

        <Box sx={{ flexGrow: 1 }} height={"4rem"}>
            <AppBar position="static" sx={{ bgcolor: orange }} >
                <Toolbar>


                    <Typography variant='h6'
                        sx={{
                            display: { xs: "none", sm: "block" }
                        }}
                    >
                        Chat App
                    </Typography>


                    <Box
                        sx={{
                            display: { xs: "block", sm: "none" }
                        }}
                    >
                        <IconButton color='inherit' size='large' onClick={openSearch}>
                            <MenuIcon />
                        </IconButton>

                    </Box>
                    <Box
                        sx={{
                            flexGrow: 1,
                        }}
                    />

                    <Box>
                        <IconBtn
                            title={"Search"}
                            icon={<SearchIcon />}
                            onClick={openSearch}
                        />

                        <IconBtn
                            title={"New Group"}
                            icon={<AddIcon />}
                            onClick={openNewGroup}
                        />

                        <IconBtn
                            title={"Manage Groups"}
                            icon={<GroupIcon />}
                            onClick={navigateToGroup}
                        />
                           
                        <IconBtn
                            title={"Notification"}
                            icon={<NotificationsIcon />}
                            onClick={openNotification}
                        />


                        <IconBtn
                            title={"Logout"}
                            icon={<LogoutIcon />}
                            onClick={logoutHandler}
                        />
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>

{
    isSearch && (
            <Suspense fallback={<Backdrop open />}>
                 <SearchDialog />
            </Suspense>    
    )
}
{
    isNotification && (
        <Suspense fallback={<Backdrop open />}>
                 <NotificationDialog />
            </Suspense>    
    )
}
{
    isNewGroup && (
        <Suspense fallback={<Backdrop open />}>
                 <NewGroupsDialog />
            </Suspense>    
    )
}
    </>

}

const IconBtn = ({ title, icon, onClick }) => {
    return (
        <Tooltip title={title}>
            <IconButton color='inherit' onClick={onClick}>
                {icon}
            </IconButton>
        </Tooltip>
    )
}

export default Header
