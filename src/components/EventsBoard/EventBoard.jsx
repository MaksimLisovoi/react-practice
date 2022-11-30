import { Event } from 'components/Event/Event';
import css from './EventBoard.module.css';
import PropTypes from 'prop-types';

export const EventBoard = ({ events }) => {
  console.log(events);
  return (
    <div className={css.eventBoard}>
      {events.map(({ name, location, speaker, type, start, end }) => (
        <Event
          key={name}
          name={name}
          location={location}
          speaker={speaker}
          type={type}
          start={start}
          end={end}
        />
      ))}
    </div>
  );
};

EventBoard.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      location: 'Corvus, Jangala',
      speaker: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      start: PropTypes.string.isRequired,
      end: PropTypes.string.isRequired,
    }),
  ),
};
