"use client"
import styles from "./chart.module.css"
import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
    {
      name: 'Jan',
      count: 1000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Feb',
      count: 2000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Mar',
      count: 3000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Apr',
      count: 3500,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'May',
      count: 4000,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Jun',
      count: 4300,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'July',
      count: 5000,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Aug',
      count: 5500,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Sept',
      count: 5700,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Oct',
      count: 6000,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Nov',
      count: 5800,
      pv: 4300,
      amt: 2100,
    },
  ];

const AreaGraph = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Total Customers this month</h2>
            <ResponsiveContainer width="100%" height="80%">
        <AreaChart
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
          <Area type="monotone" dataKey="count" stroke="#52aeff" fill="#0088FE" />
        </AreaChart>
      </ResponsiveContainer>

        </div>
    )
}

export default AreaGraph