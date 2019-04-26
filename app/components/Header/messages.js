/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  home: {
    id: `${scope}.rom`,
    defaultMessage: 'Rom',
  },
  features: {
    id: `${scope}.zypher`,
    defaultMessage: 'Zypher',
  },
});
