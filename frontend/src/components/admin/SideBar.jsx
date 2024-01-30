// import React from 'react'
// import { Link } from "react-router-dom";
// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
// import * as IoIcons from "react-icons/io";

// const SideBar = () => {
//   return (
//     <div style={{ width: "200px", backgroundColor: "#808080", padding: "100px" }}>
//       <Link to="/admin-profile"><IoIcons.IoMdPeople /> ALL USERS</Link>
//       <br />
//       <Link to="/admin-home/mentors-manage"><FaIcons.FaUser /> MENTORS</Link>
//       <br />
//       <Link to="/admin-home/course-manage"><AiIcons.AiOutlineBook />COURSES</Link>
//     </div>
//   );
// };
// export default SideBar


import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
// import './Navbar.css'
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import NotificationsIcon from '@mui/icons-material/Notifications';

const SideBar = () => {

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };


    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <PeopleAltIcon />
                    </ListItemIcon>
                    <Link to="/admin-profile">
                        <ListItemText primary={<span>ALL USERS</span>} />
                    </Link>
                </ListItemButton>
            </ListItem>

                <ListItem disablePadding>
                      <ListItemButton>
                          <ListItemIcon>
                              <InfoIcon />
                          </ListItemIcon>
                          <ListItemText primary={<Link to="/admin-home/course-manage">
                       <AiIcons.AiOutlineBook />
                       <span>COURSES</span>
                     </Link>} />
                    </ListItemButton>


                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>

                            <PermContactCalendarIcon />
                        </ListItemIcon>
                        <ListItemText primary={<Link to="/admin-home/mentors-manage">
               <FaIcons.FaUser />
              <span>MENTORS</span>
            </Link>} />

                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <NotificationsIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Notification"} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <div className='Navbar'>
            <MenuIcon
                onClick={
                    toggleDrawer("left", true)
                }
            />

            <Drawer
                anchor={"left"}
                open={state["left"]}
                onClose={toggleDrawer("left", false)}
            >
                {list("left")}
            </Drawer>

        </div>
    )
}
export default SideBar;



