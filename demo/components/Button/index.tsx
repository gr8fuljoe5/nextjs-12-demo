import React from "react";
import Button from "@mui/material/Button";

const BasicButton = (props: {
  children: string;
  variant: "text" | "outlined" | "contained";
  disabled: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) => (
  <Button variant={props.variant} onClick={props.onClick}>
    {props.children}
  </Button>
);
export default BasicButton;
