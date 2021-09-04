import {
  FlatList,
  StyleSheet,
} from 'react-native';

import ListItem from './ListItem';
import React from 'react';

const List = ({ itemList, handleModal }) => {
  return (
    <FlatList
      data={itemList}
      renderItem={(data) => <ListItem handleModal={handleModal} data={data} />}
      keyExtractor={item => item.id}
    />
  );
}

const styles = StyleSheet.create({
  items: {
    marginTop: "10%",
  },
});

export default List;