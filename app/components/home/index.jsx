import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Jumbotron, ButtonToolbar, Button, FormControl } from 'react-bootstrap';
import reporterActions from 'actions/reporter';
import styles from './styles';
import cn from 'classnames';
import JSONTree from 'react-json-tree';
import tests from 'helpers/tests';
import examples from 'helpers/examples';

class Home extends React.Component {
  state = {
    code: {
      singleton: examples.singleton,
      prototype: examples.prototype,
      proxy: examples.proxy,
      decorator: examples.decorator,
      observer: examples.observer
    },
    type: 'singleton'
  };

  handleChange = event => {
    this.setState({
      code: {
        ...this.state.code,
        [this.state.type]: event.target.value
      }
    });
  };

  submitCode = () => {
    this.props.sendCode(this.state.code[this.state.type], this.state.type);
  };

  changeType = type => {
    this.setState({ type });
  };

  render() {
    return (
      <Grid>
        <Jumbotron>
          <Grid>
            <ButtonToolbar className={ styles.buttons }>
              <Button
                className={ cn({ active: this.state.type === 'singleton' }) }
                onClick={ () => this.changeType('singleton') }
              >
                Singleton
              </Button>
              <Button
                className={ cn({ active: this.state.type === 'observer' }) }
                onClick={ () => this.changeType('observer') }
              >
                Observer
              </Button>
              <Button
                className={ cn({ active: this.state.type === 'prototype' }) }
                onClick={ () => this.changeType('prototype') }
              >
                Prototype
              </Button>
              <Button
                className={ cn({ active: this.state.type === 'decorator' }) }
                onClick={ () => this.changeType('decorator') }
              >
                Decorator
              </Button>
              <Button className={ cn({ active: this.state.type === 'proxy' }) } onClick={ () => this.changeType('proxy') }>
                Proxy
              </Button>
            </ButtonToolbar>
          </Grid>
          <Grid xs={ 6 }>
            <Row>
              <Col xs={ 6 }>
                <FormControl
                  componentClass="textarea"
                  onChange={ this.handleChange }
                  value={ this.state.code[this.state.type] }
                  className={ styles.textarea }
                  id="emmet"
                />
              </Col>
              <Col xs={ 6 }>
                <pre className={ styles.pre }>{tests[this.state.type]}</pre>
              </Col>
            </Row>
          </Grid>
          <Grid><Button onClick={ this.submitCode }>Submit</Button></Grid>
          <Grid>
            {!this.props.reporter.success &&
              this.props.reporter.isRequested &&
              <JSONTree data={ this.props.reporter.result } shouldExpandNode={ () => true } />}
            {this.props.reporter.success && <p className={ styles.success }>Success</p>}
          </Grid>
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
