import PropTypes from 'prop-types';
import { FaMapMarkerAlt, FaUserAlt, FaCalendarAlt, FaClock } from 'react-icons/fa';
import { formatEventDuration, formatEventStart } from 'utils';
import { iconSize } from '../../constants';
import { Card, EventTitle, EventInfo, Chip } from './Event.styled';

export const Event = ({ name, location, speaker, type, start, end }) => {
  const formattedStart = formatEventStart(start);
  const duration = formatEventDuration(start, end);
  return (
    <Card>
      <EventTitle>{name}</EventTitle>
      <EventInfo>
        <FaMapMarkerAlt size={iconSize.sm} />
        {location}
      </EventInfo>
      <EventInfo>
        <FaUserAlt size={iconSize.sm} />
        {speaker}
      </EventInfo>
      <EventInfo>
        <FaCalendarAlt size={iconSize.sm} />
        {formattedStart}
      </EventInfo>
      <EventInfo>
        <FaClock size={iconSize.sm} />
        {duration}
      </EventInfo>
      <Chip eventType={type}>{type}</Chip>
    </Card>
  );
};

// className={`${css.chip} ${css[type]}`}

Event.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};
