"use client"
import styles from "./rightbar.module.css"
import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const LineGraph = ({
    title,
    value,
    prev
}) => {
    const data = [{"current": value, name: "current"},
    {"previous": prev, name: "previous"},
];
    return(
        <div className={styles.graphs}>
            <div className={styles.texts}>
                <span className={styles.title}>{title}</span>
                <span className={styles.value}>{value}</span>
                <span className={styles.detail}>vs Previous {prev}</span>
                <ResponsiveContainer width='100%' aspect={10 / 1.6}>
                        <BarChart data={data} layout="vertical">
                            <XAxis type="number" hide />
                            <YAxis dataKey="name" hide type="category" />
                            <Legend iconSize={1} layout="vertical" verticalAlign="middle" align="left" />
                            <Bar dataKey="current" barSize={10} fill="#002341" />
                            <Bar dataKey="previous" barSize={10} fill="#0088FE" />
                        </BarChart>
                    </ResponsiveContainer>
            </div>

        </div>
    )
}

export default LineGraph