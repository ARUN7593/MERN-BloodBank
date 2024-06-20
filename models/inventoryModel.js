const mongoose =require('mongoose')

const inventorySchema = new mongoose.Schema({
    inventoryType:{
        type:String,
        required:[true,'inventory Type required'],
        enum:['in','out']
    },
    bloodGroup:{
        type:String,
        required:[true,'blood Group required'],
        enum:['O+','O-','A+','A-','B+','B-','AB+','AB-']
    },
    quantity:{
        type:Number,
        require:[true,'blood quantity required']
    },
    organisation:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:[true,'organisation is required']
    },
    hospital:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:function(){
            return this.inventoryType === 'out';
        },
    },
    donor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:function(){
            return this.inventoryType ==='in';
        },
    },
},{timestamps:true});

module.exports = mongoose.model('Inventory',inventorySchema)