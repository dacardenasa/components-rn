import React, {useState} from 'react';
import {RefreshControl, ScrollView, View} from 'react-native';
import {HeaderContent} from '../components';
import {styles} from '../theme/appTheme';

export const Refresh = () => {
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
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      }>
      <View style={styles.container}>
        <HeaderContent title={'Refresh Control'} />
      </View>
    </ScrollView>
  );
};
