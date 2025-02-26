"use client";
import Box from "@mui/material/Box";
import DashboardCard from "@/components/common/DashboardCard";
import { Stack } from "@mui/system";
import Typography from "@mui/material/Typography";
import { ReactNode } from "react";

const TypographyPage = () => {
  return (
    <Stack spacing={2}>
      <DashboardCard title="DashboardCard">
        <Stack spacing={2}>
          <DashboardCard
            title="this is title"
            subtitle="this is subtitle"
            action={(<Typography>this is action</Typography>) as ReactNode}
          >
            <Typography>
              DashboardCard is Required props = [title, subtitle, action]
            </Typography>
          </DashboardCard>
        </Stack>
      </DashboardCard>

      <DashboardCard title="My Point">
        <Box sx={{ height: "240px" }}>(Some Table)</Box>
      </DashboardCard>
    </Stack>
  );
};

export default TypographyPage;
