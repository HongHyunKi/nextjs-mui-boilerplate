import React, { ReactNode } from "react";
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";

type CardProps = {
  title?: string;
  subtitle?: string;
  action?: ReactNode | null;
  children?: ReactNode;
};

const DashboardCard = ({
  title,
  subtitle,
  children,
  action = null,
}: CardProps) => {
  return (
    <Card sx={{ padding: 0 }} elevation={9} variant={undefined}>
      <CardContent sx={{ p: "28px" }}>
        {title && (
          <Stack
            direction="row"
            spacing={2}
            justifyContent="space-between"
            alignItems={"center"}
            mb={3}
          >
            <Box>
              {title && <Typography variant="h5">{title}</Typography>}
              {subtitle && (
                <Typography variant="subtitle2" color="textSecondary">
                  {subtitle}
                </Typography>
              )}
            </Box>
            {action && action}
          </Stack>
        )}
        {children}
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
