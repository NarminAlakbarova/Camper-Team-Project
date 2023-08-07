import React from "react";
import { Collapse } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

const Accordion = ({ position }) => {
  const textLeft="We have you covered! We will email you as items in your order ship, or if there are updates on the status of your order. Can’t find the email?Click here to check the status of your order."
  const textRight="Due to carrier delays, please allow up to 14 business days for your order to be delivered via our standard shipping method (“standard” at checkout)."
  const items = [
    {
      key: "1",
      label:
        position == "left"
          ? "Can I get the refund?"
          : "How many people can stay in the hotel?",
      children: <p>{position=="left" ? textLeft : textRight}</p>,
    },
    {
      key: "2",
      label:
        position == "left"
          ? "Can I change the travel date?"
          : "Do you except deposit payment?",
      children:  <p>{position=="left" ? textLeft : textRight}</p>,
    },
    {
      key: "3",
      label:
        position == "left"
          ? "My discount code is not working, what do I do?"
          : "Which credit cards do you except?",
      children: <p>{position=="left" ? textLeft : textRight}</p>,
    },
    {
      key: "4",
      label: position=="left" ? "Do I need to apply visa?" :"Are the tours included with travel fare?",
      children:  <p>{position=="left" ? textLeft : textRight}</p>,
    },
    {
      key: "5",
      label: position=="left" ? "Do you have insurance covered?" :"Are the tours included with meals?",
      children:  <p>{position=="left" ? textLeft : textRight}</p>,
    },
  ];
  return (
    <Collapse
      className="col col-12 col-md-6"
      bordered={false}
      accordion
      items={items}
      defaultActiveKey={["1"]}
      expandIcon={({ isActive }) =>
        isActive ? <MinusOutlined /> : <PlusOutlined />
      }
    />
  );
};

export default Accordion;
