import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import uniqueId from 'lodash/uniqueId';
import SprkIcon from '../icons/SprkIcon';
import 'focus-visible';

class SprkToggle extends Component {
  constructor(props) {
    super(props);
    // TODO: Remove isDefaultOpen in issue #1296
    const { isDefaultOpen } = this.props;
    let { isOpen } = this.props;
    if (isDefaultOpen !== undefined && isOpen === undefined) {
      isOpen = isDefaultOpen;
    }
    this.state = {
      isOpen: isOpen || false,
      height: isOpen ? 'auto' : 0,
    };

    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen(e) {
    e.preventDefault();
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
      height: !prevState.isOpen ? 'auto' : 0,
    }));
  }

  // TODO: Remove title, titleAddClasses, iconAddClasses in issue #1296
  render() {
    const {
      children,
      idString,
      additionalClasses,
      analyticsString,
      title,
      triggerText,
      titleAddClasses,
      titleAdditionalClasses,
      iconAddClasses,
      iconAdditionalClasses,
      toggleIconName,
      contentId,
      contentAdditionalClasses,
      onClick,
      ...other
    } = this.props;
    const { isOpen, height } = this.state;

    const uniqueIdentifier = contentId || uniqueId('sprk_toggle_content_');

    const containerClasses = classnames('sprk-c-Toggle', additionalClasses);

    // TODO: Remove titleAddClasses in issue #1296
    const titleClasses = classnames(
      'sprk-c-Toggle__trigger sprk-b-TypeBodyThree sprk-u-TextCrop--none',
      titleAdditionalClasses || titleAddClasses,
    );
    // TODO: Remove iconAddClasses in issue #1296
    const iconClasses = classnames(
      'sprk-c-Icon--xl sprk-c-Icon--toggle sprk-u-mrs',
      { 'sprk-c-Icon--open': isOpen },
      iconAdditionalClasses || iconAddClasses,
    );

    const contentClasses = classnames(
      'sprk-c-Toggle__content',
      contentAdditionalClasses,
    );
    return (
      <div data-id={idString} {...other} className={containerClasses}>
        <button
          className={titleClasses}
          data-analytics={analyticsString}
          onClick={(e) => {
            if (onClick) {
              onClick();
            }
            this.toggleOpen(e);
          }}
          aria-expanded={isOpen ? 'true' : 'false'}
          aria-controls={uniqueIdentifier}
          type="button"
        >
          <SprkIcon iconName={toggleIconName} additionalClasses={iconClasses} />
          {/* TODO: Remove title in issue #1296 */}
          {triggerText || title}
        </button>
        <AnimateHeight
          duration={300}
          height={height}
          className={contentClasses}
          id={uniqueIdentifier}
        >
          <div>{children}</div>
        </AnimateHeight>
      </div>
    );
  }
}

SprkToggle.defaultProps = {
  toggleIconName: 'chevron-down-circle',
};

SprkToggle.propTypes = {
  /**
   * 	The name of the icon other than the default to use for the toggle.
   */
  toggleIconName: PropTypes.string,
  /**
   * Deprecated - use `triggerText` instead.
   * The title text for the toggle.
   */
  // TODO: Remove title in issue #1296
  title: PropTypes.string,
  /**
   * The title text for the toggle.
   */
  triggerText: PropTypes.string.isRequired,
  /** The content that will show up when the toggle opens. */
  children: PropTypes.node.isRequired,
  /**
   * Assigned to the `data-id` attribute serving as
   * a unique selector for automated tools.
   */
  idString: PropTypes.string,
  /**
   * Assigned to the `data-analytics` attribute serving as
   * a unique selector for outside libraries to capture data.
   */
  analyticsString: PropTypes.string,
  /**
   * Deprecated - Use `isOpen` instead.
   * Determines if the toggle is open upon loading on the page.
   */
  // TODO: isDefaultOpen in issue #1296
  isDefaultOpen: PropTypes.bool,
  /** Determines if the toggle is open upon loading on the page. */
  isOpen: PropTypes.bool,
  /**
   * A space-separated string of classes to add to the
   * outermost container of the component.
   */
  additionalClasses: PropTypes.string,
  /** Deprecated - Use `titleAdditionalClasses` instead.
   * Additional classes for the title text. */
  // TODO: Remove titleAddClasses in issue #1296
  titleAddClasses: PropTypes.string,
  /** Additional classes for the title text. */
  titleAdditionalClasses: PropTypes.string,
  /** Deprecated - Use `iconAdditionalClasses` instead.
   * Additional classes for the toggle icon. */
  // TODO: Remove iconAddClasses in issue #1296
  iconAddClasses: PropTypes.string,
  /** Additional classes for the toggle icon. */
  iconAdditionalClasses: PropTypes.string,
  /** Additional classes for the content. */
  contentAdditionalClasses: PropTypes.string,
  /**
   * A string that is used to set the `id` on the content
   * and the `aria-controls` for the toggle trigger button.
   */
  contentId: PropTypes.string,
  /** The event that will fire when the toggle trigger is clicked. */
  onClick: PropTypes.func,
};

export default SprkToggle;
