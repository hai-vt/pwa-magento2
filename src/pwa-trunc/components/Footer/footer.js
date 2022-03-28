import React, { Fragment } from 'react';
import { Facebook, Instagram } from 'react-feather';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { shape, string } from 'prop-types';
import { useFooter } from '@magento/peregrine/lib/talons/Footer/useFooter';

import Newsletter from '../Newsletter';
import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from './footer.scss';
import { DEFAULT_LINKS } from './sampleData';
import CmsBlockGroup from "@magento/venia-ui/lib/components/CmsBlock";

const Footer = props => {
    const { links } = props;
    const classes = useStyle(defaultClasses, props.classes);
    const talonProps = useFooter();

    const { copyrightText } = talonProps;

    const linkGroups = Array.from(links, ([groupKey, linkProps]) => {
        const linkElements = Array.from(linkProps, ([text, pathInfo]) => {
            let path = pathInfo;
            let Component = Fragment;
            if (pathInfo && typeof pathInfo === 'object') {
                path = pathInfo.path;
                Component = pathInfo.Component;
            }

            const itemKey = `text: ${text} path:${path}`;
            const child = path ? (
                <Link className={classes.link} to={path} data-cy="Footer-link">
                    <FormattedMessage id={text} defaultMessage={text} />
                </Link>
            ) : (
                <span className={classes.label}>
                    <FormattedMessage id={text} defaultMessage={text} />
                </span>
            );

            return (
                <Component key={itemKey}>
                    <li className={classes.linkItem}>{child}</li>
                </Component>
            );
        });

        return (
            <ul key={groupKey} className={classes.linkGroup}>
                {linkElements}
            </ul>
        );
    });

    return (
        <footer className={classes.root} data-cy="Footer-root">
            <div className={classes.container}>
                <div className={classes.links}>
                    <CmsBlockGroup identifiers={['footer_contact', 'footer_account_links', 'footer_navigation_links']} />
                    <Newsletter />
                </div>
                <div className={classes.branding}>
                    <div className={classes.colleft}>
                        <CmsBlockGroup identifiers={'footer_bottom_links'} />
                        <div className={classes.copyright}>{copyrightText || null}</div>
                    </div>
                    <CmsBlockGroup identifiers={'footer_logo_payment'} />
                </div>
            </div>
        </footer>
    );
};

export default Footer;

Footer.defaultProps = {
    links: DEFAULT_LINKS
};

Footer.propTypes = {
    classes: shape({
        root: string
    })
};
