import React from 'react';

import {ReactComponent as LogoSvg} from '../assets/img/logo.svg';

const Topbar = () => {
	return (
		<header className="topbar" data-testid="topbar">
			<div className="container">
				<a href="/" className="topbar__logo">
					<LogoSvg alt="Logo Contact" />
				</a>
			</div>
		</header>
	);
}

export default Topbar;
