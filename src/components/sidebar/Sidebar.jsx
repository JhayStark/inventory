import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import EventIcon from "@mui/icons-material/Event";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PeopleIcon from "@mui/icons-material/People";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import ContentPasteGoIcon from "@mui/icons-material/ContentPasteGo";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import ReduceCapacityIcon from "@mui/icons-material/ReduceCapacity";
import AirlinesIcon from "@mui/icons-material/Airlines";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext, useState } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const [dropdownContentIsShown, setDropdownContentIsShown] = useState(false);
  function toggleDropdown() {
    setDropdownContentIsShown(!dropdownContentIsShown);
  }

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">INVENTORY</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">SALES ORDER</p>
          <Link to="/new-invoice" style={{ textDecoration: "none" }}>
            <li>
              <NoteAltIcon className="icon" />
              <span>New Invoice</span>
            </li>
          </Link>
          <Link to="/manage-invoice" style={{ textDecoration: "none" }}>
            <li>
              <ContentPasteSearchIcon className="icon" />
              <span>Manage Invoices</span>
            </li>
          </Link>
          <Link to="/sales/new-quote" style={{ textDecoration: "none" }}>
            <li>
              <ContentPasteIcon className="icon" />
              <span>New Quote</span>
            </li>
          </Link>
          <Link to="/sales/manage-quote" style={{ textDecoration: "none" }}>
            <li>
              <ContentPasteGoIcon className="icon" />
              <span>Manage Quote</span>
            </li>
          </Link>

          <p className="title">STOCK TRANSFERS</p>
          <Link to="/new-transfer" style={{ textDecoration: "none" }}>
            <li>
              <AnalyticsIcon className="icon" />
              <span>New Transfer</span>
            </li>
          </Link>
          <Link to="/manage-transfer" style={{ textDecoration: "none" }}>
            <li>
              <CompareArrowsIcon className="icon" />
              <span>Manage Transfer </span>
            </li>
          </Link>
          <Link to="/new-quote" style={{ textDecoration: "none" }}>
            <li>
              <ContentPasteIcon className="icon" />
              <span>New Quote</span>
            </li>
          </Link>
          <li>
            <ContentPasteGoIcon className="icon" />
            <span>Manage Quote</span>
          </li>

          <p className="title">TASK</p>

          <li>
            <ReduceCapacityIcon className="icon" />
            <span>Mobilization</span>
          </li>
          <li>
            <AirlinesIcon className="icon" />
            <span>Outbound Deliveries</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Deliveries Stock</span>
          </li>
          <>
            <p className="title">FORMULARY</p>
            <p className="title">PRODUCT DATA </p>
          </>
          <li>
            <CompareArrowsIcon className="icon" />
            <span>New Product</span>
          </li>
          <li>
            <CompareArrowsIcon className="icon" />
            <span>Product Overview</span>
          </li>
          <li>
            <CompareArrowsIcon className="icon" />
            <span>Product Attributes</span>
          </li>
          <p className="title">INVENTORY MANAGER </p>
          <p className="title">INVENTORY</p>
          <li>
            <CompareArrowsIcon className="icon" />
            <span>Stock Overview</span>
          </li>
          <li>
            <CompareArrowsIcon className="icon" />
            <span>Warehouses</span>
          </li>
          <p className="title">STOCK RETURN </p>
          <li>
            <CompareArrowsIcon className="icon" />
            <span>Add New</span>
          </li>
          <li>
            <CompareArrowsIcon className="icon" />
            <span>Records</span>
          </li>
          <p className="title">INBOUND</p>
          <p className="title">PURCHASE ORDER</p>
          <li>
            <CompareArrowsIcon className="icon" />
            <span>New Order</span>
          </li>
          <li>
            <CompareArrowsIcon className="icon" />
            <span>Manage Order</span>
          </li>
          <p className="title">PUT-AWAY </p>
          <li>
            <CompareArrowsIcon className="icon" />
            <span>New Put-Away</span>
          </li>
          <li>
            <CompareArrowsIcon className="icon" />
            <span>Manage Put-Away</span>
          </li>
          <p className="title">ACCOUNT MANAGER </p>
          <p className="title">ACCOUNTS</p>
          <li>
            <CompareArrowsIcon className="icon" />
            <span>New Account</span>
          </li>
          <li>
            <CompareArrowsIcon className="icon" />
            <span>Manage Account</span>
          </li>
          <li>
            <CompareArrowsIcon className="icon" />
            <span>Manage Groups</span>
          </li>
          <p className="title">SUPPLIERS </p>

          <li>
            <CompareArrowsIcon className="icon" />
            <span>New Suppliers</span>
          </li>
          <li>
            <CompareArrowsIcon className="icon" />
            <span>Manage Suppliers</span>
          </li>
          <p className="title">BALANCE </p>
          <p className="title">ACCOUNTS</p>
          <li>
            <CompareArrowsIcon className="icon" />
            <span>Manage Account</span>
          </li>
          <li>
            <CompareArrowsIcon className="icon" />
            <span>New Account</span>
          </li>
          <li>
            <CompareArrowsIcon className="icon" />
            <span>Balance Sheet</span>
          </li>
          <li>
            <CompareArrowsIcon className="icon" />
            <span>Account Statement</span>
          </li>
          <p className="title">TRANSACTIONS</p>
          <li>
            <CompareArrowsIcon className="icon" />
            <span>View Transactions</span>
          </li>
          <li>
            <CompareArrowsIcon className="icon" />
            <span>New Transaction</span>
          </li>
          <li>
            <CompareArrowsIcon className="icon" />
            <span>New Transfer</span>
          </li>
          <li>
            <CompareArrowsIcon className="icon" />
            <span>Income</span>
          </li>
          <li>
            <CompareArrowsIcon className="icon" />
            <span>Expense</span>
          </li>
          <p className="title">BACKUP & EXPORT</p>
          <p className="title">EXPORT DATA</p>
          <li>
            <CompareArrowsIcon className="icon" />
            <span>Export People Data</span>
          </li>
          <li>
            <CompareArrowsIcon className="icon" />
            <span>Export Transactions</span>
          </li>
          <li>
            <CompareArrowsIcon className="icon" />
            <span>Export Product</span>
          </li>
          <li>
            <CompareArrowsIcon className="icon" />
            <span>Account Statement</span>
          </li>
          <li>
            <CompareArrowsIcon className="icon" />
            <span>Database Backup</span>
          </li>
          <li>
            <CompareArrowsIcon className="icon" />
            <span>TAX Statement</span>
          </li>
          <p className="title">IMPORT</p>
          <li>
            <CompareArrowsIcon className="icon" />
            <span>Import Products</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
