<script lang="ts">
/**
 * sk-divider 组件 - 分割线
 *
 * @author xiaoxiaohuayu
 * @github https://github.com/xiaoxiaohuayu
 *
 * @example
 * ```vue
 * <sk-divider text="标题" content-position="start" />
 * ```
 *
 * @see 更多示例请参考文档: https://skiyee-ui.netlify.app/docs/components/basic/divider
 */

import type { CSSProperties } from 'vue'

import type { SkDividerUcvProps } from '../styles'

export interface SkDividerProps {
  /**
   * 文本内容
   */
  text?: string | number;
  /**
   * 线条与默认文本的颜色
   */
  color?: string;
  /**
   * 文本颜色，优先级高于 color
   */
  textColor?: string;
  /**
   * 方向
   * @default 'horizontal'
   */
  orientation?: SkDividerUcvProps['orientation'];
  /**
   * 文本位置，仅在横向模式下生效
   * @default 'center'
   */
  contentPosition?: SkDividerUcvProps['contentPosition'];
  /**
   * 是否为虚线
   * @default false
   */
  dashed?: boolean;
  /**
   * 纵向分割线的长度
   */
  length?: string | number;
  /**
   * 分割线粗细
   * @default '1px'
   */
  thickness?: string | number;
  /**
   * 是否使用 1px 发丝线样式
   * @default true
   */
  hairline?: boolean;
  /**
   * 用于拓展当前基础样式
   */
  clax?: SkDividerUcvProps['clax'];
}

export interface SkDividerSlots {
  default?: () => any;
}
</script>

<script setup lang="ts">
import { computed } from 'vue'

import { SkDividerUcv } from '../styles'

defineOptions({
  inheritAttrs: false,
  options: {
    virtualHost: true,
  },
})

const props = withDefaults(defineProps<SkDividerProps>(), {
  orientation: 'horizontal',
  contentPosition: 'center',
  dashed: false,
  hairline: true,
})

const slots = defineSlots<SkDividerSlots>()

const isVertical = computed(() => props.orientation === 'vertical')

const displayText = computed(() => {
  if (props.text === undefined || props.text === null) {
    return ''
  }
  return String(props.text)
})

const hasContent = computed<boolean>(() => {
  return Boolean(slots.default) || displayText.value.length > 0
})

const normalizedThickness = computed(() => {
  if (props.hairline) {
    return '1px'
  }
  return toUnit(props.thickness, '1px')
})
const verticalLength = computed(() => toUnit(props.length))

const lineColor = computed(() => props.color)
const contentColor = computed(() => props.textColor ?? props.color)

const classes = computed(() =>
  SkDividerUcv({
    ...props,
    hasContent: hasContent.value,
  }),
)

const horizontalLineStyle = computed<CSSProperties | undefined>(() => {
  if (isVertical.value) {
    return undefined
  }
  return {
    borderTopWidth: normalizedThickness.value,
    borderColor: lineColor.value,
  }
})

const verticalLineStyle = computed<CSSProperties | undefined>(() => {
  if (!isVertical.value) {
    return undefined
  }
  return {
    borderLeftWidth: normalizedThickness.value,
    borderColor: lineColor.value,
    height: verticalLength.value ?? '100%',
  }
})

const rootStyle = computed<CSSProperties | undefined>(() => {
  if (isVertical.value && verticalLength.value) {
    return {
      minHeight: verticalLength.value,
    }
  }
  return undefined
})

const contentStyle = computed<CSSProperties | undefined>(() => {
  if (!contentColor.value) {
    return undefined
  }
  return {
    color: contentColor.value,
  }
})

function toUnit(value?: string | number, fallback?: string) {
  if (value === undefined || value === null || value === '') {
    return fallback
  }
  return typeof value === 'number' ? `${value}px` : value
}
</script>

<template>
  <div :class="classes.root()" :style="rootStyle">
    <template v-if="!isVertical">
      <div :class="classes.leftLine()" :style="horizontalLineStyle" />
      <div v-if="hasContent" :class="classes.content()" :style="contentStyle">
        <slot>
          {{ displayText }}
        </slot>
      </div>
      <div :class="classes.rightLine()" :style="horizontalLineStyle" />
    </template>
    <template v-else>
      <div v-if="hasContent" :class="classes.content()" :style="contentStyle">
        <slot>
          {{ displayText }}
        </slot>
      </div>
      <div :class="classes.vertical()" :style="verticalLineStyle" />
    </template>
  </div>
</template>
