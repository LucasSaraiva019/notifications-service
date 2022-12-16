import { Notification } from '@application/entities/notification';

export abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>;
  abstract findById(notificationId: string): Promise<Notification | null>;
  abstract getManyByRecipientId(recipientId: string): Promise<Notification[]>;
  abstract save(notification: Notification): Promise<void>;
  abstract countManyByRecipientId(recipientId: string): Promise<number>;
}
