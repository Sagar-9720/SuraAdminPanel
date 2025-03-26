import React, { useState } from "react";
import { Button, DatePicker } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import PaymentTable from "./Components/paymentTable";
import SearchFilters from "./Components/searchFilters";
import ExportToExcel from "./Components/ExportToExcel";
import styles from "./PaymentPage.module.css";

const PaymentDetails = () => {
  const [payments, setPayments] = useState([
    {
      id: 1,
      userName: "John Doe",
      standard: "10th",
      medium: "English",
      subject: "Mathematics",
      chapter: "Algebra",
      amount: 500,
      status: "Success",
      date: "2024-03-21",
      mobile: "9876543210",
    },
    {
      id: 2,
      userName: "Jane Smith",
      standard: "11th",
      medium: "Tamil",
      subject: "Physics",
      chapter: "Optics",
      amount: 700,
      status: "Cancelled",
      date: "2024-03-20",
      mobile: "8765432109",
    },
  ]);

  const [filteredPayments, setFilteredPayments] = useState(payments);
  const [dateRange, setDateRange] = useState([]);

  // Filter logic
  const handleFilter = (filters) => {
    let filteredData = [...payments];

    if (filters.userName) {
      filteredData = filteredData.filter((p) =>
        p.userName.toLowerCase().includes(filters.userName.toLowerCase())
      );
    }
    if (filters.mobile) {
      filteredData = filteredData.filter((p) =>
        p.mobile.includes(filters.mobile)
      );
    }
    if (filters.standard) {
      filteredData = filteredData.filter(
        (p) => p.standard === filters.standard
      );
    }
    if (filters.status) {
      filteredData = filteredData.filter((p) => p.status === filters.status);
    }
    if (dateRange.length === 2) {
      const [startDate, endDate] = dateRange;
      filteredData = filteredData.filter(
        (p) => p.date >= startDate && p.date <= endDate
      );
    }

    setFilteredPayments(filteredData);
  };

  return (
    <div className={styles.container}>
      <h1>Payment Management</h1>

      <div className={styles.filtersContainer}>
        <SearchFilters onFilter={handleFilter} />
        <DatePicker.RangePicker
          onChange={(dates, dateStrings) => setDateRange(dateStrings)}
        />
        <ExportToExcel payments={filteredPayments} />
      </div>

      <PaymentTable payments={filteredPayments} />
    </div>
  );
};

export default PaymentDetails;
