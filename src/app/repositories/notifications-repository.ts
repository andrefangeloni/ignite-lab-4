import { Notification } from '../entities/notification';

export abstract class NotificationsRepository {
  abstract save(notification: Notification): Promise<void>;
  abstract create(notification: Notification): Promise<void>;
  abstract findById(notificationId: string): Promise<Notification | null>;
}
