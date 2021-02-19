import { Button, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import "./Sidebar.scss";
import SidebarOption from "./SidebarOption";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone";
import { openSendMessage } from "../features/mailSlice";
import { useDispatch } from "react-redux";

const Sidebar = () => {
  const dispatch = useDispatch();

  return (
    <aside className="sidebar">
      <Button
        onClick={() => dispatch(openSendMessage())}
        startIcon={<AddIcon fontSize="large" />}
        className="sidebar__compose"
      >
        편지쓰기
      </Button>

      <SidebarOption
        Icon={InboxIcon}
        title="받은편지함"
        number={54}
        selected={true}
      />
      <SidebarOption Icon={StarIcon} title="별표편지함" number={54} />
      <SidebarOption Icon={AccessTimeIcon} title="다시 알림 항목" number={54} />
      <SidebarOption Icon={LabelImportantIcon} title="중요편지함" number={54} />

      <SidebarOption Icon={NearMeIcon} title="보낸편지함" number={54} />
      <SidebarOption Icon={NoteIcon} title="임시보관함" number={54} />
      <SidebarOption Icon={ExpandMoreIcon} title="더보기" number={54} />

      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
