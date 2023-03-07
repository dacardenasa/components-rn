import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  Text,
  Dimensions,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {CarrouselPagination} from '../components';
import {carrouselItems, Slide} from '../utils';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export const Slides = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const carrouselRef = useRef(null);
  const lastCarrouselSlide = carrouselItems.length - 1;
  const goToFirstSlide = () => {
    if (carrouselRef.current) {
      carrouselRef.current.scrollTo({index: 0});
      setActiveSlide(0);
    }
  };
  const goToSelectedSlide = (index: number) => {
    if (carrouselRef.current) {
      carrouselRef.current.scrollTo({index});
      setActiveSlide(index);
    }
  };
  const renderItem = (item: Slide) => (
    <View style={carrouselStyles.carrouselItem}>
      <Image source={item.img} style={carrouselStyles.carrouselItemImage} />
      <Text style={carrouselStyles.carrouseItemTitle}>{item.title}</Text>
      <View style={carrouselStyles.separator} />
      <Text style={carrouselStyles.carrouseItemLabel}>{item.desc}</Text>
    </View>
  );
  return (
    <SafeAreaView>
      <Carousel
        ref={carrouselRef}
        loop
        width={screenWidth}
        height={screenHeight - 150}
        autoPlay={false}
        data={carrouselItems}
        scrollAnimationDuration={1000}
        onSnapToItem={index => setActiveSlide(index)}
        renderItem={({item}) => renderItem(item)}
      />
      <View style={carrouselStyles.controlBox}>
        <CarrouselPagination
          carrouselItems={carrouselItems}
          goToSelectedSlide={goToSelectedSlide}
          activeSlide={activeSlide}
        />
        {activeSlide === lastCarrouselSlide ? (
          <View style={carrouselStyles.buttonBox}>
            <TouchableOpacity
              style={carrouselStyles.button}
              onPress={goToFirstSlide}>
              <Text style={carrouselStyles.buttonText}>Go to start</Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

const carrouselStyles = StyleSheet.create({
  carrouselItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
  carrouselItemImage: {
    width: 300,
    height: 400,
    resizeMode: 'center',
  },
  carrouseItemTitle: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  carrouseItemLabel: {
    fontSize: 16,
  },
  separator: {
    height: 8,
  },
  buttonBox: {
    width: '30%',
  },
  button: {
    width: '100%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: '#876cc5',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  controlBox: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
});
