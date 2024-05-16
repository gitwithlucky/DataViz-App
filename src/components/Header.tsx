import NotificationIcon from "../assets/icon.png";
import UserIcon from "../assets/avatar.png";
import Avatar from "../utils/common/Avatar";
import ExcludeIcon from "../assets/Exclude.png";

const Header = () => {
  // const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
      <div className="flex mx-8 my-2 items-center justify-between">
        <div className="flex">
          <div className="mr-5">
            <span className="h-1 w-8 block bg-gray-600 my-1"></span>
            <span className="h-1 w-8 block bg-gray-600 my-1"></span>
            <span className="h-1 w-8 block bg-gray-600 my-1"></span>
          </div>
          <div className="flex">
            <div className="mr-3">
              <Avatar src={ExcludeIcon} alt="Exclude Icon" />
            </div>
            <div className="font-bold text-2xl">XYZ Shop</div>
          </div>
        </div>
        <div className="flex">
          <div className="mr-3 mt-1">
            <Avatar src={NotificationIcon} alt="Notification Icon" />
          </div>
          <div>
            <Avatar src={UserIcon} alt="User Icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
