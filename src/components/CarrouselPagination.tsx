import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Slide} from '../utils';

interface ICarrouselPaginationProps {
  carrouselItems: Slide[];
  goToSelectedSlide: (index: number) => void;
  activeSlide: number;
}
export const CarrouselPagination = ({
  carrouselItems,
  goToSelectedSlide,
  activeSlide,
}: ICarrouselPaginationProps) => {
  return (
    <View style={carrouselStyles.paginationBox}>
      {carrouselItems.map((item, index) => (
        <TouchableOpacity
          key={`${item.title}-${index}`}
          onPress={() => goToSelectedSlide(index)}
          style={
            activeSlide === index
              ? carrouselStyles.activeButton
              : carrouselStyles.inactiveButton
          }
        />
      ))}
    </View>
  );
};

const carrouselStyles = StyleSheet.create({
  paginationBox: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 45,
  },
  activeButton: {
    width: 10,
    height: 10,
    borderRadius: 100,
    backgroundColor: '#876cc5',
    marginRight: 16,
  },
  inactiveButton: {
    width: 7,
    height: 7,
    borderRadius: 100,
    backgroundColor: '#e6e6e6',
    marginRight: 16,
  },
});
