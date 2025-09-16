import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  CreditCard,
  Wallet,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

export default function DashboardDemo() {
  const monthlyData = [
    { month: "Ene", ingresos: 4500, gastos: 3200 },
    { month: "Feb", ingresos: 3800, gastos: 2900 },
    { month: "Mar", ingresos: 5200, gastos: 3800 },
    { month: "Abr", ingresos: 4100, gastos: 3500 },
    { month: "May", ingresos: 4800, gastos: 3100 },
    { month: "Jun", ingresos: 5500, gastos: 4200 },
  ];

  const balanceData = [
    { date: "1", balance: 15000 },
    { date: "7", balance: 16200 },
    { date: "14", balance: 15800 },
    { date: "21", balance: 17400 },
    { date: "28", balance: 18900 },
  ];

  const expenseCategories = [
    { name: "Alimentación", value: 35, color: "#3B82F6" },
    { name: "Transporte", value: 20, color: "#10B981" },
    { name: "Entretenimiento", value: 15, color: "#F59E0B" },
    { name: "Servicios", value: 20, color: "#EF4444" },
    { name: "Otros", value: 10, color: "#8B5CF6" },
  ];

  const transactions = [
    {
      id: 1,
      type: "income",
      description: "Salario",
      amount: 3500,
      date: "15 Jun",
    },
    {
      id: 2,
      type: "expense",
      description: "Supermercado",
      amount: -120,
      date: "14 Jun",
    },
    {
      id: 3,
      type: "income",
      description: "Freelance",
      amount: 800,
      date: "13 Jun",
    },
    {
      id: 4,
      type: "expense",
      description: "Netflix",
      amount: -15,
      date: "12 Jun",
    },
    {
      id: 5,
      type: "expense",
      description: "Gasolina",
      amount: -65,
      date: "11 Jun",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700/50 shadow-2xl backdrop-blur-xl">
      {/* Header del dashboard */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent">
            Dashboard Financiero
          </h1>
          <p className="text-gray-400 text-sm">
            Resumen de actividad - Junio 2024
          </p>
        </div>
        <div className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-xl border border-gray-600/30">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-300">En tiempo real</span>
        </div>
      </div>

      {/* Métricas principales */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-4 rounded-xl border border-gray-600/30 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Balance Total</p>
              <p className="text-2xl font-bold text-white">€18,900</p>
              <div className="flex items-center text-green-400 text-sm mt-1">
                <ArrowUpRight className="w-4 h-4" />
                <span>+8.2%</span>
              </div>
            </div>
            <div className="p-3 bg-blue-500/20 rounded-xl">
              <Wallet className="w-6 h-6 text-blue-400" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-4 rounded-xl border border-gray-600/30 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Ingresos</p>
              <p className="text-2xl font-bold text-white">€5,500</p>
              <div className="flex items-center text-green-400 text-sm mt-1">
                <TrendingUp className="w-4 h-4" />
                <span>+12.3%</span>
              </div>
            </div>
            <div className="p-3 bg-green-500/20 rounded-xl">
              <DollarSign className="w-6 h-6 text-green-400" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-4 rounded-xl border border-gray-600/30 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Gastos</p>
              <p className="text-2xl font-bold text-white">€4,200</p>
              <div className="flex items-center text-red-400 text-sm mt-1">
                <ArrowDownRight className="w-4 h-4" />
                <span>+5.1%</span>
              </div>
            </div>
            <div className="p-3 bg-red-500/20 rounded-xl">
              <CreditCard className="w-6 h-6 text-red-400" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-4 rounded-xl border border-gray-600/30 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Ahorro</p>
              <p className="text-2xl font-bold text-white">€1,300</p>
              <div className="flex items-center text-blue-400 text-sm mt-1">
                <TrendingUp className="w-4 h-4" />
                <span>+18.7%</span>
              </div>
            </div>
            <div className="p-3 bg-purple-500/20 rounded-xl">
              <TrendingUp className="w-6 h-6 text-purple-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Gráfico de barras - Ingresos vs Gastos */}
        <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-xl border border-gray-600/30 backdrop-blur-sm">
          <h3 className="text-lg font-semibold text-white mb-4">
            Ingresos vs Gastos
          </h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={monthlyData}>
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                className="text-gray-400"
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                className="text-gray-400"
              />
              <Bar dataKey="ingresos" fill="#10B981" radius={4} />
              <Bar dataKey="gastos" fill="#EF4444" radius={4} />
            </BarChart>
          </ResponsiveContainer>
          <div className="flex justify-center space-x-6 mt-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded mr-2"></div>
              <span className="text-sm text-gray-300">Ingresos</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-red-500 rounded mr-2"></div>
              <span className="text-sm text-gray-300">Gastos</span>
            </div>
          </div>
        </div>

        {/* Gráfico de línea - Evolución del balance */}
        <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-xl border border-gray-600/30 backdrop-blur-sm">
          <h3 className="text-lg font-semibold text-white mb-4">
            Evolución del Balance
          </h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={balanceData}>
              <XAxis
                dataKey="date"
                axisLine={false}
                tickLine={false}
                className="text-gray-400"
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                className="text-gray-400"
              />
              <Line
                type="monotone"
                dataKey="balance"
                stroke="#3B82F6"
                strokeWidth={3}
                dot={{ fill: "#3B82F6", strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Distribución de gastos */}
        <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-xl border border-gray-600/30 backdrop-blur-sm">
          <h3 className="text-lg font-semibold text-white mb-4">
            Distribución de Gastos
          </h3>
          <div className="flex justify-center mb-4">
            <ResponsiveContainer width={150} height={150}>
              <PieChart>
                <Pie
                  data={expenseCategories}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={70}
                  dataKey="value"
                  stroke="none"
                >
                  {expenseCategories.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-2">
            {expenseCategories.map((category, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div
                    className="w-3 h-3 rounded mr-3"
                    style={{ backgroundColor: category.color }}
                  ></div>
                  <span className="text-sm text-gray-300">{category.name}</span>
                </div>
                <span className="text-sm text-white font-medium">
                  {category.value}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Transacciones recientes */}
        <div className="lg:col-span-2 bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-xl border border-gray-600/30 backdrop-blur-sm">
          <h3 className="text-lg font-semibold text-white mb-4">
            Transacciones Recientes
          </h3>
          <div className="space-y-3">
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg border border-gray-600/20"
              >
                <div className="flex items-center">
                  <div
                    className={`p-2 rounded-lg mr-3 ${
                      transaction.type === "income"
                        ? "bg-green-500/20"
                        : "bg-red-500/20"
                    }`}
                  >
                    {transaction.type === "income" ? (
                      <ArrowUpRight className="w-4 h-4 text-green-400" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4 text-red-400" />
                    )}
                  </div>
                  <div>
                    <p className="text-white font-medium">
                      {transaction.description}
                    </p>
                    <p className="text-gray-400 text-sm">{transaction.date}</p>
                  </div>
                </div>
                <span
                  className={`font-semibold ${
                    transaction.type === "income"
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {transaction.amount > 0 ? "+" : ""}€
                  {Math.abs(transaction.amount).toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
