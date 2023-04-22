import React, { useEffect, useState } from "react";
import './App.css';
// import { Button } from "@mui/material";
import Select from "react-select";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import { BiUser } from "react-icons/bi";

const App = () => {
  const [user, setUser] = useState([{}]);
  const [selected, setSelected] = useState([]);

  const handleChange = (selectedOption) => {
    setSelected(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };

  const options = [
    {
      value: "1",
      label:
        "Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.",
    },
    {
      value: "2",
      label: "Male Users which have phone price greater than 10,000.",
    },
    {
      value: "3",
      label:
        "Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.",
    },
    {
      value: "4",
      label:
        "Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.",
    },
    {
      value: "5",
      label:
        "Show the data of top 10 cities which have the highest number of users and their average income.",
    },
  ];

  useEffect(() => {
    fetch("http://localhost:8080/users")
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
  }, []);



  return (
    <>
      <h2 style={{}}>Select any of the option </h2>
      <Select options={options} onChange={handleChange} autoFocus={true} />
      <TableContainer style={{ marginTop: "20px" }} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow >
              <TableCell style={{color: 'blue'}}>Name</TableCell>
              <TableCell  style={{color: 'blue'}} align="right">Email</TableCell>
              <TableCell style={{color: 'blue'}} align="right">Gender</TableCell>
              <TableCell style={{color: 'blue'}} align="right">Income</TableCell>
              <TableCell style={{color: 'blue'}} align="right">City</TableCell>
              <TableCell style={{color: 'blue'}} align="right">Car</TableCell>
              <TableCell style={{color: 'blue'}} align="right">Quote</TableCell>
              <TableCell  style={{color: 'blue'}} align="right">Phone Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {selected.value === "" ? "" : ""}
            {selected.value === "1"
              ? user.map((item) => {
                if (
                  item.income < "$5" &&
                  (item.car === "BMW" || item.car === "Mercedes-Benz")
                ) {
                  return (
                    <>
                      <TableRow
                        key={item.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {item.first_name} {item.last_name}
                        </TableCell>
                        <TableCell align="right">{item.email}</TableCell>
                        <TableCell align="right">{item.gender}</TableCell>
                        <TableCell align="right">{item.income}</TableCell>
                        <TableCell align="right">{item.city}</TableCell>
                        <TableCell align="right">{item.car}</TableCell>
                        <TableCell align="right">{item.quote}</TableCell>
                        <TableCell align="right">
                          {item.phone_price}
                        </TableCell>
                      </TableRow>
                    </>
                  );
                }
              })
              : ""}

            {selected.value === "2"
              ? user.map((item) => {
                if (item.gender === "Male" && item.phone_price >= 10000) {
                  return (
                    <>
                      <TableRow
                        key={item.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                        dark
                      >
                        <TableCell component="th" scope="row">
                          {item.first_name} {item.last_name}
                        </TableCell>
                        <TableCell align="right">{item.email}</TableCell>
                        <TableCell align="right">{item.gender}</TableCell>
                        <TableCell align="right">{item.income}</TableCell>
                        <TableCell align="right">{item.city}</TableCell>
                        <TableCell align="right">{item.car}</TableCell>
                        <TableCell align="right">{item.quote}</TableCell>
                        <TableCell align="right">
                          {item.phone_price}
                        </TableCell>
                      </TableRow>
                    </>
                  );
                }
              })
              : ""}
            {selected.value === "3"
              ? user.map((item) => {
                if (
                  item.last_name.startsWith("M") === true ||
                  (item.quote.length > 15 &&
                    item.email.includes(item.last_name) === true)
                ) {
                  return (
                    <>
                      <TableRow
                        key={item.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {item.first_name} {item.last_name}
                        </TableCell>
                        <TableCell align="right">{item.email}</TableCell>
                        <TableCell align="right">{item.gender}</TableCell>
                        <TableCell align="right">{item.income}</TableCell>
                        <TableCell align="right">{item.city}</TableCell>
                        <TableCell align="right">{item.car}</TableCell>
                        <TableCell align="right">{item.quote}</TableCell>
                        <TableCell align="right">
                          {item.phone_price}
                        </TableCell>
                      </TableRow>
                    </>
                  );
                }
              })
              : ""}
            {selected.value === "4"
              ? user.map((item) => {
                if (
                  (item.car === "BMW" ||
                    item.car === "Mercedes-Benz" ||
                    item.car === "Audi") &&
                  item.email.includes(0) === false &&
                  item.email.includes(1) === false &&
                  item.email.includes(2) === false &&
                  item.email.includes(3) === false &&
                  item.email.includes(4) === false &&
                  item.email.includes(5) === false &&
                  item.email.includes(6) === false &&
                  item.email.includes(7) === false &&
                  item.email.includes(8) === false &&
                  item.email.includes(9) === false
                ) {
                  return (
                    <>
                      <TableRow
                        key={item.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {item.first_name} {item.last_name}
                        </TableCell>
                        <TableCell align="right">{item.email}</TableCell>
                        <TableCell align="right">{item.gender}</TableCell>
                        <TableCell align="right">{item.income}</TableCell>
                        <TableCell align="right">{item.city}</TableCell>
                        <TableCell align="right">{item.car}</TableCell>
                        <TableCell align="right">{item.quote}</TableCell>
                        <TableCell align="right">
                          {item.phone_price}
                        </TableCell>
                      </TableRow>
                    </>
                  );
                }
              })
              : ""}

          </TableBody>
        </Table>
      </TableContainer>



    </>
  );
};
export default App;
