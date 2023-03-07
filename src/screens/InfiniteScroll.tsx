import React, {useState} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import {AnimatedImage, HeaderContent} from '../components';

export const InfiniteScroll = () => {
  const [numbers, setNumbers] = useState<number[]>([3, 5, 6, 7, 8]);
  const handleMoreData = () => {
    let newNumbers: number[] = [];
    for (let i = 1; i <= 5; i++) {
      newNumbers.push(numbers[numbers.length - 1] + i);
    }
    setTimeout(() => setNumbers([...numbers, ...newNumbers]), 1500);
  };
  const renderItem = (item: number) => (
    <AnimatedImage
      style={{width: '100%', height: 400}}
      uri={`https://picsum.photos/id/${item}/800/800`}
    />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={numbers}
        renderItem={({item}) => renderItem(item)}
        onEndReached={handleMoreData}
        onEndReachedThreshold={0.5}
        ListHeaderComponent={<HeaderContent title={'Infinite Scroll'} />}
        ListFooterComponent={() => (
          <View style={styles.loaderBox}>
            <ActivityIndicator size={25} color={'#5cc9f5'} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loaderBox: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
