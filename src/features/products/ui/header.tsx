import React from "react";
import { Badge, Input } from "antd";
import {
  GlobalOutlined,
  BellOutlined,
  MessageOutlined,
  SettingOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import styles from "./header.module.scss";

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
          <GlobalOutlined />
        </button>
        <button
          className={styles.iconButton}
          type="button"
          aria-label="Уведомления"
        >
          <Badge
            count={12}
            size="small"
            color="#2f6bff"
            className={styles.badge}
          >
            <BellOutlined />
          </Badge>
        </button>
        <button
          className={styles.iconButton}
          type="button"
          aria-label="Сообщения"
        >
          <MessageOutlined />
        </button>
        <button
          className={styles.iconButton}
          type="button"
          aria-label="Настройки"
        >
          <SettingOutlined />
        </button>
      </div>
    </header>
  );
};

export default ProductsHeader;
