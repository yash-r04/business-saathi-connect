import React from "react";

type Invoice = {
  id: string;
  client: string;
  amount: number;
  status: "paid" | "pending" | "overdue";
  dueDate: string;
};

const invoices: Invoice[] = [
  {
    id: "INV-001",
    client: "ABC Pvt Ltd",
    amount: 5000,
    status: "overdue",
    dueDate: "2026-04-01",
  },
  {
    id: "INV-002",
    client: "XYZ Agency",
    amount: 12000,
    status: "paid",
    dueDate: "2026-03-25",
  },
  {
    id: "INV-003",
    client: "Rahul Designs",
    amount: 3500,
    status: "pending",
    dueDate: "2026-04-10",
  },
];

const statusStyles = {
  paid: "bg-green-100 text-green-600",
  pending: "bg-yellow-100 text-yellow-600",
  overdue: "bg-red-100 text-red-600",
};

export default function Invoices() {
  const totalPending = invoices
    .filter((i) => i.status !== "paid")
    .reduce((sum, i) => sum + i.amount, 0);

  const totalPaid = invoices
    .filter((i) => i.status === "paid")
    .reduce((sum, i) => sum + i.amount, 0);

  const overdueCount = invoices.filter((i) => i.status === "overdue").length;

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">Invoices</h1>
          <p className="text-gray-500">
            Track, manage, and collect your payments
          </p>
        </div>

        <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700">
          + Create Invoice
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-xl shadow-sm border">
          <p className="text-gray-500 text-sm">Pending Amount</p>
          <h2 className="text-xl font-semibold">₹{totalPending}</h2>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm border">
          <p className="text-gray-500 text-sm">Paid This Month</p>
          <h2 className="text-xl font-semibold">₹{totalPaid}</h2>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm border">
          <p className="text-gray-500 text-sm">Overdue</p>
          <h2 className="text-xl font-semibold">{overdueCount} invoices</h2>
        </div>
      </div>

      {/* Invoice List */}
      <div className="bg-white rounded-xl shadow-sm border">
        <div className="p-4 border-b font-medium">All Invoices</div>

        <div className="divide-y">
          {invoices.map((invoice) => (
            <div
              key={invoice.id}
              className="flex justify-between items-center p-4 hover:bg-gray-50 transition"
            >
              {/* Left */}
              <div>
                <p className="font-medium">{invoice.client}</p>
                <p className="text-sm text-gray-500">
                  {invoice.id} • Due {invoice.dueDate}
                </p>
              </div>

              {/* Right */}
              <div className="flex items-center gap-4">
                <p className="font-semibold">₹{invoice.amount}</p>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    statusStyles[invoice.status]
                  }`}
                >
                  {invoice.status}
                </span>

                <button className="text-sm text-teal-600 hover:underline">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}