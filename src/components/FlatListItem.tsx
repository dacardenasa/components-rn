import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {MenuItem} from '../interfaces/appInterfaces';

interface Props {
  menuItem: MenuItem;
}

export const FlatListItem = ({menuItem: {name, iconName, route}}: Props) => {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(route)}
      activeOpacity={0.5}>
      <View style={styles.container}>
        <Icon name={iconName} size={24} color={'#5856D6'} />
        <Text style={styles.itemText}>{name}</Text>
        <View style={styles.separator} />
        <Icon name={'angle-right'} size={24} color={'#5856D6'} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
  },
  boxItem: {
    flexDirection: 'row',
  },
  itemText: {
    marginLeft: 8,
    fontSize: 18,
  },
  separator: {
    flex: 1,
  },
});
