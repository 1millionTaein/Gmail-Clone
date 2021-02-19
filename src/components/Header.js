import "./Header.scss";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { IconButton, Avatar } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { logout, userInfo } from "../features/userSlice";
import { auth } from "../firebase";
const Header = () => {
  const user = useSelector(userInfo);
  const dispatch = useDispatch();
  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };
  return (
    <header className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png"
          alt="Gmail Icon"
        />
      </div>
      <div className="header__middle">
        <SearchIcon />
        <input type="text" placeholder="메일 검색" />
        <ArrowDropDownIcon />
      </div>
      <div className="header__right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar onClick={() => signOut()} src={user?.photoUrl} />
      </div>
    </header>
  );
};

export default Header;
