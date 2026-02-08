import React from "react";
import { Button, Checkbox, Flex, Form, Input } from "antd";

import styles from "./LoginForm.module.scss";
import logoUrl from "@/assets/icons/login-logo.svg";
import emailIconUrl from "@/assets/icons/email.svg";
import lockIconUrl from "@/assets/icons/lock.svg";

type LoginFormProps = {
  onFinish: (values: { username: string; password: string }) => void;
  loading?: boolean;
};

const LoginForm: React.FC<LoginFormProps> = ({ onFinish, loading }) => {
  const handleFinish = (values: { email: string; password: string }) => {
    onFinish({ username: values.email, password: values.password });
  };

  return (
    <Form
      name="login"
      initialValues={{ remember: true }}
      className={styles.form}
      onFinish={handleFinish}
    >
      <div className={styles.logo} aria-hidden="true">
        <img src={logoUrl} alt="" className={styles.logoImage} />
      </div>
      <h1 className={styles.title}>Добро пожаловать!</h1>
      <p className={styles.subtitle}>Пожалуйста, авторизуйтесь</p>
      <div className={styles.fieldLabel}>Почта</div>
      <Form.Item
        name="email"
        rules={[{ required: true, message: "Please input your Email!" }]}
      >
        <Input
          className={styles.inputControl}
          prefix={
            <img src={emailIconUrl} alt="" className={styles.inputIcon} />
          }
          allowClear
          placeholder="Email"
        />
      </Form.Item>
      <div className={styles.fieldLabel}>Пароль</div>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input.Password
          className={styles.inputControl}
          prefix={<img src={lockIconUrl} alt="" className={styles.inputIcon} />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Flex
          justify="space-between"
          align="center"
          className={styles.rememberRow}
        >
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Запомнить данные</Checkbox>
          </Form.Item>
        </Flex>
      </Form.Item>

      <Form.Item>
        <Button
          block
          type="primary"
          htmlType="submit"
          loading={loading}
          className={styles.submitButton}
        >
          Войти
        </Button>
        <p className={styles.divider}>или</p>
        <p className={styles.signup}>
          Нет аккаунта?{" "}
          <a className={styles.signupLink} href="">
            Создать
          </a>
        </p>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
