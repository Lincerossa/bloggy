import React from 'react'
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import PropTypes from 'prop-types'
import { Button, Badge } from 'antd'

const RelationshipsPopover = ({ title, position, trigger, data, type }) => (
  <OverlayTrigger
    trigger={trigger}
    placement={position}
    overlay={(
      <Popover id="popover-basic">
        {type === 'exception' ? (
          <ul>
            {data.map((exception) => (
              <li>
                {' '}
                {exception.code}
                {' '}
              </li>
            ))}
          </ul>
        ) : null}
        {type === 'attribute' ? (
          <ul>
            {data.map((attribute) => (
              <li>
                {' '}
                {attribute.attributeId}
                {' '}
              </li>
            ))}
          </ul>
        ) : null}
        {type === 'dynamicUsage' ? (
          <ul>
            {data.map((dynamicUsage) => (
              <li>
                {`Flow: ${dynamicUsage.flow.name} ver: ${dynamicUsage.flow.version}.
                            Process: ${dynamicUsage.processTitle}, step: ${dynamicUsage.stepTitle}`}
              </li>
            ))}
          </ul>
        ) : null}
        {type === 'staticUsage' ? (
          <ul>
            {data.map((staticUsage) => (
              <li>
                {' '}
                {staticUsage.location}
                {' '}
              </li>
            ))}
          </ul>
        ) : null}
      </Popover>
    )}
  >
    <Button type="link">
      {`${title}  `}
      <Badge
        style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }}
        count={data.length}
      />
    </Button>
  </OverlayTrigger>
)

export default RelationshipsPopover

RelationshipsPopover.defaultProps = {
  position: 'center',
  trigger: 'click',
}

RelationshipsPopover.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.any.isRequired,
  type: PropTypes.string.isRequired,
  position: PropTypes.string,
  trigger: PropTypes.string,
}
