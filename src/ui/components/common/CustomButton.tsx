import React, {ReactNode} from 'react';
import {Text, View, StyleSheet, ViewProps, Pressable} from 'react-native';

interface CustomButtonProps extends ViewProps {
  onPress: () => void;
  title: string;
}

const CustomButton = ({onPress, title, ...props}: CustomButtonProps) => {
  return (
    <Pressable onPress={() => onPress()}>
      <View style={styles.container}>
        <View style={[styles.button, props.style]}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    margin: 10,
  },
  button: {
    height: 50,
    width: '80%',
    backgroundColor: '#bcea70',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontFamily: 'RobotoSlab-Medium',
  },
});
