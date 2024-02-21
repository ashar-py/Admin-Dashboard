"use client"
import React, { PureComponent } from 'react';
import styles from "./chart.module.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    "Current Year": 45,
    "Previous Year": 25,
    amt: 2400,
  },
  {
    name: 'Feb',
    "Current Year": 48,
    "Previous Year": 30,
    amt: 2210,
  },
  {
    name: 'Mar',
    "Current Year": 52,
    "Previous Year": 32,
    amt: 2290,
  },
  {
    name: 'Apr',
    "Current Year": 58,
    "Previous Year": 38,
    amt: 2000,
  },
  {
    name: 'May',
    "Current Year": 55,
    "Previous Year": 40,
    amt: 2181,
  },
  {
    name: 'Jun',
    "Current Year": 59,
    "Previous Year": 42,
    amt: 2500,
  },
  {
    name: 'July',
    "Current Year": 65,
    "Previous Year": 40,
    amt: 2100,
  },
  {
    name: 'Aug',
    "Current Year": 64,
    "Previous Year": 45,
    amt: 2100,
  },
  {
    name: 'Sept',
    "Current Year": 55,
    "Previous Year": 42,
    amt: 2100,
  },
  {
    name: 'Oct',
    "Current Year": 55,
    "Previous Year": 41,
    amt: 2100,
  },
  {
    name: 'Nov',
    "Current Year": 62,
    "Previous Year": 43,
    amt: 2100,
  },
];

const LineGraph = () => {
  return (
    <div className={styles.container}>
        <h2 className={styles.title}>Orders Booked</h2>
        <ResponsiveContainer width="100%" height="85%">
        <LineChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top"/>
          <Line type="monotone" dataKey="Previous Year" stroke="#0088FE" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Current Year" stroke="#ff2865" />
        </LineChart>
      </ResponsiveContainer>
    </div>
    )

}
export default LineGraph
