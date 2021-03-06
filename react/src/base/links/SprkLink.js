import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SprkLink = (props) => {
  const {
    children,
    element,
    variant,
    additionalClasses,
    idString,
    analyticsString,
    onClick,
    href,
    isDisabled,
    ...other
  } = props;
  const TagName = element || 'a';
  const classNames = classnames(additionalClasses, {
    'sprk-b-Link': variant !== 'unstyled',
    'sprk-b-Link--simple': variant === 'simple',
    'sprk-b-Link--plain': variant === 'plain',
    // TODO: Remove the disabled variant in issue #1293
    'sprk-b-Link--disabled': variant === 'disabled' || isDisabled,
    'sprk-b-Link--has-icon': variant === 'has-icon' || variant === 'hasIcon',
    'sprk-b-Link--light': variant === 'light',
  });

  let link;
  if (href) {
    link = href;
  } else if (TagName === 'a' && !href) {
    link = '#';
  } else {
    link = undefined;
  }

  let clickEvent;
  function handleClick(e) {
    e.preventDefault();
  }
  if (onClick) {
    clickEvent = onClick;
  } else if (!onClick && link === '#') {
    clickEvent = handleClick;
  }

  return (
    <TagName
      className={classNames}
      data-analytics={analyticsString}
      data-id={idString}
      href={link}
      onClick={clickEvent}
      {...other}
    >
      {children}
    </TagName>
  );
};

SprkLink.propTypes = {
  /** The children that will be rendered inside the link. */
  children: PropTypes.node,
  /**
   * Will cause the appropriate variant
   * type to render.
   * The `disabled` variant is deprecated. Use `isDisabled` instead.
   */
  // TODO: Remove the disabled prop in issue #1293
  variant: PropTypes.oneOf([
    'simple',
    'has-icon',
    'hasIcon',
    'plain',
    'disabled',
    'unstyled',
    'light',
  ]),
  /**
   * Assigned to the `data-id` attribute serving as a
   * unique selector for automated tools.
   */
  idString: PropTypes.string,
  /**
   * Assigned to the `data-analytics` attribute serving as a unique
   * selector for outside libraries to capture data.
   */
  analyticsString: PropTypes.string,
  /**
   * A space-separated string of classes to add to
   * the outermost container of the component.
   */
  additionalClasses: PropTypes.string,
  /** The href value for the link. */
  href: PropTypes.string,
  /**
   * Determines if link renders as an anchor tag, or router link.
   */
  element: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.elementType,
  ]),
  /** The event that will fire when the link is clicked. */
  onClick: PropTypes.func,
  /**
   * Will render the component in its disabled state.
   */
  isDisabled: PropTypes.bool,
};

export default SprkLink;
