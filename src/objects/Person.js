import PropTypes from 'prop-types';

export default function Person(id, name, nonClicks) {
    this.id = id;
    this.name = name;
    this.nonClicks = nonClicks;
};

Person.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    nonClicks: PropTypes.number
}
