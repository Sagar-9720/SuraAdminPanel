import React, { useState } from "react";
import { Tabs, Table, Button, Select, Input, message } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import AddPdfForm from "./Components/addPdf";
import EditPdfPopup from "./Components/editPdf_popup";
import "./styles.css";

const { TabPane } = Tabs;
const { Option } = Select;

const dummyPdfs = Array.from({ length: 20 }, (_, index) => ({
  sno: index + 1,
  standard: `Standard ${(index % 3) + 10}`,
  title: `Title ${index + 1}`,
  summary: `Summary ${index + 1}`,
  file: `https://example.com/file${index + 1}.pdf`,
}));

const PdfPage = () => {
  const [pdfs, setPdfs] = useState(dummyPdfs);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchStandard, setSearchStandard] = useState("");
  const [editPopupOpen, setEditPopupOpen] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState(null);

  const filteredPdfs = pdfs.filter(
    (pdf) =>
      pdf.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (searchStandard === "" || pdf.standard === searchStandard)
  );

  const handleEditClick = (pdf) => {
    setSelectedPdf(pdf);
    setEditPopupOpen(true);
  };

  const handleSave = (updatedPdf) => {
    setPdfs((prevPdfs) =>
      prevPdfs.map((pdf) =>
        pdf.sno === selectedPdf.sno ? { ...pdf, ...updatedPdf } : pdf
      )
    );
    setEditPopupOpen(false);
  };

  const handleDelete = (sno) => {
    setPdfs(pdfs.filter((pdf) => pdf.sno !== sno));
    message.success("PDF deleted successfully");
  };

  const columns = [
    { title: "S.No", dataIndex: "sno", key: "sno" },
    { title: "Standard", dataIndex: "standard", key: "standard" },
    { title: "Title", dataIndex: "title", key: "title" },
    { title: "Summary", dataIndex: "summary", key: "summary" },
    {
      title: "File",
      dataIndex: "file",
      key: "file",
      render: (text) => (
        <a href={text} target="_blank" rel="noopener noreferrer">
          View PDF
        </a>
      ),
    },
    {
      title: "Options",
      key: "options",
      render: (_, record) => (
        <>
          <EditOutlined
            className="action-btn"
            onClick={() => handleEditClick(record)}
          />
          <DeleteOutlined
            className="action-btn delete-btn"
            onClick={() => handleDelete(record.sno)}
          />
        </>
      ),
    },
  ];

  return (
    <div className="container">
      <h1>PDF Management</h1>
      <Tabs defaultActiveKey="1">
        <TabPane tab="VIEW" key="1">
          <div className="controls">
            <Input
              placeholder="Search by Title"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Select
              placeholder="Filter by Standard"
              allowClear
              onChange={setSearchStandard}
            >
              <Option value="Standard 10">10th</Option>
              <Option value="Standard 11">11th</Option>
              <Option value="Standard 12">12th</Option>
            </Select>
          </div>
          <Table columns={columns} dataSource={filteredPdfs} rowKey="sno" />
        </TabPane>
        <TabPane tab="ADD" key="2">
          <AddPdfForm
            onAdd={(newPdf) =>
              setPdfs([...pdfs, { sno: pdfs.length + 1, ...newPdf }])
            }
          />
        </TabPane>
      </Tabs>
      {selectedPdf && (
        <EditPdfPopup
          open={editPopupOpen}
          onClose={() => setEditPopupOpen(false)}
          pdfData={selectedPdf}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default PdfPage;
