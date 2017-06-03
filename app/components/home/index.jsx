import React from 'react';
import { connect } from 'react-redux';
import { Grid, Jumbotron, ButtonToolbar, Button, FormControl } from 'react-bootstrap';
import reporterActions from 'actions/reporter';
import styles from './styles';
import cn from 'classnames';
import JSONTree from 'react-json-tree';
import tests from 'helpers/tests';

class Home extends React.Component {
  state = {
    code: '',
    type: 'singleton'
  };

  handleChange = event => {
    this.setState({ code: event.target.value });
  };

  submitCode = () => {
    this.props.sendCode(this.state.code, this.state.type);
  };

  changeType = type => {
    this.setState({ type });
  };

  render() {
    return (
      <Grid>
        <Jumbotron>
          <ButtonToolbar className={ styles.buttons }>
            <Button
              className={ cn({ active: this.state.type === 'singleton' }) }
              onClick={ () => this.changeType('singleton') }
            >
              Singleton
            </Button>
            <Button
              className={ cn({ active: this.state.type === 'prototype' }) }
              onClick={ () => this.changeType('prototype') }
            >
              Prototype
            </Button>
            <Button className={ cn({ active: this.state.type === 'proxy' }) } onClick={ () => this.changeType('proxy') }>
              Proxy
            </Button>
            <Button
              className={ cn({ active: this.state.type === 'decorator' }) }
              onClick={ () => this.changeType('decorator') }
            >
              Decorator
            </Button>
            <Button
              className={ cn({ active: this.state.type === 'observer' }) }
              onClick={ () => this.changeType('observer') }
            >
              Observer
            </Button>
          </ButtonToolbar>
          <pre>{tests[this.state.type]}</pre>
          <FormControl
            componentClass="textarea"
            onChange={ this.handleChange }
            value={ this.state.code }
            className={ styles.textarea }
            id="emmet"
          />
          <Button onClick={ this.submitCode }>Submit</Button>
          {!this.props.reporter.success &&
            this.props.reporter.isRequested &&
            <JSONTree data={ this.props.reporter.result } shouldExpandNode={ () => true } />}
          {this.props.reporter.success && <p className={ styles.success }>Success</p>}
        </Jumbotron>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  reporter: state.reporter
});
const mapDispatchToProps = dispatch => ({
  sendCode: (code, type) => dispatch(reporterActions.sendCode(code, type))
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
