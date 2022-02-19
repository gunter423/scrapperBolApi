const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function insertNewBook(newPrice, secondPrice, image, bookTitle, bookUrl, totalReview, totalStar, deviceId) {
    await prisma.book.create({
        data: {
            newPrice: newPrice,
            secondPrice: secondPrice,
            image: image,
            bookTitle: bookTitle,
            bookUrl: bookUrl,
            totalReview: totalReview,
            totalStar: totalStar,
            deviceId: deviceId
        }
    })
}

module.exports = insertNewBook