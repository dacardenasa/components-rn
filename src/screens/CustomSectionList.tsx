import React from 'react';
import {SectionList, Text, View} from 'react-native';
import {FlatListSeparator as ItemSeparator, HeaderContent} from '../components';
import {styles} from '../theme/appTheme';
import {casas} from '../utils';

export const CustomSectionList = () => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={casas}
        keyExtractor={(item, index) => `${item}-${index}`}
        renderItem={({item}) => <Text>{item}</Text>}
        renderSectionHeader={({section}) => (
          <View style={{backgroundColor: 'white'}}>
            <HeaderContent title={section.casa} />
          </View>
        )}
        renderSectionFooter={({section}) => (
          <HeaderContent title={`Total data: ${section.data.length}`} />
        )}
        ListHeaderComponent={() => <HeaderContent title={'SectionList'} />}
        ListFooterComponent={() => (
          <View style={{marginBottom: 70}}>
            <HeaderContent title={`Total of houses ${casas.length}`} />
          </View>
        )}
        ItemSeparatorComponent={() => <ItemSeparator />}
      />
    </View>
  );
};
