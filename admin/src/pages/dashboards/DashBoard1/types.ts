// types.ts

export interface Message {
    id: number;
    avatar: string;
    sender: string;
    text: string;
    time: string;
}

export interface ProjectDetail {
    id: number;
    name: string;
    startDate: string;
    dueDate: string;
    status: string;
    variant: string;
    clients: string;
}

// Define Application type
export interface Application {
    id: number;
    status: 'In Progress' | 'Need Documents' | 'Approved' | 'Denied' | 'Dropped';
    processor: string;
    requiredDocuments: boolean;
}
