import React from 'react';
import PropTypes from 'prop-types';
import { Animated } from 'react-native';
import { Surface } from '@react-native-community/art';
import AnimatedCircle from './AnimatedCircle';
import Constants from '../config/Constants';

export default class OpacityDotsLoader extends React.PureComponent {
  static propTypes = {
    color: PropTypes.string,
    size: PropTypes.number,
    betweenSpace: PropTypes.number,
    speed: PropTypes.number,
    style: PropTypes.any
  };

  static defaultProps = {
    color: Constants.COLOR_PRIMARY,
    size: 10,
    betweenSpace: 5,
    speed: 200,
    style: {}
  };

  state = {
    opacity: [new Animated.Value(0.5), new Animated.Value(0.5), new Animated.Value(0.5), new Animated.Value(0.5), new Animated.Value(0.5)],
  };

  _renderCircle(i) {
    const { color, size, betweenSpace } = this.props;
    return (
      <AnimatedCircle
        radius={size}
        fill={color}
        x={size / 2 + i * (size + betweenSpace)}
        y={size / 2}
        opacity={this.state.opacity[i]}
        scale={1}
      />
    );
  }

  componentDidMount() {
    this._animation();
  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  _animation = () => {
    const { speed } = this.props;

    function seq(self, i) {
      return Animated.sequence([
        Animated.timing(self.state.opacity[i], {
          toValue: 1,
          duration: speed,
          delay: i * speed,
          useNativeDriver: false,
        }),
        Animated.timing(self.state.opacity[i], {
          toValue: 0.3,
          duration: speed,
          delay: speed,
          useNativeDriver: false,
        }),
      ]);
    }

    Animated.parallel([seq(this, 0), seq(this, 1), seq(this, 2), seq(this, 3), seq(this, 4)]).start(() => {
      !this.unmounted && this._animation();
    });
  };

  render() {
    const { size, betweenSpace, style } = this.props;
    return (
      <Surface style={style} width={size * 5 + betweenSpace * 4} height={size}>
        {this._renderCircle(0)}
        {this._renderCircle(1)}
        {this._renderCircle(2)}
        {this._renderCircle(3)}
        {this._renderCircle(4)}
      </Surface>
    );
  }
}
