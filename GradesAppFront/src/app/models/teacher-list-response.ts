// Generated by https://quicktype.io

export interface TeacherListResponse {
    content: Teacher[];
    size: number;
    totalElements: number;
    pageNumber: number;
    first: boolean;
    last: boolean;
}

export interface Teacher {
    id: string;
    nombre: string;
    apellidos: string;
    email: string;
    titulacion: null | string;
}
