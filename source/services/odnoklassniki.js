import { renameKey } from '../utils';
/**
 * Odnoklassniki service provider
 * Docs: https://apiok.ru/en/ext/like
 * https://connect.ok.ru/connect.js
 */

export default {
    name: 'odnoklassniki',
    counterUrl: 'https://connect.ok.ru/dk?st.cmd=extLike&tp=json&ref={url}',
    convertNumber: (json) => JSON.parse(json).count,
    urlCallback() {
        // "this" here is an object of the LikelyButton class
        renameKey(this.sourceElement.dataset, 'imageurl', 'imageUrl');
    },
    popupWidth: 588,
    popupHeight: 296,
    popupUrl: 'https://connect.ok.ru/offer?url={url}&title={title}',
    knownParams: ['url', 'title', 'imageurl', 'counter'],
    svgIconPath: 'M 7.996094 7.925781 C 9.09375 7.925781 10.082031 7.476562 10.796875 6.765625 C 11.511719 6.050781 11.960938 5.058594 11.960938 3.964844 C 11.960938 2.867188 11.511719 1.875 10.796875 1.164062 C 10.085938 0.449219 9.09375 0 7.996094 0 C 6.898438 0 5.910156 0.449219 5.195312 1.164062 C 4.480469 1.875 4.03125 2.867188 4.03125 3.964844 C 4.03125 5.058594 4.480469 6.050781 5.195312 6.765625 C 5.910156 7.476562 6.914062 7.925781 7.996094 7.925781 Z M 6.726562 2.683594 C 7.058594 2.351562 7.507812 2.152344 7.996094 2.152344 C 8.5 2.152344 8.949219 2.351562 9.265625 2.683594 C 9.59375 3.011719 9.792969 3.460938 9.792969 3.949219 C 9.792969 4.453125 9.597656 4.902344 9.265625 5.21875 C 8.933594 5.550781 8.484375 5.746094 7.996094 5.746094 C 7.496094 5.746094 7.046875 5.550781 6.726562 5.21875 C 6.398438 4.886719 6.199219 4.4375 6.199219 3.949219 C 6.199219 3.460938 6.410156 3.011719 6.726562 2.683594 Z M 13.335938 9.527344 L 12.171875 7.941406 C 12.105469 7.847656 11.972656 7.835938 11.894531 7.914062 C 10.796875 8.851562 9.449219 9.460938 7.996094 9.460938 C 6.542969 9.460938 5.195312 8.851562 4.097656 7.914062 C 4.019531 7.847656 3.886719 7.863281 3.820312 7.941406 L 2.660156 9.527344 C 2.605469 9.605469 2.621094 9.710938 2.6875 9.777344 C 3.664062 10.570312 4.800781 11.113281 5.988281 11.390625 L 3.53125 15.722656 C 3.464844 15.839844 3.558594 16 3.6875 16 L 6.09375 16 C 6.171875 16 6.238281 15.960938 6.265625 15.882812 L 7.984375 12.050781 L 9.699219 15.882812 C 9.726562 15.949219 9.792969 16 9.871094 16 L 12.277344 16 C 12.421875 16 12.5 15.855469 12.433594 15.722656 L 9.976562 11.390625 C 11.167969 11.113281 12.304688 10.582031 13.28125 9.777344 C 13.386719 9.710938 13.398438 9.605469 13.335938 9.527344 Z',
};
