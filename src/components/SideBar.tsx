import Avatar from "../utils/common/Avatar";
import VectorIcon from "../assets/Vector.png";
import LogOutIcon from "../assets/logout.png";
import BriefcaseIcon from "../assets/briefcase.png";
import SettingsIcon from "../assets/settings.png";
import StarIcon from "../assets/star.png";
import HistoryIcon from "../assets/history.png";
import CalendarIcon from "../assets/calendar.png";

const SideBar = ({displayEntryForm}: any) => {
  return (
    <>
      <div>
        <section className="mx-8 font-bold text-gray-600 flex">
          <div>
            <div className="my-3 flex items-center">
              <div>
                <Avatar src={VectorIcon} alt="Overview Icon" />
              </div>
              <span className="ml-4">Overview</span>
            </div>
            <div className="my-3 flex items-center">
              <div>
                <Avatar src={BriefcaseIcon} alt="Overview Icon" />
              </div>
              <span className="ml-4">Sales</span>
            </div>
            <div className="my-3 flex items-center">
              <div>
                <Avatar src={CalendarIcon} alt="Overview Icon" />
              </div>
              <span className="ml-4">Customers</span>
            </div>
            <div className="my-3 flex items-center">
              <div>
                <Avatar src={HistoryIcon} alt="Overview Icon" />
              </div>
              <span className="ml-4">Inventory</span>
            </div>
            <div className="my-3 flex items-center">
              <div>
                <Avatar src={StarIcon} alt="Overview Icon" />
              </div>
              <span className="ml-4">Profit/Loss</span>
            </div>
            <div className="fixed bottom-0">
              <div
                className="my-3 flex items-center"
                onClick={() => displayEntryForm(true)}
              >
                <div>
                  <Avatar src={CalendarIcon} alt="Overview Icon" />
                </div>
                <span className="ml-4">Data Entry Form</span>
              </div>
              <div className="my-3 flex items-center">
                <div>
                  <Avatar src={SettingsIcon} alt="Overview Icon" />
                </div>
                <span className="ml-4">Settings</span>
              </div>
              <div className="my-3 flex items-center">
                <div>
                  <Avatar src={LogOutIcon} alt="Overview Icon" />
                </div>
                <span className="ml-4">Log Out</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SideBar;
