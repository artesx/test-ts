import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql/dist/graphql.module'
import { NoteModule } from './note'
import { MongooseModule } from '@nestjs/mongoose'
import * as timestamps from 'mongoose-timestamp'

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      typePaths: [],
      autoSchemaFile: true,
    }),
    MongooseModule.forRoot('mongodb://mongo:27017/test_mongodb', {
      connectionFactory: (connection) => {
        connection.plugin(timestamps)
        return connection
      },
    }),
    NoteModule,
  ],
})
export class AppModule {}
