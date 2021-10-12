/*import {SQLite} from "expo-sqlite";*/

import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("routines.db");

export const init = () => {
    const promise = new Promise ((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(`CREATE TABLE IF NOT EXISTS routines (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL , turno TEXT NOT NULL, horario NUMBER NOT NULL, step1 TEXT NOT NULL, step2 TEXT NOT NULL, step3 TEXT NOT NULL, step4 TEXT NOT NULL, otros TEXT NOT NULL, )`,
            [],
            () => { resolve()},
            (_, err) => { reject(err) })
        })
    })

    return promise
}

export const insertRoutine = (
    title,
   turno,
   horario,
   step1,
   step2,
   step3,
   step4,
   otros
) => {
    const promise = new Promise ((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                `INSERT INTO routines (title, turno, horario, step1, step2, step3, step4, otros) VALUESN (?, ?, ?, ?, ?, ?, ?, ?);`,
                [title, turno, horario, step1, step2, step3, step4, otros],
                (_, result) => resolve(result),
                (_, err) => reject(err)
                )
        })
    })

    return promise
}

export const fetchRoutines = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
          tx.executeSql(
            'SELECT * FROM routines',
            [],
            (_, result) => resolve(result),
            (_, error) => reject(error),
          )
        })
      })
      return promise
    }