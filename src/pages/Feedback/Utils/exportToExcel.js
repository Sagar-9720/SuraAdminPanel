import * as XLSX from "xlsx";

const exportToExcel = (data, filename) => {
  const ws = XLSX.utils.json_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Feedback");
  XLSX.writeFile(wb, `${filename}.xlsx`);
};

export default exportToExcel;
