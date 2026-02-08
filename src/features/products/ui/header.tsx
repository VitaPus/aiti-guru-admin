import React from "react";
import { Badge, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import styles from "./header.module.scss";
import globeIconUrl from "@/assets/icons/globe.svg";
import bellIconUrl from "@/assets/icons/bell.svg";
import messageIconUrl from "@/assets/icons/message.svg";
import settingsIconUrl from "@/assets/icons/settings.svg";

type ProductsHeaderProps = {
  value: string;
  onSearchChange: (value: string) => void;
};

const ProductsHeader: React.FC<ProductsHeaderProps> = ({
  value,
  onSearchChange,
}) => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <h1 className={styles.title}>Товары</h1>
      </div>
      <div className={styles.center}>
        <Input
          value={value}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Найти"
          prefix={<SearchOutlined />}
          className={styles.search}
          variant="borderless"
        />
      </div>
      <div className={styles.divider} />
      <div className={styles.right}>
        <button className={styles.iconButton} type="button" aria-label="Язык">
          <img src={globeIconUrl} alt="" className={styles.iconImage} />
        </button>
        <button
          className={styles.iconButton}
          type="button"
          aria-label="Уведомления"
        >
          <Badge
            count={12}
            size="small"
            color="#797FE9"
            className={styles.badge}
          >
            <img src={bellIconUrl} alt="" className={styles.iconImage} />
          </Badge>
        </button>
        <button
          className={styles.iconButton}
          type="button"
          aria-label="Сообщения"
        >
          <img src={messageIconUrl} alt="" className={styles.iconImage} />
        </button>
        <button
          className={styles.iconButton}
          type="button"
          aria-label="Настройки"
        >
          <img src={settingsIconUrl} alt="" className={styles.iconImage} />
        </button>
      </div>
    </header>
  );
};

export default ProductsHeader;
