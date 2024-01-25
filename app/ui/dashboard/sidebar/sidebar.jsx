import styles from "./sidebar.module.css";
import Image from 'next/image';
import MenuLink from "./MenuLink/MenuLink";
import {
    MdAdminPanelSettings,
    MdDashboard,
    MdNotifications,
    MdOutlineSettings,
    MdHelpCenter,
    MdLogout,
} from "react-icons/md";
import {IoInformationCircleOutline} from "react-icons/io5";
import { BiConversation } from "react-icons/bi";
import { GoBookmark } from "react-icons/go";

const menuItems = [
    {
        title: "Control Centre",
        list: [
            {
                title: "Admin Panel",
                path: "/dashboard/customers",
                icon: <MdAdminPanelSettings />,
            },
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: <MdDashboard />,
            },
            {
                title: "Conversations",
                path: "/dashboard/conversations",
                icon: <BiConversation />,
            },
            {
                title: "Customer Stats",
                path: "/dashboard/stats",
                icon: <IoInformationCircleOutline />,
            },
        ],
    },
    {
        title: "Agents",
        list: [
            {
                title: "Basic Prompt",
                path: "/#",
                icon: <GoBookmark />,
            },
            {
                title: "Training Material",
                path: "/#",
                icon: <GoBookmark />,
            },
            {
                title: "Business Logic",
                path: "/#",
                icon: <GoBookmark />,
            },
            {
                title: "Guardrails",
                path: "/#",
                icon: <GoBookmark />,
            },
            {
                title: "FAQs",
                path: "/#",
                icon: <GoBookmark />,
            },
        ],
    },
    {
        title: "Settings",
        list: [
            {
                title: "Integration",
                path: "/#",
                icon: <MdOutlineSettings/>,
            },
            {
                title: "Notifications",
                path: "/#",
                icon: <MdNotifications />,
            },
            {
                title: "Help Center",
                path: "/#",
                icon: <MdHelpCenter />,
            },
        ],
    },
];

const Sidebar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <Image className={styles.userImage} src="/noavatar.png" width="50" height="50" />
                <div className={styles.userDetail}>
                    <span className={styles.username}>John Doe</span>
                    <span className={styles.userTitle}>Adminitstrator</span>
                </div>
            </div>
            <ul className={styles.list}>
            {menuItems.map(cat=>(
                <li key={cat.title}>
                    <span className={styles.cat}>{cat.title}</span>
                    {cat.list.map((item) => (
                        <MenuLink item={item} key={item.title} />
                    ))}
                    </li>
            ))}
            </ul>
            <button className={styles.logout}>
                <MdLogout />Logout</button>
            </div>
    )
}

export default Sidebar
