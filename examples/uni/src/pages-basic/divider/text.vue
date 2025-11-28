<template>
  <div class="flex flex-col gap-6 p-4">
    <div class="flex flex-col gap-4">
      <SkDivider text="今日推荐" />
      <SkDivider text="左侧标签" content-position="start" />
      <SkDivider text="右侧标签" content-position="end" />
    </div>

    <div class="flex flex-col gap-4">
      <SkDivider text="品牌橙" color="#FF7A18" />
      <SkDivider text="专属文案" text-color="#10B981" />
    </div>

    <div class="flex flex-col gap-4">
      <SkDivider>
        <div class="flex items-center gap-2 text-secondary text-body-small">
          <SkIcon name="i-lucide:sparkles" size="32rpx" />
          <span>自定义插槽</span>
        </div>
      </SkDivider>
      <SkDivider>
        <div class="flex items-center gap-2 text-tertiary text-body-small">
          <SkIcon name="i-lucide:clock-10" size="30rpx" />
          <span>09:00-12:00</span>
        </div>
      </SkDivider>
      <SkDivider>
        <div class="flex items-center gap-2 text-secondary text-body-small">
          <span class="px-3 py-1 rounded-full bg-primary/10 text-primary text-caption">
            进行中
          </span>
        </div>
      </SkDivider>
    </div>
  </div>
</template>
