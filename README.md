# Oct_Team_07

# Object Storage System
Object storage, also known as object-based storage, is a strategy that manages and manipulates data storage as distinct units, called objects. These objects are kept in a single storehouse and are not ingrained in files inside other folders. Instead, object storage combines the pieces of data that make up a file, adds all its relevant metadata to that file, and attaches a custom identifier.
Object storage adds comprehensive metadata to the file, eliminating the tiered file structure used in file storage, and places everything into a flat address space, called a storage pool. This metadata is key to the success of object storage in that it provides deep analysis of the use and function of data in the storage pool.
**_Object storage takes each piece of data and designates it as an object_**. Data is kept in separate storehouses versus files in folders and is bundled with associated metadata and a unique identifier to form a storage pool.

## Use Cases
1. **Deliver rich media:**
     Define workflows by leveraging industry-leading solutions for managing unstructured data. Reduce your costs for globally distributed rich media.
2. **Manage distributed content:**
     Optimize the value of your data throughout its lifecycle and deliver competitive storage services.
3. **Embrace the Internet of Things (IoT):**
     Manage machine-to-machine data efficiently, support artificial intelligence and analytics, and compress the cost and time of the design process.
4. **Archiving and Backup:**
     Object storage is commonly used for long-term data archiving and backup.  Its scalability and durability make it a reliable choice for storing critical data that needs to be preserved for extended periods.
5. **Media and Entertainment:**
     Media companies use object storage to store and manage large libraries of multimedia assets, such as images, audio, and video files.
6. **Data Sharing and Collaboration:**
     Object storage is suitable for collaborative work environments, enabling multiple users to share and access data securely.  It is often used for document sharing and collaboration platforms.
7. **Web and Application Hosting:**
     Object storage can be used to store static web assets like HTML, CSS, and JavaScript files, as well as application data.  This is particularly useful for web hosting and microservices architectures.

_We actually used MINIO as the object storage system here._

# Alternatives for Minio
1. **Azure Blob Storage:**
     - Azure Blob Storage offers cost-effective and scalable object storage for unstructured data, while File Storage provides shared storage for structured data.  Stores large amounts of unstructured object data, such as text or binary data, that can be accessed from anywhere in the world via HTTP or HTTPS.  The maximum size for a single blob in Azure Blob Storage is 4 TB.  If you need to store larger files, you may need to use multiple blobs.
2. **Google Cloud Storage:**
     - We can use Google Cloud Storage to store data in Google’s cloud.  Cloud Storage is typically used to store unstructured data.  We can add objects of any kind and size, and up to 5 TB.  Data stored in Google Cloud Storage is designed for high durability and is replicated across multiple locations.  This ensures data integrity and availability. 
3. **IBM Cloud Object Storage:** 
       - IBM Cloud Object Storage is a cloud-based object storage service provided by IBM.  Used for data archiving and backup, web and mobile applications, and analytics.  It is designed to handle large volumes of unstructured data and can be used for various data storage and archiving use cases.  For larger objects, part size can be increased without significant performance impact.  Multipart uploads are limited to no more than 10,000 parts of 5 GB each up to a maximum object size of 10 TB.

# Setup and installation of Minio in our local system

### Prerequisites
*	Read, write, and execute permissions for the preferred local directory or file path.
*	Familiarity with using the Command Prompt or PowerShell

1. Install the MinIO Server

Download the MinIO executable from the following URL:

```
https://dl.min.io/server/minio/release/windows-amd64/minio.exe
```

2. Launch the Minio server

In PowerShell or the Command Prompt, navigate to the location of the executable or add the path of the minio.exe file to the system $PATH.

Use this command to start a local MinIO instance in the C:\minio folder. You can replace C:\minio with another drive or folder path on the local computer.

```
.\minio.exe server C:\minio --console-address :9090
```

The minio server process prints its output to the system console, similar to the following:

![minio_server](https://github.com/RCTS-K-Hub/Oct_Team_07/assets/94080969/d9d9305e-f55a-434f-a5b2-250871fd843b)

The process is tied to the current PowerShell or Command Prompt window.  Closing the window stops the server and ends the process.

3. Connect your browser to the Minio server

     On going to `http://127.0.0.1:9090` or one of the Console addresses specified in the minio server command’s output. 
For example, Console: `http://192.0.2.10:9090`, and `http://127.0.0.1:9090` in the example output indicate two possible addresses to use for connecting to the Console.

While port 9000 is used for connecting to the API, MinIO automatically redirects browser access to the MinIO Console.

Log in to the Console with the RootUser and RootPass user credentials displayed in the output. These default to minioadmin | minioadmin.


![minio_server_admin](https://min.io/docs/minio/windows/_images/console-login.png)

You can use the MinIO Console for general administration tasks like Identity and Access Management, Metrics and Log Monitoring, or Server Configuration. Each MinIO server includes its own embedded MinIO Console.

![minio_server_dashboard](https://min.io/docs/minio/windows/_images/minio-console.png)


