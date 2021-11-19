import React from 'react';
import { string, oneOfType, node, oneOf, arrayOf, func } from 'prop-types';
import cn from 'classnames';
import axios from 'axios';
import { Trans } from 'gatsby-plugin-react-i18next';

import Link from '../Link';
import Button from '../Button';
import Input from '../Input';
import FormResponse from './FormResponse';

import { ReactComponent as TickImage } from '../../assets/svg/tick-box.svg';
import { ReactComponent as UpcomingImage } from '../../assets/svg/clock-box.svg';

import { ReactComponent as EnvelopeIcon } from '../../assets/svg/envelop.svg';
import { ReactComponent as BookIcon } from '../../assets/svg/book.svg';

import './style.scss';
import convertToCamelCase from '../../utils/convertToCamelCase';

const propTypes = {
  className: string,
  type: oneOf(['active', 'upcoming']),
  image: oneOfType([node, func]).isRequired,
  title: string.isRequired,
  overview: oneOfType([string, node]).isRequired,
  responsibilities: arrayOf(oneOfType([string, node])).isRequired,
  requirements: arrayOf(oneOfType([string, node])).isRequired,
  tutorialLink: (props, propName, componentName) => {
    if (props.type === 'active' && !props[propName]) {
      return new Error(`${propName} is required if type is equal 'active' in '${componentName}'.`);
    }
  },
  questionLink: (props, propName, componentName) => {
    if (props.type === 'active' && !props[propName]) {
      return new Error(`${propName} is required if type is equal 'active' in '${componentName}'.`);
    }
  },
  formAction: string.isRequired,
};

const defaultProps = {
  className: '',
  type: 'upcoming',
};

class RoleOverview extends React.Component {
  state = {
    isButtonDisabled: true,
    inputValue: '',
    checkboxValue: false,
    loading: false,
    formVisiblity: true,
    formContentVisibility: false,
    formResponseVisiblity: false,
    formError: null,
  };

  handleSubmit = async e => {
    const { formAction } = this.props;

    this.setState({
      loading: true,
    });

    e.preventDefault();
    try {
      let response = await axios.get(formAction, {
        params: {
          EMAIL: this.state.inputValue,
        },
      });

      if (response.data) {
        response = response.data;
      }

      if (response.result === 'error') {
        this.setState({ formError: true });
      } else {
        this.setState({
          formError: false,
          formVisiblity: false,
        });
      }
    } catch (e) {
      console.error(e);
      this.setState({ formError: true });
    } finally {
      this.setState({
        formResponseVisiblity: true,
        loading: false,
      });
    }
  };

  inputChange = e => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  checkboxChange = () => {
    this.setState(prevState => ({
      checkboxValue: !prevState.checkboxValue,
    }));
  };

  hideForm = () => {
    this.setState({
      formResponseVisiblity: false,
    });
  };

  renderButtons = t => {
    const { tutorialLink, questionLink } = this.props;
    return (
      <div className="RoleOverview__buttons">
        <Button className="RoleOverview__button" href={tutorialLink}>
          {t('roles.general.seeATutorial')}
        </Button>
        <Button className="RoleOverview__button" href={questionLink} reversed>
          {t('roles.general.askAQuestion')}
        </Button>
      </div>
    );
  };

  renderFormResponse = () => {
    const { formError } = this.state;

    return <FormResponse error={formError} onClose={this.hideForm} />;
  };

  renderFormTitle = (title, t) => {
    const { type } = this.props;

    if (type === 'active') {
      return (
        <>
          <BookIcon className="RoleOverview__form-icon" />
          {t('roles.general.regularUpdates')} {title}
        </>
      );
    }

    return (
      <>
        <EnvelopeIcon className="RoleOverview__form-icon" />
        {t('roles.general.alertWhenActive')}
      </>
    );
  };

  showFormContent = () => {
    this.setState({
      formContentVisibility: true,
    });
  };

