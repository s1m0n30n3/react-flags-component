import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

export const FlagDisplay = ({
  countryCode = "AFG",
  size = "md",
  shape = "rectangular",
  as: Tag = "div",
  customHeight,
  customWidth,
  ...props
}) => {
  const customHeightProp = customHeight ? { height: customHeight } : {};
  const customWidthProp = customWidth ? { width: customWidth } : {};

  const customSizeProps =
    customHeight || customHeight
      ? { style: { ...customHeightProp, ...customWidthProp } }
      : {};

  return (
    <Tag
      className={`fib-${shape}-${countryCode} fib-size-${size}`}
      {...customSizeProps}
      {...props}
    />
  );
};

FlagDisplay.propTypes = {
  countryCode: PropTypes.string,
  size: PropTypes.string,
  shape: PropTypes.string,
  as: PropTypes.string,
  customHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  customWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
