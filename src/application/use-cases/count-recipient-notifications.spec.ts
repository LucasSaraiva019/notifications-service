import { CountRecipientNotifications } from './count-recipient-notifications';
import { CancelNotification } from './cancel-notification';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { Notification } from '@application/entities/notification';
import { Content } from '@application/entities/content';
import { makeNotification } from '@test/factories/notification-factory';

describe('Count recipients notification', () => {
  it('should be able count recipients notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );
    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-1' }),
    );
    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-1' }),
    );
    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-2' }),
    );
    const { count } = await countRecipientNotifications.execute({
      recipienteId: 'recipient-1',
    });

    expect(count).toEqual(2);
  });
});
