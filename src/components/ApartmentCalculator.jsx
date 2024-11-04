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
