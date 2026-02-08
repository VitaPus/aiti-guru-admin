import React from "react";
import { Table, Progress, Button, Space, Dropdown } from "antd";
import { ReloadOutlined, FilterOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import styles from "./products.table.module.scss";

export type ProductRow = {
  id: number;
  title: string;
  category: string;
  brand?: string;
  sku?: string;
  price: number;
  rating: number;
  stock: number;
  availabilityStatus: string;
  meta?: { updatedAt?: string };
  thumbnail?: string;
};

type ProductsTableViewProps = {
  loading: boolean;
  progress: number;
  headerTitle: string;
  columns: ColumnsType<ProductRow>;
  data: ProductRow[];
  tableKey: number;
  onRefresh: () => void;
  onOpenAdd: () => void;
  sortMenuItems: { key: string; label: string }[];
  onSortSelect: (key: string) => void;
  addModal: React.ReactNode;
};

const ProductsTableView: React.FC<ProductsTableViewProps> = ({
  loading,
  progress,
  headerTitle,
  columns,
  data,
  tableKey,
  onRefresh,
  onOpenAdd,
  sortMenuItems,
  onSortSelect,
  addModal,
}) => {
  return (
    <>
      {loading && <Progress percent={progress} showInfo={false} />}
      <div className={styles.headerRow}>
        <div className={styles.headerTitle}>{headerTitle}</div>
        <Space className={styles.headerActions}>
          <Button
            shape="circle"
            icon={<ReloadOutlined />}
            aria-label="Обновить"
            onClick={onRefresh}
          />
          <Dropdown
            menu={{
              items: sortMenuItems,
              onClick: ({ key }) => onSortSelect(String(key)),
            }}
            trigger={["click"]}
          >
            <Button
              shape="circle"
              icon={<FilterOutlined />}
              aria-label="Сортировка"
            />
          </Dropdown>
          <Button type="primary" onClick={onOpenAdd}>
            Добавить
          </Button>
        </Space>
      </div>
      <Table
        key={tableKey}
        rowKey="id"
        columns={columns}
        dataSource={data}
        loading={loading}
        rowSelection={{ type: "checkbox" }}
        pagination={{ pageSize: 10 }}
      />
      {addModal}
    </>
  );
};

export default ProductsTableView;
