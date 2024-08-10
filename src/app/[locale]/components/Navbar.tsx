"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { GoPerson } from "react-icons/go";
import { GiFullMotorcycleHelmet } from "react-icons/gi";
import PublicNavigationLocaleSwitcher from "./PublicNavigationLocaleSwitcher";
import "../css/navbar.css";
import { useTranslations } from "next-intl";
import CartComponent from "./CartComponent";
import { CartProvider } from "../contexts/CartContext";
import { useSession, signOut } from "next-auth/react";
import { Button, Divider, Dropdown, Flex, MenuProps, Modal, Space } from "antd";
import { GoSignOut } from "react-icons/go";
import { IoBagOutline } from "react-icons/io5";

const NavBar = () => {
  const currentPath = usePathname();
  const t = useTranslations("Translate");
  const { data: session, status } = useSession();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    signOut({ callbackUrl: "/" });
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const links = [
    { label: `${t("all_products")}`, href: "/products" },
    { label: `${t("helmet")}`, href: "/helmet" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return currentPath === "/" || currentPath.split("/").length === 2;
    }
    return currentPath.includes(href);
  };

  const items: MenuProps["items"] = [
    {
      key: 1,
      label: (
        <Flex align="center" gap={8} onClick={showModal}>
          <GoSignOut />
          {t("sign_out")}
        </Flex>
      ),
    },
    {
      key: 2,
      label: (
        <Link href={`/profile`}>
          <Flex align="center" gap={8}>
            <GoPerson />
            Profile
          </Flex>
        </Link>
      ),
    },
  ];

  return (
    <>
      <nav className="navbar-container">
        <ul className="flex space-x-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${
                isActive(link.href) ? "activePath" : "nav-menu"
              } transition-colors`}
            >
              {link.label}
            </Link>
          ))}
        </ul>
        <Link href="/">
          <GiFullMotorcycleHelmet />
        </Link>
        <div className="flex items-center space-x-4">
          {status === "authenticated" && session?.user ? (
            <>
              <Dropdown menu={{ items }}>
                <Space>
                  <span>
                    {t("hello")} {session?.user?.email}
                  </span>
                  <Divider />
                </Space>
              </Dropdown>

              <CartProvider>
                <IoBagOutline />
                <CartComponent />
              </CartProvider>
            </>
          ) : (
            <Link href="/auth/sign-in">
              <GoPerson />
            </Link>
          )}

          <PublicNavigationLocaleSwitcher />
        </div>
      </nav>

      <Modal
        title={t("sign_out")}
        open={isModalOpen}
        width={300}
        footer={[
          <Button key="back" onClick={handleCancel}>
            {t("back")}
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            {t("confirm")}
          </Button>,
        ]}
      >
        <span>{t("title_sign_out")}</span>
      </Modal>
    </>
  );
};

export default NavBar;
