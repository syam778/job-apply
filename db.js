import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost:27017/job', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('connected', () => {
    console.log('db connected');
})
db.on('disconnected', () => {
    console.log('db disconnected');
});
db.on('error', () => {
    console.log('db error', err);

});
    
export default db;

