import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGO!;

if (!MONGODB_URI) {
    throw new Error (" please define mongo environment variable")
}

let cached=global.mongoose
if(!cached){
    cached=global.mongoose={conn:null, promise:null}
}


async function connectToDatabase() {
    if (cached.conn) {
        return cached.conn;
    }
    if(!cached.promise){
        const opts={
            bufferCommands:true,
            maxPoolSize:10,
        };
        mongoose.connect(MONGODB_URI,opts).then(()=>mongoose.connection)
    }

    try {
        cached.conn=await cached.promise;
    } catch (error) {
        cached.promise=null
        throw new Error("conn DB file")
    }

    return cached.conn;
}

export default connectToDatabase;