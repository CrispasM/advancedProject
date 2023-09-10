"use client"
import React, { ReactNode } from 'react';
import { SxProps,Box } from "@mui/material";
import { Formik,Form } from "formik";
import { BaseButton } from '../button/baseButton';
import { COLORS } from '../../themes/colors';

type Props = {
    onSubmit: (values:any, actions: any)=> void
    children: ReactNode;
    validationSchema: any;
    initialValues: any;
    width?: string;
    submitButton?: boolean;
    title?: string;
    submitStyles?: SxProps;
    submitButtonText?: string;
    sx?: SxProps;
    loading?: boolean;
}

function FormikInit({
    onSubmit,
    children,
    validationSchema,
    initialValues,
    width,
    submitButton=true,
    title,
    submitButtonText="submit",
    loading =false,
    sx,
    submitStyles
}: Props) {
  return (
    <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
    >
        <Form style={{width: "100%"}}>
            <Box sx={{display: "flex", flexDirection: "column", width, ...sx}}>
                {children}
                {submitButton &&(
                    <BaseButton
                     type="submit"
                     disabled={loading}
                     sx={{
                        backgroundColor: COLORS.blue,
                        color: COLORS.white,
                        "&:hover": {
                            backgroundColor: COLORS.blue,
                        },
                        ...submitStyles,
                     }}
                     onClick={()=>{}}
                     title={loading ? "saving..." : submitButtonText}
                     />
                )}
            </Box>
        </Form>

    </Formik>
  );
}

export default FormikInit;

