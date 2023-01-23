import { getCustomersById } from 'fakeApi';
import { useEffect, useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';

const CustomerDetails = () => {
  const { customerId } = useParams();
  const [customer, setCustomer] = useState(null);
  const location = useLocation();

  console.log(location);

  useEffect(() => {
    getCustomersById(Number(customerId)).then(setCustomer);
  }, [customerId]);

  if (!customer) {
    return null;
  }

  const { id, name } = customer;
  const backLinkHref = location.state?.from ?? '/customers';

  return (
    <main>
      <Link to={backLinkHref}>Back to customers</Link>
      <p> Username: {name}</p>
      <p> id: {id}</p>
    </main>
  );
};

export default CustomerDetails;
