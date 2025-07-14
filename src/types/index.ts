export interface ApiTest {
  id: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  endpoint: string;
  headers: Record<string, string>;
  body?: string;
  response?: {
    status: number;
    data: any;
    timestamp: string;
  };
}
