import React, { useState } from "react";
import { Table, Button, Select, Modal, message } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import EditAdvertisementPopup from "./editAdvertisement_popup"

const { Option } = Select;
const { confirm } = Modal;

const initialAds = Array.from({ length: 10 }, (_, index) => ({
  key: index + 1,
  title: `Ad Title ${index + 1}`,
  text: `Ad Text ${index + 1}`,
  image: `https://via.placeholder.com/150`,
  link: `https://example.com/${index + 1}`,
}));

const AdvertisementTable = () => {
  const [ads, setAds] = useState(initialAds);
  const [editPopupOpen, setEditPopupOpen] = useState(false);
  const [selectedAd, setSelectedAd] = useState(null);
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const handleEditClick = (ad) => {
    setSelectedAd(ad);
    setEditPopupOpen(true);
  };

  const handleSave = (updatedAd) => {
    setAds((prevAds) =>
      prevAds.map((ad) =>
        ad.key === selectedAd.key ? { ...ad, ...updatedAd } : ad
      )
    );
    setEditPopupOpen(false);
  };

  const handleDelete = (key) => {
    confirm({
      title: "Are you sure you want to delete this advertisement?",
      icon: <ExclamationCircleOutlined />,
      okText: "Yes, Delete",
      okType: "danger",
      cancelText: "Cancel",
      onOk() {
        setAds(ads.filter((ad) => ad.key !== key));
        message.success("Advertisement deleted successfully!");
      },
    });
  };

  const columns = [
    { title: "Title", dataIndex: "title", key: "title" },
    { title: "Text", dataIndex: "text", key: "text" },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (src) => <img src={src} alt="Ad" className="ad-image" />,
    },
    {
      title: "Link",
      dataIndex: "link",
      key: "link",
      render: (text) => (
        <a href={text} target="_blank" rel="noopener noreferrer">
          Visit
        </a>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <>
          <EditOutlined
            onClick={() => handleEditClick(record)}
            className="action-icon"
          />
          <DeleteOutlined
            onClick={() => handleDelete(record.key)}
            className="action-icon delete-icon"
          />
        </>
      ),
    },
  ];

  return (
    <div>
      <div className="table-controls">
        Show{" "}
        <Select
          defaultValue={5}
          onChange={setPageSize}
          className="page-size-select"
        >
          <Option value={5}>5</Option>
          <Option value={10}>10</Option>
          <Option value={20}>20</Option>
        </Select>{" "}
        entries
      </div>

      <Table
        columns={columns}
        dataSource={ads}
        pagination={{
          pageSize,
          current: currentPage,
          onChange: setCurrentPage,
        }}
      />

      {selectedAd && (
        <EditAdvertisementPopup
          open={editPopupOpen}
          onClose={() => setEditPopupOpen(false)}
          adData={selectedAd}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default AdvertisementTable;
