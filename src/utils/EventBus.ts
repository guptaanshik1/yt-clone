/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
import {useEffect, useMemo} from 'react';

interface EventBusInterface {
  fireEvent(eventName: string, data?: any): void;
  addListener(eventName: string, listener: any): void;
  removeListener(listener: any): void;
}

/**
 * EventBus, cross-interface communication solution
 * {eventName1:[listener1,listener2],eventName2:[listener3,listener4]}
 */
export default class EventBus implements EventBusInterface {
  static instance: EventBus;

  eventListeners: {[eventName: string]: Array<(arg?: any) => void>};

  static getInstance() {
    if (typeof EventBus.instance === 'object') {
      return EventBus.instance;
    }
    return new EventBus();
  }

  constructor() {
    this.eventListeners = {};
    if (typeof EventBus.instance === 'object') {
      return EventBus.instance;
    }
    EventBus.instance = this;
  }

  /**
   * Emit/Fire an event with event data
   * @param eventName string
   * @param data event payload (optional)
   */
  fireEvent(eventName: string | number, data?: any) {
    const listeners = this.eventListeners[eventName];
    if (Array.isArray(listeners)) {
      listeners.forEach(listener => {
        if (typeof listener === 'function') {
          listener(data);
        }
      });
    }
  }

  /**
   * Register an event listener
   * @param eventName string
   * @param listener function
   */
  addListener(
    eventName: string | number,
    listener: {(arg?: any): void; (arg?: any): void},
  ) {
    const listeners = this.eventListeners[eventName];
    if (Array.isArray(listeners)) {
      listeners.push(listener);
    } else {
      this.eventListeners[eventName] = [listener];
    }
  }

  /**
   * Unregister an event listener if exists
   * @param listener function
   */
  removeListener(listener: {(arg?: any): void; (arg?: any): void}) {
    Object.keys(this.eventListeners).forEach(eventName => {
      const listeners = this.eventListeners[eventName];
      this._remove(listeners, listener);
      if (listeners.length === 0) {
        delete this.eventListeners[eventName];
      }
    });
  }

  /**
   * Internally used utility
   * * */
  private _remove(array: any[], item: any) {
    if (!array) {
      return;
    }
    for (let i = 0, l = array.length; i < l; i += 1) {
      if (item === array[i]) {
        array.splice(i, 1);
      }
    }
  }
}

/**
 * useEventBus hook
 * takes in an options object of eventNames as key and corresponding listener as value
 * returns reference to event dispatcher (fireEvent)
 * @param options object map of eventName and corresponding listener
 */
export const useEventBus = (options: any) => {
  const memoizedInstance = useMemo(() => EventBus.getInstance(), []);
  const memoizedOptions = useMemo(() => options, [options]);
  useEffect(() => {
    Object.keys(memoizedOptions).forEach(eventName => {
      memoizedInstance.addListener(eventName, memoizedOptions[eventName]);
    });
    return () => {
      Object.keys(memoizedOptions).forEach(eventName => {
        memoizedInstance.removeListener(memoizedOptions[eventName]);
      });
    };
  }, [memoizedInstance, memoizedOptions]);
  return memoizedInstance.fireEvent;
};
