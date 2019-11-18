import React from 'react';
import { string, oneOfType, node, oneOf, arrayOf, func } from 'prop-types';
import cn from 'classnames';
import axios from 'axios';

import Link from '../Link';
import Button from '../Button';
import Input from '../Input';
import FormResponse from './FormResponse';

import { ReactComponent as TickImage } from '../../assets/svg/tick-box.svg';
import { ReactComponent as UpcomingImage } from '../../assets/svg/clock-box.svg';

import { ReactComponent as EnvelopeIcon } from '../../assets/svg/envelop.svg';
import { ReactComponent as BookIcon } from '../../assets/svg/book.svg';

import './style.scss';

const propTypes = {
  className: string,
  type: oneOf(['active', 'upcoming']),
  image: oneOfType([node, func]).isRequired,
  title: string.isRequired,
  overview: oneOfType([string, node]).isRequired,
  responsibilites: arrayOf(oneOfType([string, node])).isRequired,
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

  renderButtons = () => {
    const { tutorialLink, questionLink } = this.props;
    return (
      <div className="RoleOverview__buttons">
        <Button className="RoleOverview__button" href={tutorialLink}>
          See a tutorial
        </Button>
        <Button className="RoleOverview__button" href={questionLink} reversed>
          Ask a question
        </Button>
      </div>
    );
  };

  renderFormResponse = () => {
    const { formError } = this.state;

    return <FormResponse error={formError} onClose={this.hideForm} />;
  };

  renderFormTitle = () => {
    const { type } = this.props;

    if (type === 'active') {
      return (
        <>
          <BookIcon className="RoleOverview__form-icon" />
          Join the Council Member role now!
        </>
      );
    }

    return (
      <>
        <EnvelopeIcon className="RoleOverview__form-icon" />
        Alert me when the role will be active
      </>
    );
  };

  showFormContent = () => {
    this.setState({
      formContentVisibility: true,
    });
  };

  renderForm = () => {
    const { formContentVisibility, inputValue, checkboxValue, loading } = this.state;
    const { type } = this.props;

    const btnType = type === 'active' ? 'Join' : 'Subscribe';
    const btnLabel = loading ? 'Please wait...' : btnType;

    return (
      <>
        <form
          onChange={e => this.setState({ isButtonDisabled: !this.form.checkValidity() })}
          onSubmit={this.handleSubmit}
          method="post"
          ref={ref => (this.form = ref)}
        >
          <p className="RoleOverview__form-title">{this.renderFormTitle()}</p>
          <Input
            placeholder="Your email address"
            type="email"
            className="RoleOverview__form-input"
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
                <p className="RoleOverview__form-label">I want to receive emails about this role.</p>
                <p className="RoleOverview__form-label RoleOverview__form-label--small">
                  I acknowledge that my information will be transferred to Mailchimp, which has{' '}
                  <Link href="https://mailchimp.com/legal/">these</Link> privacy practices.
                </p>
              </label>
            </div>
            <Button type="submit" disabled={this.state.isButtonDisabled}>
              {btnLabel}
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
      responsibilites,
      requirements,
      className,
      tutorialLink,
      questionLink,
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
            <p className="RoleOverview__heading">Overview</p>
            <div className="RoleOverview__details">{overview}</div>
          </div>
          <div className="RoleOverview__lists">
            <div className="RoleOverview__list RoleOverview__resposibilities">
              <p className="RoleOverview__heading--small">Responsibilities</p>
              <ul className="RoleOverview__details">
                {responsibilites.map((responsibility, i) => (
                  <li key={i}>{responsibility} </li>
                ))}
              </ul>
            </div>
            <div className="RoleOverview__list RoleOverview__requirements">
              <p className="RoleOverview__heading--small">Requirements</p>
              <ul className="RoleOverview__details">
                {requirements.map((requirement, j) => (
                  <li key={j}>{requirement} </li>
                ))}
              </ul>
            </div>
          </div>

          {type === 'active' && this.renderButtons()}
          {formVisiblity && this.renderForm()}
          {formResponseVisiblity && this.renderFormResponse()}
        </div>
      </section>
    );
  }
}

RoleOverview.propTypes = propTypes;
RoleOverview.defaultProps = defaultProps;

export default RoleOverview;
