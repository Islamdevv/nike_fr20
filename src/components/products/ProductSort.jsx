import React from "react";
import "./Product.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Checkbox,
  ListItem,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const ProductSort = () => {
  const mainArr = [
    "Lifestyle",
    "Jordan",
    "Basketball",
    "Training & Gym",
    "Football",
    "Skateboarding",
    "Golf",
    "Nike By You",
    "Boots",
    "Tennis",
    "Athletics",
    "Sandals, Slides & Flip Flops",
  ];
  const sizeArr = [
    1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10,
    10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 15, 16, 17,
  ];
  const colorArr = [
    {
      colors: "black",
      text: "Black",
    },
    {
      colors: "blue",
      text: "Blue",
    },
    {
      colors: "brown",
      text: "Brown",
    },
    {
      colors: "green",
      text: "Green",
    },
    {
      colors: "grey",
      text: "Grey",
    },
    {
      colors: "black",
      text: "Multi-Color",
    },
    {
      colors: "orange",
      text: "Orange",
    },
    {
      colors: "pink",
      text: "Pink",
    },
    {
      colors: "purple",
      text: "Purple",
    },
    {
      colors: "red",
      text: "Red",
    },
    {
      colors: "white",
      text: "White",
      border: "0.5px solid gray",
    },
    {
      colors: "yellow",
      text: "Yellow",
    },
  ];
  const athletesArr = [
    "Giannis Antetokounmpo",
    "Sabrina Ionescu",
    "Rafael Nadal",
    "Grant Taylor",
    "Kylian Mbappe",
  ];

  return (
    <Box id="side_bar">
      <Box className="side_bar">
        {mainArr.map((el) => (
          <ListItem
            sx={{
              fontSize: "16px",
              p: 0,
              m: "17px 0",
              fontWeight: "bold",
            }}
          >
            {el}
          </ListItem>
        ))}
        <Box sx={{ padding: "40px 0" }}>
          <Accordion
            sx={{
              border: "none",
              p: 0,
              boxShadow: "none",
              borderTop: "1px solid gray",
            }}
          >
            <AccordionSummary
              sx={{ padding: 0 }}
              expandIcon={<KeyboardArrowDownIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{
                  width: "50%",
                  flexShrink: 0,
                  color: "#0b1f3f",
                  fontWeight: "bold",
                  padding: "3px 0",
                  width: "200px",
                }}
              >
                Shop by Offers
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                padding: 0,
              }}
            >
              <ListItem
                sx={{
                  fontSize: "16px",
                  p: 0,
                  m: 0,
                  width: "200px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Checkbox sx={{ p: 0, m: "0 5px 0 0" }} />
              </ListItem>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              border: "none",
              p: 0,
              boxShadow: "none",
              borderTop: "1px solid gray",
            }}
          >
            <AccordionSummary
              sx={{ padding: 0 }}
              expandIcon={<KeyboardArrowDownIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{
                  width: "50%",
                  flexShrink: 0,
                  color: "#0b1f3f",
                  fontWeight: "bold",
                  padding: "3px 0",
                  width: "200px",
                }}
              >
                Shop by Price
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                padding: 0,
              }}
            >
              <ListItem
                sx={{
                  fontSize: "16px",
                  p: 0,
                  m: 0,
                  width: "200px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Checkbox sx={{ p: 0, m: "0 5px 0 0" }} />
              </ListItem>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              border: "none",
              p: 0,
              boxShadow: "none",
              borderTop: "1px solid gray",
            }}
          >
            <AccordionSummary
              sx={{ padding: 0 }}
              expandIcon={<KeyboardArrowDownIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{
                  width: "50%",
                  flexShrink: 0,
                  color: "#0b1f3f",
                  fontWeight: "bold",
                  padding: "3px 0",
                  width: "200px",
                }}
              >
                Gender
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                padding: 0,
              }}
            >
              <ListItem
                sx={{
                  fontSize: "16px",
                  p: 0,
                  m: 0,
                  width: "200px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Checkbox sx={{ p: 0, m: "0 5px 0 0" }} />
                Kids
              </ListItem>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              border: "none",
              p: 0,
              boxShadow: "none",
              borderTop: "1px solid gray",
            }}
          >
            <AccordionSummary
              sx={{ padding: 0 }}
              expandIcon={<KeyboardArrowDownIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{
                  width: "50%",
                  flexShrink: 0,
                  color: "#0b1f3f",
                  fontWeight: "bold",
                  padding: "3px 0",
                  width: "200px",
                }}
              >
                Size
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                padding: 0,
              }}
            >
              {sizeArr.map((el) => (
                <Button
                  sx={{
                    border: "1px solid gray",
                    color: "#0b1f3f",
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}
                >
                  {el}
                </Button>
              ))}
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              border: "none",
              p: 0,
              boxShadow: "none",
              borderTop: "1px solid gray",
            }}
          >
            <AccordionSummary
              sx={{ padding: 0 }}
              expandIcon={<KeyboardArrowDownIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{
                  width: "50%",
                  flexShrink: 0,
                  color: "#0b1f3f",
                  fontWeight: "bold",
                  padding: "3px 0",
                  width: "200px",
                }}
              >
                Color
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                padding: 0,
              }}
            >
              {colorArr.map((el) => (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    p: "10px 0",
                    cursor: "pointer",
                  }}
                >
                  <Box
                    sx={{
                      background: `${el.colors}`,
                      borderRadius: "50%",
                      width: "30px",
                      height: "30px",
                      m: "0 15px",
                      border: `${el.border}`,
                    }}
                  ></Box>

                  <Typography
                    sx={{
                      fontSize: "13px",
                      width: "35px",
                      textAlign: "center",
                    }}
                  >
                    {el.text}
                  </Typography>
                </Box>
              ))}
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              border: "none",
              p: 0,
              boxShadow: "none",
              borderTop: "1px solid gray",
            }}
          >
            <AccordionSummary
              sx={{ padding: 0 }}
              expandIcon={<KeyboardArrowDownIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{
                  width: "50%",
                  flexShrink: 0,
                  color: "#0b1f3f",
                  fontWeight: "bold",
                  padding: "3px 0",
                  width: "200px",
                }}
              >
                Brand
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                padding: 0,
              }}
            >
              {athletesArr.map((el) => (
                <ListItem
                  sx={{
                    fontSize: "16px",
                    p: 0,
                    m: 0,
                    width: "200px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Checkbox sx={{ p: 0, m: "0 5px 0 0" }} />
                  {el}
                </ListItem>
              ))}
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              border: "none",
              p: 0,
              boxShadow: "none",
              borderTop: "1px solid gray",
            }}
          >
            <AccordionSummary
              sx={{ padding: 0 }}
              expandIcon={<KeyboardArrowDownIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{
                  width: "50%",
                  flexShrink: 0,
                  color: "#0b1f3f",
                  fontWeight: "bold",
                  padding: "3px 0",
                  width: "200px",
                }}
              >
                Sports & Activities
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                padding: 0,
              }}
            >
              <ListItem
                sx={{
                  fontSize: "16px",
                  p: 0,
                  m: 0,
                  width: "200px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Checkbox sx={{ p: 0, m: "0 5px 0 0" }} />
              </ListItem>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductSort;
