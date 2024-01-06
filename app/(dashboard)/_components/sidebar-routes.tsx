"use client";

import { BarChart, Compass, Layout, List } from "lucide-react";
import SidebarItem from "./sidebar-item";
import { usePathname } from "next/navigation";

const guestRoutes = [
  {
    href: "/",
    icon: Layout,
    label: "Dashboard",
  },
  {
    href: "/search",
    icon: Compass,
    label: "Browse",
  },
];

const teacherRoutes = [
  {
    href: "/teacher/courses",
    icon: List,
    label: "Courses",
  },
  {
    href: "/teacher/analytics",
    icon: BarChart,
    label: "Analytics",
  },
];

export default function SidebarRoutes() {
  const pathname = usePathname();

  const isTeacherPage = pathname?.includes("/teacher");

  const routes = isTeacherPage ? teacherRoutes : guestRoutes;
  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem key={route.href} {...route} />
      ))}
    </div>
  );
}
