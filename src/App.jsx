import "./App.css";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { blueGrey } from '@mui/material/colors';
import BotonExcelDefault from "./components/ExcelButton";
import { useState, useEffect ,useRef} from "react";
import useFetch from "./customHooks/useFetch";


function App() {
  
  const [products, setProducts] = useState([]);
  const [toSendData, setToDataSent] = useState([]);
  const [dataReceived, setDataReceived] = useState([])
  //const [productString, setProductString] = useState([])
  const { post } = useFetch();

  
   
  
  const productString = useRef(null);

  const handleSendClick = () => {
    const rawData = productString.current.value;
    const splitedData = rawData.split(" ");
    const jsonData = { products: splitedData };
    setToDataSent(jsonData);
  };

  useEffect(() => {
    if (toSendData) {
      post("http://localhost:3000/api/v1/products", toSendData)
        .then((income) => {
          console.log(income);
          setDataReceived(income);
        })
        .catch((error) => console.log("Could not send products", error));
    }
  }, [toSendData]);
 
  const primary = blueGrey[900];
  const secondary = blueGrey[700];
  const gridContent = (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Grid  sx={{ mt:"100px"  }} item xs={12} sm={12} md={12} xl={12} lg={12} >
      <Typography variant="h3" color={primary}>
        Calidad de Generacion
        </Typography>
      </Grid>

      <Grid  item xs={12} sm={12} md={12} xl={12} lg={12} >
      <Typography variant="h5" color={secondary}>
        Ingrese los productos a consultar
        </Typography>
      </Grid>
     
      <Grid  item xs={4} sm={4} md={4} xl={4} lg={4}>
      <TextField inputRef={productString} id="Productos" label="Productos" variant="outlined" fullWidth/>
      </Grid>
     
      <Grid  item xs={2} sm={2} md={2} xl={2} lg={2} >
      <Button variant="contained" color="primary" onClick={handleSendClick}  >
          Consultar
        </Button>
      </Grid>
      <Grid item xs={12} sm={12} md={12} xl={12} lg={12}>
      <BotonExcelDefault products={dataReceived.productJsonMock} />
      </Grid>
      
    </Grid>
  );

  return (
    <>
      <div>
        {gridContent}
        
      </div>
    </>
  );
}

export default App;
