import classNames from 'classnames'
import React from 'react'

import { Label } from '@koendirkvanesterik/label'

export const Copyright: React.FunctionComponent = () => (
  <div className={classNames(['mt-20'])}>
    <span className={classNames(['text-emerald-600', 'text-sm'])}>
      <Label
        id="footer.copyright"
        replacements={{ year: new Date().getFullYear() }}
      />
    </span>
  </div>
)
