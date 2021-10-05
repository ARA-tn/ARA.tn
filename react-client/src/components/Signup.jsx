import React from 'react';

class Signup extends React.Component {
	constructor(props) {
		super(props);
	
	}
	render() {
		return (
			<div>
				<div className="login-wrap">
	<div className="login-html">
		<input id="tab-2" type="radio" name="tab" className="sign-up" defaultChecked/><label htmlFor="tab-2" className="tab">Sign Up</label>
		<div className="login-form">

			<div className="sign-up-htm">
				<div className="group">
					<label htmlFor="user" className="label">Username</label>
					<input id="user" type="text" className="input"/>
				</div>
				<div className="group">
					<label htmlFor="pass" className="label">Password</label>
					<input id="pass" type="password" className="input" data-type="password"/>
				</div>
				<div className="group">
					<label htmlFor="pass" className="label">Phone Number</label>
					<input id="phone" type="text" className="input"/>
				</div>
				<div className="group">
					<input type="submit" className="button" value="Sign Up"/>
				</div>
				<div className="hr"></div>
				<div className="foot-lnk">
					<label htmlFor="tab-1">Already Member?</label>
				</div>
			</div>
		</div>
	</div>
</div>
			</div>
		)
	}

}
export default Signup;