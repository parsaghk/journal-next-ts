export function filterSelectInput(
  input: string,
  option?: { children: string }
): boolean {
  return (
    (option?.children.toLowerCase() ?? ('' as string)) as string
  ).includes(input.toLowerCase());
}
