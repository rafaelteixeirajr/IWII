import mysql from 'mysql2' //npm i mysql2 --save

export default class ConectDB {
    static connect(){
        let connection = mysql.createConnection({
            local:'localhost',
            user: 'root',
            password: '',
            database: 'livro'
        })
            connection.connect()
            return connection
    }
}