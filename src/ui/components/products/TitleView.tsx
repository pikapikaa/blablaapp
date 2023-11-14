import React, {ReactNode} from 'react';
import {Text, StyleSheet, TextProps} from 'react-native';

interface TitleViewProps extends TextProps {
  children: ReactNode;
}

const TitleView = ({children, ...props}: TitleViewProps) => {
  return <Text style={[styles.container, {...props}]}>{children}</Text>;
};

export default TitleView;

const styles = StyleSheet.create({
  container: {
    fontSize: 35,
    fontFamily: 'RobotoSlab-Bold',
    color: '#01282b',
  },
});
