'use client';
import React, { useState } from 'react';

const ApartmentCalculator = () => {
  const [inputs, setInputs] = useState({
    // Property Metrics
    listPrice: 1000000,
    numberOfUnits: 10,
    squareFeet: 8000,
    appreciationRate: 3,

    // Loan Metrics
    interestRate: 4.5,
    loanTerm: 30,
    downPayment: 20,

    // Income & Expenses
    monthlyRentPerUnit: 1000,
    otherIncome: 0,
    vacancyRate: 5,
    operatingExpenseRate: 40,
    propertyTaxes: 12000,
    insurance: 6000,
    utilities: 0,
    maintenance: 10000,
    propertyManagement: 8,
    otherExpenses: 0,
  });

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Multifamily Rental Property Calculator
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Property Metrics Section */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Property Metrics</h2>
          {/* Property Metrics Inputs */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                List Price
              </label>
              <input
                type="number"
                value={inputs.listPrice}
                onChange={(e) => setInputs({ ...inputs, listPrice: parseFloat(e.target.value) || 0 })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Number of Units
              </label>
              <input
                type="number"
                value={inputs.numberOfUnits}
                onChange={(e) => setInputs({ ...inputs, numberOfUnits: parseFloat(e.target.value) || 0 })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Square Feet
              </label>
              <input
                type="number"
                value={inputs.squareFeet}
                onChange={(e) => setInputs({ ...inputs, squareFeet: parseFloat(e.target.value) || 0 })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Appreciation Rate (%)
              </label>
              <input
                type="number"
                value={inputs.appreciationRate}
                onChange={(e) => setInputs({ ...inputs, appreciationRate: parseFloat(e.target.value) || 0 })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
                {/* Loan Metrics Section */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Loan Metrics</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Interest Rate (%)
              </label>
              <input
                type="number"
                value={inputs.interestRate}
                onChange={(e) => setInputs({ ...inputs, interestRate: parseFloat(e.target.value) || 0 })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Term (years)
              </label>
              <input
                type="number"
                value={inputs.loanTerm}
                onChange={(e) => setInputs({ ...inputs, loanTerm: parseFloat(e.target.value) || 0 })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Down Payment (%)
              </label>
              <input
                type="number"
                value={inputs.downPayment}
                onChange={(e) => setInputs({ ...inputs, downPayment: parseFloat(e.target.value) || 0 })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Loan Amount
              </label>
              <div className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700">
                ${(inputs.listPrice * (1 - inputs.downPayment / 100)).toLocaleString()}
              </div>
            </div>
          </div>
        </div>
                {/* Income & Expenses Section */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Income & Expenses</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Monthly Rent per Unit
              </label>
              <input
                type="number"
                value={inputs.monthlyRentPerUnit}
                onChange={(e) => setInputs({ ...inputs, monthlyRentPerUnit: parseFloat(e.target.value) || 0 })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Other Monthly Income
              </label>
              <input
                type="number"
                value={inputs.otherIncome}
                onChange={(e) => setInputs({ ...inputs, otherIncome: parseFloat(e.target.value) || 0 })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Vacancy Rate (%)
              </label>
              <input
                type="number"
                value={inputs.vacancyRate}
                onChange={(e) => setInputs({ ...inputs, vacancyRate: parseFloat(e.target.value) || 0 })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Operating Expense Rate (%)
              </label>
              <input
                type="number"
                value={inputs.operatingExpenseRate}
                onChange={(e) => setInputs({ ...inputs, operatingExpenseRate: parseFloat(e.target.value) || 0 })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
                {/* Returns Section */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Returns</h2>
          <div className="space-y-4">
            {/* Calculated Values */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Cap Rate (%)
              </label>
              <div className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700">
                {calculateCapRate().toFixed(2)}%
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Cash-on-Cash Return (%)
              </label>
              <div className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700">
                {calculateCashOnCash().toFixed(2)}%
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Price per Unit
              </label>
              <div className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700">
                ${(inputs.listPrice / inputs.numberOfUnits).toLocaleString()}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Price per SqFt
              </label>
              <div className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700">
                ${(inputs.listPrice / inputs.squareFeet).toFixed(2)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add calculation functions
const calculateCapRate = () => {
  const annualRent = inputs.monthlyRentPerUnit * inputs.numberOfUnits * 12;
  const grossIncome = annualRent + (inputs.otherIncome * 12);
  const vacancy = grossIncome * (inputs.vacancyRate / 100);
  const effectiveGrossIncome = grossIncome - vacancy;
  const operatingExpenses = effectiveGrossIncome * (inputs.operatingExpenseRate / 100);
  const netOperatingIncome = effectiveGrossIncome - operatingExpenses;
  return (netOperatingIncome / inputs.listPrice) * 100;
};

const calculateCashOnCash = () => {
  const downPaymentAmount = inputs.listPrice * (inputs.downPayment / 100);
  const loanAmount = inputs.listPrice - downPaymentAmount;
  const monthlyMortgage = calculateMonthlyMortgage(loanAmount);
  const annualMortgage = monthlyMortgage * 12;
  const netOperatingIncome = (calculateCapRate() / 100) * inputs.listPrice;
  const cashFlow = netOperatingIncome - annualMortgage;
  return (cashFlow / downPaymentAmount) * 100;
};

const calculateMonthlyMortgage = (loanAmount) => {
  const monthlyRate = inputs.interestRate / 1200;
  const numberOfPayments = inputs.loanTerm * 12;
  return loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
         (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
};

export default ApartmentCalculator;
