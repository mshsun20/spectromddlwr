const mongoose = require('mongoose')

const url = 'mongodb+srv://mrigankasekharsm:ms.sm=22@spectrointgdb.rxk9lid.mongodb.net/?retryWrites=true&w=majority'

const conn = async () => {
    try {
        const reslt = await mongoose.connect(url)
        if (reslt) {
            console.log(`DB Successfully Connected...`)
        }
    } catch (error) {
        console.error(error)
    }
}
conn()
