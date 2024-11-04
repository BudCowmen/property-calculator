import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const ApartmentCalculator = () => {
  const [inputs, setInputs] = useState({
    purchasePrice: 1000000,
    downPayment: 20,
    interestRate: 4.5,
    loanTerm: 30,
    grossMonthlyRent: 10000,
    vacancy: 5,
    propertyTax: 2000,
    insurance: 1200,
    maintenance: 5000,
    utilities: 2400,
    propertyManagement: 8,
    annualAppreciation: 3,
  });
  const calculateResults = () => {
    // Loan calculations
    const loanAmount = inputs.purchasePrice * (1 - inputs.downPayment / 100);
    const monthlyInterest = inputs.interestRate / 12 / 100;
    const numberOfPayments = inputs.loanTerm * 12;
    const monthlyMortgage = loanAmount * (monthlyInterest * Math.pow(1 + monthlyInterest, numberOfPayments)) / 
                           (Math.pow(1 + monthlyInterest, numberOfPayments) - 1);

    // Annual income and expenses
    const annualGrossIncome = inputs.grossMonthlyRent * 12;
    const vacancyLoss = annualGrossIncome * (inputs.vacancy / 100);
    const effectiveGrossIncome = annualGrossIncome - vacancyLoss;
    
    const annualExpenses = {
      mortgage: monthlyMortgage * 12,
      propertyTax: inputs.propertyTax,
      insurance: inputs.insurance,
      maintenance: inputs.maintenance,
      utilities: inputs.utilities,
      propertyManagement: effectiveGrossIncome * (inputs.propertyManagement / 100)
    };

    const totalExpenses = Object.values(annualExpenses).reduce((a, b) => a + b, 0);
    const netOperatingIncome = effectiveGrossIncome - totalExpenses + annualExpenses.mortgage;
    const cashFlow = effectiveGrossIncome - totalExpenses;
    
    // Return metrics
    const capRate = (netOperatingIncome / inputs.purchasePrice) * 100;
    const cashOnCashReturn = (cashFlow / (inputs.purchasePrice * inputs.downPayment / 100)) * 100;
    
    return {
      monthlyMortgage,
      effectiveGrossIncome,
      totalExpenses,
      netOperatingIncome,
      annualCashFlow: cashFlow,
      capRate,
      cashOnCashReturn
    };
  };
