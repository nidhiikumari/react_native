import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Pagination, Typography } from "@mui/material";

export default function OverrideColumnMenuGrid() {
  const [page, setPage] = React.useState<number>(4);

  const getTagDisplay = (tags: string) => {
    const splittedTags = tags.split(" ");
    const uniqueTags = Array.from(new Set(splittedTags)); // Get unique tags
    if (uniqueTags.length > 1) {
      return `${uniqueTags[0]} +${uniqueTags.length - 1}`;
    } else {
      return uniqueTags[0];
    }
  };

  const getColors = (severity: string) => {
    let color = "";
    switch (severity) {
      case "high":
        color = "red";
        break;
      case "low":
        color = "green";
        break;
      case "moderate":
        color = "orange";
        break;
      default:
        color = "";
    }
    return color;
  };

  const rows: any = [
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
      tags: "#Weather #location #threat #location3",
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

  const columns: any = [
    {
      field: "id",
      headerName: "No",
    },
    {
      field: "name",
      headerName: "Name",
      width: 150,
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 150,
    },
    {
      field: "severity",
      headerName: "Severity",
      width: 150,
      renderCell: (params: any) => {
        return (
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "left",
              gap: 10,
              height: "100%",
            }}
          >
            <Box
              style={{
                backgroundColor: getColors(params.row.severity),
                width: "10px",
                height: "10px",
                borderRadius: "50%",
              }}
            ></Box>
            <Typography
              style={{
                color: getColors(params.row.severity),
              }}
            >
              {params.row.severity}
            </Typography>
          </Box>
        );
      },
    },
    {
      field: "tags",
      headerName: "Tags",
      width: 150,
      valueGetter: (params: any) => {
        return getTagDisplay(params);
      },
    },
    {
      field: "description",
      headerName: "Description",
      width: 150,
    },

    {
      field: "action",
      headerName: "     ",
      width: 250,
      renderCell: (params: any) => {
        return (
          <Box onClick={() => console.log(params.row, "clicked")}>...</Box>
        );
      },
    },
  ];

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <div style={{ width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        hideFooter={true}
        disableColumnMenu={true}
        // loading={true}
      />

      <Box
        style={{
          marginTop: "3px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Pagination
          page={page}
          color="primary"
          count={10}
          shape="rounded"
          onChange={handleChange}
        />
      </Box>
    </div>
  );
}
