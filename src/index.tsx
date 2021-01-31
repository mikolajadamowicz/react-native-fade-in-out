import React, { useCallback, useEffect, useMemo } from 'react';
import type { ViewProps } from 'react-native';
import Animated, { Easing, useValue } from 'react-native-reanimated';

type Props = {
  isVisible?: boolean;
  duration?: number;
  children: React.ReactNode;
} & ViewProps;

export default ({
  children,
  isVisible = false,
  duration = 500,
  style,
  ...props
}: Props) => {
  const animatedValue = useValue(0);

  const fade = useCallback(
    (toValue: number, time: number) => {
      Animated.timing(animatedValue, {
        toValue,
        duration: time,
        easing: Easing.inOut(Easing.ease),
      }).start();
    },
    [animatedValue]
  );

  useEffect(() => {
    if (isVisible) {
      fade(1, duration);
    } else {
      fade(0, duration);
    }
  }, [isVisible, duration, fade]);

  const opacity = useMemo(() => [{ opacity: animatedValue }, style], [
    animatedValue,
    style,
  ]);

  return (
    <Animated.View style={opacity} {...props}>
      {children}
    </Animated.View>
  );
};
