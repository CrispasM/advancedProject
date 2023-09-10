import { FC } from "react";
import TextField from "@mui/material/TextField";
import { SxProps } from "@mui/material";
import { useFormikField } from "@/app/hooks/create/useFormikField";

type Prop = {
  id: string;
  name: string;
  label: string;
  width?: string;
  sx?: SxProps;
  type?: "password" | "text";
  placeholder?: string;
};

export const TextInputField: FC<Prop> = ({
  id,
  name,
  label,
  width = "25ch",
  sx,
  type,
  placeholder = "",
}) => {
  const { value, handleChange, hasError, errorMessage } = useFormikField(name);

  return (
    <TextField
      sx={{
        width,
        my: "1ch",
        "& fieldset": { borderRadius: "10px" },
        ...sx,
      }}
      id={id}
      name={name}
      label={label}
      value={value}
      type={type}
      onChange={handleChange}
      error={hasError}
      variant="outlined"
      helperText={errorMessage}
      placeholder={placeholder}
    />
  );
};