  renderForm = (title, formAction, t) => {
    const { formContentVisibility, inputValue, checkboxValue, loading } = this.state;
    const { type } = this.props;

    const btnType = type === 'active' ? 'Join' : 'Subscribe';
    const btnLabel = loading ? 'Please wait' : btnType;

    return (
      <>
        <form
          onChange={e => this.setState({ isButtonDisabled: !this.form.checkValidity() })}
          method="post"
          ref={ref => (this.form = ref)}
          action={formAction}
          name="mc-embedded-subscribe-form"
          target="_blank"
          noValidate
        >
          <p className="RoleOverview__form-title">{this.renderFormTitle(title, t)}</p>
          <Input
            placeholder={t('roles.general.emailAddressPlaceholder')}
            type="email"
            className="RoleOverview__form-input"
            name="EMAIL"
            required
            onFocus={this.showFormContent}
            onChange={this.inputChange}
            value={inputValue}
          />

          <div
            className={cn('RoleOverview__form-content', {
              'RoleOverview__form-content--visible': formContentVisibility,
            })}
          >
            <div className="RoleOverview__form-accept">
              <input
                type="checkbox"
                name="accept"
                id="accept"
                checked={checkboxValue}
                required
                onChange={this.checkboxChange}
                className="RoleOverview__checkbox"
              />
              <label htmlFor="accept" className="RoleOverview__label">
                <p className="RoleOverview__form-label">{t('roles.general.receiveEmailsAboutRole')}</p>
                <p className="RoleOverview__form-label RoleOverview__form-label--small">
                  <Trans
                    i18nKey="roles.general.informationTransferred"
                    components={[<Link href="https://mailchimp.com/legal/">these</Link>]}
                  />
                </p>
              </label>
            </div>
            <Button type="submit" name="subscribe" disabled={this.state.isButtonDisabled}>
              {t(`roles.general.${convertToCamelCase(btnLabel)}`)}
            </Button>
          </div>
        </form>
      </>
    );
  };

  render() {
    const {
      image: Image,
      type,
      title,
      overview,
      responsibilities,
      requirements,
      className,
      tutorialLink,
      questionLink,
      formAction,
      t,
      ...props
    } = this.props;
    const { formVisiblity, formResponseVisiblity } = this.state;

    const classes = cn('RoleOverview', className);

    const RoleIcon = type === 'active' ? TickImage : UpcomingImage;

    return (
      <section className={classes} {...props}>
        <div className="RoleOverview__header">
          <div className="RoleOverview__header-container">
            <RoleIcon className="RoleOverview__icon" />
            <h2 className="RoleOverview__title">{title}</h2>
          </div>
          <div className="RoleOverview__image-container">
            <Image className="RoleOverview__image" />
          </div>
        </div>

        <div className="RoleOverview__content">
          <div className="RoleOverview__overview">
            <p className="RoleOverview__heading">{t('roles.general.overview')}</p>
            <div className="RoleOverview__details">{overview}</div>
          </div>
          <div className="RoleOverview__lists">
            <div className="RoleOverview__list RoleOverview__resposibilities">
              <p className="RoleOverview__heading--small">{t('roles.general.responsibilities')}</p>
              <ul className="RoleOverview__details">
                {responsibilities.map((responsibility, i) => (
                  <li key={i}>{responsibility} </li>
                ))}
              </ul>
            </div>
            <div className="RoleOverview__list RoleOverview__requirements">
              <p className="RoleOverview__heading--small">{t('roles.general.requirements')}</p>
              <ul className="RoleOverview__details">
                {requirements.map((requirement, j) => (
                  <li key={j}>{requirement} </li>
                ))}
              </ul>
            </div>
          </div>

          {type === 'active' && this.renderButtons(t)}
          {formVisiblity && this.renderForm(title, formAction, t)}
          {formResponseVisiblity && this.renderFormResponse()}
        </div>
      </section>
    );
  }
}

RoleOverview.propTypes = propTypes;
RoleOverview.defaultProps = defaultProps;

export default RoleOverview;
