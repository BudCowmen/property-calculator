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

  // Calculation functions moved inside component
  const calculateCapRate = () => {
    const annualRent = inputs.monthlyRentPerUnit * inputs.numberOfUnits * 12;
    const grossIncome = annualRent + (inputs.otherIncome * 12);
    const vacancy = grossIncome * (inputs.vacancyRate / 100);
    const effectiveGrossIncome = grossIncome - vacancy;
    const operatingExpenses = effectiveGrossIncome * (inputs.operatingExpenseRate / 100);
    const netOperatingIncome = effectiveGrossIncome - operatingExpenses;
    return (netOperatingIncome / inputs.listPrice) * 100;
  };

  const calculateMonthlyMortgage = (loanAmount) => {
    const monthlyRate = inputs.interestRate / 1200;
    const numberOfPayments = inputs.loanTerm * 12;
    return loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
           (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
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

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Multifamily Rental Property Calculator
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
