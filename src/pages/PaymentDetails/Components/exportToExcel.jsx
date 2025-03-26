import React from "react";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import * as XLSX from "xlsx";

const ExportToExcel = ({ payments }) => {
  const handleExport = () => {
    const ws = XLSX.utils.json_to_sheet(payments);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Payments");
    XLSX.writeFile(wb, "Payment_Records.xlsx");
  };

  return (
    <Button type="primary" icon={<DownloadOutlined />} onClick={handleExport}>
      Export to Excel
    </Button>
  );
};

export default ExportToExcel;
