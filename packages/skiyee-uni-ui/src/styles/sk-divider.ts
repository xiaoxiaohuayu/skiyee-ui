// @unocss-include
/**
 * sk-divider 由 @skiyee/ucv 生成的样式组件
 *
 * @author xiaoxiaohuayu
 * @github https://github.com/xiaoxiaohuayu
 *
 * @example
 * ```ts
 * const classes = SkDividerUcv(props)
 * ```
 *
 * @see 更多示例请参考文档: https://skiyee-ui.netlify.app/docs/components/basic/divider
 */

import type { InferProps } from '@skiyee/ucv'

import { ucv } from '@skiyee/ucv'

export const SkDividerUcv = ucv({
  element: {
    root: 'sk-element:w-full flex items-center text-description sk-unit:py-12',
    leftLine: 'flex-1 border-t border-solid border-subtle h-0',
    rightLine: 'flex-1 border-t border-solid border-subtle h-0',
    content: 'sk-unit:px-12 text-body-small text-secondary whitespace-nowrap',
    vertical: 'w-0 border-l border-solid border-subtle self-stretch',
  },
  variants: {
    orientation: {
      horizontal: {
        root: 'w-full flex-row',
        vertical: 'hidden',
        leftLine: 'flex-1',
        rightLine: 'flex-1',
      },
      vertical: {
        root: 'inline-flex flex-col items-center gap-2 sk-unit:px-8',
        leftLine: 'hidden',
        rightLine: 'hidden',
        content: 'sk-unit:py-8 text-center',
        vertical: 'block',
      },
    },
    dashed: {
      true: {
        leftLine: 'border-dashed',
        rightLine: 'border-dashed',
        vertical: 'border-dashed',
      },
      false: {},
    },
    contentPosition: {
      start: {
        leftLine: 'hidden',
        content: 'pl-0',
        rightLine: 'flex-1',
      },
      center: {
        leftLine: 'flex-1',
        rightLine: 'flex-1',
      },
      end: {
        rightLine: 'hidden',
        content: 'pr-0',
        leftLine: 'flex-1',
      },
    },
    hasContent: {
      true: {},
      false: {
        content: 'hidden',
      },
    },
  },
  defaults: {
    orientation: 'horizontal',
    contentPosition: 'center',
    dashed: false,
    hasContent: true,
  },
})

export type SkDividerUcvProps = InferProps<typeof SkDividerUcv>
