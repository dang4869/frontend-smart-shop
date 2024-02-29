import FooterModule from "@/components/Footer/footer.module";
import HeaderModule from "@/components/Header/header.module";
import HeaderMoudule from "@/components/HeaderAdmin/Header.module";
import SidebarModule from "@/components/SidebarAdmin/Sidebar.module";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sản Phẩm",
  description: "....",
};

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderModule/>
      <div>{children}</div>
      <FooterModule/>
    </>
  );
}