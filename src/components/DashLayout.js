import { Outlet } from "react-router-dom";
import DashHeader from "./DashHeader";
import DashFooter from "./DashFooter";

/**
 * The Main page after employee has login.
 * Container the Dasher Header, then with react-router-dom Outlet for any children Routes
 * that get wrap with DashLayout, then with the Dash Footer
 */
const DashLayout = () => {
  return (
    <>
      <DashHeader />
      <div className="dash-container">
        <Outlet />
      </div>
      <DashFooter />
    </>
  );
};
export default DashLayout;
