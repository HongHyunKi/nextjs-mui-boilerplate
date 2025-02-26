"use client";

import { Stack } from "@mui/system";
import { Typography } from "@mui/material";
import DashboardCard from "@/components/common/DashboardCard";

const TypographyPage = () => {
  return (
    <Stack spacing={4}>
      <DashboardCard title="Default Text">
        <Stack spacing={2}>
          <DashboardCard>
            <Typography variant="h1">h1. Heading</Typography>
            <Typography variant="body1" color="textSecondary">
              font size: 30 | line-height: 45 | font weight: 500
            </Typography>
          </DashboardCard>

          <DashboardCard>
            <Typography variant="h2">h2. Heading</Typography>
            <Typography variant="body1" color="textSecondary">
              font size: 24 | line-height: 36 | font weight: 500
            </Typography>
          </DashboardCard>

          <DashboardCard>
            <Typography variant="h3">h3. Heading</Typography>
            <Typography variant="body1" color="textSecondary">
              font size: 21 | line-height: 31.5 | font weight: 500
            </Typography>
          </DashboardCard>

          <DashboardCard>
            <Typography variant="h4">h4. Heading</Typography>
            <Typography variant="body1" color="textSecondary">
              font size: 18 | line-height: 27 | font weight: 500
            </Typography>
          </DashboardCard>

          <DashboardCard>
            <Typography variant="h5">h5. Heading</Typography>
            <Typography variant="body1" color="textSecondary">
              font size: 16 | line-height: 24 | font weight: 500
            </Typography>
          </DashboardCard>

          <DashboardCard>
            <Typography variant="h6">h6. Heading</Typography>
            <Typography variant="body1" color="textSecondary">
              font size: 14 | line-height: 21 | font weight: 500
            </Typography>
          </DashboardCard>

          <DashboardCard>
            <Typography variant="subtitle1">
              subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Quos blanditiis tenetur
            </Typography>
            <Typography variant="body1" color="textSecondary">
              font size: 16 | line-height: 28 | font weight: 400
            </Typography>
          </DashboardCard>

          <DashboardCard>
            <Typography variant="subtitle2">
              subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Quos blanditiis tenetur
            </Typography>
            <Typography variant="body1" color="textSecondary">
              font size: 14 | line-height: 21 | font weight: 400
            </Typography>
          </DashboardCard>

          <DashboardCard>
            <Typography variant="body1">
              body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quos blanditiis tenetur
            </Typography>

            <Typography variant="body1" color="textSecondary">
              font size: 16 | line-height: 24 | font weight: 400
            </Typography>
          </DashboardCard>

          <DashboardCard>
            <Typography variant="body2">
              body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quos blanditiis tenetur
            </Typography>

            <Typography variant="body1" color="textSecondary">
              font size: 14 | line-height: 20 | font weight: 400
            </Typography>
          </DashboardCard>

          <DashboardCard>
            <Typography variant="caption">
              caption. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quos blanditiis tenetur
            </Typography>

            <Typography variant="body1" color="textSecondary">
              font size: 12 | line-height: 19 | font weight: 400
            </Typography>
          </DashboardCard>

          <DashboardCard>
            <Typography variant="overline">
              overline. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Quos blanditiis tenetur
            </Typography>

            <Typography variant="body1" color="textSecondary">
              font size: 12 | line-height: 31 | font weight: 400
            </Typography>
          </DashboardCard>
        </Stack>
      </DashboardCard>

      <Stack spacing={2}>
        <DashboardCard title="Text Color">
          <Stack spacing={2}>
            <DashboardCard>
              <Typography variant="h5" color="textPrimary">
                Text Primary
              </Typography>

              <Typography variant="body1" color="textPrimary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur
              </Typography>
            </DashboardCard>

            <DashboardCard>
              <Typography variant="h5" color="textSecondary">
                Text Secondary
              </Typography>

              <Typography variant="body1" color="textSecondary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur
              </Typography>
            </DashboardCard>

            <DashboardCard>
              <Typography variant="h5" color="info.main">
                Text Info
              </Typography>

              <Typography variant="body1" color="info.main">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur
              </Typography>
            </DashboardCard>

            <DashboardCard>
              <Typography variant="h5" color="primary.main">
                primary.main
              </Typography>

              <Typography variant="body1" color="primary.main">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur
              </Typography>
            </DashboardCard>

            <DashboardCard>
              <Typography variant="h5" color="warning.main">
                Text Warning
              </Typography>

              <Typography variant="body1" color="warning.main">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur
              </Typography>
            </DashboardCard>

            <DashboardCard>
              <Typography variant="h5" color="error.main">
                Text Error
              </Typography>

              <Typography variant="body1" color="error.main">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur
              </Typography>
            </DashboardCard>
          </Stack>
        </DashboardCard>
      </Stack>
    </Stack>
  );
};

export default TypographyPage;
