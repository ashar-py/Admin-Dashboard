"use client"
import styles from "./rightbar.module.css";
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, Legend, ResponsiveContainer } from 'recharts';
import LineGraph from "./linegraph";
import { Tooltip } from "bootstrap";

const data = [
    { name: 'Home', value: 100 },
    { name: 'Life', value: 200 },
    { name: 'Health', value: 500 },
    { name: 'Travel', value: 300 },
    { name: 'Motor', value: 400 },
    { name: 'Other', value: 300 },
  ];
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#258EC7', '#8031A7'];
  
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

const Rightbar = () => {
    return (
        <div className={styles.container}>
                <h2 className={styles.title}>Insurance Domains</h2>
                <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            // label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend verticalAlign="top"/>
        </PieChart>
      </ResponsiveContainer>
      <LineGraph title="Avg. time per customer(in mins)" value="6" prev="7.5"/>
      <LineGraph title="Avg. customer rating(CSAT)" value="4.4" prev="4.2"/>

        </div>
    )
}

export default Rightbar