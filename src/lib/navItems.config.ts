
import { NavSection } from "@/types/dashboard.interface";
import { getDefaultDashboardRoute, UserRole } from "./auth-utils";

export const getCommonNavItems = (role: UserRole): NavSection[] => {
  const defaultDashboard = getDefaultDashboardRoute(role);

  return [
    {
      items: [
        // {
        //   title: "Dashboard",
        //   href: defaultDashboard,
        //   icon: "LayoutDashboard",
        //   role: UserRole.ADMIN,
        // },
        {
          title: "My Profile",
          href: defaultDashboard,
          icon: "User",
          role: UserRole.ADMIN,
        },
      ],
    },
    // {
    //   title: "Settings",
    //   items: [
    //     {
    //       title: "Change Password",
    //       href: "/change-password",
    //       icon: "Settings", // ✅ String
    //       role: UserRole.ADMIN,
    //     },
    //   ],
    // },
  ];
};




export const adminNavItems: NavSection[] = [
  {
    title: "Blog Management",
    items: [
      // {
      //   title: "Add a Blog",
      //   href: "/admin/dashboard/create-blogs",
      //   icon: "Book", // ✅ String
      //   role: UserRole.ADMIN,
      // },
      {
        title: "Manage All Blogs",
        href: "/admin/dashboard/manage-blogs",
        icon: "Book", // ✅ String
        role: UserRole.ADMIN,
      },
      
    ],
  },
];

export const getNavItemsByRole = (role: UserRole): NavSection[] => {
  const commonNavItems = getCommonNavItems(role);

  switch (role) {
    case "ADMIN":
      return [...commonNavItems, ...adminNavItems];
    
    default:
      return [];
  }
};
