import "./App.css";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { blueGrey, grey } from '@mui/material/colors';

import { useState, useEffect ,useRef} from "react";
import useFetch from "./customHooks/useFetch";

function App() {
  
  const [products, setProdcuts] = useState([]);
  const { post } = useFetch();

  const productString = useRef(null);

  

  const handleSendClick = () => {
        const dataRaw = productString.current.value
        const splitedData = dataRaw.split(" ")
        
        //setToSendData(data)
        console.log(splitedData);
  };
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
      <Grid  sx={{ mb: "50px" }} item xs={12} sm={12} md={12} xl={12} lg={12} >
      <Typography variant="h1" color={primary}>
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
