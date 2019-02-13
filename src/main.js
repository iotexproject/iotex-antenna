// @flow
import window from 'global/window';

export function delayedHello(name: string, delay: number = 2000): Promise<string> {
  return new Promise(resolve => window.setTimeout(() => resolve(`Hello, ${name}`), delay));
}
