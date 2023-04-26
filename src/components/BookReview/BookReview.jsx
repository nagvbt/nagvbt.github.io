import React from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import useBaseUrl from "@docusaurus/useBaseUrl";

import * as data from "./book-review.json";

const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BookReview() {
  return (
    <Grid container spacing={2}>
      {data.review.map((book) => (
        <Grid item xs={2}>
          <Item>
            <a href={book.url}>
              <img src={useBaseUrl(book.imgSrc)}></img>
              <b>{book.title}</b>
            </a>
          </Item>
        </Grid>
      ))}
    </Grid>
  );
}
