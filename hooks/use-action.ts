import { ActionState, FieldErrors } from "@/lib/create-safe-action";
import { useCallback, useState } from "react";

type Action<TInput, TOutput> = (
  data: TInput
) => Promise<ActionState<TInput, TOutput>>;

interface UseActionOptions<TOutput> {
  onSuccess?: (data: TOutput) => void;
  onError?: (error: string) => void;
  OnComplete?: () => void;
}

export const useAction = <TInput, TOutput>(
  action: Action<TInput, TOutput>,
  options: UseActionOptions<TOutput> = {}
) => {
  // 定义状态变量
  const [fieldErrors, setFieldErrors] = useState<
    FieldErrors<TInput> | undefined
  >(undefined);

  const [error, setError] = useState<string | undefined>(undefined);
  const [data, setData] = useState<TOutput | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // 定义执行函数
  const execute = useCallback(
    async (input: TInput) => {
      // 设置加载状态
      setIsLoading(true);

      try {
        // 执行操作并获取结果
        const result = await action(input);

        // 判断结果是否为空
        if (!result) {
          return;
        }

        // 更新字段错误信息
        setFieldErrors(result.fieldErrors);

        // 判断是否有错误信息
        if (result.error) {
          setError(result.error);
          options.onError?.(result.error);
        }

        // 更新数据信息
        if (result.data) {
          setData(result.data);
          options.onSuccess?.(result.data);
        }
      } finally {
        // 设置加载状态为false
        setIsLoading(false);
        options.OnComplete?.();
      }
    },
    [action, options]
  );

  return {
    fieldErrors,
    error,
    data,
    isLoading,
    execute,
  };
};
