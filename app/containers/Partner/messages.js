/*
 * Partner Messages
 *
 * This contains all the text for the Partner container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Partner';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Partner container!',
  },

  startProjectHeader: {
    id: `${scope}.start_project.header`,
    defaultMessage: 'Start your next react project in seconds',
  },
  startProjectMessage: {
    id: `${scope}.start_project.message`,
    defaultMessage:
      'A highly scalable, offline-first foundation with the best DX and a focus on performance and best practices',
  },
});
