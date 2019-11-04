import React from 'react'
import PropTypes from 'prop-types'
import RelationshipsPopover from './RelationshipsPopover'

const SuggestionsRelationships = ({ relationships }) => {
  const { exceptions, attributes, dynamicUsages, staticUsages } = relationships
  return (
    <div>
      {exceptions && exceptions.length > 0 && (
        <RelationshipsPopover title="Exceptions:" data={exceptions} type="exception" position="right" />
      )}
      {attributes && attributes.length > 0 && (
        <RelationshipsPopover title="Attributes:" data={attributes} type="attribute" position="right" />
      )}
      {dynamicUsages && dynamicUsages.length > 0 && (
        <RelationshipsPopover title="DynamicUsages:" data={dynamicUsages} type="dynamicUsage" position="right" />
      )}
      {relationships.length > 0 && (
        <RelationshipsPopover title="StaticUsages:" data={staticUsages} type="staticUsage" position="right" />
      )}
    </div>
  )
}

export default SuggestionsRelationships

RelationshipsPopover.propTypes = {
  relationships: PropTypes.array.isRequired,
}
