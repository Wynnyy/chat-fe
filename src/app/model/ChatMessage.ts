export interface ChatMessage {
  id: number;
  created: Date;
  updated: Date;
  chatId: string;
  senderId: string;
  recipientId: string;
  message: string;
}
