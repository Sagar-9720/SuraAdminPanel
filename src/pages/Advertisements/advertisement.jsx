import React, { useState } from "react";
import { Tabs } from "antd";
import AdvertisementTable from "./Components/advertisementTable";
import AddAdvertisement from "./Components/addAdvertisement";
import "./styles.css";

const { TabPane } = Tabs;

const Advertisement = () => {
  return (
    <div className="advertisement-container">
      <h1 className="page-title">Advertisement Management</h1>
      <Tabs defaultActiveKey="1" className="custom-tabs">
        <TabPane tab="📊 VIEW ADS" key="1">
          <AdvertisementTable />
        </TabPane>
        <TabPane tab="➕ ADD ADVERTISEMENT" key="2">
          <AddAdvertisement />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Advertisement;
