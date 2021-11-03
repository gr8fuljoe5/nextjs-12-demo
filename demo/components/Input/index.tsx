import React from "react";
import TextField from "@mui/material/TextField";

const Input = (
  props: (
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | string
    | number
    | {}
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | boolean
    | null
    | undefined
    | React.MouseEventHandler<HTMLButtonElement>
  )[]
) => <TextField variant="outlined" {...props} />;
export default Input;
