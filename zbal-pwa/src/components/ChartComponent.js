import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';


function ChartComponent({items}) {
    
    const prepareData = (items) => {
        const itemsData = items.map(item => {
            return {    
                id: item.id,
                name: `${item.name}`,
                value: Number(item.weight)

                }
        });
        return itemsData
    }

    const data = prepareData(items)
    
    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart width={500} height={500}>
                <Pie
                    data={data}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={1}
                    dataKey="value"
                    >
                </Pie>
                <Tooltip/>
            </PieChart>
        </ResponsiveContainer>
    )
}

export default ChartComponent

