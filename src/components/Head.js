import React, {Component, PropTypes} from 'react';
import Helmet from 'react-helmet';

export default class Head extends Component {
    render() {
        return (
            <Helmet
                title="NEW STRV M6"
                htmlAttributes={{"lang": "en"}}
                link={[
                    {
                        "rel": "apple-touch-icon",
                        "sizes": "57x57",
                        "href": "assets/favicon/apple-icon-57x57.png",
                    },
                    {
                        "rel": "apple-touch-icon",
                        "sizes": "60x60",
                        "href": "assets/favicon/apple-icon-60x60.png",
                    },
                    {
                        "rel": "apple-touch-icon",
                        "sizes": "72x72",
                        "href": "assets/favicon/apple-icon-72x72.png",
                    },
                    {
                        "rel": "apple-touch-icon",
                        "sizes": "76x76",
                        "href": "assets/favicon/apple-icon-76x76.png",
                    },
                    {
                        "rel": "apple-touch-icon",
                        "sizes": "114x114",
                        "href": "assets/favicon/apple-icon-114x114.png",
                    },
                    {
                        "rel": "apple-touch-icon",
                        "sizes": "120x120",
                        "href": "assets/favicon/apple-icon-120x120.png",
                    },
                    {
                        "rel": "apple-touch-icon",
                        "sizes": "144x144",
                        "href": "assets/favicon/apple-icon-144x144.png",
                    },
                    {
                        "rel": "apple-touch-icon",
                        "sizes": "152x152",
                        "href": "assets/favicon/apple-icon-152x152.png",
                    },
                    {
                        "rel": "apple-touch-icon",
                        "sizes": "180x180",
                        "href": "assets/favicon/apple-icon-180x180.png",
                    },
                    {
                        "rel": "icon",
                        "type": "image/png",
                        "sizes": "16x16",
                        "href": "assets/favicon/favicon-120x120.png",
                    },
                    {
                        "rel": "icon",
                        "type": "image/png",
                        "sizes": "32x32",
                        "href": "assets/favicon/favicon-32x32.png",
                    },
                    {
                        "rel": "icon",
                        "type": "image/png",
                        "sizes": "96x96",
                        "href": "assets/favicon/favicon-96x96.png",
                    },
                    {
                        "rel": "manifest",
                        "href": "assets/favicon/manifest.json",
                    }
                ]}
                meta={[
                    {"name": "description", "content": "STRV Test Project developed by José Fonte"},
                    {"name": "msapplication-TileColor", "content": "#ffffff"},
                    {"name": "msapplication-TileImage", "content": "assets/ms-icon-144x144.png"},
                    {"name": "theme-color", "content": "#ffffff"},
                    {"property": "og:title", "content": "strv.pt"},
                    {"property": "og:site_name", "content": "NEW STRV M6"},
                    {"property": "og:url", "content": "http://strv.pt"},
                    {"property": "og:description", "content": "STRV Test Project developed by José Fonte"},
                    {"property": "og:type", "content": "website"},
                    {"property": "og:image", "content": "assets/share/image.png"},
                    {"property": "twitter:card", "content": "summary"},
                    {"property": "twitter:site", "content": "jcunhafonte"},
                    {"property": "twitter:title", "content": "NEW STRV M6"},
                    {"property": "twitter:description", "content": "STRV Test Project developed by José Fonte"},
                    {"property": "twitter:image", "content": "assets/share/image.png"}
                ]}
            />
        );
    }
}