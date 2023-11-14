import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ViewProps,
  Pressable,
  Dimensions,
} from 'react-native';

interface CustomButtonProps extends ViewProps {
  onPress: () => void;
  title: string;
}

const {width} = Dimensions.get('window');

const CustomButton = ({onPress, title, ...props}: CustomButtonProps) => {
  return (
    <Pressable onPress={() => onPress()}>
      <View style={[styles.button, props.style]}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: width - 100,
    backgroundColor: '#bcea70',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#01282b',
    fontFamily: 'RobotoSlab-Medium',
  },
});
