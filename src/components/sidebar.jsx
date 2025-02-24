import { useState } from "react";
import { 
  FaUser, FaMoneyBillWave, FaStar, FaFileAlt, FaShareAlt, 
  FaQuestionCircle, FaShoppingCart, FaChartLine, FaRegImages, FaCog 
} from "react-icons/fa"; 
import { FiMenu } from "react-icons/fi"; 

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  const toggleMenu = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  const menuItems = [
    { icon: <FaUser />, title: "Profile", subMenu: ["Settings", "Logout"] },
    { icon: <FaMoneyBillWave />, title: "Wallet", subMenu: ["Transactions", "Balance"] },
    { icon: <FaStar />, title: "Favorites", subMenu: ["Saved Items", "Wishlist"] },
    { icon: <FaFileAlt />, title: "Documents", subMenu: ["Reports", "Invoices"] },
    { icon: <FaShareAlt />, title: "Share", subMenu: ["Invite Friends", "Referral Code"] },
    { icon: <FaQuestionCircle />, title: "Help", subMenu: ["FAQ", "Support"] },
    { icon: <FaShoppingCart />, title: "Orders", subMenu: ["Active Orders", "History"] },
    { icon: <FaChartLine />, title: "Analytics", subMenu: ["Statistics", "Trends"] },
    { icon: <FaRegImages />, title: "Gallery", subMenu: ["Images", "Videos"] },
    { icon: <FaCog />, title: "Settings", subMenu: ["Preferences", "Security"] },
  ];

  return (
    
    <div className={`sidebar-container ${open ? "sidebar-expanded" : "sidebar-collapsed"}`}>
      <button onClick={toggleSidebar} className="sidebar-toggle">
        <FiMenu />
      </button>

      {/* Sidebar Menu */}
      <div className="sidebar-menu">
        {menuItems.map((item, index) => (
          <div key={index} className="sidebar-item">
            <button className="sidebar-button" onClick={() => toggleMenu(index)}>
              <span className="sidebar-icon">{item.icon}</span>
              {open && <span className="sidebar-title">{item.title}</span>}
            </button>

            {/* Submenu */}
            {activeMenu === index && open && (
              <div className="sidebar-submenu">
                {item.subMenu.map((subItem, i) => (
                  <p key={i} className="sidebar-submenu-item">
                    {subItem}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;