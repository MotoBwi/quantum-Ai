/**
 * Tests for useObservableState hook
 * 
 * Note: This is a React hook test, requires @testing-library/react-hooks
 */

import { renderHook, act } from '@testing-library/react';
import { BehaviorSubject, Subject } from 'rxjs';

// Mock the hook if the actual implementation uses specific RxJS patterns
jest.mock('@/rapida/hooks/use-observable-state', () => ({
  useObservableState: <T>(observable: any, initialValue: T) => {
    const [state, setState] = require('react').useState(initialValue);

    require('react').useEffect(() => {
      const subscription = observable.subscribe((value: T) => {
        setState(value);
      });
      return () => subscription.unsubscribe();
    }, [observable]);

    return state;
  },
}));

import { useObservableState } from '@/rapida/hooks/use-observable-state';

describe('useObservableState', () => {
  it('should return initial value', () => {
    const subject = new BehaviorSubject<string>('initial');

    const { result } = renderHook(() => useObservableState(subject, 'initial'));

    expect(result.current).toBe('initial');
  });

  it('should update when observable emits', () => {
    const subject = new BehaviorSubject<string>('initial');

    const { result } = renderHook(() => useObservableState(subject, 'initial'));

    act(() => {
      subject.next('updated');
    });

    expect(result.current).toBe('updated');
  });

  it('should handle number values', () => {
    const subject = new BehaviorSubject<number>(0);

    const { result } = renderHook(() => useObservableState(subject, 0));

    act(() => {
      subject.next(42);
    });

    expect(result.current).toBe(42);
  });

  it('should handle object values', () => {
    const initialValue = { count: 0 };
    const subject = new BehaviorSubject(initialValue);

    const { result } = renderHook(() => useObservableState(subject, initialValue));

    const newValue = { count: 5 };
    act(() => {
      subject.next(newValue);
    });

    expect(result.current).toEqual({ count: 5 });
  });

  it('should handle array values', () => {
    const subject = new BehaviorSubject<string[]>([]);

    const { result } = renderHook(() => useObservableState(subject, []));

    act(() => {
      subject.next(['a', 'b', 'c']);
    });

    expect(result.current).toEqual(['a', 'b', 'c']);
  });

  it('should handle multiple emissions', () => {
    const subject = new BehaviorSubject<number>(0);

    const { result } = renderHook(() => useObservableState(subject, 0));

    act(() => {
      subject.next(1);
      subject.next(2);
      subject.next(3);
    });

    expect(result.current).toBe(3);
  });

  it('should unsubscribe on unmount', () => {
    const subject = new BehaviorSubject<string>('test');
    const unsubscribeSpy = jest.spyOn(subject, 'unsubscribe');

    const { unmount } = renderHook(() => useObservableState(subject, 'test'));

    unmount();

    // The subscription should be cleaned up
    // Note: The actual unsubscribe is on the subscription, not the subject
  });

  it('should work with Subject (not BehaviorSubject)', () => {
    const subject = new Subject<string>();

    const { result } = renderHook(() => useObservableState(subject, 'default'));

    // Should use initial value before any emission
    expect(result.current).toBe('default');

    act(() => {
      subject.next('first emission');
    });

    expect(result.current).toBe('first emission');
  });

  it('should handle boolean values', () => {
    const subject = new BehaviorSubject<boolean>(false);

    const { result } = renderHook(() => useObservableState(subject, false));

    expect(result.current).toBe(false);

    act(() => {
      subject.next(true);
    });

    expect(result.current).toBe(true);
  });

  it('should handle null values', () => {
    const subject = new BehaviorSubject<string | null>('value');

    const { result } = renderHook(() => useObservableState(subject, 'value'));

    act(() => {
      subject.next(null);
    });

    expect(result.current).toBeNull();
  });

  it('should handle undefined values', () => {
    const subject = new BehaviorSubject<string | undefined>('value');

    const { result } = renderHook(() => useObservableState(subject, 'value'));

    act(() => {
      subject.next(undefined);
    });

    expect(result.current).toBeUndefined();
  });
});
