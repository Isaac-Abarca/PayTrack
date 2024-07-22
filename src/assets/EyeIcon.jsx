/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const EyeIcon = ({ show }) => {
  return show ? (
    <FontAwesomeIcon icon={faEye} size="lg" />
  ) : (
    <FontAwesomeIcon icon={faEyeSlash} size="lg" />
  );
};

export default EyeIcon;
