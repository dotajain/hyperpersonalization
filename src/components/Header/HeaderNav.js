import React from 'react';
// import PropTypes from 'prop-types';
// import bowSprite from '../../assets/images/bow.bow-sprite.svg';

const HeaderNav = () => (
  <header id="main-header" className="c-site-header c-site-header@small c-site-header@medium js-site-header">
    <div className="c-site-header__inner">
      <div className="c-site-header__logo">
        <div className="c-site-title c-site-title@small c-site-title@medium c-site-title@large">
          <h1 className="c-site-title__logo">
            <a href="#" className="c-site-title__link" name="Accounts">Accounts</a>
          </h1>
          <p className="c-site-title__subtitle">
            <span>Powered by Clydesdale </span>
            <br className="u-hidden@xsmall u-hidden@small" />
            <span>Bank &amp; Yorkshire Bank</span>
          </p>
        </div>
      </div>
      <nav id="site-nav" className="c-site-header__nav">
        <ul className="c-site-nav c-site-nav@small c-site-nav@medium">
          <li className="c-site-nav__item c-site-nav__item--is-current">
            <div className="c-site-nav__link">
              <svg role="img" aria-hidden="true" className="c-site-nav__svg" viewBox="0 0 32 32" width="24px" height="24px" data-reactid=".0.0.1.0.1.2.1.0:0.0.0">
                <g id="icon-nav-accounts" transform="translate(0.000000, 4.000000)">
                  <path d="M22.3,15.2 L3.4,15.2 C2.9,15.2 2.5,14.8 2.5,14.3 L2.5,3.3 C2.5,2.8 2.9,2.4 3.4,2.4 L22.3,2.4 C22.8,2.4 23.2,2.8 23.2,3.3 L23.2,14.3 C23.2,14.8 22.8,15.2 22.3,15.2 L22.3,15.2 Z M25.6,2 C25.6,0.9 24.7,0 23.6,0 L2,0 C0.9,0 0,0.9 0,2 L0,15.7 C0,16.8 0.9,17.7 2,17.7 L23.7,17.7 C24.8,17.7 25.7,16.8 25.7,15.7 L25.7,2 L25.6,2 Z M12.8,12 C11,12 9.6,10.6 9.6,8.8 C9.6,7 11,5.6 12.8,5.6 C14.6,5.6 16,7 16,8.8 C16,10.6 14.6,12 12.8,12 L12.8,12 Z M12.8,4 C10.1,4 8,6.1 8,8.8 C8,11.4 10.1,13.6 12.8,13.6 C15.5,13.6 17.6,11.4 17.6,8.8 C17.6,6.1 15.5,4 12.8,4 L12.8,4 Z" id="icon-payments1"></path>
                  <path d="M27.2,6.4 L30,6.4 C31.1,6.4 32,7.3 32,8.4 L32,22 C32,23.1 31.1,24 30,24 L8.3,24 C7.2,24 6.3,23.1 6.3,22 L6.3,19.2 L8.7,19.2 L8.7,20.7 C8.7,21.2 9.1,21.6 9.6,21.6 L28.5,21.6 C29,21.6 29.4,21.2 29.4,20.7 L29.4,9.7 C29.4,9.2 29,8.8 28.5,8.8 L27,8.8 L27,6.4 L27.2,6.4 Z" id="icon-payments2"></path>
                </g>
              </svg>
              <span className="c-site-nav__title">Customers</span>
            </div>
          </li>
          <li className="c-site-nav__item">
            <div className="c-site-nav__link">
              <svg role="img" aria-hidden="true" className="c-site-nav__svg" viewBox="0 0 32 32" width="24px" height="24px" data-reactid=".0.0.1.0.1.2.1.0:0.0.0">
              <g id="icon-nav-help">
                <path d="M16,0 C24.8360135,0 32,7.16398645 32,16 C32,24.8353473 24.8347287,32 16,32 C7.16398645,32 0,24.8360135 0,16 C0,7.16398645 7.16398645,0 16,0 Z M16,2.7317073 C13.1432365,2.7317073 10.4233863,3.6462673 8.15994135,5.30945885 L11.4811623,9.18704365 C12.8223592,8.29235335 14.3747952,7.80487805 16,7.80487805 C17.6255972,7.80487805 19.1796566,8.2926466 20.5188204,9.18678945 L23.8365299,5.3093436 C21.5770693,3.64657895 18.857216,2.7317073 16,2.7317073 Z M21.4634146,16 C21.4634146,12.9830489 19.0163878,10.5365853 16,10.5365853 C12.982355,10.5365853 10.5365853,12.982355 10.5365853,16 C10.5365853,19.0163878 12.9830489,21.4634146 16,21.4634146 C19.0156937,21.4634146 21.4634146,19.0156937 21.4634146,16 Z M2.7317073,16 C2.7317073,19.5725948 4.158608,22.9133001 6.6442432,25.3866729 L9.9500507,21.5265069 C8.5818487,20.0310155 7.80487805,18.0760881 7.80487805,16 C7.80487805,14.2051544 8.40664375,12.5017222 9.49252685,11.0770279 L6.128838,7.15017215 C3.95745585,9.5669244 2.7317073,12.6859243 2.7317073,16 Z M16,29.2682927 C18.6009565,29.2682927 21.0883415,28.5128514 23.2277369,27.1192573 L19.8678167,23.1928291 C18.667582,23.8448287 17.3555487,24.1951219 16,24.1951219 C14.6440219,24.1951219 13.3335173,23.844668 12.1319893,23.1909806 L8.77024395,27.1175537 C10.9087491,28.5121533 13.3978533,29.2682927 16,29.2682927 Z M29.2682927,16 C29.2682927,12.684257 28.0431023,9.56546425 25.8712753,7.1500399 L22.5074809,11.0770188 C23.5937802,12.5020587 24.1951219,14.2039276 24.1951219,16 C24.1951219,18.0765752 23.4191248,20.0300973 22.0515538,21.5281906 L25.3559227,25.3886564 C27.8416709,22.916667 29.2682927,19.574525 29.2682927,16 Z" id="Shape"></path>
              </g>
              </svg>
              <span className="c-site-nav__title">Offers</span>
            </div>
          </li>
          <li className="c-site-nav__item">
            &nbsp;
          </li>
          <li className="c-site-nav__item">
            <a className="c-site-nav__link" href="#" name="Log out"><span className="c-site-nav__title">Log out</span></a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

// HeaderNav.propTypes = {
//   title: PropTypes.string,
// };

export default HeaderNav;
