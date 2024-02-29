
import HeaderMoudule from "@/components/HeaderAdmin/Header.module";
import SidebarModule from "@/components/SidebarAdmin/Sidebar.module";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admintrator",
  description: "....",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="wrapper">
        <HeaderMoudule />
        <div className="sidebar-page">
          <SidebarModule />
          <div className="wp-content">{children}</div>
        </div>
      </div>
    </>
  );
}
