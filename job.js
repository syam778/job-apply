import mongoose from 'mongoose';
const jobSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: Number,
        required: true
    },
    job: {
        type: String,
        required: true,
        enum: ['frontend', 'backend', 'fullstack', 'dataentry']
    }, salary: {
        type: Number,
        required: true

    }

});
const job = mongoose.model('job', jobSchema);
export default job;
