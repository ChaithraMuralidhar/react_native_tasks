import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  Image,
} from 'react-native';
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

const Seperator = () => <View style={styles.seperator} />;

const MovieListScreen = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getMovieData = async () => {
    try {
      const response = await fetch(
        'https://raw.githubusercontent.com/FEND16/movie-json-data/master/json/movies-in-theaters.json',
      );
      const myData = await response.json();
      setData(myData);
      setLoading(false);
      console.log(myData);
      myData.forEach(item => {
        db.transaction(function (tx) {
          tx.executeSql(
            'INSERT INTO Movie_Table ( movie_title,movie_poster, movie_year, movie_storyline) VALUES (?,?,?,?)',
            [item.title, item.poster, item.year, item.storyline],
            (tx, results) => {
              console.log('Results', results.rowsAffected);
              if (results.rowsAffected > 0) {
                console.log('Data Inserted Successfully....');
              } else Alert.alert('Failed....');
            },
            console.log('INSERTED DATA......!!!!'),
          );
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    createTable();
    getMovieData();
  }, []);

  const createTable = () => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS Movie_Table(movie_id INTEGER PRIMARY KEY AUTOINCREMENT, movie_title VARCHAR(50),movie_poster BLOB, movie_year INT(10), movie_storyline VARCHAR(555))',
      );
      console.log('table created successfully...!!!!');
    });
  };

  // _renderItem = ({item, index}) => {
  //   return (
  //     <View style={styles.tableView}>
  //       <Text style={styles.primaryText}>{item.id + ')  ' + item.title}</Text>

  //         <Image
  //           source={{uri: `${item.posterurl}`}}
  //           style={styles.imageStyle}
  //         />
  //                   <Text style={styles.secondaryText}>{item.year}</Text>
  //         <Text style={styles.secondaryText}>{item.storyline}</Text>

  //     </View>
  //   );
  // };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.loader}>
          <ActivityIndicator />
          <Text style={styles.loading}>Loading...!!</Text>
        </View>
      ) : (
        <View style={styles.mainContainer}>
          <FlatList
            data={data}
            ItemSeparatorComponent={Seperator}
            renderItem={({item}) => {
              return (
                <View style={styles.tableView}>
                  <View style={styles.imgContainer}>
                    <Image
                      source={{uri: `${item.posterurl}`}}
                      style={styles.imgStyle}
                      resizeMode="cover"
                    />
                  </View>
                  <View style={styles.contentContainer}>
                    <Text style={styles.mainContent}>
                      {item.id + ')' + item.title}
                    </Text>
                    <Text style={styles.mainContent}>{item.year}</Text>
                    <Text style={styles.mainContent}>{item.storyline}</Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
      )}
    </View>
  );
};

export default MovieListScreen;

const styles = StyleSheet.create({
  loader: {
    minHeight: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    color: 'black',
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tableView: {
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    padding: 25,
    fontSize: 35,
    fontWeight: 'bold',
  },
  contentContainer: {
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'column',
    marginBottom: 20,
    alignItems: 'center',
    padding: 5,
  },
  imgContainer: {
    padding: 10,
  },
  imgStyle: {
    width: 150,
    height: 200,
  },
  mainContent: {
    fontSize: 16,
    alignItems: 'center',
    color: 'black',
  },
  seperator: {
    borderBottomWidth: 1,
    marginBottom: 20,
    borderBottomColor: 'black',
  },
});
