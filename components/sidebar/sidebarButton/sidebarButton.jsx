import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./sidebarButton.module.css";

function SidebarButton({ href, title, icon }) {
  const router = useRouter();

  const isActive = router.pathname === href;

  return (
    <Link href={href}>
      <a className={`${styles.btn} ${isActive && styles.active}`}>
        {icon}
        <span>{title}</span>
      </a>
    </Link>
  );
}
