import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
  } from "@material-tailwind/react";
   import home_icon from "../assets/assets_admin/home_icon.svg"
   import appointment_icon from "../assets/assets_admin/appointment_icon.svg"
   import add_icon from "../assets/assets_admin/add_icon.svg"
   import people_icon from "../assets/assets_admin/people_icon.svg"
   function Sidebar() {
    return (
      <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 p-4">
         
        </div>
        <List>
          <ListItem>
            <ListItemPrefix>
              <img src={home_icon} className="h-5 w-5" />
            </ListItemPrefix>
            Dashboard
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <img src={appointment_icon }className="h-5 w-5" />
            </ListItemPrefix>
            Appointments
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <img src={add_icon} className="h-5 w-5" />
            </ListItemPrefix>
            Add Doctor
            <ListItemSuffix>
            </ListItemSuffix>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <img src={people_icon} className="h-5 w-5" />
            </ListItemPrefix>
            Doctors List
          </ListItem>
        </List>
      </Card>
    );
  }

  export default Sidebar;