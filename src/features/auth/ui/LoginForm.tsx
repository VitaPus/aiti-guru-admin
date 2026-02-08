import React from "react";
import { LockOutlined } from "@ant-design/icons";
import { Button, Checkbox, Flex, Form, Input } from "antd";

import styles from "./LoginForm.module.scss";

type LoginFormProps = {
  onFinish: (values: { username: string; password: string }) => void;
  loading?: boolean;
};

const LoginForm: React.FC<LoginFormProps> = ({ onFinish, loading }) => {
  return (
    <Form
      name="login"
      initialValues={{ remember: true }}
      className={styles.form}
      onFinish={onFinish}
    >
      <div className={styles.logo} aria-hidden="true">
        <svg
          width="68"
          height="74"
          viewBox="0 0 68 74"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_dd_1013_98)">
            <rect x="8" y="2" width="52" height="52" rx="26" fill="white" />
            <rect
              x="8"
              y="2"
              width="52"
              height="52"
              rx="26"
              fill="url(#paint0_linear_1013_98)"
            />
            <rect
              x="8.5"
              y="2.5"
              width="51"
              height="51"
              rx="25.5"
              stroke="url(#paint1_linear_1013_98)"
            />
            <path
              d="M21.12 33.5692C21.4254 33.5692 21.673 31.0758 21.673 28C21.673 24.9242 21.4254 22.4308 21.12 22.4308C20.8146 22.4308 20.567 24.9242 20.567 28C20.567 31.0758 20.8146 33.5692 21.12 33.5692Z"
              fill="black"
            />
            <path
              d="M22.59 34.188C22.9302 34.188 23.206 31.4176 23.206 28C23.206 24.5825 22.9302 21.812 22.59 21.812C22.2498 21.812 21.974 24.5825 21.974 28C21.974 31.4176 22.2498 34.188 22.59 34.188Z"
              fill="black"
            />
            <path
              d="M24.228 34.8816C24.603 34.8816 24.907 31.8006 24.907 28C24.907 24.1994 24.603 21.1184 24.228 21.1184C23.853 21.1184 23.549 24.1994 23.549 28C23.549 31.8006 23.853 34.8816 24.228 34.8816Z"
              fill="black"
            />
            <path
              d="M26.041 35.6432C26.4586 35.6432 26.797 32.2212 26.797 28C26.797 23.7788 26.4586 20.3568 26.041 20.3568C25.6235 20.3568 25.285 23.7788 25.285 28C25.285 32.2212 25.6235 35.6432 26.041 35.6432Z"
              fill="black"
            />
            <path
              d="M28.057 36.4932C28.5209 36.4932 28.897 32.6906 28.897 28C28.897 23.3094 28.5209 19.5068 28.057 19.5068C27.5931 19.5068 27.217 23.3094 27.217 28C27.217 32.6906 27.5931 36.4932 28.057 36.4932Z"
              fill="black"
            />
            <path
              d="M30.304 37.4384C30.8181 37.4384 31.235 33.2127 31.235 28C31.235 22.7873 30.8181 18.5616 30.304 18.5616C29.7898 18.5616 29.373 22.7873 29.373 28C29.373 33.2127 29.7898 37.4384 30.304 37.4384Z"
              fill="black"
            />
            <path
              d="M32.796 38.4856C33.3682 38.4856 33.832 33.791 33.832 28C33.832 22.209 33.3682 17.5144 32.796 17.5144C32.2238 17.5144 31.76 22.209 31.76 28C31.76 33.791 32.2238 38.4856 32.796 38.4856Z"
              fill="black"
            />
            <path
              d="M35.561 39.6484C36.1989 39.6484 36.716 34.4332 36.716 28C36.716 21.5668 36.1989 16.3516 35.561 16.3516C34.9231 16.3516 34.406 21.5668 34.406 28C34.406 34.4332 34.9231 39.6484 35.561 39.6484Z"
              fill="black"
            />
            <path
              d="M38.634 40.9472C39.3415 40.9472 39.915 35.1505 39.915 28C39.915 20.8495 39.3415 15.0528 38.634 15.0528C37.9265 15.0528 37.353 20.8495 37.353 28C37.353 35.1505 37.9265 40.9472 38.634 40.9472Z"
              fill="black"
            />
            <path
              d="M42.05 42.382C42.8348 42.382 43.471 35.943 43.471 28C43.471 20.0571 42.8348 13.618 42.05 13.618C41.2652 13.618 40.629 20.0571 40.629 28C40.629 35.943 41.2652 42.382 42.05 42.382Z"
              fill="black"
            />
            <path
              d="M45.844 43.98C46.7177 43.98 47.426 36.8255 47.426 28C47.426 19.1745 46.7177 12.02 45.844 12.02C44.9703 12.02 44.262 19.1745 44.262 28C44.262 36.8255 44.9703 43.98 45.844 43.98Z"
              fill="black"
            />
          </g>
          <defs>
            <filter
              id="filter0_dd_1013_98"
              x="0"
              y="0"
              width="68"
              height="74"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="12" />
              <feGaussianBlur stdDeviation="4" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1013_98"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology
                radius="2"
                operator="dilate"
                in="SourceAlpha"
                result="effect2_dropShadow_1013_98"
              />
              <feOffset />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_1013_98"
                result="effect2_dropShadow_1013_98"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_1013_98"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_1013_98"
              x1="34"
              y1="54"
              x2="34"
              y2="2"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.5" stopColor="#232323" stopOpacity="0" />
              <stop offset="1" stopColor="#232323" stopOpacity="0.06" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_1013_98"
              x1="34"
              y1="2"
              x2="34"
              y2="54"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#EDEDED" stopOpacity="0.7" />
              <stop offset="0.7" stopColor="#EDEDED" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
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
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_i_1013_109)">
                <path
                  d="M2 7L10.1649 12.7154C10.8261 13.1783 11.1567 13.4097 11.5163 13.4993C11.8339 13.5785 12.1661 13.5785 12.4837 13.4993C12.8433 13.4097 13.1739 13.1783 13.8351 12.7154L22 7M6.8 20H17.2C18.8802 20 19.7202 20 20.362 19.673C20.9265 19.3854 21.3854 18.9265 21.673 18.362C22 17.7202 22 16.8802 22 15.2V8.8C22 7.11984 22 6.27976 21.673 5.63803C21.3854 5.07354 20.9265 4.6146 20.362 4.32698C19.7202 4 18.8802 4 17.2 4H6.8C5.11984 4 4.27976 4 3.63803 4.32698C3.07354 4.6146 2.6146 5.07354 2.32698 5.63803C2 6.27976 2 7.11984 2 8.8V15.2C2 16.8802 2 17.7202 2.32698 18.362C2.6146 18.9265 3.07354 19.3854 3.63803 19.673C4.27976 20 5.11984 20 6.8 20Z"
                  stroke="#EDEDED"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <filter
                  id="filter0_i_1013_109"
                  x="0.999878"
                  y="3"
                  width="22.0002"
                  height="22"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.17 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow_1013_109"
                  />
                </filter>
              </defs>
            </svg>
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
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Flex justify="space-between" align="center">
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
        <p>или</p>
        <p>
          Нет аккаунта?<a href="">Создать</a>
        </p>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
