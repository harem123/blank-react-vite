import React, { useState } from "react";
import { Button,  } from "@mui/material";
import * as XLSX from "xlsx";


const BotonExcelDefault = ({ products }) => {
  const [loading, setLoading] = useState(false);

  const handleDownload = () => {
    setLoading(true);

    const libro = XLSX.utils.book_new();

    const hoja = XLSX.utils.json_to_sheet(products);

    XLSX.utils.book_append_sheet(libro, hoja, "Productos");

    setTimeout(() => {
      XLSX.writeFile(libro, "ProductosDefault.xlsx");
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      {!loading ? (
        <Button variant="contained" color="success" onClick={handleDownload}>
          Descarga Excel 
        </Button>
      ) : (
        <Button color="success" disabled>
          
        </Button>
      )}
    </>
  );
};

export default BotonExcelDefault;