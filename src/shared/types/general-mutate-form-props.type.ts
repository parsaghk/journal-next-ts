export type TGeneralMutateFormProps<K, V = K> = {
  onFinish: (inputs: K) => void;
  initialValues?: V;
};
