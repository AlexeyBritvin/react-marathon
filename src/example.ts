type ConcatFn = (str1: string, str2: string) => string

interface HomeWork {
  howIDoIt: string
  simeArray: Array<string | number>
}

interface HomeWorkWithData extends HomeWork {
  withData: HomeWork[]
}

type ReduceCallback<N, T> = (accumulator: N, currentValue: T, index: number, array: T[]) => N

interface MyArray<T> {
	[N: number]: T;

	reduce: <N>(fn: ReduceCallback<T, N>, zeroValue: T) => N
}
