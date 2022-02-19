const { PrismaClient } = require('@prisma/client')
const { makeExecutableSchema } = require('@graphql-tools/schema');
const prisma = new PrismaClient();
const typeDefs = `
  type Book {
    id: Int
    newPrice: Float
    secondPrice: Float
    image: String
    bookTitle: String
    bookUrl: String
    totalReview: Int
    totalStar: Float
    deviceId: String
  }
  type Query {
    allBooks: [Book!]!
    totalBooksDeviceId(deviceId: String): Int
    deviceIdBooks(deviceId: String): [Book!]!
  }
  type Mutation {
      deleteBooks: Book
      deleteBooksDeviceId(deviceId: String): Book
  }
`;
const resolvers = {
    Query: {
        allBooks: () => {
            return prisma.book.findMany();
        },
        deviceIdBooks: (_parent, args, context) => {
            return prisma.book.findMany({
                where: {
                    deviceId: args.deviceId
                }
            })
        },
        totalBooksDeviceId: (_parent, args, context) => {
            return prisma.book.findMany({
                where: {
                    deviceId: args.deviceId
                }
            }).then(results => results.length)
        }
    },
    Mutation: {
        deleteBooks: () => {
            return prisma.book.deleteMany()
        },
        deleteBooksDeviceId: (_parent, args, contenxt) => {
            return prisma.book.deleteMany({
                where: {
                    deviceId: args.deviceId
                }
            })
        }
    }
};

const schema = makeExecutableSchema({
    resolvers,
    typeDefs,
});

module.exports = schema