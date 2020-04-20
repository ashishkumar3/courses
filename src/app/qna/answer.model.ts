export interface Answer {
    id: number;
    title: string;
    description: string;
    rating: number;
    user_id: number;
    question_id: number;
    answer_by?: string;
    created_at: string;
    updated_at: string;
    deleted_at: string;
}