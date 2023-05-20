import React from 'react';
import {SectionList, Text, View} from 'react-native';
import {FlatListSeparator as ItemSeparator, HeaderContent} from '../components';
import {styles} from '../theme/appTheme';
import {casas} from '../utils';
import {useThemeStore} from '../states';

export const CustomSectionList = () => {
  const {backgroundColor, colors} = useThemeStore(state => state);
  return (
    <View style={{...styles.container, backgroundColor}}>
      <SectionList
        sections={casas}
        keyExtractor={(item, index) => `${item}-${index}`}
        renderItem={({item}) => (
          <Text style={{color: colors.text}}>{item}</Text>
        )}
        renderSectionHeader={({section}) => (
          <View style={{backgroundColor}}>
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
