import React from "react";
import "../CSS/Sidebar.css";
import ChatIcon from "@material-ui/icons/Chat";
import { IconButton, Avatar } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import SidebarChat from "./SidebarChat";

function Sidebar() {
  return (
    <div className="sidebar">
      {/* sidebar header */}
      <div className="sidebar__header">
        <Avatar src="https://lh3.googleusercontent.com/--yVvQb9jn3c/X44f55VypLI/AAAAAAAAAAc/-W6XODQBVz8WPAbn5VPPS5WQAs2u-l5XgCEwYBhgLKtMDAL1Ocqy_BBwixVoOdt_W02kDQMjcguNbbbrOfbSoy3v5F1l_dQMhg4lSHFvZKr3aqmRK4UkWan7twTEons0nxiShZtf3Kz_9vXDFn_rbM2YMj21SpewkKPAHSNgnMpPtXxgpSE7StdFFKqgJzBxaUuViFx52o0LGFJfgR0Ib6rGyL8jprgAPMyKtwDiyysoLwwaaGSlmJ5aFZZ3CIK3KAfFe2DRushy22IHONO9rn5IgGKBTEc5n-swc4pD8bgLK7Ut5Xo5corCA1i9QJUCtNfXr-4zq7C4dCL0CYZ4oLPoxwDbarWXhRwoDhDDo-6bocdj1t_GPlFOmNhDj4wyeytwvN39JT5duMQ98PxoLP03BaUwDoL9gPWLoNk9v0oV6sglQ5MiONIPuyfiRtMkBZ6x-rvaM4vthBjU6h9R-wyB-Qe8eZh-2IxEgx76hK0ZaKyvJx5dOv7NYcvp_nP0pVsMU2TmYNu9LewPH51G_AToaHQPa5UCNPtRetyEccSL5hEZ3YyqKuUUu2YOC9GN2tgnQfEyDXJxP7439oVYQZI1R1X8u-NF_SI5N1xo41nT8CTTdz8SdZ8TKlw5X1DN7xQEaLjBjSlOjd5zEkpI4TD6g1FMw3rSTggY/w140-h140-p/2020-10-19.jpg" />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlinedIcon />
          <input placeholder="Search or Start a new chat" type="text" />
        </div>
      </div>

      <div className="sidebar__chats">
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
