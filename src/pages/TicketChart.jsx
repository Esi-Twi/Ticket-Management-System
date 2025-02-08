import {Pie, PieChart, Tooltip, Cell, Bar, BarChart, Rectangle , CartesianGrid, XAxis, YAxis} from "recharts";

const tickets = JSON.parse(localStorage.getItem('tickets'))

const renderCustomLabel = ({cx, cy, midAngle, innerRadius, outerRadius, percent, index}) => {
    const RADIAN = Math.PI / 180
    const radius = 25 + innerRadius + (outerRadius - innerRadius)
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
        <text 
            x={x}
            y={y}
            fill='black'
            textAnchor={x > cx ? 'start' : 'end'}
            dominantBaseline='central'
        >
            {`${(percent * 100).toFixed(2)}%`}
        </text>
    )
}

const colors = ['#0088FE', '#01C49F', '#FFBB28', '#FF8042', '#F44236', '#FF4B28', '#FF4042', '#F42236']

function TicketChart() {
    return (
        <section className="flex flex-col gap-9 items-center justify-center md:flex-row md:gap-0 pt-5">
            <PieChart width={400} height={300}>
                <Pie 
                    data={tickets} 
                    cx={200}
                    cy={150}
                    dataKey="tickets" 
                    labelLine={false}
                    label={renderCustomLabel}
                    outerRadius={100}
                    fill="#884d8"
                >
                    {tickets.map((entry,index) => (
                        <Cell key={index} fill={colors[index]} />
                    ))}
                </Pie>
                <Tooltip/>
            </PieChart>

            <BarChart width={430} height={300} data={tickets}>
                <Bar 
                    dataKey="tickets" 
                    fill="#2196F3" 
                    activeBar={<Rectangle fill="gold" stroke="green"/>}
                />
                <CartesianGrid strokeDasharray="2 2"/>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip cursor={{fill: 'transparent'}} />
            </BarChart>
        </section>
       
    )
}

export default TicketChart;

