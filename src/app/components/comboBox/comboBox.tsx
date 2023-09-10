import { FC, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import { SxProps } from "@mui/material";
import { useFormikField } from "@/app/hooks/create/useFormikField";


type Props = {
  name: string;
  options: Array<{ id: number | string; label: number | string }>;
  label: string;
  width?: string;
  sx?: SxProps;
  getValue?: (value: string) => void;
  disabled?: boolean;
};

export const ComboBox: FC<Props> = ({
  options,
  name,
  label,
  width = 300,
  sx,
  getValue,
  disabled = false,
}) => {
  const {
    value,
    handleChange,
    hasError,
    errorMessage,
    setFieldValue,
    initialValues,
  } = useFormikField(name);

  return (
    <Autocomplete
      disablePortal
      id={name}
      disabled={disabled}
      //@ts-ignore

      defaultValue={options.find((opt) => opt.id === initialValues[name])}
      options={options}
      sx={{ width, ...sx }}
      onChange={(event: any, newValue: any) => {
        setFieldValue(name, newValue.id);
        if (getValue) {
          getValue(newValue.id);
        }
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          sx={{ borderRadius: "2ch" }}
          error={hasError}
          variant="outlined"
          helperText={errorMessage}
        />
      )}
    />
  );
};
