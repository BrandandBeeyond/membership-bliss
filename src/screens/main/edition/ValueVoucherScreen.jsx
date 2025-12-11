import React, { useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { globalStyle } from '../../../../assets/styles/globalStyle';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../../../assets/styles/Scaling';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Collapsible from 'react-native-collapsible';
import Typography from '../../../components/Typography';
import { Chip } from 'react-native-paper';

const ValueVoucherScreen = ({ valueVouchers }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleCollapse = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  const renderVouchers = ({ item, index }) => {
    const isOpen = index === activeIndex;

    return (
      <View
        style={{
          backgroundColor: '#fafff7ff',
          marginBottom: verticalScale(12),
          borderRadius: horizontalScale(12),
          borderWidth: horizontalScale(1),
          borderColor: '#9dc699ff',
          padding: horizontalScale(10),
        }}
      >
        {/* HEADER */}
        <TouchableOpacity
          onPress={() => toggleCollapse(index)}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
            <Image
              source={{ uri: item.thumbnail?.url }}
              style={{
                width: horizontalScale(50),
                height: verticalScale(40),
                borderRadius: 10,
                marginRight: 10,
              }}
            />

            <View style={{ flex: 1 }}>
              <Typography color="#2d532c" variant="subhead" weight="MSemiBold">
                {item.title}
              </Typography>
            </View>
          </View>

          <Ionicons
            name={isOpen ? 'chevron-up' : 'chevron-down'}
            size={22}
            color="#2d532c"
          />
        </TouchableOpacity>

        <Collapsible collapsed={!isOpen}>
          <View style={{ marginTop: 10, paddingLeft: 10 }}>
            <View style={globalStyle.dashedLine}></View>
            {item.items?.map((v, i) => (
              <View key={i}>
                <Typography color="#2d532c" variant="subline" weight="MMedium">
                  {v.name}
                </Typography>
                {v.description && (
                  <Text
                    style={{
                      fontSize: scaleFontSize(13),
                      lineHeight: verticalScale(15),
                      color: '#5c6f5b',
                    }}
                  >
                    {v.description}
                  </Text>
                )}
                <View style={[globalStyle.my5,globalStyle.row,globalStyle.alignCenter,globalStyle.cg15]}>
                  <Chip  style={{maxWidth:horizontalScale(100),backgroundColor:'#869e84ff'}}>Available : {v.inventory} </Chip>
                  <Chip style={{maxWidth:horizontalScale(100),backgroundColor:'#869e84ff'}}>Used : {v.usedCount} </Chip>
                </View>
              </View>
            ))}
          </View>
        </Collapsible>
      </View>
    );
  };

  return (
    <View style={[globalStyle.flex, globalStyle.bgwhite, globalStyle.pt10]}>
      <FlatList
        renderItem={renderVouchers}
        data={valueVouchers}
        keyExtractor={item => item._id}
      />
    </View>
  );
};

export default ValueVoucherScreen;
