import React, {useState} from 'react';
import {RefreshControl, ScrollView} from 'react-native';
import {HeaderContent} from '../components';
import {styles} from '../theme/appTheme';
import {useThemeStore} from '../states';

export const Refresh = () => {
  const {backgroundColor} = useThemeStore(state => state);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      console.info('Finished');
      setRefreshing(false);
    }, 1500);
  };

  return (
    <ScrollView
      style={{...styles.container, backgroundColor}}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      }>
      <HeaderContent title={'Refresh Control'} />
    </ScrollView>
  );
};
