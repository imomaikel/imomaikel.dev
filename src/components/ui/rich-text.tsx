import { Fragment } from 'react';
import { TodoChip } from './todo-chip';

const TODO = /\{todo:([^}]+)\}/g;

export function RichText({ children }: { children: string }) {
  const parts = children.split(TODO);
  return parts.map((part, i) =>
    i % 2 === 1 ? <TodoChip key={i}>{part}</TodoChip> : <Fragment key={i}>{part}</Fragment>,
  );
}
