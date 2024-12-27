import React, { useRef, useEffect } from "react";
import { Animated, PanResponder, Dimensions } from "react-native";
const window = Dimensions.get("window");

export default (props) => {
  const position = useRef(new Animated.ValueXY()).current;

  const boundary = useRef({
    width: props.width,
    height: props.height,
  });

  useEffect(() => {
    boundary.current = {
      width: props.width,
      height: props.height,
    };

    position.setValue({
      x: window.width - props.width,
      y: position.y._offset,
    });
  }, [props.width, props.height]);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        props.onDragging && props.onDragging(true);
        position.setOffset(position.__getValue());
        position.setValue({ x: 0, y: 0 });
      },
      onPanResponderMove: (_, gestureState) => {
        const { dx, dy } = gestureState;
        const { width, height } = boundary.current;

        let newX = position.x._offset + dx;
        let newY = position.y._offset + dy;

        if (newX < 0) newX = 0;
        if (newX > window.width - width) newX = window.width - width;
        if (newY < 0) newY = 0;
        if (newY > window.height - height) newY = window.height - height;

        position.setValue({
          x: newX - position.x._offset,
          y: newY - position.y._offset,
        });
      },
      onPanResponderRelease: () => {
        props.onDragging && props.onDragging(false);
        position.flattenOffset();
      },
    })
  ).current;

  return (
    <Animated.View
      {...panResponder.panHandlers}
      onLayout={(e) => props.onLayout && props.onLayout(e)}
      style={[
        {
          position: "absolute",
          zIndex: props.zIndex || 19999999999,
          top: props.top || 0,
          left: props.left || 0,
          width: props.width,
          height: props.height,
          transform: position.getTranslateTransform(),
        },
        props.style,
      ]}
    >
      {props.children}
    </Animated.View>
  );
};
