import PropTypes from "prop-types";
import { DividerContainer, DividerLine, DividerTitle } from "./StyledDivider";

const Divider = ({ title }) => {
  return (
    <DividerContainer>
      <DividerLine />
      <DividerTitle>{title}</DividerTitle>
      <DividerLine />
    </DividerContainer>
  );
};

Divider.propTypes = {
  title: PropTypes.string,
};

export default Divider;
