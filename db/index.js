import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('diary.db');

export const init = () => {
  const promise = new Promise((resolve,reject) => {
    db.transaction((tx) => {
      tx.executeSql(`CREATE TABLE IF NOT EXISTS diary (
        id INTEGER PRIMARY KEY NOT NULL,
        title TEXT NOT NULL,
        image TEXT NOT NULL,
        comment TEXT NOT NULL
      )`,
      [],
      () => {resolve(),
      (_, err) => reject(err)
      })
  })
  })
 return promise
}

export const insertDiary = (
  title,
  image,
  comment,
) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO diary (title, image, comment) VALUES (?, ?, ?)',
        [title, image, comment],
        (_, result) => resolve(result),
        (_, error) => reject(error),
      )
    })
  })
  return promise
}

export const fetchDiary = () => {
const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM diary',
        [],
        (_, result) => resolve(result),
        (_, error) => reject(error),
      )
    })
  })
  return promise
}