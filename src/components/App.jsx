import { lazy } from 'react';
// import { Sales } from 'pages/Sales';
import { Route, Routes, Navigate } from 'react-router';
import { GlobalStyle } from './GlobalStyle';
import { InvoiceDetails } from './InvoiceDetails';
// import { Invoices } from './Invoices';
import { Layout } from './Layout';
// import { Customers } from 'pages/Customers';
// import { CustomerDetails } from 'pages/CustomerDetails';

const Sales = lazy(() => import('../pages/Sales'));
const Customers = lazy(() => import('../pages/Customers'));
const CustomerDetails = lazy(() => import('../pages/CustomerDetails'));
const Invoices = lazy(() => import('./Invoices'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<div>Dashboard</div>}></Route>
          <Route path="sales" element={<Sales />}>
            <Route index element={<div>Sales index route</div>} />
            <Route path="analytics" element={<div>Analytics</div>} />
            <Route path="invoices" element={<Invoices />}>
              <Route
                index
                element={<div>Select invoice to see details.</div>}
              />
              <Route path=":invoiceId" element={<InvoiceDetails />} />
            </Route>
            <Route path="deposits" element={<div>Deposits</div>} />
          </Route>
          <Route path="reports" element={<div>Reports</div>}></Route>
          <Route path="feedback" element={<div>Feedbacks</div>}></Route>
          <Route path="customers" element={<Customers />}></Route>
          <Route
            path="customers/:customerId"
            element={<CustomerDetails />}
          ></Route>
        </Route>
      </Routes>

      <GlobalStyle />
    </>
  );
};
