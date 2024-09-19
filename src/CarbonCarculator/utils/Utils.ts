import { FileType, TimeOfDayCategory, TravelCoverType, TravelType } from "../models"
import { format } from 'date-fns';
import dayjs, { Dayjs } from 'dayjs';

export const mapFileExtensionToFileType = (fileExtension: string): FileType => {
    switch (fileExtension) {
        case 'application/pdf':
            return FileType.PDF;
        case 'application/doc':
        case 'application/msword':
            return FileType.DOC;
        case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
            return FileType.DOCX;
        case 'application/docx':
            return FileType.DOCX;
        case 'application/pptx':
        case 'application/vnd.openxmlformats-officedocument.presentationml.presentation':
            return FileType.PPTX;
        case 'image/jpg':
            return FileType.JPG;
        case 'image/jpeg':
            return FileType.JPEG;
        case 'image/png':
            return FileType.PNG;
        case 'text/csv':
            return FileType.CSV;
        case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
            return FileType.EXCEL;
        case 'video/mp4':
            return FileType.VIDEO;
        default:
            return FileType.UNKNOWN;
    }
};

export const mapFileTypeToFileExtension = (fileType: FileType): string => {
    switch (fileType) {
        case FileType.PDF:
            return 'application/pdf';
        case FileType.DOC:
            return 'application/msword';
        case FileType.DOCX:
            return 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
        case FileType.PPTX:
            return 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
        case FileType.JPG:
            return 'image/jpg';
        case FileType.JPEG:
            return 'image/jpeg';
        case FileType.PNG:
            return 'image/png';
        case FileType.CSV:
            return 'text/csv';
        case FileType.EXCEL:
            return 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
        case FileType.VIDEO:
            return 'video/mp4';
        default:
            return 'application/octet-stream';
    }
};

const extensionToMimeType: Record<string, string> = {
    'pdf': 'application/pdf',
    'doc': 'application/msword',
    'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'jpg': 'image/jpg',
    'jpeg': 'image/jpeg',
    'png': 'image/png',
    'csv': 'text/csv',
    'xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'mp4': 'video/mp4'
};

export const mapExtensionToMimeType = (extension: string): string => {
    return extensionToMimeType[extension.toLowerCase()] || 'application/octet-stream';
};


export const getFileExtension = (fileName: string): string => fileName.split('.').slice(-1)[0];

// export const downloadCSV = (jsonData: any, fileName: string, fields: string[]) => {
//     const csv = Papa.unparse({ data: jsonData, fields: fields });

//     const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
//     const link = document.createElement('a');
//     const url = URL.createObjectURL(blob);
//     link.setAttribute('href', url);
//     link.setAttribute('download', fileName);
//     link.style.visibility = 'hidden';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
// };

export const addCommasToNumbers = (input: string) => input.replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, '$&,');
    

export const printStringList = (list: string[]): string => {
    if (list.length === 0) {
        return '';
    } else if (list.length === 1) {
        return `${list[0]}`;
    } else if (list.length === 2) {
        return `${list[0]} and ${list[1]}`;
    } else {
        const itemsExceptLast = list.slice(0, -1).map(item => `${item}`).join(', ');
        const lastItem = `${list[list.length - 1]}`;
        return `${itemsExceptLast} and ${lastItem}`;
    }
}

export const createFormattedDateAndTime = (dateTimeString: string) => {
    const [date, time] = dateTimeString.split('T');
    const formattedDate = format(new Date(date), 'MMMM d, yyyy');
    const formattedTime = `${time} hrs`;
    return { formattedDate, formattedTime };
}

export const calculateDurationInDays = (startDate: Dayjs, endDate: Dayjs): number => {
    const differenceInMs = endDate.diff(startDate);
    const days = differenceInMs / (1000 * 3600 * 24);

    return Math.round(days) + 1;
};

export const getUserInitials = (userName: string): string => {
    const splitUserName: string[] = userName.split(' ');
    return (splitUserName[0][0] + splitUserName[1][0]).toUpperCase();
}

export const convertJsonToBlob = (jsonObj: Record<string, any>): Blob => {
    const json = JSON.stringify(jsonObj);


    return new Blob([json], {
        type: 'application/json'
    });
}

export const transformStringToList = (value: string) =>
    value.split(',').map(value => value.trim())

