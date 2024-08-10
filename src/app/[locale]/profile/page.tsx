"use client";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const UserPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const t = useTranslations("Translate");

  useEffect(() => {
    if (status !== "authenticated") {
      router.push("/");
    }
  }, [router, session, status]);
  return (
    <>
      {status === "authenticated" && session?.user && (
        <p>
          {t("hi")} {session?.user.email}
        </p>
      )}
    </>
  );
};

export default UserPage;
