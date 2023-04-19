import {DeleteForever, Edit} from "@mui/icons-material";
import {IconButton, Skeleton, TableCell, TableRow} from "@mui/material";
import {useNavigate} from "react-router-dom";
import React, { useContext } from "react";
import { PokeContext } from "../context/pokeContext";
// import useAlert from "../../hooks/useAlert";

function PokeRow(props) {
//   const isLoading = useSelector((state) => state.productos.isLoading);
  const navigate = useNavigate();

  const {isLoading, setIsLoading} = useContext(PokeContext)
//   const { deleteRequest } = useContext(ProductoContext)
//   const {
//     setOpenAlertDialog,
//     setButtonActionAcceptAlertDialog,
//     setButtonTextAcceptAlertDialog,
//     setButtonTextDenyAlertDialog,
//     setContentAlertDialog,
//     setTitleAlertDialog,
//   } = useAlert();

  const handleEdit = (idProducto) => {
    idProducto.stopPropagation();
    navigate("./" + props._id, {state: {editing: true}});
  };

  const handleGet = () => {
    navigate("./" + props.row.name, {state: {url: props.url}});
  };

//   const handleDelete = () => {
//     deleteRequest(props._id)
//   };

//   const activateAlert = (e) => {
//     setButtonActionAcceptAlertDialog(()=>handleDelete)
//     e.stopPropagation();
//     setOpenAlertDialog(true);
//     setTitleAlertDialog("Eliminar Producto");
//     setContentAlertDialog(
//       "Esta seguro que desea eliminar el producto: " +
//         props.row.marca +
//         ", " +
//         props.row.modelo
//     );
//   };
    

  return (
    <TableRow hover role="checkbox" tabIndex={-1} key={props.row.code}>
      {props.columns.map((column) => {
        const value = props.row[column.id];

        return (
          <TableCell key={column.id} align={column.align} onClick={handleGet}>
            {
               isLoading ? 
                    <Skeleton /> :
               
              
              column.id === "accion" ? (
              <>
                <IconButton onClick={handleEdit}>
                  <Edit color='secondary'/>
                </IconButton>
                <IconButton  
                // onClick={activateAlert}
                >
                  <DeleteForever  color='warning'/>
                </IconButton>
              </>
            ) : column.format && typeof value === "number" ? (
              column.format(value)
            ) : (
              value
            )}
          </TableCell>
        );
      })}
    </TableRow>
  );
}

export default PokeRow;