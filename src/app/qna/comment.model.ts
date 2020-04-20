export interface Comment {
    id: number;
    answer_id: number;
    question_id: number;
    description: string;
    rating: number;
    user_id: number;
    comment_by?: string;
    created_at: string;
    updated_at: string;
    deleted_at: string;
}