<template>
  <div class="flex flex-col gap-4 p-4">
    <SkDivider text="默认发丝线" />
    <SkDivider text="关闭发丝线" :hairline="false" />
    <SkDivider text="自定义粗细" :hairline="false" thickness="4px" />
  </div>
</template>
