import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '@application/repositories/notifications-repository';
import { Notification } from '@application/entities/notification';

interface GetRecipientNotificationsRequest {
  recipienteId: string;
}

interface GetRecipientNotificationsResponse {
  notifications: Notification[];
}

@Injectable()
export class GetRecipientNotifications {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: GetRecipientNotificationsRequest,
  ): Promise<GetRecipientNotificationsResponse> {
    const { recipienteId } = request;
    const notifications =
      await this.notificationsRepository.getManyByRecipientId(recipienteId);

    return {
      notifications,
    };
  }
}
