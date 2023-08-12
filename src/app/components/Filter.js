import { Dropdown, Input, Radio, Space } from "antd";
import React, { useState } from "react";
import { setData } from "../productSlice";

export default function Filter() {
  const products = useSelector((state) => state.products.value);

  function sortByPriceAscending() {
    let newArr = products.slice().sort((a, b) => a.price - b.price);
    dispatch(setData(newArr));
  }

  const items = [
    {
      label: <a href="https://www.antgroup.com">1st menu item</a>,
      key: "0",
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item</a>,
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: "3rd menu item",
      key: "3",
    },
  ];
  return (
    <>
      <Dropdown
        menu={{
          items,
        }}
        trigger={["click"]}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space>Click me</Space>
        </a>
      </Dropdown>
    </>
  );
}
