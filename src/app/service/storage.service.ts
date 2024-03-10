import { Injectable } from '@angular/core';
import { S3Client, PutObjectCommand, ListBucketsCommand } from '@aws-sdk/client-s3';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private bucketName = 'bestxstorage';
  private keyId = 'ASIA47CRZOH2BOEWE2VW';
  private accessKey = 'gQR0IIs38BfrirYB8Boht7OFD6r1WO+JRXUbzdIr';
  private token = 'FwoGZXIvYXdzEBUaDOdni9B2qqoaMu5DTCLFAdGQFI/xuYnLMkuwP8CcNjCX47zr4mCRRll75k8K1uMflbzb+jJM8W+RY9GXYfgmLmY9dvxa427SSj/r6+OHJNYZwXYpkVmhgFx7uSxY5OsZX6vXOwnwpUug686HZ5Vl6k85HkOmKoj4oM0oqvdGORDlqffTHYYOpvneYiZgsaQKB7zr26/6OmV4zuQc04haYMJUZxYTgR9CBhiTPdjvdfm8ebXZzyPeIAMa7bRa1NS6Q5vSOaTrZ4XGrJGdYHTav4CuVgnRKLDgtK8GMi3Kxg11lGL2RWIwx2nk9rKLaA65aINyGXQN/5SJmTNIbbIsnwytRkDvQEyA44E=';
  private region = 'us-east-1';


  async uploadImage(file: any) {
    const client = new S3Client({
      credentials: {
        accessKeyId: this.keyId,
        secretAccessKey: this.accessKey,
        sessionToken: this.token,
      },
      region: this.region,
    });

    const params = {
      Bucket: this.bucketName,
      Key: "test",
      Body: file
    };

    await client.send(
      new PutObjectCommand(params))
    return 'success'
  }
}
