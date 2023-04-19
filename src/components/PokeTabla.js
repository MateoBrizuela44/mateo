import {useContext, useEffect, useState} from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import PokeRow from "./PokeRow";
import axios from "axios";
import {PokeContext} from "../context/pokeContext";
import {Typography} from "@mui/material";

const columns = [
  {id: "name", label: "Nombre", minWidth: 100},
  {id: "weight", label: "Peso", minWidth: 100},
];

export default function PokeTabla() {
  const [pokemons, setPokemons] = useState([]);
  const {isLoading, setIsloading} = useContext(PokeContext);

  useEffect(() => {
    setIsloading(true);
    const pokeFetch = async () => {
      await axios
        .get("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=1281")
        .then((res) => setPokemons(res.data.results))
        .catch((e) => console.log(e))
        .finally(setIsloading(false));
    };
    pokeFetch();
  }, []);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const rows = pokemons.map((unProducto) => {
    const {name, url} = unProducto;
    return {
      name,
      url,
    };
  });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Typography variant={"h1"}>Poke Mateo API</Typography>
      <Paper sx={{width: "100%", overflow: "hidden"}}>
        <TableContainer sx={{maxHeight: "75vh"}}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{minWidth: column.minWidth}}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  console.log(row);
                  return (
                    <PokeRow
                      row={row}
                      columns={columns}
                      _id={row._id}
                      url={row.url}
                    />
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}

// function RowProducto(row) {
//     return <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
//         {columns.map((column) => {
//             const value = row[column.id];
//             return (
//                 <TableCell key={column.id} align={column.align}>
//                     {column.id === 'accion' ?
//                         <>
//                             <IconButton><Edit /></IconButton>
//                             <IconButton><DeleteForever /></IconButton>
//                         </>
//                         :
//                         column.format && typeof value === 'number'
//                             ? column.format(value)
//                             : value}

//                 </TableCell>
//             );
//         })}
//     </TableRow>;
// }
