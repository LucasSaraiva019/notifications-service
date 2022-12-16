import { NotificationNotFound } from './errors/notification-not-found';
import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '@application/repositories/notifications-repository';

interface CountRecipientNotificationsRequest {
  recipienteId: string;
}

interface CountRecipientNotificationsResponse {
  count: number;
}

@Injectable()
export class CountRecipientNotifications {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: CountRecipientNotificationsRequest,
  ): Promise<CountRecipientNotificationsResponse> {
    const { recipienteId } = request;
    const count = await this.notificationsRepository.countManyByRecipientId(
      recipienteId,
    );

    return {
      count,
    };
  }
}
