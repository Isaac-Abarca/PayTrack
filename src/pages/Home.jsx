// src/components/Home.jsx
import '../styles/Home.css';
import Layout from '../components/Layout';
import { useDebts } from '../contexts/DebtContext';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const Home = () => {
  const { deudas } = useDebts();
  const [totalAmount, setTotalAmount] = useState('0.00');
  const [debtCount, setDebtCount] = useState(0);
  const [chartDataList, setChartDataList] = useState([]);

  useEffect(() => {
    if (!deudas || deudas.length === 0) {
      setTotalAmount('0.00');
      setDebtCount(0);
      setChartDataList([]);
    } else {
      const total = deudas.reduce((sum, deuda) => {
        const pagosTotal = deuda.pagos?.reduce((sumPagos, pago) => sumPagos + parseFloat(pago.montoPago), 0) || 0;
        const montoActual = parseFloat(deuda.montoInicial) - pagosTotal;
        return sum + montoActual;
      }, 0);
      setTotalAmount(total.toFixed(2));
      setDebtCount(deudas.length);

      const chartData = deudas
        .filter(deuda => {
          const pagosTotal = deuda.pagos?.reduce((sumPagos, pago) => sumPagos + parseFloat(pago.montoPago), 0) || 0;
          const montoActual = parseFloat(deuda.montoInicial) - pagosTotal;
          return montoActual > 0;
        })
        .map(deuda => {
          const pagosTotal = deuda.pagos?.reduce((sumPagos, pago) => sumPagos + parseFloat(pago.montoPago), 0) || 0;
          const montoActual = parseFloat(deuda.montoInicial) - pagosTotal;

          return {
            title: deuda.descripcion || 'Deuda',
            deudor: deuda.deudor || 'Deudor',
            data: {
              labels: ['Pagos', 'Monto Actual'],
              datasets: [
                {
                  label: 'Montos',
                  data: [pagosTotal, montoActual],
                  backgroundColor: ['rgba(54, 162, 235, 0.6)', 'rgba(255, 99, 132, 0.6)'],
                  borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
                  borderWidth: 1,
                }
              ]
            }
          };
        });

      setChartDataList(chartData);
    }
  }, [deudas]);

  return (
    <Layout>
      <div className="debt-summary">
        <div className="summary-item">
          <p className="summary-title">Total Adeudado</p>
          <p className="summary-value">${totalAmount}</p>
        </div>
        <div className="summary-item">
          <p className="summary-title">Deudas Activas</p>
          <p className="summary-value">{debtCount}</p>
        </div>
      </div>
      {chartDataList.map((chartData, index) => (
        <div key={index} className="chart-container">
          <Bar 
            data={chartData.data}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'top',
                },
                title: {
                  display: true,
                  text: `Análisis de ${chartData.title} - ${chartData.deudor}`,
                }
              },
              scales: {
                x: {
                  title: {
                    display: false,
                    text: chartData.deudor,
                  },
                },
                y: {
                  beginAtZero: true,
                },
              },
            }}
          />
        </div>
      ))}
    </Layout>
  );
};

export default Home;







