import React from "react";
import LoginFormView from "@/features/auth/ui/LoginForm";
import { useAuthModelStore } from "@/features/auth/model/auth.store";

const LoginForm: React.FC = () => {
  const loginUser = useAuthModelStore((s) => s.loginUser);
  const loading = useAuthModelStore((s) => s.loginLoading);

  return <LoginFormView onFinish={loginUser} loading={loading} />;
};

export default LoginForm;
