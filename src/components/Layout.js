import React from 'react';
import {Helmet} from 'react-helmet';
import _ from 'lodash';

import {safePrefix} from '../utils';
import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';

export default class Body extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>{_.get(this.props, 'pageContext.frontmatter.title') && _.get(this.props, 'pageContext.frontmatter.title') + ' - '}{_.get(this.props, 'pageContext.site.siteMetadata.title')}</title>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initialScale=1, userScalable=no" />
                    <link rel="stylesheet" href={safePrefix('assets/css/main.css')} />
                    <link rel="stylesheet" href={safePrefix('assets/css/markdown-images.css')} />
                    <noscript>{`<link rel="stylesheet" href=${safePrefix('assets/css/noscript.css')} />`}</noscript>
                </Helmet>
                    <div id="wrapper">
                        <Header {...this.props} />
                        <div id="main">
                            <div className="inner">
                            <img class="avatars-img" src="https://lh3.googleusercontent.com/proxy/cpDy1PYZY_6U-PbvGfgrMTI4WtUBFssVkeZwF4amic2GuM58l3uCj7wWL4V1l6a0PKYDkaP5V6aUBk6pNuU6UTIlpwREaHPFTwns1_AzTqKN2sys4_jYe9L4JO5qZt820L7uVfeUSU7aF34T" alt=""/>
                                {this.props.children}
                            </div>
                        </div>
                        <Footer {...this.props} />
                    </div>
                    <Menu {...this.props} />
            </React.Fragment>
        );
    }
}
