import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export const mapStateToProps = state => ({
  theme: state.user.theme
});

export const withTheme = WrappedComponent => {
  const hocComponent = ({ theme, ...props }) => (
    <div className={`theme -${theme}`}>
      <WrappedComponent {...props} />
    </div>
  );

  hocComponent.propTypes = {
    theme: PropTypes.string.isRequired
  };

  return hocComponent;
};

export default WrapperComponent =>
  connect(mapStateToProps)(withTheme(WrapperComponent));
