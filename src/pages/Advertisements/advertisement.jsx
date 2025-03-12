import React, { useState } from "react";
import { Tabs, Table, Button, Pagination, Select } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import EditAdvertisementPopup from "./editAdvertisement_popup";
import AddAdvertisementForm from "./addAdvertisement";
const { TabPane } = Tabs;
const { Option } = Select;

const dummyAds = Array.from({ length: 20 }, (_, index) => ({
  sno: index + 1,
  title: `Ad Title ${index + 1}`,
  text: `Ad Text ${index + 1}`,
  image: `Image URL ${index + 1}`,
  link: `Link URL ${index + 1}`,
}));

const Advertisement = () => {
  const [ads, setAds] = useState(dummyAds);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [editPopupOpen, setEditPopupOpen] = useState(false);
  const [selectedAd, setSelectedAd] = useState(null);

  const handleEditClick = (ad) => {
    setSelectedAd(ad);
    setEditPopupOpen(true);
  };

  const handleSave = (updatedAd) => {
    setAds((prevAds) =>
      prevAds.map((ad) =>
        ad.sno === selectedAd.sno ? { ...ad, ...updatedAd } : ad
      )
    );
    setEditPopupOpen(false);
  };

  const columns = [
    { title: "S.No", dataIndex: "sno", key: "sno" },
    { title: "Title", dataIndex: "title", key: "title" },
    { title: "Text", dataIndex: "text", key: "text" },
    { title: "Image", dataIndex: "image", key: "image" },
    { title: "Link", dataIndex: "link", key: "link" },
    {
      title: "Options",
      key: "options",
      render: (_, record) => (
        <>
          <EditOutlined
            onClick={() => handleEditClick(record)}
            style={{ marginRight: 8, cursor: "pointer" }}
          />
          <DeleteOutlined style={{ cursor: "pointer" }} />
        </>
      ),
    },
  ];

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePageSizeChange = (value) => {
    setPageSize(value);
    setCurrentPage(1); // Reset to first page when page size changes
  };

  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, dummyAds.length);
  const handleAddAdvertisement = (newAd) => {
    console.log("New Advertisement Added:", newAd);
    // Add API call here to save the advertisement to the backend
  };
  return (
    <div style={{ padding: "20px", width: "100%" }}>
      <h1>Advertisement</h1>
      <Tabs defaultActiveKey="1">
        <TabPane tab="VIEW" key="1">
          <div
            style={{
              marginBottom: "20px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              Show{" "}
              <Select
                defaultValue={10}
                onChange={handlePageSizeChange}
                style={{ width: 120 }}
              >
                <Option value={5}>5</Option>
                <Option value={10}>10</Option>
                <Option value={20}>20</Option>
                <Option value={50}>50</Option>
                <Option value={100}>100</Option>
              </Select>{" "}
              entries
            </div>
            <div>
              Showing {startItem} to {endItem} of {dummyAds.length} entries
            </div>
          </div>
          <Table
            columns={columns}
            dataSource={dummyAds.slice(
              (currentPage - 1) * pageSize,
              currentPage * pageSize
            )}
            pagination={false}
            rowKey="sno"
          />
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            {currentPage > 1 && (
              <>
                <Button
                  onClick={() => handlePageChange(currentPage - 1)}
                  style={{ marginRight: "10px" }}
                >
                  Previous
                </Button>
                <span
                  onClick={() => handlePageChange(currentPage - 1)}
                  style={{ marginRight: "10px", cursor: "pointer" }}
                >
                  {currentPage - 1}
                </span>
              </>
            )}
            <span
              style={{
                marginRight: "10px",
                padding: "5px 10px",
                border: "1px solid gray",
                backgroundColor: "lightgray",
              }}
            >
              {currentPage}
            </span>
            <Button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={endItem >= dummyAds.length}
              style={{ marginLeft: "10px" }}
            >
              Next
            </Button>
          </div>
        </TabPane>
        <TabPane tab="ADD" key="2">
          <h2>Add New Advertisement</h2>
          <AddAdvertisementForm onAdd={handleAddAdvertisement} />
        </TabPane>
      </Tabs>
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

export default Advertisement;
