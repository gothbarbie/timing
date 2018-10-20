import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faArrowCircleLeft,
  faArrowCircleRight,
  faCog,
  faEllipsisH,
  faTimesCircle,
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons'

import IconButton from './IconButton'

library.add(
  faArrowCircleLeft,
  faArrowCircleRight,
  faCog,
  faEllipsisH,
  faPlusCircle,
  faTimesCircle
)

storiesOf('IconButton', module)
  .add('default', () => <IconButton icon={['fas', 'cog']} />)
  .add('clickable', () => (
    <IconButton icon={['fas', 'cog']} onClick={action('clicked')} />
  ))
