import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Shopping', value: 400 },
    { name: 'Food', value: 300 },
    { name: 'Travel', value: 300 },
];

const COLORS = ['#0088FE', '#00C49F', '#d1f73f', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

export default class Example extends PureComponent {
    render() {
        return (
            <div style={{ width: '100%', textAlign: 'center' }}>
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Pie
                            data={data}
                            cx="70%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={120}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>

                {/* Custom Legend */}
                <div style={{ display: 'flex', justifyContent: 'right', marginTop: 16, flexWrap: 'wrap' }}>
                    {data.map((entry, index) => (
                        <div
                            key={`legend-${index}`}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginRight: 20,
                                marginBottom: 10,
                            }}
                        >
                            <div
                                style={{
                                    width: 12,
                                    height: 12,
                                    backgroundColor: COLORS[index % COLORS.length],
                                    marginRight: 6,
                                }}
                            ></div>
                            <span>{entry.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
