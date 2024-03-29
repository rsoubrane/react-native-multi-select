import React from 'react'
import PropTypes from 'prop-types'
import { Image } from 'react-native'

const ItemIcon = ({ iconRenderer: Icon, icon, itemIconStyle }) => {
  return typeof icon === 'object' || typeof icon === 'number' ? (
    <Image
      accessibilityIgnoresInvertColors
      source={icon}
      style={[{ width: 16, height: 16, marginHorizontal: 10 }, itemIconStyle]}
    />
  ) : (
    <Icon name={icon} style={[{ fontSize: 16 }, itemIconStyle]} />
  )
}

ItemIcon.propTypes = {
  iconRenderer: PropTypes.elementType.isRequired,
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({ uri: PropTypes.string }),
    PropTypes.number
  ]).isRequired,
  itemIconStyle: PropTypes.object
}

export default ItemIcon
