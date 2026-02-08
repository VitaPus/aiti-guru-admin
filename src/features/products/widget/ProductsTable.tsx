import React, { useEffect, useMemo } from "react";
import {
  Image,
  Button,
  Space,
  Modal,
  Form,
  Input,
  InputNumber,
  message,
} from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import { useProductsTableStore } from "@/features/products/model/productsTable.store";
import ProductsTableView from "@/features/products/ui/ProductsTableView";
import type { ProductRow } from "@/features/products/ui/ProductsTableView";
import styles from "@/features/products/ui/products.table.module.scss";
import addPillIconUrl from "@/assets/icons/add-pill.svg";

const USD_TO_RUB = 76;

const ProductsTable: React.FC = () => {
  const {
    data,
    loading,
    progress,
    refreshTick,
    isAddOpen,
    sortState,
    setSortState,
    loadProducts,
    refresh,
    openAdd,
    closeAdd,
  } = useProductsTableStore();
  const [form] = Form.useForm();

  const formatRub = (value: number) =>
    new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
    }).format(value);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const columns: ColumnsType<ProductRow> = [
    {
      title: "Наименование",
      dataIndex: "title",
      key: "title",
      width: "30%",
      render: (_, item) => (
        <div className={styles.nameCell}>
          {item.thumbnail && (
            <Image width={40} src={item.thumbnail} preview={false} />
          )}
          <div>
            <div>{item.title}</div>
            <div className={styles.brand}>{item.brand}</div>
          </div>
        </div>
      ),
    },
    {
      title: "Вендор",
      dataIndex: "brand",
      key: "brand",
      width: "12%",
      render: (v) => <span className={styles.vendorCell}>{v ?? "—"}</span>,
    },
    { title: "Артикул", dataIndex: "sku", key: "sku", width: "12%" },
    {
      title: "Оценка",
      dataIndex: "rating",
      key: "rating",
      width: "10%",
      render: (v) => {
        const value = Number(v);
        return (
          <span
            className={value < 3 ? styles.ratingLow : undefined}
          >{`${value.toFixed(1)}/5`}</span>
        );
      },
    },
    {
      title: "Цена,₽",
      dataIndex: "price",
      key: "price",
      width: "12%",
      render: (v) => formatRub(v * USD_TO_RUB),
    },
    {
      title: "Количество",
      dataIndex: "stock",
      key: "stock",
      width: "12%",
      render: (v) => {
        const value = Number(v);
        const level = value >= 60 ? 3 : value >= 20 ? 2 : 1;
        const bars = [1, 2, 3];

        return (
          <div className={styles.stockBars}>
            {bars.map((i) => (
              <svg
                key={i}
                width="6"
                height="18"
                viewBox="0 0 6 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={
                  i <= level ? styles.stockBarActive : styles.stockBarInactive
                }
              >
                <rect
                  className={styles.stockRect}
                  width="6"
                  height="18"
                  rx="3"
                />
              </svg>
            ))}
          </div>
        );
      },
    },
    {
      title: "",
      key: "actions",
      width: "12%",
      render: () => (
        <div className={styles.actionsCell}>
          <Space size={32}>
            <Button
              type="primary"
              shape="circle"
              icon={
                <img src={addPillIconUrl} alt="" className={styles.actionIcon} />
              }
              aria-label="Добавить"
              className={styles.actionPrimary}
            />
            <Button
              shape="circle"
              icon={<EllipsisOutlined />}
              aria-label="Ещё"
              className={styles.actionSecondary}
            />
          </Space>
        </div>
      ),
    },
  ];

  const sortedData = useMemo(() => {
    if (!sortState.field || !sortState.order) return data;
    const sorted = [...data];
    const dir = sortState.order === "ascend" ? 1 : -1;
    sorted.sort((a, b) => {
      const aVal = a[sortState.field as keyof ProductRow];
      const bVal = b[sortState.field as keyof ProductRow];
      if (typeof aVal === "number" && typeof bVal === "number") {
        return (aVal - bVal) * dir;
      }
      return 0;
    });
    return sorted;
  }, [data, sortState]);

  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(5);

  const sortMenuItems = [
    { key: "price_asc", label: "Цена ↑" },
    { key: "price_desc", label: "Цена ↓" },
    { key: "rating_asc", label: "Рейтинг ↑" },
    { key: "rating_desc", label: "Рейтинг ↓" },
    { key: "stock_asc", label: "Количество ↑" },
    { key: "stock_desc", label: "Количество ↓" },
    { key: "none", label: "Без сортировки" },
  ];

  const handleSortSelect = (key: string) => {
    if (key === "none") {
      setSortState({});
      setPage(1);
      return;
    }
    const [field, dir] = String(key).split("_");
    setSortState({
      field,
      order: dir === "asc" ? "ascend" : "descend",
    });
    setPage(1);
  };

  return (
    <ProductsTableView
      loading={loading}
      progress={progress}
      headerTitle="Все позиции"
      columns={columns}
      data={sortedData}
      tableKey={refreshTick}
      page={page}
      pageSize={pageSize}
      onRefresh={refresh}
      onOpenAdd={openAdd}
      onPageChange={(nextPage, nextPageSize) => {
        setPage(nextPage);
        if (nextPageSize !== pageSize) {
          setPageSize(nextPageSize);
        }
      }}
      sortMenuItems={sortMenuItems}
      onSortSelect={handleSortSelect}
      addModal={
        <Modal
          title="Добавить товар"
          open={isAddOpen}
          okText="Сохранить"
          cancelText="Отмена"
          onCancel={() => {
            closeAdd();
            form.resetFields();
          }}
          onOk={() => form.submit()}
        >
          <Form
            form={form}
            layout="vertical"
            onFinish={() => {
              message.success("Товар добавлен");
              closeAdd();
              form.resetFields();
            }}
          >
            <Form.Item
              label="Наименование"
              name="title"
              rules={[{ required: true, message: "Введите наименование" }]}
            >
              <Input placeholder="Например: Red Lipstick" />
            </Form.Item>
            <Form.Item
              label="Цена"
              name="price"
              rules={[{ required: true, message: "Введите цену" }]}
            >
              <InputNumber
                min={0}
                className={styles.fullWidth}
                placeholder="Например: 1299"
              />
            </Form.Item>
            <Form.Item
              label="Вендор"
              name="brand"
              rules={[{ required: true, message: "Введите вендора" }]}
            >
              <Input placeholder="Например: Essence" />
            </Form.Item>
            <Form.Item
              label="Артикул"
              name="sku"
              rules={[{ required: true, message: "Введите артикул" }]}
            >
              <Input placeholder="Например: BEA-ESS-ESS-001" />
            </Form.Item>
          </Form>
        </Modal>
      }
    />
  );
};

export default ProductsTable;
