import React, { useContext, createRef } from 'react';
import ReactDOM from 'react-dom';
import { string, node, func, oneOf, bool } from 'prop-types';
import cn from 'classnames';
import { SidebarContext } from '../../../components/BrandSidebar';
import ActionButton from '../../../components/ActionButton';
import { InView } from 'react-intersection-observer';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import './style.scss';

export const Section = React.memo(
  ({ className, children, title, ...props }) => {
    const { setCurrentElement } = useContext(SidebarContext);

    return (
      <InView
        as="div"
        threshold={0}
        rootMargin="0px 0px -80% 0px"
        onChange={(inView) => {
          if (inView) setCurrentElement(props.id);
        }}
      >
        <section className={cn('GuidesSection__section', className)} {...props}>
          {title && <h4 className="GuidesSection__section-title">{title}</h4>}
          {children}
        </section>
      </InView>
    );
  }
);

Section.propTypes = {
  title: string,
  onEnterViewport: func,
  id: string.isRequired,
  buttonToTop: bool,
};

export const SubSection = React.memo(
  ({ children, title, className, buttonToTop, t, ...props }) => {
    const { setCurrentSubElement } = useContext(SidebarContext);
    const buttonRef = createRef();

    return (
      <InView
        as="div"
        threshold={0}
        rootMargin="0px 0px -80% 0px"
        onChange={(inView) => {
          if (inView) setCurrentSubElement(props.id);
        }}
      >
        <div className={cn('GuidesSection__subsection', className)} {...props}>
          {title && (
            <h4 className="GuidesSection__subsection-title">{title}</h4>
          )}
          {children}
          <div className="GuidesSection__action-button" ref={buttonRef}>
            <ActionButton
              direction={buttonToTop ? 'up' : 'down'}
              onClick={() => {
                if (buttonToTop) {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                  const { offsetTop, offsetHeight } = ReactDOM.findDOMNode(
                    buttonRef.current
                  );
                  window.scrollTo({
                    top: offsetTop + offsetHeight + 120,
                    behavior: 'smooth',
                  });
                }
              }}
            >
              {buttonToTop
                ? t('brand.guides.general.back')
                : t('brand.guides.general.more')}
            </ActionButton>
          </div>
        </div>
      </InView>
    );
  }
);

SubSection.propTypes = {
  title: string,
};

export const SubTitle = ({ className, children, small, ...props }) => {
  return (
    <p
      className={cn('GuidesSection__sub-title', className, {
        'GuidesSection__sub-title--small': small,
      })}
      {...props}
    >
      {children}
    </p>
  );
};

SubTitle.propTypes = {
  bold: bool,
};

export const Text = ({ className, ...props }) => {
  return <p className={cn('GuidesSection__text', className)} {...props} />;
};

export const DetailText = ({ className, ...props }) => {
  return (
    <p className={cn('GuidesSection__detail-text', className)} {...props} />
  );
};

export const Heading = ({ className, bold, children, variant, ...props }) => {
  const Component = variant;
  return (
    <Component
      className={cn(
        'GuidesSection__heading',
        `GuidesSection__heading--${variant}`,
        {
          'GuidesSection__heading--bold': bold,
        }
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

Heading.propTypes = {
  variant: oneOf(['h1', 'h2', 'h3', 'h4']).isRequired,
};

export const BlueSection = ({ bottom, className, ...props }) => {
  return (
    <div
      className={cn('GuidesSection__blue', className, {
        'GuidesSection__blue--bottom': bottom,
      })}
      {...props}
    />
  );
};

export const Image = ({ className, description, ...props }) => {
  return (
    <>
      <img
        className={cn('GuidesSection__image', className)}
        alt=""
        {...props}
      />
      {description && (
        <p className="GuidesSection__image-description">{description}</p>
      )}
    </>
  );
};

Image.propTypes = {
  className: string,
  description: node,
};
