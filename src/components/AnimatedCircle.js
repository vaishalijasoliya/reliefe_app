import { Animated } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import { Shape, Path } from '@react-native-community/art';

class Circle extends React.PureComponent {
  static propTypes = {
    radius: PropTypes.number.isRequired,
    opacity: PropTypes.number,
  };

  render() {
    const { radius, opacity, fill } = this.props;

    const path = Path()
      .moveTo(0, -radius / 2)
      .arc(0, radius, 1)
      .arc(0, -radius, 1)
      .close();

    return <Shape
      {...this.props}
      opacity={1}
      fill={opacity == 1 ? fill : '#C4C4C4'}
      d={path} />;
  }
}

export default Animated.createAnimatedComponent(Circle);
