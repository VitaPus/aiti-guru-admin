import React from "react";
import { Table, Progress, Button, Space, Dropdown, Pagination } from "antd";
import type { ColumnsType } from "antd/es/table";
import styles from "./products.table.module.scss";
import reloadIconUrl from "@/assets/icons/reload.svg";
import filterIconUrl from "@/assets/icons/filter.svg";

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
  page: number;
  pageSize: number;
  onRefresh: () => void;
  onOpenAdd: () => void;
  onPageChange: (page: number, pageSize: number) => void;
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
  page,
  pageSize,
  onRefresh,
  onOpenAdd,
  onPageChange,
  sortMenuItems,
  onSortSelect,
  addModal,
}) => {
  const total = data.length;
  const start = total === 0 ? 0 : (page - 1) * pageSize + 1;
  const end = Math.min(page * pageSize, total);
  const pageData = data.slice((page - 1) * pageSize, page * pageSize);

  return (
    <>
      {loading && <Progress percent={progress} showInfo={false} />}
      <div className={styles.tableWrapper}>
        <div className={styles.headerRow}>
          <div className={styles.headerTitle}>{headerTitle}</div>
          <Space className={styles.headerActions}>
            <Button
              shape="circle"
              icon={<img src={reloadIconUrl} alt="" className={styles.iconImage} />}
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
                icon={
                  <img src={filterIconUrl} alt="" className={styles.iconImage} />
                }
                aria-label="Сортировка"
              />
            </Dropdown>
            <Button
              type="primary"
              onClick={onOpenAdd}
              className={styles.addButton}
            >
              <span className={styles.addPlus}>+</span>
              Добавить
            </Button>
          </Space>
        </div>
        <Table
          key={tableKey}
          rowKey="id"
          columns={columns}
          dataSource={pageData}
          loading={loading}
          className={styles.table}
          rowSelection={{ type: "checkbox" }}
          pagination={false}
        />
        <div className={styles.paginationRow}>
          <div className={styles.paginationInfo}>
            Показано {start}-{end} из {total}
          </div>
          <Pagination
            current={page}
            pageSize={pageSize}
            total={total}
            onChange={onPageChange}
            showSizeChanger={false}
          />
        </div>
      </div>
      {addModal}
    </>
  );
};

export default ProductsTableView;
