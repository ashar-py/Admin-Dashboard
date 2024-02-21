"use client"
import styles from "./chart.module.css"
import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
    {
      name: 'Jan',
      "Quote Sent": 750,
      "Docs Awaited": 150,
      "No Response": 100,
    },
    {
      name: 'Feb',
      "Quote Sent": 1500,
      "Docs Awaited": 250,
      "No Response": 250,
    },
    {
      name: 'Mar',
      "Quote Sent": 2250,
      "Docs Awaited": 500,
      "No Response": 250,
    },
    {
      name: 'Apr',
      "Quote Sent": 2900,
      "Docs Awaited": 500,
      "No Response": 300,
    },
    {
      name: 'May',
      "Quote Sent": 3200,
      "Docs Awaited": 520,
      "No Response": 280,
    },
    {
      name: 'Jun',
      "Quote Sent": 3700,
      "Docs Awaited": 300,
      "No Response": 300,
    },
    {
      name: 'July',
      "Quote Sent": 4000,
      "Docs Awaited": 600,
      "No Response": 400,
    },
    {
      name: 'Aug',
      "Quote Sent": 4700,
      "Docs Awaited": 500,
      "No Response": 300,
    },
    {
      name: 'Sept',
      "Quote Sent": 4900,
      "Docs Awaited": 600,
      "No Response": 300,
    },
    {
      name: 'Oct',
      "Quote Sent": 5000,
      "Docs Awaited": 700,
      "No Response": 300,
    },
    {
      name: 'Nov',
      "Quote Sent": 4900,
      "Docs Awaited": 800,
      "No Response": 200,
    },
  ];

  const BarGraph = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Quote Status</h2>
            <ResponsiveContainer width="100%" height="88%">
        <BarChart
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
          <Tooltip cursor={{fill: 'transparent'}}/>
          <Legend verticalAlign="top"/>
          <Bar dataKey="Quote Sent" fill="#0088FE" activeBar={<Rectangle fill="transparent" stroke="#0088FE" />} />
          <Bar dataKey="Docs Awaited" fill="#FFBB28" activeBar={<Rectangle fill="transparent" stroke="#FFBB28" />} />
          <Bar dataKey="No Response" fill="#ff2865" activeBar={<Rectangle fill="transparent" stroke="#ff2865" />} />
        </BarChart>
      </ResponsiveContainer>
        </div>
    )
  }

  export default BarGraph;
