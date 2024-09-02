"use client";

import { CartesianGrid, Line, LineChart, XAxis, YAxis, Tooltip } from "recharts";

import {
  Card,
  CardContent,
  CardFooter,
} from "./shadcncard"; // Adjusted import path

import {
  ChartContainer,
  ChartTooltipContent,
} from "./shadcncard"; // Adjusted import path

// Data for all 12 months with different values
export const chartData = [
  { month: "1:12 am", desktop: 2000, mobile: 1500, tablet: 1200 },
  { month: "2:25 am", desktop: 2200, mobile: 1400, tablet: 1100 },
  { month: "3:38 am", desktop: 2400, mobile: 1900, tablet: 1600 },
  { month: "1:50 am", desktop: 2800, mobile: 1800, tablet: 1400 },
  { month: "5:55 am", desktop: 2600, mobile: 2000, tablet: 1900 },
  { month: "1:07 am", desktop: 3000, mobile: 2400, tablet: 1800 },
  { month: "8:15 am", desktop: 2900, mobile: 2300, tablet: 2400 },
  { month: "9:22 am", desktop: 3600, mobile: 2100, tablet: 2300 },
  { month: "1:30 am", desktop: 3500, mobile: 2800, tablet: 2200 },
  { month: "1:42 am", desktop: 3800, mobile: 2500, tablet: 3600 },
  { month: "1:55 pm", desktop: 4000, mobile: 3000, tablet: 3400 },
  { month: "1:10 pm", desktop: 3800, mobile: 3600, tablet: 3880 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#FF5733", // Red color for the desktop line
  },
  mobile: {
    label: "Mobile",
    color: "#33FF57", // Green color for the mobile line
  },
  tablet: {
    label: "Tablet",
    color: "#FFFF33", // Yellow color for the tablet line
  },
};

export function Graphline() {
  return (
    <Card>
      <CardContent style={{ height: '800px', }} >
        <div className="mt-[40px] md:mt-[100px]"
          style={{
            position: 'relative',
            overflow: 'hidden',
            height: '100%',
           
          }}
        >
          <div className="object-cover "
            style={{
              background: `url('./grid.svg') no-repeat center center`,
              backgroundSize: 'cover',
              height: '100%',
              width: '150%',
              position: 'absolute',
              top: -140,
              left: 0,
              zIndex: -1, // Ensures the background image stays behind the chart
            }}
          />
          <ChartContainer config={chartConfig} style={{ position: 'relative', height: '100%' }}>
            <LineChart
              width={800} // Adjust width as needed
              height={400} // Adjust height as needed
              data={chartData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 50,
              }}
            >
              <CartesianGrid vertical={false} horizontal={false} /> {/* Remove grid lines */}
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
           <YAxis
  tickLine={false}
  axisLine={false}
  tickCount={7} // Set the minimum number of ticks to 7
  tickFormatter={(value) => value} // Show full value without formatting
/>
              <Tooltip content={<ChartTooltipContent />} />
              <Line
                dataKey="desktop"
                type="monotone"
                stroke={chartConfig.desktop.color}
                strokeWidth={4} // Increased thickness for the red line
                dot={false}
              />
              <Line
                dataKey="mobile"
                type="monotone"
                stroke={chartConfig.mobile.color}
                strokeWidth={3} // Standard thickness for the green line
                dot={false}
              />
              <Line
                dataKey="tablet"
                type="monotone"
                stroke={chartConfig.tablet.color}
                strokeWidth={3} // Standard thickness for the yellow line
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        </div>
      </CardContent>
      <CardFooter>
        {/* Card footer content here */}
      </CardFooter>
    </Card>
  );
}
