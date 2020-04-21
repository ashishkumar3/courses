export interface Question {
    id: number;
    title: string;
    description: string;
    rating: number;
    user_id: number;
    question_by?: string;
    created_at: string;
    updated_at: string;
    deleted_at?: string;
}