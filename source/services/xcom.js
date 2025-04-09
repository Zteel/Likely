export default {
    popupUrl: 'https://x.com/intent/tweet?url={url}&text={title}',
    popupWidth: 600,
    popupHeight: 450,
    urlCallback() {
        if (!/[.?:\-–—]\s*$/.test(this.options.title)) {
            this.options.title += ':';
        }
    },
    knownParams: ['url', 'title', 'via', 'hashtags'],
    svgIconPath: '11.813.721h2.3l-5.025 5.744L15 14.279h-4.629l-3.625-4.74-4.149 4.74H.296l5.375-6.144L0 .721h4.746l3.277 4.333ZM11.006 12.903h1.274L4.054 2.025H2.686',
};
