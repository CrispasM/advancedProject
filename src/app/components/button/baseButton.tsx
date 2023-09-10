"use client";
import { Box, Button, SxProps } from "@mui/material";
import { FC } from "react";

type Props = {
  title?: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  sx?: SxProps;
  icon?: any;
  disabled?: boolean;
};

export const BaseButton: FC<Props> = ({
  title,
  onClick,
  icon,
  sx,
  type = "button",
  disabled = false,
}) => {
  return (
    <Button
      type={type}
      disabled={disabled}
      onClick={onClick}
      sx={{
        borderRadius: "1px",
        svg: {
          mr: "1ch",
        },
        ...sx,
      }}
    >
      {icon && icon} {title}
    </Button>
  );
};
