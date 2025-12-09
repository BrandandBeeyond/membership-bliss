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
          backgroundColor: '#fafff9',
          marginBottom: 12,
          borderRadius: 12,
          borderWidth: 1,
          borderColor: '#d8ecd6',
          padding: 12,
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
                height: verticalScale(50),
                borderRadius: 10,
                marginRight: 10,
              }}
            />

            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontSize: scaleFontSize(16),
                  color: '#2d532c',
                  fontWeight: '600',
                }}
              >
                {item.name}
              </Text>

              {/* Inventory Info */}
              <Text style={{ fontSize: scaleFontSize(12), color: '#528c51ff' }}>
                Inventory: {item.inventory?.total || 0} | Used:{' '}
                {item.inventory?.used || 0}
              </Text>
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
            {item.items?.map((v, i) => (
              <View
                key={i}
                style={{
                  backgroundColor: '#ffffff',
                  padding: 10,
                  borderRadius: 10,
                  marginBottom: 8,
                  borderWidth: 1,
                  borderColor: '#e2e8e1',
                }}
              >
                <Text
                  style={{
                    fontSize: scaleFontSize(14),
                    color: '#2d532c',
                    fontWeight: '500',
                  }}
                >
                  {v.title}
                </Text>
                <Text style={{ fontSize: 12, color: '#5c6f5b' }}>
                  {v.description}
                </Text>
              </View>
            ))}
          </View>
        </Collapsible>
      </View>
    );
  };

  return (
    <View
      style={[
        globalStyle.flex,
        globalStyle.bgwhite,
        globalStyle.pt10,
        { padding: horizontalScale(15) },
      ]}
    >
      <FlatList
        renderItem={renderVouchers}
        data={valueVouchers}
        keyExtractor={item => item._id}
      />
    </View>
  );
};

export default ValueVoucherScreen;
