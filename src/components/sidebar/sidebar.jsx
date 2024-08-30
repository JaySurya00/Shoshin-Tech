import React from 'react';
import './sidebar.css';
import logo from '../../assets/logo.png'; 
import dashboardIcon from '../../assets/dashboard.svg';
import recruitmentIcon from '../../assets/recruitment.svg';
import scheduleIcon from '../../assets/schedule.svg';
import employeeIcon from '../../assets/employee.svg';
import departmentIcon from '../../assets/department.svg';
import supportIcon from '../../assets/support.svg';
import settingsIcon from '../../assets/setting.svg';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="brand">
        <h2>Vasitum</h2>
      </div>
      <div className="menu">
        <div className="menu-section">
          <h3>MAIN MENU</h3>
          <div className="menu-item active">
            <img src={dashboardIcon} alt="Dashboard Icon" />
            <span>Dashboard</span>
          </div>
          <div className="menu-item">
            <img src={recruitmentIcon} alt="Recruitment Icon" />
            <span>Recruitment</span>
          </div>
          <div className="menu-item">
            <img src={scheduleIcon} alt="Schedule Icon" />
            <span>Schedule</span>
          </div>
          <div className="menu-item">
            <img src={employeeIcon} alt="Employee Icon" />
            <span>Employee</span>
          </div>
          <div className="menu-item">
            <img src={departmentIcon} alt="Department Icon" />
            <span>Department</span>
          </div>
        </div>
        <div className="menu-section">
          <h3>OTHER</h3>
          <div className="menu-item">
            <img src={supportIcon} alt="Support Icon" />
            <span>Support</span>
          </div>
          <div className="menu-item">
            <img src={settingsIcon} alt="Settings Icon" />
            <span>Settings</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
