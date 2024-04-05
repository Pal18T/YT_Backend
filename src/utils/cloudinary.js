import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs'  //fs-> file system comes with node.js directly
          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary = async (local) => {
    try {
        if(!localFilePath) return null;
        const response = await cloudinary.uploader.upload(localFilePath, {   //upload file in cloudinary
            resource_type:'auto'
        })
        //file uploaded in cloudinary
        console.log("file has been uploaded successfully", response.url);
        return response
        
    } catch (error) {
        fs.unlinkSync(localFilePath)  //remove locally daved temporary file as the upload operation got failed
        return null;
    }
}

export {uploadOnCloudinary}