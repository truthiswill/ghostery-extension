/**
 * Point of entry index.js file for Forgot Password View
 *
 * Ghostery Browser Extension
 * https://www.ghostery.com/
 *
 * Copyright 2019 Ghostery, Inc. All rights reserved.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0
 */

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ForgotPasswordViewContainer from './ForgotPasswordViewContainer';
import AccountReducer from '../../../Account/AccountReducer';
import { setToast } from '../AppView/AppViewActions';
import { resetPassword } from '../../../Account/AccountActions';

/**
 * Map redux store state properties to the component's own properties.
 * @param  {Object} state    entire Redux store's state
 * @return {function}        this function returns a plain object, which will be merged into the component's props
 * @memberof HubContainers
 */
const mapStateToProps = state => Object.assign({}, state.account);

/**
 * Bind the component's action creators using Redux's bindActionCreators.
 * @param  {function} dispatch redux store method which dispatches actions
 * @return {function}          to be used as an argument in redux connect call
 * @memberof SetupContainers
 */

// const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(Object.assign(actions, { resetPassword }), dispatch) });
const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(Object.assign({}, {
		setToast,
		resetPassword,
	}), dispatch),
});

export const reducer = AccountReducer;

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordViewContainer);