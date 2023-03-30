import internalApiService from './base/internalApiService';

class MediaService {
  uploadFiles(files: File[]) {
    const formData = new FormData();
    for (const file of files) {
      formData.append(`files`, file);
    }
    return internalApiService.putUploadFileAsync('Media/UploadImages',formData);
  }
}

export default new MediaService();
