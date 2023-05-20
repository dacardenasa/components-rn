import React from 'react';
import {FlatList, View} from 'react-native';
import {HeaderContent, FlatListItem, FlatListSeparator} from '../components';
import {styles} from '../theme/appTheme';
import {menuItems} from '../utils';
import {useThemeStore} from '../states';

export const Home = () => {
  const theme = useThemeStore(state => state);
  return (
    <View style={{...styles.container, backgroundColor: theme.backgroundColor}}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => <FlatListItem menuItem={item} />}
        ListHeaderComponent={() => <HeaderContent title={'Opciones de menu'} />}
        ItemSeparatorComponent={() => <FlatListSeparator />}
        keyExtractor={item => item.name}
      />
    </View>
  );
};
