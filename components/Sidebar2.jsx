"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, 
  X, 
  Home, 
  Settings, 
  User, 
  BarChart3, 
  FileText, 
  Bell, 
  Search,
  LogOut,
  ChevronDown,
  Users,
  Calendar,
  Mail,
  Star,
  Shield,
  Database
} from "lucide-react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [expandedSubmenu, setExpandedSubmenu] = useState(null);

  const menuItems = [
    { 
      name: "Dashboard", 
      icon: Home, 
      badge: null,
      submenu: null
    },
    { 
      name: "Analytics", 
      icon: BarChart3, 
      badge: "New",
      submenu: ["Overview", "Reports", "Statistics"]
    },
    { 
      name: "Users", 
      icon: Users, 
      badge: "12",
      submenu: ["All Users", "Add User", "User Roles"]
    },
    { 
      name: "Projects", 
      icon: FileText, 
      badge: null,
      submenu: ["Active", "Completed", "Archived"]
    },
    { 
      name: "Calendar", 
      icon: Calendar, 
      badge: "5",
      submenu: null
    },
    { 
      name: "Messages", 
      icon: Mail, 
      badge: "99+",
      submenu: ["Inbox", "Sent", "Drafts"]
    },
    { 
      name: "Notifications", 
      icon: Bell, 
      badge: "3",
      submenu: null
    },
    { 
      name: "Database", 
      icon: Database, 
      badge: null,
      submenu: ["Tables", "Queries", "Backup"]
    }
  ];

  const bottomMenuItems = [
    { name: "Settings", icon: Settings },
    { name: "Profile", icon: User },
    { name: "Security", icon: Shield },
    { name: "Logout", icon: LogOut }
  ];

  const handleSubmenuToggle = (itemName) => {
    if (expandedSubmenu === itemName) {
      setExpandedSubmenu(null);
    } else {
      setExpandedSubmenu(itemName);
    }
  };

  const sidebarVariants = {
    open: { 
      width: 280,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 40 
      }
    },
    closed: { 
      width: 70,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 40 
      }
    }
  };

  const contentVariants = {
    open: { 
      opacity: 1, 
      x: 0,
      transition: { 
        delay: 0.1,
        duration: 0.3
      }
    },
    closed: { 
      opacity: 0, 
      x: -20,
      transition: { 
        duration: 0.2
      }
    }
  };

  return (
    <div className="flex h-screen">
      <motion.nav
        variants={sidebarVariants}
        animate={open ? "open" : "closed"}
        className="bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 text-white h-screen relative shadow-2xl"
      >
        {/* Header */}
        <div className="p-4 border-b border-slate-700/50">
          <div className="flex items-center justify-between">
            <AnimatePresence mode="wait">
              {open && (
                <motion.div
                  variants={contentVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="flex items-center space-x-3"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="font-bold text-lg">Dashboard</h2>
                    <p className="text-xs text-gray-300">Admin Panel</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            <button 
              onClick={() => setOpen(!open)} 
              className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 ml-auto"
            >
              <motion.div
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.div>
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {open && (
            <motion.div
              variants={contentVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="p-4"
            >
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Menu */}
        <div className="flex-1 px-4 py-2 overflow-y-auto">
          <ul className="space-y-1">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeItem === item.name;
              const hasSubmenu = item.submenu && item.submenu.length > 0;
              const isSubmenuExpanded = expandedSubmenu === item.name;
              
              return (
                <li key={item.name}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setActiveItem(item.name);
                      if (hasSubmenu && open) {
                        handleSubmenuToggle(item.name);
                      }
                    }}
                    className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 group ${
                      isActive 
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg shadow-purple-500/25' 
                        : 'hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-300'}`} />
                      <AnimatePresence>
                        {open && (
                          <motion.span
                            variants={contentVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className={`font-medium ${isActive ? 'text-white' : 'text-gray-200'}`}
                          >
                            {item.name}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </div>
                    
                    <AnimatePresence>
                      {open && (
                        <motion.div
                          variants={contentVariants}
                          initial="closed"
                          animate="open"
                          exit="closed"
                          className="flex items-center space-x-2"
                        >
                          {item.badge && (
                            <span className={`px-2 py-1 text-xs rounded-full font-semibold ${
                              item.badge === "New" 
                                ? 'bg-green-500 text-white' 
                                : 'bg-red-500 text-white'
                            }`}>
                              {item.badge}
                            </span>
                          )}
                          {hasSubmenu && (
                            <motion.div
                              animate={{ rotate: isSubmenuExpanded ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronDown className="w-4 h-4 text-gray-400" />
                            </motion.div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>

                  {/* Submenu */}
                  <AnimatePresence>
                    {open && hasSubmenu && isSubmenuExpanded && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="ml-8 mt-2 space-y-1 overflow-hidden"
                      >
                        {item.submenu.map((subItem, subIndex) => (
                          <motion.li
                            key={subItem}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: subIndex * 0.05 }}
                          >
                            <button
                              onClick={() => setActiveItem(subItem)}
                              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors duration-200 ${
                                activeItem === subItem
                                  ? 'bg-purple-600/50 text-white'
                                  : 'text-gray-300 hover:bg-white/5 hover:text-white'
                              }`}
                            >
                              {subItem}
                            </button>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Bottom Menu */}
        <div className="p-4 border-t border-slate-700/50">
          <ul className="space-y-1">
            {bottomMenuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeItem === item.name;
              
              return (
                <li key={item.name}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveItem(item.name)}
                    className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 ${
                      isActive 
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg shadow-purple-500/25' 
                        : 'hover:bg-white/10'
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-300'}`} />
                    <AnimatePresence>
                      {open && (
                        <motion.span
                          variants={contentVariants}
                          initial="closed"
                          animate="open"
                          exit="closed"
                          className={`font-medium ${isActive ? 'text-white' : 'text-gray-200'}`}
                        >
                          {item.name}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Active Indicator */}
        <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 opacity-50" />
      </motion.nav>

      {/* Main Content Area */}
      <div className="flex-1 bg-gray-50 p-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={activeItem}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Settings Page */}
            {activeItem === "Settings" && (
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">⚙️ Settings</h1>
                <p className="text-gray-600 mb-8">Manage your application preferences and configurations.</p>
                
                <div className="space-y-6">
                  {/* General Settings */}
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <Settings className="w-5 h-5 mr-2 text-purple-600" />
                      General Settings
                    </h2>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <label className="text-sm font-medium text-gray-900">Dark Mode</label>
                          <p className="text-sm text-gray-500">Enable dark theme for better viewing</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                        </label>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <label className="text-sm font-medium text-gray-900">Email Notifications</label>
                          <p className="text-sm text-gray-500">Receive email updates about your account</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                        </label>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium text-gray-900">Language</label>
                        <select className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500">
                          <option>English</option>
                          <option>Indonesian</option>
                          <option>Spanish</option>
                          <option>French</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Security Settings */}
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <Shield className="w-5 h-5 mr-2 text-red-600" />
                      Security Settings
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-gray-900">Change Password</label>
                        <div className="mt-2 space-y-2">
                          <input type="password" placeholder="Current Password" className="w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500" />
                          <input type="password" placeholder="New Password" className="w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500" />
                          <input type="password" placeholder="Confirm New Password" className="w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500" />
                        </div>
                        <button className="mt-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                          Update Password
                        </button>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <label className="text-sm font-medium text-gray-900">Two-Factor Authentication</label>
                          <p className="text-sm text-gray-500">Add an extra layer of security</p>
                        </div>
                        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                          Enable 2FA
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* System Settings */}
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <Database className="w-5 h-5 mr-2 text-blue-600" />
                      System Settings
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-medium text-gray-900">Storage Usage</h3>
                        <div className="mt-2">
                          <div className="flex justify-between text-sm text-gray-600">
                            <span>Used: 2.3 GB</span>
                            <span>Total: 10 GB</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                            <div className="bg-purple-600 h-2 rounded-full" style={{ width: '23%' }}></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-medium text-gray-900">Backup</h3>
                        <p className="text-sm text-gray-600 mt-1">Last backup: 2 days ago</p>
                        <button className="mt-2 bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors">
                          Backup Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Profile Page */}
            {activeItem === "Profile" && (
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">👤 Profile</h1>
                <p className="text-gray-600 mb-8">Manage your personal information and preferences.</p>
                
                <div className="space-y-6">
                  {/* Profile Header */}
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 text-white">
                    <div className="flex items-center space-x-6">
                      <div className="relative">
                        <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                          <User className="w-12 h-12 text-white" />
                        </div>
                        <button className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full flex items-center justify-center text-purple-600 hover:bg-gray-100 transition-colors">
                          <span className="text-sm">📷</span>
                        </button>
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold">John Doe</h2>
                        <p className="text-purple-100">Senior Developer</p>
                        <p className="text-purple-200 text-sm">john.doe@company.com</p>
                        <div className="flex items-center mt-2 space-x-2">
                          <span className="bg-green-500 w-3 h-3 rounded-full"></span>
                          <span className="text-sm text-purple-100">Online</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Personal Information */}
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <User className="w-5 h-5 mr-2 text-purple-600" />
                      Personal Information
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-gray-900">First Name</label>
                        <input type="text" defaultValue="John" className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-900">Last Name</label>
                        <input type="text" defaultValue="Doe" className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-900">Email</label>
                        <input type="email" defaultValue="john.doe@company.com" className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-900">Phone</label>
                        <input type="tel" defaultValue="+1 (555) 123-4567" className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500" />
                      </div>
                      <div className="md:col-span-2">
                        <label className="text-sm font-medium text-gray-900">Bio</label>
                        <textarea rows="3" defaultValue="Passionate software developer with 5+ years of experience in web development and UI/UX design." className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"></textarea>
                      </div>
                    </div>
                    <button className="mt-4 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                      Save Changes
                    </button>
                  </div>

                  {/* Activity & Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl shadow-lg p-6">
                      <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                        <BarChart3 className="w-5 h-5 mr-2 text-green-600" />
                        Activity Stats
                      </h2>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Projects Completed</span>
                          <span className="font-semibold text-green-600">24</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Hours Worked</span>
                          <span className="font-semibold text-blue-600">1,247</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Team Members</span>
                          <span className="font-semibold text-purple-600">12</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Success Rate</span>
                          <span className="font-semibold text-orange-600">98%</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6">
                      <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                        <Calendar className="w-5 h-5 mr-2 text-orange-600" />
                        Recent Activity
                      </h2>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">Completed Project Alpha</p>
                            <p className="text-xs text-gray-500">2 hours ago</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">Updated dashboard UI</p>
                            <p className="text-xs text-gray-500">5 hours ago</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">Team meeting</p>
                            <p className="text-xs text-gray-500">1 day ago</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">Code review session</p>
                            <p className="text-xs text-gray-500">2 days ago</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Default Content for Other Pages */}
            {activeItem !== "Settings" && activeItem !== "Profile" && (
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{activeItem}</h1>
                <p className="text-gray-600 mb-8">Welcome to the {activeItem.toLowerCase()} section of your dashboard.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((card) => (
                    <motion.div
                      key={card}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: card * 0.1 }}
                      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mb-4 flex items-center justify-center">
                        <BarChart3 className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Card {card}</h3>
                      <p className="text-gray-600 text-sm">This is a sample card for the {activeItem} section.</p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-2xl font-bold text-purple-600">{card * 42}</span>
                        <span className="text-sm text-green-500 font-medium">+12%</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}