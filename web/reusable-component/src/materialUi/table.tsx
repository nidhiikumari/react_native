import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Popover,
} from "@mui/material";
import { useState } from "react";

function ReusableTable() {
  const rows = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
      tags: "#Weather #location #threat",
      severity: "high",
      description:
        "Washington, DC: Demonstration plan Washington, DC: Demonstration plan Washington, DC: Demonstration plan",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "987-654-3210",
      tags: "#Weather #location #threat  #location3",
      severity: "moderate",
      description:
        "Washington, DC: Demonstration plan Washington, DC: Demonstration plan Washington, DC: Demonstration plan",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob@example.com",
      phone: "555-123-4567",
      severity: "low",
      tags: "#Weather",
      description:
        "Washington, DC: Demonstration plan Washington, DC: Demonstration plan Washington, DC: Demonstration plan",
    },
  ];
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [popoverContent, setPopoverContent] = useState<string>("");

  const handlePopoverOpen = (
    event: React.MouseEvent<HTMLElement>,
    content: string
  ) => {
    setAnchorEl(event.currentTarget);
    setPopoverContent(content);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const truncateString = (str: string) => {
    let truncated = "";
    if (str.length <= 50) {
      return str;
    }
    truncated = str.substring(0, 31) + "...";
    return truncated;
  };

  const splittedString = (strng: any) => {
    // console.log(strng.split(' '), 'hello worldddddd');
    const splittedtrng = strng.split(" ");
    // console.log(splittedtrng, 'splitted strng');
    
    // if(splittedtrng) 
    return strng.split(" ");
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="responsive table">
          <TableHead
            style={{
              backgroundColor: "#D2D5DA",
            }}
          >
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell>Source</TableCell>
              <TableCell>Threat Description</TableCell>
              <TableCell>Severity</TableCell>
              <TableCell>Tags</TableCell>
              <TableCell>&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: any) => (
              <TableRow key={row.name}>
                <TableCell
                  style={{
                    width: "200px",
                  }}
                  aria-owns={open ? "mouse-over-popover" : undefined}
                  aria-haspopup="true"
                  onMouseEnter={(event) => handlePopoverOpen(event, row.name)}
                  onMouseLeave={handlePopoverClose}
                >
                  {row.name}
                </TableCell>
                <TableCell
                  style={{
                    width: "200px",
                  }}
                >
                  {row.email}
                </TableCell>
                <TableCell
                  style={{
                    width: "200px",
                  }}
                >
                  {truncateString(row.description)}
                </TableCell>
                <TableCell
                  aria-owns={open ? "mouse-over-popover" : undefined}
                  aria-haspopup="true"
                  onMouseEnter={(event) => handlePopoverOpen(event, row.phone)}
                  onMouseLeave={handlePopoverClose}
                  style={{
                    width: "200px",
                  }}
                >
                  {row.severity}
                </TableCell>
                <TableCell
                  style={{
                    width: "200px",
                  }}
                >
                  {splittedString(row.tags)[0]}

                  {splittedString(row.tags).length > 0
                    ? splittedString(row.tags).length - 1
                    : null}
                </TableCell>
                <TableCell>...</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Popover
          id="mouse-over-popover"
          sx={{
            pointerEvents: "none",
          }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          <div style={{ padding: "10px" }}>{popoverContent}</div>
        </Popover>
      </TableContainer>
    </div>
  );
}

export default ReusableTable;
