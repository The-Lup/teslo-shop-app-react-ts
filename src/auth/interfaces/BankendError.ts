export interface BackendError {
  statusCode: number;
  message: string | string[];
  error: string;
}
