import React, {useEffect, useState} from 'react';
import {View, Text, ImageBackground, FlatList, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  {
    name: 'MainDB',
    location: 'default',
  },
  () => {},
  error => {
    console.log(error);
  },
);

const OfflineMoviesScreen = () => {
  const [data, setData] = useState([]);
  const [empty, setEmpty] = useState();

  useEffect(() => {
    viewMovieData();
  }, []);

  const viewMovieData = async () => {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM Movie_Table', [], (tx, results) => {
        console.log('results', results);
        var temp = [];
        for (let i = 0; i <= results.rows.length; ++i)
          temp.push(results.rows.item(i));
        setData(temp);

        if (results.rows.length >= 1) {
          setEmpty(false);
        } else {
          setEmpty(true);
        }
      });
    });
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View keyboardShouldPersistTaps="handled">
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View key={item?.movie_id} style={{padding: 20}}>
              <Text
                style={{
                  color: 'black',
                  padding: 5,
                  fontSize: 18,
                  fontWeight: 'bold',
                }}>
                Id: {item?.movie_id}
              </Text>
              <Image
                style={{width: 190, height: 250}}
                source={item?.movie_poster}
              />
              <Text
                style={{
                  color: 'black',
                  padding: 5,
                  fontSize: 18,
                  fontWeight: 'bold',
                }}>
                {' '}
                Name: {item?.movie_title}{' '}
              </Text>
              <Text style={{color: 'black', padding: 5, fontSize: 14}}>
                {' '}
                year: {item?.movie_year}{' '}
              </Text>
              <Text style={{color: 'black', padding: 5, fontSize: 14}}>
                {' '}
                story: {item?.movie_storyline}{' '}
              </Text>
            </View>
          )}
        />

    
      </View>
    </SafeAreaView>
  );
};

export default OfflineMoviesScreen;
