require('dotenv').config();
const S3 = require('aws-sdk/clients/s3')
const fs = require('fs')
const path = require('path')
const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;

const s3 = new S3({
    region,
})

module.exports.uploadFile = async (file) => {
    const fileStream = fs.createReadStream(file.path)
    const params = {
        Bucket: bucketName,
        Body: fileStream,
        Key: `blogs/${file.filename}${path.extname(file.originalname)}`
    }

    try {
        await s3.putObject(params).promise();
        return `//isma-pizza-luvrs.s3.us-west-2.amazonaws.com/${params.Key}`
    } catch (error) {
        throw error;
    }
    
}