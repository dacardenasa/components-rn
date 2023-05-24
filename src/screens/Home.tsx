import React, {useEffect} from 'react';
import {FlatList, View, useColorScheme} from 'react-native';
import {HeaderContent, FlatListItem, FlatListSeparator} from '../components';
import {styles} from '../theme/appTheme';
import {menuItems} from '../utils';
import {useThemeStore} from '../states';
import {THEMES} from '../constants';

export const Home = () => {
  const theme = useThemeStore(state => state);
  const colorShema = useColorScheme();

  useEffect(() => {
    colorShema === THEMES.LIGHT ? theme.setLightTheme() : theme.setDarkTheme();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorShema]);

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
