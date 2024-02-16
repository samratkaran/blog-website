const Config ={
  appWriteUrl: String(import.meta.env.VITE_APP_WRITE_URL),
  appWriteProjectID: String(import.meta.env.VITE_PROJECT_ID),
  appWriteDatabaseID: String(import.meta.env.VITE_APP_DATABASE_ID),
  appWriteCollectionID: String(import.meta.env.VITE_APP_COLLECTION_ID),
  appWriteBucketID: String(import.meta.env.VITE_APP_BUCKET_ID),

}

export default Config