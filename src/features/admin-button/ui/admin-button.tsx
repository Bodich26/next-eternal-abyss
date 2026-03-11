"use client";

import { Buttons } from "@/shared";
import { PUBLIC_ROUTES } from "@/../routes";
import { usePathname } from "next/navigation";
import { AdminPortal } from "../model/admin-portal";

export const AdminButton = () => {
  const pathName = usePathname();
  if (pathName.startsWith(PUBLIC_ROUTES.ADMIN)) return null;

  return (
    <AdminPortal>
      <div className="fixed right-10 bottom-10 z-[9999]">
        <Buttons
          as="link"
          href={PUBLIC_ROUTES.ADMIN}
          text="Админка"
          className="p-2!"
        />
      </div>
    </AdminPortal>
  );
};
