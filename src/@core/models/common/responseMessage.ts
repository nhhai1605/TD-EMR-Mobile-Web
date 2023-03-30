// export interface ToggleMessage {
//   type: MessageType;
//   code?: number | string;
//   message: string;
// }

// export type MessageType = 'success' | 'error' | 'warning' | 'info' | 'default';

export interface IMessage {
  type: "success" | "error";
  message: string;
}

export interface ValidationError {
  Field: string;
  Message: string;
}

export class ApiError {
  constructor(
    public Message?: string,
    public Status?: any,
    public Detail?: string,
    public ValidationErrors?: ValidationError[]
  ) {}
}
