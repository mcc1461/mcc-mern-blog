import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../components/DashSidebar";
import DashProfile from "../components/_DashProfile";
import DashPosts from "../components/DashPosts";
import DashUsers from "../components/_DashUsers";
import DashComments from "../components/DashComments";
import DashboardComp from "../components/_DashboardComp";

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState("dash"); // Set default tab to 'dash'

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    console.log("URL Params:", tabFromUrl); // Debug log
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  return (
    <div className="flex flex-col min-h-screen md:flex-row">
      <div className="md:w-56">
        {/* Sidebar */}
        <DashSidebar />
      </div>
      {/* profile... */}
      {tab === "profile" && <DashProfile />}
      {/* posts... */}
      {tab === "posts" && <DashPosts />}
      {/* users */}
      {tab === "users" && <DashUsers />}
      {/* comments  */}
      {tab === "comments" && <DashComments />}
      {/* dashboard comp */}
      {tab === "dash" && <DashboardComp />}
    </div>
  );
}
