/* eslint-disable no-console */
import { add, pow } from '@yarn-workspaces/sub';

export default function app(): string {
  return [`1 + 1 = ${add(1, 1)}`, `2 ** 2 = ${pow(2, 2)}`].join('\n');
}
