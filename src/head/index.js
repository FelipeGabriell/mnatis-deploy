/*
 * metas tags
 */
const title = 'MemeNatis';
const fullURL = 'http://memenatis.xyz';

const desc_search = 'MemeNatis: Unveiling the Crypto-Meme Mysteries';
const desc_social = 'MemeNatis: Unveiling the Crypto-Meme Mysteries';
const social_image = 'static/images/social/memenatis.png';

export default {
  title: {
    inner: '',
    separator: ' ',
    complement: title,
  },
  meta: [
    // prevent phone number auto-detection (Safari iOS & Blackberry)
    { name: 'format-detection', content: 'telephone=no' },
    { 'http-equiv': 'x-rim-auto-match', content: 'none' },

    // where it is hosted
    { name: 'whereami', content: 'netlify' },

    // search engines
    { name: 'description', content: desc_search },

    // twitter cards
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@MemeNatisFTM' },
    { name: 'twitter:creator', content: '@MemeNatisFTM' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: desc_social },
    { name: 'twitter:image', content: fullURL + '/' + social_image },

    // Open Graph
    { property: 'og:title', content: title },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: fullURL },
    { property: 'og:image', content: fullURL + '/' + social_image },
    { property: 'og:description', content: desc_social },
    { property: 'og:site_name', content: title },
  ],
};
