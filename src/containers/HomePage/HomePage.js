import React from 'react';
import Greeting from '../../components/Greeting/Greeting';
import { connect } from 'react-redux';
import { renderInputs } from '../../actions/greeting';

// Fonctionnal Component
const HomePage = ({message, inputLibrary, renderView}) => (<Greeting message={message} renderView={renderView} inputLibrary={inputLibrary} />);

const mapStateToProps = (state) => ({
  "message": state.greetingReducer.message,
  "inputLibrary": state.greetingReducer.inputLibrary
})

const mapDispatchToProps = {
  "renderView": renderInputs
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
