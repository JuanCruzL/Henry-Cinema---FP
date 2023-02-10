import React from "react";
import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const rows = [
  {
    id: "6b50210c-c67a-45a8-8f63-65a2ba111cf0",
    name: "Regular Popcorn",
    price: "10.1",
    image:
      "https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//9462?width=171",
  },
  {
    id: "e90b3028-842f-446e-b6d6-db67c33ba58a",
    name: "Large Popcorn",
    price: "11.1",
    image:
      "https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//9463?width=171",
  },
  {
    id: "0c0e2258-166d-4b68-984d-ced26eeefe67",
    name: "Xtreme Popcorn",
    price: "12.1",
    image:
      "https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//9464?width=171",
  },
  {
    id: "c40bee60-3566-4f11-b63f-f94cb32843c1",
    name: "Sea Salt Caramel Gourmet Popcorn",
    price: "12.5",
    image:
      "https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//9465?width=171",
  },
  {
    id: "2a16af92-b997-4ed2-9941-5cfad63dc685",
    name: "Sweet Gourmet Popcorn",
    price: "12.5",
    image:
      "https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//9468?width=171",
  },
];

export const List = () => {
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Id</TableCell>
            <TableCell className="tableCell">Name</TableCell>
            <TableCell className="tableCell">Price</TableCell>
            <TableCell className="tableCell">Image</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">{row.name}</TableCell>
              <TableCell className="tableCell">${row.price}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img alt="" src={row.image} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
