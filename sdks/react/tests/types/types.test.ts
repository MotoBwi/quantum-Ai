/**
 * Tests for TypeScript types and enums
 */

import { Channel } from '@/rapida/types/channel';
import { ConnectionState } from '@/rapida/types/connection-state';
import { MessageRole, MessageStatus, Message } from '@/rapida/types/message';

describe('Channel enum', () => {
  it('should have Text channel', () => {
    expect(Channel.Text).toBe('text');
  });

  it('should have Audio channel', () => {
    expect(Channel.Audio).toBe('audio');
  });

  it('should only have two values', () => {
    const values = Object.values(Channel);
    expect(values).toHaveLength(2);
    expect(values).toContain('text');
    expect(values).toContain('audio');
  });
});

describe('ConnectionState enum', () => {
  it('should have Disconnected state', () => {
    expect(ConnectionState.Disconnected).toBe('disconnected');
  });

  it('should have Connecting state', () => {
    expect(ConnectionState.Connecting).toBe('connecting');
  });

  it('should have Connected state', () => {
    expect(ConnectionState.Connected).toBe('connected');
  });

  it('should only have three values', () => {
    const values = Object.values(ConnectionState);
    expect(values).toHaveLength(3);
    expect(values).toContain('disconnected');
    expect(values).toContain('connecting');
    expect(values).toContain('connected');
  });
});

describe('MessageRole enum', () => {
  it('should have System role', () => {
    expect(MessageRole.System).toBe('system');
  });

  it('should have User role', () => {
    expect(MessageRole.User).toBe('user');
  });
});

describe('MessageStatus enum', () => {
  it('should have Pending status', () => {
    expect(MessageStatus.Pending).toBe('pending');
  });

  it('should have Complete status', () => {
    expect(MessageStatus.Complete).toBe('complete');
  });
});

describe('Message interface', () => {
  it('should allow creating a valid message', () => {
    const message: Message = {
      id: 'msg-123',
      role: MessageRole.User,
      messages: ['Hello', 'World'],
      time: new Date(),
      status: MessageStatus.Complete,
    };

    expect(message.id).toBe('msg-123');
    expect(message.role).toBe(MessageRole.User);
    expect(message.messages).toHaveLength(2);
    expect(message.status).toBe(MessageStatus.Complete);
  });

  it('should allow optional feedback', () => {
    const messageWithFeedback: Message = {
      id: 'msg-456',
      role: MessageRole.System,
      messages: ['Response'],
      time: new Date(),
      status: MessageStatus.Complete,
      feedback: {
        messageId: 'msg-456',
        rating: 5,
        comment: 'Great!',
      } as any,
    };

    expect(messageWithFeedback.feedback).toBeDefined();
  });

  it('should create pending message', () => {
    const pendingMessage: Message = {
      id: 'msg-pending',
      role: MessageRole.System,
      messages: ['Loading...'],
      time: new Date(),
      status: MessageStatus.Pending,
    };

    expect(pendingMessage.status).toBe(MessageStatus.Pending);
  });
});
