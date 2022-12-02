export namespace Tuple {
  export function first<R>(tuple: [R, ...any[]]) {
    return tuple[0];
  }

  export function second<R>(tuple: [any, R, ...any[]]) {
    return tuple[1];
  }
}