export const transformListToString = (values: string[]): string =>
    values.join(",")

export const isEndDateBeforeStartDate = 
(startDate: Dayjs, endDate: Dayjs): boolean => {

    if (!startDate.isValid() || !endDate.isValid()) {
        throw new Error('Invalid date or time format');
    }

    return endDate.isBefore(startDate);
};

export const separateDateAndTime = (dateString: string): { date: string, time: string } => {
    const dateTimeList: string[] = dateString.split('T');
    return {
        date: dateTimeList[0],
        time: dateTimeList[1]
    }
}

export const combineDateAndTime = (date: string, time: string) => dayjs(`${date}T${time}`);

export const convertDateToReadableFormat = (dateString: string): string => {
    const dateObject = dayjs(dateString, 'YYYY-MM-DD')
    return dateObject.format("MMMM D, YYYY");
}

export const convertTimeToReadableFormat = (timeString: string): string => {
    const [hour, minute, _] = timeString.split(':')
    return `${hour}:${minute}`
}

export const getCurrentTimeOfDayCategory = () => {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
        return TimeOfDayCategory.MORNING;
    } else if (currentHour >= 12 && currentHour < 18) {
        return TimeOfDayCategory.AFTERNOON;
    } else {
        return TimeOfDayCategory.EVENING;
    }
};

export const getWordCount = (text: string) =>
    text.split(/\s+/).filter(word => word.length > 0).length;

//* Function to remove HTML tags
export const removeHTMLTags = (html: string): string => {
    var div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
}

export const cleanPunctuatedText = (text: string): string => {
    return text.replace(/[^.,\w\s:"]/g, '');
}

export const convertBytesToMB = (fileSize: string): string => {
    const bytes: number = Number(fileSize.split(' ')[0]);
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
}

export const getCleanFilename = (fileName: string): string => fileName.replace(/^\d+-/, '');

export const formatBenefits = (text: string): string => {
    const cleanedText = text.replace(/[\n]/g, '');
    const items = cleanedText.split('•').slice(1).map(item => item.trim());
    const result = items.join(' ~ ');

    return result;
}

export const downloadBase64File = (base64Data: string, filename: string, mimeType: string) => {
    const link = document.createElement('a');
    link.href = `data:${mimeType};base64,${base64Data}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

export const getBackgroundColor = (letter:string) => {
    const colorMap: Record<string,string>  = {
        A: 'bg-gray-300',
        B: 'bg-green-300',
        C: 'bg-blue-300',
        D: 'bg-yellow-300',
        E: 'bg-indigo-300',
        F: 'bg-pink-300',
        G: 'bg-purple-300',
        H: 'bg-red-300',
        I: 'bg-teal-300',
        J: 'bg-amber-300',
        K: 'bg-lime-300',
        L: 'bg-cyan-300',
        M: 'bg-red-300',
        N: 'bg-emerald-300',
        O: 'bg-violet-300',
        P: 'bg-fuchsia-300',
        Q: 'bg-purple-300',
        R: 'bg-amber-300',
        S: 'bg-lime-300',
        T: 'bg-sky-300',
        U: 'bg-brown-300',
        V: 'bg-green-300',
        W: 'bg-blue-300',
        X: 'bg-pink-300',
        Y: 'bg-rose-300',
        Z: 'bg-cyan-300'
    };

    return colorMap[letter.toUpperCase()] || 'bg-gray-300'; // Default to gray if no specific color is defined
};

export const convertToCoverTypeEnumValue = (coverType: string): string => {
    const enumKey = Object.keys(TravelCoverType).find(key => key === coverType);
    return enumKey ? TravelCoverType[enumKey as keyof typeof TravelCoverType] : "Unknown Trip Type";
}

export const stringToTravelType = (value: string): TravelType => {
        const map: { [key: string]: TravelType } = {
            Group: TravelType.GROUP,
            Family: TravelType.FAMILY,
            Individual: TravelType.INDIVIDUAL,
            Student: TravelType.STUDENT,
        };
        return map[value];
}

declare global {
    interface String {
        toTitle(): string;
    }
}

String.prototype.toTitle = function (): string {
    return this.toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

export const convertUSDToKSH = (amountInUSD: number, rate: number) => 
    addCommasToNumbers(((amountInUSD * rate).toFixed(2)).toString())
