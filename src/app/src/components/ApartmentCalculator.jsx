import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

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
    const results = calculateResults();

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const handleInputChange = (field, value) => {
    setInputs(prev => ({
      ...prev,
      [field]: parseFloat(value) || 0
    }));
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Apartment Complex Investment Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Property Details</h3>
              
              <div>
                <Label>Purchase Price</Label>
                <Input
                  type="number"
                  value={inputs.purchasePrice}
                  onChange={(e) => handleInputChange('purchasePrice', e.target.value)}
                />
              </div>
                            <div>
                <Label>Down Payment (%)</Label>
                <Input
                  type="number"
                  value={inputs.downPayment}
                  onChange={(e) => handleInputChange('downPayment', e.target.value)}
                />
              </div>

              <div>
                <Label>Interest Rate (%)</Label>
                <Input
                  type="number"
                  value={inputs.interestRate}
                  onChange={(e) => handleInputChange('interestRate', e.target.value)}
                />
              </div>

              <div>
                <Label>Loan Term (years)</Label>
                <Input
                  type="number"
                  value={inputs.loanTerm}
                  onChange={(e) => handleInputChange('loanTerm', e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Income & Expenses</h3>
              
              <div>
                <Label>Gross Monthly Rent</Label>
                <Input
                  type="number"
                  value={inputs.grossMonthlyRent}
                  onChange={(e) => handleInputChange('grossMonthlyRent', e.target.value)}
                />
              </div>
                            <div>
                <Label>Vacancy Rate (%)</Label>
                <Input
                  type="number"
                  value={inputs.vacancy}
                  onChange={(e) => handleInputChange('vacancy', e.target.value)}
                />
              </div>

              <div>
                <Label>Annual Property Tax</Label>
                <Input
                  type="number"
                  value={inputs.propertyTax}
                  onChange={(e) => handleInputChange('propertyTax', e.target.value)}
                />
              </div>

              <div>
                <Label>Annual Insurance</Label>
                <Input
                  type="number"
                  value={inputs.insurance}
                  onChange={(e) => handleInputChange('insurance', e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Investment Analysis</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Monthly Mortgage Payment</p>
                <p className="text-lg font-semibold">{formatCurrency(results.monthlyMortgage)}</p>
              </div>
                            <div>
                <p className="text-sm text-gray-600">Effective Gross Income (Annual)</p>
                <p className="text-lg font-semibold">{formatCurrency(results.effectiveGrossIncome)}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Operating Expenses</p>
                <p className="text-lg font-semibold">{formatCurrency(results.totalExpenses)}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Net Operating Income</p>
                <p className="text-lg font-semibold">{formatCurrency(results.netOperatingIncome)}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Annual Cash Flow</p>
                <p className="text-lg font-semibold">{formatCurrency(results.annualCashFlow)}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Cap Rate</p>
                <p className="text-lg font-semibold">{results.capRate.toFixed(2)}%</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Cash-on-Cash Return</p>
                <p className="text-lg font-semibold">{results.cashOnCashReturn.toFixed(2)}%</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ApartmentCalculator;
