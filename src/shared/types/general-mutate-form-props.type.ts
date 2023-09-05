export type TGeneralMutateFormProps<K, V = K> = {
  isLoading?: boolean;
  onFinish: (inputs: K) => void;
  initialValues?: V;
};
