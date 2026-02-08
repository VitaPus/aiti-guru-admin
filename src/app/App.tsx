import { useAuthStore } from "./store/auth.store";
import LoginForm from "@/features/auth/widget/LoginForm";
import styles from "./App.module.scss";
import ProductsTable from "@/features/products/widget/ProductsTable";
import ProductsHeader from "@/features/products/widget/ProductsHeader";

function App() {
  const { isAuth } = useAuthStore();

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        {isAuth ? (
          <div className={styles.page}>
            <ProductsHeader />
            <ProductsTable />
          </div>
        ) : (
          <div className={styles.auth}>
            <LoginForm />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
