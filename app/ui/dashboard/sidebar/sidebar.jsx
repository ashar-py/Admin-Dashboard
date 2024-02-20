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
import { auth, signOut } from "@/app/auth";

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
                title: "Prompt Builder",
                path: "/dashboard/prompt_builder",
                icon: <GoBookmark />,
            },
            {
                title: "Training Material",
                path: "/dashboard/training_material",
                icon: <GoBookmark />,
            },
            {
                title: "Business Logic",
                path: "/dashboard/business_logic",
                icon: <GoBookmark />,
            },
            {
                title: "Guardrails",
                path: "/dashboard/guardrails",
                icon: <GoBookmark />,
            },
            {
                title: "FAQs",
                path: "/dashboard/faqs",
                icon: <GoBookmark />,
            },
        ],
    },
    {
        title: "Settings",
        list: [
            {
                title: "Integration",
                path: "/dashboard/integration",
                icon: <MdOutlineSettings/>,
            },
            {
                title: "Notifications",
                path: "/dashboard/notifications",
                icon: <MdNotifications />,
            },
            {
                title: "Help Center",
                path: "/dashboard/help",
                icon: <MdHelpCenter />,
            },
        ],
    },
];

const Sidebar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.user}>
            <Image
          className={styles.userImage}
          src={ "/noavatar.png"}
          alt=""
          width="50"
          height="50"
        />
                <div className={styles.userDetail}>
                    <span className={styles.username}>Trini AI</span>
                    <span className={styles.userTitle}>Administrator</span>
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
            <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button className={styles.logout}>
          <MdLogout />
          Logout
        </button>
      </form>
            </div>
    )
}

export default Sidebar
