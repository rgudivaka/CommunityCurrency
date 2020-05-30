import React from "react";
import { useTheme } from "@material-ui/core/styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
} from "recharts";
import Title from "./Title";

// Generate Sales Data


export default function BoxDataChart(props) {
  const theme = useTheme();
  var data = [];
  var i = 0
  
  for (var key in props.data) {
    if (i > Object.keys(props.data).length - 50)
      data.push({item: i, volume: props.data[key].volume})
      i+=1; 
  }
  console.log(data)
  return (
    <React.Fragment>
      <Title>Recent data</Title>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="item" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: "middle", fill: theme.palette.text.primary }}
            >
              Volume
            </Label>
          </YAxis>
          <Line
            type="monotone"
            dataKey="volume"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
