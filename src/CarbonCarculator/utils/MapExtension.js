export const mapFileExtensionToFileType = (fileExtension) => {
    console.log('Received file type:', fileExtension);

    switch (fileExtension) {
        case 'application/pdf':
            return 'PDF';
        case 'application/msword':
            return 'DOC';
        case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
            return 'DOCX';
        case 'application/vnd.openxmlformats-officedocument.presentationml.presentation':
            return 'PPTX';
        case 'application/vnd.ms-powerpoint':
            return 'PPT';
        case 'image/jpeg':
        case 'image/jpg':
            return 'JPEG';
        case 'image/png':
            return 'PNG';
        case 'text/csv':
            return 'CSV';
        case 'application/vnd.ms-excel':
            return 'XLS';
        case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
            return 'XLSX';
        default:
            console.error(`Unsupported file type: ${fileExtension}`);
            return 'UNKNOWN';
    }
};
