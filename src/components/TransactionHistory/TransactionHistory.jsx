import PropTypes from 'prop-types';
import { Box } from '../Box';
import { Head, Row, Heading, Data, Body } from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <Box as="table">
      <Head>
        <Row>
          <Heading>Type</Heading>
          <Heading>Amount</Heading>
          <Heading>Currency</Heading>
        </Row>
      </Head>

      <Body>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <Row key={id}>
              <Data>{type}</Data>
              <Data>{amount}</Data>
              <Data>{currency}</Data>
            </Row>
          );
        })}
      </Body>
    </Box>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};
