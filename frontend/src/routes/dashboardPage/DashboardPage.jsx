import { Outlet } from "react-router-dom";
import "./dashboardPage.css";

const DashboardPage = () => {
  return (
    <div className="dashboardPage">
      DashboardPage
      <Outlet />
    </div>
  );
};

export default DashboardPage;
