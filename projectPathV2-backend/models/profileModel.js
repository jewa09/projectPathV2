import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const profileModel = new Schema({

    profileName: {
        type: String
    },

    aboutMe: {
        type: String
    }

})

export default mongoose.model('profile', profileModel);