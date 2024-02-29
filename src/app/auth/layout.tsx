import HeaderMoudule from "@/components/HeaderAdmin/Header.module";
import HeaderAuthModule from "@/components/HeaderAdmin/HeaderAuth.module";
import SidebarModule from "@/components/SidebarAdmin/Sidebar.module";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SmartShop",
  description: "....",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderAuthModule />
      <div className="my-4">
        <div className="container">{children}</div>
      </div>
    </>
  );
}
