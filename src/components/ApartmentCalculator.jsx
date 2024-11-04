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
