import { Sales } from 'pages/Sales';
import { Route, Routes } from 'react-router';
import { GlobalStyle } from './GlobalStyle';
import { InvoiceDetails } from './InvoiceDetails';
import { Invoices } from './Invoices';
import { Layout } from './Layout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<div>Home page index route</div>} />
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
          <Route path="customers" element={<div>Customers</div>}></Route>
        </Route>
      </Routes>

      <GlobalStyle />
    </>
  );
};
